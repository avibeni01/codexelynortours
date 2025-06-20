import { DeadSeaBeach, BeachType, BeachFacility, ReligiousBeach } from '@/types/deadSeaBeach'

export const deadSeaBeaches: DeadSeaBeach[] = [
  {
    id: 1,
    name: "Ein Bokek Beach",
    hebrewName: "חוף עין בוקק",
    description: "Ein Bokek est la plage publique la plus populaire de la Mer Morte, située au cœur de la zone hôtelière. Elle offre un accès gratuit et des installations modernes, ce qui en fait un choix idéal pour les familles et les visiteurs cherchant une expérience complète.",
    images: [
      "https://lp-cms-production.imgix.net/2019-06/fb1e752e3718884abf0bf661805cb064-ein-bokek-beach.jpg",
      "https://q-xx.bstatic.com/xdata/images/city/608x352/654793.webp?k=741e9d678cfed288d8b9404d4856c74c3a3d33fd0727277797dfe1ba885aea3c&o=",
      "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/292000/292384-Ein-Bokek.jpg"
    ],
    location: {
      latitude: 31.2000,
      longitude: 35.3667,
      address: "Ein Bokek Public Beach, Route 90, Israël"
    },
    hours: {
      opening: "07:00",
      closing: "19:00",
      notes: "Ouvert tous les jours, surveillance assurée pendant les heures d'ouverture"
    },
    entranceFee: "Gratuit",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANTS,
      BeachFacility.LIFEGUARD,
      BeachFacility.SHOPS,
      BeachFacility.FIRST_AID,
      BeachFacility.WIFI,
      BeachFacility.PARKING
    ],
    salinity: {
      level: "34%",
      properties: "Concentration maximale en minéraux thérapeutiques, idéale pour les traitements dermatologiques"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Parking gratuit avec places handicapés",
      publicTransport: "Bus 444 et 486 depuis Jérusalem, arrêt Ein Bokek"
    },
    bestTimeToVisit: "Toute l'année, optimal de mars à mai et septembre à novembre",
    type: BeachType.PUBLIC
  },
  {
    id: 2,
    name: "Mineral Beach",
    hebrewName: "חוף מינרל",
    description: "Mineral Beach offre une expérience unique avec ses bains de boue naturelle et ses sources d'eau chaude. Cette plage est particulièrement appréciée pour ses propriétés thérapeutiques et son atmosphère relaxante.",
    images: [
      "https://ynet-pic1.yit.co.il/picserver5/crop_images/2023/05/18/rkRtqxVrh/rkRtqxVrh_9_0_1264_711_0_x-large.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/01/53/34/f8/dead-sea.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/3e/09/30/caption.jpg?w=1200&h=-1&s=1"
    ],
    location: {
      latitude: 31.5677,
      longitude: 35.4054,
      address: "Mineral Beach, Mer Morte, Israël"
    },
    hours: {
      opening: "08:00",
      closing: "18:00",
      notes: "Fermé le samedi (Shabbat)"
    },
    entranceFee: "60 NIS pour les adultes, 35 NIS pour les enfants",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANTS,
      BeachFacility.LIFEGUARD,
      BeachFacility.SPA,
      BeachFacility.FIRST_AID
    ],
    salinity: {
      level: "33%",
      properties: "Bains de boue naturelle riches en minéraux, idéaux pour les affections articulaires et les douleurs rhumatismales"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Parking payant à proximité",
      publicTransport: "Navettes disponibles depuis Ein Bokek"
    },
    bestTimeToVisit: "Avril à juin et septembre à octobre pour des températures agréables",
    type: BeachType.PRIVATE
  },
  {
    id: 3,
    name: "Neve Midbar Beach",
    hebrewName: "חוף נווה מדבר",
    description: "Neve Midbar est une plage privée offrant une expérience haut de gamme avec des installations spa complètes. Elle est réputée pour son spa et ses traitements à base de boue de la Mer Morte.",
    images: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/e7/eb/aa/neve-midbar-upper-area.jpg?w=1200&h=-1&s=1",
      "https://media-cdn.tripadvisor.com/media/photo-s/0e/fe/ef/26/20170415-124740-largejpg.jpg",
      "https://www.deadsea.co.il/wp-content/uploads/2020/10/05b671a7-200f-4098-8d55-ca10710002b7.jpg"
    ],
    location: {
      latitude: 31.7123,
      longitude: 35.4562,
      address: "Neve Midbar Beach, Route 90, Israël"
    },
    hours: {
      opening: "08:30",
      closing: "17:30",
      notes: "Fermé le vendredi soir et samedi (Shabbat)"
    },
    entranceFee: "70 NIS pour les adultes, 40 NIS pour les enfants",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANTS,
      BeachFacility.LIFEGUARD,
      BeachFacility.SPA,
      BeachFacility.FIRST_AID,
      BeachFacility.WIFI
    ],
    salinity: {
      level: "33.7%",
      properties: "Haute concentration en sel et minéraux, recommandé pour les problèmes respiratoires et dermatologiques"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Parking gratuit pour les visiteurs",
      publicTransport: "Bus disponibles depuis Jérusalem"
    },
    bestTimeToVisit: "Mars à mai et octobre à novembre",
    type: BeachType.PRIVATE
  },
  {
    id: 4,
    name: "Kalia Beach",
    hebrewName: "חוף קליה",
    description: "Située à l'extrémité nord de la Mer Morte, Kalia Beach est l'une des plages les plus proches de Jérusalem. Elle offre une expérience complète avec des installations modernes et un accès facile aux eaux thérapeutiques.",
    images: [
      "https://deadsea.com/wp-content/uploads/2016/05/-e1622978902351.jpg",
      "https://www.worldbeachguide.com/photos/kalia-beach-dead-sea.jpg",
      "https://www.deadsea.co.il/wp-content/uploads/2020/08/248-1.jpg"
    ],
    location: {
      latitude: 31.8333,
      longitude: 35.5000,
      address: "Kalia Beach, Route 90, Mer Morte, Israël"
    },
    hours: {
      opening: "08:00",
      closing: "17:00",
      notes: "Horaires réduits en hiver, fermé pendant le Shabbat"
    },
    entranceFee: "60 NIS pour les adultes, 35 NIS pour les enfants",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANTS,
      BeachFacility.LIFEGUARD,
      BeachFacility.SHOPS,
      BeachFacility.FIRST_AID,
      BeachFacility.WIFI
    ],
    salinity: {
      level: "33.9%",
      properties: "Eau riche en magnésium et potassium, excellente pour la relaxation musculaire et la circulation sanguine"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Grand parking avec accès facile",
      publicTransport: "Bus direct depuis Jérusalem (30 minutes)"
    },
    bestTimeToVisit: "Toute l'année, particulièrement agréable au printemps et en automne",
    type: BeachType.PRIVATE
  },
  {
    id: 5,
    name: "Ein Gedi",
    hebrewName: "עין גדי",
    description: "Située près de la réserve naturelle d'Ein Gedi, cette plage combine l'expérience de la Mer Morte avec la proximité de magnifiques sentiers de randonnée et de cascades. C'est un lieu idéal pour combiner détente et exploration.",
    images: [
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/2c/f0/dd.jpg",
      "https://www.immanuel-tours.com/wp-content/uploads/2017/11/shutterstock_401157517-e1511289289301.jpg",
      "https://images.squarespace-cdn.com/content/v1/596b2969d2b85786e6892853/1557222362425-RLM2N1JDBZKL8IME3D6D/6D2A6687.jpg"
    ],
    location: {
      latitude: 31.4504,
      longitude: 35.3883,
      address: "Ein Gedi Beach, Route 90, près de la réserve d'Ein Gedi, Israël"
    },
    hours: {
      opening: "08:00",
      closing: "17:00",
      notes: "Dernière entrée à 16:00. Peut fermer plus tôt en hiver."
    },
    entranceFee: "50 NIS pour les adultes, 30 NIS pour les enfants",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANTS,
      BeachFacility.LIFEGUARD,
      BeachFacility.FIRST_AID
    ],
    salinity: {
      level: "33.5%",
      properties: "Combinaison unique d'eau de la Mer Morte et de sources d'eau douce à proximité, bénéfique pour diverses affections cutanées"
    },
    accessibility: {
      wheelchairAccess: false,
      parking: "Parking disponible (payant)",
      publicTransport: "Accessible en bus depuis Jérusalem et Ein Bokek"
    },
    bestTimeToVisit: "Mars à mai et septembre à novembre, idéal tôt le matin pour combiner avec une visite de la réserve",
    type: BeachType.PUBLIC
  },
  {
    id: 6,
    name: "Biankini Beach",
    hebrewName: "חוף ביאנקיני",
    description: "Biankini est une plage moderne proposant une ambiance plus jeune et festive. Elle offre des installations de qualité et organise régulièrement des événements, ce qui en fait un lieu apprécié des jeunes voyageurs.",
    images: [
      "https://deadsea.com/wp-content/uploads/2016/05/195gk1.jpg", 
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/96/a3/af/totes-meer-kalia-beach.jpg?h=500&s=1&w=900",
      "https://thumbs.dreamstime.com/b/vacationers-mineral-mud-dead-sea-biankini-beach-israel-september-tourists-september-biankini-45244120.jpg"
    ],
    location: {
      latitude: 31.3329,
      longitude: 35.4101,
      address: "Biankini Beach, Mer Morte, Route 90, Israël"
    },
    hours: {
      opening: "09:00",
      closing: "22:00",
      notes: "Horaires étendus pendant la haute saison, événements nocturnes occasionnels"
    },
    entranceFee: "65 NIS pour les adultes, 40 NIS pour les enfants",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANTS,
      BeachFacility.LIFEGUARD,
      BeachFacility.SHOPS,
      BeachFacility.FIRST_AID,
      BeachFacility.WIFI,
      BeachFacility.BAR
    ],
    salinity: {
      level: "33.8%",
      properties: "Propriétés thérapeutiques standard de la Mer Morte, avec l'ajout de soins spa utilisant des produits locaux"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Grand parking disponible",
      publicTransport: "Navettes disponibles depuis les principaux hôtels"
    },
    bestTimeToVisit: "Avril à juin et septembre à octobre, les soirées d'été pour les événements spéciaux",
    type: BeachType.PRIVATE
  },
  {
    id: 7,
    name: "Herods Beach",
    hebrewName: "חוף הרודס",
    description: "Associée à l'hôtel Herods, cette plage privée offre un service haut de gamme et des installations luxueuses. Elle est particulièrement appréciée pour son calme et son confort.",
    images: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/28/87/87/herods-dead-sea-hotel.jpg?h=500&s=1&w=900",
      "https://www.americaisraeltours.com/wp-content/uploads/2024/09/6-herods-dead-sea-hotel.jpg",
      "https://imgs.sanatoriums.com/w750h500q45cm/sanatorium/344/139162.jpg"
    ],
    location: {
      latitude: 31.1978,
      longitude: 35.3662,
      address: "Herods Dead Sea Hotel, Ein Bokek, Israël"
    },
    hours: {
      opening: "07:00",
      closing: "19:00",
      notes: "Ouvert tous les jours, accès prioritaire pour les clients de l'hôtel"
    },
    entranceFee: "120 NIS pour les visiteurs extérieurs, gratuit pour les clients de l'hôtel",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANTS,
      BeachFacility.LIFEGUARD,
      BeachFacility.SPA,
      BeachFacility.SHOPS,
      BeachFacility.FIRST_AID,
      BeachFacility.WIFI,
      BeachFacility.BAR
    ],
    salinity: {
      level: "34%",
      properties: "Traitement spa complet disponible, utilisant les propriétés thérapeutiques de la Mer Morte pour divers soins"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Parking de l'hôtel (gratuit pour les clients, payant pour les visiteurs)",
      publicTransport: "Service de navette depuis l'aéroport et les principales villes"
    },
    bestTimeToVisit: "Toute l'année, avec une préférence pour le printemps et l'automne",
    type: BeachType.PRIVATE
  },
  {
    id: 8,
    name: "Hamei Zohar",
    hebrewName: "חמי זוהר",
    description: "Hamei Zohar est une plage publique offrant une expérience authentique de la Mer Morte. Elle est moins touristique que certaines autres plages et appréciée pour son ambiance locale et ses tarifs accessibles.",
    images: [
      "https://deadsea.com/wp-content/uploads/2016/05/shutterstock_543680401-min-768x512.jpg",
      "https://img2.oastatic.com/img2/45483938/max/variant.jpg",
      "https://www.deadsea.co.il/wp-content/uploads/2020/07/WhatsApp_Image_2022-09-21_at_12.54.571.jpeg",
      "https://zisi.co.il/wp-content/uploads/2019/08/shutterstock_1052596403.jpg"
    ],
    location: {
      latitude: 31.1500,
      longitude: 35.3500,
      address: "Hamei Zohar, Route 90, Mer Morte, Israël"
    },
    hours: {
      opening: "08:00",
      closing: "18:00",
      notes: "Peut fermer plus tôt en hiver"
    },
    entranceFee: "50 NIS pour les adultes, 30 NIS pour les enfants",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANTS,
      BeachFacility.LIFEGUARD,
      BeachFacility.FIRST_AID
    ],
    salinity: {
      level: "33.5%",
      properties: "Combinaison unique d'eau de la Mer Morte et de sources d'eau douce à proximité, bénéfique pour diverses affections cutanées"
    },
    accessibility: {
      wheelchairAccess: false,
      parking: "Parking disponible (payant)",
      publicTransport: "Accessible en bus depuis Jérusalem et Ein Bokek"
    },
    bestTimeToVisit: "Mars à mai et septembre à novembre, idéal tôt le matin pour combiner avec une visite de la réserve",
    type: BeachType.PUBLIC
  },
  {
    id: 9,
    name: "Neve Zohar",
    hebrewName: "נווה זוהר",
    description: "Plage plus isolée et naturelle, Neve Zohar offre une expérience plus authentique et moins commerciale de la Mer Morte. Idéale pour ceux qui cherchent à éviter les foules.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/0/0d/NeveZohar_ST_06.jpg",
      "https://sandee.com/_next/image?q=75&url=https%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNaWR839agow9-CpO1S9QJzQ_LAx7DPSbFQYWsE%3Ds1600-k-no&w=3840",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/20712143.jpg?hp=1&k=7b689c42d854d0b71cc0c52044ad30caa6d150ea5a0723352c0a2ed7cd510fc2&o="
    ],
    location: {
      latitude: 31.1692,
      longitude: 35.3639,
      address: "Neve Zohar, Route 90, Israël"
    },
    hours: {
      opening: "Accès 24h/24",
      closing: "Accès 24h/24",
      notes: "Plage non surveillée en dehors des heures principales (9h-17h)"
    },
    entranceFee: "Gratuit",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.LIFEGUARD
    ],
    salinity: {
      level: "33.5%",
      properties: "Propriétés thérapeutiques standard de la Mer Morte, dans un environnement plus naturel"
    },
    accessibility: {
      wheelchairAccess: false,
      parking: "Parking libre à proximité",
      publicTransport: "Accès limité en transports publics, location de voiture recommandée"
    },
    bestTimeToVisit: "Mars à juin et septembre à novembre, tôt le matin pour plus de tranquillité",
    type: BeachType.PUBLIC
  },
  {
    id: 10,
    name: "Ein Gedi Spa Beach",
    hebrewName: "חוף ספא עין גדי",
    description: "Distincte de la plage publique d'Ein Gedi, cette plage privée est associée au spa Ein Gedi et offre des installations haut de gamme ainsi que des traitements spa complets utilisant les minéraux de la Mer Morte.",
    images: [
      "https://www.deadsea.co.il/wp-content/uploads/2020/07/3-20.jpg",
      "https://ngedi.co.il/wp-content/uploads/2019/05/spa02.jpg",
      "https://images.openai.com/thumbnails/957b53456a3530c2660f748d82fb60b1.jpeg"
    ],
    location: {
      latitude: 31.4493,
      longitude: 35.3877,
      address: "Ein Gedi Spa, Route 90, près du Kibboutz Ein Gedi, Israël"
    },
    hours: {
      opening: "09:00",
      closing: "17:00",
      notes: "Dernière entrée à 16:00"
    },
    entranceFee: "95 NIS pour les adultes, 65 NIS pour les enfants",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANTS,
      BeachFacility.LIFEGUARD,
      BeachFacility.SPA,
      BeachFacility.SHOPS,
      BeachFacility.FIRST_AID,
      BeachFacility.WIFI
    ],
    salinity: {
      level: "34.2%",
      properties: "Traitements spa complets utilisant la boue et l'eau de la Mer Morte, particulièrement bénéfiques pour les problèmes dermatologiques et rhumatismaux"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Grand parking disponible (inclus dans le prix d'entrée)",
      publicTransport: "Accessible en bus depuis Jérusalem et Tel Aviv"
    },
    bestTimeToVisit: "Mars à mai et septembre à novembre pour un climat idéal",
    type: BeachType.PRIVATE
  }
]

