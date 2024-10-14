import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
// import TimelineComponent from "@/components/TimelineComponent";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <FloatingNav
        navItems={[
          { name: "About", link: "#about", icon: <FaHome /> },
          { name: "Experience", link: "#experience", icon: <FaHome /> },
          { name: "Projects", link: "#projects", icon: <FaHome /> },
          { name: "Contact", link: "#contact", icon: <FaHome /> },
        ]}
      />
      <Hero />
      <Grid />
      {/* <TimelineComponent />*/}
    </div>
  );
}
