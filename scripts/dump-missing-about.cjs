#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/restaurantsData.js');
const src = fs.readFileSync(filePath, 'utf8');

const ids = fs
  .readFileSync(path.join(__dirname, './check-food-about-ja.cjs'), 'utf8')
  .match(/'([a-z0-9-]+)'/g)
  ?.map((s) => s.slice(1, -1))
  .filter((s) => s.includes('-')) || [];

function findEntryStart(id) {
  const needle = `'${id}': {`;
  return src.indexOf(needle);
}

function findBlock(entryStartIdx, propName) {
  const propIdx = src.indexOf(`\n    ${propName}:`, entryStartIdx);
  if (propIdx === -1) return null;
  const braceStart = src.indexOf('{', propIdx);
  if (braceStart === -1) return null;
  let depth = 0;
  for (let i = braceStart; i < src.length; i++) {
    const ch = src[i];
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) return { start: braceStart, end: i + 1 };
    }
  }
  return null;
}

function extractFirstString(objText, key) {
  const m = objText.match(new RegExp(`${key}\\s*:\\s*([\"\`\'])((?:\\\\.|(?!\\1)[\\s\\S])*)\\1`));
  return m ? m[2].replace(/\\n/g, '\n') : null;
}

const missing = [];
for (const id of ids) {
  const entryStart = findEntryStart(id);
  if (entryStart === -1) continue;
  const aboutBlock = findBlock(entryStart, 'about');
  if (!aboutBlock) continue;
  const aboutText = src.slice(aboutBlock.start, aboutBlock.end);
  if (!/\bja\s*:/.test(aboutText)) missing.push(id);
}

const offsetArg = process.argv.find((a) => a.startsWith('--offset='));
const limitArg = process.argv.find((a) => a.startsWith('--limit='));
const offset = offsetArg ? Number(offsetArg.split('=')[1]) : 0;
const limit = limitArg ? Number(limitArg.split('=')[1]) : missing.length;

for (const id of missing.slice(offset, offset + limit)) {
  const entryStart = findEntryStart(id);
  const titleBlock = findBlock(entryStart, 'title');
  const aboutBlock = findBlock(entryStart, 'about');
  const titleText = titleBlock ? src.slice(titleBlock.start, titleBlock.end) : '';
  const aboutText = aboutBlock ? src.slice(aboutBlock.start, aboutBlock.end) : '';

  const titleEn = extractFirstString(titleText, 'en');
  const aboutEn = extractFirstString(aboutText, 'en');
  const aboutZh = extractFirstString(aboutText, 'zh');

  console.log('---');
  console.log(id);
  console.log('title.en:', titleEn);
  console.log('about.en:', (aboutEn || '').slice(0, 400));
  console.log('about.zh:', (aboutZh || '').slice(0, 200));
}
