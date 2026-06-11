import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedProject from "../components/FeaturedProject";
import Projects from "../components/Projects";
import ClientWork from "../components/ClientWork";
export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white grid-bg relative">
            <Navbar />
            <Hero />
            <FeaturedProject />
            <Projects />
            <ClientWork />
        </main>
    );
}