import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Star, MapPin, Wifi, Coffee, Car, Waves, ArrowRight, Check, Phone, Mail } from 'lucide-react'
import BookingForm from '@/components/forms/BookingForm'

export const metadata: Metadata = {
  title: 'Hôtels à Tel Aviv | Meilleurs Prix Garantis | Elynor Tours',
  description: 'Réservez votre hôtel à Tel Aviv au meilleur prix. Hôtels en bord de mer, centre-ville, vue sur la Méditerranée. Service francophone et annulation gratuite.',
  keywords: [
    'hôtel tel aviv',
    'hôtel tel aviv pas cher',
    'hôtel bord de mer tel aviv',
    'hôtel centre ville tel aviv',
    'réservation hôtel tel aviv',
    'hôtel vue mer tel aviv',
    'hôtel gordon beach',
    'hôtel frishman beach'
  ],
  openGraph: {
    title: 'Hôtels à Tel Aviv | Meilleurs Prix | Elynor Tours',
    description: 'Réservez votre hôtel à Tel Aviv au meilleur prix. Hôtels en bord de mer avec vue sur la Méditerranée.',
    images: [
      {
        url: '/images/og/hotels-tel-aviv.jpg',
        width: 1200,
        height: 630,
        alt: 'Hôtels à Tel Aviv - Elynor Tours',
      }
    ],
  },
  alternates: {
    canonical: 'https://elynortours.com/hotels/tel-aviv',
  },
}

// Schema spécifique pour Tel Aviv
const telAvivHotelsSchema = {
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  "name": "Tel Aviv - Hôtels",
  "description": "Hôtels à Tel Aviv, la ville qui ne dort jamais, avec plages méditerranéennes et vie nocturne animée",
  "url": "https://elynortours.com/hotels/tel-aviv",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "32.0853",
    "longitude": "34.7818"
  },
  "containedInPlace": {
    "@type": "Country",
    "name": "Israël"
  },
  "touristType": ["Business", "Leisure", "Beach"],
  "hasMap": "https://maps.google.com/?q=Tel+Aviv,+Israel"
}

