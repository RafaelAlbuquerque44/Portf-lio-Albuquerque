const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/"\/images\//g, '"/Portf-lio-Albuquerque/images/');
  content = content.replace(/"\/models\//g, '"/Portf-lio-Albuquerque/models/');
  fs.writeFileSync(filePath, content, 'utf8');
}

const files = [
  'src/components/Character/utils/lighting.ts',
  'src/components/TechStack.tsx',
  'src/components/Character/utils/character.ts',
  'src/components/Work.tsx',
  'src/components/Navbar.tsx',
  'src/components/Loading.tsx'
];

files.forEach(f => {
  const p = path.join(__dirname, f);
  if (fs.existsSync(p)) {
    replaceInFile(p);
  }
});
