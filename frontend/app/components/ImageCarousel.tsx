// components/ImageCarousel.js
import { Carousel } from 'flowbite-react';
import Image from 'next/image';

const ImageCarousel = () => {
  return (
    <div className="w-full h-72 sm:h-80 md:h-96 lg:h-[500px]">
 <Carousel slideInterval={3000}>
      <Image
        src="https://images.unsplash.com/photo-1543353071-873f17a7a088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzNjF8MHwxfGFsbHwxfHx8fHx8fHwxNjA5MzEzOTk4&ixlib=rb-1.2.1&q=80&w=1080"
        alt="Delicious Indonesian Pecel"
        layout="responsive"
        width={1080}
        height={720}
      />
      <Image
        src="https://images.unsplash.com/photo-1430163393927-3dab9af7ea38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
        alt="Another delicious dish"
        layout="responsive"
        width={1080}
        height={720}
      />
      <Image
        src="https://images.unsplash.com/photo-1543353071-873f17a7a088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzNjF8MHwxfGFsbHwxfHx8fHx8fHwxNjA5MzEzOTk4&ixlib=rb-1.2.1&q=80&w=1080"
        alt="Delicious Indonesian Pecel"
        layout="responsive"
        width={1080}
        height={720}
      />
    </Carousel>
    </div>
  );
};

export default ImageCarousel;
