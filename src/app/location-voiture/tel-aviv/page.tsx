import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Car, 
  MapPin, 
  Clock, 
  Star, 
  Check, 
  ArrowRight, 
  Shield, 
  CreditCard, 
  Phone,
  Navigation,
  Building,
  Plane,
  Users,
  Fuel,
  Calendar,
  AlertTriangle,
  Info
} from 'lucide-react'
import BookingForm from '@/components/forms/BookingForm'

export const metadata: Metadata = {
  title: 'Location de Voiture à Tel Aviv | Elynor Tours - Meilleur Prix Garanti',
  description: 'Louez votre voiture à Tel Aviv au meilleur prix avec Elynor Tours. Large choix de véhicules, assurance complète, assistance 24/7. Réservation en ligne simple et rapide.',
  keywords: [
    'location voiture Tel Aviv',
    'location auto Tel Aviv',
    'voiture Tel Aviv',
    'location voiture aéroport Ben Gourion',
    'location voiture Tel Aviv centre',
    'Elynor Tours Tel Aviv',
    'location voiture Israël',
    'car rental Tel Aviv',
    'meilleur prix location voiture Tel Aviv'
  ].join(', '),
  openGraph: {
    title: 'Location de Voiture à Tel Aviv | Elynor Tours',
    description: 'Louez votre voiture à Tel Aviv au meilleur prix. Service premium, assistance francophone 24/7.',
    images: [
      {
        url: '/images/telaviv.jpg',
        width: 1200,
        height: 630,
        alt: 'Location de voiture à Tel Aviv - Elynor Tours',
      }
    ],
    type: 'website',
    locale: 'fr_FR',
  },
  alternates: {
    canonical: 'https://elynortours.com/location-voiture/tel-aviv',
  },
}

// Schema.org pour le SEO local
const telAvivCarRentalSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Elynor Tours - Location de Voiture Tel Aviv",
  "image": "https://elynortours.com/images/telaviv.jpg",
  "description": "Service de location de voiture à Tel Aviv avec assistance francophone, véhicules récents et tarifs compétitifs.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tel Aviv",
    "addressCountry": "IL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 32.0853,
    "longitude": 34.7818
  },
  "url": "https://elynortours.com/location-voiture/tel-aviv",
  "telephone": ["+33182836729", "+972584140489"],
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "areaServed": {
    "@type": "City",
    "name": "Tel Aviv"
  },
  "serviceType": "Location de voiture",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Véhicules disponibles à Tel Aviv",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Car",
          "name": "Voiture économique",
          "description": "Véhicule compact idéal pour la ville"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "25",
          "priceCurrency": "EUR"
        }
      }
    ]
  }
}

export default function TelAvivCarRentalPage() {
  const pickupLocations = [
    {
      name: "Aéroport Ben Gourion",
      address: "Terminal 3, Ben Gurion Airport",
      distance: "20 km de Tel Aviv centre",
      hours: "24h/24, 7j/7",
      popular: true,
      features: ["Accès direct", "Service 24h", "Navette gratuite"]
    },
    {
      name: "Tel Aviv Centre-Ville",
      address: "Dizengoff Street 50, Tel Aviv",
      distance: "Centre-ville",
      hours: "08:00 - 20:00",
      popular: true,
      features: ["Métro proche", "Parking facile", "Centre commercial"]
    },
    {
      name: "Port de Tel Aviv",
      address: "Tel Aviv Port, Namal Tel Aviv",
      distance: "5 km du centre",
      hours: "09:00 - 18:00",
      popular: false,
      features: ["Vue mer", "Restaurants", "Boutiques"]
    },
    {
      name: "Gare Centrale",
      address: "HaHagana Train Station",
      distance: "Sud de Tel Aviv",
      hours: "07:00 - 22:00",
      popular: false,
      features: ["Transport public", "Connexions trains", "Parking"]
    }
  ]

  const vehicleCategories = [
    {
      category: "Économique",
      example: "Suzuki Alto, Hyundai i10",
      price: "À partir de 25€/jour",
      features: ["2-4 places", "Climatisation", "Direction assistée"],
      ideal: "Parfait pour la ville et les courts trajets",
      image: "/images/cars/economic.jpg"
    },
    {
      category: "Compact",
      example: "Mazda 2, Kia Picanto",
      price: "À partir de 35€/jour",
      features: ["4-5 places", "Coffre spacieux", "GPS inclus"],
      ideal: "Idéal pour couples et petites familles",
      image: "/images/cars/compact.jpg"
    },
    {
      category: "Berline",
      example: "Mazda 6, Hyundai Sonata",
      price: "À partir de 55€/jour",
      features: ["5 places confort", "Grand coffre", "Équipements premium"],
      ideal: "Confort optimal pour longs trajets",
      image: "/images/cars/sedan.jpg"
    },
    {
      category: "SUV",
      example: "Hyundai Tucson, Mazda CX-5",
      price: "À partir de 65€/jour",
      features: ["7 places possibles", "Traction intégrale", "Espace famille"],
      ideal: "Aventures et familles nombreuses",
      image: "/images/cars/suv.jpg"
    }
  ]

  const localTips = [
    {
      title: "Circulation à Tel Aviv",
      content: "Tel Aviv est une ville dense. Privilégiez les déplacements tôt le matin ou après 19h pour éviter les embouteillages.",
      icon: <Navigation className="text-orange-500" size={24} />
    },
    {
      title: "Stationnement",
      content: "Utilisez les parkings publics ou l'app EasyPark. Zones bleues payantes 8h-20h, gratuites le Shabbat.",
      icon: <MapPin className="text-orange-500" size={24} />
    },
    {
      title: "Essence",
      content: "Stations-service nombreuses. Prix fixé par l'État. Prépayez ou payez après remplissage.",
      icon: <Fuel className="text-orange-500" size={24} />
    },
    {
      title: "Code de la route",
      content: "Conduite à droite, ceinture obligatoire, téléphone interdit au volant. Limitations : 50 km/h en ville.",
      icon: <Shield className="text-orange-500" size={24} />
    }
  ]

  const attractions = [
    {
      name: "Vieux Jaffa",
      distance: "10 min en voiture",
      description: "Port historique avec galeries d'art et restaurants"
    },
    {
      name: "Marché Carmel",
      distance: "Centre-ville",
      description: "Marché traditionnel, fruits, légumes et spécialités locales"
    },
    {
      name: "Plages de Tel Aviv",
      distance: "5-15 min",
      description: "Gordon Beach, Frishman Beach, Hilton Beach"
    },
    {
      name: "Musée Eretz Israel",
      distance: "20 min",
      description: "Histoire et archéologie d'Israël"
    },
    {
      name: "Quartier Florentin",
      distance: "15 min",
      description: "Street art, bars branchés et vie nocturne"
    },
    {
      name: "Parc Yarkon",
      distance: "25 min",
      description: "Grand parc urbain, idéal pour pique-niques et sport"
    }
  ]

  const advantages = [
    {
      title: "Tarifs négociés",
      description: "Nous obtenons les meilleurs prix grâce à nos partenariats avec les loueurs locaux",
      icon: <CreditCard className="text-orange-500" size={24} />
    },
    {
      title: "Service francophone", 
      description: "Assistance en français 24h/7j, pas de mauvaises surprises",
      icon: <Phone className="text-orange-500" size={24} />
    },
    {
      title: "Transparence totale",
      description: "Tous les frais inclus dans le prix affiché, pas de suppléments cachés",
      icon: <Shield className="text-orange-500" size={24} />
    },
    {
      title: "Flexibilité",
      description: "Modification et annulation gratuite jusqu'à 48h avant la prise en charge",
      icon: <Calendar className="text-orange-500" size={24} />
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40 z-10"></div>
        
        {/* Image de fond Tel Aviv */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop)' }}
        />
        
        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                <span className="block">Location de voiture</span>
                <span className="block text-orange-400">à Tel Aviv</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8">
                Explorez la ville blanche en toute liberté avec nos véhicules premium
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  href="#booking-form" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors text-lg"
                >
                  Réserver maintenant
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link 
                  href="#locations" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg"
                >
                  Voir les points de retrait
                  <MapPin className="ml-2" size={20} />
                </Link>
              </div>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap gap-6 text-white">
                <div className="flex items-center">
                  <Check className="text-green-400 mr-2" size={20} />
                  <span>Annulation gratuite</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-green-400 mr-2" size={20} />
                  <span>Assistance 24/7</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-green-400 mr-2" size={20} />
                  <span>Meilleur prix garanti</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Formulaire de réservation */}
      <section id="booking-form" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Réservez votre voiture à Tel Aviv
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comparez les prix et réservez en 3 minutes. Plus de 1000 clients nous font confiance chaque année.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-5xl mx-auto">
            <BookingForm initialActiveTab="car" />
          </div>
          
          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            <div className="text-center bg-white p-4 rounded-lg shadow">
              <div className="text-2xl font-bold text-orange-500">15+</div>
              <div className="text-sm text-gray-600">Points de retrait</div>
            </div>
            <div className="text-center bg-white p-4 rounded-lg shadow">
              <div className="text-2xl font-bold text-orange-500">50+</div>
              <div className="text-sm text-gray-600">Véhicules disponibles</div>
            </div>
            <div className="text-center bg-white p-4 rounded-lg shadow">
              <div className="text-2xl font-bold text-orange-500">24/7</div>
              <div className="text-sm text-gray-600">Assistance</div>
            </div>
            <div className="text-center bg-white p-4 rounded-lg shadow">
              <div className="text-2xl font-bold text-orange-500">4.8★</div>
              <div className="text-sm text-gray-600">Note clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Points de retrait */}
      <section id="locations" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Points de retrait à Tel Aviv
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Récupérez votre véhicule à l'endroit qui vous convient le mieux. 
              Tous nos points de retrait sont facilement accessibles et disposent d'un personnel francophone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {pickupLocations.map((location, index) => (
              <div key={index} className={`bg-white border-2 rounded-xl p-6 hover:shadow-lg transition-shadow ${location.popular ? 'border-orange-500 bg-orange-50' : 'border-gray-200'}`}>
                {location.popular && (
                  <div className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                    ⭐ Populaire
                  </div>
                )}
                
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Building className="text-orange-500 mr-2" size={20} />
                  {location.name}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-start">
                    <MapPin className="text-gray-400 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600">{location.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Navigation className="text-gray-400 mr-2 flex-shrink-0" size={16} />
                    <span className="text-gray-600">{location.distance}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="text-gray-400 mr-2 flex-shrink-0" size={16} />
                    <span className="text-gray-600">{location.hours}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {location.features.map((feature, i) => (
                    <span key={i} className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/location-voiture/aeroport-ben-gourion"
              className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600"
            >
              Voir le guide complet de l'aéroport Ben Gourion
              <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section Véhicules */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Notre flotte à Tel Aviv
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Véhicules récents, entretenus et adaptés à tous vos besoins. 
              Tous nos véhicules incluent l'assurance, la climatisation et le kilométrage illimité.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vehicleCategories.map((vehicle, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <Car size={64} className="text-orange-500" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{vehicle.category}</h3>
                  <p className="text-gray-600 text-sm mb-3">{vehicle.example}</p>
                  <p className="text-orange-500 font-bold text-lg mb-4">{vehicle.price}</p>
                  
                  <ul className="space-y-1 mb-4">
                    {vehicle.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <Check size={14} className="text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-sm text-gray-500 italic mb-4">{vehicle.ideal}</p>
                  
                  <Link 
                    href="#booking-form"
                    className="block w-full bg-orange-500 text-white text-center py-2 rounded-md hover:bg-orange-600 transition-colors"
                  >
                    Réserver
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Avantages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Pourquoi choisir Elynor Tours à Tel Aviv ?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Spécialistes de la location de voiture en Israël depuis 2015, 
              nous connaissons Tel Aviv et ses spécificités mieux que personne.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Conseils locaux */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Conduire à Tel Aviv : nos conseils d'expert
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Tel Aviv est une ville moderne et dynamique. Voici nos conseils pour conduire en toute sérénité.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {localTips.map((tip, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    {tip.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{tip.title}</h3>
                    <p className="text-gray-600">{tip.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-orange-50 p-6 rounded-xl border border-orange-200 max-w-4xl mx-auto">
            <div className="flex items-start">
              <AlertTriangle className="text-orange-500 mr-4 mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-orange-800 mb-2">Important : Shabbat</h3>
                <p className="text-orange-700">
                  Attention : De vendredi soir au samedi soir (Shabbat), la circulation est fortement réduite. 
                  Planifiez vos déplacements en conséquence. Certaines stations-service peuvent être fermées.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Attractions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Que visiter à Tel Aviv en voiture ?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Votre voiture de location vous donne accès à tous les trésors de Tel Aviv et ses environs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold">{attraction.name}</h3>
                  <span className="text-sm bg-orange-100 text-orange-600 px-2 py-1 rounded">
                    {attraction.distance}
                  </span>
                </div>
                <p className="text-gray-600">{attraction.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/plages/mediterranee"
              className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600"
            >
              Découvrir les plages de Tel Aviv
              <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section FAQ locale */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Questions fréquentes - Tel Aviv
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Où récupérer ma voiture à l'aéroport Ben Gourion ?</h3>
                <p className="text-gray-600">
                  Les bureaux de location se trouvent au Terminal 3, niveau -1. Suivez les panneaux "Car Rental". 
                  Le processus prend généralement 15-30 minutes.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Le GPS est-il inclus ?</h3>
                <p className="text-gray-600">
                  Oui, tous nos véhicules incluent un GPS en français. Nous recommandons aussi l'app Waze, 
                  très populaire en Israël et particulièrement précise pour éviter les embouteillages.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Comment fonctionne le stationnement à Tel Aviv ?</h3>
                <p className="text-gray-600">
                  Zones bleues payantes 8h-20h (gratuit le Shabbat). Utilisez l'app EasyPark ou les horodateurs. 
                  Parkings publics disponibles. Évitez les zones rouges (interdit).
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Puis-je aller à Jérusalem avec ma voiture de location ?</h3>
                <p className="text-gray-600">
                  Absolument ! Jérusalem est à 1h de Tel Aviv par l'autoroute 1. 
                  Attention aux péages sur la Route 6 (inclus dans certaines offres).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-rose-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à explorer Tel Aviv en voiture ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Réservez maintenant et bénéficiez de nos tarifs exclusifs négociés avec les meilleurs loueurs de Tel Aviv.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="#booking-form" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Réserver maintenant
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <a 
              href="tel:+33182836729"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-500 transition-colors text-lg"
            >
              <Phone className="mr-2" size={20} />
              Appelez-nous
            </a>
          </div>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(telAvivCarRentalSchema) }}
      />
    </>
  )
}