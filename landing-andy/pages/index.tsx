import AboutMe from '@/components/AboutMe';
import ContactMe from '@/components/ContactMe';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Technologies from '@/components/Technologies';
// import Layout from '@/layout/LayoutSections';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe /> 
      <Technologies />
      <Projects />
      <ContactMe />
      <Footer />
    </main>
  );
}
