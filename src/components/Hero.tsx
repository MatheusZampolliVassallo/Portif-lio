import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedText } from './AnimatedText';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white pt-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-4xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-8"
        >
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
            alt="Perfil"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <AnimatedText
          text="Olá, eu sou Matheus Zampolli Vassallo"
          className="text-5xl font-bold mb-4"
        />
        
        <AnimatedText
          text="Aspirante a Analista de Dados"
          className="text-3xl text-purple-400 font-semibold mb-6"
        />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Apaixonado por transformar dados em insights significativos. Habilidoso em desenvolvimento web
          e buscando uma carreira em análise de dados para ajudar empresas a tomar decisões baseadas em dados.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <a
            href="#skills"
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-colors"
          >
            Ver Minhas Habilidades
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}