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
    <section className="w-full bg-[#171B1A] py-24">
      {/* Section Header */}
      <h2 className="text-center text-[48px] font-bold text-white mb-20">
        Contact
      </h2>

      {/* Left empty + Right content */}
      <div className="flex">
        {/* Left empty space */}
        <div className="w-[525px]"></div>

        {/* Right content */}
        <div className="flex-1 pr-16">
          <div className="max-w-2xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* First & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-3 text-[20px]">
                    Fast name*
                  </label>
                  <input
                    type="text"
                    required
                    className="contact-input"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-3 text-[20px]">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-3 text-[20px]">
                    Email*
                  </label>
                  <input
                    type="email"
                    required
                    className="contact-input"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-3 text-[20px]">
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
                <label className="block text-white font-semibold mb-3 text-[20px]">
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
                className="w-full py-3 rounded-lg bg-[#f59e0b] text-white font-bold text-base hover:bg-[#F5BD4D] transition"
              >
                Send message
              </button>

              {/* Success Message */}
              {sent && (
                <p className="text-green-400 text-center font-semibold mt-4">
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
