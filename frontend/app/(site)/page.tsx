// pages/index.js
import Navbar from '../components/NavBar/NavBar';
import ImageCarousel from '../components/ImageCarousel';
import ProductSection from '../components/ProductSection';
import ContactSection from '../components/ContactSection';
import AboutSection from '../components/AboutSection';
import { TeamSection } from '../components/TeamSection';

export default function Home() {
    return (
        <div className='bg-white'>
            <Navbar/>
            <section
                id="HomeSection"
                className="flex flex-col md:flex-row items-center m-auto justify-between p-6 h-screen bg-white text-black dark:bg-lightblue">
                <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
                    <ImageCarousel/>
                </div>
                <div className="w-full md:w-1/2 pl-4 flex flex-col items-center justify-center">
                    <h2 className=" text-4xl md:text-6xl font-bold mb-4 text-gray-700 leading-tight">
                        Warung
                        <span className="bg-orange-500 text-white px-2">Pecel</span><br/>
                        <span className="bg-orange-500 text-white px-2">enak</span>
                        ya cuma<br/>
                        disini
                    </h2>

                    <p className="text-sm leading-relaxed w-4/5 md:w-3/5">
                        Pecel adalah salah satu makanan tradisional Indonesia yang terkenal dengan cita
                        rasa bumbu kacangnya yang khas. Kami adalah usaha kecil yang berkomitmen untuk
                        menyajikan pecel yang otentik dan berkualitas tinggi. Dengan menggunakan
                        bahan-bahan segar dan alami, kami ingin memberikan pengalaman kuliner yang tak
                        terlupakan bagi pelanggan kami.
                    </p>
                </div>
            </section>
            <AboutSection/>
           <ProductSection/>
            <TeamSection/>
               <ContactSection/>
            
        </div>
    );
}
