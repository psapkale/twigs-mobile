const fs = require('fs');
const path = require('path');

const iconsDir = '/Users/Prem.Pravin/Desktop/twigs-mobile/src/icons';

// Get all icon files
const iconFiles = fs.readdirSync(iconsDir).filter(file => file.endsWith('.tsx'));

console.log(`Processing ${iconFiles.length} icon files to fix SVG elements`);

let fixedCount = 0;

iconFiles.forEach(file => {
  const filePath = path.join(iconsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Check if file has lowercase svg elements
  if (content.includes('<g ') || content.includes('<g>') || 
      content.includes('<rect ') || content.includes('<rect>') ||
      content.includes('<defs>') || content.includes('<clipPath ') ||
      content.includes('</g>') || content.includes('</rect>') ||
      content.includes('</defs>') || content.includes('</clipPath>')) {
    
    // Replace lowercase with capitalized versions
    content = content.replace(/<g\s/g, '<G ');
    content = content.replace(/<g>/g, '<G>');
    content = content.replace(/<\/g>/g, '</G>');
    
    content = content.replace(/<rect\s/g, '<Rect ');
    content = content.replace(/<rect>/g, '<Rect>');
    content = content.replace(/<\/rect>/g, '</Rect>');
    
    content = content.replace(/<defs>/g, '<Defs>');
    content = content.replace(/<\/defs>/g, '</Defs>');
    
    content = content.replace(/<clipPath\s/g, '<ClipPath ');
    content = content.replace(/<\/clipPath>/g, '</ClipPath>');
    
    // Update imports to include G, Rect, Defs, ClipPath if needed
    const needsG = content.includes('<G');
    const needsRect = content.includes('<Rect');
    const needsDefs = content.includes('<Defs');
    const needsClipPath = content.includes('<ClipPath');
    
    const imports = [];
    if (content.includes('import Svg, { Path }')) {
      imports.push('Path');
    }
    if (content.includes('import Svg, { Path, Circle }')) {
      imports.push('Circle');
    }
    if (needsG) imports.push('G');
    if (needsRect) imports.push('Rect');
    if (needsDefs) imports.push('Defs');
    if (needsClipPath) imports.push('ClipPath');
    
    // Remove duplicates and sort
    const uniqueImports = [...new Set(imports)].sort();
    
    // Replace import statement
    content = content.replace(
      /import Svg, \{ [^}]+ \} from 'react-native-svg';/,
      `import Svg, { ${uniqueImports.join(', ')} } from 'react-native-svg';`
    );
    
    fs.writeFileSync(filePath, content);
    fixedCount++;
    console.log(`Fixed ${file}`);
    modified = true;
  }
});

console.log(`\nFixed ${fixedCount} files with SVG element issues`);
