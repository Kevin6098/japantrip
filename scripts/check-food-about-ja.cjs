#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/restaurantsData.js');
const src = fs.readFileSync(filePath, 'utf8');

// IDs used in src/pages/Food.jsx
const ids = [
  'pain-maison',
  'ginza-kanimitsu',
  'nakamura-tokichi-ginza',
  'asakusa-monja',
  'ichiran-ramen',
  'tsukada-shabu',
  'afuri-yurakucho',

  'tsurikichi-shinsekai',
  'shinsekai-kushikatsu-ittoku',
  'naniwa-omurice',
  'ajinoya-honten',
  'ganso-5cm-katsudon',
  'dotonbori-kukuru',
  'mugen-ramen',
  'oden-no-den-maki-sennichimae',
  'tsukemen-suzume',
  'men-wa-tomoare',
  'torepichi-kuromon',
  'shinuoei-kuromon',
  'nodobotoke-kamoru',
  'sushi-jin-harukas',

  'kobe-steak-nick',
  'gashoken',

  'gion-unagi-kawato',
  'kyo-kiyomizu-shigemori',
  'issun-boushi',
  'gokago-matcha',
  'gion-gozu',
  'ichiren-kyoto',
  'salmon-noodle-kyoto',
  'masaichi',

  'nakamura-tokichi-uji',

  'kamameshi-shizuka',
  'yamatoen-honten',
];

function findEntryStart(id) {
  const needle = `'${id}': {`;
  return src.indexOf(needle);
}

function findAboutBlock(entryStartIdx) {
  const aboutIdx = src.indexOf('\n    about:', entryStartIdx);
  if (aboutIdx === -1) return null;
  const braceStart = src.indexOf('{', aboutIdx);
  if (braceStart === -1) return null;

  let depth = 0;
  for (let i = braceStart; i < src.length; i++) {
    const ch = src[i];
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) {
        return { start: braceStart, end: i + 1 };
      }
    }
  }
  return null;
}

const missing = [];
const missingEntry = [];

for (const id of ids) {
  const entryStart = findEntryStart(id);
  if (entryStart === -1) {
    missingEntry.push(id);
    continue;
  }

  const about = findAboutBlock(entryStart);
  if (!about) {
    missing.push(id);
    continue;
  }

  const aboutText = src.slice(about.start, about.end);
  if (!/\bja\s*:/.test(aboutText)) {
    missing.push(id);
  }
}

console.log('Food IDs not found in restaurantsData.js:', missingEntry.length);
if (missingEntry.length) console.log(missingEntry.join('\n'));
console.log('Food restaurants missing about.ja:', missing.length);
if (missing.length) console.log(missing.join('\n'));
