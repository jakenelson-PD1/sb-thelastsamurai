# Navigation Core — Figma Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build 6 Figma ComponentSets — Tab, Tabs, SidebarItem, Sidebar, NavItem, TopNav — with every color bound to the Semantic variable collection and every spacing/radius value bound to the Spacing/Radius variable collection.

**Architecture:** Each component is built by executing a Figma Plugin API script via `use_figma`. Scripts find the target page, remove any existing ComponentSet with the same name, rebuild from scratch with `createComponent()` + `combineAsVariants()`, apply Semantic color bindings via `setBoundVariableForPaint`, and apply Spacing/Radius float bindings via `setBoundVariable`. Assembled containers (Tabs, Sidebar, TopNav) consume instances of their atomic item components, so items must be built first. Each step is verified with `get_screenshot` against Storybook.

**Tech Stack:** Figma Plugin API (JavaScript), `use_figma` MCP tool, `get_screenshot` MCP tool, Storybook at `http://localhost:6006`

**Spec:** `docs/superpowers/specs/2026-04-17-navigation-core-design.md`
**Figma file key:** `ZP0lSeT5Nwm1lpWI79qIaf`
**Storybook stories:**
- `http://localhost:6006/?path=/story/navigation-tabs--default`
- `http://localhost:6006/?path=/story/navigation-sidebar--default`
- `http://localhost:6006/?path=/story/navigation-top-nav--default`

---

## Standard Helpers

Include at the top of every `use_figma` script in this plan:

```javascript
await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
await figma.loadFontAsync({ family: 'Inter', style: 'Medium' });

const collections = figma.variables.getLocalVariableCollections();
const semantic    = collections.find(c => c.name === 'Semantic');
const spacingColl = collections.find(c => c.name === 'Spacing');
const radiusColl  = collections.find(c => c.name === 'Radius');
const varByName = {}, spVars = {}, rVars = {};
for (const id of semantic.variableIds)    { const v = figma.variables.getVariableById(id); if (v) varByName[v.name] = v; }
for (const id of spacingColl.variableIds) { const v = figma.variables.getVariableById(id); if (v) spVars[v.name] = v; }
for (const id of radiusColl.variableIds)  { const v = figma.variables.getVariableById(id); if (v) rVars[v.name] = v; }

function vp(name) {
  const v = varByName[name];
  if (!v) { console.warn('Missing semantic var: ' + name); return { type: 'SOLID', color: { r: 1, g: 0, b: 1 } }; }
  return figma.variables.setBoundVariableForPaint({ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }, 'color', v);
}
function sp(node, prop, name) { const v = spVars[name]; if (!v) { console.warn('Missing spacing: ' + name); return; } node.setBoundVariable(prop, v); }
function rx(node, prop, name) { const v = rVars[name]; if (!v) { console.warn('Missing radius: ' + name); return; } node.setBoundVariable(prop, v); }
```

---

## Chunk 1: Tab + Tabs Bar

### Task 1: Tab (item) — 2 variants

**Figma page:** Tabs
**Spec:** Component 1 — `State=Active | State=Inactive`

- [ ] **Step 1: Run the Tab build script**

