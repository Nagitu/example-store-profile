import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
    return (
        <section id="AboutSection" className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto gap-4">
                    <div
                        className="col-span-1 md:col-span-2 bg-white p-8 shadow-lg flex items-center justify-center">
                        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-700">
                            Masih penasaran dengan kedai kami? Yuk kepoin kedai kami!
                        </h2>
                    </div>
                    <div
                        className="bg-orange-500 flex items-center justify-center h-48 md:h-64 rounded-xl">
                        <p className="text-lg md:text-3xl font-semibold text-white text-center">
                            10+ Tahun
                        </p>
                    </div>
                    <div className="bg-green-500 h-48 md:h-64 rounded-xl relative overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1543353071-873f17a7a088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzNjF8MHwxfGFsbHwxfHx8fHx8fHwxNjA5MzEzOTk4&ixlib=rb-1.2.1&q=80&w=1080"
                            alt="Delicious Indonesian Pecel"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-xl"/>
                    </div>
                    <div
                        className="bg-green-500 p-8 flex items-center justify-center h-48 md:h-64 rounded-xl">
                        <p className="text-lg md:text-3xl font-semibold text-white text-center">
                            5 outlet
                        </p>
                    </div>
                    <div className="bg-green-500 h-48 md:h-64 rounded-xl relative overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1543353071-873f17a7a088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzNjF8MHwxfGFsbHwxfHx8fHx8fHwxNjA5MzEzOTk4&ixlib=rb-1.2.1&q=80&w=1080"
                            alt="Delicious Indonesian Pecel"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-xl"/>
                    </div>                    <div
                        className="bg-blue-500 p-8 flex items-center justify-center h-48 md:h-64 rounded-xl">
                        <p className="text-lg md:text-3xl font-semibold text-white text-center">
                            4+ ⭐
                        </p>
                    </div>
                    <div className="bg-green-500 h-48 md:h-64 rounded-xl relative overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1543353071-873f17a7a088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzNjF8MHwxfGFsbHwxfHx8fHx8fHwxNjA5MzEzOTk4&ixlib=rb-1.2.1&q=80&w=1080"
                            alt="Delicious Indonesian Pecel"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-xl"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
