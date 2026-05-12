import Image from "next/image";

const Founder = () => {
  return (
    <section id="founder">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-5xl font-bold mb-16">
          Meet the Founder
        </h2>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left Image */}
          <div>
            <Image
              src="/images/baba.jpeg"
              alt="Founder"
              width={600}
              height={500}
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
    </section>
  );
};

export default Founder;