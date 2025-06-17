import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/common/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente | Elynor Tours',
  description: 'Conditions générales de vente d\'Elynor Tours. Consultez nos conditions de réservation de voitures et d\'hôtels en Israël.',
  alternates: {
    canonical: 'https://elynortours.com/cgv'
  },
  openGraph: {
    title: 'Conditions Générales de Vente | Elynor Tours',
    description: 'Conditions générales de vente d\'Elynor Tours',
    url: 'https://elynortours.com/cgv',
    siteName: 'Elynor Tours',
    locale: 'fr_FR',
    type: 'website',
  }
}

const breadcrumbs = [
  { name: 'Accueil', href: '/' },
  { name: 'Conditions Générales de Vente', href: '/cgv' }
]

export default function CGV() {
  return (
    <main>
      <Breadcrumbs items={breadcrumbs} />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Conditions Générales de Vente</h1>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Article 1 - Objet et champ d'application</h2>
          <p className="text-gray-600 mb-4">
            Les présentes conditions générales de vente s'appliquent à toutes les prestations de services
            conclues par Elynor Tours auprès de ses clients, concernant la location de véhicules et
            la réservation d'hôtels en Israël.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Article 2 - Prix et paiement</h2>
          <p className="text-gray-600 mb-4">
            Les prix sont indiqués en euros, toutes taxes comprises. Le paiement s'effectue :
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
            <li>Par carte bancaire (Visa, Mastercard)</li>
            <li>30% d'acompte à la réservation</li>
            <li>Solde à payer 30 jours avant le début de la prestation</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Article 3 - Réservations et annulations</h2>
          <p className="text-gray-600 mb-4">Conditions d'annulation :</p>
          <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
            <li>Plus de 30 jours avant le début : remboursement total moins 50€ de frais</li>
            <li>Entre 30 et 15 jours : 50% du montant total retenu</li>
            <li>Moins de 15 jours : aucun remboursement</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Article 4 - Location de véhicules</h2>
          <p className="text-gray-600 mb-4">
            Pour toute location de véhicule :
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
            <li>Permis de conduire valide requis</li>
            <li>Âge minimum : 21 ans</li>
            <li>Carte de crédit internationale obligatoire</li>
            <li>Assurance incluse selon conditions</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Article 5 - Réservation d'hôtels</h2>
          <p className="text-gray-600 mb-4">
            Les réservations d'hôtels sont soumises à :
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
            <li>Disponibilité au moment de la confirmation</li>
            <li>Conditions spécifiques de chaque établissement</li>
            <li>Horaires de check-in/check-out selon l'hôtel</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Article 6 - Responsabilité</h2>
          <p className="text-gray-600 mb-4">
            Elynor Tours agit en qualité d'intermédiaire entre les clients et les prestataires de services.
            Nous ne pouvons être tenus responsables des cas de force majeure, des faits de tiers étrangers
            à la fourniture des prestations ou de la mauvaise exécution imputable au client.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Article 7 - Réclamations</h2>
          <p className="text-gray-600 mb-4">
            Toute réclamation doit être adressée par écrit dans un délai de 30 jours après la fin des prestations à :
            <br />
            <a href="mailto:contact@elynortours.com" className="text-orange-600 hover:text-orange-700">
              contact@elynortours.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Article 8 - Droit applicable</h2>
          <p className="text-gray-600 mb-4">
            Les présentes conditions générales de vente sont soumises au droit français. Tout litige
            relatif à leur interprétation et/ou à leur exécution relève des tribunaux français.
          </p>
        </section>
      </div>
    </main>
  )
}