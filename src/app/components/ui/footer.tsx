const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer 
      className="h-16 text-black font-medium flex items-center justify-center" 
      style={{ 
        WebkitFontSmoothing: 'antialiased',
        padding: '1rem'
      }}
    >
      <div>
        &copy; {year} Jeffrey Sedoro. All rights reserved.
      </div>
    </footer>
  );
}
