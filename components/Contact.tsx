"use client";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-black text-white rounded-3xl"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        <div>
          <p className="uppercase tracking-[4px] text-gray-400 mb-4">
            Contact Us
          </p>

          <h2 className="text-5xl font-bold leading-tight">
            Let’s Build Something Great Together
          </h2>

          <p className="mt-8 text-gray-400 leading-8 text-lg">
            Get in touch with JP Multiservices for
            residential, commercial, healthcare,
            and interior construction projects.
          </p>

          <div className="mt-10 space-y-4 text-lg">
            <p>📍 Pune, Maharashtra</p>
            <p>📞 +91 9876543210</p>
            <p>✉️ jpmultiservicesnsk@gmail.com</p>
          </div>
        </div>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-white text-black outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl bg-white text-black outline-none"
          />

          <textarea
            placeholder="Your Message"
            rows={6}
            className="w-full p-4 rounded-xl bg-white text-black outline-none"
          />

          <button
            className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;