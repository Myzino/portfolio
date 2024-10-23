const year = new Date().getFullYear();
const day = new Date().getDate();
const month = new Date().getMonth() + 1; 

export default function Footer() {
  return (
    <footer 
      className="p-5 h-10 text-white font-medium" 
      style={{ 
        WebkitFontSmoothing: 'antialiased' 
       
      }}
    >
      Made by Jeffrey with ❤️ {month}-{day}-{year}
    </footer>
  );
}

