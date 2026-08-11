import fs from 'node:fs';

const catalog = JSON.parse(fs.readFileSync('data/catalog.json', 'utf8'));
const errors = [];
const ids = new Set();

if (catalog.leaves.length !== catalog.expectedLeafCount) {
  errors.push(`Expected ${catalog.expectedLeafCount} leaves but catalog contains ${catalog.leaves.length}.`);
}

for (const leaf of catalog.leaves) {
  if (ids.has(leaf.id)) errors.push(`Duplicate leaf ID: ${leaf.id}`);
  ids.add(leaf.id);
  if (!fs.existsSync(leaf.path)) {
    errors.push(`Missing leaf file: ${leaf.path}`);
    continue;
  }
  const content = fs.readFileSync(leaf.path, 'utf8');
  for (const marker of ['---', `# ${leaf.name}`, '## Explanation', '## Lab', '## Troubleshooting', '## Interview questions']) {
    if (!content.includes(marker)) errors.push(`${leaf.path} is missing marker: ${marker}`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Validated ${catalog.leaves.length} leaves across ${catalog.treeCount} trees and ${catalog.branchCount} branches.`);
