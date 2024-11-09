
import Heatmap from "@/app/components/ui/heatmap";
export default function Home() {
  return (
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
  );
}
