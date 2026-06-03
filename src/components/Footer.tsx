import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 text-sm text-[#EAEAEA]/60 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="space-y-2">
          <p className="text-sm font-semibold tracking-[0.26em] text-[#EAEAEA]">
            SYLVA AURIS
          </p>
          <p className="max-w-sm">
            Handcrafted terrariums with a personalized digital care companion.
          </p>
        </div>
        
      </div>
      <div className="mt-4 pb-6 text-center text-sm text-[#EAEAEA]/40">
        © {new Date().getFullYear()} Sylva Auris. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

