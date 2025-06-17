import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/common/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Mentions Légales | Elynor Tours',
  description: 'Mentions légales et informations juridiques d\'Elynor Tours. Découvrez nos conditions d\'utilisation, politique de confidentialité et informations sur l\'hébergement du site.',
  alternates: {
    canonical: 'https://elynortours.com/mentions-legales'
  },
  openGraph: {
    title: 'Mentions Légales | Elynor Tours',
    description: 'Mentions légales et informations juridiques d\'Elynor Tours',
    url: 'https://elynortours.com/mentions-legales',
    siteName: 'Elynor Tours',
    locale: 'fr_FR',
    type: 'website',
  }
}

const breadcrumbs = [
  { name: 'Accueil', href: '/' },
  { name: 'Mentions Légales', href: '/mentions-legales' }
]

export default function MentionsLegales() {
  return (
    <main>
      <Breadcrumbs items={breadcrumbs} />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Mentions Légales</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Éditeur du site</h2>
        <p className="text-gray-600 mb-4">
          Elynor Tours<br />
          Adresse : [Votre adresse]<br />
          Téléphone : [Votre numéro]<br />
          Email : contact@elynortours.com
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Hébergement</h2>
        <p className="text-gray-600 mb-4">
          Ce site est hébergé par Vercel Inc.<br />
          440 N Barranca Ave #4133<br />
          Covina, CA 91723<br />
          États-Unis
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Protection des données personnelles</h2>
        <p className="text-gray-600 mb-4">
          Conformément à la loi Informatique et Libertés du 6 janvier 1978, vous disposez d&apos;un droit d&apos;accès,
          de rectification et de suppression des données vous concernant. Vous pouvez exercer ce droit en nous
          contactant par email à contact@elynortours.com
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Propriété intellectuelle</h2>
        <p className="text-gray-600 mb-4">
          L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur
          et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les
          documents téléchargeables et les représentations iconographiques et photographiques.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Cookies</h2>
        <p className="text-gray-600 mb-4">
          Ce site utilise des cookies pour améliorer l&apos;expérience utilisateur. En continuant à naviguer sur
          ce site, vous acceptez leur utilisation. Les cookies sont utilisés pour la mesure d&apos;audience et
          pour faciliter votre navigation.
        </p>
      </section>
    </div>
    </main>
  )
}