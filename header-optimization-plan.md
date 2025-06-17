# Plan d'Optimisation du Header

## Objectif
Créer un header optimisé qui combine les meilleures fonctionnalités de Header.tsx et Header2.tsx tout en suivant les meilleures pratiques Next.js.

## Structure du Composant

### 1. Imports et Types
```typescript
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
```

### 2. Navigation Structure
```typescript
const navigation = [
  { name: 'Accueil', href: '/' },
  {
    name: 'Location de voiture',
    href: '/location-voiture',
    submenu: [
      { name: 'Tel Aviv', href: '/location-voiture/tel-aviv' },
      { name: 'Jérusalem', href: '/location-voiture/jerusalem' },
      { name: 'Aéroport Ben Gourion', href: '/location-voiture/aeroport-ben-gourion' },
    ]
  },
  // ... autres items
]
```

## Améliorations UI/UX

### 1. Styles du Header
- Background transparent qui devient blanc au scroll
- Animation fluide de transition
- Ombre légère en mode scrollé

### 2. Éléments de Navigation
- Boutons avec bordures colorées
- Indicateurs visuels clairs pour les sous-menus
- Transitions fluides sur hover
- Meilleure visibilité des éléments cliquables

### 3. Sous-menus
- Animation d'ouverture/fermeture
- Fond distinct
- Délai de fermeture
- Meilleure accessibilité

### 4. Version Mobile
- Menu compact et organisé
- Transitions fluides
- Boutons adaptés au mobile
- Navigation intuitive

## Implémentation des Styles

### 1. Classes Tailwind de Base
```typescript
// Header container
`fixed w-full z-50 transition-all duration-300 ${
  isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
}`

// Navigation items
'group relative flex items-center hover:text-orange-500 transition-colors'

// Dropdown menu
'absolute top-full left-0 w-48 bg-white shadow-lg rounded-md overflow-hidden transform transition-all duration-200 origin-top-left'
```

## Composants à Créer

1. HeaderContainer
   - Gestion du scroll
   - Layout principal

2. NavigationItem
   - Gestion des états (hover, focus)
   - Support des sous-menus

3. DropdownMenu
   - Animation
   - Gestion du focus
   - Accessibilité

4. MobileMenu
   - Transitions
   - Navigation adaptée

## Accessibilité

1. Attributs ARIA
   - aria-expanded
   - aria-controls
   - aria-label
   - aria-current

2. Navigation Clavier
   - Focus visible
   - Touches de navigation
   - Gestion des échaps

## Étapes d'Implémentation

1. Créer le nouveau fichier HeaderOptimized.tsx
2. Implémenter la structure de base
3. Ajouter les styles et animations
4. Intégrer la navigation Next.js
5. Optimiser pour mobile
6. Tester l'accessibilité
7. Remplacer l'ancien header

## Tests

1. Fonctionnels
   - Navigation
   - Sous-menus
   - Responsive
   - Scroll

2. Accessibilité
   - Lecteur d'écran
   - Navigation clavier
   - Contraste

3. Performance
   - Animations fluides
   - Chargement rapide
   - Pas de CLS