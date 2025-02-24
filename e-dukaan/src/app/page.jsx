import Image from "next/image";
import frontImage from "../images/github.png";
import HeroSection from "@/components/home/HeroSection";
import RecentProducts from "@/components/home/RecentProducts";
import FeaturedProducts from "@/components/home/FeaturedProducts";

export default function Home() {
  return (
    <>
      <HeroSection />
      <RecentProducts />
      <FeaturedProducts />
    </>

    // <main className="px-4 py-4">
    //   <div className="pb-6">
    //     <h1 className="text-4xl font-semibold">Home Page</h1>
    //   </div>
    //   <div className="flex flex-col items-center justify-center">
    //     {/* <p>one simple React method</p>
    //     <img src={frontImage.src} alt="github" /> */}

    //     {/* <p>local image with Next - | Next Image TAG is Good for optimizing and security</p>
    //     <Image width={600} height={400} src={frontImage.src} /> */}

    //     {/* <p>using image from third party website / url | Next Image TAG is Good for optimizing and security</p>
    //     <Image
    //       width={500}
    //       height={400}
    //       src={
    //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLlP-k37s2PlKVsrxfX3S-c8EeC1-rFWGISA&s"
    //       }
    //       alt="nextimg"
    //     /> */}

    //   </div>
    // </main>
  );
}
