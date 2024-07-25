import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-1">FABRICE MAGNAN DE BELLEVUE</h1>
      <h2 className="text-xl text-blue-500 mb-4">Développeur Full Stack</h2>
      <div className="flex items-center mb-2">
        <span className="mr-2">📞</span>
        <span>06 78 61 47 00</span>
      </div>
      <div className="flex items-center mb-2">
        <span className="mr-2">✉️</span>
        <span>magnan.fabrice@gmail.com</span>
      </div>
      <div className="flex items-center mb-2">
        <span className="mr-2">📍</span>
        <span>Bourg-Saint-Bernard</span>
      </div>
      <div className="mb-4">
        Retrouvez mes recommandations professionnelles sur mon profil LinkedIn ou Portfolio
      </div>
    </div>
  );
};

export default Contact;