export default function TelAvivHotelsPage() {
  const featuredHotels = [
    {
      id: 1,
      name: "The Norman Tel Aviv",
      category: "5 étoiles - Luxe",
      price: "€380",
      originalPrice: "€450",
      image: "/images/hotels/norman-tel-aviv.jpg",
      rating: 4.8,
      reviews: 1247,
      location: "Centre-ville",
      distance: "50m de la plage",
      amenities: ["Spa", "Piscine", "Restaurant", "Wifi gratuit", "Parking"],
      description: "Hôtel boutique de luxe au cœur de Tel Aviv, à quelques pas de la plage et de Rothschild Boulevard.",
      specialOffer: "Petit-déjeuner offert jusqu'au 31/12"
    },
    {
      id: 2,
      name: "Hilton Tel Aviv",
      category: "5 étoiles",
      price: "€290",
      originalPrice: "€340",
      image: "/images/hotels/hilton-tel-aviv.jpg",
      rating: 4.6,
      reviews: 2134,
      location: "Independence Beach",
      distance: "Accès direct à la plage",
      amenities: ["Plage privée", "Piscine", "Spa", "Salle de sport", "Wifi gratuit"],
      description: "Hôtel emblématique face à la mer avec accès direct à Independence Beach.",
      specialOffer: "Surclassement gratuit selon disponibilités"
    },
    {
      id: 3,
      name: "The Jaffa Tel Aviv",
      category: "5 étoiles - Boutique",
      price: "€420",
      originalPrice: "€520",
      image: "/images/hotels/jaffa-tel-aviv.jpg",
      rating: 4.9,
      reviews: 892,
      location: "Old Jaffa",
      distance: "200m de la plage",
      amenities: ["Spa", "Restaurant étoilé", "Piscine", "Valet parking", "Concierge"],
      description: "Hôtel de charme dans un couvent du 19ème siècle restauré, entre histoire et modernité.",
      specialOffer: "Dîner romantique offert pour 2 nuits minimum"
    },
    {
      id: 4,
      name: "Leonardo Beach Tel Aviv",
      category: "4 étoiles",
      price: "€180",
      originalPrice: "€220",
      image: "/images/hotels/leonardo-beach.jpg",
      rating: 4.3,
      reviews: 1876,
      location: "Gordon Beach",
      distance: "Face à la mer",
      amenities: ["Vue mer", "Piscine", "Restaurant", "Salle de sport", "Wifi gratuit"],
      description: "Hôtel moderne face à Gordon Beach, parfait pour les familles et voyageurs d'affaires.",
      specialOffer: "Enfants gratuits jusqu'à 12 ans"
    },
    {
      id: 5,
      name: "Brown TLV Urban Hotel",
      category: "4 étoiles - Boutique",
      price: "€160",
      originalPrice: "€190",
      image: "/images/hotels/brown-tlv.jpg",
      rating: 4.4,
      reviews: 1453,
      location: "Quartier branché",
      distance: "300m de la plage",
      amenities: ["Design unique", "Restaurant", "Bar rooftop", "Wifi gratuit", "Vélos"],
      description: "Hôtel design dans le quartier artistique de Neve Tzedek, à quelques minutes de la plage.",
      specialOffer: "Cocktail de bienvenue offert"
    },
    {
      id: 6,
      name: "David InterContinental",
      category: "5 étoiles",
      price: "€320",
      originalPrice: "€380",
      image: "/images/hotels/david-intercontinental.jpg",
      rating: 4.7,
      reviews: 1654,
      location: "Front de mer",
      distance: "Accès direct à la plage",
      amenities: ["Plage privée", "Spa", "Piscines", "Restaurants", "Business center"],
      description: "Hôtel de prestige avec vue panoramique sur la Méditerranée et service impeccable.",
      specialOffer: "Crédit spa de 100€ offert"
    }
  ]

  const neighborhoods = [
    {
      name: "Front de mer (Tayelet)",
      description: "Hôtels face à la Méditerranée avec accès direct aux plages",
      advantages: ["Vue mer garantie", "Plages à pied", "Restaurants de plage", "Promenade maritime"],
      priceRange: "€200-500/nuit",
      bestFor: "Séjour balnéaire, romantique"
    },
    {
      name: "Centre-ville (Rothschild)",
      description: "Quartier des affaires et culturel, proche de tout",
      advantages: ["Transports", "Restaurants", "Vie nocturne", "Shopping"],
      priceRange: "€150-400/nuit",
      bestFor: "Voyage d'affaires, découverte urbaine"
    },
    {
      name: "Neve Tzedek",
      description: "Quartier artistique et bohème, très prisé",
      advantages: ["Charme authentique", "Galeries d'art", "Cafés branchés", "Architecture unique"],
      priceRange: "€180-450/nuit",
      bestFor: "Séjour culturel, lune de miel"
    },
    {
      name: "Jaffa (Yafo)",
      description: "Ancien port historique, atmosphère orientale",
      advantages: ["Sites historiques", "Marchés aux puces", "Restaurants authentiques", "Vues panoramiques"],
      priceRange: "€120-350/nuit",
      bestFor: "Découverte historique, budget maîtrisé"
    }
  ]

  const travelTips = [
    {
      title: "Meilleure période",
      content: "Avril-juin et septembre-novembre pour éviter la chaleur estivale tout en profitant de la mer."
    },
    {
      title: "Transport depuis l'aéroport",
      content: "Taxi (45-60 min), train (1h) ou navette privée. Evitez le vendredi soir et samedi (Shabbat)."
    },
    {
      title: "Quartiers recommandés",
      content: "Front de mer pour la plage, centre-ville pour les affaires, Neve Tzedek pour le charme."
    },
    {
      title: "Vie nocturne",
      content: "Tel Aviv est réputée pour ses bars et clubs. La plupart ferment tard, sauf le vendredi soir."
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/40 z-10"></div>
        
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80)' }}
        />
        
        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Hôtels à <span className="text-orange-400">Tel Aviv</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8">
                La ville qui ne dort jamais vous attend avec ses hôtels face à la Méditerranée
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#hotels" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors text-lg"
                >
                  Voir les hôtels
                  <ArrowRight className="ml-2" size={24} />
                </Link>
                <Link 
                  href="#booking" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg"
                >
                  Réserver maintenant
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Pourquoi choisir Tel Aviv pour votre séjour ?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Tel Aviv est une métropole dynamique qui combine parfaitement modernité et tradition. 
              Avec ses plages de sable fin, sa vie nocturne légendaire, ses restaurants gastronomiques 
              et son architecture Bauhaus unique au monde, la "Bulle" israélienne offre une expérience urbaine incomparable.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <Waves className="h-12 w-12 text-blue-500 mx-auto mb-2" />
                <p className="font-medium">14 km de plages</p>
              </div>
              <div className="text-center">
                <Coffee className="h-12 w-12 text-brown-500 mx-auto mb-2" />
                <p className="font-medium">Café culture</p>
              </div>
              <div className="text-center">
                <Star className="h-12 w-12 text-yellow-500 mx-auto mb-2" />
                <p className="font-medium">Restaurants étoilés</p>
              </div>
              <div className="text-center">
                <MapPin className="h-12 w-12 text-red-500 mx-auto mb-2" />
                <p className="font-medium">Centre d'Israël</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Formulaire de réservation */}
      <section id="booking" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Réservez votre hôtel à Tel Aviv</h2>
            <p className="text-gray-600 mt-2">Tarifs préférentiels et service francophone</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
            <BookingForm initialActiveTab="hotel" />
          </div>
        </div>
      </section>

      {/* Section Hôtels Sélectionnés */}
      <section id="hotels" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nos hôtels sélectionnés à Tel Aviv
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredHotels.map((hotel) => (
              <div key={hotel.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image 
                    src={hotel.image} 
                    alt={hotel.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  {hotel.specialOffer && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                      Offre spéciale
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{hotel.name}</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-medium">{hotel.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-500 mb-2">{hotel.category}</p>
                  <p className="text-gray-600 text-sm mb-3">{hotel.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <MapPin size={16} className="mr-1" />
                    <span>{hotel.location} • {hotel.distance}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {hotel.amenities.slice(0, 3).map((amenity, index) => (
                      <span key={index} className="inline-block bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
                        {amenity}
                      </span>
                    ))}
                    {hotel.amenities.length > 3 && (
                      <span className="inline-block bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
                        +{hotel.amenities.length - 3} autres
                      </span>
                    )}
                  </div>
                  
                  {hotel.specialOffer && (
                    <div className="bg-orange-50 border border-orange-200 rounded p-3 mb-4">
                      <p className="text-sm text-orange-700 font-medium">{hotel.specialOffer}</p>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div>
                      {hotel.originalPrice && (
                        <span className="text-sm text-gray-500 line-through mr-2">{hotel.originalPrice}</span>
                      )}
                      <span className="text-xl font-bold text-green-600">{hotel.price}</span>
                      <span className="text-sm text-gray-500">/nuit</span>
                    </div>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium">
                      Réserver
                    </button>
                  </div>
                  
                  <p className="text-xs text-gray-500 mt-2">{hotel.reviews} avis clients</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Plus de 200 hôtels disponibles à Tel Aviv</p>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium">
              Voir tous les hôtels
            </button>
          </div>
        </div>
      </section>

      {/* Section Quartiers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Choisir son quartier à Tel Aviv
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {neighborhoods.map((neighborhood, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{neighborhood.name}</h3>
                <p className="text-gray-600 mb-4">{neighborhood.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-800 mb-2">Avantages :</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {neighborhood.advantages.map((advantage, i) => (
                      <div key={i} className="flex items-center">
                        <Check size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{advantage}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Prix moyen: <strong>{neighborhood.priceRange}</strong></span>
                  <span className="text-blue-600 font-medium">{neighborhood.bestFor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Conseils */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Conseils pour votre séjour à Tel Aviv
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {travelTips.map((tip, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{tip.title}</h3>
                  <p className="text-gray-600">{tip.content}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-orange-50 rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Besoin d'aide pour choisir votre hôtel ?
              </h3>
              <p className="text-gray-600 mb-6">
                Notre équipe d'experts connaît Tel Aviv sur le bout des doigts. 
                Nous vous aidons à choisir l'hôtel parfait selon vos préférences et votre budget.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="tel:+33182836729"
                  className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                >
                  <Phone size={18} className="mr-2" />
                  +33 1 82 83 67 29
                </a>
                <a 
                  href="mailto:contact@elynortours.com"
                  className="inline-flex items-center justify-center px-6 py-3 border border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition-colors"
                >
                  <Mail size={18} className="mr-2" />
                  Nous écrire
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Réservez votre hôtel à Tel Aviv dès maintenant
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Profitez de nos tarifs négociés et de notre expertise pour un séjour inoubliable dans la ville qui ne dort jamais.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="#booking"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Réserver maintenant
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Demander conseil
            </Link>
          </div>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(telAvivHotelsSchema) }}
      />
    </>
  )
}