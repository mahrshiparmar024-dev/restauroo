const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'app/layout.tsx',
  'app/about/page.tsx',
  'app/contact/page.tsx',
  'app/page.tsx',
  'components/layout/Navbar.tsx',
  'components/layout/Footer.tsx',
  'components/marketing/HeroSection.tsx',
  'components/marketing/AboutSection.tsx',
  'components/marketing/ExperienceSection.tsx',
  'components/marketing/Testimonials.tsx',
  'components/marketing/MenuHighlights.tsx',
  'components/order/OrderSuccess.tsx',
  'README.md',
  'package.json'
];

filesToUpdate.forEach(file => {
  const p = path.join('/Users/macbookpro/Desktop/turkish restro/anatolian', file);
  if (!fs.existsSync(p)) return;
  let content = fs.readFileSync(p, 'utf8');
  
  content = content.replace(/Anatolian/g, 'Saray');
  content = content.replace(/anatolian/g, 'saray');
  content = content.replace(/ANATOLIAN/g, 'SARAY');
  
  content = content.replace(/Kitchener/g, 'Barrie');
  content = content.replace(/KITCHENER/g, 'BARRIE');
  
  // Specific Address Replacements (Since Kitchener was just replaced with Barrie)
  content = content.replace(/137 King Street West, Barrie, ON N2G 1A7/g, '94 Dunlop st W, Barrie, ON L4N 1A8');
  content = content.replace(/137 King St W, Barrie/g, '94 Dunlop st W, Barrie');
  
  // Update Instagram
  content = content.replace(/href: 'https:\/\/instagram.com'/g, "href: 'https://instagram.com/sarayturkishcuisine.ca'");
  
  fs.writeFileSync(p, content);
});
console.log('Replacements complete');
