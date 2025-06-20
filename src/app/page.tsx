import Image from 'next/image'
import Link from 'next/link'
import BookingForm from '@/components/forms/BookingForm'
import { Car, Hotel, Umbrella, Phone, Star, Check, ArrowRight, Users, Shield, Clock } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero Section avec vidéo de fond */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40 z-10"></div>
        
        {/* Image de fond (remplace par vidéo si tu veux) */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://elynortours.com/wp-content/uploads/2023/05/eleynor-tour-voyage-location.webp)' }}
        />
        
        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Voyagez au meilleur prix avec{' '}
                <span className="text-orange-500">Elynor Tours</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8">
                Spécialiste Location Voiture & Hôtels depuis 2015
              </p>
              <p className="text-lg text-gray-200 mb-8">
                ElynorTours vous garantit les meilleurs tarifs hôtels et location de voiture 
                principalement en Europe mais aussi ailleurs dans le monde.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/location-voiture" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Réserver une voiture
                  <Car className="ml-2" size={20} />
                </Link>
                <Link 
                  href="/hotels" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-rose-500 text-white font-semibold rounded-lg hover:bg-rose-600 transition-colors"
                >
                  Trouver un hôtel
                  <Hotel className="ml-2" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Formulaire de réservation - NOUVELLE SECTION */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Réservation en ligne</h2>
            <p className="text-gray-600 mt-2">Réservez votre hébergement et vos services en quelques clics</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nos Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Location de voiture */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Car className="text-orange-500" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Location de Voitures</h3>
              <p className="text-gray-600 mb-4">
                Nous sommes fiers d'offrir à nos clients une vaste gamme de véhicules neufs 
                de haute qualité qui répondent à leurs besoins et à leur budget.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2" size={16} />
                  <span className="text-sm">Véhicules récents et entretenus</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2" size={16} />
                  <span className="text-sm">Assurance complète incluse</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2" size={16} />
                  <span className="text-sm">Assistance 24/7</span>
                </li>
              </ul>
              <Link 
                href="/location-voiture"
                className="text-orange-500 font-medium flex items-center hover:text-orange-600"
              >
                Voir nos offres <ArrowRight size={18} className="ml-1" />
              </Link>
            </div>

            {/* Réservation d'hôtels */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                <Hotel className="text-rose-500" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Réservation d'Hôtels</h3>
              <p className="text-gray-600 mb-4">
                Grâce à notre vaste réseau d'hôtels, nous sommes certains de pouvoir trouver 
                l'hébergement idéal pour tous les goûts et toutes les préférences.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2" size={16} />
                  <span className="text-sm">Meilleurs prix garantis</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2" size={16} />
                  <span className="text-sm">Large choix d'établissements</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2" size={16} />
                  <span className="text-sm">Annulation flexible</span>
                </li>
              </ul>
              <Link 
                href="/hotels"
                className="text-rose-500 font-medium flex items-center hover:text-rose-600"
              >
                Voir nos hôtels <ArrowRight size={18} className="ml-1" />
              </Link>
            </div>

            {/* Plages & Excursions */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Umbrella className="text-blue-500" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Plages & Excursions</h3>
              <p className="text-gray-600 mb-4">
                Découvrez les plus belles plages d'Israël. Nous vous proposons des expériences 
                uniques pour tous les goûts.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2" size={16} />
                  <span className="text-sm">Guides détaillés des plages</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2" size={16} />
                  <span className="text-sm">Conseils pratiques</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-2" size={16} />
                  <span className="text-sm">Informations d'accès</span>
                </li>
              </ul>
              <div className="space-y-2">
                <Link 
                  href="/plages/mediterranee"
                  className="text-blue-500 font-medium flex items-center hover:text-blue-600"
                >
                  Plages Méditerranée <ArrowRight size={18} className="ml-1" />
                </Link>
                <Link 
                  href="/plages/mer-morte"
                  className="text-orange-500 font-medium flex items-center hover:text-orange-600"
                >
                  Plages Mer Morte <ArrowRight size={18} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nos clients témoignent
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 font-bold mr-4">
                  BL
                </div>
                <div>
                  <h4 className="font-medium">Benjamin</h4>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Chaque été nous louons notre voiture avec l'agence Elynor Tours. C'est simple, 
                rapide et à prix défiant toute concurrence."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 font-bold mr-4">
                  MD
                </div>
                <div>
                  <h4 className="font-medium">Michael</h4>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Super !!! J’ai fait appel a leur services pour louer une voiture lors de ma dernière visite en Israël. Ce fut simple et agréable. Bien que je sois tendu pour des raisons personnelles, l’équipe a su prendre le temps et me mettre dans les meilleures conditions pour que mon séjour se passe au mieux. Merci vraiment !!!"
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 font-bold mr-4">
                  PL
                </div>
                <div>
                  <h4 className="font-medium">Patrice</h4>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Top vraiment elle gère tout et toujours au meilleur prix !"
              </p>
            </div>
          </div>

           <div className="text-center mt-8">
            <a href="https://www.google.com/search?kgmid=/g/11gh7kzvkk&hl=fr-IL&q=Elynor+tours+-+Location+de+voitures+et+Hotels+en+Israel+%26+dans+le+monde&kgs=7c7ff0d255d45364&shndl=17&source=sh/x/kp/osrp/m5/1" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
              Lire nos autres avis
            </a>
          </div>

        </div>
      </section>

      {/* Section Valeurs */}
      <div className="container mx-auto py-10">
        <h2 className="text-3xl font-bold text-center mb-10">Cherchez, comparez, économisez</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonne de gauche: Valeurs d'entreprise */}
          <div className="col-span-1 md:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-rose-500 text-white p-8 flex flex-col items-center justify-center text-center">
                <div className="w-14 h-14 mb-4 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <path d="M9 8h6M9 12h6M9 16h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Confidentialité</h3>
              </div>
              
              <div className="bg-rose-400 text-white p-8 flex flex-col items-center justify-center text-center">
                <div className="w-14 h-14 mb-4 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none">
                    <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z" />
                    <rect x="8" y="21" width="8" height="2" rx="1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Sérénité</h3>
              </div>
              
              <div className="bg-rose-400 text-white p-8 flex flex-col items-center justify-center text-center">
                <div className="w-14 h-14 mb-4 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Sur mesure</h3>
              </div>
              
              <div className="bg-rose-400 text-white p-8 flex flex-col items-center justify-center text-center">
                <div className="w-14 h-14 mb-4 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">International</h3>
              </div>
            </div>
          </div>
          
          {/* Colonne de droite: Texte de présentation */}
          <div className="bg-orange-500 text-white p-8 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4">Profitez de votre voyage</h3>
            <p className="mb-6">On s'occupe de négocier pour vous les meilleurs offres de location voiture et réservation d'Hôtels</p>
            <a 
              href="mailto:contact@elynortours.com" 
              className="border-2 border-white text-white font-bold py-2 px-6 inline-block w-fit text-center hover:bg-white hover:text-orange-500 transition-colors"
            >
              PRENDRE CONTACT
            </a>
          </div>
        </div>
      </div>

      {/* Section CTA finale */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-rose-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à commencer votre voyage ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous dès maintenant pour bénéficier de nos meilleurs tarifs et 
            d'un service personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:+33182836729"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-orange-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="mr-2" size={20} />
              +33 1 82 83 67 29
            </a>
            <a 
              href="https://wa.me/972584140489"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
            >
              WhatsApp
            </a>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-500 transition-colors"
            >
              Formulaire de contact
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}