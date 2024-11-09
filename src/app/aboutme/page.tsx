import Header from "@/app/components/ui/header";
import dynamic from 'next/dynamic';
import Footer from "../components/ui/footer";

const Heatmap = dynamic(() => import('@/app/components/ui/heatmap'), { ssr: false });

export default function Aboutme() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-1 px-2 sm:px-4 md:px-6 lg:px-8 py-4">
        <div className="h-[calc(100vh-theme(spacing.32))] max-w-7xl mx-auto">
          <Heatmap />
        </div>
      </main>
      <Footer />
    </div>
  );
}