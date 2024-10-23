const year = new Date().getFullYear();
const day = new Date().getDate()
const month = new Date().getMonth();
export default function Footer() {
  return (
    <footer className="p-5 h-10 bg-background ">Made by Jeffrey with ❤️ {month}-{day}-{year}</footer>
  )
}
