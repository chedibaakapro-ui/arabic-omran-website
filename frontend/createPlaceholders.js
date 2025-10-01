// Save this as: frontend/createPlaceholders.js
// Run with: node createPlaceholders.js

const fs = require('fs');
const path = require('path');

// Create public/images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Saudi-themed color schemes
const colorSchemes = [
  { primary: '#1B4848', secondary: '#DDAF37', name: 'Riyadh Tower' },
  { primary: '#2C5F2D', secondary: '#97BC62', name: 'Palm Oasis' },
  { primary: '#4A0E4E', secondary: '#81689D', name: 'Desert Sunset' },
  { primary: '#1F4788', secondary: '#4B9BFF', name: 'Red Sea Coast' },
  { primary: '#8B4513', secondary: '#DEB887', name: 'Desert Sands' },
  { primary: '#006C35', secondary: '#FFFFFF', name: 'Saudi Flag' },
  { primary: '#800020', secondary: '#FFD700', name: 'Royal Palace' }
];

// Create SVG placeholder images
colorSchemes.forEach((scheme, index) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
  <defs>
    <linearGradient id="grad${index}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${scheme.primary};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${scheme.secondary};stop-opacity:1" />
    </linearGradient>
    <pattern id="pattern${index}" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
      <rect x="0" y="0" width="20" height="20" fill="${scheme.primary}" opacity="0.1"/>
      <rect x="20" y="20" width="20" height="20" fill="${scheme.primary}" opacity="0.1"/>
    </pattern>
  </defs>
  
  <!-- Background -->
  <rect width="600" height="400" fill="url(#grad${index})"/>
  
  <!-- Pattern overlay -->
  <rect width="600" height="400" fill="url(#pattern${index})"/>
  
  <!-- Building silhouette -->
  <g transform="translate(200, 150)">
    <!-- Main building -->
    <rect x="0" y="50" width="200" height="200" fill="${scheme.primary}" opacity="0.3"/>
    <!-- Tower -->
    <rect x="70" y="0" width="60" height="250" fill="${scheme.primary}" opacity="0.4"/>
    <!-- Windows -->
    <rect x="20" y="70" width="30" height="30" fill="${scheme.secondary}" opacity="0.7"/>
    <rect x="60" y="70" width="30" height="30" fill="${scheme.secondary}" opacity="0.7"/>
    <rect x="100" y="70" width="30" height="30" fill="${scheme.secondary}" opacity="0.7"/>
    <rect x="140" y="70" width="30" height="30" fill="${scheme.secondary}" opacity="0.7"/>
    <rect x="20" y="110" width="30" height="30" fill="${scheme.secondary}" opacity="0.7"/>
    <rect x="60" y="110" width="30" height="30" fill="${scheme.secondary}" opacity="0.7"/>
    <rect x="100" y="110" width="30" height="30" fill="${scheme.secondary}" opacity="0.7"/>
    <rect x="140" y="110" width="30" height="30" fill="${scheme.secondary}" opacity="0.7"/>
  </g>
  
  <!-- Text -->
  <text x="50%" y="85%" text-anchor="middle" fill="white" font-size="24" font-family="Arial, sans-serif" font-weight="bold" opacity="0.9">
    ${scheme.name}
  </text>
  <text x="50%" y="92%" text-anchor="middle" fill="white" font-size="16" font-family="Arial, sans-serif" opacity="0.7">
    Omran Magazine
  </text>
</svg>`;

  const filename = path.join(imagesDir, `saudi-${index + 1}.svg`);
  fs.writeFileSync(filename, svg);
  console.log(`Created: ${filename}`);
});

console.log('\n✅ Created 7 placeholder images in frontend/public/images/');
console.log('Now update your components to use /images/saudi-1.svg through /images/saudi-7.svg');