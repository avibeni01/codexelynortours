import { Metadata } from 'next'
import DeadSeaHero from '@/components/plages/mer-morte/DeadSeaHero'
import DeadSeaIntroduction from '@/components/plages/mer-morte/DeadSeaIntroduction'
import DeadSeaBeachesSection from '@/components/plages/mer-morte/DeadSeaBeachesSection'
import DeadSeaReligiousSection from '@/components/plages/mer-morte/DeadSeaReligiousSection'
import DeadSeaSafetySection from '@/components/plages/mer-morte/DeadSeaSafetySection'
import DeadSeaTransportSection from '@/components/plages/mer-morte/DeadSeaTransportSection'

export const metadata: Metadata = {
  title: 'Les 10 Plus Belles Plages de la Mer Morte - Guide Complet',
  description: 'Guide complet des plus belles plages de la Mer Morte, avec informations détaillées sur chaque site, conseils pratiques et options de transport.',
  keywords: ['plages Mer Morte', 'Ein Bokek', 'propriétés thérapeutiques', 'sel Mer Morte', 'flottaison Mer Morte', 'boue Mer Morte', 'spa Israël'],
  alternates: {
    canonical: 'https://elynortours.com/plages/mer-morte',
    languages: {
      'fr': 'https://elynortours.com/plages/mer-morte',
      'en': 'https://elynortours.com/en/beaches/dead-sea',
      'he': 'https://elynortours.com/he/beaches/dead-sea',
    },
  },
  openGraph: {
    title: 'Les 10 Plus Belles Plages de la Mer Morte - Guide Complet | Elynor Tours',
    description: 'Découvrez les plus belles plages de la Mer Morte avec leurs propriétés thérapeutiques uniques. Guide pratique avec photos, prix et conseils.',
    url: 'https://elynortours.com/plages/mer-morte',
    siteName: 'Elynor Tours',
    images: [
      {
        url: 'https://images.pexels.com/photos/4353813/pexels-photo-4353813.jpeg',
        width: 1200,
        height: 630,
        alt: 'Plages de la Mer Morte - Elynor Tours',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Les 10 Plus Belles Plages de la Mer Morte - Guide Complet',
    description: 'Guide complet des plus belles plages de la Mer Morte avec propriétés thérapeutiques et conseils pratiques.',
    images: ['https://images.pexels.com/photos/4353813/pexels-photo-4353813.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

// Schéma de données structurées optimisé
const deadSeaSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "Plages de la Mer Morte en Israël",
  "description": "Les 10 plus belles plages de la Mer Morte, le point le plus bas de la Terre, connues pour leurs propriétés thérapeutiques exceptionnelles.",
  "url": "https://elynortours.com/plages/mer-morte",
  "image": [
    "https://images.pexels.com/photos/4353813/pexels-photo-4353813.jpeg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/3c/20170701-134900-largejpg.jpg"
  ],
  "touristType": ["Beach", "Nature", "Spa", "Wellness"],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "31.5497",
    "longitude": "35.4663",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IL",
      "addressRegion": "Dead Sea Region"
    }
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "07:00",
    "closes": "19:00"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services Plages Mer Morte",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Transport vers la Mer Morte",
          "provider": {
            "@type": "Organization",
            "name": "Elynor Tours"
          }
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Location de voiture",
          "provider": {
            "@type": "Organization",
            "name": "Elynor Tours"
          }
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "247"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Marie Dubois"
      },
      "reviewBody": "Expérience incroyable dans les plages de la Mer Morte. Guide très complet et conseils pratiques excellents."
    }
  ]
}

export default function DeadSeaBeachesPage() {
  return (
    <>
      {/* Hero Section avec padding-top pour compenser le header fixe */}
      <div className="pt-16">
        <DeadSeaHero />
      </div>
      
      {/* Contenu principal */}
      <DeadSeaIntroduction />
      <DeadSeaBeachesSection />
      <DeadSeaReligiousSection />
      <DeadSeaSafetySection />
      <DeadSeaTransportSection />

      {/* Schema.org JSON-LD optimisé */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(deadSeaSchema) }}
      />
    </>
  )
}