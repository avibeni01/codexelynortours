import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Hotel, MapPin, Check, ArrowRight, Star, Coffee, Wifi, Umbrella } from 'lucide-react'
import BookingForm from '@/components/forms/BookingForm'

export const metadata: Metadata = {
  title: 'Hôtels en Israël | Elynor Tours',
  description: 'Réservez votre hôtel en Israël au meilleur prix avec Elynor Tours. Large choix d\'établissements, annulation flexible et assistance 24/7.',
  keywords: ['hotel israël', 'hotel tel aviv', 'hotel jerusalem', 'hotel mer morte', 'hotel eilat'],
}

// Schéma de données structurées pour la page d'hôtels
const hotelServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Réservation d'hôtels en Israël",
  "provider": {
    "@type": "TravelAgency",
    "name": "Elynor Tours",
    "url": "https://elynortours.com"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Israël"
  },
  "description": "Service de réservation d'hôtels en Israël avec une large gamme d'établissements, annulation flexible et assistance 24/7.",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "EUR",
    "lowPrice": "50",
    "highPrice": "500",
    "offerCount": "100+"
  }
}

export default function HotelsPage() {
  const popularDestinations = [
    {
      name: 'Tel Aviv',
      image: '/images/telaviv.jpg',
      description: "Hôtels en bord de mer avec vue sur la Méditerranée et accès facile à la vie nocturne.",
      link: '/hotels/tel-aviv'
    },
    {
      name: 'Jérusalem',
      image: '/images/jeru.jpg',
      description: "Hôtels historiques et modernes à proximité des sites religieux et culturels.",
      link: '/hotels/jerusalem'
    },
    {
      name: 'Mer Morte',
      image: '/images/meremorte.jpg',
      description: "Complexes hôteliers avec spas et accès direct aux eaux thérapeutiques de la Mer Morte.",
      link: '/hotels/mer-morte'
    },
    {
      name: 'Eilat',
      image: '/images/telaviv.jpg', // À remplacer par une image d'Eilat
      description: "Hôtels de luxe avec vue sur la Mer Rouge, parfaits pour les amateurs de plongée.",
      link: '/hotels/eilat'
    }
  ]

  const benefits = [
    {
      title: 'Meilleurs tarifs garantis',
      description: "Nous négocions directement avec les hôtels pour vous offrir les prix les plus compétitifs.",
      icon: <Star className="text-rose-500" size={24} />
    },
    {
      title: 'Annulation flexible',
      description: "La plupart de nos offres incluent une option d'annulation gratuite jusqu'à 24h avant l'arrivée.",
      icon: <Check className="text-rose-500" size={24} />
    },
    {
      title: 'Assistance 24/7',
      description: "Notre équipe francophone est disponible à tout moment pour vous aider avec votre réservation.",
      icon: <Check className="text-rose-500" size={24} />
    },
    {
      title: 'Sélection exclusive',
      description: "Nous avons personnellement sélectionné chaque hôtel pour garantir une expérience de qualité.",
      icon: <Hotel className="text-rose-500" size={24} />
    }
  ]

  const amenities = [
    { name: 'Piscine', icon: <Umbrella className="text-blue-500" size={20} /> },
    { name: 'Petit-déjeuner inclus', icon: <Coffee className="text-amber-700" size={20} /> },
    { name: 'Wi-Fi gratuit', icon: <Wifi className="text-green-500" size={20} /> },
    { name: 'Vue sur mer', icon: <MapPin className="text-cyan-500" size={20} /> }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40 z-10"></div>
        
        {/* Image de fond */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)' }}
        />
        
        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Hôtels en Israël
              </h1>
              <p className="text-xl text-white mb-8">
                Trouvez l'hébergement idéal pour votre séjour en Israël au meilleur prix
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#booking-form" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-rose-500 text-white font-semibold rounded-lg hover:bg-rose-600 transition-colors"
                >
                  Réserver maintenant
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link 
                  href="#destinations" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-rose-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Voir les destinations
                  <MapPin className="ml-2" size={20} />
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
            <h2 className="text-3xl font-bold text-gray-800">Réservez votre hôtel</h2>
            <p className="text-gray-600 mt-2">Comparez et réservez en quelques clics</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <BookingForm initialActiveTab="hotel" />
          </div>
        </div>
      </section>

      {/* Section Destinations Populaires */}
      <section id="destinations" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Destinations populaires
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularDestinations.map((destination, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image 
                    src={destination.image} 
                    alt={`Hôtels à ${destination.name}`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <Link 
                    href={destination.link}
                    className="text-rose-500 font-medium flex items-center hover:text-rose-600"
                  >
                    Voir les hôtels <ArrowRight size={18} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Avantages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pourquoi réserver avec Elynor Tours ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Filtres */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Trouvez l'hôtel parfait
            </h2>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-6">Équipements populaires</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 border rounded-lg hover:bg-rose-50 hover:border-rose-200 transition-colors cursor-pointer">
                    {amenity.icon}
                    <span>{amenity.name}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Link 
                  href="#booking-form"
                  className="inline-flex items-center justify-center px-6 py-3 bg-rose-500 text-white font-semibold rounded-lg hover:bg-rose-600 transition-colors"
                >
                  Rechercher maintenant
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Guide */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Guide des hôtels en Israël
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <h3>Comment choisir votre hôtel en Israël</h3>
              <p>
                Israël offre une grande variété d'hébergements, des hôtels de luxe aux options plus économiques. 
                Voici quelques conseils pour vous aider à faire le meilleur choix :
              </p>
              
              <h4>Emplacement</h4>
              <p>
                Choisissez un hôtel en fonction de vos centres d'intérêt. À Tel Aviv, privilégiez la proximité 
                avec la plage ou le centre-ville. À Jérusalem, optez pour un hôtel proche de la vieille ville 
                pour faciliter vos visites.
              </p>
              
              <h4>Catégorie et services</h4>
              <p>
                Les hôtels en Israël sont classés de 1 à 5 étoiles. Les établissements 4 et 5 étoiles offrent 
                généralement un excellent rapport qualité-prix avec des services comme le petit-déjeuner israélien 
                (copieux et varié), piscine, spa et Wi-Fi gratuit.
              </p>
              
              <h4>Période de voyage</h4>
              <p>
                Les prix des hôtels varient considérablement selon la saison. Réservez à l'avance si vous 
                voyagez pendant les fêtes juives ou la haute saison touristique (avril-mai et septembre-octobre).
              </p>
              
              <p>
                Avec Elynor Tours, vous bénéficiez d'un service personnalisé et de conseils adaptés à vos besoins. 
                N'hésitez pas à nous contacter pour toute question concernant votre réservation d'hôtel en Israël.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-12 bg-rose-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à réserver votre hôtel ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous dès maintenant pour bénéficier de nos meilleurs tarifs et 
            d'un service personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="#booking-form" 
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-rose-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Réserver maintenant
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-rose-500 transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelServiceSchema) }}
      />
    </>
  )
}