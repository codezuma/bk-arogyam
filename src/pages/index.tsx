import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@components/navbar";
import HeroSection from "@components/hero-section";
import FeatureSection from "@components/feature-section";
import ApproachSection from "@components/approach-section";
import CtaSection from "@components/cta-section";
import Footer from "@components/footer";
import ReviewSection from "@components/review-section";
import StatsSection from "@components/stats-section";
import Head from "next/head";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {


  return <>
    <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11345315403"
        />
  <Script id="google-analytics" strategy="afterInteractive" >
 {`  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11345315403');
`}
</Script> 
  <Head>
   </Head>
  <Navbar />
  <HeroSection/>
  <FeatureSection/>
  <ApproachSection/>
  <StatsSection/>
  <ReviewSection/>
  <CtaSection/>
  <Footer/>
  </> 
}
