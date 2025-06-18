'use client';

import React from 'react';
import { mediterraneanReligiousBeaches } from '@/data/mediterraneanBeaches';
import MediterraneanReligiousBeachCard from './MediterraneanReligiousBeachCard';

const MediterraneanReligiousBeachesSection = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Plages Séparées pour Visiteurs Religieux
        </h2>

        <div className="prose prose-lg max-w-4xl mx-auto mb-12">
          <p className="text-center text-gray-600">
            Le littoral méditerranéen d'Israël propose également des plages avec séparation hommes-femmes, 
            permettant aux visiteurs observant des pratiques religieuses strictes de profiter des plaisirs 
            de la mer tout en respectant leurs traditions. Ces plages offrent des horaires distincts pour 
            les hommes et les femmes, des installations adaptées et un environnement respectueux des codes 
            vestimentaires et des pratiques religieuses.
          </p>
        </div>

        {/* Important Information Box */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-12 mx-auto max-w-4xl">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Informations importantes
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="font-medium">Horaires séparés :</span>
              Les plages fonctionnent avec des créneaux horaires distincts pour les hommes et les femmes
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium">Code vestimentaire :</span>
              Une tenue modeste est requise, même pendant la baignade
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium">Installations :</span>
              Vestiaires privés, zones séparées et personnel adapté selon les horaires
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium">Shabbat :</span>
              Les plages sont généralement fermées pendant Shabbat et les fêtes religieuses
            </li>
          </ul>
        </div>

        {/* Religious Beaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mediterraneanReligiousBeaches.map((beach) => (
            <MediterraneanReligiousBeachCard key={beach.id} beach={beach} />
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-12 max-w-4xl mx-auto">
          <p className="text-gray-600 text-center">
            Pour plus d'informations sur les horaires exacts et les règles spécifiques, 
            nous vous recommandons de contacter directement les plages ou de consulter 
            les panneaux d'affichage sur place.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MediterraneanReligiousBeachesSection;