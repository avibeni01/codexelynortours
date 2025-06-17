import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/common/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Elynor Tours',
  description: 'Politique de confidentialité d\'Elynor Tours. Découvrez comment nous protégeons vos données personnelles et respectons votre vie privée.',
  alternates: {
    canonical: 'https://elynortours.com/politique-confidentialite'
  },
  openGraph: {
    title: 'Politique de Confidentialité | Elynor Tours',
    description: 'Politique de confidentialité d\'Elynor Tours',
    url: 'https://elynortours.com/politique-confidentialite',
    siteName: 'Elynor Tours',
    locale: 'fr_FR',
    type: 'website',
  }
}

const breadcrumbs = [
  { name: 'Accueil', href: '/' },
  { name: 'Politique de Confidentialité', href: '/politique-confidentialite' }
]

export default function PolitiqueConfidentialite() {
  return (
    <main>
      <Breadcrumbs items={breadcrumbs} />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Politique de Confidentialité</h1>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Collecte des données personnelles</h2>
          <p className="text-gray-600 mb-4">
            Nous collectons les informations que vous nous fournissez directement, notamment :
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone</li>
            <li>Informations de paiement (via nos prestataires sécurisés)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Utilisation des données</h2>
          <p className="text-gray-600 mb-4">
            Les données collectées sont utilisées pour :
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
            <li>Traiter vos réservations de voiture et d'hôtel</li>
            <li>Vous contacter concernant vos réservations</li>
            <li>Améliorer nos services</li>
            <li>Personnaliser votre expérience utilisateur</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Protection des données</h2>
          <p className="text-gray-600 mb-4">
            Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre tout accès, modification, divulgation ou destruction non autorisée.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Cookies</h2>
          <p className="text-gray-600 mb-4">
            Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez configurer votre navigateur pour refuser tous les cookies ou pour être informé quand un cookie est envoyé.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Vos droits</h2>
          <p className="text-gray-600 mb-4">
            Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
            <li>Droit d'accès</li>
            <li>Droit de rectification</li>
            <li>Droit à l'effacement</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité des données</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact</h2>
          <p className="text-gray-600 mb-4">
            Pour toute question concernant notre politique de confidentialité ou pour exercer vos droits, contactez-nous à :
            <br />
            <a href="mailto:contact@elynortours.com" className="text-orange-600 hover:text-orange-700">
              contact@elynortours.com
            </a>
          </p>
        </section>
      </div>
    </main>
  )
}