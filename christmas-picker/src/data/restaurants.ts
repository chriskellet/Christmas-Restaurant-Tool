export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  priceRange: 'budget' | 'moderate' | 'expensive' | 'blowout';
  pricePerHead: number;
  location: string;
  atmosphere: 'casual' | 'relaxed' | 'upscale' | 'fine-dining';
  michelin: boolean;
  michelinStars?: number;
  pubsNearby: boolean;
  duration: 'quick' | 'standard' | 'long';
  notes: string;
  url?: string;
  status: 'available' | 'closed' | 'maybe';
}

export const restaurants: Restaurant[] = [
  {
    id: 'trivet',
    name: 'Trivet',
    cuisine: 'Modern European',
    priceRange: 'expensive',
    pricePerHead: 200,
    location: 'Bermondsey',
    atmosphere: 'upscale',
    michelin: true,
    michelinStars: 2,
    pubsNearby: true,
    duration: 'long',
    notes: 'Has availability on the 17th. 2 Michelin stars. Very good according to Oliver. Prices: Mains £48-£65, starters £39-£43.',
    status: 'available'
  },
  {
    id: 'gouqi',
    name: 'Gouqi',
    cuisine: 'Chinese',
    priceRange: 'expensive',
    pricePerHead: 150,
    location: 'Mayfair',
    atmosphere: 'upscale',
    michelin: false,
    pubsNearby: false,
    duration: 'standard',
    notes: 'High-end Chinese. Good reception from the group. Oliver and Charles both interested.',
    url: 'https://gouqi-restaurants.co.uk/',
    status: 'available'
  },
  {
    id: 'duck-and-rice',
    name: 'Duck and Rice',
    cuisine: 'Chinese',
    priceRange: 'moderate',
    pricePerHead: 80,
    location: 'Soho / Battersea Power Station',
    atmosphere: 'casual',
    michelin: false,
    pubsNearby: true,
    duration: 'standard',
    notes: 'Cheaper Chinese option. 5 course duck menu mentioned. Multiple locations including Battersea Power Station (in a shopping centre).',
    status: 'available'
  },
  {
    id: 'sabor',
    name: 'Sabor',
    cuisine: 'Spanish',
    priceRange: 'expensive',
    pricePerHead: 120,
    location: 'Mayfair',
    atmosphere: 'upscale',
    michelin: true,
    michelinStars: 1,
    pubsNearby: false,
    duration: 'standard',
    notes: '1 Michelin star. Highly regarded. David asked if it\'s "pseudo Spanish".',
    status: 'available'
  },
  {
    id: 'sollip',
    name: 'Sollip',
    cuisine: 'Korean',
    priceRange: 'expensive',
    pricePerHead: 150,
    location: 'London',
    atmosphere: 'upscale',
    michelin: true,
    michelinStars: 1,
    pubsNearby: false,
    duration: 'standard',
    notes: '1 Michelin star Korean. David mentioned Korean is "the in thing". Chris voted Chinese over Korean.',
    url: 'https://www.sollip.co.uk/about-us-1',
    status: 'available'
  },
  {
    id: 'story',
    name: 'Restaurant Story',
    cuisine: 'Fine Dining',
    priceRange: 'blowout',
    pricePerHead: 425,
    location: 'London',
    atmosphere: 'fine-dining',
    michelin: true,
    michelinStars: 2,
    pubsNearby: false,
    duration: 'long',
    notes: '2 Michelin stars. £275 base menu, estimated £400-450 with wine and service. Oliver open to it but concerned about price. Chris said £2500 bill seems excessive.',
    url: 'https://restaurantstory.co.uk/about-us/',
    status: 'available'
  },
  {
    id: 'berners-tavern',
    name: 'Berners Tavern',
    cuisine: 'British',
    priceRange: 'expensive',
    pricePerHead: 150,
    location: 'Fitzrovia',
    atmosphere: 'upscale',
    michelin: false,
    pubsNearby: true,
    duration: 'standard',
    notes: 'Chris mentioned prices have gone crazy.',
    status: 'available'
  },
  {
    id: 'holborn-dining',
    name: 'Holborn Dining Room',
    cuisine: 'British',
    priceRange: 'moderate',
    pricePerHead: 100,
    location: 'Holborn',
    atmosphere: 'upscale',
    michelin: false,
    pubsNearby: true,
    duration: 'standard',
    notes: 'Good for pre/post drinks at Scarfes. Oliver not a huge fan of the food. Chris said food was average last time.',
    url: 'https://holborndiningroom.com/',
    status: 'available'
  },
  {
    id: 'bermondsey-bierkeller',
    name: 'Bermondsey Bierkeller',
    cuisine: 'German',
    priceRange: 'moderate',
    pricePerHead: 60,
    location: 'Bermondsey',
    atmosphere: 'casual',
    michelin: false,
    pubsNearby: true,
    duration: 'quick',
    notes: 'German beer hall. Oliver liked the platter for 4. Casual option with good pub access.',
    url: 'https://www.bermondseybierkeller.co.uk/',
    status: 'available'
  },
  {
    id: 'fleurie',
    name: 'Fleurie',
    cuisine: 'French',
    priceRange: 'moderate',
    pricePerHead: 80,
    location: 'London',
    atmosphere: 'casual',
    michelin: false,
    pubsNearby: false,
    duration: 'standard',
    notes: 'Chris mentioned as a new place. Oliver would prefer a better menu but would go if everyone else fancies it.',
    url: 'https://www.fleurie.co.uk/',
    status: 'available'
  },
  {
    id: 'fallow',
    name: 'Fallow',
    cuisine: 'Modern British',
    priceRange: 'moderate',
    pricePerHead: 90,
    location: 'London',
    atmosphere: 'relaxed',
    michelin: false,
    pubsNearby: true,
    duration: 'standard',
    notes: 'Chris wants to give it another go at some point. Mentioned for future consideration.',
    status: 'available'
  },
  {
    id: 'the-ned-steakhouse',
    name: 'The Ned - Steakhouse',
    cuisine: 'Steak',
    priceRange: 'expensive',
    pricePerHead: 120,
    location: 'City of London',
    atmosphere: 'upscale',
    michelin: false,
    pubsNearby: true,
    duration: 'standard',
    notes: 'Alex said it was ok but quite "hushed". Chris said "steaked out after Goodman". David said "Steak is so last year".',
    status: 'available'
  },
  {
    id: 'brigadiers',
    name: 'Brigadiers',
    cuisine: 'Indian',
    priceRange: 'moderate',
    pricePerHead: 80,
    location: 'London',
    atmosphere: 'casual',
    michelin: false,
    pubsNearby: false,
    duration: 'standard',
    notes: 'Originally suggested by Oliver but books up fast. Chris is "still not a big fan of Indian food".',
    status: 'available'
  },
  {
    id: 'carbone',
    name: 'Carbone',
    cuisine: 'Italian',
    priceRange: 'blowout',
    pricePerHead: 200,
    location: 'London',
    atmosphere: 'upscale',
    michelin: false,
    pubsNearby: false,
    duration: 'standard',
    notes: 'Chris suggested it. "Latest in place" but "massively overpriced". Oliver called it "insane prices for pasta". Menu appears to be priced in dollars.',
    status: 'available'
  },
  {
    id: 'dorchester-grill',
    name: 'Dorchester Grill',
    cuisine: 'Chinese',
    priceRange: 'expensive',
    pricePerHead: 150,
    location: 'Mayfair',
    atmosphere: 'upscale',
    michelin: false,
    pubsNearby: false,
    duration: 'standard',
    notes: 'Alex mentioned this from many years ago. Now closed. Menu doesn\'t look that great according to Alex.',
    status: 'closed'
  },
  {
    id: 'bbq-beer-mile',
    name: 'BBQ + Beer Mile Pubs',
    cuisine: 'BBQ/Pub',
    priceRange: 'budget',
    pricePerHead: 50,
    location: 'Bermondsey',
    atmosphere: 'casual',
    michelin: false,
    pubsNearby: true,
    duration: 'quick',
    notes: 'Oliver suggested "decent bbq and a trek around the beer mile pubs". Casual option focused on pub crawling.',
    status: 'available'
  },
];

export const questions = [
  {
    id: 'budget',
    question: 'What\'s your budget per person?',
    type: 'choice' as const,
    options: [
      { value: 'budget', label: 'Budget (under £75)', emoji: '💰' },
      { value: 'moderate', label: 'Moderate (£75-£125)', emoji: '💵' },
      { value: 'expensive', label: 'Expensive (£125-£250)', emoji: '💸' },
      { value: 'blowout', label: 'Blowout (£250+)', emoji: '🤑' }
    ]
  },
  {
    id: 'cuisine',
    question: 'What type of cuisine are you in the mood for?',
    type: 'choice' as const,
    options: [
      { value: 'Chinese', label: 'Chinese', emoji: '🥢' },
      { value: 'Korean', label: 'Korean', emoji: '🍜' },
      { value: 'Indian', label: 'Indian', emoji: '🍛' },
      { value: 'Italian', label: 'Italian', emoji: '🍝' },
      { value: 'Spanish', label: 'Spanish', emoji: '🥘' },
      { value: 'British', label: 'British', emoji: '🇬🇧' },
      { value: 'Modern European', label: 'Modern European', emoji: '🍽️' },
      { value: 'Other', label: 'Other/Any', emoji: '🌟' }
    ]
  },
  {
    id: 'atmosphere',
    question: 'What kind of atmosphere?',
    type: 'choice' as const,
    options: [
      { value: 'casual', label: 'Casual & Fun', emoji: '🍻' },
      { value: 'relaxed', label: 'Relaxed', emoji: '😌' },
      { value: 'upscale', label: 'Upscale', emoji: '🥂' },
      { value: 'fine-dining', label: 'Fine Dining', emoji: '⭐' }
    ]
  },
  {
    id: 'michelin',
    question: 'Do you want Michelin stars?',
    type: 'boolean' as const,
    options: [
      { value: 'yes', label: 'Yes, show me the stars!', emoji: '⭐' },
      { value: 'no', label: 'Not necessary', emoji: '🤷' }
    ]
  },
  {
    id: 'pubs',
    question: 'Good pubs nearby for drinks before/after?',
    type: 'boolean' as const,
    options: [
      { value: 'yes', label: 'Yes please!', emoji: '🍺' },
      { value: 'no', label: 'Not bothered', emoji: '🤷' }
    ]
  },
  {
    id: 'duration',
    question: 'How much time do you have?',
    type: 'choice' as const,
    options: [
      { value: 'quick', label: 'Quick meal (need to catch trains!)', emoji: '🚂' },
      { value: 'standard', label: 'Standard dinner', emoji: '⏱️' },
      { value: 'long', label: 'Make an evening of it', emoji: '🌙' }
    ]
  }
];
