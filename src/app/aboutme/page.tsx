import Header from "@/app/components/ui/header";
import Heatmap from "@/app/components/ui/heatmap";
import Footer from "../components/ui/footer";
export default function Aboutme() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between overflow-y-auto">
        <Header/>
         <section

      id="home"
      className="flex items-center justify-center min-h-screen bg-black bg-cover bg-center "
      style={{
        backgroundImage: `url("")`,
      }}
    >
      <div className="flex space-x-4">
      <Heatmap />
      </div>
    </section>
      <div className="flex-grow"></div> {/* Empty space for the main content */}
      <footer className="bg-black text-white p-4 text-center">
        <Footer />
      </footer>
    </div>
  );
}
