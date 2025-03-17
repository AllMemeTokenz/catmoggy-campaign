/*
 * $PEKKY Website Config File
 */

// Socials
export const telegramLink = "https://x.com/CatmoggyX"; // Telegram
export const twitterLink = "https://t.me/catsmoggy"; // Twitter

// Token Info
export const tokenCA = "HDoAKhCoEuuHzjMB6Q8AgKJyg5uT9APpDnynXAJQdfVW"; // Token contract

// Page contents
export default {
  redLineText: "$CATMOGGY To The Moon!", // Red bar's text in top of the page
  // Main route (/)
  homeMainSection: {
    title: "$CATMOGGY to the Moon",
    description:
      "$CATMOGGY is a Fundraising to help sick and stray Moggy cats worldwide.", // The \n component breaks lines if you want to add, you can.
    buttons: [
      {
        text: tokenCA ? "Buy now" : "Join now",
        href: tokenCA ? `https://jup.ag/SOL-${tokenCA}` : telegramLink,
      },
    ],
  },
  // Tokenomics route (/tokenomics)
  tokenomicsPage: {
    title: "TOKENOMICS",
    description: "$CATMOGGY Tokenomics",
  },
  // Tokenomics route (/roadmap)
  roadmapPage: {
    title: "OUR ROADMAP",
    description: `Discover the journey of CatsPlay Token ($CTY) from key milestones to major exchange listings. Together, let's build a fun and exciting crypto world for all cat lovers!`,
    phases: [
      // Phase 1
      {
        items: [
          "Launch the Telegram",
          "Launch the X/Twitter",
          "Publish the Website",
        ],
      },
      // Phase 2
      {
        items: ["Launch NFT on blockchain", "Build a strong community"],
      },
      // Phase 3
      {
        items: ["Launch token $CTY on solana", "Listing on exchange"],
      },
      // Phase 4
      {
        items: [
          "Establish DAO's for token's future",
          "Ensure long-term sustainability",
        ],
      },
    ],
  },
  faqPage: {
    title: "Frequently Asked Questions",
    description: "Find answers to the most common questions about our project.",
    faqs: [
      {
        question: "What is CATSPLAY?",
        answer:
          "CATSPLAY is a decentralized entertainment platform combining gaming, NFTs, and staking powered by $CTY tokens.",
      },
      {
        question: "How can I participate?",
        answer:
          "You can join by buying $CTY tokens, playing games, collecting NFTs, or staking to earn rewards.",
      },
      {
        question: "When is the official launch?",
        answer:
          "The official launch date will be announced soon via our website and social media.",
      },
      {
        question: "How can I contact the team?",
        answer:
          "You can contact us through Telegram, Instagram, X (Twitter), or via the contact form on our website.",
      },
    ],
  },
};
