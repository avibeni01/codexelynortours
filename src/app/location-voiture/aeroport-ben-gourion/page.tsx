import { Metadata } from 'next';
import AirportCarRental from '@/components/plages/AirportCarRental';

export const metadata: Metadata = {
  title: 'Location de Voiture à l\'Aéroport Ben Gourion Tel Aviv | Elynor Tours',
  description: 'Guide complet des loueurs de voiture à l\'aéroport Ben Gourion. Comparez les agences, consultez notre carte interactive et réservez au meilleur prix avec Elynor Tours.',
  openGraph: {
    title: 'Location de Voiture à l\'Aéroport Ben Gourion Tel Aviv | Elynor Tours',
    description: 'Guide complet des loueurs de voiture à l\'aéroport Ben Gourion. Comparez les agences, consultez notre carte interactive et réservez au meilleur prix avec Elynor Tours.',
    url: 'https://elynortours.com/location-voiture/aeroport-ben-gourion',
    siteName: 'Elynor Tours',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://elynortours.com/location-voiture/aeroport-ben-gourion'
  },
  keywords: [
    'location voiture aéroport ben gourion',
    'location voiture tel aviv aéroport',
    'hertz tel aviv aéroport',
    'avis tel aviv aéroport',
    'budget tel aviv aéroport',
    'sixt tel aviv aéroport',
    'europcar tel aviv aéroport',
  ],
};

export default function AirportCarRentalPage() {
  return (
    <main>
      <AirportCarRental />
    </main>
  );
}