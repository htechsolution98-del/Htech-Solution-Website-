const fs = require('fs');
const potrace = require('potrace');

const imagePath = 'C:\\Users\\mahil\\Downloads\\Htech\\htech logo.png';
const outPath = 'C:\\Users\\mahil\\Downloads\\Htech\\htech-next\\src\\components\\Logo.tsx';

potrace.trace(imagePath, { turnpolicy: potrace.Potrace.TURNPOLICY_MINORITY, turdsize: 100, alphaMax: 1, optcurve: true }, function(err, svg) {
  if (err) throw err;
  
  // Extract just the <path> from the generated SVG
  const pathMatch = svg.match(/<path[^>]*d="([^"]*)"/);
  const pathD = pathMatch ? pathMatch[1] : '';
  
  const componentContent = `
export default function Logo({ className = '' }: { className?: string }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 1024 1024" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--blue)" />
          <stop offset="100%" stopColor="var(--cyan)" />
        </linearGradient>
      </defs>
      <path d="${pathD}" fill="url(#logoGrad)" />
    </svg>
  );
}
`;

  fs.writeFileSync(outPath, componentContent.trim());
  console.log('Logo component generated successfully!');
});
