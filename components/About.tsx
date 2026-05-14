const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* Small Heading */}
        <p className="text-sm uppercase tracking-[4px] text-gray-500 mb-4">
          About Us
        </p>

        {/* Main Heading */}
        <h2 className="text-5xl font-bold leading-tight mb-10">
          Building Modern Spaces
          <br />
          with Precision & Trust
        </h2>

        {/* About Text */}
        <div className="space-y-8 text-gray-600 leading-9 text-xl">

          <p>
            JP Multiservices is a trusted construction company
            delivering premium residential, commercial,
            healthcare, and interior projects since 2018.
          </p>

          <p>
            Founded by <span className="font-semibold text-black">
              Pankaj Dhokane
            </span>, the company focuses on quality construction,
            innovative design, and long-lasting infrastructure
            solutions tailored to modern needs.
          </p>

          <p>
            Over the years, we have successfully developed and
            managed several landmark projects recognized for
            functionality, modern infrastructure, and attention
            to detail.
          </p>

          <p>
            One of our most notable achievements is the
            <span className="font-semibold text-black">
              {" "}Nine Pearls
            </span>{" "}
            healthcare project — a large-scale development
            consisting of nine specialized surgeon hospitals,
            appreciated by leading doctors for its quality
            and execution.
          </p>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-16">

          <div>
            <h3 className="text-4xl font-bold">50+</h3>
            <p className="text-gray-600 mt-2">
              Projects Completed
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">12+</h3>
            <p className="text-gray-600 mt-2">
              Years Experience
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">100%</h3>
            <p className="text-gray-600 mt-2">
              Client Satisfaction
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">24/7</h3>
            <p className="text-gray-600 mt-2">
              Project Support
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;