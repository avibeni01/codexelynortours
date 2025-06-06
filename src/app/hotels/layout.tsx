import type { Metadata } from 'next'
import { organizationSchema } from '@/lib/constants/structured-data'

export const metadata: Metadata = {
  title: {
    default: 'Hôtels en Israël | Elynor Tours',
    template: '%s | Hôtels en Israël | Elynor Tours'
  },
  description: 'Réservez votre hôtel en Israël au meilleur prix avec Elynor Tours. Large choix d\'établissements à Tel Aviv, Jérusalem, Mer Morte et Eilat.',
  keywords: [
    'hôtel israël',
    'réservation hôtel israël',
    'hôtel tel aviv',
    'hôtel jérusalem',
    'hôtel mer morte',
    'hôtel eilat',
    'hébergement israël',
    'elynor tours hôtels'
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://elynortours.com/hotels',
    siteName: 'Elynor Tours',
    title: 'Hôtels en Israël | Elynor Tours',
    description: 'Réservez votre hôtel en Israël au meilleur prix avec Elynor Tours.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

// Schema de base pour toute la section hôtels
const hotelsSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Elynor Tours - Hôtels en Israël",
  "description": "Service de réservation d'hôtels en Israël avec assistance francophone 24/7",
  "url": "https://elynortours.com/hotels",
  "parentOrganization": organizationSchema,
  "areaServed": {
    "@type": "Country",
    "name": "Israël"
  },
  "serviceType": "Réservation d'hôtel",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "EUR",
    "lowPrice": "50",
    "highPrice": "500",
    "offerCount": "100+"
  }
}

export default function HotelsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(hotelsSchema)
        }}
      />
      {children}
    </>
  )
}