import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { 
  Code, 
  Palette, 
  Users, 
  Heart, 
  BookOpen, 
  TrendingUp, 
  Briefcase, 
  Target, 
  User, 
  Network, 
  Star,
  MessageCircle,
  Calendar,
  CheckCircle,
  ArrowRight,
  Play,
  Sparkles
} from 'lucide-react';
import { mockData } from '../data/mock';

const iconMap = {
  Code, Palette, Users, Heart, BookOpen, TrendingUp, 
  Briefcase, Target, User, Network
};

export const LandingPage = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(mockData.tutor.whatsappLink, '_blank');
  };

  const handleVideoClick = () => {
    setShowVideo(true);
    // TODO: Implementar player de vídeo
    alert('Aqui será exibido o vídeo de apresentação da Rafaela. Vídeo será carregado quando disponível.');
  };

  const handleScheduleClick = () => {
    // TODO: Integrar com Google Calendar
    window.open('https://calendar.google.com', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
         <span>
          <img src="/rubrica.svg" className="w-52 h-52" alt="" />
       </span>
            </div>
            <nav className="hidden md:flex items-center space-x-4">
              <a
                href="#inicio"
                className="transition-colors px-4 py-2 text-[#403232] rounded-[10px] h-3 w-3 flex items-center justify-center hover:text-[#F8F8F8] hover:bg-[#403232]"
                style={{ minWidth: '90px', minHeight: '38px' }}
              >
                Inicio
              </a>
              <a
                href="#sobre"
                className="transition-colors px-4 py-2 text-[#403232] rounded-[10px] h-3 w-3 flex items-center justify-center hover:text-[#F8F8F8] hover:bg-[#403232]"
                style={{ minWidth: '90px', minHeight: '38px' }}
              >
                Sobre
              </a>
              <a
                href="#aulas"
                className="transition-colors px-4 py-2 text-[#403232] rounded-[10px] h-3 w-3 flex items-center justify-center hover:text-[#F8F8F8] hover:bg-[#403232]"
                style={{ minWidth: '90px', minHeight: '38px' }}
              >
                Aulas
              </a>
              <a
                href="#depoimentos"
                className="transition-colors px-4 py-2 text-[#403232] rounded-[10px] h-3 w-3 flex items-center justify-center hover:text-[#F8F8F8] hover:bg-[#403232]"
                style={{ minWidth: '140px', minHeight: '38px' }}
              >
                Depoimentos
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-8 text-secondary" >
                  Seu futuro no mercado de TI começa pelo seu aprendizado de hoje.
                </h1>
                <div className="space-y-2">
                  <p className="text-xl text-gray-default leading-relaxed ">
                    Aulas particulares e mentoria focadas no que realmente importa:
                  </p>
                  <p className="text-xl text-secondary leading-relaxed font-bold">
                    sua evolução profissional em tecnologia
                  </p>
                </div>
                <div className="mt-6">
                  <button
                    className="px-8 py-3 rounded-lg text-black font-semibold text-lg shadow-lg transition-all duration-300 mt-6"
                    style={{
                      background: 'linear-gradient(90deg, #FFBF00 0%, #F2A50C 100%)',
                      border: 'none',
                      outline: 'none',
                    }}
                  >
                    Agendar aula experimental
                  </button>
                </div>
              </div>
              
            

              <div className="flex items-center justify-center pt-6">
              </div>
            </div>
            <div className="relative lg:pl-8">
              <div className="relative flex justify-center items-center h-full">
                <img src="/sectionone.svg" alt="" />
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{color: '#031C26'}}>
              Para quem são as aulas?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Atendo diferentes perfis com metodologia personalizada para cada necessidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockData.targetAudience.map((audience, index) => {
              const IconComponent = iconMap[audience.icon as keyof typeof iconMap];
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
                  <CardHeader className="pb-4">
                    <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4" 
                         style={{backgroundColor: index === 0 ? '#94B8D8' : index === 1 ? '#A6896F' : '#BFA288'}}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl" style={{color: '#031C26'}}>{audience.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{audience.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-4" style={{backgroundColor: '#F2E9E4', color: '#736253'}}>
                  Sobre mim
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{color: '#031C26'}}>
                  Olá, eu sou a {mockData.tutor.name}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {mockData.tutor.description}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Minha jornada na tech me ensinou que o mais importante é focar no que realmente importa: 
                  conhecimento prático e aplicável no mercado de trabalho.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold" style={{color: '#031C26'}}>Minha Trajetória:</h3>
                <div className="space-y-3">
                  {mockData.tutor.careerPath.map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#365B76'}}></div>
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockData.technologies.map((tech, index) => {
                const IconComponent = iconMap[tech.icon as keyof typeof iconMap];
                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                             style={{backgroundColor: index === 0 ? '#94B8D8' : index === 1 ? '#A6896F' : '#BFA288'}}>
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <CardTitle className="text-lg" style={{color: '#031C26'}}>{tech.category}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {tech.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{color: '#031C26'}}>
              Como posso fazer você mudar de vida?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escolha o formato que melhor se adapta ao seu momento e sonhos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockData.services.map((service, index) => (
              <Card 
                key={index} 
                className={`relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-0 ${
                  service.highlight ? 'ring-2 ring-blue-500' : ''
                }`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {service.highlight && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">
                      Mais Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-2" style={{color: '#031C26'}}>
                    {service.title}
                  </CardTitle>
                  <div className="text-3xl font-bold mb-2" 
                       style={{color: service.price === 'GRÁTIS' ? '#16a34a' : '#365B76'}}>
                    {service.price}
                  </div>
                  {service.price !== 'GRÁTIS' && (
                    <p className="text-sm text-gray-500">por aula</p>
                  )}
                  <CardDescription className="text-base mt-4">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full mt-6 transition-all duration-300"
                    variant={service.highlight ? "default" : "outline"}
                    style={service.highlight ? {backgroundColor: '#365B76'} : {borderColor: '#365B76', color: '#365B76'}}
                    onClick={handleWhatsAppClick}
                  >
                    {service.price === 'GRÁTIS' ? 'Agendar Agora' : 'Escolher Plano'}
                    <ArrowRight className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                      hoveredService === index ? 'translate-x-1' : ''
                    }`} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;