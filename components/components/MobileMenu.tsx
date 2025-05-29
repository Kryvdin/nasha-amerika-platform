'use client';

import { motion } from 'framer-motion';

const menuItems = ['Наш Кредит', 'Маркет', 'Работа', 'О платформе', 'Войти'];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: Props) => {
  return (
    <>
      {/* Затемнённый фон */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Меню с анимацией появления */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.4 }}
        className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-[#2C3E50] z-50 p-6 shadow-2xl"
      >
        <div className="flex flex-col gap-6 mt-12">
          {menuItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 10 }}
              transition={{ delay: index * 0.15, duration: 0.4 }}
              className="text-white text-xl font-semibold"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default MobileMenu;
