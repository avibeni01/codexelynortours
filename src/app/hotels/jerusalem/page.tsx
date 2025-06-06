import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Star, MapPin, Wifi, Coffee, Car, Church, ArrowRight, Check, Phone, Mail } from 'lucide-react'
import BookingForm from '@/components/forms/BookingForm'

export const metadata: Metadata = {
  title: 'Hôtels à Jérusalem | Ville Sainte | Meilleurs Prix | Elynor Tours',
  description: 'Réservez votre hôtel à Jérusalem au meilleur prix. Hôtels près de la Vieille Ville, quartier juif, chrétien, musulman. Service francophone et expertise locale.',
  keywords: [
    'hôtel jérusalem',
    'hôtel vieille ville jérusalem',
    'hôtel quartier juif jérusalem',
    'hôtel mur des lamentations',
    'hôtel saint sépulcre',
    'hôtel mount of olives',
    'hôtel king david jérusalem',
    'hôtel mamilla jérusalem'
  ],
  openGraph: {
    title: 'Hôtels à Jérusalem | Ville Sainte | Elynor Tours',
    description: 'Séjournez au cœur de la Ville Sainte. Hôtels près des lieux saints, de la Vieille Ville et des sites historiques.',
    images: [
      {
        url: '/images/og/hotels-jerusalem.jpg',
        width: 1200,
        height: 630,
        alt: 'Hôtels à Jérusalem - Elynor Tours',
      }
    ],
  },
  alternates: {
    canonical: 'https://elynortours.com/hotels/jerusalem',
  },
}

// Schema spécifique pour Jérusalem
const jerusalemHotelsSchema = {
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  "name": "Jérusalem - Hôtels",
  "description": "Hôtels à Jérusalem, la Ville Sainte, centre spirituel des trois religions monothéistes",
  "url": "https://elynortours.com/hotels/jerusalem",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "31.7683",
    "longitude": "35.2137"
  },
  "containedInPlace": {
    "@type": "Country",
    "name": "Israël"
  },
  "touristType": ["Religious", "Cultural", "Historical"],
  "hasMap": "https://maps.google.com/?q=Jerusalem,+Israel"
}

