import { MediterraneanBeach, MediterraneanReligiousBeach, BeachType, BeachFacility, WaveSize, TransportOption, TransportationCity, SafetyTip, PracticalTip } from '../types/mediterraneanBeach';

export const mediterraneanBeaches: MediterraneanBeach[] = [
  {
    id: 1,
    name: "Gordon Beach",
    hebrewName: "חוף גורדון",
    description: "L'une des plages les plus populaires de Tel Aviv, située en plein cœur de la ville. Gordon Beach offre un cadre animé avec de nombreuses installations et activités. C'est un endroit privilégié pour les locaux et les touristes, où l'ambiance de Tel Aviv se ressent pleinement.",
    images: [
      "/images/beaches/gordon-beach-1-new.jpg",
      "/images/beaches/gordon-beach-2-new.jpg",
      "/images/beaches/gordon-beach-3-new.jpg"
    ],
    type: [BeachType.PUBLIC, BeachType.CITY],
    location: {
      city: "Tel Aviv",
      latitude: 32.0835,
      longitude: 34.7672,
      address: "Herbert Samuel Promenade, Tel Aviv"
    },
    hours: {
      opening: "07:00",
      closing: "19:00",
      notes: "Surveillance de mai à octobre. Certaines installations comme les bars peuvent rester ouvertes plus tard."
    },
    entranceFee: "Gratuit",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.TOILETS,
      BeachFacility.LIFEGUARD,
      BeachFacility.RESTAURANT,
      BeachFacility.VOLLEYBALL,
      BeachFacility.CHAIRS
    ],
    waterQuality: {
      rating: 4,
      description: "Eau généralement propre et claire, avec un contrôle régulier de la qualité."
    },
    sand: {
      type: "Sable fin",
      color: "Doré",
      quality: "Bien entretenu et nettoyé régulièrement"
    },
    waves: {
      size: WaveSize.MEDIUM,
      surfingConditions: "Bonnes conditions pour les débutants et surfeurs intermédiaires, particulièrement le matin."
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Parking public payant à proximité",
      publicTransport: "Nombreuses lignes de bus et station de vélos en libre-service"
    },
    bestTimeToVisit: "Tôt le matin pour éviter la foule ou en semaine hors saison estivale",
    crowdLevel: {
      lowSeason: "Modéré",
      highSeason: "Très fréquenté"
    },
    nearbyAttractions: [
      "Promenade de Tel Aviv",
      "Port de Tel Aviv",
      "Marché Carmel"
    ]
  },
  {
    id: 2,
    name: "Frishman Beach",
    hebrewName: "חוף פרישמן",
    description: "Plage urbaine animée au cœur de Tel Aviv, populaire auprès des locaux et des touristes.",
    images: [
      "/images/beaches/frishman-beach-1-new.jpg",
      "/images/beaches/frishman-beach-2-new.jpg"
    ],
    type: [BeachType.CITY, BeachType.SPORTS],
    location: {
      city: "Tel Aviv",
      latitude: 32.0803,
      longitude: 34.7677,
      address: "Frishman Beach, Tel Aviv-Yafo"
    },
    hours: {
      opening: "07:00",
      closing: "19:00",
      notes: "Surveillance toute l'année"
    },
    entranceFee: "Gratuit",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.TOILETS,
      BeachFacility.LIFEGUARD,
      BeachFacility.KIOSK
    ],
    waterQuality: {
      rating: 5,
      description: "Excellente qualité de l'eau"
    },
    sand: {
      type: "Fin",
      color: "Doré clair",
      quality: "Très bon"
    },
    waves: {
      size: WaveSize.MEDIUM,
      surfingConditions: "Idéal pour le surf débutant et intermédiaire"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Parking souterrain à proximité",
      publicTransport: "Bus 4, 5, 55, 100"
    },
    bestTimeToVisit: "En semaine, tôt le matin",
    crowdLevel: {
      lowSeason: "Modéré",
      highSeason: "Très fréquenté"
    },
    nearbyAttractions: [
      "Hôtels de luxe",
      "Restaurants de plage",
      "Promenade animée",
      "Boutiques"
    ]
  },
  {
    id: 3,
    name: "Jerusalem Beach",
    hebrewName: "חוף ירושלים",
    description: "Cette plage centrale offre une atmosphère décontractée et est très populaire auprès des jeunes locaux. Située entre les plages de Geula et de Frishman, Jerusalem Beach est connue pour son ambiance conviviale et sa facilité d'accès depuis le centre-ville.",
    images: [
      "/images/beaches/jerusalem-beach-1-new.jpg",
      "/images/beaches/jerusalem-beach-2-new.jpg",
      "/images/beaches/jerusalem-beach-3-new.jpg"
    ],
    type: [BeachType.PUBLIC, BeachType.CITY],
    location: {
      city: "Tel Aviv",
      latitude: 32.0745,
      longitude: 34.7663,
      address: "Jerusalem Beach, Herbert Samuel Promenade, Tel Aviv"
    },
    hours: {
      opening: "07:00",
      closing: "19:00",
      notes: "Surveillance de mai à octobre"
    },
    entranceFee: "Gratuit",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANTS,
      BeachFacility.LIFEGUARD,
      BeachFacility.FIRST_AID,
      BeachFacility.WIFI,
      BeachFacility.PARASOLS,
      BeachFacility.CHAIRS
    ],
    waterQuality: {
      rating: 4,
      description: "Généralement claire avec de bonnes conditions de baignade"
    },
    sand: {
      type: "Sable fin",
      color: "Doré",
      quality: "Bien entretenu"
    },
    waves: {
      size: WaveSize.SMALL,
      surfingConditions: "Débutant-intermédiaire, variable selon les conditions météorologiques"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Parkings payants à proximité",
      publicTransport: "Nombreuses lignes de bus et station de vélos en libre-service"
    },
    bestTimeToVisit: "Matinée ou fin d'après-midi en semaine pour plus de tranquillité",
    crowdLevel: {
      lowSeason: "Modéré",
      highSeason: "Très fréquenté"
    },
    nearbyAttractions: [
      "Carmel Market",
      "Neve Tzedek",
      "Vieille ville de Jaffa"
    ]
  },
  {
    id: 4,
    name: "Herzliya Beach",
    hebrewName: "חוף הרצליה",
    description: "Les plages de Herzliya offrent un cadre plus paisible que celles de Tel Aviv tout en restant facilement accessibles. Avec leur sable fin et leurs eaux claires, elles sont particulièrement appréciées des familles et de ceux qui recherchent une atmosphère plus relaxante.",
    images: [
      "/images/beaches/herzliya-beach-1-new.jpg",
      "/images/beaches/herzliya-beach-2-new.jpg",
      "/images/beaches/herzliya-beach-3-new.jpg"
    ],
    type: [BeachType.PUBLIC, BeachType.FAMILY],
    location: {
      city: "Herzliya",
      latitude: 32.1739,
      longitude: 34.7961,
      address: "Herzliya Beach, Herzliya"
    },
    hours: {
      opening: "07:00",
      closing: "19:00",
      notes: "Surveillance d'avril à octobre. Certaines zones restent accessibles toute l'année."
    },
    entranceFee: "Gratuit",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANTS,
      BeachFacility.LIFEGUARD,
      BeachFacility.FIRST_AID,
      BeachFacility.WIFI,
      BeachFacility.WATER_SPORTS,
      BeachFacility.PARASOLS,
      BeachFacility.BEACH_CHAIRS,
      BeachFacility.MARINA
    ],
    waterQuality: {
      rating: 5,
      description: "Excellente qualité d'eau, claire et propre"
    },
    sand: {
      type: "Sable fin",
      color: "Doré clair",
      quality: "Très bien entretenu avec nettoyage régulier"
    },
    waves: {
      size: WaveSize.MEDIUM,
      surfingConditions: "Bonnes conditions pour tous niveaux, écoles de surf disponibles"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Grand parking gratuit et zones payantes",
      publicTransport: "Bus depuis Tel Aviv et gare ferroviaire à proximité"
    },
    bestTimeToVisit: "Fin de printemps et début d'automne pour des conditions optimales et moins de monde",
    crowdLevel: {
      lowSeason: "Peu fréquenté",
      highSeason: "Modérément fréquenté"
    },
    nearbyAttractions: [
      "Marina de Herzliya",
      "Centre commercial Arena",
      "Musée d'Art Contemporain de Herzliya"
    ]
  },
  {
    id: 5,
    name: "Bograshov Beach",
    hebrewName: "חוף בוגרשוב",
    description: "L'une des plages les plus centrales et populaires de Tel Aviv, réputée pour son atmosphère jeune et animée. C'est l'endroit idéal pour observer la culture de plage locale et profiter de la vie urbaine de Tel Aviv tout en se relaxant en bord de mer.",
    images: [
      "/images/beaches/bograshov-beach-1-new.jpg",
      "/images/beaches/bograshov-beach-2-new.jpg",
      "/images/beaches/bograshov-beach-3-new.jpg"
    ],
    type: [BeachType.PUBLIC, BeachType.CITY],
    location: {
      city: "Tel Aviv",
      latitude: 32.0782,
      longitude: 34.7669,
      address: "Bograshov Beach, Herbert Samuel Promenade, Tel Aviv"
    },
    hours: {
      opening: "07:00",
      closing: "19:00",
      notes: "Surveillance de mai à octobre"
    },
    entranceFee: "Gratuit",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANTS,
      BeachFacility.LIFEGUARD,
      BeachFacility.FIRST_AID,
      BeachFacility.WIFI,
      BeachFacility.BAR,
      BeachFacility.BEACH_VOLLEYBALL,
      BeachFacility.PARASOLS,
      BeachFacility.BEACH_CHAIRS
    ],
    waterQuality: {
      rating: 4,
      description: "Bonne qualité d'eau mais peut être affectée par l'affluence en haute saison"
    },
    sand: {
      type: "Sable fin",
      color: "Doré",
      quality: "Bien entretenu malgré la forte fréquentation"
    },
    waves: {
      size: WaveSize.SMALL,
      surfingConditions: "Débutants le matin, moins adapté l'après-midi en raison de la foule"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Difficile, parking payant à proximité souvent plein",
      publicTransport: "Excellent réseau de bus et stations de vélos"
    },
    bestTimeToVisit: "Tôt le matin en semaine pour éviter la foule",
    crowdLevel: {
      lowSeason: "Modéré",
      highSeason: "Très fréquenté"
    },
    nearbyAttractions: [
      "Rue Dizengoff",
      "Rue Sheinkin",
      "Centre-ville de Tel Aviv"
    ]
  },
  {
    id: 6,
    name: "Palmachim Beach",
    hebrewName: "חוף פלמחים",
    description: "Cette magnifique plage naturelle est située dans une réserve et offre un environnement préservé, loin de l'agitation urbaine. Avec ses falaises impressionnantes et son atmosphère sauvage, Palmachim est l'endroit idéal pour ceux qui recherchent une connexion avec la nature.",
    images: [
      "/images/beaches/palmachim-beach-1-new.jpg",
      "/images/beaches/palmachim-beach-2-new.jpg",
      "/images/beaches/palmachim-beach-3-new.jpg"
    ],
    type: [BeachType.PUBLIC, BeachType.NATURE],
    location: {
      city: "Rishon LeZion",
      latitude: 31.9283,
      longitude: 34.6998,
      address: "Palmachim Beach, Route 4311, près de Rishon LeZion"
    },
    hours: {
      opening: "07:00",
      closing: "19:00",
      notes: "La réserve naturelle peut avoir des horaires spécifiques. Surveillance saisonnière."
    },
    entranceFee: "Gratuit pour la plage, frais d'entrée possibles pour la réserve naturelle",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.LIFEGUARD,
      BeachFacility.FIRST_AID
    ],
    waterQuality: {
      rating: 5,
      description: "Excellente qualité d'eau grâce à son statut de réserve protégée"
    },
    sand: {
      type: "Sable fin mélangé à des zones rocheuses",
      color: "Doré clair",
      quality: "Naturel et préservé"
    },
    waves: {
      size: WaveSize.MEDIUM,
      surfingConditions: "Variables, parfois excellentes pour les surfeurs expérimentés"
    },
    accessibility: {
      wheelchairAccess: false,
      parking: "Parking non aménagé disponible",
      publicTransport: "Limité, voiture recommandée"
    },
    bestTimeToVisit: "En semaine et hors saison estivale pour plus de tranquillité",
    crowdLevel: {
      lowSeason: "Peu fréquenté",
      highSeason: "Modérément fréquenté"
    },
    nearbyAttractions: [
      "Réserve naturelle de Palmachim",
      "Ruines archéologiques de Yavne-Yam",
      "Kibbutz Palmachim"
    ]
  },
  {
    id: 7,
    name: "Banana Beach",
    hebrewName: "חוף הבננה",
    description: "Populaire auprès des jeunes et des amateurs de sports nautiques, Banana Beach tire son nom d'un café qui s'y trouvait autrefois. C'est un lieu décontracté et convivial où l'on peut pratiquer le volleyball ou simplement profiter de l'atmosphère bohème.",
    images: [
      "/images/beaches/banana-beach-1-new.jpg",
      "/images/beaches/banana-beach-2-new.jpg",
      "/images/beaches/banana-beach-3-new.jpg"
    ],
    type: [BeachType.PUBLIC, BeachType.CITY, BeachType.SPORTS],
    location: {
      city: "Tel Aviv",
      latitude: 32.0704,
      longitude: 34.7651,
      address: "Banana Beach, Herbert Samuel Promenade, Tel Aviv"
    },
    hours: {
      opening: "07:00",
      closing: "19:00",
      notes: "Surveillance de mai à octobre"
    },
    entranceFee: "Gratuit",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANT,
      BeachFacility.LIFEGUARD,
      BeachFacility.FIRST_AID,
      BeachFacility.WIFI,
      BeachFacility.BAR,
      BeachFacility.BEACH_VOLLEYBALL,
      BeachFacility.WATER_SPORTS
    ],
    waterQuality: {
      rating: 4,
      description: "Généralement bonne qualité d'eau avec surveillance régulière"
    },
    sand: {
      type: "Sable fin",
      color: "Doré",
      quality: "Bien entretenu"
    },
    waves: {
      size: WaveSize.MEDIUM,
      surfingConditions: "Bon spot pour débutants et intermédiaires, location d'équipement disponible"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Parkings publics payants à proximité",
      publicTransport: "Bien desservi par les bus et stations de vélos"
    },
    bestTimeToVisit: "Fin d'après-midi pour profiter des couchers de soleil et de l'ambiance détendue",
    crowdLevel: {
      lowSeason: "Modéré",
      highSeason: "Très fréquenté"
    },
    nearbyAttractions: [
      "Old Jaffa",
      "Jaffa Port",
      "Jaffa Flea Market"
    ]
  },
  {
    id: 8,
    name: "Hof HaCarmel Beach",
    hebrewName: "חוף הכרמל",
    description: "Cette longue plage située à Haïfa offre une vue spectaculaire sur le mont Carmel. Moins touristique que les plages de Tel Aviv, elle permet de découvrir un autre aspect du littoral israélien dans un cadre magnifique et plus local.",
    images: [
       "/images/beaches/hof-hacarmel-1-new.jpg",
  "/images/beaches/hof-hacarmel-2-new.jpg",
  "/images/beaches/hof-hacarmel-3-new.jpg"
    ],
    type: [BeachType.PUBLIC, BeachType.FAMILY],
    location: {
      city: "Haïfa",
      latitude: 32.8306,
      longitude: 34.9553,
      address: "Hof HaCarmel Beach, Haïfa"
    },
    hours: {
      opening: "07:00",
      closing: "19:00",
      notes: "Surveillance d'avril à octobre"
    },
    entranceFee: "Gratuit",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANT,
      BeachFacility.LIFEGUARD,
      BeachFacility.FIRST_AID,
      BeachFacility.PARASOLS,
      BeachFacility.BEACH_CHAIRS,
      BeachFacility.PLAYGROUND
    ],
    waterQuality: {
      rating: 4,
      description: "Eau propre avec surveillance régulière de la qualité"
    },
    sand: {
      type: "Sable fin mélangé à du gravier par endroits",
      color: "Doré",
      quality: "Bien entretenu"
    },
    waves: {
      size: WaveSize.MEDIUM,
      surfingConditions: "Variables selon les saisons, meilleur en automne et en hiver"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Grand parking gratuit disponible",
      publicTransport: "Bien desservi par le réseau de bus de Haïfa"
    },
    bestTimeToVisit: "Printemps et automne pour un climat idéal et moins de monde",
    crowdLevel: {
      lowSeason: "Peu fréquenté",
      highSeason: "Modérément fréquenté"
    },
    nearbyAttractions: [
      "Mont Carmel",
      "Jardins Bahaïs",
      "Quartier allemand de Haïfa"
    ]
  },
  {
    id: 9,
    name: "Ashkelon National Park Beach",
    hebrewName: "חוף פארק לאומי אשקלון",
    description: "Située dans un parc national, cette plage combine beauté naturelle et richesse historique. Les ruines antiques à proximité ajoutent un intérêt culturel à cette magnifique étendue de sable, tandis que les infrastructures modernes assurent confort et sécurité aux visiteurs.",
    images: [
      "/images/beaches/ashkelon-beach-1-new.jpg",
  "/images/beaches/ashkelon-beach-2-new.jpg",
  "/images/beaches/ashkelon-beach-3-new.jpg"
    ],
    type: [BeachType.PUBLIC, BeachType.NATURE, BeachType.FAMILY],
    location: {
      city: "Ashkelon",
      latitude: 31.6691,
      longitude: 34.5574,
      address: "Ashkelon National Park, Ashkelon"
    },
    hours: {
      opening: "08:00",
      closing: "17:00",
      notes: "Horaires du parc national, dernière entrée 1 heure avant la fermeture"
    },
    entranceFee: "22 NIS pour adultes, 10 NIS pour enfants (entrée au parc national)",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANT,
      BeachFacility.LIFEGUARD,
      BeachFacility.FIRST_AID,
      BeachFacility.PARASOLS,
      BeachFacility.BEACH_CHAIRS,
      BeachFacility.PLAYGROUND
    ],
    waterQuality: {
      rating: 5,
      description: "Excellente qualité d'eau, plage régulièrement récompensée pour sa propreté"
    },
    sand: {
      type: "Sable fin",
      color: "Doré clair",
      quality: "Très bien entretenu grâce au statut de parc national"
    },
    waves: {
      size: WaveSize.MEDIUM,
      surfingConditions: "Variables, meilleur en hiver pour les surfeurs expérimentés"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Grand parking disponible (inclus dans le prix d'entrée)",
      publicTransport: "Accessible en bus depuis Ashkelon"
    },
    bestTimeToVisit: "Printemps et automne pour combiner baignade et visite du site archéologique",
    crowdLevel: {
      lowSeason: "Peu fréquenté",
      highSeason: "Modérément fréquenté"
    },
    nearbyAttractions: [
      "Ruines archéologiques d'Ashkelon",
      "Port antique",
      "Musée d'Ashkelon"
    ]
  },
  {
    id: 10,
    name: "Bat Yam Beach",
    hebrewName: "חוף בת ים",
    description: "Les plages de Bat Yam offrent une alternative plus calme à celles de Tel Aviv tout en étant facilement accessibles. Elles sont particulièrement appréciées des familles et des locaux. La promenade récemment rénovée ajoute au charme de ce littoral en plein développement.",
    images: [
      "/images/beaches/bat-yam-beach-1-new.jpg",
      "/images/beaches/bat-yam-beach-2-new.jpg",
      "/images/beaches/bat-yam-beach-3-new.jpg"
    ],
    type: [BeachType.PUBLIC, BeachType.FAMILY, BeachType.CITY],
    location: {
      city: "Bat Yam",
      latitude: 32.0233,
      longitude: 34.7361,
      address: "Bat Yam Beach, Promenade de Bat Yam"
    },
    hours: {
      opening: "07:00",
      closing: "19:00",
      notes: "Surveillance de mai à octobre"
    },
    entranceFee: "Gratuit",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANT,
      BeachFacility.LIFEGUARD,
      BeachFacility.FIRST_AID,
      BeachFacility.PLAYGROUND,
      BeachFacility.PARASOLS,
      BeachFacility.BEACH_CHAIRS
    ],
    waterQuality: {
      rating: 4,
      description: "Bonne qualité d'eau avec contrôle régulier"
    },
    sand: {
      type: "Sable fin",
      color: "Doré",
      quality: "Bien entretenu et nettoyé régulièrement"
    },
    waves: {
      size: WaveSize.SMALL,
      surfingConditions: "Généralement calme, idéal pour les nageurs débutants et les familles"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Plusieurs zones de stationnement gratuit et payant",
      publicTransport: "Bien desservi par les bus depuis Tel Aviv"
    },
    bestTimeToVisit: "En semaine pour éviter l'affluence du week-end",
    crowdLevel: {
      lowSeason: "Peu fréquenté",
      highSeason: "Modérément fréquenté"
    },
    nearbyAttractions: [
      "Promenade de Bat Yam",
      "Musée d'art contemporain MoBY",
      "Marché de Bat Yam"
    ]
  },
  {
    id: 11,
    name: "Netanya Beach",
    hebrewName: "חוף נתניה",
    description: "Les magnifiques plages de Netanya sont caractérisées par leurs impressionnantes falaises calcaires qui offrent des vues panoramiques sur la mer. La ville dispose de plusieurs plages bien aménagées sur plusieurs kilomètres, ce qui permet de trouver facilement un espace tranquille même en haute saison.",
    images: [
        "/images/beaches/netanya-beach-1-new.jpg",
      "https://www.netanya.muni.il/PublishingImages/%D7%97%D7%95%D7%A4%D7%99%D7%9D/%D7%91%D7%9C%D7%95%20%D7%91%D7%99%D7%99/%D7%AA%D7%96%27/2.jpg",
        "/images/beaches/netanya-beach-3-new.jpg",

    ],
    type: [BeachType.PUBLIC, BeachType.FAMILY, BeachType.SPORTS],
    location: {
      city: "Netanya",
      latitude: 32.3239,
      longitude: 34.8512,
      address: "Netanya Beach, Promenade de Netanya"
    },
    hours: {
      opening: "07:00",
      closing: "19:00",
      notes: "Surveillance de mai à octobre, certaines plages sont accessibles toute l'année"
    },
    entranceFee: "Gratuit",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANT,
      BeachFacility.LIFEGUARD,
      BeachFacility.FIRST_AID,
      BeachFacility.WIFI,
      BeachFacility.PARASOLS,
      BeachFacility.BEACH_CHAIRS,
      BeachFacility.PLAYGROUND
    ],
    waterQuality: {
      rating: 5,
      description: "Excellente qualité d'eau, parmi les meilleures du littoral israélien"
    },
    sand: {
      type: "Sable fin",
      color: "Doré clair",
      quality: "Excellent, plages régulièrement nettoyées"
    },
    waves: {
      size: WaveSize.MEDIUM,
      surfingConditions: "Populaire parmi les surfeurs, bonnes vagues surtout en hiver"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Nombreux parkings le long de la promenade",
      publicTransport: "Gare ferroviaire à proximité et bon réseau de bus"
    },
    bestTimeToVisit: "Mai-juin ou septembre-octobre pour un climat idéal et moins de foule",
    crowdLevel: {
      lowSeason: "Peu fréquenté",
      highSeason: "Modérément fréquenté"
    },
    nearbyAttractions: [
      "Promenade de Netanya",
      "Place de l'Indépendance",
      "Marché de Netanya"
    ]
  },
  {
    id: 12,
    name: "Acadia Beach",
    hebrewName: "חוף אכדיה",
    description: "Cette plage très populaire de Herzliya offre d'excellentes installations et un cadre magnifique. Sa proximité avec la marina lui confère une ambiance particulière, mélangeant simplicité balnéaire et sophistication nautique.",
    images: [
      "/images/beaches/akadia-beach-1-new.jpg",
      "/images/beaches/akadia-beach-2-new.jpg",
      "/images/beaches/akadia-beach-3-new.jpg"
    ],
    type: [BeachType.PUBLIC, BeachType.FAMILY, BeachType.SPORTS],
    location: {
      city: "Herzliya",
      latitude: 32.1658,
      longitude: 34.7946,
      address: "Acadia Beach, Herzliya Pituach"
    },
    hours: {
      opening: "07:00",
      closing: "19:00",
      notes: "Surveillance d'avril à octobre"
    },
    entranceFee: "Gratuit",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANT,
      BeachFacility.LIFEGUARD,
      BeachFacility.FIRST_AID,
      BeachFacility.WIFI,
      BeachFacility.WATER_SPORTS,
      BeachFacility.PARASOLS,
      BeachFacility.BEACH_CHAIRS,
      BeachFacility.MARINA
    ],
    waterQuality: {
      rating: 5,
      description: "Excellente qualité d'eau, très claire et propre"
    },
    sand: {
      type: "Sable fin",
      color: "Blanc doré",
      quality: "Très bien entretenu"
    },
    waves: {
      size: WaveSize.MEDIUM,
      surfingConditions: "Bon spot pour les surfeurs de tous niveaux, écoles et location d'équipement disponibles"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Grand parking payant",
      publicTransport: "Accessible en bus depuis Tel Aviv et Herzliya"
    },
    bestTimeToVisit: "En semaine pour éviter l'affluence du week-end",
    crowdLevel: {
      lowSeason: "Modéré",
      highSeason: "Très fréquenté"
    },
    nearbyAttractions: [
      "Marina de Herzliya",
      "Zone commerciale de Herzliya Pituach",
      "Centre commercial Arena"
    ]
  },
  {
    id: 13,
    name: "Dado Beach",
    hebrewName: "חוף דדו",
    description: "Située à Haïfa, Dado Beach est une plage bien aménagée offrant une vue splendide sur la baie de Haïfa. Elle est populaire tant auprès des familles que des jeunes et dispose d'excellentes installations.",
    images: [
      "/images/beaches/dado-beach-1-new.jpg",
      "/images/beaches/dado-beach-2-new.jpg",
      "/images/beaches/dado-beach-3-new.jpg"
    ],
    type: [BeachType.PUBLIC, BeachType.CITY, BeachType.FAMILY],
    location: {
      city: "Haïfa",
      latitude: 32.8248,
      longitude: 34.9557,
      address: "Dado Beach, Avenue Hahagana, Haïfa"
    },
    hours: {
      opening: "07:00",
      closing: "19:00",
      notes: "Surveillance d'avril à octobre"
    },
    entranceFee: "Gratuit",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANT,
      BeachFacility.LIFEGUARD,
      BeachFacility.FIRST_AID,
      BeachFacility.WIFI,
      BeachFacility.PLAYGROUND,
      BeachFacility.PARASOLS,
      BeachFacility.BEACH_CHAIRS
    ],
    waterQuality: {
      rating: 4,
      description: "Bonne qualité d'eau avec contrôle régulier"
    },
    sand: {
      type: "Sable fin",
      color: "Doré",
      quality: "Bien entretenu"
    },
    waves: {
      size: WaveSize.SMALL,
      surfingConditions: "Généralement calme, idéal pour les nageurs et débutants"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Parking disponible à proximité",
      publicTransport: "Bien desservi par les transports en commun de Haïfa"
    },
    bestTimeToVisit: "Printemps et automne pour un climat agréable",
    crowdLevel: {
      lowSeason: "Peu fréquenté",
      highSeason: "Modérément fréquenté"
    },
    nearbyAttractions: [
      "Wadi Nisnas",
      "Baha'i Gardens",
      "German Colony"
    ]
  },
  {
    id: 14,
    name: "Alma Beach",
    hebrewName: "חוף עלמה",
    description: "Située entre Tel Aviv et Jaffa, cette plage moins connue offre une atmosphère plus décontractée et moins touristique. C'est un excellent endroit pour observer le coucher du soleil ou profiter de la mer loin des foules.",
    images: [
      "/images/beaches/alma-beach-1.jpg",
      "/images/beaches/alma-beach-2.jpg",
      "/images/beaches/alma-beach-3.jpg"
    ],
    type: [BeachType.PUBLIC, BeachType.DOG_FRIENDLY],
    location: {
      city: "Tel Aviv",
      latitude: 32.0668,
      longitude: 34.7624,
      address: "Alma Beach, Charles Clore Park, Tel Aviv"
    },
    hours: {
      opening: "07:00",
      closing: "19:00",
      notes: "Surveillance de mai à octobre"
    },
    entranceFee: "Gratuit",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.LIFEGUARD,
      BeachFacility.FIRST_AID
    ],
    waterQuality: {
      rating: 3,
      description: "Qualité moyenne, peut varier selon les conditions"
    },
    sand: {
      type: "Sable mélangé à des galets",
      color: "Doré",
      quality: "Moins entretenu que les plages principales"
    },
    waves: {
      size: WaveSize.MEDIUM,
      surfingConditions: "Spot apprécié des locaux, moins fréquenté"
    },
    accessibility: {
      wheelchairAccess: false,
      parking: "Stationnement limité à proximité",
      publicTransport: "Accessible en bus depuis le centre de Tel Aviv"
    },
    bestTimeToVisit: "Fin d'après-midi pour les couchers de soleil",
    crowdLevel: {
      lowSeason: "Peu fréquenté",
      highSeason: "Modérément fréquenté"
    },
    nearbyAttractions: [
      "Charles Clore Park",
      "Old Jaffa",
      "Neve Tzedek"
    ]
  },
  {
    id: 15,
    name: "Ashdod Beach",
    hebrewName: "חוף אשדוד",
    description: "Les plages d'Ashdod offrent une expérience balnéaire plus authentique, moins touristique que Tel Aviv. La ville dispose de plusieurs plages bien équipées, réparties sur 7 km de côte, ce qui permet de trouver facilement un endroit tranquille.",
    images: [
      "/images/beaches/ashdod-beach-1-new.jpg",
      "/images/beaches/ashdod-beach-2-new.jpg",
      "/images/beaches/ashdod-beach-3-new.jpg"
    ],
    type: [BeachType.PUBLIC, BeachType.FAMILY, BeachType.CITY],
    location: {
      city: "Ashdod",
      latitude: 31.8108,
      longitude: 34.6505,
      address: "Lido Beach, Ashdod Promenade, Ashdod"
    },
    hours: {
      opening: "07:00",
      closing: "19:00",
      notes: "Surveillance d'avril à octobre"
    },
    entranceFee: "Gratuit",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANT,
      BeachFacility.LIFEGUARD,
      BeachFacility.FIRST_AID,
      BeachFacility.PLAYGROUND,
      BeachFacility.PARASOLS,
      BeachFacility.BEACH_CHAIRS
    ],
    waterQuality: {
      rating: 4,
      description: "Bonne qualité d'eau, contrôlée régulièrement"
    },
    sand: {
      type: "Sable fin",
      color: "Doré",
      quality: "Bien entretenu"
    },
    waves: {
      size: WaveSize.MEDIUM,
      surfingConditions: "Bonnes conditions pour le surf, particulièrement en hiver"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Grand parking gratuit",
      publicTransport: "Accessible en bus et en train"
    },
    bestTimeToVisit: "Mai-juin ou septembre-octobre pour un climat idéal",
    crowdLevel: {
      lowSeason: "Peu fréquenté",
      highSeason: "Modérément fréquenté"
    },
    nearbyAttractions: [
      "Port d'Ashdod",
      "Musée d'art d'Ashdod",
      "Parc Lachish"
    ]
  },
  {
    id: 16,
    name: "Hof Dor HaBonim",
    hebrewName: "חוף דור-הבונים",
    description: "Cette réserve naturelle offre des plages sauvages d'une beauté exceptionnelle. Avec ses criques isolées, ses formations rocheuses et ses vestiges archéologiques, c'est un paradis pour les amoureux de la nature et ceux qui cherchent à s'éloigner des plages urbaines.",
    images: [
      "/images/beaches/dor-habonim-1-new.jpg",
      "/images/beaches/dor-habonim-2-new.jpg",
      "/images/beaches/dor-habonim-3-new.jpg"
    ],
    type: [BeachType.NATURE],
    location: {
      city: "Entre Haïfa et Caesarea",
      latitude: 32.6414,
      longitude: 34.9174,
      address: "Réserve naturelle de Dor HaBonim, Route 4"
    },
    hours: {
      opening: "08:00",
      closing: "17:00",
      notes: "Horaires de la réserve naturelle. Certaines zones accessibles en dehors de ces horaires."
    },
    entranceFee: "Entrée à la réserve: 22 NIS pour adultes, 10 NIS pour enfants",
    facilities: [
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.FIRST_AID
    ],
    waterQuality: {
      rating: 5,
      description: "Eau cristalline dans un environnement préservé"
    },
    sand: {
      type: "Mélange de sable et zones rocheuses",
      color: "Doré clair",
      quality: "Naturel et préservé"
    },
    waves: {
      size: WaveSize.MEDIUM,
      surfingConditions: "Peu adapté au surf en raison des zones rocheuses"
    },
    accessibility: {
      wheelchairAccess: false,
      parking: "Parking disponible à l'entrée de la réserve",
      publicTransport: "Limité, véhicule recommandé"
    },
    bestTimeToVisit: "Printemps pour la floraison ou automne pour les températures douces",
    crowdLevel: {
      lowSeason: "Peu fréquenté",
      highSeason: "Modérément fréquenté"
    },
    nearbyAttractions: [
      "Site archéologique de Tel Dor",
      "Grottes de Dor",
      "Kibbutz Nahsholim"
    ]
  },
  {
    id: 17,
    name: "Caesarea Beach",
    hebrewName: "חוף קיסריה",
    description: "Cette plage unique est située à côté des ruines de l'ancienne cité romaine de Césarée. Elle offre un cadre historique exceptionnel avec son port antique et ses vestiges archéologiques visibles même depuis l'eau.",
    images: [
     "/images/beaches/caesarea-beach-1-new.jpg",
     "/images/beaches/caesarea-beach-2-new.jpg",
    ],
    type: [BeachType.PUBLIC, BeachType.NATURE],
    location: {
      city: "Caesarea",
      latitude: 32.5005,
      longitude: 34.8881,
      address: "Caesarea National Park, Caesarea"
    },
    hours: {
      opening: "08:00",
      closing: "17:00",
      notes: "Horaires du parc national. Dernière entrée 1 heure avant la fermeture."
    },
    entranceFee: "40 NIS pour adultes, 20 NIS pour enfants (entrée au parc national)",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANT,
      BeachFacility.LIFEGUARD,
      BeachFacility.FIRST_AID,
      BeachFacility.PARASOLS,
      BeachFacility.BEACH_CHAIRS
    ],
    waterQuality: {
      rating: 5,
      description: "Excellente qualité d'eau, claire et propre"
    },
    sand: {
      type: "Sable fin mélangé à des zones rocheuses",
      color: "Doré",
      quality: "Bien entretenu"
    },
    waves: {
      size: WaveSize.MEDIUM,
      surfingConditions: "Variables selon les zones, attention aux vestiges submergés"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Grand parking disponible (inclus dans le prix d'entrée)",
      publicTransport: "Accessible en train (gare de Caesarea Pardes Hanna) puis taxi"
    },
    bestTimeToVisit: "Printemps et automne pour profiter à la fois de la baignade et de la visite",
    crowdLevel: {
      lowSeason: "Peu fréquenté",
      highSeason: "Modérément fréquenté"
    },
    nearbyAttractions: [
      "Port antique de Césarée",
      "Amphithéâtre romain",
      "Aqueduc romain"
    ]
  },
  {
    id: 18,
    name: "Metzitzim Beach",
    hebrewName: "חוף מציצים",
    description: "Populaire auprès des jeunes et des familles, cette plage est nommée d'après un film culte israélien des années 70. Elle offre une ambiance décontractée et de nombreuses activités.",
    images: [
      "/images/beaches/metzitzim-beach-1.jpg",
      "/images/beaches/metzitzim-beach-2.jpg",
      "/images/beaches/metzitzim-beach-3.jpg"
    ],
    type: [BeachType.PUBLIC, BeachType.FAMILY, BeachType.CITY],
    location: {
      city: "Tel Aviv",
      latitude: 32.0967,
      longitude: 34.7741,
      address: "Metzitzim Beach, Tel Aviv Port, Tel Aviv"
    },
    hours: {
      opening: "07:00",
      closing: "19:00",
      notes: "Surveillance de mai à octobre"
    },
    entranceFee: "Gratuit",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANT,
      BeachFacility.LIFEGUARD,
      BeachFacility.FIRST_AID,
      BeachFacility.WIFI,
      BeachFacility.BEACH_VOLLEYBALL,
      BeachFacility.PLAYGROUND
    ],
    waterQuality: {
      rating: 4,
      description: "Bonne qualité d'eau, régulièrement contrôlée"
    },
    sand: {
      type: "Sable fin",
      color: "Doré",
      quality: "Bien entretenu"
    },
    waves: {
      size: WaveSize.SMALL,
      surfingConditions: "Généralement calme, idéal pour les débutants et les enfants"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Parking payant à proximité",
      publicTransport: "Bien desservi par les bus et stations de vélos"
    },
    bestTimeToVisit: "En semaine pour éviter la foule du week-end",
    crowdLevel: {
      lowSeason: "Modéré",
      highSeason: "Très fréquenté"
    },
    nearbyAttractions: [
      "Port de Tel Aviv",
      "Marché du Port",
      "Parc Yarkon"
    ]
  },
  {
    id: 19,
    name: "Hilton Beach",
    hebrewName: "חוף הילטון",
    description: "Située près de l'hôtel Hilton, cette plage est divisée en trois sections distinctes : une zone pour les surfeurs, une plage gay-friendly (la principale d'Israël) et une section adaptée aux chiens.",
    images: [
      "/images/beaches/hilton-beach-1.jpg",
      "/images/beaches/hilton-beach-2.jpg",
    ],
    type: [BeachType.PUBLIC, BeachType.SPORTS, BeachType.DOG_FRIENDLY],
    location: {
      city: "Tel Aviv",
      latitude: 32.0911,
      longitude: 34.7724,
      address: "Hilton Beach, Independence Park, Tel Aviv"
    },
    hours: {
      opening: "07:00",
      closing: "19:00",
      notes: "Surveillance de mai à octobre"
    },
    entranceFee: "Gratuit",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANT,
      BeachFacility.LIFEGUARD,
      BeachFacility.FIRST_AID,
      BeachFacility.WIFI,
      BeachFacility.WATER_SPORTS
    ],
    waterQuality: {
      rating: 4,
      description: "Bonne qualité d'eau, contrôlée régulièrement"
    },
    sand: {
      type: "Sable fin",
      color: "Doré",
      quality: "Bien entretenu"
    },
    waves: {
      size: WaveSize.MEDIUM,
      surfingConditions: "Excellentes, c'est l'une des meilleures plages de surf de Tel Aviv"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Parking de l'hôtel Hilton (payant) et stationnement public",
      publicTransport: "Bien desservi par les bus et stations de vélos"
    },
    bestTimeToVisit: "Tôt le matin pour les surfeurs, après-midi pour l'ambiance sociale",
    crowdLevel: {
      lowSeason: "Modéré",
      highSeason: "Très fréquenté"
    },
    nearbyAttractions: [
      "Independence Park",
      "Port de Tel Aviv",
      "Boulevard Nordau"
    ]
  },
  {
    id: 20,
    name: "Zikim Beach",
    hebrewName: "חוף זיקים",
    description: "Cette plage relativement isolée offre un environnement naturel préservé, loin de l'agitation des plages urbaines. Elle est bordée par des dunes de sable et présente une flore unique.",
    images: [
      "/images/beaches/zikim-beach-1.jpg",
      "/images/beaches/zikim-beach-2.jpg",
    ],
    type: [BeachType.PUBLIC, BeachType.NATURE],
    location: {
      city: "Près d'Ashkelon",
      latitude: 31.6106,
      longitude: 34.5228,
      address: "Zikim Beach, Kibbutz Zikim"
    },
    hours: {
      opening: "08:00",
      closing: "18:00",
      notes: "Surveillance saisonnière, peut être fermée occasionnellement pour raisons de sécurité"
    },
    entranceFee: "Gratuit",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.FIRST_AID
    ],
    waterQuality: {
      rating: 5,
      description: "Excellente qualité d'eau, plage préservée et naturelle"
    },
    sand: {
      type: "Sable fin avec quelques zones rocheuses",
      color: "Doré clair",
      quality: "Naturel et préservé"
    },
    waves: {
      size: WaveSize.MEDIUM,
      surfingConditions: "Variables, peut être dangereux lors de mauvaises conditions météo"
    },
    accessibility: {
      wheelchairAccess: false,
      parking: "Parking limité près de la plage",
      publicTransport: "Limité, voiture recommandée"
    },
    bestTimeToVisit: "Printemps et début d'automne, en semaine pour plus de tranquillité",
    crowdLevel: {
      lowSeason: "Très peu fréquenté",
      highSeason: "Peu fréquenté"
    },
    nearbyAttractions: [
      "Kibbutz Zikim",
      "Réserve naturelle des dunes de Zikim",
      "Parc national d'Ashkelon (à proximité)"
    ]
  }
];

