import React from 'react';
import { motion, useAnimationFrame } from 'framer-motion';

export const FloatingIcons3D: React.FC = () => {
  const icons = [
    '/Group-1.svg',
    '/Group-2.svg',
    '/Group-4.svg',
    '/Group-5.svg',
    '/Group-6.svg',
    '/Group-7.svg',
    '/Group-8.svg',
    '/Group-9.svg',
    '/Group.svg',
    '/Group7.svg',
    '/nextJS.svg',
    '/nodejs_logo.svg.svg',
    '/react.svg',
    '/Symbol.svg.svg',
    '/typescript_logo.svg.svg',
    '/Vector.svg',
  ];

  const [rotation, setRotation] = React.useState(0);

  // Rotação suave e contínua
  useAnimationFrame((t) => {
    setRotation((t / 1000) * 50);
  });

  // Dividir ícones em dois grupos
  const backIcons = icons.slice(0, Math.ceil(icons.length / 2));
  const frontIcons = icons.slice(Math.ceil(icons.length / 2));

  return (
    <section className="relative flex flex-col items-center justify-center py-24 bg-[#FFF8F2] overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-[#403232] text-center mb-4">
        Já se sentiu perdida em um furacão de informações?
      </h2>
      <p className="text-lg text-gray-700 text-center mb-10">
        Você <strong>não</strong> precisa entender tudo… Só precisa começar.
      </p>

      {/* Container principal */}
      <div className="relative w-full max-w-4xl flex items-center justify-center h-[500px]">
        {/* Ícones atrás da menina */}
        <div
          className="absolute w-full h-full flex items-center justify-center"
          style={{ perspective: '1200px' }}
        >
          {backIcons.map((icon, i) => {
            const angle = (i / backIcons.length) * 2 * Math.PI;
            const radius = 200;
            const speed = rotation * (Math.PI / 150);
            const x = Math.cos(angle + speed) * radius;
            const z = Math.sin(angle + speed) * radius;
            const y = Math.sin(angle * 3) * 200;

            return (
              <motion.img
                key={`back-${i}`}
                src={icon}
                alt={`icon-${i}`}
                className="absolute w-12 h-12"
                style={{
                  transform: `translate3d(${x}px, ${y}px, ${z}px) scale(${0.7 + (z + radius) / (radius * 3)})`,
                  opacity: 0.4 + (z + radius) / (radius * 2),
                  filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.1)) blur(0.5px)',
                }}
              />
            );
          })}
        </div>

        {/* Menina central */}
        <div className="relative z-10">
          <img
            src="/womensection2.png"
            alt="Menina estudando"
            className="w-[380px] h-auto drop-shadow-2xl"
          />
        </div>

        {/* Ícones à frente da menina */}
        <div
          className="absolute w-full h-full flex items-center justify-center"
          style={{ perspective: '1200px' }}
        >
          {frontIcons.map((icon, i) => {
            const angle = (i / frontIcons.length) * 2 * Math.PI;
            const radius = 200;
            const speed = rotation * (Math.PI / 180);
            const x = Math.cos(angle + speed) * radius;
            const z = Math.sin(angle + speed) * radius;
            const y = Math.sin(angle * 3) * 200;

            return (
              <motion.img
                key={`front-${i}`}
                src={icon}
                alt={`icon-${i}`}
                className="absolute w-12 h-12"
                style={{
                  transform: `translate3d(${x}px, ${y}px, ${z}px) scale(${0.7 + (z + radius) / (radius * 3)})`,
                  opacity: 0.4 + (z + radius) / (radius * 2),
                  filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.3))',
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FloatingIcons3D;
