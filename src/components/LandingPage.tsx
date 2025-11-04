/* eslint-disable @next/next/no-img-element */

// Importa a fonte Reenie Beanie do Google Fonts
import Head from 'next/head';
import React, { useState } from 'react';
// Componente TimelineSection

const pulseAnimation = `
  @keyframes pulse-ring {
    0% {
      transform: scale(0.8);
      opacity: 0.8;
    }
    50% {
      transform: scale(1.8);
      opacity: 0.3;
    }
    100% {
      transform: scale(2.5);
      opacity: 0;
    }
  }
  .animate-pulse-ring {
    animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
`;

type TimelineItem = {
  year: number | string;
  title: string;
  subtitle?: string;
  description: string;
  position: { desktop: { top: string; left: string } };
};
type TimelineSectionProps = {
  timelineData: TimelineItem[];
  initialMessage: { title: string; subtitle: string; final: string };
  finalMessage: string;
};

const TimelineSection: React.FC<TimelineSectionProps> = ({
  timelineData,
  initialMessage,
  finalMessage,
}) => {
  const [activePoint, setActivePoint] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(true);
  const [visitedPoints, setVisitedPoints] = useState<Set<number>>(new Set());

  const handlePointInteraction = (index: number | null) => {
    setActivePoint(index);
    setShowHint(false);
    if (index !== null) {
      setVisitedPoints((prev) => new Set(prev).add(index));
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <Head>
        <style>{pulseAnimation}</style>
      </Head>

      <h2
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
        style={{ color: '#031C26', fontFamily: 'Reenie Beanie, cursive' }}
      >
        Qual é minha trajetória até aqui?
      </h2>

      {/* Hints */}
      {showHint && (
        <div className="hidden md:flex justify-center mb-4 animate-bounce">
          <div
            className="bg-purple-100 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
            style={{
              backgroundColor: '#103646',
              color: '#F5F5F5', // branco suave para contraste
            }}
          >
            <span>👇</span>
            <span>Passe o mouse nos pontos para ver mais detalhes</span>
          </div>
        </div>
      )}
      {showHint && (
        <div className="md:hidden flex justify-center mb-4 animate-bounce">
          <div className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
            <span>👇</span>
            <span>Toque nos cards para saber mais</span>
          </div>
        </div>
      )}

      {/* Timeline Desktop */}
      <div className="hidden md:block relative h-[500px] mb-12">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#365B76', stopOpacity: 0.3 }} />
              <stop offset="50%" style={{ stopColor: '#365B76', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#365B76', stopOpacity: 0.3 }} />
            </linearGradient>
          </defs>
          <path
            d="M 80 380 Q 200 330, 280 280 T 450 230 T 640 200 T 800 240 T 900 330"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            fill="none"
            strokeDasharray="8,8"
            className="animate-pulse"
          />
        </svg>

        {timelineData.map((item: TimelineItem, index: number) => (
          <div
            key={index}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 hover:scale-110"
            style={{
              left: item.position.desktop.left,
              top: item.position.desktop.top,
              zIndex: activePoint === index ? 20 : 10,
            }}
            onMouseEnter={() => handlePointInteraction(index)}
            onClick={() => handlePointInteraction(index)}
          >
            {/* Pulso principal (quando não visitado) - wrapper quadrado */}
            {!visitedPoints.has(index) && (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div
                  className="relative origin-center"
                  style={{ width: 28, height: 28, willChange: 'transform' }}
                >
                  <div
                    className="absolute inset-0 rounded-full aspect-square animate-pulse-ring opacity-60 box-border"
                    style={{ backgroundColor: '#403232', transformOrigin: 'center' }}
                  />
                </div>
              </div>
            )}

            {/* Pulso extra no hover (menor) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div
                className="relative origin-center"
                style={{ width: 32, height: 32, willChange: 'transform' }}
              >
                <div
                  className={`absolute inset-0 rounded-full aspect-square ${
                    activePoint === index ? 'opacity-75 animate-pulse-ring' : 'opacity-0'
                  } box-border`}
                  style={{
                    backgroundColor: '#9F7AEA',
                    animationDuration: '1s',
                    transformOrigin: 'center',
                  }}
                />
              </div>
            </div>

            {/* Ponto principal (agora também absolute para alinhamento perfeito) */}
            <div
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-4 border-white shadow-lg transition-all duration-300 ${
                activePoint === index ? 'scale-150 bg-purple-600' : 'bg-[#365B76]'
              } box-border z-10`}
            />

            {/* Data acima do ponto */}
            <div
              className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap"
              style={{ fontFamily: 'Reenie Beanie, cursive' }}
            >
              <div className="text-2xl font-bold text-[#000000]">{item.year}</div>
            </div>

            {/* Card de informação */}
            <div
              className={`absolute top-12 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-2xl p-4 min-w-[240px] transition-all duration-300 border-2 ${
                activePoint === index
                  ? 'opacity-100 scale-100 border-purple-400'
                  : 'opacity-0 scale-95 pointer-events-none border-transparent'
              }`}
              style={{ fontFamily: 'Reenie Beanie, cursive' }}
            >
              <div className="text-xl font-semibold text-gray-800 mb-1">{item.title}</div>
              {item.subtitle && <div className="text-lg text-gray-600 mb-2">{item.subtitle}</div>}
              <div className="text-base text-gray-500 italic">{item.description}</div>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l-2 border-t-2 border-purple-400 transform rotate-45" />
            </div>
          </div>
        ))}

        {/* Labels start/end */}
        {initialMessage && (
          <div
            className="absolute bottom-8 left-4 text-base"
            style={{ color: '#736253', fontFamily: 'Reenie Beanie, cursive' }}
          >
            <div className="font-semibold text-xl">{initialMessage.title}</div>
            {initialMessage.subtitle && (
              <div className="text-lg text-red-500">{initialMessage.subtitle}</div>
            )}
            {initialMessage.final && <div className="text-lg mt-1">{initialMessage.final}</div>}
          </div>
        )}
        {timelineData.length > 0 && (
          <div
            className="absolute top-16 right-4 text-base text-right"
            style={{ color: '#736253', fontFamily: 'Reenie Beanie, cursive' }}
          >
            <div className="font-semibold text-xl">
              {timelineData[timelineData.length - 1].title}
            </div>
          </div>
        )}
      </div>

      {/* Timeline Mobile */}
      <div className="md:hidden space-y-6">
        {timelineData.map((item: TimelineItem, index: number) => (
          <div
            key={index}
            className="relative"
            onClick={() => handlePointInteraction(activePoint === index ? null : index)}
          >
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="relative">
                  {/* Pulso mobile - wrapper quadrado */}
                  {!visitedPoints.has(index) && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div
                        className="relative origin-center"
                        style={{ width: 40, height: 40, willChange: 'transform' }}
                      >
                        <div
                          className="absolute rounded-full aspect-square animate-pulse-ring opacity-50"
                          style={{ inset: 0, backgroundColor: '#A78BFA' }}
                        />
                      </div>
                    </div>
                  )}

                  <div
                    className={`relative w-6 h-6 rounded-full border-4 border-white shadow-lg transition-all duration-300 ${
                      activePoint === index ? 'bg-purple-600 scale-125' : 'bg-[#365B76]'
                    }`}
                  />
                </div>

                {index < timelineData.length - 1 && (
                  <div
                    className="w-0.5 h-full bg-[#365B76] opacity-30 mt-2"
                    style={{ minHeight: '40px' }}
                  />
                )}
              </div>

              <div
                className={`flex-1 bg-white rounded-lg shadow-lg p-4 cursor-pointer transition-all duration-300 border-2 ${
                  activePoint === index
                    ? 'border-purple-400 scale-105'
                    : 'border-transparent hover:border-purple-200'
                }`}
                style={{ fontFamily: 'Reenie Beanie, cursive' }}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="text-3xl font-bold text-purple-600">{item.year}</div>
                  <div className="text-gray-400">{activePoint === index ? '▼' : '▶'}</div>
                </div>
                <div className="text-xl font-semibold text-gray-800 mb-1">{item.title}</div>
                {item.subtitle && <div className="text-lg text-gray-600 mb-2">{item.subtitle}</div>}

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activePoint === index ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="text-base text-gray-500 italic pt-2 border-t border-purple-200">
                    {item.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Final message */}
      {finalMessage && (
        <p
          className="text-center text-2xl mt-12 italic"
          style={{ color: '#736253', fontFamily: 'Reenie Beanie, cursive' }}
        >
          {finalMessage}
        </p>
      )}
    </div>
  );
};

import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { mockData } from '../data/mock';

import { FloatingIcons3D } from './FloatingIcons';
import { AnimatedLamp } from './AnimatedLamp';

export const LandingPage = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  // Estado para navegação entre páginas da seção 'sobre'
  const [aboutPage, setAboutPage] = useState(0);

  const handleWhatsAppClick = () => {
    window.open(mockData.tutor.whatsappLink, '_blank');
  };

  return (
    <>
      <Head>
        /* eslint-disable-next-line @next/next/no-page-custom-font */
        <link
          href="https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap"
          rel="stylesheet"
        />
      </Head>
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
        <section
          className="relative flex flex-col justify-center py-24 bg-[#FFFEFD] overflow-hidden 
                   items-center text-center 
                   md:items-start md:text-left"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl w-full">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-3xl lg:text-6xl font-bold leading-tight mb-8 text-secondary">
                    Seu futuro no mercado de TI começa pelo seu aprendizado de hoje.
                  </h1>
                  <div className="space-y-2">
                    {' '}
                    {/* REMOVI as classes de centralização */}
                    <p className="text-lg text-gray-default leading-relaxed">
                      Aulas particulares e mentorias focadas no que realmente importa para o
                      mercado.
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

                <div className="flex items-center justify-center pt-6"></div>
              </div>
              <div className="relative lg:pl-8">
                <div className="relative flex justify-center items-center h-full">
                  <img src="/womansection1.png" alt="Mulher estudando" className="relative z-0" />
                  <AnimatedLamp top={35} right={165} size={90} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Menina Perdida */}

        <FloatingIcons3D />

        {/* Target Audience */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#031C26' }}>
                Para quem são as aulas?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Atendo diferentes perfis com metodologia personalizada para cada necessidade
              </p>
            </div>
            {/* Para quem sao as aulas?*/}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mockData.targetAudience.map((audience, index) => {
                return (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 bg-white max-w-[360px] w-full mx-auto"
                  >
                    <CardHeader className="pb-4">
                      <div className="mx-auto w-30 h-30 rounded-full flex items-center justify-center mb-4 bg-gray-100 overflow-hidden">
                        {audience.image ? (
                          <img
                            src={audience.image}
                            alt={audience.title}
                            className="w-full h-full object-cover"
                          />
                        ) : null}
                      </div>
                      <CardTitle className="text-xl" style={{ color: '#031C26' }}>
                        {audience.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{audience.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="w-full flex flex-col items-center gap-4 mt-10">
            <p className="text-base text-gray-default text-center max-w-md">
              Metodologia inclusiva: Espaço seguro e respeitoso para diferentes formas de aprender.
            </p>
            <div className="flex justify-center w-full mt-12">
              <button
                className="px-4 py-3 rounded-lg text-black font-semibold text-lg shadow-lg transition-all duration-300"
                style={{
                  background: 'linear-gradient(90deg, #FFBF00 0%, #F2A50C 100%)',
                  border: 'none',
                  outline: 'none',
                }}
              >
                Agendar aula experimental
              </button>
            </div>
            <div className="flex items-center gap-4 mt-12">
              {/* Ícones ao lado do botão */}
              <img src="icons8-lgbt-96.png" alt="" className="w-10 h-10" />
              <img src="icons8-puzzles-96.png" alt="" className="w-10 h-10" />
              <img src="icons8-sunflower-96.png" alt="" className="w-10 h-10" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-[500px] flex flex-col items-center relative">
            {/* Botão seta esquerda */}
            <button
              onClick={() => setAboutPage((prev) => Math.max(prev - 1, 0))}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 z-10 disabled:opacity-30"
              disabled={aboutPage === 0}
              aria-label="Página anterior"
              style={{ display: aboutPage === 0 ? 'none' : 'block' }}
            >
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="#365B76"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            {/* Botão seta direita */}
            <button
              onClick={() => setAboutPage((prev) => Math.min(prev + 1, 1))}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 z-10 disabled:opacity-30"
              disabled={aboutPage === 1}
              aria-label="Próxima página"
              style={{ display: aboutPage === 1 ? 'none' : 'block' }}
            >
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="#365B76"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            {/* Conteúdo das páginas */}
            <div
              className="w-full flex justify-center items-center transition-all duration-500"
              style={{ minHeight: 400 }}
            >
              {aboutPage === 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center justify-center w-full">
                  {/* GIF à esquerda */}
                  <div className="flex justify-center items-center w-full">
                    <img
                      src="/video.gif"
                      alt="Video me apresentando"
                      className="max-w-xs w-full h-auto rounded-xl shadow-lg"
                    />
                  </div>
                  {/* Texto à direita */}
                  <div className="space-y-6 flex flex-col justify-center items-center w-full">
                    <div className="w-full max-w-lg">
                      <Badge
                        variant="secondary"
                        className="mb-4"
                        style={{ backgroundColor: '#F2E9E4', color: '#736253' }}
                      >
                        Sobre mim
                      </Badge>
                      <h2
                        className="text-5xl  lg:text-4xl font-bold mb-6"
                        style={{ color: '#031C26', fontFamily: 'Reenie Beanie, cursive' }}
                      >
                        Quem sou eu?
                      </h2>
                      <p
                        className="text-2xl text-gray-600 leading-relaxed mb-6"
                        style={{ fontFamily: 'Reenie Beanie, cursive' }}
                      >
                        Eu sou a Rafa, prazer em conhecê-los!
                      </p>
                      <p
                        className="text-2xl text-gray-600 leading-relaxed mb-6"
                        style={{ fontFamily: 'Reenie Beanie, cursive' }}
                      >
                        {mockData.tutor.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {aboutPage === 1 && (
                <TimelineSection
                  timelineData={mockData.timeline.data}
                  initialMessage={mockData.timeline.initialMessage}
                  finalMessage={mockData.timeline.finalMessage}
                />
              )}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#031C26' }}>
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
                      <Badge className="bg-blue-600 text-white px-4 py-1">Mais Popular</Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl mb-2" style={{ color: '#031C26' }}>
                      {service.title}
                    </CardTitle>
                    <div
                      className="text-3xl font-bold mb-2"
                      style={{ color: service.price === 'GRÁTIS' ? '#16a34a' : '#365B76' }}
                    >
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
                      variant={service.highlight ? 'default' : 'outline'}
                      style={
                        service.highlight
                          ? { backgroundColor: '#365B76' }
                          : { borderColor: '#365B76', color: '#365B76' }
                      }
                      onClick={handleWhatsAppClick}
                    >
                      {service.price === 'GRÁTIS' ? 'Agendar Agora' : 'Escolher Plano'}
                      <ArrowRight
                        className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                          hoveredService === index ? 'translate-x-1' : ''
                        }`}
                      />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
