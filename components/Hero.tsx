'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center h-screen bg-[#2C3E50] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-50">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/smoke.mp4" type="video/mp4" />
        </video>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 2 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-gold drop-shadow-lg">
          Наша Америка
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-white/80">
          Платформа для русскоязычных в США
        </p>
        <button className="mt-6 px-6 py-3 bg-gold text-[#2C3E50] font-semibold rounded hover:bg-white transition">
          Начать сейчас
        </button>
      </motion.div>
    </section>
  );
}
