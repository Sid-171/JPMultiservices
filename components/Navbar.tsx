"use client";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        <h1 className="text-2xl font-bold">
          JP Multiservices
        </h1>

        <nav className="hidden md:flex gap-10 font-medium">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;