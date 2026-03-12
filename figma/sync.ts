/// <reference types="node" />

const FIGMA_API_BASE = 'https://api.figma.com/v1';

interface FigmaStyle {
  key: string;
  name: string;
  styleType: 'FILL' | 'TEXT' | 'EFFECT' | 'GRID';
  description: string;
}

interface FigmaFileResponse {
  name: string;
  lastModified: string;
  styles: Record<string, FigmaStyle>;
}

async function fetchFigmaFile(fileKey: string, token: string): Promise<FigmaFileResponse> {
  const res = await fetch(`${FIGMA_API_BASE}/files/${fileKey}?depth=1`, {
    headers: { 'X-Figma-Token': token },
  });
  if (!res.ok) {
    throw new Error(`Figma API responded with ${res.status}: ${await res.text()}`);
  }
  return res.json() as Promise<FigmaFileResponse>;
}

export interface SyncResult {
  fileName: string;
  lastModified: string;
  styleCount: number;
  styles: FigmaStyle[];
}

/**
 * Fetches design token metadata from a Figma file.
 *
 * Usage:
 *   FIGMA_TOKEN=... FIGMA_FILE_KEY=... npx tsx figma/sync.ts
 *
 * Phase 2 will extend this to parse styles and write to tokens/*.ts
 */
export async function syncTokensFromFigma(
  fileKey?: string,
  token?: string,
): Promise<SyncResult> {
  const figmaToken   = token   ?? process.env['FIGMA_TOKEN'];
  const figmaFileKey = fileKey ?? process.env['FIGMA_FILE_KEY'];

  if (!figmaToken)   throw new Error('Missing FIGMA_TOKEN env var');
  if (!figmaFileKey) throw new Error('Missing FIGMA_FILE_KEY env var');

  const file = await fetchFigmaFile(figmaFileKey, figmaToken);
  const styles = Object.values(file.styles ?? {});

  return {
    fileName:     file.name,
    lastModified: file.lastModified,
    styleCount:   styles.length,
    styles,
  };
}

// Run directly: npx tsx figma/sync.ts
if (process.argv[1]?.endsWith('sync.ts')) {
  syncTokensFromFigma()
    .then((r) => {
      console.log(`✔ Connected to "${r.fileName}" (last modified ${r.lastModified})`);
      console.log(`  Found ${r.styleCount} styles — Phase 2 will parse these into token files.`);
    })
    .catch((err: Error) => {
      console.error('✘ Figma sync failed:', err.message);
      process.exit(1);
    });
}
