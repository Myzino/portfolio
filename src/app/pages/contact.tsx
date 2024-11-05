
export default function contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center bg-gray-100">
    <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl font-bold">Contact Me</h2>
            <form className="mt-4">
                <div className="mb-4">
                    <label className="block text-gray-700">Name:</label>
                    <input type="text" className="mt-1 p-2 w-full border rounded" placeholder="Your Name" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email:</label>
                    <input type="email" className="mt-1 p-2 w-full border rounded" placeholder="Your Email" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Message:</label>
                    <textarea className="mt-1 p-2 w-full border rounded" rows="4" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send</button>
            </form>
        </div>
    </div>
</section>
  )
}
