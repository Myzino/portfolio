import Footer from "../components/ui/footer";

export default function Hobbies() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between overflow-y-auto">
      <div className="flex-grow"></div> {/* Empty space for the main content */}
      <footer className="bg-black text-white p-4 text-center">
        <Footer />
      </footer>
    </div>
  );
}
