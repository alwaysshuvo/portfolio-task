"use client";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);

    // optional: auto hide after 3s
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="w-full bg-[#171B1A] py-12 md:py-24">
      {/* Section Header */}
      <h2 className="text-center text-3xl md:text-[48px] font-bold text-white mb-12 md:mb-20 px-4">
        Contact
      </h2>

      {/* Left empty + Right content */}
      <div className="flex flex-col md:flex-row">
        {/* Left empty space */}
        <div className="hidden md:block md:w-[525px]"></div>

        {/* Right content */}
        <div className="flex-1 md:pr-16 px-4 md:px-0">
          <div className="max-w-2xl">
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              {/* First & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2 md:mb-3 text-base md:text-[20px]">
                    Fast name*
                  </label>
                  <input
                    type="text"
                    required
                    className="contact-input"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2 md:mb-3 text-base md:text-[20px]">
                    Last name*
                  </label>
                  <input
                    type="text"
                    required
                    className="contact-input"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2 md:mb-3 text-base md:text-[20px]">
                    Email*
                  </label>
                  <input
                    type="email"
                    required
                    className="contact-input"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2 md:mb-3 text-base md:text-[20px]">
                    Phone*
                  </label>
                  <input
                    type="tel"
                    required
                    className="contact-input"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-white font-semibold mb-2 md:mb-3 text-base md:text-[20px]">
                  Message*
                </label>
                <textarea
                  rows="6"
                  required
                  className="contact-input resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full py-2 md:py-3 rounded-lg bg-[#f59e0b] text-white font-bold text-sm md:text-base hover:bg-[#F5BD4D] transition"
              >
                Send message
              </button>

              {/* Success Message */}
              {sent && (
                <p className="text-green-400 text-center font-semibold mt-4 text-sm md:text-base">
                  ✅ Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
