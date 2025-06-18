'use client'

import React from 'react'
import Link from 'next/link'
import { 
  Car, 
  Bus, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  ArrowRight,
  Navigation,
  Fuel,
  Calendar,
  Hotel,
  CheckCircle,
  Star,
  Shield,
  Phone,
  Sparkles
} from 'lucide-react'

const DeadSeaTransportSection: React.FC = () => {
  const transportOptions = [
    {
      type: "Voiture de location avec Elynor Tours",
      icon: Car,
      duration: "1h30 depuis Jérusalem, 2h depuis Tel Aviv",
      cost: "À partir de 150 NIS/jour - Meilleurs prix garantis",
      advantages: ["Liberté totale", "GPS inclus", "Assistance 24/7", "Kilométrage illimité", "Assurance complète", "Annulation gratuite"],
      route: "Route 90 panoramique le long de la Mer Morte",
      tips: "Réservez maintenant et économisez jusqu'à 30%",
      color: "orange",
      cta: true
    },
    {
      type: "Transport en commun",
      icon: Bus,
      duration: "2h30-3h depuis Jérusalem (bus 486)",
      cost: "35-50 NIS par trajet",
      advantages: ["Économique", "Pas de conduite", "Service régulier", "Écologique"],
      route: "Gare routière centrale → Ein Bokek (changements possibles)",
      tips: "Horaires limités le weekend, trajets longs avec arrêts multiples",
      color: "gray",
      cta: false
    }
  ]

  const itineraries = [
    {
      from: "Tel Aviv",
      icon: MapPin,
      duration: "2h",
      distance: "140 km",
      route: [
        "Prenez l'autoroute 1 direction Jérusalem",
        "Continuez sur la Route 1 jusqu'à la jonction avec la Route 90",
        "Tournez à gauche sur la Route 90 Sud (panneau Mer Morte)",
        "Suivez la Route 90 le long de la Mer Morte jusqu'à Ein Bokek"
      ],
      highlights: ["Vue panoramique sur le désert de Judée", "Niveau de la mer indiqué", "Points de vue spectaculaires"],
      gasStations: ["Dernière station: Junction Almog", "Faites le plein avant de descendre"]
    },
    {
      from: "Jérusalem",
      icon: MapPin,
      duration: "1h30",
      distance: "80 km",
      route: [
        "Prenez la Route 1 direction Est (panneau Mer Morte)",
        "Descendez vers la Mer Morte via la route panoramique",
        "À la jonction avec la Route 90, tournez à droite",
        "Continuez sur la Route 90 Sud jusqu'à Ein Bokek"
      ],
      highlights: ["Descente spectaculaire de 1200m", "Vue sur les montagnes de Moab", "Passage au niveau de la mer"],
      gasStations: ["Station à la sortie de Jérusalem", "Station à Mitzpe Shalem"]
    }
  ]

  const hotelPartners = [
    { name: "Isrotel Dead Sea", stars: 5, price: "À partir de 850 NIS", feature: "Spa privatif" },
    { name: "Leonardo Club", stars: 4, price: "À partir de 650 NIS", feature: "All inclusive" },
    { name: "Prima Oasis", stars: 4, price: "À partir de 550 NIS", feature: "Plage privée" }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'orange': return { 
        bg: 'bg-gradient-to-r from-orange-500 to-orange-600', 
        bgLight: 'bg-orange-100',
        text: 'text-orange-600', 
        border: 'border-orange-300',
        hover: 'hover:from-orange-600 hover:to-orange-700'
      }
      case 'gray': return { 
        bg: 'bg-gray-200', 
        bgLight: 'bg-gray-100',
        text: 'text-gray-600', 
        border: 'border-gray-200',
        hover: ''
      }
      default: return { 
        bg: 'bg-gray-100', 
        bgLight: 'bg-gray-50',
        text: 'text-gray-600', 
        border: 'border-gray-200',
        hover: ''
      }
    }
  }

  return (
    <section id="dead-sea-transport" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <Navigation className="text-orange-600" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Votre Voyage vers la Mer Morte Commence Ici
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Profitez de nos offres exclusives sur la location de voiture et réservez votre hôtel 
              pour une expérience inoubliable à la Mer Morte.
            </p>
          </div>

          {/* CTA Principal - Location de voiture */}
          <div className="bg-gradient-to-r from-orange-500 to-rose-500 rounded-2xl p-8 mb-12 text-white shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Sparkles className="text-yellow-300" size={24} />
                  <span className="text-yellow-300 font-semibold text-sm uppercase tracking-wide">Offre Spéciale Mer Morte</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  Location de Voiture + Hôtel = -20% de Réduction
                </h3>
                <p className="text-orange-100 mb-6">
                  Réservez votre package complet et économisez ! Voiture climatisée avec GPS + 
                  Hôtel avec accès plage privée à partir de 750 NIS/jour.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-300" size={20} />
                    <span className="text-sm">Annulation gratuite</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-300" size={20} />
                    <span className="text-sm">Assistance 24/7</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-300" size={20} />
                    <span className="text-sm">GPS inclus</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-300" size={20} />
                    <span className="text-sm">Meilleur prix garanti</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <Link 
                  href="/location-voiture"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
                >
                  <Car size={24} className="mr-3" />
                  Réserver une Voiture Maintenant
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                <Link 
                  href="/hotels"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all"
                >
                  <Hotel size={24} className="mr-3" />
                  Voir nos Hôtels Partenaires
                </Link>
              </div>
            </div>
          </div>

          {/* Options de transport */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {transportOptions.map((option, index) => {
              const IconComponent = option.icon
              const colors = getColorClasses(option.color)
              
              return (
                <div key={index} className={`bg-white rounded-xl shadow-lg overflow-hidden ${option.cta ? 'ring-4 ring-orange-200 transform scale-105' : ''}`}>
                  <div className={`${option.cta ? colors.bg : colors.bgLight} p-6 ${colors.hover}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`p-3 bg-white rounded-full ${option.cta ? '' : 'bg-opacity-80'}`}>
                          <IconComponent className={option.cta ? 'text-orange-600' : colors.text} size={28} />
                        </div>
                        <h3 className={`font-bold text-xl ${option.cta ? 'text-white' : 'text-gray-800'}`}>
                          {option.type}
                        </h3>
                      </div>
                      {option.cta && (
                        <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                          RECOMMANDÉ
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    {/* Durée */}
                    <div className="flex items-start space-x-3">
                      <Clock className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Durée</p>
                        <p className="text-gray-700 font-medium">{option.duration}</p>
                      </div>
                    </div>

                    {/* Coût */}
                    <div className="flex items-start space-x-3">
                      <DollarSign className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Coût</p>
                        <p className={`font-bold ${option.cta ? 'text-orange-600 text-lg' : 'text-gray-700'}`}>
                          {option.cost}
                        </p>
                      </div>
                    </div>

                    {/* Itinéraire */}
                    <div className="flex items-start space-x-3">
                      <MapPin className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Itinéraire</p>
                        <p className="text-gray-700">{option.route}</p>
                      </div>
                    </div>

                    {/* Avantages */}
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-3">Avantages</p>
                      <div className="grid grid-cols-2 gap-2">
                        {option.advantages.map((advantage, advantageIndex) => (
                          <div key={advantageIndex} className="flex items-center space-x-2">
                            <CheckCircle className={option.cta ? 'text-green-500' : 'text-gray-400'} size={16} />
                            <span className={`text-sm ${option.cta ? 'font-medium text-gray-700' : 'text-gray-600'}`}>
                              {advantage}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Conseil */}
                    <div className={`rounded-lg p-4 ${option.cta ? 'bg-orange-50 border border-orange-200' : 'bg-gray-50 border border-gray-200'}`}>
                      <p className="text-sm text-gray-700">
                        <strong>💡 {option.cta ? 'Offre limitée :' : 'Note :'}</strong> {option.tips}
                      </p>
                    </div>

                    {/* CTA Button */}
                    {option.cta && (
                      <Link 
                        href="/location-voiture"
                        className="block w-full text-center bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-all transform hover:scale-105 shadow-md"
                      >
                        Réserver Ma Voiture →
                      </Link>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Itinéraires détaillés */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Itinéraires Détaillés vers la Mer Morte
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {itineraries.map((itinerary, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                  <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <MapPin className="text-white" size={24} />
                        <h4 className="text-xl font-bold">Depuis {itinerary.from}</h4>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{itinerary.duration}</div>
                        <div className="text-rose-100 text-sm">{itinerary.distance}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                          <Navigation className="text-orange-500 mr-2" size={18} />
                          Itinéraire étape par étape
                        </h5>
                        <ol className="space-y-2">
                          {itinerary.route.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start">
                              <span className="bg-orange-100 text-orange-600 font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3 text-sm">
                                {stepIndex + 1}
                              </span>
                              <span className="text-gray-700 text-sm">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2 flex items-center">
                          <Star className="text-yellow-500 mr-2" size={18} />
                          Points d'intérêt
                        </h5>
                        <ul className="space-y-1">
                          {itinerary.highlights.map((highlight, hIndex) => (
                            <li key={hIndex} className="text-gray-600 text-sm flex items-center">
                              <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                        <div className="flex items-start space-x-2">
                          <Fuel className="text-yellow-600 mt-0.5" size={16} />
                          <div className="text-sm">
                            <strong className="text-gray-800">Stations-service :</strong>
                            <ul className="text-gray-700 mt-1">
                              {itinerary.gasStations.map((station, sIndex) => (
                                <li key={sIndex}>• {station}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Mini CTA */}
                    <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-rose-50 rounded-lg border border-orange-200">
                      <p className="text-sm text-gray-700 mb-3">
                        <strong>Besoin d'une voiture depuis {itinerary.from} ?</strong> 
                        <br />Nous avons des agences dans toute la ville.
                      </p>
                      <Link 
                        href={`/location-voiture/${itinerary.from.toLowerCase().replace(' ', '-')}`}
                        className="inline-flex items-center text-orange-600 font-semibold text-sm hover:text-orange-700"
                      >
                        Voir nos véhicules disponibles
                        <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section Hôtels recommandés */}
          <div className="mb-16 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-8 border border-rose-200">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
                <Hotel className="text-rose-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Nos Hôtels Partenaires à la Mer Morte
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Profitez de tarifs exclusifs dans les meilleurs hôtels avec accès direct aux plages thérapeutiques
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {hotelPartners.map((hotel, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-rose-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-bold text-gray-800">{hotel.name}</h4>
                    <div className="flex space-x-0.5">
                      {[...Array(hotel.stars)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                  </div>
                  <p className="text-rose-600 font-bold text-lg mb-2">{hotel.price}</p>
                  <p className="text-gray-600 text-sm mb-4">✓ {hotel.feature}</p>
                  <Link 
                    href="/hotels"
                    className="block text-center bg-rose-500 text-white font-semibold py-2 rounded hover:bg-rose-600 transition-colors"
                  >
                    Voir les disponibilités
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link 
                href="/hotels"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-rose-600 font-bold rounded-lg border-2 border-rose-300 hover:bg-rose-50 transition-all"
              >
                Découvrir tous nos hôtels
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Garanties Elynor Tours */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Pourquoi Choisir Elynor Tours ?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: "Meilleur Prix Garanti", desc: "Trouvez moins cher ailleurs ? On s'aligne !" },
                { icon: Phone, title: "Support 24/7 en Français", desc: "Une équipe dédiée toujours à votre écoute" },
                { icon: Star, title: "Véhicules Premium", desc: "Flotte récente et parfaitement entretenue" },
                { icon: CheckCircle, title: "Réservation Flexible", desc: "Annulation gratuite jusqu'à 48h avant" }
              ].map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center border border-orange-100 hover:border-orange-300 transition-all">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                      <IconComponent className="text-orange-600" size={24} />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* CTA Final */}
          <div className="bg-gradient-to-br from-orange-600 via-orange-500 to-rose-500 rounded-2xl p-12 text-white text-center shadow-2xl">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
                <Car className="text-white" size={40} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Prêt pour Votre Aventure à la Mer Morte ?
              </h3>
              <p className="text-orange-100 mb-8 text-lg">
                Ne perdez plus de temps ! Réservez votre voiture maintenant et profitez de nos offres exceptionnelles. 
                Avec Elynor Tours, votre voyage à la Mer Morte sera inoubliable.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">300+</div>
                  <div className="text-orange-100">Clients satisfaits/mois</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">4.9/5</div>
                  <div className="text-orange-100">Note moyenne</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">-30%</div>
                  <div className="text-orange-100">Sur réservation en ligne</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/location-voiture"
                  className="inline-flex items-center justify-center px-10 py-4 bg-white text-orange-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
                >
                  <Car size={24} className="mr-3" />
                  Réserver Ma Voiture
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-10 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  <Phone size={24} className="mr-3" />
                  Nous Contacter
                </Link>
              </div>

              <p className="mt-6 text-orange-100 text-sm">
                💳 Paiement sécurisé • 🚗 Confirmation immédiate • 📞 Support en français
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeadSeaTransportSection