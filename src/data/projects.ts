export interface ProjectMetrics {
  active_users: number;
  transaction_volume: number;
  growth_percent: number;
  onchain_activity: "Low" | "Medium" | "High";
  volume_24h?: number;
}

export interface Project {
  id: string;
  name: string;
  logo: string;
  description: string;
  country: string;
  x_link: string;
  category: string;
  status: "Live" | "Beta" | "Coming Soon";
  metrics: ProjectMetrics;
  trending_score: number;
  last_updated: string;
}

export const projectsData: Project[] = [
  {
    id: "nectar-finance",
    name: "Nectar Finance",
    logo: "https://picsum.photos/id/1005/200/200",
    description: "Fast cross-border remittances converting NGN to stablecoins on Solana for Nigerian freelancers and diaspora families.",
    country: "Nigeria",
    x_link: "https://x.com/Nectar_finance",
    category: "Payments",
    status: "Live",
    metrics: {
      active_users: 24800,
      transaction_volume: 1720000,
      growth_percent: 48,
      onchain_activity: "High",
      volume_24h: 45200
    },
    trending_score: 99,
    last_updated: "2026-04-19T00:00:00Z"
  },
  {
    id: "ribh-finance",
    name: "Ribh Finance",
    logo: "https://picsum.photos/id/1011/200/200",
    description: "DeFi rails for cross-border B2B payments, enabling Nigerian SMEs to receive USD instantly via Solana.",
    country: "Nigeria",
    x_link: "https://x.com/ribhfinance",
    category: "Payments",
    status: "Live",
    metrics: {
      active_users: 14200,
      transaction_volume: 10500000,
      growth_percent: 31,
      onchain_activity: "High",
      volume_24h: 118000
    },
    trending_score: 98,
    last_updated: "2026-04-19T00:00:00Z"
  },
  {
    id: "jollofboard",
    name: "JollofBoard",
    logo: "https://picsum.photos/id/1020/200/200",
    description: "Localized Solana DEX aggregator with Jollof-themed UI, optimized for Nigerian traders and liquidity pools.",
    country: "Nigeria",
    x_link: "https://x.com/JupNigeria",
    category: "DeFi",
    status: "Live",
    metrics: {
      active_users: 46700,
      transaction_volume: 52000000,
      growth_percent: 27,
      onchain_activity: "High",
      volume_24h: 785000
    },
    trending_score: 97,
    last_updated: "2026-04-19T00:00:00Z"
  },
  {
    id: "fossapay",
    name: "FossaPay",
    logo: "https://picsum.photos/id/1033/200/200",
    description: "Stablecoin derivatives for African currencies, making USDC spendable for everyday bills and merchant payments in Nigeria.",
    country: "Nigeria",
    x_link: "https://x.com/fossapay",
    category: "Payments",
    status: "Live",
    metrics: {
      active_users: 8200,
      transaction_volume: 2150000,
      growth_percent: 19,
      onchain_activity: "Medium",
      volume_24h: 26800
    },
    trending_score: 96,
    last_updated: "2026-04-19T00:00:00Z"
  },
  {
    id: "evolution-app",
    name: "Evolution App",
    logo: "https://picsum.photos/id/1040/200/200",
    description: "Mobile crypto-to-fiat gateway processing bill payments and transfers with heavy Solana volume.",
    country: "Nigeria",
    x_link: "https://x.com/evolutionapp_",
    category: "Payments",
    status: "Live",
    metrics: {
      active_users: 37800,
      transaction_volume: 1480000,
      growth_percent: 62,
      onchain_activity: "High",
      volume_24h: 38700
    },
    trending_score: 95,
    last_updated: "2026-04-19T00:00:00Z"
  },
  {
    id: "airbillspay",
    name: "AirBills Pay",
    logo: "https://picsum.photos/id/1055/200/200",
    description: "Stablecoin payments for utilities, flights, and airtime top-ups directly via Solana wallets.",
    country: "Nigeria",
    x_link: "https://x.com/airbillspay",
    category: "Payments",
    status: "Live",
    metrics: {
      active_users: 15600,
      transaction_volume: 620000,
      growth_percent: 24,
      onchain_activity: "Medium",
      volume_24h: 19200
    },
    trending_score: 94,
    last_updated: "2026-04-19T00:00:00Z"
  },
  {
    id: "usesara",
    name: "UseSara",
    logo: "https://picsum.photos/id/1066/200/200",
    description: "Unified savings and remittance stack for modern African households built natively on Solana.",
    country: "Nigeria",
    x_link: "https://x.com/usetsara",
    category: "DeFi",
    status: "Live",
    metrics: {
      active_users: 19300,
      transaction_volume: 850000,
      growth_percent: 53,
      onchain_activity: "Medium",
      volume_24h: 16200
    },
    trending_score: 93,
    last_updated: "2026-04-19T00:00:00Z"
  },
  {
    id: "stakepadi",
    name: "StakePadi",
    logo: "https://picsum.photos/id/1077/200/200",
    description: "Marketplace connecting users with expert sports and event predictions powered by Solana tips.",
    country: "Nigeria",
    x_link: "https://x.com/stakepadi",
    category: "Prediction Markets",
    status: "Live",
    metrics: {
      active_users: 4300,
      transaction_volume: 280000,
      growth_percent: 38,
      onchain_activity: "Medium",
      volume_24h: 6200
    },
    trending_score: 92,
    last_updated: "2026-04-19T00:00:00Z"
  },
  {
    id: "headline-odds",
    name: "Headline Odds",
    logo: "https://picsum.photos/seed/headlineodds/200/200",
    description: "Multi-product prediction platform with browser extension, signals bot, and on-chain betting.",
    country: "Nigeria",
    x_link: "https://x.com/headlineodds",
    category: "DeFi",
    status: "Beta",
    metrics: {
      active_users: 2800,
      transaction_volume: 165000,
      growth_percent: 82,
      onchain_activity: "Medium",
      volume_24h: 13400
    },
    trending_score: 91,
    last_updated: "2026-04-19T00:00:00Z"
  },
  {
    id: "gildore",
    name: "Gildore",
    logo: "https://picsum.photos/seed/gildore/200/200",
    description: "NFT-backed RWA platform bridging real estate and savings for everyday Nigerians on Solana.",
    country: "Nigeria",
    x_link: "https://x.com/gildore_on_sol",
    category: "RWA",
    status: "Coming Soon",
    metrics: {
      active_users: 1450,
      transaction_volume: 92000,
      growth_percent: 118,
      onchain_activity: "Medium",
      volume_24h: 2400
    },
    trending_score: 90,
    last_updated: "2026-04-19T00:00:00Z"
  },
  {
    id: "terravesta",
    name: "TerraVesta",
    logo: "https://picsum.photos/seed/terravesta/200/200",
    description: "Fractional real estate investing on Solana, lowering entry barriers for Nigerian retail investors.",
    country: "Nigeria",
    x_link: "https://x.com/terravesta_sol",
    category: "RWA",
    status: "Beta",
    metrics: {
      active_users: 3100,
      transaction_volume: 410000,
      growth_percent: 26,
      onchain_activity: "Medium",
      volume_24h: 8700
    },
    trending_score: 89,
    last_updated: "2026-04-19T00:00:00Z"
  },
  {
    id: "sol-walletlens",
    name: "Sol WalletLens",
    logo: "https://picsum.photos/seed/walletlens/200/200",
    description: "On-chain wallet analytics and security dashboard tailored for Solana users across Nigeria.",
    country: "Nigeria",
    x_link: "https://x.com/sol_walletlens",
    category: "Infrastructure",
    status: "Live",
    metrics: {
      active_users: 11200,
      transaction_volume: 145000,
      growth_percent: 41,
      onchain_activity: "Medium",
      volume_24h: 3400
    },
    trending_score: 88,
    last_updated: "2026-04-19T00:00:00Z"
  },
  {
    id: "justxpend-ai",
    name: "JustXpend AI",
    logo: "https://picsum.photos/seed/justxpend/200/200",
    description: "AI-driven expense management and instant Solana payments for Nigerian households and freelancers.",
    country: "Nigeria",
    x_link: "https://x.com/JustXpend_ai",
    category: "Payments",
    status: "Live",
    metrics: {
      active_users: 6800,
      transaction_volume: 310000,
      growth_percent: 57,
      onchain_activity: "Medium",
      volume_24h: 11200
    },
    trending_score: 87,
    last_updated: "2026-04-19T00:00:00Z"
  },
  {
    id: "owego",
    name: "Owego",
    logo: "https://picsum.photos/seed/owego/200/200",
    description: "Mobile-first wealth builder helping Nigerians save, stake, and grow assets on Solana.",
    country: "Nigeria",
    x_link: "https://x.com/OwegoApp",
    category: "DeFi",
    status: "Live",
    metrics: {
      active_users: 9200,
      transaction_volume: 480000,
      growth_percent: 21,
      onchain_activity: "Medium",
      volume_24h: 9300
    },
    trending_score: 86,
    last_updated: "2026-04-19T00:00:00Z"
  },
  {
    id: "bayse-markets",
    name: "Bayse Markets",
    logo: "https://picsum.photos/seed/baysemarkets/200/200",
    description: "Ultra-short 15-minute prediction markets and options trading built exclusively on Solana.",
    country: "Nigeria",
    x_link: "https://x.com/baysemarkets",
    category: "DeFi",
    status: "Live",
    metrics: {
      active_users: 6100,
      transaction_volume: 1250000,
      growth_percent: -4,
      onchain_activity: "Medium",
      volume_24h: 46800
    },
    trending_score: 85,
    last_updated: "2026-04-19T00:00:00Z"
  },
  {
    id: "usexara-ai",
    name: "UseXara AI",
    logo: "https://picsum.photos/seed/usexara/200/200",
    description: "WhatsApp-native payments app with seamless Solana deposits for daily Nigerian transactions.",
    country: "Nigeria",
    x_link: "https://x.com/usexara_ai",
    category: "Payments",
    status: "Live",
    metrics: {
      active_users: 22900,
      transaction_volume: 630000,
      growth_percent: 71,
      onchain_activity: "High",
      volume_24h: 27400
    },
    trending_score: 84,
    last_updated: "2026-04-19T00:00:00Z"
  },
  {
    id: "swiv",
    name: "Swiv",
    logo: "https://picsum.photos/seed/swiv/200/200",
    description: "Privacy-first prediction market using ZK proofs for real-world events on Solana.",
    country: "Nigeria",
    x_link: "https://x.com/SwivOfficial",
    category: "Gaming",
    status: "Live",
    metrics: {
      active_users: 3900,
      transaction_volume: 195000,
      growth_percent: 93,
      onchain_activity: "Medium",
      volume_24h: 6800
    },
    trending_score: 83,
    last_updated: "2026-04-19T00:00:00Z"
  },
  {
    id: "casino-church",
    name: "Casino & Church",
    logo: "https://picsum.photos/seed/casinochurch/200/200",
    description: "Narrative on-chain game blending casino luck mechanics with faith-based quests on Solana.",
    country: "Nigeria",
    x_link: "https://x.com/Casino_n_Church",
    category: "Gaming",
    status: "Coming Soon",
    metrics: {
      active_users: 950,
      transaction_volume: 68000,
      growth_percent: 145,
      onchain_activity: "Low",
      volume_24h: 0
    },
    trending_score: 82,
    last_updated: "2026-04-19T00:00:00Z"
  },
  {
    id: "soledu-ng",
    name: "SolEdu NG",
    logo: "https://picsum.photos/seed/soledu/200/200",
    description: "Multilingual Solana learning platform with local languages, quizzes, and reward incentives.",
    country: "Nigeria",
    x_link: "https://x.com/SolEduNig",
    category: "Infrastructure",
    status: "Beta",
    metrics: {
      active_users: 16200,
      transaction_volume: 95000,
      growth_percent: 68,
      onchain_activity: "Medium",
      volume_24h: 4100
    },
    trending_score: 81,
    last_updated: "2026-04-19T00:00:00Z"
  },
  {
    id: "fluxlend",
    name: "FluxLend",
    logo: "https://picsum.photos/seed/fluxlend/200/200",
    description: "Decentralized lending protocol offering NGN-pegged stablecoin loans and yield farming on Solana.",
    country: "Nigeria",
    x_link: "https://x.com/fluxlendng",
    category: "DeFi",
    status: "Beta",
    metrics: {
      active_users: 5400,
      transaction_volume: 780000,
      growth_percent: 33,
      onchain_activity: "Medium",
      volume_24h: 23100
    },
    trending_score: 80,
    last_updated: "2026-04-19T00:00:00Z"
  }
];
