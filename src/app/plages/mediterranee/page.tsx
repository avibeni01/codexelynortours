import { Metadata } from 'next'
import MediterraneanHero from '@/components/plages/mer-mediteranne/MediterraneanHero'
import MediterraneanIntroduction from '@/components/plages/mer-mediteranne/MediterraneanIntroduction'
import MediterraneanBeachesSection from '@/components/plages/mer-mediteranne/MediterraneanBeachesSection'
import MediterraneanReligiousBeachesSection from '@/components/plages/mer-mediteranne/MediterraneanReligiousBeachesSection'
import MediterraneanSafetySection from '@/components/plages/mer-mediteranne/MediterraneanSafetySection'
import MediterraneanTransportSection from '@/components/plages/mer-mediteranne/MediterraneanTransportSection'

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
  return (
    <>
      <MediterraneanHero />
      <MediterraneanIntroduction />
      <MediterraneanBeachesSection />
      <MediterraneanReligiousBeachesSection />
      <MediterraneanSafetySection />
      <MediterraneanTransportSection />

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(beachesSchema) }}
      />
    </>
  )
}