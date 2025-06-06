import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Hotel, 
  MapPin, 
  Star, 
  ArrowRight, 
  Check, 
  Swimming, 
  Wifi, 
  Coffee, 
  Car,
  Plane,
  Waves,
  Sun,
  Fish,
  Camera,
  Clock,
  Users,
  Calendar,
  Filter,
  Search
} from 'lucide-react'
import BookingForm from '@/components/forms/BookingForm'

export const metadata: Metadata = {
  title: 'Hôtels à Eilat - Mer Rouge | Réservation au Meilleur Prix | Elynor Tours',
  description: 'Réservez votre hôtel à Eilat au bord de la Mer Rouge. Large choix d\'établissements avec vue mer, plongée, spas. Meilleurs prix garantis avec Elynor Tours.',
  keywords: [
    'hotel eilat',
    'hotel mer rouge israël',
    'hotel eilat vue mer',
    'hotel luxe eilat',
    'reservation hotel eilat',
    'hotel plongée eilat',
    'hotel famille eilat',
    'elynor tours eilat'
  ].join(', '),
  openGraph: {
    title: 'Hôtels à Eilat - Mer Rouge | Réservation Elynor Tours',
    description: 'Découvrez les meilleurs hôtels d\'Eilat au bord de la Mer Rouge. Plongée, détente et luxe vous attendent.',
    images: [
      {
        url: '/images/eilat-hotels-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Hôtels à Eilat - Mer Rouge - Elynor Tours',
      }
    ],
    type: 'website',
  },
  alternates: {
    canonical: 'https://elynortours.com/hotels/eilat',
  },
}

// Schema.org pour Eilat comme destination touristique
const eilatDestinationSchema = {
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  "name": "Eilat",
  "description": "Station balnéaire d'Eilat sur la Mer Rouge, paradis de la plongée et du luxe en Israël",
  "url": "https://elynortours.com/hotels/eilat",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "29.5581",
    "longitude": "34.9482"
  },
  "touristType": ["Beach", "Diving", "Luxury", "Family"],
  "includesAttraction": [
    {
      "@type": "TouristAttraction",
      "name": "Récifs coralliens de la Mer Rouge",
      "description": "Sites de plongée exceptionnels avec faune marine tropicale"
    },
    {
      "@type": "TouristAttraction", 
      "name": "Parc Timna",
      "description": "Formations rocheuses spectaculaires et anciennes mines de cuivre"
    },
    {
      "@type": "TouristAttraction",
      "name": "Observatoire sous-marin",
      "description": "Aquarium et observatoire pour découvrir la vie marine de la Mer Rouge"
    }
  ]
}

