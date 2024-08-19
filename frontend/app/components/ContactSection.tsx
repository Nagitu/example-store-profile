"use client";

import { useEffect, useState } from "react";
import { Footer } from "flowbite-react";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

export default function ContactSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="ContactSection">
     <Footer className="">
  <div className="w-full">
    <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4 text-yellow-500">
      <div className="text-white">
        <Footer.Title title="Follow us on Instagram" />
        <Footer.LinkGroup col>
          <Footer.Link href="https://instagram.com/yourusername" target="_blank">
            @yourusername
          </Footer.Link>
          <Footer.Link href="#">
            <div className="flex space-x-6">
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsTwitter} />
            </div>
          </Footer.Link>
        </Footer.LinkGroup>
      </div>
      <div className="text-white">
        <Footer.Title title="Contact Us" />
        <Footer.LinkGroup col>
          <Footer.Link href="mailto:contact@yourdomain.com">
            contact@yourdomain.com
          </Footer.Link>
          <Footer.Link href="tel:+1234567890">
            +1 234 567 890
          </Footer.Link>
        </Footer.LinkGroup>
      </div>

      {/* Address */}
      <div className="text-white">
        <Footer.Title title="Address" />
        <Footer.LinkGroup col>
          <Footer.Link href="#">
            123 Main Street, <br /> City, Country 12345
          </Footer.Link>
        </Footer.LinkGroup>
      </div>

      {/* Operational Time */}
      <div className="text-white">
        <Footer.Title title="Operational Time" />
        <Footer.LinkGroup col>
          <Footer.Link href="#">
            Monday - Friday: 08:00 - 22:00
          </Footer.Link>
          <Footer.Link href="#">
            Saturday - Sunday: 09:00 - 20:00
          </Footer.Link>
        </Footer.LinkGroup>
      </div>
    </div>

    <div className="w-full bg-gray-500 text-white px-4 py-6 sm:flex sm:items-center sm:justify-between">
      <Footer.Copyright href="#" by="YourCompany™" year={2023} className="text-white" />
    </div>
  </div>
</Footer>

    </section>
  );
}