```javascript
await figma.loadFontAsync({ family: 'Inter', style: 'Medium' });

const collections = figma.variables.getLocalVariableCollections();
const semantic    = collections.find(c => c.name === 'Semantic');
const spacingColl = collections.find(c => c.name === 'Spacing');
const varByName = {}, spVars = {};
for (const id of semantic.variableIds)    { const v = figma.variables.getVariableById(id); if (v) varByName[v.name] = v; }
for (const id of spacingColl.variableIds) { const v = figma.variables.getVariableById(id); if (v) spVars[v.name] = v; }
function vp(name) {
  const v = varByName[name];
  if (!v) { console.warn('Missing: ' + name); return { type: 'SOLID', color: { r: 1, g: 0, b: 1 } }; }
  return figma.variables.setBoundVariableForPaint({ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }, 'color', v);
}
function sp(node, prop, name) { const v = spVars[name]; if (v) node.setBoundVariable(prop, v); }

const tabsPage = figma.root.children.find(p => p.name === 'Tabs');
if (!tabsPage) { console.error('Tabs page not found'); return; }
await figma.setCurrentPageAsync(tabsPage);

// Remove existing Tab ComponentSet
const existing = tabsPage.findOne(n => n.type === 'COMPONENT_SET' && n.name === 'Tab');
if (existing) existing.remove();

function makeTab(state) {
  const comp = figma.createComponent();
  comp.name = `State=${state}`;
  comp.layoutMode = 'HORIZONTAL';
  comp.primaryAxisSizingMode = 'AUTO';   // hug width
  comp.counterAxisSizingMode = 'AUTO';   // hug height — source has no explicit height; py-2 + 20px text = 36px naturally
  comp.fills = [];

  // paddingLeft/Right → scale/4 (16px), paddingTop/Bottom → scale/2 (8px)
  sp(comp, 'paddingLeft',   'scale/4');
  sp(comp, 'paddingRight',  'scale/4');
  sp(comp, 'paddingTop',    'scale/2');
  sp(comp, 'paddingBottom', 'scale/2');

  // Bottom stroke: 2px hardcoded, bottom side only, strokeAlign = OUTSIDE
  comp.strokeTopWeight    = 0;
  comp.strokeRightWeight  = 0;
  comp.strokeBottomWeight = 2;
  comp.strokeLeftWeight   = 0;
  comp.strokeAlign = 'OUTSIDE';

  // Label text — Inter Medium 14px / 20px
  const label = figma.createText();
  label.fontName = { family: 'Inter', style: 'Medium' };
  label.fontSize = 14;
  label.lineHeight = { value: 20, unit: 'PIXELS' };
  label.characters = 'Tab';
  comp.appendChild(label);

  if (state === 'Active') {
    label.fills  = [vp('action/primary')];
    comp.strokes = [vp('action/primary')];
  } else {
    label.fills  = [vp('fg/muted')];
    // Inactive bottom border: transparent — hardcoded (no Semantic variable for transparent)
    comp.strokes = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 }, opacity: 0 }];
  }

  return comp;
}

const active   = makeTab('Active');
const inactive = makeTab('Inactive');

const cs = figma.combineAsVariants([active, inactive], tabsPage);
cs.name = 'Tab';
cs.fills = [];
cs.paddingLeft = cs.paddingRight = cs.paddingTop = cs.paddingBottom = 40;
cs.itemSpacing = 40;

// Label component property — bound to text node in each variant
const labelKey = cs.addComponentProperty('Label', 'TEXT', 'Tab');
for (const variant of cs.children) {
  const t = variant.findOne(n => n.type === 'TEXT');
  if (t) t.componentPropertyReferences = { characters: labelKey };
}

console.log('Tab ComponentSet built. ID:', cs.id);
return cs.id;
```

- [ ] **Step 2: Screenshot and verify**

Take a screenshot of the Tab ComponentSet. Compare against Storybook.
Confirm each of the following in the Figma right panel (select the relevant variant/node):
- Active variant: text fill shows variable chip → `action/primary`
- Inactive variant: text fill shows variable chip → `fg/muted`
- Active variant: stroke color shows variable chip → `action/primary`
- Inactive variant: stroke color is hardcoded transparent (no chip — correct)
- Both variants: `paddingLeft` and `paddingRight` show variable chip → `scale/4`
- Both variants: `paddingTop` and `paddingBottom` show variable chip → `scale/2`
- `strokeBottomWeight` = 2px (top/right/left = 0px), `strokeAlign` = OUTSIDE

---

### Task 2: Tabs (bar) — 1 variant

**Figma page:** Tabs
**Spec:** Component 2 — assembled container
**Dependency:** Tab ComponentSet must exist on the Tabs page (Task 1 complete)

- [ ] **Step 1: Run the Tabs bar build script**

```javascript
await figma.loadFontAsync({ family: 'Inter', style: 'Medium' });

const collections = figma.variables.getLocalVariableCollections();
const semantic    = collections.find(c => c.name === 'Semantic');
const varByName   = {};
for (const id of semantic.variableIds) { const v = figma.variables.getVariableById(id); if (v) varByName[v.name] = v; }
function vp(name) {
  const v = varByName[name];
  if (!v) { console.warn('Missing: ' + name); return { type: 'SOLID', color: { r: 1, g: 0, b: 1 } }; }
  return figma.variables.setBoundVariableForPaint({ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }, 'color', v);
}

const tabsPage = figma.root.children.find(p => p.name === 'Tabs');
await figma.setCurrentPageAsync(tabsPage);

// Remove existing Tabs ComponentSet
const existingTabs = tabsPage.findOne(n => n.type === 'COMPONENT_SET' && n.name === 'Tabs');
if (existingTabs) existingTabs.remove();

// Locate Tab variants
const tabCS = tabsPage.findOne(n => n.type === 'COMPONENT_SET' && n.name === 'Tab');
if (!tabCS) { console.error('Tab ComponentSet not found — complete Task 1 first'); return; }
const activeTab   = tabCS.children.find(v => v.variantProperties?.State === 'Active');
const inactiveTab = tabCS.children.find(v => v.variantProperties?.State === 'Inactive');

// Build Tabs bar component
const comp = figma.createComponent();
comp.name = 'State=Default';
comp.layoutMode = 'HORIZONTAL';
comp.primaryAxisSizingMode = 'AUTO';
comp.counterAxisSizingMode = 'AUTO';
comp.fills = [];
comp.itemSpacing = 0; // hardcoded — tabs are flush, no scale/0 variable

// Bottom stroke: 1px, border/default, INSIDE
comp.strokeTopWeight    = 0;
comp.strokeRightWeight  = 0;
comp.strokeBottomWeight = 1;
comp.strokeLeftWeight   = 0;
comp.strokeAlign = 'INSIDE';
comp.strokes = [vp('border/default')];

// Add 3 Tab instances: first Active, then 2 Inactive
// marginBottom = -1 on each instance so the tab's 2px bottom stroke overlaps the bar's 1px border
for (const [i, variant] of [activeTab, inactiveTab, inactiveTab].entries()) {
  const inst = variant.createInstance();
  comp.appendChild(inst);
  // -mb-px: the instance sits -1px below the bar bottom, letting its own 2px stroke
  // overlap the 1px bar border and produce the "active underline" visual
  try { inst.marginBottom = -1; } catch(e) { console.warn('marginBottom not applied — verify overlap manually:', e); }
}

const cs = figma.combineAsVariants([comp], tabsPage);
cs.name = 'Tabs';
cs.fills = [];
cs.paddingLeft = cs.paddingRight = cs.paddingTop = cs.paddingBottom = 40;
cs.itemSpacing = 40;

// Label component property — propagated to Tab instances inside the bar
const labelKey = cs.addComponentProperty('Label', 'TEXT', 'Tab');
// Wire Tabs Label to each Tab instance's text node so editing Label at the Tabs level updates all tabs
for (const variant of cs.children) {
  for (const inst of variant.findAll(n => n.type === 'INSTANCE')) {
    const t = inst.findOne(n => n.type === 'TEXT');
    if (t) t.componentPropertyReferences = { characters: labelKey };
  }
}

console.log('Tabs bar built. ID:', cs.id);
return cs.id;
```

- [ ] **Step 2: Screenshot and verify**

Take screenshot. Compare with Storybook tabs story.
Confirm visually:
- Horizontal row of 3 tabs: first Active (blue text + underline), two Inactive (muted)
- 1px bottom border across the full bar
- Tabs flush together (no gap)
- Active tab underline visually overlaps the bar border (no gap between the 2px tab stroke and the 1px bar border)

Confirm in Figma right panel:
- Tabs bar bottom stroke color: variable chip → `border/default`
- `itemSpacing` = 0 hardcoded (no chip — correct)
- Each Tab instance `marginBottom` = −1 (hardcoded, no chip — correct; if console shows a warning, verify overlap visually)

---

## Chunk 2: SidebarItem + Sidebar

### Task 3: SidebarItem — 3 variants

**Figma page:** Sidebar
**Spec:** Component 3 — `State=Active | State=Inactive | State=Hover`

- [ ] **Step 1: Run the SidebarItem build script**

```javascript
await figma.loadFontAsync({ family: 'Inter', style: 'Medium' });

const collections = figma.variables.getLocalVariableCollections();
const semantic    = collections.find(c => c.name === 'Semantic');
const spacingColl = collections.find(c => c.name === 'Spacing');
const radiusColl  = collections.find(c => c.name === 'Radius');
const varByName = {}, spVars = {}, rVars = {};
for (const id of semantic.variableIds)    { const v = figma.variables.getVariableById(id); if (v) varByName[v.name] = v; }
for (const id of spacingColl.variableIds) { const v = figma.variables.getVariableById(id); if (v) spVars[v.name] = v; }
for (const id of radiusColl.variableIds)  { const v = figma.variables.getVariableById(id); if (v) rVars[v.name] = v; }
function vp(name) {
  const v = varByName[name];
  if (!v) { console.warn('Missing: ' + name); return { type: 'SOLID', color: { r: 1, g: 0, b: 1 } }; }
  return figma.variables.setBoundVariableForPaint({ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }, 'color', v);
}
function sp(node, prop, name) { const v = spVars[name]; if (v) node.setBoundVariable(prop, v); }
function rx(node, prop, name) { const v = rVars[name]; if (v) node.setBoundVariable(prop, v); }

const sidebarPage = figma.root.children.find(p => p.name === 'Sidebar');
if (!sidebarPage) { console.error('Sidebar page not found'); return; }
await figma.setCurrentPageAsync(sidebarPage);

// Remove existing SidebarItem ComponentSet
const existing = sidebarPage.findOne(n => n.type === 'COMPONENT_SET' && n.name === 'SidebarItem');
if (existing) existing.remove();

function makeSidebarItem(state) {
  const comp = figma.createComponent();
  comp.name = `State=${state}`;
  comp.layoutMode = 'HORIZONTAL';
  comp.primaryAxisSizingMode = 'AUTO';
  comp.counterAxisSizingMode = 'AUTO';
  comp.counterAxisAlignItems = 'CENTER';

  // Corner radius → radius/card (8px)
  rx(comp, 'topLeftRadius',     'radius/card');
  rx(comp, 'topRightRadius',    'radius/card');
  rx(comp, 'bottomLeftRadius',  'radius/card');
  rx(comp, 'bottomRightRadius', 'radius/card');

  // Padding
  if (state === 'Active') {
    // paddingLeft = 10px hardcoded (pl-2.5, accounts for 2px left stroke offset)
    comp.paddingLeft = 10;
    sp(comp, 'paddingRight', 'scale/3');  // pr-3 = 12px
  } else {
    // Inactive + Hover: paddingLeft/Right → scale/3 (12px)
    sp(comp, 'paddingLeft',  'scale/3');
    sp(comp, 'paddingRight', 'scale/3');
  }
  sp(comp, 'paddingTop',    'scale/2');  // py-2 = 8px
  sp(comp, 'paddingBottom', 'scale/2');

  // Fill: bg/surface for Active + Hover, none for Inactive
  if (state === 'Active' || state === 'Hover') {
    comp.fills = [vp('bg/surface')];
  } else {
    comp.fills = [];
  }

  // Left stroke: 2px hardcoded, action/primary — Active only
  if (state === 'Active') {
    comp.strokeTopWeight    = 0;
    comp.strokeRightWeight  = 0;
    comp.strokeBottomWeight = 0;
    comp.strokeLeftWeight   = 2;
    comp.strokeAlign = 'OUTSIDE';
    comp.strokes = [vp('action/primary')];
  } else {
    comp.strokes = [];
  }

  // Label text — Inter Medium 14px / 20px
  const label = figma.createText();
  label.fontName = { family: 'Inter', style: 'Medium' };
  label.fontSize = 14;
  label.lineHeight = { value: 20, unit: 'PIXELS' };
  label.characters = 'Nav item';
  comp.appendChild(label);

  // Text color: action/primary for Active, fg/secondary for Inactive + Hover
  label.fills = state === 'Active' ? [vp('action/primary')] : [vp('fg/secondary')];

  return comp;
}

const active   = makeSidebarItem('Active');
const inactive = makeSidebarItem('Inactive');
const hover    = makeSidebarItem('Hover');

const cs = figma.combineAsVariants([active, inactive, hover], sidebarPage);
cs.name = 'SidebarItem';
cs.fills = [];
cs.paddingLeft = cs.paddingRight = cs.paddingTop = cs.paddingBottom = 40;
cs.itemSpacing = 40;

// Label component property
const labelKey = cs.addComponentProperty('Label', 'TEXT', 'Nav item');
for (const variant of cs.children) {
  const t = variant.findOne(n => n.type === 'TEXT');
  if (t) t.componentPropertyReferences = { characters: labelKey };
}

console.log('SidebarItem built. ID:', cs.id);
return cs.id;
```

- [ ] **Step 2: Screenshot and verify**

Take screenshot. Compare with Storybook sidebar story.
Confirm visually:
- Active: bg-surface fill + left blue 2px stroke + blue text
- Inactive: no fill, no stroke, secondary text
- Hover: bg-surface fill, no stroke, secondary text

Confirm in Figma right panel (per variant):
- Active fill: variable chip → `bg/surface`
- Inactive fill: none (no chip — correct)
- Hover fill: variable chip → `bg/surface`
- Active stroke color: variable chip → `action/primary`; `strokeLeftWeight` = 2px hardcoded (no chip); top/right/bottom = 0 hardcoded
- Inactive/Hover: no strokes (no chip — correct)
- Active `paddingLeft` = 10px hardcoded (no chip — correct); `paddingRight` chip → `scale/3`
- Inactive/Hover `paddingLeft` and `paddingRight`: chips → `scale/3`
- All variants `paddingTop` and `paddingBottom`: chips → `scale/2`
- All variants `topLeftRadius`, `topRightRadius`, `bottomLeftRadius`, `bottomRightRadius`: chips → `radius/card`
- Active text fill: chip → `action/primary`; Inactive/Hover text fill: chip → `fg/secondary`

---

### Task 4: Sidebar (container) — 1 variant

**Figma page:** Sidebar
**Spec:** Component 4 — assembled container
**Dependency:** SidebarItem ComponentSet must exist (Task 3 complete)

- [ ] **Step 1: Run the Sidebar container build script**

```javascript
await figma.loadFontAsync({ family: 'Inter', style: 'Medium' });

const collections = figma.variables.getLocalVariableCollections();
const spacingColl = collections.find(c => c.name === 'Spacing');
const spVars = {};
for (const id of spacingColl.variableIds) { const v = figma.variables.getVariableById(id); if (v) spVars[v.name] = v; }
function sp(node, prop, name) { const v = spVars[name]; if (v) node.setBoundVariable(prop, v); }

const sidebarPage = figma.root.children.find(p => p.name === 'Sidebar');
await figma.setCurrentPageAsync(sidebarPage);

// Remove existing Sidebar ComponentSet
const existingSidebar = sidebarPage.findOne(n => n.type === 'COMPONENT_SET' && n.name === 'Sidebar');
if (existingSidebar) existingSidebar.remove();

// Find SidebarItem variants
const itemCS = sidebarPage.findOne(n => n.type === 'COMPONENT_SET' && n.name === 'SidebarItem');
if (!itemCS) { console.error('SidebarItem not found — complete Task 3 first'); return; }
const activeItem   = itemCS.children.find(v => v.variantProperties?.State === 'Active');
const inactiveItem = itemCS.children.find(v => v.variantProperties?.State === 'Inactive');

// Build Sidebar container
const comp = figma.createComponent();
comp.name = 'State=Default';
comp.layoutMode = 'VERTICAL';
comp.primaryAxisSizingMode = 'AUTO';    // hug height
comp.counterAxisSizingMode = 'FIXED';   // fixed 224px width
comp.resize(224, 40);                   // 224px hardcoded (w-56 — no matching Spacing variable)
comp.fills = [];
comp.strokes = [];

// itemSpacing → scale/1 (gap-1 = 4px)
sp(comp, 'itemSpacing', 'scale/1');

// 5 items: first Active, rest Inactive
for (const variant of [activeItem, inactiveItem, inactiveItem, inactiveItem, inactiveItem]) {
  const inst = variant.createInstance();
  comp.appendChild(inst);
  inst.layoutSizingHorizontal = 'FILL'; // fill the 224px container width
}

const cs = figma.combineAsVariants([comp], sidebarPage);
cs.name = 'Sidebar';
cs.fills = [];
cs.paddingLeft = cs.paddingRight = cs.paddingTop = cs.paddingBottom = 40;
cs.itemSpacing = 40;

// Label component property — propagated to all SidebarItem instances
const labelKey = cs.addComponentProperty('Label', 'TEXT', 'Nav item');
for (const variant of cs.children) {
  for (const inst of variant.findAll(n => n.type === 'INSTANCE')) {
    const t = inst.findOne(n => n.type === 'TEXT');
    if (t) t.componentPropertyReferences = { characters: labelKey };
  }
}

console.log('Sidebar container built. ID:', cs.id);
return cs.id;
```

- [ ] **Step 2: Screenshot and verify**

Take screenshot. Confirm visually:
- 224px wide vertical stack
- First item Active (blue + left stripe), rest Inactive
- 4px gaps between items
- No background

Confirm in Figma right panel:
- Container `itemSpacing`: variable chip → `scale/1`
- Container width = 224px hardcoded (no chip — correct)
- Container `fills` = empty (no chip — correct)
- Each SidebarItem instance: `layoutSizingHorizontal` = FILL
- Properties panel on ComponentSet: `Label` (TEXT) present; SidebarItem instance text nodes show `characters` wired to the Sidebar Label property

---

## Chunk 3: NavItem + TopNav

### Task 5: NavItem — 3 variants

**Figma page:** TopNav
**Spec:** Component 5 — `State=Default | State=Active | State=Hover`

- [ ] **Step 1: Run the NavItem build script**

```javascript
await figma.loadFontAsync({ family: 'Inter', style: 'Medium' });

const collections = figma.variables.getLocalVariableCollections();
const semantic    = collections.find(c => c.name === 'Semantic');
const spacingColl = collections.find(c => c.name === 'Spacing');
const radiusColl  = collections.find(c => c.name === 'Radius');
const varByName = {}, spVars = {}, rVars = {};
for (const id of semantic.variableIds)    { const v = figma.variables.getVariableById(id); if (v) varByName[v.name] = v; }
for (const id of spacingColl.variableIds) { const v = figma.variables.getVariableById(id); if (v) spVars[v.name] = v; }
for (const id of radiusColl.variableIds)  { const v = figma.variables.getVariableById(id); if (v) rVars[v.name] = v; }
function vp(name) {
  const v = varByName[name];
  if (!v) { console.warn('Missing: ' + name); return { type: 'SOLID', color: { r: 1, g: 0, b: 1 } }; }
  return figma.variables.setBoundVariableForPaint({ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }, 'color', v);
}
function sp(node, prop, name) { const v = spVars[name]; if (v) node.setBoundVariable(prop, v); }
function rx(node, prop, name) { const v = rVars[name]; if (v) node.setBoundVariable(prop, v); }

// Get activity icon Size=Small for optional icon slot
const iconsPage = figma.root.children.find(p => p.name === 'Icons');
const activityCS = iconsPage?.findOne(n => n.type === 'COMPONENT_SET' && n.name === 'activity');
const activitySmall = activityCS?.children.find(c => c.variantProperties?.Size === 'Small');

const topNavPage = figma.root.children.find(p => p.name === 'TopNav');
if (!topNavPage) { console.error('TopNav page not found'); return; }
await figma.setCurrentPageAsync(topNavPage);

// Remove existing NavItem ComponentSet
const existing = topNavPage.findOne(n => n.type === 'COMPONENT_SET' && n.name === 'NavItem');
if (existing) existing.remove();

function makeNavItem(state) {
  // ── Outer frame: p-1 (scale/1), transparent, no radius ───────────────────
  const outer = figma.createComponent();
  outer.name = `State=${state}`;
  outer.layoutMode = 'HORIZONTAL';
  outer.primaryAxisSizingMode = 'AUTO';
  outer.counterAxisSizingMode = 'AUTO';
  outer.counterAxisAlignItems = 'CENTER';
  outer.fills = [];
  outer.strokes = [];
  sp(outer, 'paddingLeft',   'scale/1');  // p-1 = 4px all sides
  sp(outer, 'paddingRight',  'scale/1');
  sp(outer, 'paddingTop',    'scale/1');
  sp(outer, 'paddingBottom', 'scale/1');

  // ── Inner pill: rounded-card, px-2 py-2, gap-2 ───────────────────────────
  const pill = figma.createFrame();
  pill.name = 'Pill';
  pill.layoutMode = 'HORIZONTAL';
  pill.primaryAxisSizingMode = 'AUTO';
  pill.counterAxisSizingMode = 'AUTO';
  pill.counterAxisAlignItems = 'CENTER';
  pill.strokes = [];
  sp(pill, 'paddingLeft',   'scale/2');  // px-2 = 8px
  sp(pill, 'paddingRight',  'scale/2');
  sp(pill, 'paddingTop',    'scale/2');  // py-2 = 8px
  sp(pill, 'paddingBottom', 'scale/2');
  sp(pill, 'itemSpacing',   'scale/2');  // gap-2 = 8px
  rx(pill, 'topLeftRadius',     'radius/card');
  rx(pill, 'topRightRadius',    'radius/card');
  rx(pill, 'bottomLeftRadius',  'radius/card');
  rx(pill, 'bottomRightRadius', 'radius/card');

  // Pill fill by state
  if (state === 'Active') {
    pill.fills = [vp('nav/active-bg')];
  } else if (state === 'Hover') {
    pill.fills = [vp('nav/hover-bg')];
  } else {
    pill.fills = [];
  }

  // Optional icon slot (hidden by default)
  if (activitySmall) {
    const iconInst = activitySmall.createInstance();
    iconInst.name = 'Icon';
    pill.appendChild(iconInst);
    iconInst.visible = false;
  }

  // Label text
  const label = figma.createText();
  label.name = 'Label';
  label.fontName = { family: 'Inter', style: 'Medium' };
  label.fontSize = 14;
  label.lineHeight = { value: 20, unit: 'PIXELS' };
  label.characters = 'Nav item';
  pill.appendChild(label);

  // Text color: fg/on-accent for Active + Hover, nav/text for Default
  label.fills = (state === 'Active' || state === 'Hover') ? [vp('fg/on-accent')] : [vp('nav/text')];

  outer.appendChild(pill);
  return outer;
}

const defaultState = makeNavItem('Default');
const activeState  = makeNavItem('Active');
const hoverState   = makeNavItem('Hover');

const cs = figma.combineAsVariants([defaultState, activeState, hoverState], topNavPage);
cs.name = 'NavItem';
cs.fills = [];
cs.paddingLeft = cs.paddingRight = cs.paddingTop = cs.paddingBottom = 40;
cs.itemSpacing = 40;

// Component properties
const labelKey    = cs.addComponentProperty('Label',     'TEXT',          'Nav item');
const iconKey     = cs.addComponentProperty('Icon',      'INSTANCE_SWAP', activitySmall?.id ?? '');
const showIconKey = cs.addComponentProperty('Show Icon', 'BOOLEAN',       false);

// Wire properties to nodes in each variant
for (const variant of cs.children) {
  // Label text
  const t = variant.findOne(n => n.type === 'TEXT' && n.name === 'Label');
  if (t) t.componentPropertyReferences = { characters: labelKey };

  // Icon instance — wire Show Icon BOOLEAN to visibility, Icon INSTANCE_SWAP to mainComponent
  const iconInst = variant.findOne(n => n.type === 'INSTANCE' && n.name === 'Icon');
  if (iconInst) {
    iconInst.componentPropertyReferences = {
      visible:       showIconKey,
      mainComponent: iconKey,
    };
  }
}

console.log('NavItem built. ID:', cs.id);
return cs.id;
```