export const mediterraneanReligiousBeaches: MediterraneanReligiousBeach[] = [
  {
    id: 101,
    name: "Nordau Religious Beach",
    hebrewName: "חוף נפרד נורדאו",
    description: "L'une des plages séparées les plus connues de Tel Aviv, située dans le quartier religieux au nord de la ville. Cette plage offre une séparation complète entre hommes et femmes, permettant aux visiteurs religieux de profiter de la Méditerranée tout en respectant leurs traditions.",
    images: [
      "/images/beaches/nordau-religious-1.jpg",
      "/images/beaches/nordau-religious-2.jpg",
      "/images/beaches/nordau-religious-3.jpg"
    ],
    type: [BeachType.RELIGIOUS],
    location: {
      city: "Tel Aviv",
      latitude: 32.0958,
      longitude: 34.7733,
      address: "Boulevard Nordau, Tel Aviv"
    },
    separationSchedule: {
      men: "Dimanche, Mardi, Jeudi: 07:00-13:00 / Lundi, Mercredi: 14:00-19:00 / Vendredi: 07:00-14:00",
      women: "Dimanche, Mardi, Jeudi: 14:00-19:00 / Lundi, Mercredi: 07:00-13:00 / Vendredi: 14:00-16:00",
      notes: "Fermé pendant Shabbat. Alternance spéciale pendant les fêtes religieuses, consultez le calendrier officiel."
    },
    entranceFee: "Gratuit",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.LIFEGUARD,
      BeachFacility.FIRST_AID,
      BeachFacility.PARASOLS,
      BeachFacility.BEACH_CHAIRS
    ],
    waterQuality: {
      rating: 4,
      description: "Eau propre et contrôlée régulièrement"
    },
    sand: {
      type: "Sable fin",
      color: "Doré",
      quality: "Bien entretenu"
    },
    waves: {
      size: WaveSize.SMALL,
      surfingConditions: "Calme, idéal pour la baignade"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Parking disponible à proximité",
      publicTransport: "Bus et stations de vélos"
    },
    bestTimeToVisit: "Selon les horaires de séparation",
    crowdLevel: {
      lowSeason: "Modéré",
      highSeason: "Fréquenté"
    },
    nearbyAttractions: [
      "Quartier religieux de Tel Aviv",
      "Synagogues historiques",
      "Restaurants casher"
    ],
    dressCode: "Tenue modeste obligatoire. Pour les femmes: maillots couvrant les épaules, bras et jambes jusqu'aux genoux. Pour les hommes: shorts de bain jusqu'aux genoux.",
    specialFacilities: [
      "Entrées séparées pour hommes et femmes",
      "Vestiaires privés",
      "Zones d'ombre séparées",
      "Personnel féminin pendant les heures réservées aux femmes",
      "Personnel masculin pendant les heures réservées aux hommes"
    ],
    specialRules: [
      "Pas de photographie pendant les heures séparées",
      "Respect strict des horaires de séparation",
      "Pas d'appareils électroniques dans certaines zones",
      "Environnement calme et respectueux"
    ]
  },
  {
    id: 102,
    name: "Hof HaDataim (Haifa)",
    hebrewName: "חוף הדתיים חיפה",
    description: "Située à Haïfa, cette plage séparée offre un environnement respectueux des traditions religieuses tout en permettant de profiter des eaux de la Méditerranée. Elle est particulièrement appréciée par les familles religieuses du nord d'Israël.",
    images: [
      "/images/beaches/hof-hadatim-1.jpg",
      "/images/beaches/hof-hadatim-2.jpg",
      "/images/beaches/hof-hadatim-3.jpg"
    ],
    type: [BeachType.RELIGIOUS],
    location: {
      city: "Haïfa",
      latitude: 32.8256,
      longitude: 34.9553,
      address: "Bat Galim, Haïfa"
    },
    separationSchedule: {
      men: "Dimanche, Mercredi: 07:00-13:00 / Mardi, Jeudi: 14:00-19:00 / Vendredi: 07:00-13:00",
      women: "Dimanche, Mercredi: 14:00-19:00 / Mardi, Jeudi: 07:00-13:00 / Vendredi: 13:00-16:00",
      notes: "Fermé pendant Shabbat et certaines fêtes religieuses. En été, les horaires peuvent être étendus."
    },
    entranceFee: "Gratuit",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.LIFEGUARD,
      BeachFacility.FIRST_AID,
      BeachFacility.PARASOLS,
      BeachFacility.BEACH_CHAIRS
    ],
    waterQuality: {
      rating: 4,
      description: "Bonne qualité d'eau"
    },
    sand: {
      type: "Sable fin",
      color: "Doré",
      quality: "Bien entretenu"
    },
    waves: {
      size: WaveSize.SMALL,
      surfingConditions: "Calme, parfait pour la baignade"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Parking gratuit disponible",
      publicTransport: "Bus depuis le centre de Haïfa"
    },
    bestTimeToVisit: "Selon les horaires de séparation",
    crowdLevel: {
      lowSeason: "Modéré",
      highSeason: "Très fréquenté"
    },
    nearbyAttractions: [
      "Quartier de Bat Galim",
      "Centre communautaire religieux",
      "Synagogues"
    ],
    dressCode: "Tenue modeste obligatoire conformément aux exigences religieuses. Couverture complète recommandée en dehors des zones de baignade.",
    specialFacilities: [
      "Zones complètement séparées visuellement",
      "Vestiaires privés",
      "Douches séparées",
      "Aires familiales disponibles certains jours spécifiques",
      "Parasols et chaises adaptés"
    ],
    specialRules: [
      "Respect strict des horaires de séparation",
      "Environnement calme et respectueux",
      "Interdiction de nourriture non cachère",
      "Observation du Shabbat dans toutes les installations"
    ]
  }
];

export const safetyTips: SafetyTip[] = [
  {
    id: 1,
    title: "Respectez les drapeaux",
    description: "Les drapeaux sur les plages indiquent les conditions de baignade. Rouge signifie danger et interdiction de se baigner, jaune indique la prudence, et blanc/vert signifie que la baignade est autorisée."
  },
  {
    id: 2,
    title: "Attention aux courants",
    description: "La Méditerranée peut avoir des courants forts et imprévisibles. Si vous êtes pris dans un courant, ne luttez pas contre lui. Nagez parallèlement à la côte jusqu'à en sortir, puis revenez vers le rivage."
  },
  {
    id: 3,
    title: "Hydratez-vous régulièrement",
    description: "Le climat méditerranéen peut être très chaud, particulièrement en été. Buvez beaucoup d'eau et évitez de rester exposé au soleil aux heures les plus chaudes (11h-15h)."
  },
  {
    id: 4,
    title: "Méfiez-vous des méduses",
    description: "Les méduses sont présentes sur les côtes israéliennes, principalement en été (juillet-août). Renseignez-vous sur leur présence avant de vous baigner et suivez les conseils en cas de piqûre."
  },
  {
    id: 5,
    title: "Baignez-vous dans les zones surveillées",
    description: "Ne vous baignez que dans les zones où des maîtres-nageurs sont présents et pendant leurs heures de service. La plupart des noyades se produisent sur des plages non surveillées."
  },
  {
    id: 6,
    title: "Protégez-vous du soleil",
    description: "Utilisez de la crème solaire (indice 30+ minimum), portez un chapeau et des lunettes de soleil. Réappliquez régulièrement la protection solaire, surtout après la baignade."
  }
];

export const practicalTips: PracticalTip[] = [
  {
    id: 1,
    title: "Horaires optimaux",
    description: "Les matinées (avant 11h) et fins d'après-midi (après 16h) offrent les meilleures conditions: moins de chaleur, moins de monde et souvent une mer plus calme."
  },
  {
    id: 2,
    title: "Prévoir de l'eau douce",
    description: "Apportez toujours une bouteille d'eau pour vous rincer les yeux et le visage après la baignade, le sel peut être irritant."
  },
  {
    id: 3,
    title: "Respect de l'environnement",
    description: "Les plages israéliennes sont de plus en plus engagées dans la préservation de l'environnement. Utilisez les poubelles mises à disposition et évitez le plastique à usage unique."
  },
  {
    id: 4,
    title: "Économisez sur la location",
    description: "Les chaises et parasols peuvent être coûteux à louer sur certaines plages. Envisagez d'apporter les vôtres si vous prévoyez plusieurs visites."
  },
  {
    id: 5,
    title: "Shabbat et jours fériés",
    description: "Les plages sont généralement très fréquentées pendant Shabbat (vendredi soir et samedi) et les jours fériés juifs. Prévoyez d'arriver tôt pour trouver une bonne place."
  },
  {
    id: 6,
    title: "Services de nourriture",
    description: "Les prix dans les restaurants de plage peuvent être élevés. Vous pouvez apporter votre propre nourriture et boissons sur la plupart des plages (sauf indication contraire)."
  }
];

