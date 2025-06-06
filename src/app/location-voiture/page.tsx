import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Car, MapPin, Check, ArrowRight, Star } from 'lucide-react'
import BookingForm from '@/components/forms/BookingForm'

export const metadata: Metadata = {
  title: 'Location de Voiture en Israël | Elynor Tours',
  description: 'Louez votre voiture en Israël au meilleur prix avec Elynor Tours. Large choix de véhicules, assurance complète et assistance 24/7.',
  keywords: ['location voiture israël', 'voiture israël', 'location auto tel aviv', 'location auto jerusalem'],
}

// Schéma de données structurées pour la page de location de voiture
const carRentalSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Location de voiture en Israël",
  "provider": {
    "@type": "TravelAgency",
    "name": "Elynor Tours",
    "url": "https://elynortours.com"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Israël"
  },
  "description": "Service de location de voiture en Israël avec une large gamme de véhicules, assurance complète et assistance 24/7.",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "EUR",
    "lowPrice": "25",
    "highPrice": "150",
    "offerCount": "50+"
  }
}

export default function CarRentalPage() {
  const popularDestinations = [
    {
      name: 'Tel Aviv',
      image: '/images/telaviv.jpg',
      description: 'La ville qui ne dort jamais, avec ses plages magnifiques et sa vie nocturne animée.',
      link: '/location-voiture/tel-aviv'
    },
    {
      name: 'Jérusalem',
      image: '/images/jeru.jpg',
      description: 'La ville sainte, riche en histoire et en sites religieux importants.',
      link: '/location-voiture/jerusalem'
    },
    {
      name: 'Aéroport Ben Gourion',
      image: '/images/telaviv.jpg', // À remplacer par une image de l'aéroport
      description: "Récupérez votre voiture directement à l'aéroport pour plus de commodité.",
      link: '/location-voiture/aeroport-ben-gourion'
    }
  ]

  const benefits = [
    {
      title: 'Prix imbattables',
      description: 'Nous négocions directement avec les fournisseurs pour vous offrir les meilleurs tarifs.',
      icon: <Star className="text-orange-500" size={24} />
    },
    {
      title: 'Véhicules récents',
      description: 'Notre flotte est régulièrement renouvelée pour vous garantir des véhicules fiables et confortables.',
      icon: <Car className="text-orange-500" size={24} />
    },
    {
      title: 'Assistance 24/7',
      description: 'Notre équipe francophone est disponible à tout moment pour vous aider en cas de besoin.',
      icon: <Check className="text-orange-500" size={24} />
    },
    {
      title: 'Assurance complète',
      description: "Tous nos véhicules sont couverts par une assurance complète pour votre tranquillité d'esprit.",
      icon: <Check className="text-orange-500" size={24} />
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40 z-10"></div>
        
        {/* Image de fond */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)' }}
        />
        
        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Location de voiture en Israël
              </h1>
              <p className="text-xl text-white mb-8">
                Trouvez le véhicule idéal pour votre séjour en Israël au meilleur prix
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
                  href="#destinations" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-orange-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
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
            <h2 className="text-3xl font-bold text-gray-800">Réservez votre voiture</h2>
            <p className="text-gray-600 mt-2">Comparez et réservez en quelques clics</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <BookingForm initialActiveTab="car" />
          </div>
        </div>
      </section>

      {/* Section Destinations Populaires */}
      <section id="destinations" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Destinations populaires
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularDestinations.map((destination, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image 
                    src={destination.image} 
                    alt={`Location de voiture à ${destination.name}`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <Link 
                    href={destination.link}
                    className="text-orange-500 font-medium flex items-center hover:text-orange-600"
                  >
                    Voir les offres <ArrowRight size={18} className="ml-1" />
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
            Pourquoi choisir Elynor Tours ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Guide de Location */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Guide de location de voiture en Israël
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <h3>Ce qu'il faut savoir avant de louer une voiture en Israël</h3>
              <p>
                La location de voiture est l'un des moyens les plus pratiques pour explorer Israël. 
                Voici quelques informations importantes à connaître avant de réserver :
              </p>
              
              <h4>Documents nécessaires</h4>
              <ul>
                <li>Permis de conduire valide (permis international recommandé mais pas obligatoire)</li>
                <li>Carte d'identité ou passeport</li>
                <li>Carte de crédit au nom du conducteur principal</li>
              </ul>
              
              <h4>Conditions de location</h4>
              <ul>
                <li>Âge minimum : 21 ans (des frais supplémentaires peuvent s'appliquer pour les conducteurs de moins de 25 ans)</li>
                <li>Expérience de conduite : minimum 1 an</li>
              </ul>
              
              <h4>Conseils de conduite en Israël</h4>
              <ul>
                <li>On roule à droite en Israël</li>
                <li>Les limitations de vitesse sont généralement de 50 km/h en ville, 80 km/h sur route et 110 km/h sur autoroute</li>
                <li>Le port de la ceinture de sécurité est obligatoire pour tous les passagers</li>
                <li>L'utilisation du téléphone au volant est interdite sans kit mains libres</li>
              </ul>
              
              <p>
                Avec Elynor Tours, vous bénéficiez d'un service personnalisé et de conseils adaptés à vos besoins. 
                N'hésitez pas à nous contacter pour toute question concernant votre location de voiture en Israël.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-12 bg-orange-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à réserver votre voiture ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous dès maintenant pour bénéficier de nos meilleurs tarifs et 
            d'un service personnalisé.
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(carRentalSchema) }}
      />
    </>
  )
}