- [ ] **Step 2: Screenshot and verify**

Take screenshot. Compare with Storybook TopNav story.
Confirm visually:
- Default: no pill fill, nav/text color
- Active: nav/active-bg pill, fg/on-accent text
- Hover: nav/hover-bg pill, fg/on-accent text

Confirm in Figma right panel (select the inner Pill frame per variant):
- Default pill fill: none (no chip — correct)
- Active pill fill: variable chip → `nav/active-bg`
- Hover pill fill: variable chip → `nav/hover-bg`
- All variants: pill `paddingLeft/Right/Top/Bottom` chips → `scale/2`
- All variants: pill `itemSpacing` chip → `scale/2`
- All variants: pill `topLeftRadius`, `topRightRadius`, `bottomLeftRadius`, `bottomRightRadius` chips → `radius/card`
- Default text fill: chip → `nav/text`; Active/Hover text fill: chip → `fg/on-accent`
- Outer frame (select outer component): `paddingLeft/Right/Top/Bottom` chips → `scale/1`
- Outer frame: no fill, no strokes, no cornerRadius (all correct — no chips)
- Properties panel on ComponentSet: `Label` (TEXT), `Icon` (INSTANCE_SWAP), `Show Icon` (BOOLEAN) all present

---

### Task 6: TopNav (full bar) — 1 variant

**Figma page:** TopNav
**Spec:** Component 6 — assembled full-width bar
**Dependency:** NavItem, Avatar, and NotificationBadge ComponentSets must exist (Tasks 1–5 + Primitives)

- [ ] **Step 1: Run the TopNav build script**

