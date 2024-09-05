import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="bg-blue-500 text-white py-20 text-center  grid grid-cols-1">
        {/* left part */}
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to the Kare Alumni Association
          </h1>
          <p className="text-lg mb-8">
            Strengthen connections, support your alma mater, and advance your
            career with our comprehensive alumni network.
          </p>
          <a
            href="/register"
            className="bg-blue-700 hover:bg-blue-600 text-white py-2 px-6 rounded-lg text-lg"
          >
            Get Started
          </a>
        </div>
        {/* image */}
        <div>

        </div>
      </section>
    </div>
  );
};

export default Hero;
