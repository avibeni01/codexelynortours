'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'

const navigation = [
  { name: 'Accueil', href: '/' },
  {
    name: 'Location de voiture',
    href: '/location-voiture',
    submenu: [
      { name: 'Tel Aviv', href: '/location-voiture/tel-aviv' },
      { name: 'Jérusalem', href: '/location-voiture/jerusalem' },
      { name: 'Aéroport Ben Gourion', href: '/location-voiture/aeroport-ben-gourion' },
    ]
  },
  {
    name: 'Hôtels',
    href: '/hotels',
    submenu: [
      { name: 'Tel Aviv', href: '/hotels/tel-aviv' },
      { name: 'Jérusalem', href: '/hotels/jerusalem' },
      { name: 'Mer Morte', href: '/hotels/mer-morte' },
      { name: 'Eilat', href: '/hotels/eilat' },
    ]
  },
  {
    name: 'Plages',
    href: '/plages',
    submenu: [
      { name: 'Méditerranée', href: '/plages/mediterranee' },
      { name: 'Mer Morte', href: '/plages/mer-morte' },
    ]
  },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
]

export default function HeaderOptimized() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ease-out ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-orange-100 py-2' 
        : 'bg-white/10 backdrop-blur-sm py-4'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Navigation principale">
        <div className="flex h-16 justify-between items-center">
          {/* Logo avec fond subtil pour plus de lisibilité */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className={`p-2 rounded-xl transition-all duration-300 ${
                isScrolled 
                  ? 'bg-transparent' 
                  : 'bg-white/20 backdrop-blur-sm group-hover:bg-white/30'
              }`}>
                <Image
                  src="/images/NEW-LOGO2.webp"
                  alt="Elynor Tours Logo"
                  width={300}
                  height={120}
                  className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                  quality={100}
                  unoptimized
                />
              </div>
            </Link>
          </div>

          {/* Navigation Desktop avec meilleur contraste */}
          <div className="hidden md:flex md:space-x-2">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`inline-flex items-center px-4 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    isScrolled 
                      ? 'text-gray-800 hover:text-white hover:bg-orange-500 hover:shadow-lg' 
                      : 'text-white bg-white/10 backdrop-blur-sm hover:bg-orange-500 hover:text-white shadow-sm hover:shadow-lg border border-white/20 hover:border-orange-500'
                  } ${item.submenu ? 'group-hover:shadow-xl' : ''}`}
                  onClick={() => !item.submenu && setOpenSubmenu(null)}
                  aria-expanded={item.submenu ? 'true' : undefined}
                  aria-haspopup={item.submenu ? 'true' : undefined}
                >
                  <span className="relative z-10">{item.name}</span>
                  {item.submenu && (
                    <ChevronDown className="ml-2 h-4 w-4 transform transition-all duration-300 group-hover:rotate-180 group-hover:text-white" />
                  )}
                </Link>
                
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-56 rounded-xl shadow-2xl bg-white border border-orange-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left scale-95 group-hover:scale-100 overflow-hidden">
                    <div className="py-2" role="menu" aria-orientation="vertical">
                      {item.submenu.map((subItem, index) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-rose-50 hover:text-orange-600 transition-all duration-200 border-l-4 border-transparent hover:border-orange-500 transform hover:translate-x-1"
                          role="menuitem"
                          onClick={() => setOpenSubmenu(null)}
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <div className="w-2 h-2 rounded-full bg-orange-300 mr-3 transition-colors duration-200 group-hover:bg-orange-500"></div>
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bouton menu mobile amélioré */}
          <div className="flex md:hidden">
            <button
              type="button"
              className={`inline-flex items-center justify-center p-3 rounded-xl transition-all duration-300 transform hover:scale-110 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-white hover:bg-orange-500 bg-orange-50' 
                  : 'text-white bg-white/10 backdrop-blur-sm hover:bg-orange-500 border border-white/20 hover:border-orange-500'
              } shadow-lg hover:shadow-xl`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Ouvrir le menu</span>
              <div className="relative">
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6 transition-transform duration-300 rotate-180" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6 transition-transform duration-300" aria-hidden="true" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Menu mobile avec design moderne */}
        <div
          id="mobile-menu"
          className={`md:hidden transition-all duration-500 ease-out overflow-hidden ${
            mobileMenuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-orange-100 p-4 space-y-2">
            {navigation.map((item, index) => (
              <div 
                key={item.name} 
                className="relative"
                style={{ 
                  animation: mobileMenuOpen ? `slideInUp 0.3s ease-out ${index * 0.1}s both` : 'none' 
                }}
              >
                {item.submenu ? (
                  <div className="space-y-2">
                    <button
                      className="w-full flex items-center justify-between p-3 text-base font-semibold rounded-xl text-gray-800 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-rose-500 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-lg border border-gray-100 hover:border-orange-300"
                      onClick={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)}
                      aria-expanded={openSubmenu === item.name}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`ml-2 h-5 w-5 transform transition-all duration-300 ${
                          openSubmenu === item.name ? 'rotate-180 text-white' : 'text-orange-500'
                        }`}
                      />
                    </button>
                    <div
                      className={`pl-4 space-y-1 transition-all duration-300 ${
                        openSubmenu === item.name ? 'block max-h-96 opacity-100' : 'hidden max-h-0 opacity-0'
                      }`}
                    >
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center p-3 text-sm font-medium text-gray-600 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-rose-50 rounded-lg transition-all duration-200 transform hover:translate-x-2 border-l-4 border-transparent hover:border-orange-400"
                          onClick={() => setMobileMenuOpen(false)}
                          style={{ 
                            animation: openSubmenu === item.name ? `slideInLeft 0.2s ease-out ${subIndex * 0.05}s both` : 'none' 
                          }}
                        >
                          <div className="w-2 h-2 rounded-full bg-orange-300 mr-3"></div>
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center p-3 text-base font-semibold text-gray-800 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-rose-500 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-lg border border-gray-100 hover:border-orange-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-3 h-3 rounded-full bg-orange-400 mr-3"></div>
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Styles CSS pour les animations */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  )
}