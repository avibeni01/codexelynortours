import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Car, MapPin, Check, ArrowRight, Star, Clock, Shield, Users, Phone } from 'lucide-react'
import BookingForm from '@/components/forms/BookingForm'

export const metadata: Metadata = {
  title: 'Location de Voiture à Jérusalem | Elynor Tours',
  description: 'Louez votre voiture à Jérusalem au meilleur prix avec Elynor Tours. Large choix de véhicules, assurance complète et assistance 24/7 dans la ville sainte.',
  keywords: [
    'location voiture jérusalem',
    'location auto jérusalem',
    'voiture jérusalem',
    'location véhicule jérusalem',
    'car rental jerusalem',
    'elynor tours jérusalem',
    'location voiture ville sainte',
    'voiture old city jérusalem'
  ].join(', '),
  openGraph: {
    title: 'Location de Voiture à Jérusalem | Elynor Tours',
    description: 'Louez votre voiture à Jérusalem au meilleur prix avec Elynor Tours',
    url: 'https://elynortours.com/location-voiture/jerusalem',
    siteName: 'Elynor Tours',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://elynortours.com/location-voiture/jerusalem'
  },
}

// Schéma de données structurées pour le SEO local
const jerusalemCarRentalSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRental",
  "name": "Location de Voiture Jérusalem - Elynor Tours",
  "description": "Service de location de voiture à Jérusalem avec une large gamme de véhicules et assistance 24/7",
  "provider": {
    "@type": "TravelAgency",
    "name": "Elynor Tours",
    "url": "https://elynortours.com"
  },
  "areaServed": {
    "@type": "City",
    "name": "Jérusalem",
    "containedInPlace": "Israël"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Jérusalem",
    "addressCountry": "IL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "31.7683",
    "longitude": "35.2137"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "EUR",
    "lowPrice": "25",
    "highPrice": "150",
    "offerCount": "50+"
  }
}