export default function EilatHotelsPage() {
  // Données des hôtels à Eilat (exemples réalistes)
  const featuredHotels = [
    {
      id: 1,
      name: "Dan Panorama Eilat",
      category: "4 étoiles",
      image: "/images/hotels/dan-panorama-eilat.jpg",
      priceFrom: 180,
      rating: 4.2,
      reviews: 1247,
      description: "Hôtel en bord de mer avec piscines, spa et accès direct à la plage. Vue panoramique sur la Mer Rouge.",
      amenities: ["Piscine", "Spa", "Plage privée", "Restaurant", "Wifi gratuit", "Parking"],
      location: "Front de mer Nord",
      highlights: ["Vue mer exceptionnelle", "Proche du centre commercial", "Activités nautiques"]
    },
    {
      id: 2,
      name: "Isrotel King Solomon",
      category: "5 étoiles",
      image: "/images/hotels/king-solomon-eilat.jpg", 
      priceFrom: 280,
      rating: 4.4,
      reviews: 892,
      description: "Complexe hôtelier de luxe avec architecture égyptienne, multiple piscines et centre de plongée.",
      amenities: ["Piscines multiples", "Centre plongée", "Spa de luxe", "5 restaurants", "Kids club", "Tennis"],
      location: "Lagoon",
      highlights: ["Architecture unique", "Centre de plongée certifié", "Animation pour enfants"]
    },
    {
      id: 3,
      name: "Herods Palace",
      category: "5 étoiles deluxe",
      image: "/images/hotels/herods-palace-eilat.jpg",
      priceFrom: 320,
      rating: 4.6,
      reviews: 654,
      description: "Palace somptueux avec architecture orientale, jardins tropicaux et service premium.",
      amenities: ["Jardins tropicaux", "Spa premium", "Plage VIP", "Butler service", "Piscine à débordement", "Golf"],
      location: "Lagoon Premium", 
      highlights: ["Luxe absolu", "Service personnalisé", "Cadre exceptionnel"]
    },
    {
      id: 4,
      name: "Leonardo Club Eilat",
      category: "4 étoiles",
      image: "/images/hotels/leonardo-club-eilat.jpg",
      priceFrom: 160,
      rating: 4.1,
      reviews: 1089,
      description: "Hôtel tout inclus familial avec animations, piscines et programme enfants complet.",
      amenities: ["Tout inclus", "Animations", "Kids club", "Piscines", "Sports", "Restaurants"],
      location: "Centre ville",
      highlights: ["Formule tout inclus", "Parfait familles", "Animations quotidiennes"]
    },
    {
      id: 5,
      name: "Astral Maris",
      category: "4 étoiles",
      image: "/images/hotels/astral-maris-eilat.jpg",
      priceFrom: 140,
      rating: 4.0,
      reviews: 756,
      description: "Hôtel moderne en front de mer avec piscines, centre de bien-être et proximité des attractions.",
      amenities: ["Piscine", "Spa", "Fitness", "Restaurant", "Bar plage", "Wifi"],
      location: "Front de mer Sud",
      highlights: ["Excellent rapport qualité-prix", "Plage de sable", "Proche attractions"]
    },
    {
      id: 6,
      name: "Magic Palace Eilat", 
      category: "4 étoiles",
      image: "/images/hotels/magic-palace-eilat.jpg",
      priceFrom: 190,
      rating: 4.3,
      reviews: 943,
      description: "Hôtel élégant avec design contemporain, rooftop pool et vue imprenable sur les montagnes d'Edom.",
      amenities: ["Rooftop pool", "Spa", "Restaurant gastronomique", "Bar lounge", "Fitness", "Concierge"],
      location: "Centre Nord",
      highlights: ["Design contemporain", "Vue montagnes", "Cuisine raffinée"]
    }
  ]

  // Données sur Eilat
  const eilatInfo = {
    climate: "Climat désertique avec plus de 340 jours de soleil par an",
    bestTime: "Toute l'année, températures idéales de mars à mai et octobre à novembre", 
    waterTemp: "Eau chaude toute l'année (22-26°C)",
    activities: [
      "Plongée et snorkeling dans les récifs coralliens",
      "Sports nautiques (jet-ski, parachute ascensionnel, banana boat)",
      "Excursions dans le désert du Néguev", 
      "Parc Timna et ses formations rocheuses spectaculaires",
      "Observatoire sous-marin et parc aquatique",
      "Shopping et vie nocturne animée"
    ]
  }

  // Avantages de réserver avec Elynor Tours
  const bookingAdvantages = [
    {
      title: "Meilleurs prix garantis",
      description: "Nous négocions directement avec les hôtels d'Eilat pour vous offrir les tarifs les plus compétitifs",
      icon: <Star className="text-orange-500" size={24} />
    },
    {
      title: "Expertise locale",
      description: "Notre équipe connaît parfaitement Eilat et ses hôtels pour vous conseiller au mieux",
      icon: <MapPin className="text-orange-500" size={24} />
    },
    {
      title: "Service francophone", 
      description: "Assistance en français avant, pendant et après votre séjour à Eilat",
      icon: <Users className="text-orange-500" size={24} />
    },
    {
      title: "Annulation flexible",
      description: "Possibilité d'annulation gratuite sur la plupart de nos offres hôtelières",
      icon: <Calendar className="text-orange-500" size={24} />
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/40 z-10"></div>
        
        {/* Image de fond - Eilat et Mer Rouge */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)' }}
        />
        
        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Hôtels à <span className="text-orange-400">Eilat</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-6">
                Vivez la magie de la Mer Rouge dans les plus beaux hôtels d'Eilat
              </p>
              <p className="text-lg text-gray-200 mb-8 max-w-3xl">
                Découvrez Eilat, perle du sud d'Israël au bord de la Mer Rouge. Plongée exceptionnelle, 
                hôtels de luxe, climat idéal toute l'année et paysages désertiques à couper le souffle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#booking-form" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Réserver maintenant
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link 
                  href="#hotels" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-orange-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Voir les hôtels
                  <Hotel className="ml-2" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Formulaire de réservation */}
      <section id="booking-form" className="py-12 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Réservez votre hôtel à Eilat</h2>
            <p className="text-gray-600 mt-2">Trouvez l'hôtel parfait pour votre séjour en Mer Rouge</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <BookingForm initialActiveTab="hotel" defaultDestination="Eilat" />
          </div>
        </div>
      </section>

      {/* Section Pourquoi Eilat */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Pourquoi choisir Eilat pour votre séjour ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Un paradis au bord de la Mer Rouge</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Sun className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium">Climat exceptionnel</p>
                      <p className="text-gray-600 text-sm">{eilatInfo.climate}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Waves className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium">Mer Rouge cristalline</p>
                      <p className="text-gray-600 text-sm">{eilatInfo.waterTemp}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Fish className="text-teal-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium">Plongée de classe mondiale</p>
                      <p className="text-gray-600 text-sm">Récifs coralliens préservés avec une biodiversité exceptionnelle</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Camera className="text-purple-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium">Paysages spectaculaires</p>
                      <p className="text-gray-600 text-sm">Entre désert du Néguev et montagnes d'Edom en Jordanie</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Meilleure période</h4>
                  <p className="text-blue-700">{eilatInfo.bestTime}</p>
                </div>
                <div className="bg-teal-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Activités incontournables</h4>
                  <ul className="space-y-1">
                    {eilatInfo.activities.map((activity, index) => (
                      <li key={index} className="text-teal-700 text-sm flex items-start">
                        <span className="text-teal-500 mr-2 mt-1">•</span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Hôtels Sélectionnés */}
      <section id="hotels" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Notre sélection d'hôtels à Eilat
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredHotels.map((hotel) => (
              <div key={hotel.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-48">
                  <Image 
                    src={hotel.image} 
                    alt={`${hotel.name} - Hôtel à Eilat`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md text-xs font-medium">
                    {hotel.category}
                  </div>
                  <div className="absolute top-3 right-3 bg-blue-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                    Dès {hotel.priceFrom}€/nuit
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-800">{hotel.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-500" size={16} fill="currentColor" />
                      <span className="text-sm font-medium">{hotel.rating}</span>
                      <span className="text-xs text-gray-500">({hotel.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <MapPin size={14} />
                    <span>{hotel.location}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {hotel.description}
                  </p>
                  
                  {/* Équipements */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {hotel.amenities.slice(0, 4).map((amenity, index) => (
                        <span key={index} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs">
                          {amenity}
                        </span>
                      ))}
                      {hotel.amenities.length > 4 && (
                        <span className="text-blue-500 text-xs">+{hotel.amenities.length - 4}</span>
                      )}
                    </div>
                  </div>
                  
                  {/* Points forts */}
                  <div className="mb-6">
                    <h5 className="text-sm font-medium text-gray-700 mb-2">Points forts :</h5>
                    <ul className="space-y-1">
                      {hotel.highlights.map((highlight, index) => (
                        <li key={index} className="text-xs text-gray-600 flex items-start">
                          <Check size={12} className="text-green-500 mt-0.5 mr-1.5 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    href={`/hotels/eilat/${hotel.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block w-full bg-orange-500 text-white text-center py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
                  >
                    Voir les détails et tarifs
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Plus de 50 hôtels disponibles à Eilat avec Elynor Tours
            </p>
            <Link 
              href="#booking-form"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
            >
              Voir tous les hôtels disponibles
              <Search className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Section Avantages Elynor Tours */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pourquoi réserver avec Elynor Tours ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bookingAdvantages.map((advantage, index) => (
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

      {/* Section Infos Pratiques */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Informations pratiques pour votre séjour à Eilat
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Plane className="text-blue-500" size={24} />
                  <h3 className="text-xl font-semibold">Comment s'y rendre</h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Aéroport Ramon :</strong> 18 km d'Eilat, navettes et taxis disponibles</p>
                  <p><strong>Depuis Tel Aviv :</strong> 4h30 en voiture par la route 90</p>
                  <p><strong>Vols intérieurs :</strong> 1h15 depuis Tel Aviv avec Arkia ou Israir</p>
                  <div className="bg-orange-50 p-3 rounded border border-orange-200">
                    <p className="text-sm text-orange-700">
                      <strong>Service Elynor Tours :</strong> Organisation complète transport + hébergement
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Car className="text-green-500" size={24} />
                  <h3 className="text-xl font-semibold">Transport sur place</h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Location de voiture :</strong> Recommandée pour explorer la région</p>
                  <p><strong>Transports publics :</strong> Bus urbains et taxis</p>
                  <p><strong>Excursions :</strong> Circuits organisés vers Petra, désert, etc.</p>
                  <div className="bg-blue-50 p-3 rounded border border-blue-200">
                    <Link href="/location-voiture" className="text-sm text-blue-700 hover:text-blue-800">
                      <strong>Elynor Tours :</strong> Location de voiture à tarifs préférentiels →
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Sun className="text-yellow-500" size={24} />
                  <h3 className="text-xl font-semibold">Climat et que prendre</h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Été :</strong> Très chaud (35-40°C), vêtements légers indispensables</p>
                  <p><strong>Hiver :</strong> Doux (20-25°C), parfait pour les activités</p>
                  <p><strong>À prévoir :</strong> Crème solaire SPF50+, lunettes, chapeau</p>
                  <p><strong>Plongée :</strong> Combinaison courte suffisante toute l'année</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="text-purple-500" size={24} />
                  <h3 className="text-xl font-semibold">Conseils de séjour</h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Durée idéale :</strong> 4-7 jours pour découvrir la région</p>
                  <p><strong>Réservation :</strong> À l'avance, surtout en haute saison</p>
                  <p><strong>Shabbat :</strong> Transports limités vendredi soir - samedi soir</p>
                  <p><strong>Excursions :</strong> Pétra (Jordanie) accessible en journée</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-12 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt pour votre escapade à Eilat ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez nos experts Elynor Tours pour créer votre séjour sur mesure 
            dans la perle de la Mer Rouge.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="#booking-form" 
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-orange-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Réserver maintenant
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-500 transition-colors"
            >
              Conseil personnalisé
            </Link>
          </div>
        </div>
      </section>

      {/* Section FAQ Eilat */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Questions fréquentes sur les hôtels à Eilat
            </h2>
            
            <div className="space-y-6">
              <details className="group bg-gray-50 rounded-lg">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 hover:bg-gray-100">
                  <span>Quelle est la meilleure période pour visiter Eilat ?</span>
                  <span className="transition group-open:rotate-180">
                    <ArrowRight className="transform rotate-90" size={20} />
                  </span>
                </summary>
                <div className="p-6 pt-0 text-gray-700">
                  <p>Eilat bénéficie d'un climat exceptionnel toute l'année. Les meilleures périodes sont :</p>
                  <ul className="mt-2 space-y-1 ml-4 list-disc">
                    <li><strong>Mars à mai :</strong> Températures idéales (25-30°C), moins de foule</li>
                    <li><strong>Octobre à novembre :</strong> Conditions parfaites après l'été</li>
                    <li><strong>Décembre à février :</strong> Doux (20-25°C), excellent pour la plongée</li>
                  </ul>
                  <p className="mt-2">L'été (juin-septembre) est très chaud mais reste praticable avec air conditionné.</p>
                </div>
              </details>

              <details className="group bg-gray-50 rounded-lg">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 hover:bg-gray-100">
                  <span>Les hôtels d'Eilat proposent-ils des activités de plongée ?</span>
                  <span className="transition group-open:rotate-180">
                    <ArrowRight className="transform rotate-90" size={20} />
                  </span>
                </summary>
                <div className="p-6 pt-0 text-gray-700">
                  <p>Oui ! La plupart des hôtels 4-5 étoiles d'Eilat proposent :</p>
                  <ul className="mt-2 space-y-1 ml-4 list-disc">
                    <li>Centres de plongée certifiés PADI</li>
                    <li>Excursions snorkeling vers les récifs coralliens</li>
                    <li>Cours de plongée pour débutants</li>
                    <li>Location d'équipement complet</li>
                    <li>Sorties vers les sites emblématiques (Coral Beach, Dolphin Reef)</li>
                  </ul>
                </div>
              </details>

              <details className="group bg-gray-50 rounded-lg">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 hover:bg-gray-100">
                  <span>Eilat est-elle adaptée aux familles avec enfants ?</span>
                  <span className="transition group-open:rotate-180">
                    <ArrowRight className="transform rotate-90" size={20} />
                  </span>
                </summary>
                <div className="p-6 pt-0 text-gray-700">
                  <p>Absolument ! Eilat est une destination familiale par excellence :</p>
                  <ul className="mt-2 space-y-1 ml-4 list-disc">
                    <li>Hôtels avec kids clubs et animations</li>
                    <li>Plages de sable fin et mer calme</li>
                    <li>Parc aquatique et observatoire sous-marin</li>
                    <li>Excursions adaptées (parc Timna, réserve de Hai-Bar)</li>
                    <li>Restaurants avec menus enfants</li>
                  </ul>
                </div>
              </details>

              <details className="group bg-gray-50 rounded-lg">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 hover:bg-gray-100">
                  <span>Comment se rendre de l'aéroport aux hôtels d'Eilat ?</span>
                  <span className="transition group-open:rotate-180">
                    <ArrowRight className="transform rotate-90" size={20} />
                  </span>
                </summary>
                <div className="p-6 pt-0 text-gray-700">
                  <p>Plusieurs options depuis l'aéroport Ramon (18 km d'Eilat) :</p>
                  <ul className="mt-2 space-y-1 ml-4 list-disc">
                    <li><strong>Navettes hôtelières :</strong> Service direct proposé par la plupart des hôtels</li>
                    <li><strong>Taxi :</strong> 20-30 minutes, environ 40-60€</li>
                    <li><strong>Location de voiture :</strong> Agences sur place, recommandée pour explorer</li>
                    <li><strong>Bus public :</strong> Ligne 392, plus économique mais moins fréquent</li>
                  </ul>
                  <p className="mt-2 bg-orange-50 p-3 rounded text-orange-700">
                    <strong>Service Elynor Tours :</strong> Nous organisons vos transferts avec les hôtels partenaires.
                  </p>
                </div>
              </details>

              <details className="group bg-gray-50 rounded-lg">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 hover:bg-gray-100">
                  <span>Peut-on visiter Petra depuis Eilat ?</span>
                  <span className="transition group-open:rotate-180">
                    <ArrowRight className="transform rotate-90" size={20} />
                  </span>
                </summary>
                <div className="p-6 pt-0 text-gray-700">
                  <p>Oui, c'est l'une des excursions les plus populaires depuis Eilat :</p>
                  <ul className="mt-2 space-y-1 ml-4 list-disc">
                    <li><strong>Excursion d'une journée :</strong> Départ tôt le matin, retour en soirée</li>
                    <li><strong>Passage frontalier :</strong> Arava/Wadi Araba (passeport obligatoire)</li>
                    <li><strong>Transport :</strong> Bus touristiques ou voiture de location</li>
                    <li><strong>Durée :</strong> 2h de route + 6h sur site</li>
                  </ul>
                  <p className="mt-2">La plupart des hôtels peuvent organiser cette excursion via leurs concierges.</p>
                </div>
              </details>

              <details className="group bg-gray-50 rounded-lg">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 hover:bg-gray-100">
                  <span>Quels sont les tarifs moyens des hôtels à Eilat ?</span>
                  <span className="transition group-open:rotate-180">
                    <ArrowRight className="transform rotate-90" size={20} />
                  </span>
                </summary>
                <div className="p-6 pt-0 text-gray-700">
                  <p>Les prix varient selon la saison et la catégorie :</p>
                  <ul className="mt-2 space-y-1 ml-4 list-disc">
                    <li><strong>Hôtels 3 étoiles :</strong> 80-150€/nuit</li>
                    <li><strong>Hôtels 4 étoiles :</strong> 140-280€/nuit</li>
                    <li><strong>Hôtels 5 étoiles :</strong> 250-500€/nuit</li>
                    <li><strong>Suites de luxe :</strong> 400-800€/nuit</li>
                  </ul>
                  <p className="mt-2">Haute saison : juillet-août, fêtes juives. Basse saison : décembre-février.</p>
                  <div className="mt-3 bg-blue-50 p-3 rounded text-blue-700">
                    <strong>Avantage Elynor Tours :</strong> Tarifs négociés jusqu'à 30% moins chers que les plateformes classiques.
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages clients */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Ils ont séjourné à Eilat avec Elynor Tours
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 font-bold mr-4">
                  SC
                </div>
                <div>
                  <h4 className="font-medium">Sophie & Christophe</h4>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">Séjour en mars 2024</p>
                </div>
              </div>
              <p className="text-gray-600 italic text-sm">
                "Séjour magique au Dan Panorama ! Vue exceptionnelle sur la Mer Rouge, 
                service impeccable et plongée inoubliable. Elynor Tours a organisé 
                notre excursion à Petra en plus. Parfait du début à la fin !"
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 font-bold mr-4">
                  FM
                </div>
                <div>
                  <h4 className="font-medium">Famille Martin</h4>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">Séjour en juillet 2024</p>
                </div>
              </div>
              <p className="text-gray-600 italic text-sm">
                "Vacances de rêve au Leonardo Club avec nos 3 enfants. 
                Formule tout inclus parfaite, animations top et kids club fantastique. 
                Les enfants ne voulaient plus repartir ! Merci Elynor Tours pour les conseils."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 font-bold mr-4">
                  JL
                </div>
                <div>
                  <h4 className="font-medium">Jean-Luc</h4>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">Séjour en novembre 2024</p>
                </div>
              </div>
              <p className="text-gray-600 italic text-sm">
                "Lune de miel au Herods Palace, un rêve ! Architecture époustouflante, 
                spa de luxe et service aux petits oignons. Tarif Elynor Tours 
                imbattable par rapport aux autres sites. On y retournera !"
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/avis-clients"
              className="text-blue-500 font-medium hover:text-blue-600 inline-flex items-center"
            >
              Lire tous nos avis clients
              <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section Guide de voyage Eilat */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Guide de voyage : Découvrir Eilat
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <h3>Histoire et géographie</h3>
              <p>
                Eilat, située à l'extrême sud d'Israël, est une oasis moderne au bord de la Mer Rouge. 
                Cette station balnéaire de 50 000 habitants est devenue en quelques décennies la destination 
                de vacances favorite des Israéliens et un joyau touristique international.
              </p>
              
              <h3>Sites incontournables près de votre hôtel</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Coral Beach Nature Reserve</h4>
                  <p className="text-blue-700 text-sm">
                    Réserve naturelle protégeant les récifs coralliens. Snorkeling exceptionnel 
                    avec poissons tropicaux multicolores.
                  </p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Dolphin Reef</h4>
                  <p className="text-teal-700 text-sm">
                    Plage unique où nager avec les dauphins en liberté. 
                    Expérience magique dans un cadre préservé.
                  </p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Parc Timna</h4>
                  <p className="text-orange-700 text-sm">
                    Formations rocheuses spectaculaires et anciennes mines de cuivre. 
                    Les "Piliers de Salomon" sont incontournables.
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Observatoire sous-marin</h4>
                  <p className="text-purple-700 text-sm">
                    Découverte de la vie marine sans se mouiller. 
                    Parfait pour les familles et les non-plongeurs.
                  </p>
                </div>
              </div>
              
              <h3>Gastronomie et vie nocturne</h3>
              <p>
                Eilat propose une scène culinaire riche, des restaurants de poisson frais aux cuisines 
                internationales. La promenade du port regorge de bars et clubs pour prolonger la soirée 
                après une journée de plongée ou de farniente à l'hôtel.
              </p>
              
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg mt-8">
                <h4 className="font-semibold text-orange-800 mb-3">
                  Conseil Elynor Tours : Optimisez votre séjour
                </h4>
                <ul className="space-y-2 text-orange-700">
                  <li>• Réservez vos activités plongée dès l'arrivée à l'hôtel</li>
                  <li>• Prévoyez une excursion d'une journée à Petra (Jordanie)</li>
                  <li>• Visitez le parc Timna au coucher du soleil</li>
                  <li>• Goûtez le poisson Saint-Pierre, spécialité locale</li>
                  <li>• Profitez du duty-free (Eilat est zone franche)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eilatDestinationSchema) }}
      />
    </>
  )
}