export const transportation: TransportationCity[] = [
  {
    id: 1,
    toCity: "Tel Aviv",
    options: [
      {
        type: "Transport en commun",
        details: "Réseau étendu de bus urbains desservant toutes les plages principales",
        price: "5-7 NIS par trajet",
        frequency: "Fréquent, toutes les 10-15 minutes"
      },
      {
        type: "Vélo/Trottinette",
        details: "Tel-O-Fun (vélos) et diverses applications de trottinettes électriques",
        price: "Vélos: environ 20 NIS/heure, Trottinettes: 5 NIS + 0.5 NIS/minute",
        frequency: "Disponible 24h/24"
      },
      {
        type: "Taxi/Gett",
        details: "Service de taxi à la demande via application",
        price: "30-50 NIS selon la distance",
        frequency: "Disponible 24h/24"
      }
    ]
  },
  {
    id: 2,
    toCity: "Herzliya/Netanya",
    options: [
      {
        type: "Train",
        details: "La gare ferroviaire est à distance de marche des plages à Herzliya et Netanya",
        price: "15-25 NIS depuis Tel Aviv (aller simple)",
        frequency: "Toutes les 30 minutes environ"
      },
      {
        type: "Bus",
        details: "Lignes 90, 47 vers Herzliya, 601, 605 vers Netanya",
        price: "10-20 NIS selon la distance",
        frequency: "Toutes les 20-30 minutes"
      },
      {
        type: "Location de voiture",
        details: "Option flexible pour visiter plusieurs plages",
        price: "À partir de 150 NIS par jour + carburant",
        frequency: "À votre convenance"
      }
    ]
  },
  {
    id: 3,
    toCity: "Haïfa/Nord d'Israël",
    options: [
      {
        type: "Train",
        details: "Service rapide et confortable depuis Tel Aviv et autres villes",
        price: "40-50 NIS depuis Tel Aviv (aller simple)",
        frequency: "Horaires réguliers, vérifiez le site des chemins de fer israéliens"
      },
      {
        type: "Bus interurbain",
        details: "Lignes 910, 947 depuis Tel Aviv vers Haïfa",
        price: "35-45 NIS",
        frequency: "Environ toutes les heures"
      },
      {
        type: "Excursion organisée",
        details: "Plusieurs agences proposent des excursions vers les plages du nord",
        price: "250-400 NIS par personne selon les inclusions",
        frequency: "Réservation nécessaire, départs quotidiens en haute saison"
      }
    ]
  },
  {
    id: 4,
    toCity: "Ashdod/Ashkelon",
    options: [
      {
        type: "Train",
        details: "Service direct depuis Tel Aviv vers Ashdod et Ashkelon",
        price: "20-30 NIS depuis Tel Aviv (aller simple)",
        frequency: "Toutes les 30-60 minutes"
      },
      {
        type: "Bus interurbain",
        details: "Lignes 310, 410 vers Ashdod, lignes 437, 439 vers Ashkelon",
        price: "15-25 NIS",
        frequency: "Environ toutes les 30 minutes"
      },
      {
        type: "Navette de plage (été)",
        details: "Services spéciaux pendant la saison estivale",
        price: "15-25 NIS aller-retour",
        frequency: "Variable, consultez les horaires locaux"
      }
    ]
  }
];