import Header from "@/app/components/ui/header";
import dynamic from 'next/dynamic';
import Footer from "../components/ui/footer";


const Heatmap = dynamic(() => import('@/app/components/ui/heatmap'), { ssr: false });

export default function Aboutme() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between overflow-y-auto">
      <Header />
      <section
        id="home"
        className="flex items-center justify-center min-h-screen bg-black bg-cover bg-center"
        style={{
          backgroundImage: `url("")`,
        }}
      >
        <div className="flex space-x-4 items-center justify-center">
          <Heatmap />
          <div>
          </div>
        </div>
      </section>
      <div className="flex-grow"></div> {/* Empty space for the main content */}
      <footer className="text-white text-center p-4">
        <Footer />
      </footer>
    </div>
  );
}
