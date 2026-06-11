import { useCallback, useEffect, useRef, useState } from 'react';
import { clsx } from 'clsx';
import { Button } from '../primitives/Button';
import { Avatar } from '../primitives/Avatar';
import { ActionMenu } from '../overlay/ActionMenu';
import { ArrowCircleUpIcon } from '../primitives/icons/ArrowCircleUpIcon';
import { AtSignIcon } from '../primitives/icons/AtSignIcon';
import { Tooltip } from '../overlay/Tooltip';

export interface MentionUser {
  /** Stable identifier — used as the React key + the `data-user-id` on the
   *  rendered pill so consumers can read back which users were mentioned. */
  id: string;
  name: string;
  email?: string;
  /** Visual initials shown in the canonical Avatar. Defaults to the first
   *  letter of `name` when omitted. */
  initials?: string;
  /** Maps to canonical Avatar's `variant` axis. Defaults to `firm`. */
  variant?: 'firm' | 'client';
}

export interface CommentComposerProps {
  placeholder?: string;
  autoFocus?: boolean;
  defaultValue?: string;
  onSubmit?: (text: string) => void;
  onCancel?: () => void;
  /**
   * When provided, typing `@` opens a mention picker dropdown with these
   * users (filterable by the chars typed after `@`). Selecting a user inserts
   * an inline mention pill into the editor — backed by a `contentEditable`
   * surface so the pill can render with its canonical purple-tint styling.
   */
  mentionUsers?: MentionUser[];
  className?: string;
}

/**
 * Mention-pill visual tokens — extracted so both the live editor and the
 * Storybook seed renderer agree on the exact styling. Blue/info-tint surface
 * + tighter padding mirrors the Figma reference (Section 1, State 4 at
 * 2814:14983) and matches the brand accent rather than a status-purple tone.
 */
const MENTION_PILL_CLASS =
  'inline-flex items-center rounded px-1 bg-row-selected text-status-info-fg font-medium';

/** Filter mention users by a `@<query>` chars-after-`@` string (case-insensitive). */
function filterUsers(users: MentionUser[], query: string): MentionUser[] {
  if (!query) return users;
  const lowered = query.toLowerCase();
  return users.filter((u) => u.name.toLowerCase().includes(lowered));
}

/** Build the inline HTML for a single mention pill. Used by both interactive
 *  insertion and the `defaultValue` seed parser. */
function mentionPillHTML(user: MentionUser): string {
  return `<span class="${MENTION_PILL_CLASS}" contenteditable="false" data-user-id="${user.id}">@${user.name}</span>`;
}

/**
 * Convert a markdown-style seed string into pill HTML.
 * `Hello @[Jane Smith](u1) — welcome!`  →  `Hello <span class="...">@Jane Smith</span> — welcome!`
 * Lets stories seed initial values without writing raw HTML.
 */
function seedToHTML(seed: string): string {
  return seed.replace(/@\[([^\]]+)\]\(([^)]+)\)/g, (_, name, id) =>
    mentionPillHTML({ id, name }),
  );
}

