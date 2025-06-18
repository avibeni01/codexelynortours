'use client'

import React from 'react'
import { Waves, Shield } from 'lucide-react'

const DeadSeaHero: React.FC = () => {
  return (
    <div className="relative h-[30vh] md:h-[50vh] max-h-[500px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/3927155/pexels-photo-3927155.jpeg)',
          backgroundBlendMode: 'overlay'
        }}
      >
        {/* Overlay subtil pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4 md:px-8">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight animate-fade-in-down">
            Les 10 Plus Belles Plages de la Mer Morte
          </h1>
          
          <p className="text-lg md:text-xl text-white mb-6 max-w-3xl mx-auto opacity-90 animate-fade-in-up">
            Guide complet des plus belles plages de la Mer Morte, avec informations détaillées sur chaque site, conseils pratiques et options de transport.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in">
            <a 
              href="#dead-sea-beaches" 
              className="group inline-flex items-center px-8 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300 shadow-lg"
            >
              <Waves className="mr-2 group-hover:animate-pulse" size={22} />
              Découvrir les plages
            </a>
            
            <a 
              href="#dead-sea-safety" 
              className="px-8 py-3 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors duration-300 shadow-lg inline-flex items-center group"
            >
              <Shield className="mr-2 group-hover:animate-pulse" size={22} />
              Conseils de sécurité
            </a>
          </div>
          
          {/* Stats rapides */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-cyan-300 mb-1">34%</div>
              <div className="text-white text-sm">Taux de salinité</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-cyan-300 mb-1">10</div>
              <div className="text-white text-sm">Plages sélectionnées</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-cyan-300 mb-1">2000+</div>
              <div className="text-white text-sm">Ans d'histoire</div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default DeadSeaHero