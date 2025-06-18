'use client'

import React, { useState } from 'react'
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Accessibility,
  Car, 
  Bus, 
  Droplets, 
  Sparkles,
  Star,
  ExternalLink
} from 'lucide-react'
import { DeadSeaBeach, BeachType } from '@/types/deadSeaBeach'
import { getBorderColor, getTypeColor, openGoogleMaps } from '@/utils/beachUtils'

interface DeadSeaBeachCardProps {
  beach: DeadSeaBeach
}

const DeadSeaBeachCard: React.FC<DeadSeaBeachCardProps> = ({ beach }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % beach.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? beach.images.length - 1 : prevIndex - 1
    )
  }

  const handleGoogleMaps = () => {
    openGoogleMaps(beach.location.latitude, beach.location.longitude)
  }

  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-t-4 ${getBorderColor(beach.type)} beach-card`}>
      {/* Galerie d'images */}
      <div className="relative h-64 overflow-hidden group">
        <img 
          src={beach.images[currentImageIndex]} 
          alt={beach.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 beach-image"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = 'https://images.pexels.com/photos/4353813/pexels-photo-4353813.jpeg'
          }}
        />
        
        {/* Navigation des images */}
        {beach.images.length > 1 && (
          <>
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
              onClick={prevImage}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
              onClick={nextImage}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Compteur d'images */}
            <div className="absolute bottom-2 right-2 bg-black/60 text-white px-2 py-1 rounded-md text-xs">
              {currentImageIndex + 1}/{beach.images.length}
            </div>
          </>
        )}
        
        {/* Badge de type */}
        <div className={`absolute top-2 left-2 ${getTypeColor(beach.type)} text-white px-3 py-1 rounded-md text-xs font-medium`}>
          {beach.type === BeachType.PUBLIC ? 'Publique' : 'Privée'}
        </div>

        {/* Badge de salinité */}
        <div className="absolute top-2 right-2 bg-gradient-to-r from-orange-500 to-rose-500 text-white px-3 py-1 rounded-md text-xs font-medium">
          <Droplets className="inline mr-1" size={12} />
          {beach.salinity.level}
        </div>
      </div>
      
      {/* Contenu */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">{beach.name}</h3>
            <p className="text-sm text-gray-500 mb-2" lang="he" dir="rtl">{beach.hebrewName}</p>
          </div>
          
          {/* Accès handicapés */}
          {beach.accessibility.wheelchairAccess && (
            <div className="bg-green-100 p-2 rounded-full" title="Accessible aux personnes handicapées">
              <Accessibility className="text-green-600" size={16} />
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{beach.description}</p>

        {/* Informations principales */}
        <div className="space-y-3 mb-4">
          {/* Localisation */}
          <div className="flex items-start gap-3">
            <MapPin className="text-orange-500 mt-1 flex-shrink-0" size={16} />
            <div>
              <p className="text-xs text-gray-500">Localisation</p>
              <p className="text-sm text-gray-700">{beach.location.address}</p>
            </div>
          </div>

          {/* Horaires */}
          <div className="flex items-start gap-3">
            <Clock className="text-rose-500 mt-1 flex-shrink-0" size={16} />
            <div>
              <p className="text-xs text-gray-500">Horaires</p>
              <p className="text-sm text-gray-700">{beach.hours.opening} - {beach.hours.closing}</p>
              {beach.hours.notes && (
                <p className="text-xs text-gray-500 mt-1">{beach.hours.notes}</p>
              )}
            </div>
          </div>

          {/* Prix */}
          <div className="flex items-start gap-3">
            <DollarSign className="text-orange-500 mt-1 flex-shrink-0" size={16} />
            <div>
              <p className="text-xs text-gray-500">Tarifs</p>
              <p className="text-sm text-gray-700 font-medium">{beach.entranceFee}</p>
            </div>
          </div>
        </div>

        {/* Propriétés thérapeutiques */}
        <div className="bg-gradient-to-r from-orange-50 to-rose-50 rounded-lg p-4 mb-4 border border-orange-100">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="text-orange-500" size={16} />
            <h4 className="font-semibold text-gray-800 text-sm">Propriétés thérapeutiques</h4>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">{beach.salinity.properties}</p>
        </div>

        {/* Équipements principaux */}
        <div className="mb-4">
          <h4 className="font-medium text-gray-800 text-sm mb-2">Équipements principaux</h4>
          <div className="flex flex-wrap gap-1">
            {beach.facilities.slice(0, 4).map((facility, index) => (
              <span 
                key={index} 
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
              >
                {facility}
              </span>
            ))}
            {beach.facilities.length > 4 && (
              <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-xs">
                +{beach.facilities.length - 4} autres
              </span>
            )}
          </div>
        </div>

        {/* Bouton d'expansion */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center gap-2 py-2 text-orange-500 hover:text-orange-600 font-medium text-sm transition-colors"
        >
          {isExpanded ? 'Voir moins' : 'Voir plus de détails'}
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {/* Détails étendus */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-100 space-y-4 animate-fade-in">
            {/* Tous les équipements */}
            <div>
              <h4 className="font-medium text-gray-800 mb-2 text-sm">Tous les équipements</h4>
              <div className="grid grid-cols-2 gap-1">
                {beach.facilities.map((facility, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <Check className="text-orange-500" size={12} />
                    <span className="text-gray-600">{facility}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Accessibilité */}
            <div>
              <h4 className="font-medium text-gray-800 mb-2 text-sm">Accessibilité</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-sm">
                  <Car className="text-rose-500 mt-0.5" size={14} />
                  <span className="text-gray-600">{beach.accessibility.parking}</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <Bus className="text-orange-500 mt-0.5" size={14} />
                  <span className="text-gray-600">{beach.accessibility.publicTransport}</span>
                </div>
              </div>
            </div>

            {/* Meilleure période */}
            <div>
              <h4 className="font-medium text-gray-800 mb-2 text-sm">Meilleure période de visite</h4>
              <p className="text-gray-600 text-sm">{beach.bestTimeToVisit}</p>
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-2">
              <button
                onClick={handleGoogleMaps}
                className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm"
              >
                <ExternalLink size={14} />
                Voir sur la carte
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DeadSeaBeachCard