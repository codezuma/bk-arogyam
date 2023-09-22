import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@components/navbar";
import HeroSection from "@components/hero-section";
import FeatureSection from "@components/feature-section";
import ApproachSection from "@components/approach-section";
import CtaSection from "@components/cta-section";
import Footer from "@components/footer";
import ReviewSection from "@components/review-section";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <>
  <Navbar />
  <HeroSection/>
  <FeatureSection/>
  <ApproachSection/>
  <ReviewSection/>
  <CtaSection/>
  <Footer/>
  </> 
}