```javascript
await figma.loadFontAsync({ family: 'Inter', style: 'Medium' });

const collections = figma.variables.getLocalVariableCollections();
const semantic    = collections.find(c => c.name === 'Semantic');
const spacingColl = collections.find(c => c.name === 'Spacing');
const varByName = {}, spVars = {};
for (const id of semantic.variableIds)    { const v = figma.variables.getVariableById(id); if (v) varByName[v.name] = v; }
for (const id of spacingColl.variableIds) { const v = figma.variables.getVariableById(id); if (v) spVars[v.name] = v; }
function vp(name) {
  const v = varByName[name];
  if (!v) { console.warn('Missing: ' + name); return { type: 'SOLID', color: { r: 1, g: 0, b: 1 } }; }
  return figma.variables.setBoundVariableForPaint({ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }, 'color', v);
}
function sp(node, prop, name) { const v = spVars[name]; if (v) node.setBoundVariable(prop, v); }

const topNavPage = figma.root.children.find(p => p.name === 'TopNav');
await figma.setCurrentPageAsync(topNavPage);

// Remove existing TopNav ComponentSet
const existingTN = topNavPage.findOne(n => n.type === 'COMPONENT_SET' && n.name === 'TopNav');
if (existingTN) existingTN.remove();

// ── Locate NavItem variants ───────────────────────────────────────────────────
const navItemCS  = topNavPage.findOne(n => n.type === 'COMPONENT_SET' && n.name === 'NavItem');
if (!navItemCS) { console.error('NavItem not found — complete Task 5 first'); return; }
const activeNav  = navItemCS.children.find(v => v.variantProperties?.State === 'Active');
const defaultNav = navItemCS.children.find(v => v.variantProperties?.State === 'Default');

// ── Locate Avatar (sm, firm) and NotificationBadge ───────────────────────────
let avatarSmFirm = null, notifBadge = null;
for (const page of figma.root.children) {
  if (!avatarSmFirm) {
    const cs = page.findOne(n => n.type === 'COMPONENT_SET' && n.name === 'Avatar');
    if (cs) avatarSmFirm = cs.children.find(v =>
      v.variantProperties?.Size === 'sm' && v.variantProperties?.Variant === 'firm'
    ) ?? cs.children[0];
  }
  if (!notifBadge) {
    const cs = page.findOne(n => n.type === 'COMPONENT_SET' && n.name === 'NotificationBadge');
    if (cs) notifBadge = cs.children[0];
  }
  if (avatarSmFirm && notifBadge) break;
}

// ── Build TopNav bar ──────────────────────────────────────────────────────────
const comp = figma.createComponent();
comp.name = 'State=Default';
comp.layoutMode = 'HORIZONTAL';
comp.primaryAxisSizingMode = 'FIXED';
comp.counterAxisSizingMode = 'FIXED';
comp.resize(1280, 60);                          // 1280px representative width, 60px = scale/15
comp.primaryAxisAlignItems = 'SPACE_BETWEEN';
comp.counterAxisAlignItems = 'CENTER';
comp.fills  = [vp('nav/bg')];
comp.strokes = [];

// Padding: paddingLeft/Right → scale/8 (32px), no vertical padding (height is fixed)
sp(comp, 'paddingLeft',  'scale/8');
sp(comp, 'paddingRight', 'scale/8');
// Bind fixed height to scale/15 (60px)
sp(comp, 'height', 'scale/15');

// ── Left slot: wordmark placeholder ──────────────────────────────────────────
const wordmark = figma.createText();
wordmark.name = 'Wordmark';
wordmark.fontName = { family: 'Inter', style: 'Medium' };
wordmark.fontSize = 16;
wordmark.lineHeight = { value: 24, unit: 'PIXELS' };
wordmark.characters = 'Wordmark';
wordmark.fills = [vp('fg/on-accent')];
comp.appendChild(wordmark);

// ── Center: nav items row (gap-1 between items) ───────────────────────────────
const navRow = figma.createFrame();
navRow.name = 'NavItems';
navRow.layoutMode = 'HORIZONTAL';
navRow.primaryAxisSizingMode = 'AUTO';
navRow.counterAxisSizingMode = 'AUTO';
navRow.counterAxisAlignItems = 'CENTER';
navRow.fills  = [];
navRow.strokes = [];
sp(navRow, 'itemSpacing', 'scale/1');  // gap-1 = 4px between NavItem instances
comp.appendChild(navRow);

// 3 NavItem instances: first Active, then 2 Default
navRow.appendChild(activeNav.createInstance());
navRow.appendChild(defaultNav.createInstance());
navRow.appendChild(defaultNav.createInstance());

// ── Right slot: Avatar + NotificationBadge (gap-3) ───────────────────────────
const rightSlot = figma.createFrame();
rightSlot.name = 'RightSlot';
rightSlot.layoutMode = 'HORIZONTAL';
rightSlot.primaryAxisSizingMode = 'AUTO';
rightSlot.counterAxisSizingMode = 'AUTO';
rightSlot.counterAxisAlignItems = 'CENTER';
rightSlot.fills  = [];
rightSlot.strokes = [];
sp(rightSlot, 'itemSpacing', 'scale/3');  // gap-3 = 12px
comp.appendChild(rightSlot);

if (avatarSmFirm) rightSlot.appendChild(avatarSmFirm.createInstance());
if (notifBadge)   rightSlot.appendChild(notifBadge.createInstance());

// Combine as variant
const cs = figma.combineAsVariants([comp], topNavPage);
cs.name = 'TopNav';
cs.fills = [];
cs.paddingLeft = cs.paddingRight = cs.paddingTop = cs.paddingBottom = 40;

console.log('TopNav built. ID:', cs.id);
return cs.id;
```

- [ ] **Step 2: Screenshot and verify**

Take screenshot. Compare with Storybook at `http://localhost:6006/?path=/story/navigation-top-nav--default`.
Confirm:
- Full-width dark navy bar at 60px height
- Left: "Wordmark" in white (fg/on-accent)
- Center: 3 NavItems (first Active/pill, two Default)
- Right: Avatar (sm/firm) + NotificationBadge with 12px gap
- Right panel shows variable chips for: nav/bg fill, scale/15 height, scale/8 padding (left + right), scale/1 nav-items gap, scale/3 right-slot gap, fg/on-accent wordmark text fill