export function CommentComposer({
  placeholder = 'Reply…',
  autoFocus,
  defaultValue,
  onSubmit,
  onCancel,
  mentionUsers = [],
  className,
}: CommentComposerProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [isEmpty, setIsEmpty] = useState(!defaultValue);
  const [pickerQuery, setPickerQuery] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const pickerOpen = pickerQuery !== null && mentionUsers.length > 0;
  const filteredUsers = pickerOpen ? filterUsers(mentionUsers, pickerQuery!) : [];

  // Seed the editor on mount.
  useEffect(() => {
    const editor = editorRef.current;
    if (!editor) return;
    if (defaultValue) {
      editor.innerHTML = seedToHTML(defaultValue);
      setIsEmpty(false);
      // Move caret to the very end of the seeded content so a subsequent
      // detect-mention pass sees `@<query>` immediately preceding the
      // caret — without this, the caret sits at offset 0 and the picker
      // never opens for seeds like `@` or `@B`.
      const sel = window.getSelection();
      if (sel) {
        const range = document.createRange();
        range.selectNodeContents(editor);
        range.collapse(false); // collapse to end
        sel.removeAllRanges();
        sel.addRange(range);
      }
      // Run detection so showcase stories with `@…` seeds auto-open the
      // picker on mount.
      const q = detectMention();
      if (q !== null) {
        setPickerQuery(q);
        setActiveIndex(0);
      }
    }
    if (autoFocus) editor.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Detect a `@<chars>` trigger immediately preceding the caret. The picker
  // opens for any `@word` token still in progress (no whitespace yet) so the
  // user can refine the filter as they type. Returns the active query string
  // (possibly empty when the caret sits right after `@`).
  const detectMention = useCallback(() => {
    const editor = editorRef.current;
    if (!editor || mentionUsers.length === 0) return null;
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) return null;
    const range = sel.getRangeAt(0);
    if (!editor.contains(range.endContainer)) return null;

    // Read text from start of editor to caret. Using a Range gives us a
    // flat string regardless of how DOM is split across text nodes / spans.
    const pre = document.createRange();
    pre.setStart(editor, 0);
    pre.setEnd(range.endContainer, range.endOffset);
    const textBefore = pre.toString();

    // Match the LAST `@<word>` with no whitespace after `@`. `\w` excludes
    // spaces so a completed mention `@Jane Smith` won't match here (`@Jane`
    // would, but only while the caret is still on that token).
    const match = /@([\w]*)$/.exec(textBefore);
    return match ? match[1] : null;
  }, [mentionUsers.length]);

  const handleInput = useCallback(() => {
    const editor = editorRef.current;
    if (!editor) return;
    setIsEmpty(!editor.innerText.trim());
    const q = detectMention();
    if (q !== null) {
      setPickerQuery(q);
      setActiveIndex(0);
    } else {
      setPickerQuery(null);
    }
  }, [detectMention]);

  /**
   * Replace the active `@<query>` substring with a mention pill node, then
   * place the caret right after the pill (separated by a space so the user
   * can keep typing without their next char being merged into the pill).
   */
  const insertMention = useCallback(
    (user: MentionUser) => {
      const editor = editorRef.current;
      if (!editor) return;
      const sel = window.getSelection();
      if (!sel || sel.rangeCount === 0) return;
      const range = sel.getRangeAt(0);
      const endNode = range.endContainer;
      const endOffset = range.endOffset;

      // Only handle the common case: caret inside a TEXT node ending in `@<q>`.
      if (endNode.nodeType !== Node.TEXT_NODE) return;
      const text = endNode.textContent ?? '';
      const atIndex = text.lastIndexOf('@', endOffset - 1);
      if (atIndex === -1) return;

      // Split the text node into: [before@] + [mention pill] + [space + after]
      const before = text.substring(0, atIndex);
      const after = text.substring(endOffset);

      const parent = endNode.parentNode;
      if (!parent) return;

      const beforeNode = document.createTextNode(before);
      const pill = document.createElement('span');
      pill.className = MENTION_PILL_CLASS;
      pill.contentEditable = 'false';
      pill.dataset.userId = user.id;
      pill.textContent = `@${user.name}`;
      // Leading space inside the after-text gives the caret somewhere safe
      // to land — avoids "stuck inside pill" edge cases.
      const afterNode = document.createTextNode(' ' + after);

      parent.insertBefore(beforeNode, endNode);
      parent.insertBefore(pill, endNode);
      parent.insertBefore(afterNode, endNode);
      parent.removeChild(endNode);

      // Move caret to just after the leading space → ready to keep typing.
      const newRange = document.createRange();
      newRange.setStart(afterNode, 1);
      newRange.collapse(true);
      sel.removeAllRanges();
      sel.addRange(newRange);

      setPickerQuery(null);
      setIsEmpty(false);
    },
    [],
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    // Picker keyboard nav — only when open.
    if (pickerOpen) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, filteredUsers.length - 1));
        return;
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
        return;
      }
      if (e.key === 'Enter' && filteredUsers[activeIndex]) {
        e.preventDefault();
        insertMention(filteredUsers[activeIndex]);
        return;
      }
      if (e.key === 'Escape') {
        e.preventDefault();
        setPickerQuery(null);
        return;
      }
    }

    // Composer-level shortcuts.
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      handleSubmit();
    }
    if (e.key === 'Escape') onCancel?.();
  };

  const handleSubmit = () => {
    const editor = editorRef.current;
    if (!editor) return;
    const text = editor.innerText.trim();
    if (!text) return;
    onSubmit?.(text);
    editor.innerHTML = '';
    setIsEmpty(true);
    setPickerQuery(null);
  };

  /**
   * Clicking the `@` toolbar button inserts an `@` at the caret (focusing the
   * editor first if needed) and then runs the same detect-mention pass that
   * keyboard input triggers — opening the picker with an empty query.
   */
  const handleMentionButton = () => {
    const editor = editorRef.current;
    if (!editor || mentionUsers.length === 0) return;
    editor.focus();
    document.execCommand('insertText', false, '@');
    // execCommand fires `input` so React handlers run; safe-guard fallback:
    handleInput();
  };

  // Build ActionMenu items from filtered users — each row is a 2-line item
  // (name + email) with the canonical Avatar as the leading icon. ActionMenu
  // already supports `selected` styling, which we drive from `activeIndex`
  // so keyboard nav highlights the right row. Avatar uses `sm` (32px) so the
  // initials read clearly alongside the 2-line name + email block.
  const menuItems = filteredUsers.map((u, idx) => ({
    label: u.name,
    description: u.email,
    selected: idx === activeIndex,
    icon: (
      <Avatar
        size="sm"
        variant={u.variant ?? 'firm'}
        initials={u.initials ?? u.name.charAt(0)}
      />
    ),
    onClick: () => insertMention(u),
  }));

  const hasText = !isEmpty;

  return (
    <div className={clsx('relative bg-surface rounded-card overflow-visible', className)}>
      {/*
        contentEditable editor — replaces the previous <textarea>. Rich
        rendering of mention pills isn't possible inside a textarea (which
        only renders plain text), so we use a contentEditable div and manage
        its DOM directly. `data-placeholder` + the empty-state CSS hook below
        give us native-style placeholder behaviour without a separate prompt
        element drifting from the caret position.
      */}
      <div
        ref={editorRef}
        role="textbox"
        aria-multiline="true"
        aria-label={placeholder}
        contentEditable
        suppressContentEditableWarning
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        data-placeholder={placeholder}
        data-empty={isEmpty || undefined}
        className={clsx(
          'block min-h-9 w-full bg-transparent px-3 py-2 text-body-sm text-primary focus:outline-none',
          // Empty-state placeholder via a CSS ::before sibling pulled from the
          // `data-placeholder` attribute. The `data-empty` attribute gates the
          // pseudo-element so it disappears the moment the user types.
          '[&[data-empty]]:before:content-[attr(data-placeholder)]',
          '[&[data-empty]]:before:text-muted',
          '[&[data-empty]]:before:pointer-events-none',
        )}
      />
      {/* Toolbar */}
      <div className="flex items-center justify-between px-2 h-9 border-t border-line-strong">
        <Tooltip content="Mention">
          <Button
            variant="ghost"
            size="sm"
            iconOnly
            aria-label="Mention"
            disabled={mentionUsers.length === 0}
            onClick={handleMentionButton}
            // Selected state — driven by the canonical Button `selected` prop
            // so the visual recipe (gray fill + blue stroke + blue glyph)
            // stays consistent across every toggleable ghost icon-only button.
            // `selected` also wires `aria-pressed=true` automatically.
            selected={pickerOpen}
            className="hover:!bg-recessed"
            startIcon={<AtSignIcon size="md" />}
          />
        </Tooltip>
        <Tooltip content="Send" side="top">
          <Button
            variant="ghost"
            size="sm"
            iconOnly
            disabled={!hasText}
            aria-label="Send"
            className={clsx(
              'rounded-pill hover:!bg-recessed',
              hasText ? '!text-action-primary' : '!text-muted',
            )}
            startIcon={<ArrowCircleUpIcon size="md" filled />}
            onClick={handleSubmit}
          />
        </Tooltip>
      </div>

      {/* Mention picker — absolutely-positioned ActionMenu dropping under the
          editor. Hidden when no @-trigger is active or no users provided. */}
      {pickerOpen && filteredUsers.length > 0 && (
        <div className="absolute left-0 top-full z-10 mt-1 w-full">
          <ActionMenu size="sm" groups={[{ items: menuItems }]} />
        </div>
      )}
    </div>
  );
}
