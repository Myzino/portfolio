export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-x-8 lg:space-y-0 w-full max-w-7xl">
        <div
          className="wrapper bg-gray-50 rounded shadow-lg flex items-center justify-center overflow-hidden w-full max-w-lg"
        >
          <img
            src="/path-to-your-image.jpg"
            alt="Wrapper Image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Name:</label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email:</label>
              <input
                type="email"
                className="mt-1 p-2 w-full border rounded"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message:</label>
              <textarea
                className="mt-1 p-2 w-full border rounded"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded w-full"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
