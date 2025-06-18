'use client'

import React from 'react'
import { 
  Shield, 
  AlertTriangle, 
  Eye, 
  Clock, 
  Droplets, 
  Heart, 
  ThermometerSun,
  Heart as FirstAid, // Correction: utiliser Heart au lieu de FirstAid
  Phone
} from 'lucide-react'

const DeadSeaSafetySection: React.FC = () => {
  const safetyRules = [
    {
      icon: Eye,
      title: "Évitez le contact avec les yeux",
      description: "L'eau est extrêmement salée. En cas de contact, rincez immédiatement à l'eau douce.",
      severity: "critical"
    },
    {
      icon: Clock,
      title: "Limitez la durée de baignade",
      description: "Maximum 20 minutes par session pour éviter la déshydratation et l'irritation cutanée.",
      severity: "high"
    },
    {
      icon: Droplets,
      title: "Rincez-vous après la baignade",
      description: "Utilisez les douches d'eau douce pour éliminer complètement le sel de votre peau.",
      severity: "medium"
    },
    {
      icon: Heart,
      title: "Couvrez les plaies ouvertes",
      description: "Toute coupure ou égratignure doit être protégée avant d'entrer dans l'eau.",
      severity: "high"
    }
  ]

  const healthPrecautions = [
    {
      icon: ThermometerSun,
      title: "Protection solaire renforcée",
      description: "Le sel amplifie les effets du soleil. Utilisez une crème solaire haute protection et renouvelez l'application fréquemment.",
      tips: ["SPF 50+ minimum", "Réappliquer toutes les heures", "Porter un chapeau et lunettes", "Chercher l'ombre régulièrement"]
    },
    {
      icon: Droplets,
      title: "Hydratation intensive",
      description: "La forte salinité peut causer une déshydratation rapide. Buvez beaucoup d'eau avant, pendant et après votre visite.",
      tips: ["2-3 litres d'eau par jour", "Éviter l'alcool", "Privilégier les boissons électrolytiques", "Surveiller les signes de déshydratation"]
    },
    {
      icon: Heart,
      title: "Conditions médicales",
      description: "Certaines conditions de santé nécessitent des précautions particulières ou une consultation médicale préalable.",
      tips: ["Hypertension artérielle", "Problèmes cardiaques", "Allergies cutanées", "Grossesse avancée"]
    }
  ]

  const emergencyContacts = [
    { service: "Urgences médicales", number: "101", description: "Services d'urgence nationaux" },
    { service: "Police", number: "100", description: "Police nationale" },
    { service: "Pompiers", number: "102", description: "Services d'incendie et de secours" },
    { service: "Magen David Adom", number: "101", description: "Ambulances et premiers secours" }
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-500'
      case 'high': return 'bg-orange-500'
      case 'medium': return 'bg-yellow-500'
      default: return 'bg-blue-500'
    }
  }

  const getSeverityBorder = (severity: string) => {
    switch (severity) {
      case 'critical': return 'border-red-200 bg-red-50'
      case 'high': return 'border-orange-200 bg-orange-50'
      case 'medium': return 'border-yellow-200 bg-yellow-50'
      default: return 'border-blue-200 bg-blue-50'
    }
  }

  return (
    <section id="dead-sea-safety" className="py-20 bg-gradient-to-b from-neutral-light to-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <Shield className="text-red-600" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Conseils de Sécurité Essentiels
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              La Mer Morte est un environnement unique qui nécessite des précautions particulières. 
              Suivez ces conseils pour profiter en toute sécurité de votre expérience.
            </p>
          </div>

          {/* Alerte importante */}
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-12">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="text-red-500 mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-red-800 mb-2">⚠️ ATTENTION - Règles de sécurité vitales</h3>
                <p className="text-red-700 leading-relaxed">
                  <strong>NE JAMAIS :</strong> Plonger, nager sous l'eau, éclabousser ou boire l'eau. 
                  La haute concentration en sel peut être dangereuse en cas d'ingestion ou de contact avec les muqueuses.
                </p>
              </div>
            </div>
          </div>

          {/* Règles de sécurité principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {safetyRules.map((rule, index) => {
              const IconComponent = rule.icon
              return (
                <div key={index} className={`rounded-xl p-6 border-2 ${getSeverityBorder(rule.severity)}`}>
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full ${getSeverityColor(rule.severity)} text-white flex-shrink-0`}>
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">{rule.title}</h3>
                      <p className="text-gray-700">{rule.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Précautions santé détaillées */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Précautions Santé Détaillées
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {healthPrecautions.map((precaution, index) => {
                const IconComponent = precaution.icon
                return (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-3 bg-orange-100 rounded-full">
                        <IconComponent className="text-orange-600" size={24} />
                      </div>
                      <h4 className="font-bold text-gray-800">{precaution.title}</h4>
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {precaution.description}
                    </p>
                    
                    <div className="space-y-2">
                      {precaution.tips.map((tip, tipIndex) => (
                        <div key={tipIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Guide étape par étape */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Guide Étape par Étape pour une Baignade Sûre
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">1</div>
                <h4 className="font-semibold text-gray-800 mb-2">Préparation</h4>
                <p className="text-gray-600 text-sm">Appliquez de la crème solaire, couvrez les plaies, hydratez-vous</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-rose-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">2</div>
                <h4 className="font-semibold text-gray-800 mb-2">Entrée dans l'eau</h4>
                <p className="text-gray-600 text-sm">Entrez lentement, allongez-vous doucement, laissez-vous flotter</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">3</div>
                <h4 className="font-semibold text-gray-800 mb-2">Pendant la baignade</h4>
                <p className="text-gray-600 text-sm">Restez calme, évitez les mouvements brusques, max 20 minutes</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">4</div>
                <h4 className="font-semibold text-gray-800 mb-2">Sortie et rinçage</h4>
                <p className="text-gray-600 text-sm">Douche immédiate, séchage complet, hydratation de la peau</p>
              </div>
            </div>
          </div>

          {/* Contacts d'urgence */}
          <div className="bg-red-50 rounded-xl p-8 border border-red-200">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-red-500 rounded-full">
                  <Heart className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Contacts d'Urgence</h3>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-red-200 text-center">
                  <Phone className="text-red-500 mx-auto mb-2" size={20} />
                  <h4 className="font-bold text-gray-800 mb-1">{contact.service}</h4>
                  <div className="text-2xl font-bold text-red-600 mb-1">{contact.number}</div>
                  <p className="text-gray-600 text-xs">{contact.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-red-700 text-sm">
                <strong>En cas d'urgence :</strong> Composez le 101 pour les urgences médicales ou le 100 pour la police.
                La plupart des plages ont des sauveteurs et des postes de premiers secours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeadSeaSafetySection