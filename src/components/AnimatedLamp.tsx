import { motion } from 'framer-motion';

interface AnimatedLampProps {
  top?: number;
  right?: number;
  size?: number;
  className?: string;
}

export const AnimatedLamp: React.FC<AnimatedLampProps> = ({
  top = 70,
  right = 110,
  size = 70,
  className = '',
}) => {
  return (
    <motion.img
      src="/lamp.png"
      alt="Lâmpada"
      className={`absolute z-10 ${className}`}
      style={{
        top: `${top}px`,
        right: `${right}px`,
        width: `${size}px`,
        filter: 'drop-shadow(0 0 8px rgba(175, 144, 17, 0.8))',
      }}
      animate={{
        y: [0, -15, 0],
        scale: [1, 1.05, 1],
        filter: [
          'drop-shadow(0 0 8px rgba(153, 125, 15, 0.8))',
          'drop-shadow(0 0 20px rgba(255, 230, 100, 1))',
          'drop-shadow(0 0 8px rgba(255, 204, 0, 0.8))',
        ],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};
