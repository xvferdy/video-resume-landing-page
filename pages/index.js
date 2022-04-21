import Head from "next/head";
import Image from "next/image";

import About from "../components/About";
import Contact from "../components/Contact";
import GetStarted from "../components/GetStarted";
import Header from "../components/Header";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Head>
        <title>Visume</title>
        <meta name="description" content="Video resume landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <GetStarted />
        <About />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
