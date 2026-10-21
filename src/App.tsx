import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ShowcaseSection } from './components/ShowcaseSection';
import { ServicesSection } from './components/ServicesSection';
import { ValuesSection } from './components/ValuesSection';
import { ProjectMonograph } from './components/ProjectMonograph';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { ProjectsGallery } from './components/ProjectsGallery';
import { ServicesDetailedView } from './components/ServicesDetailedView';
import { AboutSection } from './components/AboutSection';
import { ContactView } from './components/ContactView';
import { Footer } from './components/Footer';
import { ProjectLightboxModal } from './components/ProjectLightboxModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { CommissionModal } from './components/CommissionModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { PROJECTS_DATA, ServiceDetail, ProjectItem } from './data/bularcrestData';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'services' | 'projects' | 'about' | 'contact'>('home');
  
  // Modals state
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [isCommissionOpen, setIsCommissionOpen] = useState(false);
  const [commissionPrefillService, setCommissionPrefillService] = useState<string | undefined>();
  const [commissionPrefillProject, setCommissionPrefillProject] = useState<string | undefined>();
  const [commissionInitialEmail, setCommissionInitialEmail] = useState<string | undefined>();

  // Marquee projects for monograph and showcase
  const monographProject = PROJECTS_DATA.find((p) => p.id === 'obsidian-pavilion') || PROJECTS_DATA[0];
  const alpineProject = PROJECTS_DATA.find((p) => p.id === 'alpine-monolith') || PROJECTS_DATA[1];

  const handleOpenCommission = (options?: { service?: string; project?: string; email?: string }) => {
    setCommissionPrefillService(options?.service);
    setCommissionPrefillProject(options?.project);
    setCommissionInitialEmail(options?.email);
    setIsCommissionOpen(true);
  };

  const handleSelectServiceFromSection = (service: ServiceDetail) => {
    setSelectedService(service);
  };

  const handleInquireFromServiceModal = (service: ServiceDetail) => {
    setSelectedService(null);
    handleOpenCommission({ service: service.title });
  };

  const handleInquireFromProjectModal = (project: ProjectItem) => {
    setSelectedProject(null);
    handleOpenCommission({ project: project.title });
  };

  return (
    <div className="min-h-screen bg-[#0B0E14] text-[#F9FAFB] relative selection:bg-[#C5A059] selection:text-[#0B0E14] font-sans overflow-x-hidden">
      {/* Dynamic Spatial Ambient Atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[20%] left-1/4 w-[700px] h-[700px] rounded-full bg-[#C5A059]/10 blur-[140px]" />
        <div className="absolute top-[45%] -right-[15%] w-[650px] h-[650px] rounded-full bg-[#1B2A4A]/25 blur-[150px]" />
        <div className="absolute -bottom-[20%] left-[10%] w-[800px] h-[800px] rounded-full bg-[#2a2a2a]/40 blur-[160px]" />
      </div>

      {/* Floating Pill Top Navigation */}
      <Navbar
        currentView={currentView}
        onNavigate={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenCommission={() => handleOpenCommission()}
      />

      {/* Main View Container */}
      <main className="relative z-10 w-full pt-20">
        {currentView === 'home' && (
          <>
            <HeroSection
              onStartProject={() => handleOpenCommission()}
              onExploreDomains={() => {
                const el = document.getElementById('services');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />
            <ShowcaseSection
              project={alpineProject}
              onSelectProject={(proj) => setSelectedProject(proj)}
            />
            <ServicesSection
              onSelectService={handleSelectServiceFromSection}
            />
            <ValuesSection />
            <ProjectMonograph
              project={monographProject}
              onOpenProject={(proj) => setSelectedProject(proj)}
              onViewAllProjects={() => {
                setCurrentView('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <TestimonialsSection />
            <FaqSection
              onOpenCommission={() => handleOpenCommission()}
            />
            <CtaSection
              onOpenFullCommission={(email) => handleOpenCommission({ email })}
            />
          </>
        )}

        {currentView === 'services' && (
          <>
            <ServicesDetailedView
              onSelectServiceModal={(srv) => setSelectedService(srv)}
              onOpenCommission={(serviceTitle) => handleOpenCommission({ service: serviceTitle })}
            />
            <CtaSection
              onOpenFullCommission={(email) => handleOpenCommission({ email })}
            />
          </>
        )}

        {currentView === 'projects' && (
          <>
            <ProjectsGallery
              onSelectProject={(proj) => setSelectedProject(proj)}
              onOpenCommission={() => handleOpenCommission()}
            />
            <CtaSection
              onOpenFullCommission={(email) => handleOpenCommission({ email })}
            />
          </>
        )}

        {currentView === 'about' && (
          <>
            <AboutSection
              onOpenCommission={() => handleOpenCommission()}
            />
            <CtaSection
              onOpenFullCommission={(email) => handleOpenCommission({ email })}
            />
          </>
        )}

        {currentView === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenCommission={() => handleOpenCommission()}
      />

      {/* Interactive Lightbox & Details Modals */}
      <ProjectLightboxModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquireProject={handleInquireFromProjectModal}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onInquireService={handleInquireFromServiceModal}
      />

      <CommissionModal
        isOpen={isCommissionOpen}
        onClose={() => {
          setIsCommissionOpen(false);
          setCommissionPrefillService(undefined);
          setCommissionPrefillProject(undefined);
          setCommissionInitialEmail(undefined);
        }}
        preselectedService={commissionPrefillService}
        preselectedProject={commissionPrefillProject}
        initialEmail={commissionInitialEmail}
      />

      {/* Persistent WhatsApp Floating Action */}
      <WhatsAppButton />
    </div>
  );
}
