
export default function home() {
  return (
    <section
    id="home"
    className="flex items-center justify-center min-h-screen"
    style={{
        backgroundImage: `url('/path-to-your-background-image.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}
    >
    <div className="text-center">
        <h1 className="text-6xl font-bold text-black">Jeffrey Sedoro</h1>
        <img 
            src="/path-to-your-image.jpg" 
            alt="Profile Picture" 
            className="mt-4 w-32 h-32 rounded-full object-cover mx-auto" 
        />
    </div>
    </section>
  )
}
