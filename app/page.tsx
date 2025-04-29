import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import {MyTimeLine} from "@/components/main/MyTimeLine";


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-[850px] gap-20">
        <Hero/>
        <Skills/>
        <Projects/>
        <MyTimeLine/>
      </div>
    </main>
  );
}
