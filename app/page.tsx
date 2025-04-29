import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import {MyTimeLine} from "@/components/main/MyTimeLine";
import Footer from "@/components/main/Footer";


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-10">
        <Hero/>
        <Skills/>
        <Projects/>
        <MyTimeLine/>
        <Footer/>
      </div>
    </main>
  );
}
