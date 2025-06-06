import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function AirportCarRentalLayout({ children }: LayoutProps) {
  return (
    <div>
      {children}
    </div>
  );
}