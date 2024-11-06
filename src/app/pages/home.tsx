export default function home() {
  return (
    <section
    id="home"
    className="flex items-center justify-center min-h-screen bg-black bg-cover bg-center shadow-2xl"
    style={{
        backgroundImage: `url("")`, 
    }}
>
    <div className="flex items-center space-x-4">
        <h1 className="text-6xl font-bold text-white">Jeffrey Sedoro</h1>
        <img 
            src="/path-to-your-image.jpg"   
            alt="Profile Picture" 
            className="w-32 h-32 rounded  object-cover" 
        />
    </div>
</section>


  )
}
