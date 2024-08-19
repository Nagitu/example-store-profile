"use client";

import { Card } from "flowbite-react";
import Image from "next/image";

export function TeamSection() {
  return (
    <section
      id="TeamSection"
      className="m-10 bg-white text-black p-6 flex flex-col items-center"
    >
      <h1 className="text-4xl font-bold mb-10">Meet Our Team</h1>
      <div className="container mx-auto flex flex-col md:flex-row justify-center gap-8">
        <Card className="max-w-sm w-full text-center shadow-xl">
          <div className="flex flex-col items-center pb-10">
            <Image
              alt="Bonnie Green"
              height="120"
              src="https://images.unsplash.com/photo-1445053023192-8d45cb66099d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fHww"
              width="120"
              className="mb-4 rounded-full shadow-lg border-4 border-orange-500"
            />
            <h5 className="mb-1 text-2xl font-bold text-gray-900">Bonnie Green</h5>
            <span className="text-md text-gray-600">Owner</span>
            <div className="mt-4 flex space-x-3">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300"
              >
                Follow
              </a>
            </div>
          </div>
        </Card>
        {/* Additional team members can be added here */}
      </div>
    </section>
  );
}
