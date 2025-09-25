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
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="font-bold text-xl" style={{color: '#031C26'}}>Rafaela Nascimento</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#sobre" className="text-gray-600 hover:text-blue-600 transition-colors">Sobre</a>
              <a href="#servicos" className="text-gray-600 hover:text-blue-600 transition-colors">Serviços</a>
              <a href="#depoimentos" className="text-gray-600 hover:text-blue-600 transition-colors">Depoimentos</a>
              <Button onClick={handleWhatsAppClick} className="bg-green-600 hover:bg-green-700">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
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
                <Badge variant="secondary" className="text-sm font-medium" style={{backgroundColor: '#94B8D8', color: '#031C26'}}>
                  {mockData.tutor.slogan}
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight" style={{color: '#031C26'}}>
                  Aprenda tech de verdade com quem vive o
                  <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent flex items-center gap-4">
                    mercado
                    <img 
                      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=60&fit=crop" 
                      alt="Tech workspace" 
                      className="rounded-lg shadow-md"
                    />
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Aulas particulares e mentoria focadas no que realmente importa: 
                  <strong> sua evolução profissional em tecnologia</strong>
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={handleVideoClick}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Conheça-me
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={handleScheduleClick}
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg transition-all duration-300"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar Horário
                </Button>
              </div>

              <div className="flex items-center justify-center pt-6">
                <div className="px-6 py-3 rounded-full" style={{backgroundColor: '#F2E9E4'}}>
                  <span className="text-2xl font-bold" style={{color: '#031C26'}}>
                    {mockData.tutor.slogan}
                  </span>
                </div>
              </div>
            </div>

            <div className="relative lg:pl-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl transform rotate-3"></div>
                <img 
                  src={mockData.tutor.image}
                  alt="Rafaela Nascimento"
                  className="relative z-10 w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                />
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