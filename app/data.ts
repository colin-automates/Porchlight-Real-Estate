export type Company = {
  name: string;
  legalName: string;
  tagline: string;
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  license: string;
  broker: string;
  instagram: string;
  currentSite: string;
};

export const company: Company = {
  name: "Porchlight Real Estate",
  legalName: "Porchlight Real Estate LLC",
  tagline: "Redefining real estate, one relationship at a time.",
  phoneDisplay: "(423) 667-3263",
  phoneHref: "tel:+14236673263",
  email: "beairstohomes@gmail.com",
  addressLine1: "1200 Mountain Creek Road, #325",
  addressLine2: "Chattanooga, TN 37405",
  license: "266800",
  broker: "Christian Beairsto",
  instagram:
    "https://www.instagram.com/porchlight.llc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  currentSite: "https://www.porchlightrealestate.co",
};

export const navItems = [
  { label: "Buy", href: "/buying" },
  { label: "Sell", href: "/selling" },
  { label: "Communities", href: "/communities" },
  { label: "Agents", href: "/agents" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/blog" },
] as const;

export const headerNavItems = [
  { label: "Blog", href: "/blog" },
  { label: "Our Agents", href: "/agents" },
  { label: "About", href: "/about" },
  { label: "Communities", href: "/communities" },
  { label: "Schedule Viewing", href: "/schedule-viewing" },
] as const;

export const aboutParagraphs = [
  "Porchlight Real Estate was founded on a simple belief: real estate should be about people, not profit margins. After years of experience in both hospitality and real estate, we recognized that the best service comes from putting clients first and empowering our team to do what’s right.",
  "We’ve built our business differently. Our agents have the freedom to focus entirely on your needs, supported by a leadership structure that prioritizes relationships over rankings. When everyone on the team is valued and supported, that care naturally extends to every client we serve.",
  "What matters most to us are the stories we help create, the trust we build, and the relationships that last long after closing day. We measure our success not in sales numbers, but in the families we’ve helped find home.",
  "At Porchlight, we’re committed to honesty, integrity, and fairness in everything we do. We’re here to guide you with genuine care and expertise, making sure you feel welcomed and supported every step of the way. Because finding home should feel like coming home.",
  "With over a decade of experience serving the Chattanooga area, our team is dedicated to redefining real estate through authentic relationships and personalized service.",
];

export type Service = {
  slug: "buying" | "selling" | "support";
  title: string;
  intro: string;
  items: string[];
};

export const services: Service[] = [
  {
    slug: "buying",
    title: "Buying Representation",
    intro: "A clear, personal path from the first search through closing day.",
    items: [
      "Personalized home search",
      "Home tours",
      "Offer strategy and negotiations",
      "Contract-to-close coordination",
    ],
  },
  {
    slug: "selling",
    title: "Selling & Listing Services",
    intro:
      "Thoughtful preparation, professional presentation, and steady guidance.",
    items: [
      "Home valuation",
      "Professional photos and marketing",
      "Showings and open house management",
      "Offer review and negotiations",
    ],
  },
  {
    slug: "support",
    title: "Client Support & Local Expertise",
    intro:
      "Local perspective and practical connections for every stage of the move.",
    items: [
      "Relocation guidance",
      "Trusted vendor connections",
      "Local insights on schools, neighborhoods, and lifestyle",
      "Investment and market advice",
    ],
  },
];

export type Testimonial = { name: string; quote: string };

export const testimonials: Testimonial[] = [
  {
    name: "Lily J",
    quote:
      "We bought our first home with Christian and we wouldn’t have had it any other way! He made time for our (many) showings and didn’t let us settle until we found the right home.",
  },
  {
    name: "Lindsey C",
    quote:
      "Alison was a dream to work with! She was available for any and every question, wondering, or need I had. She was patient with me, consistently asked me how I felt throughout the process and made me feel comfortable with every decision.",
  },
  {
    name: "Bart B",
    quote:
      "I had a great experience working with Morgan. Rock star service! Prompt, clear, courteous communication. Did a great job negotiating on some repair/renovation requests. I highly recommend her.",
  },
];

export type Agent = {
  name: string;
  role: string;
  email: string;
  phone: string;
  phoneHref: string;
  image: string;
  instagram?: string;
};

export const agents: Agent[] = [
  {
    name: "Christian Beairsto",
    role: "Owner and Broker",
    email: "beairstohomes@gmail.com",
    phone: "423-667-3263",
    phoneHref: "tel:+14236673263",
    image: "/assets/people/christian-beairsto.webp",
    instagram:
      "https://www.instagram.com/beairsto.thebroker?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    name: "Melissa Crawford",
    role: "Agent",
    email: "Melissa.crawfordreagent@gmail.com",
    phone: "865-368-1621",
    phoneHref: "tel:+18653681621",
    image: "/assets/people/melissa-crawford.webp",
    instagram:
      "https://www.instagram.com/crawfordmelissa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    name: "Chelsa Vasquez",
    role: "Agent",
    email: "chelsavasquez1@gmail.com",
    phone: "423-994-8655",
    phoneHref: "tel:+14239948655",
    image: "/assets/people/chelsa-vasquez.webp",
    instagram:
      "https://www.instagram.com/chelsavasquez.realtor?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    name: "Coleman White",
    role: "Agent",
    email: "colemanwhiterealestate@gmail.com",
    phone: "423-710-4105",
    phoneHref: "tel:+14237104105",
    image: "/assets/people/coleman-white.webp",
    instagram:
      "https://www.instagram.com/colemanwhiterealestate?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    name: "Ricky Leveron",
    role: "Agent",
    email: "ricky@leveron.biz",
    phone: "423.416.2450",
    phoneHref: "tel:+14234162450",
    image: "/assets/people/ricky-leveron.webp",
  },
  {
    name: "Emilie Mills",
    role: "Agent",
    email: "emiliemills.realestate@gmail.com",
    phone: "423.244.5157",
    phoneHref: "tel:+14232445157",
    image: "/assets/people/emilie-mills.webp",
    instagram:
      "https://www.instagram.com/emills.realtor?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    name: "Morgan Owensby",
    role: "Agent",
    email: "morganlee.realestate@gmail.com",
    phone: "423-503-8170",
    phoneHref: "tel:+14235038170",
    image: "/assets/people/morgan-owensby.webp",
    instagram:
      "https://www.instagram.com/morganlee.realtor?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    name: "Alison Williams",
    role: "Agent",
    email: "alisonwilliamshomes@gmail.com",
    phone: "423-315-6426",
    phoneHref: "tel:+14233156426",
    image: "/assets/people/alison-williams.webp",
    instagram:
      "https://www.instagram.com/alisonknowshomes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    name: "Maria Jordania",
    role: "Agent",
    email: "mjordaniahomes@gmail.com",
    phone: "423-503-7858",
    phoneHref: "tel:+14235037858",
    image: "/assets/people/maria-jordania.webp",
    instagram:
      "https://www.instagram.com/movingwithmaria?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
];

export type Community = {
  name: string;
  slug: string;
  state: "TN" | "GA";
  latitude: number;
  longitude: number;
  coordinateSource: string;
  verifiedAt: string;
};

const verifiedAt = "2026-07-15";

export const communities: Community[] = [
  { name: "East Brainerd", slug: "east-brainerd", state: "TN", latitude: 34.997024, longitude: -85.155291, coordinateSource: "https://services.arcgis.com/UnTXoPXBYERF0OH6/ArcGIS/rest/services/Chattanooga_Neighborhoods_SW2/FeatureServer/15/query?objectIds=17&outFields=Name&returnGeometry=false&returnCentroid=true&outSR=4326&f=json", verifiedAt },
  { name: "Ringgold", slug: "ringgold", state: "GA", latitude: 34.913616, longitude: -85.121393, coordinateSource: "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2025_Gazetteer/2025_gaz_place_13.txt", verifiedAt },
  { name: "North Shore", slug: "north-shore", state: "TN", latitude: 35.060796, longitude: -85.307278, coordinateSource: "https://nominatim.openstreetmap.org/lookup?osm_ids=W45115507&format=jsonv2", verifiedAt },
  { name: "Soddy Daisy", slug: "soddy-daisy", state: "TN", latitude: 35.261575, longitude: -85.172121, coordinateSource: "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2025_Gazetteer/2025_gaz_place_47.txt", verifiedAt },
  { name: "Ooltewah", slug: "ooltewah", state: "TN", latitude: 35.072335, longitude: -85.054466, coordinateSource: "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2025_Gazetteer/2025_gaz_place_47.txt", verifiedAt },
  { name: "East Ridge", slug: "east-ridge", state: "TN", latitude: 34.997302, longitude: -85.228507, coordinateSource: "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2025_Gazetteer/2025_gaz_place_47.txt", verifiedAt },
  { name: "Signal Mountain", slug: "signal-mountain", state: "TN", latitude: 35.143893, longitude: -85.341469, coordinateSource: "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2025_Gazetteer/2025_gaz_place_47.txt", verifiedAt },
  { name: "Dunlap", slug: "dunlap", state: "TN", latitude: 35.36753, longitude: -85.389828, coordinateSource: "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2025_Gazetteer/2025_gaz_place_47.txt", verifiedAt },
  { name: "Cleveland", slug: "cleveland", state: "TN", latitude: 35.180044, longitude: -84.871288, coordinateSource: "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2025_Gazetteer/2025_gaz_place_47.txt", verifiedAt },
  { name: "St Elmo", slug: "st-elmo", state: "TN", latitude: 34.998385, longitude: -85.330738, coordinateSource: "https://services.arcgis.com/UnTXoPXBYERF0OH6/ArcGIS/rest/services/Chattanooga_Neighborhood_Associations_2025/FeatureServer/1/query?objectIds=44&outFields=name&returnGeometry=false&returnCentroid=true&outSR=4326&f=json", verifiedAt },
  { name: "Red Bank", slug: "red-bank", state: "TN", latitude: 35.111695, longitude: -85.296162, coordinateSource: "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2025_Gazetteer/2025_gaz_place_47.txt", verifiedAt },
  { name: "Whitwell", slug: "whitwell", state: "TN", latitude: 35.192393, longitude: -85.521532, coordinateSource: "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2025_Gazetteer/2025_gaz_place_47.txt", verifiedAt },
  { name: "Apison", slug: "apison", state: "TN", latitude: 35.004854, longitude: -85.009676, coordinateSource: "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2025_Gazetteer/2025_gaz_place_47.txt", verifiedAt },
  { name: "Highland Park", slug: "highland-park", state: "TN", latitude: 35.02635, longitude: -85.279994, coordinateSource: "https://services.arcgis.com/UnTXoPXBYERF0OH6/ArcGIS/rest/services/Chattanooga_Neighborhoods_SW2/FeatureServer/15/query?objectIds=3&outFields=Name&returnGeometry=false&returnCentroid=true&outSR=4326&f=json", verifiedAt },
  { name: "Lookout Mountain", slug: "lookout-mountain", state: "TN", latitude: 34.994485, longitude: -85.351577, coordinateSource: "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2025_Gazetteer/2025_gaz_place_47.txt", verifiedAt },
  { name: "Hixson", slug: "hixson", state: "TN", latitude: 35.145651, longitude: -85.235488, coordinateSource: "https://services.arcgis.com/UnTXoPXBYERF0OH6/ArcGIS/rest/services/Chattanooga_Neighborhoods_SW2/FeatureServer/15/query?objectIds=11&outFields=Name&returnGeometry=false&returnCentroid=true&outSR=4326&f=json", verifiedAt },
  { name: "Fort Oglethorpe", slug: "fort-oglethorpe", state: "GA", latitude: 34.931849, longitude: -85.24601, coordinateSource: "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2025_Gazetteer/2025_gaz_place_13.txt", verifiedAt },
  { name: "Black Creek", slug: "black-creek", state: "TN", latitude: 35.015796, longitude: -85.401125, coordinateSource: "https://services.arcgis.com/UnTXoPXBYERF0OH6/ArcGIS/rest/services/Chattanooga_Neighborhood_Associations_2025/FeatureServer/1/query?objectIds=103&outFields=name&returnGeometry=false&returnCentroid=true&outSR=4326&f=json", verifiedAt },
];

export type ArticleSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Article = {
  slug: string;
  category: string;
  title: string;
  date: string;
  publishedAt: string;
  modifiedAt: string;
  readTime: string;
  excerpt: string;
  image: string;
  alt: string;
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    slug: "understanding-home-inspections-and-negotiating-repairs-with-sellers",
    category: "Buying",
    title: "Understanding Home Inspections and Negotiating Repairs with Sellers",
    date: "February 17, 2026",
    publishedAt: "2026-02-17T14:39:32.598Z",
    modifiedAt: "2026-02-17T14:43:38.602Z",
    readTime: "3 min read",
    excerpt:
      "A practical look at inspection reports, repair priorities, and the choices buyers can bring to the negotiating table.",
    image: "/assets/rebuild/home-inspection.webp",
    alt: "A residential inspector using a diagnostic meter in a bathroom",
    sections: [
      {
        heading: "What a home inspection is for",
        paragraphs: [
          "A licensed inspector visually reviews the property’s major systems, including plumbing, electrical, roofing, HVAC, and structural components. The report is designed to document concerns rather than celebrate what is working, so even a well-kept home can produce a long list.",
          "An inspection reflects what could be accessed on that day. It is not a guarantee or a code-compliance review. Its value is giving buyers clearer information before they decide how to proceed.",
        ],
      },
      {
        heading: "Put the findings in context",
        bullets: [
          "Estimate repair costs with qualified contractors.",
          "Compare the home with similar properties in better condition.",
          "Consider which repairs fit your budget now and over time.",
          "Prioritize safety and major systems over cosmetic items.",
        ],
      },
      {
        heading: "A repair request is a negotiation",
        paragraphs: [
          "Depending on the contract and the seller’s response, buyers may request completed repairs, a credit at closing, or a price adjustment. Clear estimates and written agreements help everyone understand the proposed solution. Sellers are not always required to make repairs, but a focused request can keep the conversation productive.",
        ],
      },
    ],
  },
  {
    slug: "common-mistakes-sellers-make-that-sabotage-their-listings",
    category: "Selling",
    title: "Common Mistakes Sellers Make (and How to Avoid Them)",
    date: "February 10, 2026",
    publishedAt: "2026-02-10T21:16:01.707Z",
    modifiedAt: "2026-02-10T21:54:10.477Z",
    readTime: "3 min read",
    excerpt:
      "From pricing and preparation to photography and showings, the details that can help a listing reach buyers with confidence.",
    image: "/assets/rebuild/seller-preparation.webp",
    alt: "A photographer preparing a home interior for a listing",
    sections: [
      {
        heading: "Start with a grounded price",
        paragraphs: [
          "A price that is too high can keep buyers away, while a price that is too low may leave value on the table. A detailed market analysis compares genuinely similar recent sales and helps set a realistic position from the start.",
        ],
      },
      {
        heading: "Presentation carries the first impression",
        bullets: [
          "Address visible repairs and deferred maintenance.",
          "Use bright, clear photography that shows the home honestly.",
          "Reduce clutter and personal items so rooms read clearly.",
          "Give the listing broad exposure rather than relying on one channel.",
        ],
      },
      {
        heading: "Stay flexible and listen",
        paragraphs: [
          "Accessible showing times and prompt responses give interested buyers a fair chance to see the property. Feedback from buyers and agents can also reveal repeated concerns about price, presentation, or condition. Transparency about known issues builds trust and helps reduce surprises later in the transaction.",
        ],
      },
    ],
  },
  {
    slug: "the-importance-of-getting-pre-approved-before-you-start-house-hunting",
    category: "Buying",
    title: "The Importance of Getting Pre-Approved Before You Start House Hunting",
    date: "February 3, 2026",
    publishedAt: "2026-02-03T15:51:14.846Z",
    modifiedAt: "2026-02-03T15:51:14.846Z",
    readTime: "3 min read",
    excerpt:
      "Why early lender preparation can clarify a budget, strengthen an offer, and make a Chattanooga home search more focused.",
    image: "/assets/rebuild/preapproval-meeting.webp",
    alt: "Home buyers reviewing mortgage paperwork at a table",
    sections: [
      {
        heading: "What pre-approval means",
        paragraphs: [
          "A lender reviews verified financial details such as income, credit, debts, and assets, then provides a conditional loan amount. This is more substantial than a rough pre-qualification and gives buyers a clearer budget for the search.",
        ],
      },
      {
        heading: "Why it helps before touring",
        bullets: [
          "Focus on homes that fit the approved budget.",
          "Show sellers that financing preparation is already underway.",
          "Move more quickly when the right home appears.",
          "Identify credit or documentation issues earlier in the process.",
        ],
      },
      {
        heading: "Prepare for the lender conversation",
        paragraphs: [
          "Gather pay stubs, tax returns, bank statements, and identification. Review your credit information, compare lenders, and ask how long the pre-approval remains current. The goal is not simply a letter. It is a more confident, realistic starting point for the home search.",
        ],
      },
    ],
  },
];
