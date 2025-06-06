'use client'

import { ReactNode } from 'react'

interface TelAvivLayoutProps {
  children: ReactNode
}

export default function TelAvivLayout({ children }: TelAvivLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb navigation pour le SEO et UX */}
      <nav className="bg-gray-50 py-3 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <a href="/" className="hover:text-orange-500 transition-colors">
                Accueil
              </a>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <a href="/location-voiture" className="hover:text-orange-500 transition-colors">
                Location de voiture
              </a>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">Tel Aviv</li>
          </ol>
        </div>
      </nav>

      {/* Contenu principal */}
      <main className="relative">
        {children}
      </main>

      {/* Navigation entre villes */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-semibold text-center mb-8 text-gray-800">
            Location de voiture dans d'autres villes d'Israël
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a 
              href="/location-voiture/jerusalem"
              className="group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 group-hover:text-orange-500">
                    Jérusalem
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Ville sainte et capitale
                  </p>
                </div>
                <svg 
                  className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transform group-hover:translate-x-1 transition-all" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
            
            <a 
              href="/location-voiture/aeroport-ben-gourion"
              className="group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 group-hover:text-orange-500">
                    Aéroport Ben Gourion
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Dès votre arrivée
                  </p>
                </div>
                <svg 
                  className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transform group-hover:translate-x-1 transition-all" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
            
            <a 
              href="/location-voiture"
              className="group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 group-hover:text-orange-500">
                    Toutes les villes
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Voir toutes nos agences
                  </p>
                </div>
                <svg 
                  className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transform group-hover:translate-x-1 transition-all" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Section contact rapide */}
      <section className="py-8 bg-orange-50 border-t border-orange-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Besoin d'aide pour votre réservation à Tel Aviv ?
              </h3>
              <p className="text-gray-600">
                Notre équipe francophone est disponible pour vous conseiller
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="tel:+33182836729"
                className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                France: 01 82 83 67 29
              </a>
              
              <a 
                href="https://wa.me/972584140489"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}