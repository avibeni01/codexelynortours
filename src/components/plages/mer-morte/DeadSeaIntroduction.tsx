'use client'

import React from 'react'
import { Droplets, Heart, Thermometer, AlertTriangle, Sparkles, Users } from 'lucide-react'

const DeadSeaIntroduction: React.FC = () => {
  return (
    <section id="dead-sea-introduction" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Titre principal */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              La Mer Morte : Une Merveille Naturelle Unique
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          {/* Contenu principal en 2 colonnes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Texte descriptif */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  Située à <strong>430 mètres sous le niveau de la mer</strong>, la Mer Morte est le point le plus bas de la Terre. 
                  Avec une salinité près de <strong>10 fois supérieure</strong> à celle des océans, elle offre une expérience de 
                  baignade unique où il est impossible de couler.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Riche en minéraux comme le <strong>magnésium, le calcium, le potassium et le brome</strong>, ses eaux et sa boue 
                  sont réputées pour leurs propriétés thérapeutiques et sont utilisées dans de nombreux traitements 
                  dermatologiques et rhumatismaux depuis l'Antiquité.
                </p>
              </div>

              {/* Zone d'alerte importante */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="text-amber-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-2">Évolution du niveau</h4>
                    <p className="text-amber-700 text-sm leading-relaxed">
                      En raison de l'évaporation et de l'exploitation industrielle, le niveau de la Mer Morte 
                      baisse d'environ <strong>un mètre par an</strong>. Certaines plages historiques ne sont plus accessibles 
                      ou ont été réaménagées. Vérifiez toujours les informations les plus récentes avant votre visite.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistiques et données clés */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-100">
                  <Droplets className="text-teal-500 mb-3" size={32} />
                  <div className="text-2xl font-bold text-teal-700 mb-1">34%</div>
                  <div className="text-teal-600 text-sm">Taux de salinité</div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                  <Thermometer className="text-blue-500 mb-3" size={32} />
                  <div className="text-2xl font-bold text-blue-700 mb-1">25°C</div>
                  <div className="text-blue-600 text-sm">Température moyenne</div>
                </div>
                
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-xl border border-emerald-100">
                  <Heart className="text-emerald-500 mb-3" size={32} />
                  <div className="text-2xl font-bold text-emerald-700 mb-1">21</div>
                  <div className="text-emerald-600 text-sm">Minéraux essentiels</div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl border border-purple-100">
                  <Users className="text-purple-500 mb-3" size={32} />
                  <div className="text-2xl font-bold text-purple-700 mb-1">1M+</div>
                  <div className="text-purple-600 text-sm">Visiteurs par an</div>
                </div>
              </div>
            </div>
          </div>

          {/* Propriétés thérapeutiques */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="text-center mb-8">
              <Sparkles className="text-teal-500 mx-auto mb-4" size={40} />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Propriétés Thérapeutiques Reconnues</h3>
              <p className="text-gray-600">Des bienfaits scientifiquement prouvés depuis des millénaires</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center group hover:bg-teal-50 p-4 rounded-lg transition-colors">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-teal-200 transition-colors">
                  <Heart className="text-teal-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Peau</h4>
                <p className="text-gray-600 text-sm">Traitement naturel du psoriasis, eczéma et acné</p>
              </div>

              <div className="text-center group hover:bg-blue-50 p-4 rounded-lg transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors">
                  <Droplets className="text-blue-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Articulations</h4>
                <p className="text-gray-600 text-sm">Soulagement des douleurs et inflammations</p>
              </div>

              <div className="text-center group hover:bg-emerald-50 p-4 rounded-lg transition-colors">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-emerald-200 transition-colors">
                  <Sparkles className="text-emerald-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Détox</h4>
                <p className="text-gray-600 text-sm">Élimination des toxines et purification</p>
              </div>

              <div className="text-center group hover:bg-purple-50 p-4 rounded-lg transition-colors">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-200 transition-colors">
                  <Users className="text-purple-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Relaxation</h4>
                <p className="text-gray-600 text-sm">Réduction du stress et détente profonde</p>
              </div>
            </div>
          </div>

          {/* Meilleure période de visite */}
          <div className="mt-12 text-center bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-8 border border-teal-100">
            <Thermometer className="text-teal-500 mx-auto mb-4" size={32} />
            <h3 className="text-xl font-bold text-gray-800 mb-4">Meilleure Période de Visite</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-teal-100">
                <div className="font-semibold text-green-600 mb-1">🌸 Printemps (Mars-Mai)</div>
                <div className="text-gray-600">Température idéale 20-30°C</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-orange-100">
                <div className="font-semibold text-orange-600 mb-1">☀️ Été (Juin-Août)</div>
                <div className="text-gray-600">Très chaud 35-45°C</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-teal-100">
                <div className="font-semibold text-blue-600 mb-1">🍂 Automne (Sept-Nov)</div>
                <div className="text-gray-600">Conditions parfaites 25-35°C</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeadSeaIntroduction