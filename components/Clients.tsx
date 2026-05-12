const clients = [
  "Nine Pearls Healthcare Pvt. Ltd.",
  "Shanti Vanam Wellness Center",
  "Pioneer Hospital & Cardiac Center",
  "Indian Institute of Metabolic Sciences",
  "Apple Hospital",
  "Raddiant Plus Hospital",
  "City Care Hospital",
  "Lokmanya Hospital",
  "Jagannath Heights",
  "Shivchandra Heights",
  "Warunase Palace",
  "Thinkitive Technology Pvt. Ltd.",
];

const Clients = () => {
  return (
    <section
      id="clients"
      className="min-h-screen bg-[#f5f5f5] px-8 py-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-20">
          <p className="uppercase tracking-[4px] text-gray-500 mb-4">
            Trusted Projects
          </p>

          <h1 className="text-6xl font-bold">
            Our Clients
          </h1>
        </div>

        {/* Clients Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl px-6 py-5 text-lg font-medium shadow-sm hover:shadow-xl transition duration-300"
            >
              {client}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Clients;