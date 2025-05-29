import { motion } from 'framer-motion';

const menuItems = ['Наш Кредит', 'Наш Маркет', 'Работа', 'Услуги', 'Форум'];

const Menu = () => {
  return (
    <div className="relative p-6">
      {/* Дымовой фон */}
      <div className="absolute inset-0 z-0 animate-smoke bg-smoke opacity-20 blur-3xl rounded-2xl" />

      {/* Меню поверх дыма */}
      <nav className="relative z-10 flex flex-col gap-4 p-6 bg-[#2C3E50]/80 rounded-2xl shadow-xl backdrop-blur-md">
        {menuItems.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="text-xl text-yellow-400 font-semibold tracking-wide"
          >
            {item}
          </motion.div>
        ))}
      </nav>
    </div>
  );
};

export default Menu;
