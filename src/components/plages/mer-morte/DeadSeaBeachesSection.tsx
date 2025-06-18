'use client'

import React, { useState } from 'react'
import { Search, Filter, SlidersHorizontal, X } from 'lucide-react'
import DeadSeaBeachCard from './DeadSeaBeachCard'
import { deadSeaBeaches } from '@/data/deadSeaBeaches'
import { DeadSeaBeach, BeachType, BeachFacility } from '@/types/deadSeaBeach'
import { filterBeaches, getAllFacilities } from '@/utils/beachUtils'

const DeadSeaBeachesSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [typeFilter, setTypeFilter] = useState<BeachType | 'ALL'>('ALL')
  const [facilityFilter, setFacilityFilter] = useState<BeachFacility | 'ALL'>('ALL')
  const [wheelchairFilter, setWheelchairFilter] = useState(false)
  const [showFilters, setShowFilters] = useState(false)

  // Obtenir toutes les installations uniques
  const allFacilities = ['ALL', ...getAllFacilities(deadSeaBeaches)]

  const filteredBeaches = filterBeaches(deadSeaBeaches, {
    searchTerm,
    typeFilter,
    facilityFilter,
    wheelchairFilter
  })

  const resetFilters = () => {
    setSearchTerm('')
    setTypeFilter('ALL')
    setFacilityFilter('ALL')
    setWheelchairFilter(false)
  }

  return (
    <section id="dead-sea-beaches" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* En-tête de section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Les 10 Plus Belles Plages de la Mer Morte
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Découvrez notre sélection des plus belles plages de la Mer Morte, chacune offrant une expérience unique 
              et des installations de qualité pour profiter pleinement des propriétés thérapeutiques de ces eaux exceptionnelles.
            </p>
          </div>

          {/* Barre de recherche */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher une plage..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Bouton filtres */}
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
            >
              <SlidersHorizontal size={20} className="mr-2" />
              Filtres avancés
              {showFilters && <X size={16} className="ml-2" />}
            </button>
          </div>

          {/* Panel de filtres */}
          {showFilters && (
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Filtre par type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type de plage</label>
                  <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value as BeachType | 'ALL')}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="ALL">Toutes</option>
                    <option value={BeachType.PUBLIC}>Publiques</option>
                    <option value={BeachType.PRIVATE}>Privées</option>
                  </select>
                </div>

                {/* Filtre par installation */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Installations</label>
                  <select
                    value={facilityFilter}
                    onChange={(e) => setFacilityFilter(e.target.value as BeachFacility | 'ALL')}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                  >
                    {allFacilities.map(facility => (
                      <option key={facility} value={facility}>
                        {facility === 'ALL' ? 'Toutes' : facility}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Filtre accessibilité */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Accessibilité</label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={wheelchairFilter}
                      onChange={(e) => setWheelchairFilter(e.target.checked)}
                      className="mr-2 text-teal-500 focus:ring-teal-500"
                    />
                    <span className="text-sm text-gray-700">Accès handicapés</span>
                  </label>
                </div>

                {/* Bouton reset */}
                <div className="flex items-end">
                  <button
                    onClick={resetFilters}
                    className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    Réinitialiser
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Compteur de résultats */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              {filteredBeaches.length} {filteredBeaches.length > 1 ? 'plages trouvées' : 'plage trouvée'}
            </p>
          </div>

          {/* Grille des plages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBeaches.length > 0 ? (
              filteredBeaches.map((beach) => (
                <DeadSeaBeachCard key={beach.id} beach={beach} />
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <div className="max-w-md mx-auto">
                  <Filter className="text-gray-300 mx-auto mb-4" size={48} />
                  <p className="text-gray-500 text-lg mb-4">Aucune plage ne correspond à vos critères</p>
                  <button
                    onClick={resetFilters}
                    className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
                  >
                    Réinitialiser les filtres
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeadSeaBeachesSection