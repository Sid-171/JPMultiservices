"use client";

import { useState } from "react";

const projects = [
  {
    title: "Residential Buildings",
    desc: "Premium residential project with modern infrastructure.",
    cover: "/images/jaganath.jpeg",

    gallery: [
      "/images/jaganath.jpeg",
      "/images/res1.jpeg",
    ],
  },

  {
    title: "Bungalows",
    desc: "Premium residential bungalow with modern architecture.",
    cover: "/images/ram.jpeg",

    gallery: [
      "/images/ram.jpeg",
      "/images/interior.jpeg",
      "/images/bung1.jpeg",
      "/images/bung2.jpeg",
      "/images/bung3.jpeg"
    ],
  },

  {
    title: "Hospital and Commercial Office",
    desc: "Modern office space designed for productivity and elegance.",
    cover: "/images/services.jpeg",

    gallery: [
      "/images/hos3.jpeg",
      "/images/offices.jpeg",
      "/images/hos1.jpeg",
    ],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="projects">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <p className="text-sm uppercase tracking-[4px] text-gray-500 mb-4">
          Featured Projects
        </p>

        <h2 className="text-5xl font-bold mb-16">
          Our Recent Work
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group overflow-hidden rounded-3xl border hover:shadow-2xl transition duration-300 cursor-pointer bg-white"
            >

              <div className="overflow-hidden">
                <img
                  src={project.cover}
                  alt={project.title}
                  className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {project.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

        {/* MODAL */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-8">

            <div className="bg-white max-w-6xl w-full rounded-3xl p-8 relative overflow-y-auto max-h-[90vh]">

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-3xl font-bold"
              >
                ×
              </button>

              {/* Title */}
              <h2 className="text-4xl font-bold mb-10">
                {selectedProject.title}
              </h2>

              {/* Gallery */}
              <div className="grid md:grid-cols-2 gap-6">

                {selectedProject.gallery.map(
                  (image: string, index: number) => (
                    <img
                      key={index}
                      src={image}
                      alt="project"
                      className="w-full h-[350px] object-cover rounded-2xl hover:scale-[1.02] transition duration-300"
                    />
                  )
                )}

              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;