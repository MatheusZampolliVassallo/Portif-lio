import React from 'react';

const skills = {
  'Desenvolvimento Web': [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Design Responsivo'
  ],
  'Análise de Dados': [
    'Visualização de Dados',
    'Análise Estatística',
    'Excel',
    'SQL Básico'
  ],
  'Ferramentas': [
    'VS Code',
    'Git',
    'Chrome DevTools',
    'Linha de Comando'
  ],
  'Habilidades Pessoais': [
    'Resolução de Problemas',
    'Pensamento Analítico',
    'Atenção aos Detalhes',
    'Trabalho em Equipe'
  ]
};

export function Skills() {
  return (
    <section id="habilidades" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Habilidades & Experiência</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">{category}</h3>
              <ul className="space-y-2">
                {items.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}