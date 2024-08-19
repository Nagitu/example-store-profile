"use client";

import { Card } from "flowbite-react";
import Image from "next/image";

export default function ProductSection() {

  const products = [
    { id: 1, title: "Pecel Lele", description: "Pecel Lele enak dengan sambal khas.", image: "https://images.unsplash.com/photo-1543353071-873f17a7a088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzNjF8MHwxfGFsbHwxfHx8fHx8fHwxNjA5MzEzOTk4&ixlib=rb-1.2.1&q=80&w=1080" },
    { id: 2, title: "Pecel Ayam", description: "Pecel Ayam gurih dan lezat.", image: "https://images.unsplash.com/photo-1543353071-873f17a7a088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzNjF8MHwxfGFsbHwxfHx8fHx8fHwxNjA5MzEzOTk4&ixlib=rb-1.2.1&q=80&w=1080" },
    { id: 3, title: "Pecel Madiun", description: "Pecel khas Madiun yang nikmat.", image: "https://images.unsplash.com/photo-1543353071-873f17a7a088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzNjF8MHwxfGFsbHwxfHx8fHx8fHwxNjA5MzEzOTk4&ixlib=rb-1.2.1&q=80&w=1080" },
    { id: 4, title: "Pecel Tumpang", description: "Pecel Tumpang dengan sambal tumpang khas.", image: "https://images.unsplash.com/photo-1543353071-873f17a7a088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzNjF8MHwxfGFsbHwxfHx8fHx8fHwxNjA5MzEzOTk4&ixlib=rb-1.2.1&q=80&w=1080" },
    { id: 5, title: "Nasi Pecel", description: "Nasi Pecel dengan bumbu kacang lezat.", image: "https://images.unsplash.com/photo-1543353071-873f17a7a088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzNjF8MHwxfGFsbHwxfHx8fHx8fHwxNjA5MzEzOTk4&ixlib=rb-1.2.1&q=80&w=1080" },
    { id: 6, title: "Pecel Rawon", description: "Kombinasi pecel dan rawon.", image: "https://images.unsplash.com/photo-1543353071-873f17a7a088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzNjF8MHwxfGFsbHwxfHx8fHx8fHwxNjA5MzEzOTk4&ixlib=rb-1.2.1&q=80&w=1080" },
    { id: 7, title: "Pecel Tempe", description: "Pecel dengan tempe goreng.", image: "https://images.unsplash.com/photo-1543353071-873f17a7a088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzNjF8MHwxfGFsbHwxfHx8fHx8fHwxNjA5MzEzOTk4&ixlib=rb-1.2.1&q=80&w=1080" },
    { id: 8, title: "Pecel Sayur", description: "Pecel dengan sayuran segar.", image:"https://images.unsplash.com/photo-1543353071-873f17a7a088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzNjF8MHwxfGFsbHwxfHx8fHx8fHwxNjA5MzEzOTk4&ixlib=rb-1.2.1&q=80&w=1080" },
  ];

  return (
    <section id="ProductSection" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Menu Pecel Kami
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="max-w-sm"
              renderImage={() => (
                <Image
                  width={500}
                  height={500}
                  src={product.image}
                  alt={product.title}
                  className="object-cover"
                />
              )}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {product.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {product.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
