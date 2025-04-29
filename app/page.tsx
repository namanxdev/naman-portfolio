"use client"

import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import {MyTimeLine} from "@/components/main/MyTimeLine";
import Footer from "@/components/main/Footer";
import { NavBar } from "@/components/main/NavBar";


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-10">
        <NavBar/>
        <Hero/>
        <Skills/>
        <Projects/>
        <MyTimeLine/>
        <Footer/>
      </div>
    </main>
  );
}
