'use client';

import React, { useState } from 'react';
import { MediterraneanReligiousBeach } from '@/types/mediterraneanBeach';
import Image from 'next/image';

interface MediterraneanReligiousBeachCardProps {
  beach: MediterraneanReligiousBeach;
}

const MediterraneanReligiousBeachCard: React.FC<MediterraneanReligiousBeachCardProps> = ({ beach }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % beach.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? beach.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative h-64 w-full">
        <Image
          src={beach.images[currentImageIndex]}
          alt={beach.name}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-opacity duration-500"
        />
        {beach.images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
              onClick={prevImage}
              className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
            >
              &#8249;
            </button>
            <button
              onClick={nextImage}
              className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
            >
              &#8250;
            </button>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          {beach.name}
          <span className="block text-sm text-gray-600 mt-1">{beach.hebrewName}</span>
        </h3>

        <div className="mb-4">
          <p className="text-gray-600">{beach.description}</p>
        </div>

        {/* Separation Schedule */}
        <div className="mb-4 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold mb-2 text-blue-800">Horaires de séparation :</h4>
          <div className="space-y-2">
            <p><span className="font-medium">Hommes:</span> {beach.separationSchedule.men}</p>
            <p><span className="font-medium">Femmes:</span> {beach.separationSchedule.women}</p>
            <p className="text-sm text-gray-600 italic">{beach.separationSchedule.notes}</p>
          </div>
        </div>

        {/* Special Facilities */}
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Installations spéciales :</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            {beach.specialFacilities.map((facility, index) => (
              <li key={index}>{facility}</li>
            ))}
          </ul>
        </div>

        {/* Dress Code */}
        <div className="mb-4 p-4 bg-amber-50 rounded-lg">
          <h4 className="font-semibold mb-2 text-amber-800">Code vestimentaire :</h4>
          <p className="text-gray-700">{beach.dressCode}</p>
        </div>

        {/* Special Rules */}
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Règles spéciales :</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            {beach.specialRules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>

        {/* Location & Access */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-gray-700">
            <strong>Emplacement:</strong> {beach.location.address}
          </p>
          <p className="text-gray-700">
            <strong>Accès:</strong> {beach.accessibility.publicTransport}
          </p>
          <p className="text-gray-700">
            <strong>Parking:</strong> {beach.accessibility.parking}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MediterraneanReligiousBeachCard;