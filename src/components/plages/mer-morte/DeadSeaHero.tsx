'use client'

import React from 'react'
import Link from 'next/link'
import { Waves, Shield, MapPin, ArrowDown } from 'lucide-react'

const DeadSeaHero: React.FC = () => {
  return (
    <div className="relative h-[70vh] min-h-[600px] overflow-hidden">
      {/* Background Image avec overlay gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/4353813/pexels-photo-4353813.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-teal-800/70 to-blue-900/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4 md:px-8">
        <div className="max-w-5xl">
          <div className="mb-6">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <MapPin className="text-white mr-2" size={18} />
              <span className="text-white text-sm font-medium">430m sous le niveau de la mer</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-down">
            Les 10 Plus Belles Plages de la 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300"> Mer Morte</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-8 max-w-4xl mx-auto opacity-90 animate-fade-in-up">
            Découvrez l'expérience unique de flotter dans les eaux les plus salées du monde, 
            aux propriétés thérapeutiques exceptionnelles
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in">
            <a 
              href="#dead-sea-beaches" 
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Waves className="mr-2 group-hover:animate-pulse" size={22} />
              Découvrir les plages
            </a>
            
            <a 
              href="#dead-sea-safety" 
              className="group inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300"
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
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#dead-sea-introduction" className="text-white/80 hover:text-white transition-colors">
          <ArrowDown size={32} />
        </a>
      </div>
      
      {/* Animated floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-ping opacity-30"></div>
      <div className="absolute bottom-32 right-16 w-6 h-6 bg-teal-300 rounded-full animate-pulse opacity-40"></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-blue-300 rounded-full animate-bounce opacity-50"></div>
    </div>
  )
}

export default DeadSeaHero