export default function JerusalemCarRentalPage() {
  const carCategories = [
    {
      name: 'Économique',
      description: 'Idéal pour la ville et les courts trajets',
      models: ['Suzuki Alto', 'Kia Picanto', 'Hyundai i10'],
      price: 'À partir de 25€/jour',
      image: '/images/cars/economy.jpg',
      features: ['Climatisation', 'GPS', 'Assurance de base']
    },
    {
      name: 'Compact',
      description: 'Parfait équilibre entre économie et confort',
      models: ['Hyundai i20', 'Mazda 2', 'Kia Rio'],
      price: 'À partir de 35€/jour',
      image: '/images/cars/compact.jpg',
      features: ['Climatisation', 'GPS', 'Bluetooth', 'Assurance étendue']
    },
    {
      name: 'Familial',
      description: 'Spacieux et confortable pour les familles',
      models: ['Mazda 3', 'Honda Civic', 'Seat Leon'],
      price: 'À partir de 45€/jour',
      image: '/images/cars/family.jpg',
      features: ['Grand coffre', 'Climatisation', 'GPS', '5 places']
    },
    {
      name: 'SUV',
      description: 'Pour explorer Jérusalem et ses environs',
      models: ['Hyundai Tucson', 'Mazda CX-5', 'Kia Sportage'],
      price: 'À partir de 65€/jour',
      image: '/images/cars/suv.jpg',
      features: ['Transmission automatique', 'GPS', 'Position haute', '4x4 disponible']
    }
  ]

  const jerusalemAdvantages = [
    {
      title: 'Connaissance locale',
      description: 'Notre équipe connaît parfaitement Jérusalem et vous guide pour éviter les zones compliquées.',
      icon: <MapPin className="text-orange-500" size={24} />
    },
    {
      title: 'Flexibilité Shabbat',
      description: 'Options spéciales pour les voyageurs observant le Shabbat avec récupération adaptée.',
      icon: <Clock className="text-orange-500" size={24} />
    },
    {
      title: 'Assurance complète',
      description: 'Couverture étendue incluant la circulation dans la vieille ville et les territoires.',
      icon: <Shield className="text-orange-500" size={24} />
    },
    {
      title: 'Support francophone',
      description: 'Assistance en français 24/7 pour tous vos besoins pendant votre séjour.',
      icon: <Users className="text-orange-500" size={24} />
    }
  ]

  const pickupLocations = [
    {
      name: 'Centre-ville Jérusalem',
      address: 'Rue Jaffa, près de la porte de Jaffa',
      hours: '8h00 - 18h00 (dimanche à jeudi)',
      distance: 'À 5 min de la Vieille Ville'
    },
    {
      name: 'Quartier Moderne',
      address: 'Avenue Herzl, Jérusalem Ouest',
      hours: '8h00 - 18h00 (dimanche à jeudi)',
      distance: 'À 10 min du centre'
    },
    {
      name: 'Livraison à l\'hôtel',
      address: 'Directement à votre hébergement',
      hours: 'Sur rendez-vous',
      distance: 'Service premium'
    }
  ]

  const jerusalemTips = [
    {
      title: 'Circulation dans la Vieille Ville',
      content: 'L\'accès en voiture est limité dans la Vieille Ville. Utilisez les parkings périphériques et marchez.'
    },
    {
      title: 'Stationnement',
      content: 'Zones bleues et blanches payantes. Zones rouges et blanches interdites. Respectez scrupuleusement.'
    },
    {
      title: 'Shabbat',
      content: 'De nombreuses routes sont fermées du vendredi soir au samedi soir. Planifiez en conséquence.'
    },
    {
      title: 'Checkpoints',
      content: 'Vérifiez les conditions d\'accès selon votre itinéraire. Notre équipe vous briefera.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40 z-10"></div>
        
        {/* Image de fond - Jérusalem */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1544967919-467df5fdb05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80)'
          }}
        />
        
        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Location de voiture à <span className="text-orange-500">Jérusalem</span>
              </h1>
              <p className="text-xl text-white mb-8">
                Explorez la ville sainte en toute liberté avec nos véhicules adaptés à Jérusalem
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
                  href="#cars" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-orange-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Voir nos véhicules
                  <Car className="ml-2" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Avantages Jérusalem */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Pourquoi choisir Elynor Tours à <strong>Jérusalem</strong> ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {jerusalemAdvantages.map((advantage, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Formulaire de réservation */}
      <section id="booking-form" className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Réservez votre voiture à Jérusalem</h2>
            <p className="text-gray-600 mt-2">Obtenez un devis instantané pour votre location</p>
          </div>
          
          <div className="bg-blue-50 rounded-xl shadow-lg overflow-hidden">
            <BookingForm initialActiveTab="car" />
          </div>
        </div>
      </section>

      {/* Section Véhicules */}
      <section id="cars" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Notre flotte à <strong>Jérusalem</strong>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {carCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Car size={80} className="text-gray-400" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Modèles disponibles :</p>
                    <div className="flex flex-wrap gap-1">
                      {category.models.map((model, i) => (
                        <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Équipements :</p>
                    <ul className="text-sm text-gray-600">
                      {category.features.map((feature, i) => (
                        <li key={i} className="flex items-center mb-1">
                          <Check size={14} className="text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-lg font-bold text-orange-500 mb-3">{category.price}</p>
                    <Link 
                      href="#booking-form"
                      className="block w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors"
                    >
                      Réserver
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Points de retrait */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Points de retrait à <strong>Jérusalem</strong>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pickupLocations.map((location, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{location.name}</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-start">
                    <MapPin size={18} className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    <span>{location.address}</span>
                  </div>
                  <div className="flex items-start">
                    <Clock size={18} className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    <span>{location.hours}</span>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight size={18} className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    <span>{location.distance}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Conseils Jérusalem */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Conseils pour conduire à <strong>Jérusalem</strong>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {jerusalemTips.map((tip, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{tip.title}</h3>
                  <p className="text-gray-600">{tip.content}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-lg font-semibold text-orange-800 mb-2">
                Besoin de conseils personnalisés ?
              </h3>
              <p className="text-orange-700 mb-4">
                Notre équipe locale vous accompagne avec des conseils adaptés à votre itinéraire 
                et vos besoins spécifiques à Jérusalem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+972584140489"
                  className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                >
                  <Phone size={18} className="mr-2" />
                  Nous appeler
                </a>
                <a 
                  href="https://wa.me/972584140489"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-12 bg-orange-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à explorer Jérusalem ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Réservez dès maintenant votre voiture à Jérusalem et découvrez la ville sainte 
            en toute liberté avec Elynor Tours.
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
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jerusalemCarRentalSchema) }}
      />
    </>
  )
}