"use client";

import { motion, type MotionValue } from "motion/react";
import { Mail, Phone } from "lucide-react";

type ContactSectionProps = {
  isActive: boolean;
  contactOpacity: MotionValue<number>;
  contactY: MotionValue<string>;
};

export default function ContactSection({
  isActive,
  contactOpacity,
  contactY,
}: ContactSectionProps) {
  
  const exactMapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.004831601632!2d86.9101116!3d21.5075307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1cf500463f7a81%3A0x6ba2f575110fb1c2!2sDK%20CONSTRUCTION%20%26%20CONSULTANCY!5e0!3m2!1sen!2sin!4v1780477629214!5m2!1sen!2sin";

  return (
    <motion.section
      style={{
        opacity: contactOpacity,
        y: contactY,
      }}
      className={`absolute inset-0 z-50 bg-black text-white overflow-y-auto ${
        isActive ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* TWO-COLUMN GRID LAYOUT (60/40 Split) */}
      <div className="relative z-10 grid min-h-full grid-cols-1 lg:grid-cols-[0.6fr_0.4fr] items-center px-6 md:px-12 lg:px-20 py-16 gap-12">
        
        {/* LEFT COLUMN: CONTACT TEXT PANEL */}
        <div className="flex items-center">
          <div className="pointer-events-auto w-full max-w-xl mx-auto lg:mx-0">
            <p className="text-xs uppercase tracking-[0.4em] text-neutral-400">
              Contact
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-tight tracking-[-0.05em] md:text-7xl">
              Let’s build something timeless together.
            </h2>

            <p className="mt-8 text-base leading-8 text-neutral-400 md:text-lg">
              Reach out to discuss your project, collaboration, or ideas. We’d love
              to hear from you.
            </p>

            <div className="mt-12 flex flex-col gap-8">
              <a
                href="mailto:hello@aureastudio.com"
                className="w-fit border border-white px-10 py-4 text-xs uppercase tracking-[0.3em] transition duration-300 hover:bg-white hover:text-black"
              >
                Get in touch
              </a>

              <div className="text-sm text-neutral-400">
                hello@aureastudio.com
              </div>

              <div className="flex items-center gap-6">
                <a
                  href="https://wa.me"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Contact on WhatsApp"
                  className="group"
                >
                  <Phone
                    size={20}
                    className="transition duration-300 group-hover:scale-110 group-hover:text-white/60"
                  />
                </a>

                <a
                  href="mailto:hello@aureastudio.com"
                  aria-label="Send email"
                  className="group"
                >
                  <Mail
                    size={20}
                    className="transition duration-300 group-hover:scale-110 group-hover:text-white/60"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 
  RIGHT COLUMN: INTERACTIVE GOOGLE MAP (PERFECT SQUARE) WITH CLICKABLE OVERLAY
*/}
<div className="w-full max-w-[100%] aspect-square mx-auto lg:ml-auto lg:mr-0 relative overflow-hidden rounded-2xl border border-neutral-800 group/map">
  
  {/* Transparent Link Overlay - Intercepts clicks and opens Google Maps */}
  <a 
    href="https://maps.app.goo.gl/N4bj2Vxq1Zs6SZBh9"
    target="_blank"
    rel="noopener noreferrer"
    className="absolute inset-0 z-20 block cursor-pointer"
    aria-label="Open DK Construction & Consultancy in Google Maps"
  />
  
  <iframe
    title="DK Construction & Consultancy Location Map"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    src={exactMapSrc}
    className="w-full h-full opacity-80 contrast-125 select-none pointer-events-none transition duration-300 group-hover/map:opacity-100"
  />
</div>

      </div>
    </motion.section>
  );
}
