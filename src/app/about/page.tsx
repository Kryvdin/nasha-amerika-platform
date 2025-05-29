'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-center text-[#FFD700]"
      >
        О платформе
      </motion.h1>
      <p className="mt-6 text-lg md:text-xl text-center text-gray-300">
        Экосистема для русскоязычных в США: поддержка, образование, бизнес.
      </p>
    </main>
  );
}