export default function JerusalemHotelsPage() {
  const featuredHotels = [
    {
      id: 1,
      name: "King David Hotel",
      category: "5 étoiles - Palais",
      price: "€650",
      originalPrice: "€780",
      image: "/images/hotels/king-david-jerusalem.jpg",
      rating: 4.9,
      reviews: 2341,
      location: "Centre-ville",
      distance: "800m de la Vieille Ville",
      amenities: ["Spa", "Piscine", "Jardin", "Service royal", "Restaurants gastronomiques"],
      description: "Hôtel légendaire depuis 1931, ayant accueilli rois, présidents et célébrités. Vue imprenable sur la Vieille Ville.",
      specialOffer: "Suite upgrade + petit-déjeuner offert"
    },
    {
      id: 2,
      name: "Waldorf Astoria Jerusalem",
      category: "5 étoiles - Luxe",
      price: "€580",
      originalPrice: "€690",
      image: "/images/hotels/waldorf-astoria-jerusalem.jpg",
      rating: 4.8,
      reviews: 1876,
      location: "Mamilla",
      distance: "200m de la Porte de Jaffa",
      amenities: ["Spa", "Restaurants", "Bar", "Concierge", "Parking privé"],
      description: "Élégance et raffinement au cœur de Jérusalem, dans le quartier premium de Mamilla.",
      specialOffer: "Spa credit €150 offert"
    },
    {
      id: 3,
      name: "The Inbal Jerusalem",
      category: "5 étoiles",
      price: "€420",
      originalPrice: "€510",
      image: "/images/hotels/inbal-jerusalem.jpg",
      rating: 4.6,
      reviews: 1543,
      location: "Liberty Bell Park",
      distance: "1km de la Vieille Ville",
      amenities: ["Piscine", "Spa", "Synagogue", "Restaurants cashers", "Jardin"],
      description: "Hôtel moderne avec architecture inspirée de la pierre de Jérusalem, dans un cadre paisible.",
      specialOffer: "3ème nuit gratuite en suite"
    },
    {
      id: 4,
      name: "Mamilla Hotel",
      category: "5 étoiles - Boutique",
      price: "€480",
      originalPrice: "€580",
      image: "/images/hotels/mamilla-jerusalem.jpg",
      rating: 4.7,
      reviews: 1234,
      location: "Mamilla Mall",
      distance: "Accès direct à la Vieille Ville",
      amenities: ["Design contemporain", "Terrasse", "Bar rooftop", "Shopping", "Concierge"],
      description: "Hôtel design au cœur du quartier Mamilla, entre modernité et histoire millénaire.",
      specialOffer: "Dîner gastronomique offert"
    },
    {
      id: 5,
      name: "David Citadel Hotel",
      category: "5 étoiles",
      price: "€520",
      originalPrice: "€620",
      image: "/images/hotels/david-citadel-jerusalem.jpg",
      rating: 4.8,
      reviews: 2108,
      location: "Mamilla",
      distance: "500m de la Vieille Ville",
      amenities: ["Spa Akasha", "Piscine", "Restaurants", "Vue panoramique", "Business center"],
      description: "Hôtel emblématique avec vue spectaculaire sur la Vieille Ville et les remparts.",
      specialOffer: "Visite privée de la Vieille Ville offerte"
    },
    {
      id: 6,
      name: "Mount Zion Hotel",
      category: "4 étoiles - Historique",
      price: "€280",
      originalPrice: "€340",
      image: "/images/hotels/mount-zion-jerusalem.jpg",
      rating: 4.3,
      reviews: 987,
      location: "Mont Sion",
      distance: "300m de la Porte de Sion",
      amenities: ["Vue unique", "Restaurant", "Terrasse", "Parking", "Heritage"],
      description: "Hôtel historique sur le Mont Sion, dans un bâtiment ottoman restauré avec vue sur la Vieille Ville.",
      specialOffer: "Petit-déjeuner panoramique offert"
    }
  ]

  const neighborhoods = [
    {
      name: "Mamilla / Ville Nouvelle",
      description: "Quartier premium entre modernité et patrimoine",
      advantages: ["Proximité Vieille Ville", "Shopping de luxe", "Restaurants", "Transport"],
      priceRange: "€300-700/nuit",
      bestFor: "Séjour luxe, shopping, accès facile",
      highlights: ["Mamilla Mall", "Porte de Jaffa", "Hôtels 5 étoiles"]
    },
    {
      name: "Quartier Allemand",
      description: "Zone historique avec architecture préservée",
      advantages: ["Charme historique", "Restaurants", "Gares", "Ambiance locale"],
      priceRange: "€200-450/nuit",
      bestFor: "Découverte culturelle, transport",
      highlights: ["First Station", "Liberty Bell Park", "Cafés branchés"]
    },
    {
      name: "Mont des Oliviers",
      description: "Secteur religieux avec vues panoramiques",
      advantages: ["Vue exceptionnelle", "Sites chrétiens", "Authentique", "Calme"],
      priceRange: "€150-350/nuit",
      bestFor: "Pèlerinage, spiritualité, vue",
      highlights: ["Jardin de Gethsémané", "Église de toutes les nations", "Panorama"]
    },
    {
      name: "Quartier Juif / Vieille Ville",
      description: "Au cœur des lieux saints et de l'histoire",
      advantages: ["Immersion totale", "Sites religieux", "Authentique", "Marchés"],
      priceRange: "€180-400/nuit",
      bestFor: "Expérience authentique, pèlerinage",
      highlights: ["Mur des Lamentations", "Quartier juif", "Via Dolorosa"]
    }
  ]

  const religiousSites = [
    {
      name: "Mur des Lamentations",
      description: "Lieu saint du judaïsme",
      walkingTime: "5-15 min selon hôtel",
      tips: "Accessible 24h/24, code vestimentaire requis"
    },
    {
      name: "Saint-Sépulcre",
      description: "Lieu de crucifixion et résurrection",
      walkingTime: "10-20 min selon hôtel",
      tips: "Horaires variables, arriver tôt le matin"
    },
    {
      name: "Esplanade des Mosquées",
      description: "3ème lieu saint de l'Islam",
      walkingTime: "10-25 min selon hôtel",
      tips: "Horaires restreints, réservation recommandée"
    },
    {
      name: "Mont Sion",
      description: "Tombe du Roi David, Cénacle",
      walkingTime: "15-30 min selon hôtel",
      tips: "Sites multiples, prévoir demi-journée"
    }
  ]

  const travelTips = [
    {
      title: "Shabbat et fêtes religieuses",
      content: "De nombreux services s'arrêtent du vendredi soir au samedi soir. Planifiez vos déplacements en conséquence."
    },
    {
      title: "Code vestimentaire",
      content: "Couvrez-vous pour visiter les lieux saints. Épaules et genoux couverts minimum pour tous les sites religieux."
    },
    {
      title: "Transport",
      content: "Tramway efficace, taxis et apps disponibles. Évitez de conduire dans la Vieille Ville (piétonne)."
    },
    {
      title: "Sécurité",
      content: "Ville très sûre. Contrôles de sécurité fréquents aux entrées des sites touristiques et hôtels."
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-amber-900/40 z-10"></div>
        
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1518856547423-3b9c6c0e8b94?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80)' }}
        />
        
        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Hôtels à <span className="text-amber-300">Jérusalem</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8">
                Séjournez au cœur de la Ville Sainte, berceau des trois religions monothéistes
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#hotels" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors text-lg"
                >
                  Voir les hôtels
                  <ArrowRight className="ml-2" size={24} />
                </Link>
                <Link 
                  href="#booking" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-amber-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg"
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
              Jérusalem, la Ville Sainte
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Jérusalem est une ville unique au monde, où se côtoient 3000 ans d'histoire et de spiritualité. 
              Centre religieux pour le judaïsme, le christianisme et l'islam, elle offre une expérience 
              profondément émouvante et enrichissante. Ses ruelles millénaires, ses sites sacrés et 
              son atmosphère mystique en font une destination inoubliable.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <Church className="h-12 w-12 text-amber-600 mx-auto mb-2" />
                <p className="font-medium">Lieux saints</p>
              </div>
              <div className="text-center">
                <MapPin className="h-12 w-12 text-amber-600 mx-auto mb-2" />
                <p className="font-medium">Vieille Ville</p>
              </div>
              <div className="text-center">
                <Star className="h-12 w-12 text-amber-600 mx-auto mb-2" />
                <p className="font-medium">Patrimoine UNESCO</p>
              </div>
              <div className="text-center">
                <Coffee className="h-12 w-12 text-amber-600 mx-auto mb-2" />
                <p className="font-medium">Culture locale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Formulaire de réservation */}
      <section id="booking" className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Réservez votre hôtel à Jérusalem</h2>
            <p className="text-gray-600 mt-2">Expertise locale et tarifs préférentiels</p>
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
            Nos hôtels recommandés à Jérusalem
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
                    <div className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded text-sm font-medium">
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
                    <div className="bg-amber-50 border border-amber-200 rounded p-3 mb-4">
                      <p className="text-sm text-amber-700 font-medium">{hotel.specialOffer}</p>
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
                    <button className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors text-sm font-medium">
                      Réserver
                    </button>
                  </div>
                  
                  <p className="text-xs text-gray-500 mt-2">{hotel.reviews} avis clients</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Quartiers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Quartiers et zones d'hébergement
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {neighborhoods.map((neighborhood, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{neighborhood.name}</h3>
                <p className="text-gray-600 mb-4">{neighborhood.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-800 mb-2">Points forts :</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {neighborhood.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center">
                        <Check size={16} className="text-amber-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-start text-sm mb-2">
                    <span className="text-gray-500">Prix moyen:</span>
                    <span className="font-medium text-gray-700">{neighborhood.priceRange}</span>
                  </div>
                  <div className="flex justify-between items-start text-sm">
                    <span className="text-gray-500">Idéal pour:</span>
                    <span className="text-amber-600 font-medium">{neighborhood.bestFor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Sites Religieux */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Accès aux lieux saints depuis votre hôtel
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {religiousSites.map((site, index) => (
                <div key={index} className="bg-amber-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{site.name}</h3>
                  <p className="text-gray-600 mb-3">{site.description}</p>
                  <div className="flex items-center text-sm text-amber-700 mb-2">
                    <MapPin size={16} className="mr-1" />
                    <span>À pied: {site.walkingTime}</span>
                  </div>
                  <p className="text-sm text-gray-600 italic">{site.tips}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Conseils */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Conseils pour votre séjour à Jérusalem
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {travelTips.map((tip, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{tip.title}</h3>
                  <p className="text-gray-600">{tip.content}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-amber-50 rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Planifiez votre pèlerinage ou visite culturelle
              </h3>
              <p className="text-gray-600 mb-6">
                Jérusalem nécessite une préparation particulière. Notre équipe spécialisée vous conseille 
                pour choisir l'hôtel idéal selon vos centres d'intérêt et vos besoins spirituels.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="tel:+33182836729"
                  className="inline-flex items-center justify-center px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors"
                >
                  <Phone size={18} className="mr-2" />
                  Conseil personnalisé
                </a>
                <a 
                  href="mailto:contact@elynortours.com"
                  className="inline-flex items-center justify-center px-6 py-3 border border-amber-500 text-amber-500 font-semibold rounded-lg hover:bg-amber-50 transition-colors"
                >
                  <Mail size={18} className="mr-2" />
                  Demande de devis
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vivez une expérience unique à Jérusalem
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Laissez-vous guider par nos experts pour découvrir la Ville Sainte dans les meilleures conditions. 
            Hôtels sélectionnés et conseils sur mesure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="#booking"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Réserver maintenant
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-amber-600 transition-colors"
            >
              Conseil d'expert
            </Link>
          </div>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jerusalemHotelsSchema) }}
      />
    </>
  )
}