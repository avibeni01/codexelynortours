import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Umbrella, Sun, Shield, Info, ArrowRight, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Plages de la Mer Morte en Israël | Elynor Tours',
  description: 'Découvrez les plages uniques de la Mer Morte en Israël. Guide complet avec informations pratiques, bienfaits thérapeutiques et conseils.',
  keywords: ['mer morte israël', 'plages mer morte', 'ein bokek', 'ein gedi', 'bienfaits mer morte'],
}

// Schéma de données structurées pour la page des plages de la Mer Morte
const deadSeaBeachesSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "Plages de la Mer Morte en Israël",
  "description": "Les plages uniques de la Mer Morte, le point le plus bas de la Terre, connues pour leurs propriétés thérapeutiques.",
  "url": "https://elynortours.com/plages/mer-morte",
  "touristType": ["Beach", "Nature", "Spa"],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "31.5497",
    "longitude": "35.4663"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  }
}

export default function DeadSeaBeachesPage() {
  const popularBeaches = [
    {
      name: 'Ein Bokek Beach',
      image: '/images/meremorte.jpg',
      description: "Plage publique gratuite avec installations modernes, située près des grands hôtels.",
      coordinates: "31.2000° N, 35.3667° E",
      facilities: ["Douches", "Vestiaires", "Restaurants", "Chaises longues"]
    },
    {
      name: 'Ein Gedi Public Beach',
      image: '/images/meremorte.jpg',
      description: "Plage située près de la réserve naturelle d'Ein Gedi, avec vue sur les montagnes jordaniennes.",
      coordinates: "31.4500° N, 35.3833° E",
      facilities: ["Parking", "Douches", "Ombre", "Kiosques"]
    },
    {
      name: 'Neve Midbar Beach',
      image: '/images/meremorte.jpg',
      description: "Plage paisible avec des bassins de boue naturelle et des installations de spa.",
      coordinates: "31.5833° N, 35.4167° E",
      facilities: ["Spa", "Restaurant", "Aire de pique-nique", "Surveillance"]
    }
  ]

  const healthBenefits = [
    {
      title: "Traitement de la peau",
      description: "Les minéraux de la Mer Morte sont efficaces contre le psoriasis, l'eczéma et l'acné."
    },
    {
      title: "Soulagement des douleurs",
      description: "Les propriétés anti-inflammatoires de l'eau et de la boue soulagent les douleurs articulaires."
    },
    {
      title: "Détoxification",
      description: "La forte concentration en minéraux aide à éliminer les toxines du corps."
    },
    {
      title: "Relaxation",
      description: "La flottabilité exceptionnelle réduit la pression sur les articulations et favorise la détente."
    }
  ]

  const safetyTips = [
    "Ne plongez pas et évitez d'éclabousser - l'eau est extrêmement salée et peut être douloureuse dans les yeux",
    "Limitez votre baignade à 20 minutes maximum à la fois",
    "Couvrez toute coupure ou plaie ouverte avant d'entrer dans l'eau",
    "Buvez beaucoup d'eau pour rester hydraté",
    "Rincez-vous après la baignade pour éliminer le sel"
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-teal-900/40 z-10"></div>
        
        {/* Image de fond */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544551763-92ab472cad5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)' }}
        />
        
        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Plages de la Mer Morte
              </h1>
              <p className="text-xl text-white mb-8">
                Découvrez l'expérience unique de flotter dans les eaux les plus salées du monde
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#beaches" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition-colors"
                >
                  Découvrir les plages
                  <Umbrella className="ml-2" size={20} />
                </Link>
                <Link 
                  href="#benefits" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-teal-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Bienfaits thérapeutiques
                  <Shield className="ml-2" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              La Mer Morte : une merveille naturelle
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p>
                Située à 430 mètres sous le niveau de la mer, la Mer Morte est le point le plus bas de la Terre. 
                Avec une salinité près de 10 fois supérieure à celle des océans, elle offre une expérience de 
                baignade unique où il est impossible de couler.
              </p>
              
              <p>
                Riche en minéraux comme le magnésium, le calcium, le potassium et le brome, ses eaux et sa boue 
                sont réputées pour leurs propriétés thérapeutiques et sont utilisées dans de nombreux traitements 
                dermatologiques et rhumatismaux.
              </p>
              
              <p>
                Les plages de la Mer Morte sont accessibles toute l'année grâce au climat désertique de la région, 
                avec des températures particulièrement agréables au printemps et à l'automne. L'été peut être très 
                chaud, avec des températures dépassant souvent les 40°C.
              </p>
              
              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-amber-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-1">Important</h4>
                    <p className="text-amber-700 text-base">
                      En raison de l'évaporation et de l'exploitation industrielle, le niveau de la Mer Morte 
                      baisse d'environ un mètre par an. Certaines plages historiques ne sont plus accessibles 
                      ou ont été réaménagées. Vérifiez toujours les informations les plus récentes avant votre visite.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Plages Populaires */}
      <section id="beaches" className="py-16 bg-teal-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Plages populaires
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularBeaches.map((beach, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image 
                    src={beach.image} 
                    alt={beach.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{beach.name}</h3>
                  <p className="text-gray-600 mb-4">{beach.description}</p>
                  
                  <div className="flex items-start gap-2 text-gray-500 text-sm mb-4">
                    <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                    <span>{beach.coordinates}</span>
                  </div>
                  
                  <h4 className="font-medium mb-2">Équipements :</h4>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    {beach.facilities.map((facility, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                        {facility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Bienfaits */}
      <section id="benefits" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Bienfaits thérapeutiques
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {healthBenefits.map((benefit, index) => (
                <div key={index} className="bg-teal-50 rounded-lg p-6 border-l-4 border-teal-500">
                  <h3 className="text-xl font-semibold mb-2 text-teal-800">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-gray-50 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <Shield className="text-teal-500" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Conseils de sécurité</h3>
              </div>
              
              <ul className="space-y-4">
                {safetyTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Info className="text-teal-500 mt-1 flex-shrink-0" size={18} />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Transport */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Comment s'y rendre
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p>
                La Mer Morte est située à environ 1h30 de route de Jérusalem et 2h30 de Tel Aviv :
              </p>
              
              <h4>En transports en commun</h4>
              <ul>
                <li>Des bus réguliers partent de la gare routière centrale de Jérusalem vers Ein Bokek (ligne 486)</li>
                <li>Des excursions d'une journée sont également disponibles depuis Tel Aviv et Jérusalem</li>
              </ul>
              
              <h4>En voiture</h4>
              <p>
                La route 90 longe la côte ouest de la Mer Morte et permet d'accéder facilement à toutes les 
                plages principales. C'est l'option la plus pratique pour explorer plusieurs plages en une journée.
              </p>
              
              <div className="bg-teal-50 p-6 rounded-lg mt-6">
                <h4 className="text-lg font-semibold mb-2">Besoin d'une voiture ?</h4>
                <p className="mb-4">
                  Pour plus de liberté dans vos déplacements, nous vous proposons des locations de voiture à des tarifs avantageux.
                </p>
                <Link 
                  href="/location-voiture"
                  className="text-teal-500 font-medium flex items-center hover:text-teal-600"
                >
                  Voir nos offres de location <ArrowRight size={18} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-12 bg-teal-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à découvrir la Mer Morte ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous pour organiser votre séjour à la Mer Morte avec des conseils personnalisés.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-teal-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Nous contacter
            </Link>
            <Link 
              href="/plages/mediterranee"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-500 transition-colors"
            >
              Découvrir les plages méditerranéennes
            </Link>
          </div>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(deadSeaBeachesSchema) }}
      />
    </>
  )
}