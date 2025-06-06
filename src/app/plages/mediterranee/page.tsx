import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Umbrella, Sun, Shield, Info, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Plages de la Méditerranée en Israël | Elynor Tours',
  description: 'Découvrez les plus belles plages de la Méditerranée en Israël. Guide complet avec informations pratiques, photos et conseils.',
  keywords: ['plages israël', 'méditerranée israël', 'tel aviv plage', 'netanya plage', 'herzliya plage'],
}

// Schéma de données structurées pour la page des plages
const beachesSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "Plages de la Méditerranée en Israël",
  "description": "Les magnifiques plages de la côte méditerranéenne d'Israël, s'étendant de Tel Aviv à Haïfa.",
  "url": "https://elynortours.com/plages/mediterranee",
  "touristType": ["Beach", "Nature"],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "32.0853",
    "longitude": "34.7818"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  }
}

export default function MediterraneanBeachesPage() {
  const popularBeaches = [
    {
      name: 'Gordon Beach, Tel Aviv',
      image: '/images/telaviv.jpg',
      description: "L'une des plages les plus populaires de Tel Aviv, avec de nombreux cafés et restaurants à proximité.",
      coordinates: "32.0833° N, 34.7667° E",
      facilities: ["Douches", "Chaises longues", "Restaurants", "Sports nautiques"]
    },
    {
      name: 'Herzliya Beach',
      image: '/images/telaviv.jpg', // À remplacer par une image de Herzliya
      description: "Plage élégante avec marina et restaurants haut de gamme, idéale pour les familles.",
      coordinates: "32.1650° N, 34.7967° E",
      facilities: ["Parking", "Restaurants", "Marina", "Aires de jeux"]
    },
    {
      name: 'Netanya Beach',
      image: '/images/telaviv.jpg', // À remplacer par une image de Netanya
      description: "Magnifiques falaises calcaires et longues étendues de sable doré.",
      coordinates: "32.3328° N, 34.8511° E",
      facilities: ["Promenade", "Restaurants", "Surveillance"]
    }
  ]

  const safetyTips = [
    "Respectez les drapeaux de baignade et les instructions des sauveteurs",
    "Protégez-vous du soleil avec de la crème solaire, un chapeau et des lunettes",
    "Hydratez-vous régulièrement, surtout pendant les mois d'été",
    "Surveillez les enfants en permanence",
    "Attention aux méduses, particulièrement présentes en été"
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/40 z-10"></div>
        
        {/* Image de fond */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)' }}
        />
        
        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Plages de la Méditerranée en Israël
              </h1>
              <p className="text-xl text-white mb-8">
                Découvrez les plus belles plages de sable fin le long de la côte méditerranéenne israélienne
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#beaches" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Découvrir les plages
                  <Umbrella className="ml-2" size={20} />
                </Link>
                <Link 
                  href="#safety" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Conseils de sécurité
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
              La côte méditerranéenne d'Israël
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p>
                Avec plus de 190 kilomètres de côtes, la Méditerranée offre à Israël certaines des plus belles plages du Moyen-Orient. 
                De Tel Aviv à Haïfa, en passant par Herzliya et Netanya, les plages israéliennes se distinguent par leur sable fin, 
                leurs eaux cristallines et leurs infrastructures modernes.
              </p>
              
              <p>
                Les plages méditerranéennes d'Israël sont accessibles toute l'année grâce au climat méditerranéen, avec des étés 
                chauds et des hivers doux. La haute saison s'étend de mai à octobre, avec des températures de l'eau particulièrement 
                agréables de juin à septembre.
              </p>
              
              <p>
                Que vous soyez amateur de farniente, de sports nautiques ou simplement à la recherche d'un lieu pour vous rafraîchir, 
                les plages méditerranéennes d'Israël sauront vous séduire par leur beauté et leur diversité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Plages Populaires */}
      <section id="beaches" className="py-16 bg-blue-50">
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
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
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

      {/* Section Conseils de Sécurité */}
      <section id="safety" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Conseils de sécurité
            </h2>
            
            <div className="bg-blue-50 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="text-blue-500" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Pour profiter des plages en toute sécurité</h3>
              </div>
              
              <ul className="space-y-4">
                {safetyTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Info className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-blue-200">
                <p className="text-sm text-gray-600">
                  <strong>Note :</strong> La plupart des plages surveillées sont indiquées par des drapeaux. Un drapeau blanc signifie 
                  que la baignade est autorisée, un drapeau rouge indique qu'elle est interdite, et un drapeau noir signale la fermeture 
                  de la plage.
                </p>
              </div>
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
                La plupart des plages méditerranéennes sont facilement accessibles en transports en commun ou en voiture :
              </p>
              
              <h4>En transports en commun</h4>
              <ul>
                <li>À Tel Aviv, les lignes de bus 4, 5, 39 et 55 desservent la promenade du bord de mer</li>
                <li>Pour Herzliya, prenez le train depuis Tel Aviv jusqu'à la gare d'Herzliya, puis le bus local</li>
                <li>Pour Netanya, des trains directs partent régulièrement de Tel Aviv et Haïfa</li>
              </ul>
              
              <h4>En voiture</h4>
              <p>
                La route côtière 2 (Kvish HaHof) longe la côte méditerranéenne et permet d'accéder facilement à toutes les 
                plages principales. Des parkings sont disponibles à proximité de la plupart des plages (payants en haute saison).
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mt-6">
                <h4 className="text-lg font-semibold mb-2">Besoin d'une voiture ?</h4>
                <p className="mb-4">
                  Pour plus de liberté dans vos déplacements, nous vous proposons des locations de voiture à des tarifs avantageux.
                </p>
                <Link 
                  href="/location-voiture"
                  className="text-blue-500 font-medium flex items-center hover:text-blue-600"
                >
                  Voir nos offres de location <ArrowRight size={18} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-12 bg-blue-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à découvrir les plages d'Israël ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous pour organiser votre séjour balnéaire en Israël avec des conseils personnalisés.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Nous contacter
            </Link>
            <Link 
              href="/plages/mer-morte"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-500 transition-colors"
            >
              Découvrir la Mer Morte
            </Link>
          </div>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(beachesSchema) }}
      />
    </>
  )
}