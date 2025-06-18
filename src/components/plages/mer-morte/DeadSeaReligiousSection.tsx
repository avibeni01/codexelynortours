'use client'

import React from 'react'
import { Users, Clock, MapPin, Info } from 'lucide-react'
import { religiousBeaches } from '@/data/deadSeaBeaches'

const DeadSeaReligiousSection: React.FC = () => {
  return (
    <section id="dead-sea-religious" className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
              <Users className="text-purple-600" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Plages Religieuses Séparées
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Des espaces dédiés respectant les traditions religieuses, avec horaires séparés 
              pour hommes et femmes, dans le respect des coutumes locales.
            </p>
          </div>

          {/* Information importante */}
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg mb-8">
            <div className="flex items-start space-x-3">
              <Info className="text-purple-500 mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="font-semibold text-purple-800 mb-2">Information importante</h3>
                <p className="text-purple-700 text-sm leading-relaxed">
                  Ces plages offrent des créneaux horaires séparés pour répondre aux besoins des communautés religieuses. 
                  Il est essentiel de respecter les horaires, le code vestimentaire approprié et les règles de conduite 
                  en vigueur dans ces espaces.
                </p>
              </div>
            </div>
          </div>

          {/* Grille des plages religieuses */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {religiousBeaches.map((beach, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-6">
                  <h3 className="text-xl font-bold mb-2">{beach.name}</h3>
                  <p className="text-purple-100 text-sm">{beach.description}</p>
                </div>

                <div className="p-6 space-y-6">
                  {/* Horaires */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="text-purple-500" size={18} />
                      <h4 className="font-semibold text-gray-800">Horaires séparés</h4>
                    </div>
                    
                    <div className="space-y-3">
                      {/* Horaires hommes */}
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span className="font-medium text-gray-800">Hommes</span>
                        </div>
                        <p className="text-gray-700 text-sm">{beach.separationSchedule.men}</p>
                      </div>

                      {/* Horaires femmes */}
                      <div className="bg-pink-50 rounded-lg p-4 border border-pink-100">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                          <span className="font-medium text-gray-800">Femmes</span>
                        </div>
                        <p className="text-gray-700 text-sm">{beach.separationSchedule.women}</p>
                      </div>

                      {/* Horaires mixtes */}
                      {beach.separationSchedule.notes && (
                        <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="font-medium text-gray-800">Note spéciale</span>
                          </div>
                          <p className="text-gray-700 text-sm">{beach.separationSchedule.notes}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Localisation */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="text-purple-500" size={18} />
                      <h4 className="font-semibold text-gray-800">Localisation</h4>
                    </div>
                    <p className="text-gray-700 text-sm">{beach.location.address}</p>
                  </div>

                  {/* Équipements */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Équipements disponibles</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {beach.facilities.map((facility, facilityIndex) => (
                        <div key={facilityIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span className="text-gray-600 text-sm">{facility}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Notes importantes */}
                  <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                    <div className="flex items-start gap-2">
                      <Info className="text-amber-500 mt-0.5 flex-shrink-0" size={16} />
                      <div>
                        <h5 className="font-medium text-amber-800 mb-1">À noter</h5>
                        <p className="text-amber-700 text-sm">{beach.dressCode}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Conseils généraux */}
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
              Conseils pour les plages religieuses
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  Code vestimentaire
                </h4>
                <ul className="space-y-2 text-sm text-gray-600 pl-5">
                  <li>• Vêtements couvrants recommandés</li>
                  <li>• Éviter les tenues trop ajustées</li>
                  <li>• Prévoir des vêtements de rechange après la baignade</li>
                  <li>• Respecter les traditions locales</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  Règles de conduite
                </h4>
                <ul className="space-y-2 text-sm text-gray-600 pl-5">
                  <li>• Respecter scrupuleusement les horaires</li>
                  <li>• Maintenir un comportement approprié</li>
                  <li>• Éviter la musique forte ou les jeux bruyants</li>
                  <li>• Consulter le personnel en cas de doute</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact et informations */}
          <div className="mt-8 text-center bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-100">
            <h4 className="font-semibold text-gray-800 mb-2">Besoin d'informations complémentaires ?</h4>
            <p className="text-gray-600 text-sm mb-4">
              Les horaires peuvent varier selon les saisons et les fêtes religieuses. 
              Nous recommandons de vérifier avant votre visite.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <div className="bg-white rounded-lg px-4 py-2 border border-purple-200">
                <span className="text-sm text-gray-600">Ein Bokek: </span>
                <span className="font-medium text-gray-800">08-659-1234</span>
              </div>
              <div className="bg-white rounded-lg px-4 py-2 border border-purple-200">
                <span className="text-sm text-gray-600">Hamei Zohar: </span>
                <span className="font-medium text-gray-800">08-658-4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeadSeaReligiousSection