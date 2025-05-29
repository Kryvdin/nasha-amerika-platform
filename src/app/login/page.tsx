'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Добро пожаловать!');
  };

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white flex items-center justify-center px-6 py-20">
      <form onSubmit={handleLogin} className="bg-[#1A1A1A] p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-[#FFD700] mb-6 text-center">Вход</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full mb-4 px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400"
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full mb-6 px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400"
        />
        <button type="submit" className="w-full bg-[#FFD700] text-black font-bold py-2 rounded hover:scale-105 transition">
          Войти
        </button>
      </form>
    </main>
  );
}
