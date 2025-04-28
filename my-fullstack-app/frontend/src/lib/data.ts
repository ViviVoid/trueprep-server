export const navData = {
  links: [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/voice-chat",
      name: "Voice Chat",
    },
    {
      path: "/video-creator",
      name: "Video Creator",
    },
  ],
} as const;

export const videoCreatorData = {
  title: "Video Creator",
  description:
    "Create engaging videos with AI-generated content and voiceovers.",
  features: [
    "AI-generated video scripts",
    "Customizable templates",
    "High-quality voiceovers",
    "Easy-to-use interface",
  ],
} as const;

export const voiceChatData = {
  title: "Voice Chat",
  description:
    "Talk to Virtual Dave as if he were the true Dave! He will answer all your questions about TruePrep.ai and how it can help you with your tax accounting firm.",
  features: [
    "Real-time voice interaction",
    "Natural language processing",
    "TruePrep knowledge base",
    "Personalized responses",
  ],
} as const;
