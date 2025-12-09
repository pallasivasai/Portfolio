import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Research from '@/components/Research';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <AnimatedSection animation="fade-up">
        <About />
      </AnimatedSection>
      <AnimatedSection animation="fade-up" delay={100}>
        <Research />
      </AnimatedSection>
      <AnimatedSection animation="fade-up" delay={100}>
        <Projects />
      </AnimatedSection>
      <AnimatedSection animation="fade-up" delay={100}>
        <Education />
      </AnimatedSection>
      <AnimatedSection animation="fade-up" delay={100}>
        <Experience />
      </AnimatedSection>
      <AnimatedSection animation="fade-up" delay={100}>
        <Skills />
      </AnimatedSection>
      <AnimatedSection animation="fade-up" delay={100}>
        <Services />
      </AnimatedSection>
      <AnimatedSection animation="fade-up" delay={100}>
        <Contact />
      </AnimatedSection>
      <Footer />
    </div>
  );
};

export default Index;
