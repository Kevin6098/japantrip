#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/restaurantsData.js');
const src = fs.readFileSync(filePath, 'utf8');

const ids = process.argv.slice(2);
if (!ids.length) {
  console.log('Usage: node scripts/dump-specific-about.cjs <id> [id...]');
  process.exit(1);
}

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

for (const id of ids) {
  const entryStart = findEntryStart(id);
  if (entryStart === -1) {
    console.log('---');
    console.log(id);
    console.log('NOT FOUND');
    continue;
  }
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
  console.log('has ja:', /\\bja\\s*:/.test(aboutText));
  console.log('about.en:', (aboutEn || '').slice(0, 500));
  console.log('about.zh:', (aboutZh || '').slice(0, 250));
}
