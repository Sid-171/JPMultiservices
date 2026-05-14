"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-between gap-10"
    >
      <div className="flex-1">
        <h1 className="text-6xl font-bold leading-tight">
          Structures That Speak Quality
        </h1>

        <p className="mt-6 text-gray-600 text-lg max-w-xl">
          Premium construction solutions for residential,
          commercial, healthcare, and interior projects.
        </p>

        <div className="mt-8 flex gap-4">
          <a href="#projects" className="bg-black text-white px-6 py-3 rounded-lg inline-block">View Projects</a>

          <a href="#contact"
             className="border border-black px-6 py-3 rounded-lg inline-block">
             Contact Us
          </a>
        </div>
      </div>

      <div className="flex-1">
        <Image
          src="/images/mainLogo.png"
          alt="construction"
          width={700}
          height={700}
          className="rounded-2xl object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;