// Plages religieuses séparées
export const religiousBeaches: ReligiousBeach[] = [
  {
    id: 101,
    name: "Separate Beach (Ein Bokek)",
    hebrewName: "חוף נפרד (עין בוקק)",
    description: "Cette section séparée de la plage d'Ein Bokek est spécialement conçue pour les visiteurs religieux, offrant des jours et horaires distincts pour les hommes et les femmes.",
    images: [
      "https://www.deadsea.co.il/wp-content/uploads/2020/07/WhatsApp_Image_2022-09-21_at_12.54.57_11.jpeg",
      "https://www.locate.co.il/Thumb/800/600/keepRatio/75/uploads/locations/1833127/492419_1571503462.jpg",
      "https://www.now14.co.il/wp-content/uploads/2023/05/a8c73291-49b5-4d40-9f31-8fc189e8e69c.jpg"
    ],
    location: {
      latitude: 31.1978,
      longitude: 35.3662,
      address: "Section plage séparée, Ein Bokek, Route 90, Israël"
    },
    separationSchedule: {
      men: "Dimanche, Mardi, Jeudi: 09:00-13:00",
      women: "Dimanche, Mardi, Jeudi: 14:00-18:00 / Lundi, Mercredi: 09:00-18:00",
      notes: "Vendredi: alternance selon la saison, consultez le calendrier local"
    },
    dressCode: "Maillot de bain modeste requis. Pour les femmes: maillots couvrant les épaules et jusqu'aux genoux. Pour les hommes: shorts de bain jusqu'aux genoux.",
    specialFacilities: [
      "Zones d'ombre séparées",
      "Vestiaires privés",
      "Personnel uniquement féminin pendant les heures réservées aux femmes",
      "Personnel uniquement masculin pendant les heures réservées aux hommes"
    ],
    specialRules: [
      "Pas de photographie pendant les heures séparées",
      "Pas d'appareils électroniques dans certaines zones",
      "Respect obligatoire des horaires de séparation"
    ],
    facilities: [
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.SHOWERS,
      BeachFacility.LIFEGUARD,
      BeachFacility.PARKING
    ],
    entranceFee: "Gratuit",
    accessibility: {
      wheelchairAccess: true,
      parking: "Parking gratuit",
      publicTransport: "Bus disponibles depuis Jérusalem"
    },
    type: BeachType.PUBLIC
  },
  {
    id: 102,
    name: "Separate Beach (Neve Midbar)",
    hebrewName: "חוף נפרד (נווה מדבר)",
    description: "La plage séparée de Neve Midbar propose des installations spécifiquement conçues pour les visiteurs religieux, avec une stricte séparation entre hommes et femmes à des jours désignés.",
    images: [
      "https://www.tiuli.com/image/d829ff73b44ba62279db41a03f8a76ee.jpg?height=0&width=1080",
      "https://www.deadsea.co.il/wp-content/uploads/2020/10/9b282377-58a4-4ea2-9f8c-5c3bf5cda1e5.jpg",
      "https://www.dead-sea.org.il/media/2024/11/4087ab6186b4e8a093e770a2a2d0c142.jpg"
    ],
    location: {
      latitude: 31.7123,
      longitude: 35.4562,
      address: "Section plage séparée, Neve Midbar, Route 90, Israël"
    },
    separationSchedule: {
      men: "Dimanche, Mercredi: 09:00-18:00 / Vendredi: 09:00-14:00",
      women: "Lundi, Jeudi: 09:00-18:00 / Mardi: 09:00-18:00",
      notes: "Fermé pendant Shabbat et certaines fêtes religieuses"
    },
    dressCode: "Tenue modeste obligatoire. Les femmes doivent porter des maillots couvrant les épaules, les bras jusqu'aux coudes et les jambes jusqu'aux genoux. Les hommes doivent porter des shorts de bain jusqu'aux genoux.",
    specialFacilities: [
      "Barrières visuelles élevées entre les sections",
      "Entrées séparées pour hommes et femmes",
      "Personnel exclusivement du même sexe que les visiteurs selon l'horaire",
      "Aires de prière désignées"
    ],
    specialRules: [
      "Interdiction stricte de traverser vers la section du sexe opposé",
      "Pas de musique forte",
      "Pas d'alcool",
      "Codes vestimentaires stricts même dans les zones de douche"
    ],
    facilities: [
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.SHOWERS,
      BeachFacility.LIFEGUARD,
      BeachFacility.RESTAURANTS,
      BeachFacility.FIRST_AID
    ],
    entranceFee: "70 NIS pour les adultes, 40 NIS pour les enfants",
    accessibility: {
      wheelchairAccess: true,
      parking: "Parking gratuit pour les visiteurs",
      publicTransport: "Bus disponibles depuis Jérusalem"
    },
    type: BeachType.PRIVATE
  },
  {
    id: 103,
    name: "Separate Beach (Kalia)",
    hebrewName: "חוף נפרד (קליה)",
    description: "La section séparée de la plage de Kalia offre une expérience respectueuse des traditions religieuses, avec des installations adaptées et un environnement préservant l'intimité.",
    images: [
      "https://www.deadsea.co.il/wp-content/uploads/2020/07/WhatsApp_Image_2022-09-21_at_12.54.57_11.jpeg",
      "https://www.locate.co.il/Thumb/800/600/keepRatio/75/uploads/locations/1833127/492419_1571503462.jpg",
      "https://www.now14.co.il/wp-content/uploads/2023/05/a8c73291-49b5-4d40-9f31-8fc189e8e69c.jpg"
    ],
    location: {
      latitude: 31.7696,
      longitude: 35.4615,
      address: "Section plage séparée, Kalia Beach, Route 90, Israël"
    },
    separationSchedule: {
      men: "Dimanche, Mardi, Jeudi: 09:00-13:00",
      women: "Dimanche, Mardi, Jeudi: 14:00-18:00 / Lundi, Mercredi: 09:00-18:00",
      notes: "Alternance spéciale pendant les fêtes religieuses, consultez le calendrier"
    },
    dressCode: "Tenue modeste obligatoire conformément aux exigences religieuses. Couverture complète recommandée en dehors des zones de baignade.",
    specialFacilities: [
      "Zones complètement séparées visuellement",
      "Casiers et vestiaires privés",
      "Espaces familiaux disponibles certains jours (consultez le calendrier)",
      "Personnel adapté selon les horaires hommes/femmes"
    ],
    specialRules: [
      "Respect strict des horaires de séparation",
      "Environnement calme et respectueux",
      "Restrictions alimentaires dans certaines zones (nourriture cachère uniquement)",
      "Observation du Shabbat dans toutes les installations"
    ],
    facilities: [
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.SHOWERS,
      BeachFacility.LIFEGUARD,
      BeachFacility.RESTAURANTS,
      BeachFacility.FIRST_AID
    ],
    entranceFee: "60 NIS pour les adultes, 35 NIS pour les enfants",
    accessibility: {
      wheelchairAccess: true,
      parking: "Parking gratuit avec places réservées",
      publicTransport: "Bus direct depuis Jérusalem"
    },
    type: BeachType.PRIVATE
  }
]