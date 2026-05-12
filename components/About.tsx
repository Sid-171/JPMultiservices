const About = () => {
  return (
    <section id="about">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-5xl font-bold mb-16">
          Meet the Founder
        </h2>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          <div>
            <img
              src="/images/profile.jpeg"
              alt="Founder"
              width={424}
              height={489}
              className="rounded-2xl object-cover w-full"
            />
          </div>

          {/* Right Text */}
          <div>

            <h3 className="text-3xl font-semibold mb-8">
              Pankaj Dhokane
            </h3>

            <p className="text-gray-600 leading-9 text-xl">
              Since 2018, our founder has been delivering
              high-quality construction solutions across
              residential, commercial, healthcare, and
              interior projects. Recognized on Engineer’s
              Day for outstanding contributions to the
              industry, he has successfully developed and
              managed several landmark projects.

              One of the most notable achievements is
              Nine Pearls — a large-scale healthcare
              project consisting of nine specialized
              surgeon hospitals, appreciated by leading
              doctors for its quality, functionality,
              and modern infrastructure.
            </p>

          </div>

        </div>

      </div>
      <br></br>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        <div>
          <p className="text-sm uppercase tracking-[4px] text-gray-500 mb-4">
            About Us
          </p>

          <h2 className="text-5xl font-bold leading-tight">
            Building Modern Spaces
            with Precision & Trust
          </h2>

          <p className="mt-8 text-gray-600 leading-8 text-lg">
            JP Multiservices is a trusted construction company
            delivering premium residential, commercial,
            healthcare, and interior projects since 2018.

            We specialize in quality construction,
            innovative design, and long-lasting infrastructure
            solutions tailored to modern needs.
          </p>

          <div className="grid grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-4xl font-bold">50+</h3>
              <p className="text-gray-600 mt-2">
                Projects Completed
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">7+</h3>
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

      </div>
    </section>
  );
};

export default About;