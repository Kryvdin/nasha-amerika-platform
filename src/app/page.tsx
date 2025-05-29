'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [introVisible, setIntroVisible] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const introTimeout = setTimeout(() => {
      setIntroVisible(false);
      setContentVisible(true);
    }, 2500);

    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        console.log('Автовоспроизведение звука заблокировано');
      });
    }

    return () => clearTimeout(introTimeout);
  }, []);

  return (
    <>
      {/* 🎵 АУДИО */}
      <audio ref={audioRef} src="/intro-sound.mp3" preload="auto" />

      {/* 🚀 ЗАСТАВКА */}
      {introVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="fixed inset-0 bg-black flex items-center justify-center z-[9999]"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#FFD700] tracking-wider">
            Наша Америка
          </h1>
        </motion.div>
      )}

      {/* 🌐 КОНТЕНТ */}
      {contentVisible && (
        <>
          {/* 🧢 ШАПКА */}
          <header className="w-full fixed top-0 z-50 bg-[#1A1A1A] bg-opacity-95 backdrop-blur-md shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
              <div className="text-2xl font-bold tracking-wide text-white">
                Наша Америка
              </div>

              {/* Desktop nav */}
              <nav className="hidden md:flex space-x-8 text-lg">
                <a href="/credit" className="text-[#FFD700] hover:gold-glow transition">Наш Кредит</a>
                <a href="/market" className="text-[#FFD700] hover:gold-glow transition">Маркет</a>
                <a href="/jobs" className="text-[#FFD700] hover:gold-glow transition">Работа</a>
                <a href="/about" className="text-[#FFD700] hover:gold-glow transition">О платформе</a>
                <a href="/login" className="text-white border border-white px-4 py-1 rounded hover:bg-white hover:text-black transition">Войти</a>
              </nav>

              {/* 🍔 Бургер-анимация */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden z-50 w-10 h-10 flex flex-col justify-center items-center gap-1 group"
              >
                <span
                  className={`block h-0.5 w-6 bg-[#FFD700] transform transition duration-300 ease-in-out ${
                    menuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-[#FFD700] transition duration-300 ease-in-out ${
                    menuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-[#FFD700] transform transition duration-300 ease-in-out ${
                    menuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                />
              </button>
            </div>
          </header>

          {/* 📱 Мобильное меню */}
          {menuOpen && (
            <>
              <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={() => setMenuOpen(false)}
              />
              <nav className="fixed top-20 right-4 left-4 z-50 rounded-2xl p-6 bg-[#1A1A1A] text-[#FFD700] shadow-2xl">
                <div className="flex flex-col gap-4">
                  {[{ text: 'Наш Кредит', href: '/credit' }, { text: 'Маркет', href: '/market' }, { text: 'Работа', href: '/jobs' }, { text: 'О платформе', href: '/about' }, { text: 'Войти', href: '/login' }].map(
                    (item, index) => (
                      <motion.a
                        key={item.text}
                        href={item.href}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15, duration: 0.4 }}
                        className="block text-lg hover:underline"
                      >
                        {item.text}
                      </motion.a>
                    )
                  )}
                </div>
              </nav>
            </>
          )}

          {/* 🌫️ ГЛАВНАЯ СЦЕНА */}
          <main className="relative flex h-screen items-center justify-center overflow-hidden bg-black">
            <video
              autoPlay
              muted
              loop
              className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
            >
              <source src="/smoke.mp4" type="video/mp4" />
            </video>

            <div className="relative z-10 text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
                Наша Америка
              </h1>
              <p className="mt-4 text-xl md:text-2xl text-gray-300">
                Платформа для русскоязычных в США
              </p>
              <button className="mt-8 px-6 py-3 bg-white text-black rounded-2xl shadow-xl hover:scale-105 transition">
                Войти в платформу
              </button>
            </div>
          </main>
        </>
      )}
    </>
  );
}
