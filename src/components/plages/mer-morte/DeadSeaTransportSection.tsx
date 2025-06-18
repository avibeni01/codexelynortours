'use client'

import React from 'react'
import Link from 'next/link'
import { 
  Car, 
  Bus, 
  Plane, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  ArrowRight,
  Navigation,
  Fuel,
  Calendar
} from 'lucide-react'

const DeadSeaTransportSection: React.FC = () => {
  const transportOptions = [
    {
      type: "Voiture de location",
      icon: Car,
      duration: "1h30 depuis Jérusalem, 2h30 depuis Tel Aviv",
      cost: "À partir de 150 NIS/jour",
      advantages: ["Liberté totale", "Arrêts multiples", "Bagages illimités", "Climat contrôlé"],
      route: "Route 90 (route de la Mer Morte)",
      tips: "Réservez à l'avance pour de meilleurs tarifs",
      color: "blue"
    },
    {
      type: "Transport en commun",
      icon: Bus,
      duration: "2h depuis Jérusalem (bus 486)",
      cost: "35-50 NIS par trajet",
      advantages: ["Économique", "Écologique", "Pas de conduite", "Service régulier"],
      route: "Gare routière centrale de Jérusalem vers Ein Bokek",
      tips: "Vérifiez les horaires, moins fréquent le vendredi/samedi",
      color: "green"
    },
    {
      type: "Excursion organisée",
      icon: Users,
      duration: "Journée complète avec guide",
      cost: "200-400 NIS par personne",
      advantages: ["Guide expert", "Transport inclus", "Repas inclus", "Aucune préparation"],
      route: "Départ depuis les hôtels de Tel Aviv/Jérusalem",
      tips: "Idéal pour une première visite",
      color: "purple"
    }
  ]

  const practicalInfo = [
    {
      icon: Navigation,
      title: "Itinéraire recommandé",
      content: "Prenez la Route 90 Sud depuis Jérusalem. Cette route panoramique longe la Mer Morte et offre des vues spectaculaires."
    },
    {
      icon: Fuel,
      title: "Stations-service",
      content: "Dernières stations avant Ein Bokek : Junction Almog et Mitzpe Shalem. Faites le plein avant de partir."
    },
    {
      icon: Calendar,
      title: "Meilleurs horaires",
      content: "Partez tôt le matin (7h-8h) pour éviter la chaleur et la foule, surtout en été."
    }
  ]

  const parkingInfo = [
    {
      location: "Ein Bokek Public Beach",
      cost: "Gratuit",
      capacity: "200 places",
      notes: "Parking principal, ombragé, proche des installations"
    },
    {
      location: "Hamei Zohar",
      cost: "10 NIS",
      capacity: "50 places",
      notes: "Parking plus petit, accès direct à la plage"
    },
    {
      location: "Plages privées",
      cost: "Inclus avec l'entrée",
      capacity: "Variable",
      notes: "Réservé aux clients, généralement bien entretenu"
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue': return { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' }
      case 'green': return { bg: 'bg-rose-100', text: 'text-rose-600', border: 'border-rose-200' }
      case 'purple': return { bg: 'bg-pink-100', text: 'text-pink-600', border: 'border-pink-200' }
      default: return { bg: 'bg-gray-100', text: 'text-gray-600', border: 'border-gray-200' }
    }
  }

  return (
    <section id="dead-sea-transport" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <Navigation className="text-orange-600" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Comment se Rendre à la Mer Morte
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Découvrez les différentes options de transport pour rejoindre les plages de la Mer Morte 
              depuis les principales villes d'Israël.
            </p>
          </div>

          {/* Options de transport */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {transportOptions.map((option, index) => {
              const IconComponent = option.icon
              const colors = getColorClasses(option.color)
              
              return (
                <div key={index} className={`bg-white rounded-xl shadow-lg border-2 ${colors.border} overflow-hidden hover:shadow-xl transition-shadow`}>
                  <div className={`${colors.bg} p-6`}>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`p-3 bg-white rounded-full`}>
                        <IconComponent className={colors.text} size={24} />
                      </div>
                      <h3 className="font-bold text-gray-800 text-lg">{option.type}</h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    {/* Durée */}
                    <div className="flex items-start space-x-3">
                      <Clock className="text-gray-400 mt-1 flex-shrink-0" size={16} />
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Durée</p>
                        <p className="text-gray-700 text-sm font-medium">{option.duration}</p>
                      </div>
                    </div>

                    {/* Coût */}
                    <div className="flex items-start space-x-3">
                      <DollarSign className="text-gray-400 mt-1 flex-shrink-0" size={16} />
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Coût</p>
                        <p className="text-gray-700 text-sm font-medium">{option.cost}</p>
                      </div>
                    </div>

                    {/* Itinéraire */}
                    <div className="flex items-start space-x-3">
                      <MapPin className="text-gray-400 mt-1 flex-shrink-0" size={16} />
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Itinéraire</p>
                        <p className="text-gray-700 text-sm">{option.route}</p>
                      </div>
                    </div>

                    {/* Avantages */}
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Avantages</p>
                      <div className="grid grid-cols-2 gap-1">
                        {option.advantages.map((advantage, advantageIndex) => (
                          <div key={advantageIndex} className="flex items-center space-x-1">
                            <div className={`w-1.5 h-1.5 ${colors.text.replace('text-', 'bg-')} rounded-full`}></div>
                            <span className="text-gray-600 text-xs">{advantage}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Conseil */}
                    <div className={`${colors.bg} rounded-lg p-3 border ${colors.border}`}>
                      <p className="text-xs text-gray-700">
                        <strong>Conseil :</strong> {option.tips}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Informations pratiques */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Informations Pratiques
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {practicalInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                      <IconComponent className="text-orange-600" size={24} />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-3">{info.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{info.content}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Informations parking */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Parkings Disponibles
            </h3>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-4 px-6 font-semibold text-gray-800">Localisation</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-800">Coût</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-800">Capacité</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-800">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {parkingInfo.map((parking, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-2">
                            <MapPin className="text-orange-500" size={16} />
                            <span className="font-medium text-gray-800">{parking.location}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            parking.cost === 'Gratuit' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {parking.cost}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-gray-700">{parking.capacity}</td>
                        <td className="py-4 px-6 text-gray-600 text-sm">{parking.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Distances depuis les principales villes */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Distances depuis les Principales Villes
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { city: "Jérusalem", distance: "80 km", time: "1h30", route: "Route 1 → Route 90" },
                { city: "Tel Aviv", distance: "140 km", time: "2h30", route: "Route 1 → Route 90" },
                { city: "Haïfa", distance: "200 km", time: "3h", route: "Route 6 → Route 1 → Route 90" },
                { city: "Eilat", distance: "200 km", time: "2h30", route: "Route 90 (direct)" }
              ].map((city, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="text-orange-600" size={20} />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">{city.city}</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p><strong>Distance :</strong> {city.distance}</p>
                    <p><strong>Temps :</strong> {city.time}</p>
                    <p className="text-xs text-gray-500">{city.route}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to action pour location de voiture */}
          <div className="bg-gradient-to-r from-orange-500 to-rose-500 rounded-xl p-8 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <Car className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Besoin d'une Voiture de Location ?
              </h3>
              <p className="text-orange-100 mb-6 text-lg">
                Explorez la Mer Morte en toute liberté avec nos véhicules climatisés et nos tarifs avantageux.
                Réservation facile et service client en français.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold mb-1">150+</div>
                  <div className="text-orange-100 text-sm">Véhicules disponibles</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold mb-1">24/7</div>
                  <div className="text-orange-100 text-sm">Support client</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold mb-1">-30%</div>
                  <div className="text-orange-100 text-sm">Sur réservation anticipée</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/location-voiture"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Voir nos véhicules
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  Demander un devis
                </Link>
              </div>
            </div>
          </div>

          {/* Conseils additionnels */}
          <div className="mt-16 bg-yellow-50 rounded-xl p-8 border border-yellow-200">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-3">
                <Plane className="text-yellow-600" size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-800">Conseils pour Votre Voyage</h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">✅ À prévoir</h5>
                <ul className="space-y-1 text-gray-700">
                  <li>• Beaucoup d'eau et snacks</li>
                  <li>• Crème solaire haute protection</li>
                  <li>• Chapeau et lunettes de soleil</li>
                  <li>• Tongs et serviettes</li>
                  <li>• Appareil photo étanche</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">⚠️ À éviter</h5>
                <ul className="space-y-1 text-gray-700">
                  <li>• Voyager aux heures les plus chaudes (12h-16h)</li>
                  <li>• Oublier de vérifier le niveau d'essence</li>
                  <li>• Partir sans vérifier la météo</li>
                  <li>• Sous-estimer la durée du trajet</li>
                  <li>• Oublier les documents de location</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeadSeaTransportSection