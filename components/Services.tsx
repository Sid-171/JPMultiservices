import Image from "next/image";

const services = [
  {
    title: "Hospitals",
    desc: "We specialize in building modern healthcare facilities with high standards of safety, functionality, and infrastructure planning.",
  },
  {
    title: "Bungalows",
    desc: "We create elegant and customized bungalows that combine comfort, luxury, and durability.",
  },
  {
    title: "Residential and Commercial Buildings",
    desc: "We construct residential projects that offer smart layouts, quality materials, and modern living spaces.",
  },
  {
    title: "Offices",
    desc: "We construct modern office spaces designed for productivity and functionality ensuring efficient layouts and high-quality infrastructure.",
  },
  {
    title: "Interior",
    desc: "We create stylish and functional interiors with modern designs, premium finishes, and personalized spaces.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-5xl font-bold mb-12">
            Services
          </h2>

          <div className="space-y-10">
            {services.map((service, index) => (
              <div key={index}>
                <h3 className="text-2xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-8 text-lg">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE COLLAGE */}
        <div className="overflow-hidden rounded-3xl">
          <Image
            src="/images/services.jpeg"
            alt="services"
            width={700}
            height={700}
            className="w-full object-cover hover:scale-105 transition duration-500"
          />
        </div>

      </div>
    </section>
  );
};

export default Services;