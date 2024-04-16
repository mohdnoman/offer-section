import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-200 font-sans py-8 text-center">
      <div className="container mx-auto flex justify-between px-4">
        {/* Left column */}
        <div>
          <h1 className="font-sans text-green-900 text-2xl">Green Bank</h1>
          <p className="font-sans text-green-800 opacity-95 text-xl mt-4">© 2024 GreenBank. All rights reserved.</p>
        </div>

        {/* Right column */}
        <div className="flex flex-col justify-center">
          <h1 className="font-sans text-green-900 leading-relaxed text-3xl">
            Empowering your financial <br />
            journey, one transaction at a time.
          </h1>
          <button className="bg-green-400 px-4 py-2 rounded-full text-green-950 text-lg font-sans mt-4">
            Buy Template
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
