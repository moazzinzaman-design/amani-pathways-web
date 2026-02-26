export interface TransportTimes {
    walking?: string;
    public?: string;
    car?: string;
}

export interface MapLocation {
    id: string;
    name: string;
    description: string;
    funThings: string[];
    transport: TransportTimes;
    emoji: string;
    lat: number;  // Real GPS latitude
    lng: number;  // Real GPS longitude
    x: number;   // Percentage from left (legacy, kept for compat)
    y: number;   // Percentage from top (legacy, kept for compat)
}

export const mapLocations: MapLocation[] = [
    {
        id: "amani-pathways-home",
        name: "Amani Pathways (You Are Here)",
        description: "Your home at 8 Mayfield Avenue. This is your safe space and base for exploring Halifax.",
        funThings: [
            "Relax in your own space 🛋️",
            "Cook a meal in the shared kitchen 🍳",
            "Chat with staff and other residents 💬"
        ],
        transport: {
            walking: "0 mins",
        },
        emoji: "🏠",
        lat: 53.717872, lng: -1.851759,
        x: 50,
        y: 50
    },
    {
        id: "dean-clough",
        name: "Dean Clough",
        description: "Once one of the world's largest carpet factories, now a bustling hub of arts, businesses, and cafes. It's a huge, historic site that's been transformed into something cool and modern.",
        funThings: [
            "Check out the free art galleries 🎨",
            "Grab a coffee or lunch at one of the independent cafes ☕",
            "Catch a show at the Viaduct Theatre 🎭"
        ],
        transport: {
            walking: "15 mins from center",
            public: "5 mins by bus",
            car: "5 mins"
        },
        emoji: "🏭",
        lat: 53.7280, lng: -1.8582,
        x: 43,
        y: 5
    },
    {
        id: "town-hall",
        name: "Halifax Town Hall",
        description: "Designed by the same architect who did the Houses of Parliament in London! It's a stunning piece of architecture right in the middle of town.",
        funThings: [
            "Admire the beautiful Victorian architecture from the outside 🏛️",
            "Check out the clock tower measuring 180ft high 🕰️",
            "Great spot for photography 📸"
        ],
        transport: {
            walking: "2 mins from center",
            car: "2 mins"
        },
        emoji: "🏛️",
        lat: 53.7244, lng: -1.8604,
        x: 38,
        y: 32
    },
    {
        id: "halifax-minster",
        name: "Halifax Minster",
        description: "A gorgeous 900-year-old church filled with local history. It's peaceful, historic, and has amazing stained glass windows.",
        funThings: [
            "Explore the historic graveyards and ancient stones 🪦",
            "Listen to the famous organ playing 🎵",
            "Enjoy the quiet and peaceful garden area 🌳"
        ],
        transport: {
            walking: "10 mins from center",
            public: "5 mins by bus",
            car: "5 mins"
        },
        emoji: "⛪",
        lat: 53.7207, lng: -1.8555,
        x: 92,
        y: 45
    },
    {
        id: "borough-market",
        name: "Halifax Borough Market",
        description: "A stunning Victorian indoor market. It's bursting with character, local life, and incredible food stalls from all around the world.",
        funThings: [
            "Try some affordable, amazing street food (Thai, Mexican, local pies) 🌮🥟",
            "Hunt for bargains and unique items 🛍️",
            "Just soak in the historic, lively atmosphere 👥"
        ],
        transport: {
            walking: "Right in the center",
        },
        emoji: "🛍️",
        lat: 53.7229, lng: -1.8610,
        x: 43,
        y: 61
    },
    {
        id: "piece-hall",
        name: "The Piece Hall",
        description: "The crown jewel of Halifax! This massive 18th-century open-air square used to be for trading cloth. Now, it's packed with cool indie shops, food, and huge music concerts.",
        funThings: [
            "Hang out in the massive open courtyard ☀️",
            "Browse the unique independent shops (comics, vintage clothes, records) 👕",
            "Grab some sweet treats like ice cream or churros 🍦"
        ],
        transport: {
            walking: "5 mins from center",
            public: "Next to train/bus station",
            car: "5 mins"
        },
        emoji: "🏛️✨",
        lat: 53.7228, lng: -1.8645,
        x: 68,
        y: 64
    },
    {
        id: "victoria-theatre",
        name: "Victoria Theatre",
        description: "The main spot in town for live entertainment. Whether you are into comedy, pantomimes, or live bands, there's always something going on here.",
        funThings: [
            "See a live comedy show or music gig 🎸",
            "Check out affordable youth theatre events 🎫",
            "Enjoy the amazing classic theatre interior 🎭"
        ],
        transport: {
            walking: "5 mins from center",
            public: "2 mins by bus",
            car: "3 mins"
        },
        emoji: "🎭",
        lat: 53.7236, lng: -1.8620,
        x: 28,
        y: 75
    },
    {
        id: "eureka",
        name: "Eureka! The Children's Museum",
        description: "While it's primarily for younger kids, the building and the massive park surrounding it are a great landmark right next to the train station.",
        funThings: [
            "Hang out in the large public park areas right outside 🌳",
            "Grab a snack from the nearby station area 🍩",
            "Great meeting spot before catching a train 🚂"
        ],
        transport: {
            walking: "10 mins from center",
            public: "Next to Train Station",
        },
        emoji: "💡",
        lat: 53.7262, lng: -1.8700,
        x: 89,
        y: 90
    },
    {
        id: "shay-stadium",
        name: "The Shay Stadium",
        description: "The home of local sports! If you're into football or rugby, this is where FC Halifax Town and Halifax Panthers play.",
        funThings: [
            "Catch an affordable local football or rugby match ⚽🏉",
            "Experience the intense match-day atmosphere 🗣️",
            "Grab an amazing pie at half-time! 🥧"
        ],
        transport: {
            walking: "15 mins from center",
            public: "5 mins by bus",
            car: "5 mins"
        },
        emoji: "⚽",
        lat: 53.7189, lng: -1.8707,
        x: 13,
        y: 94
    },
    {
        id: "shibden-hall",
        name: "Shibden Hall & Park",
        description: "A stunning historic house set in a massive, beautiful park. Famous for being the home of Anne Lister (Gentleman Jack).",
        funThings: [
            "Rent a boat on the large boating lake 🚣‍♂️",
            "Take a long walk through the beautiful wooded parkland 🌲",
            "Ride the miniature railway or grab a coffee at the cafe ☕🚂"
        ],
        transport: {
            walking: "30 mins from center",
            public: "10 mins by bus",
            car: "10 mins"
        },
        emoji: "🌳",
        lat: 53.7318, lng: -1.8281,
        x: 23,
        y: 15
    }
];
