// Japan Tour Itinerary Data
// Sep 24 - Oct 4, 2026 | Tokyo -> Kyoto -> Osaka
// Each day has: date, weekday, city, emoji theme, and items[] with {name, category, note, emoji}
// category: "do" | "eat" | "shop"

const ITINERARY = [
  {
    id: "day1",
    date: "Sep 24",
    weekday: "Thursday",
    city: "Tokyo",
    title: "Touchdown in Tokyo! ✈️",
    items: [
      { name: "Land at Narita/Haneda & get your Suica/Pasmo IC cards", category: "do", emoji: "🚄", note: "Tap-to-ride on trains, buses & convenience stores." },
      { name: "Check in to hotel & drop bags", category: "do", emoji: "🛎️", note: "Shinjuku or Shibuya are great home bases." },
      { name: "Golden hour stroll through Shinjuku", category: "do", emoji: "🌆", note: "Neon lights + skyscraper views to shake off jet lag." },
      { name: "Ichiran Ramen", category: "eat", emoji: "🍜", note: "Solo-booth tonkotsu ramen — the classic first-night meal." },
      { name: "Omoide Yokocho (Piss Alley)", category: "eat", emoji: "🍢", note: "Tiny smoky yakitori bars, super atmospheric." },
      { name: "Don Quijote (Donki)", category: "shop", emoji: "🛍️", note: "Chaotic discount superstore, open late — snacks & souvenirs." }
    ]
  },
  {
    id: "day2",
    date: "Sep 25",
    weekday: "Friday",
    city: "Tokyo",
    title: "Shibuya & Harajuku Energy ⚡",
    items: [
      { name: "Shibuya Scramble Crossing", category: "do", emoji: "🚦", note: "The world's busiest intersection — get the SHIBUYA SKY view first." },
      { name: "Meiji Shrine", category: "do", emoji: "⛩️", note: "Peaceful forest shrine right in the middle of the city." },
      { name: "Takeshita Street, Harajuku", category: "shop", emoji: "🎀", note: "Kawaii fashion, crepes, and pure sensory overload." },
      { name: "Cat Street & Omotesando boutiques", category: "shop", emoji: "👜", note: "Trendy streetwear and design shops." },
      { name: "Fluffy pancakes at a Harajuku café", category: "eat", emoji: "🥞", note: "Get the jiggly soufflé pancakes." },
      { name: "Genki Sushi (conveyor belt)", category: "eat", emoji: "🍣", note: "Order by tablet, plates come on a mini bullet train." }
    ]
  },
  {
    id: "day3",
    date: "Sep 26",
    weekday: "Saturday",
    city: "Tokyo",
    title: "Old Tokyo & Skyline Views 🏯",
    items: [
      { name: "Senso-ji Temple, Asakusa", category: "do", emoji: "🏮", note: "Tokyo's oldest temple, huge lantern gate photo op." },
      { name: "TeamLab Planets or Borderless", category: "do", emoji: "✨", note: "Immersive digital art — book tickets in advance!" },
      { name: "Nakamise Shopping Street", category: "shop", emoji: "🎏", note: "Traditional snacks, fans, yukata along the temple approach." },
      { name: "Akihabara for anime/gaming goods", category: "shop", emoji: "🎮", note: "Multi-floor arcades, figures, retro games." },
      { name: "Monjayaki or okonomiyaki in Asakusa", category: "eat", emoji: "🥘", note: "DIY savory pancake grilled at your table." },
      { name: "Tokyo Skytree at sunset", category: "do", emoji: "🗼", note: "Observation deck views over the whole city." }
    ]
  },
  {
    id: "day4",
    date: "Sep 27",
    weekday: "Sunday",
    city: "Tokyo",
    title: "Pop Culture & Green Spaces 🌸",
    items: [
      { name: "teamLab / Ghibli Museum (book ahead)", category: "do", emoji: "🎬", note: "Whimsical, magical — advance tickets required." },
      { name: "Yoyogi Park picnic + street performers", category: "do", emoji: "🎸", note: "Chill Sunday vibes, rockabilly dancers show up here." },
      { name: "Shimokitazawa vintage shopping", category: "shop", emoji: "👗", note: "Indie thrift stores, retro fashion, cool cafes." },
      { name: "Depachika food halls (Isetan/Shinjuku)", category: "shop", emoji: "🍱", note: "Gourmet basement food halls — great for bento & gifts." },
      { name: "Standing sushi bar lunch", category: "eat", emoji: "🍣", note: "Fast, cheap, and excellent quality." },
      { name: "Wagyu yakiniku dinner", category: "eat", emoji: "🥩", note: "Grill-your-own premium Japanese beef." }
    ]
  },
  {
    id: "day5",
    date: "Sep 28",
    weekday: "Monday",
    city: "Tokyo",
    title: "Last Tokyo Day — Odaiba & Nightlife 🌃",
    items: [
      { name: "Odaiba: teamLab, Gundam statue, beach views", category: "do", emoji: "🤖", note: "Futuristic waterfront district." },
      { name: "Golden Gai bar hopping", category: "do", emoji: "🍶", note: "Tiny 4-seat bars packed into narrow alleys — go with the group!" },
      { name: "DiverCity Tokyo Plaza", category: "shop", emoji: "🛒", note: "Malls + the giant Gundam out front." },
      { name: "Tsukiji Outer Market snacks", category: "eat", emoji: "🍢", note: "Fresh seafood skewers, tamagoyaki, street food crawl." },
      { name: "Farewell Tokyo izakaya dinner", category: "eat", emoji: "🍻", note: "Order lots of small plates to share." }
    ]
  },
  {
    id: "day6",
    date: "Sep 29",
    weekday: "Tuesday",
    city: "Kyoto",
    title: "Bullet Train to Kyoto! 🚅",
    items: [
      { name: "Shinkansen (bullet train) Tokyo → Kyoto", category: "do", emoji: "🚄", note: "~2h15m, grab an ekiben (train bento) for the ride." },
      { name: "Fushimi Inari Shrine — thousand torii gates", category: "do", emoji: "⛩️", note: "Iconic orange gate tunnel, go early evening to avoid crowds." },
      { name: "Nishiki Market", category: "shop", emoji: "🏮", note: "\"Kyoto's Kitchen\" — food stalls, knives, ceramics." },
      { name: "Kyoto-style yudofu or kaiseki dinner", category: "eat", emoji: "🍲", note: "Refined multi-course Kyoto cuisine." },
      { name: "Matcha sweets & soft serve", category: "eat", emoji: "🍵", note: "Kyoto is the matcha capital — don't skip dessert." }
    ]
  },
  {
    id: "day7",
    date: "Sep 30",
    weekday: "Wednesday",
    city: "Kyoto",
    title: "Temples, Bamboo & Geisha Streets 🎋",
    items: [
      { name: "Arashiyama Bamboo Grove", category: "do", emoji: "🎋", note: "Towering bamboo path — go at sunrise for the best photos." },
      { name: "Tenryu-ji Temple gardens", category: "do", emoji: "🍁", note: "UNESCO site with a stunning strolling garden." },
      { name: "Gion district evening walk", category: "do", emoji: "👘", note: "Historic geisha district — you might spot a maiko!" },
      { name: "Rent a kimono for the day", category: "shop", emoji: "👘", note: "Rental shops near the temples, great photo memories." },
      { name: "Handmade chopsticks & pottery shops in Higashiyama", category: "shop", emoji: "🥢", note: "Along Sannenzaka & Ninenzaka stone streets." },
      { name: "Tofu kaiseki near Arashiyama", category: "eat", emoji: "🍱", note: "Delicate, Kyoto-style vegetarian-friendly meal." }
    ]
  },
  {
    id: "day8",
    date: "Oct 1",
    weekday: "Thursday",
    city: "Kyoto",
    title: "Golden Pavilion & Zen Gardens 🪷",
    items: [
      { name: "Kinkaku-ji (Golden Pavilion)", category: "do", emoji: "🪷", note: "The gold-leaf temple reflecting in its pond — iconic." },
      { name: "Ryoan-ji rock garden", category: "do", emoji: "🪨", note: "Famous minimalist zen rock garden, great for quiet reflection." },
      { name: "Philosopher's Path", category: "do", emoji: "🌸", note: "Canal-side walking path lined with cherry/maple trees." },
      { name: "Kyoto pottery & tea shops near Kiyomizu-dera", category: "shop", emoji: "🍵", note: "Pick up matcha whisks, teapots, and local crafts." },
      { name: "Kyoto ramen (rich shoyu-style)", category: "eat", emoji: "🍜", note: "Different broth style than Tokyo — worth comparing!" },
      { name: "Pontocho Alley dinner", category: "eat", emoji: "🏮", note: "Narrow lantern-lit alley along the river, tons of restaurant choices." }
    ]
  },
  {
    id: "day9",
    date: "Oct 2",
    weekday: "Friday",
    city: "Osaka",
    title: "On to Osaka — Food Capital! 🐙",
    items: [
      { name: "Train to Osaka (~30-45 min)", category: "do", emoji: "🚃", note: "Quick hop, check in and drop bags first." },
      { name: "Osaka Castle grounds", category: "do", emoji: "🏯", note: "Massive castle with a great park to walk around." },
      { name: "Dotonbori canal & Glico Running Man sign", category: "do", emoji: "🏃", note: "The iconic neon-lit photo spot." },
      { name: "Shinsaibashi shopping arcade", category: "shop", emoji: "🛍️", note: "Covered shopping street, huge variety of stores." },
      { name: "Takoyaki (octopus balls) street stalls", category: "eat", emoji: "🐙", note: "A must in Osaka — try a few different stalls and compare." },
      { name: "Okonomiyaki at a Dotonbori grill spot", category: "eat", emoji: "🥞", note: "Osaka-style savory pancake, cooked table-side." }
    ]
  },
  {
    id: "day10",
    date: "Oct 3",
    weekday: "Saturday",
    city: "Osaka",
    title: "Last Full Day — Kuromon & Kushikatsu 🍢",
    items: [
      { name: "Kuromon Ichiba Market", category: "do", emoji: "🦞", note: "Grazing market — fresh sushi, wagyu skewers, king crab." },
      { name: "Umeda Sky Building observatory", category: "do", emoji: "🌇", note: "Floating garden observatory with 360° skyline views." },
      { name: "Den Den Town (Osaka's Akihabara)", category: "shop", emoji: "🎮", note: "Electronics, anime goods, retro games." },
      { name: "Amerikamura vintage & streetwear shops", category: "shop", emoji: "👟", note: "Osaka's youth fashion district — sneakers & vintage." },
      { name: "Kushikatsu (fried skewers) in Shinsekai", category: "eat", emoji: "🍢", note: "Rule #1: no double-dipping the sauce!" },
      { name: "Farewell group dinner + karaoke night", category: "eat", emoji: "🎤", note: "End the trip with an all-you-can-sing karaoke room." }
    ]
  },
  {
    id: "day11",
    date: "Oct 4",
    weekday: "Sunday",
    city: "Osaka",
    title: "Sayonara, Japan! 👋",
    items: [
      { name: "Last-minute souvenir shopping", category: "shop", emoji: "🎁", note: "Kansai Airport also has great last-chance shops." },
      { name: "Grab an eki-bento for the road", category: "eat", emoji: "🍱", note: "One last train-station bento box." },
      { name: "Head to Kansai International Airport", category: "do", emoji: "🛫", note: "Safe travels home!" }
    ]
  }
];
