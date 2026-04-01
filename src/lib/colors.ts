export interface IconicColor {
  id: string;
  name: string;
  category: string;
  hex: string;
  hint: string;
}

export const iconicColors: IconicColor[] = [
  // Characters
  {
    id: "pikachu-yellow",
    name: "Pikachu Yellow",
    category: "Characters",
    hex: "#FDD835",
    hint: "The electric mouse's signature shade",
  },
  {
    id: "sonic-blue",
    name: "Sonic Blue",
    category: "Characters",
    hex: "#0066CC",
    hint: "Gotta go fast!",
  },
  {
    id: "mario-red",
    name: "Mario Red",
    category: "Characters",
    hex: "#E52521",
    hint: "It's-a me!",
  },
  {
    id: "luigi-green",
    name: "Luigi Green",
    category: "Characters",
    hex: "#4DAD3B",
    hint: "The taller brother's color",
  },
  {
    id: "minion-yellow",
    name: "Minion Yellow",
    category: "Characters",
    hex: "#FED901",
    hint: "Banana!",
  },
  {
    id: "shrek-green",
    name: "Shrek Green",
    category: "Characters",
    hex: "#7CB342",
    hint: "Get out of my swamp!",
  },
  {
    id: "spongebob-yellow",
    name: "SpongeBob Yellow",
    category: "Characters",
    hex: "#FFF44F",
    hint: "Who lives in a pineapple under the sea?",
  },
  {
    id: "barbie-pink",
    name: "Barbie Pink",
    category: "Characters",
    hex: "#E0218A",
    hint: "Life in plastic, it's fantastic",
  },
  {
    id: "kermit-green",
    name: "Kermit Green",
    category: "Characters",
    hex: "#5FAD41",
    hint: "It's not easy being this color",
  },

  // Brands - Tech
  {
    id: "apple-space-gray",
    name: "Apple Space Gray",
    category: "Tech",
    hex: "#7D7D7D",
    hint: "The premium laptop shade",
  },
  {
    id: "spotify-green",
    name: "Spotify Green",
    category: "Tech",
    hex: "#1DB954",
    hint: "Streaming millions of songs",
  },
  {
    id: "facebook-blue",
    name: "Facebook Blue",
    category: "Tech",
    hex: "#1877F2",
    hint: "Mark's social network",
  },
  {
    id: "twitter-blue",
    name: "Twitter Blue",
    category: "Tech",
    hex: "#1DA1F2",
    hint: "The bird app (before X)",
  },
  {
    id: "youtube-red",
    name: "YouTube Red",
    category: "Tech",
    hex: "#FF0000",
    hint: "Broadcast yourself",
  },
  {
    id: "netflix-red",
    name: "Netflix Red",
    category: "Tech",
    hex: "#E50914",
    hint: "And chill",
  },
  {
    id: "discord-blurple",
    name: "Discord Blurple",
    category: "Tech",
    hex: "#5865F2",
    hint: "Your place to talk",
  },
  {
    id: "twitch-purple",
    name: "Twitch Purple",
    category: "Tech",
    hex: "#9146FF",
    hint: "Live streaming for gamers",
  },
  {
    id: "slack-aubergine",
    name: "Slack Aubergine",
    category: "Tech",
    hex: "#4A154B",
    hint: "Where work happens",
  },

  // Brands - Food & Drink
  {
    id: "coca-cola-red",
    name: "Coca-Cola Red",
    category: "Food & Drink",
    hex: "#F40009",
    hint: "The real thing",
  },
  {
    id: "tiffany-blue",
    name: "Tiffany Blue",
    category: "Fashion",
    hex: "#0ABAB5",
    hint: "Little blue box",
  },
  {
    id: "mcdonalds-red",
    name: "McDonald's Red",
    category: "Food & Drink",
    hex: "#DA291C",
    hint: "I'm lovin' it",
  },
  {
    id: "mcdonalds-yellow",
    name: "McDonald's Yellow",
    category: "Food & Drink",
    hex: "#FFC72C",
    hint: "The golden arches",
  },
  {
    id: "starbucks-green",
    name: "Starbucks Green",
    category: "Food & Drink",
    hex: "#006241",
    hint: "Can I get your name?",
  },
  {
    id: "pepsi-blue",
    name: "Pepsi Blue",
    category: "Food & Drink",
    hex: "#004B93",
    hint: "The cola wars rival",
  },
  {
    id: "fanta-orange",
    name: "Fanta Orange",
    category: "Food & Drink",
    hex: "#FF7900",
    hint: "Don't you wanna?",
  },
  {
    id: "monster-green",
    name: "Monster Energy Green",
    category: "Food & Drink",
    hex: "#95D600",
    hint: "Unleash the beast",
  },
  {
    id: "redbull-blue",
    name: "Red Bull Blue",
    category: "Food & Drink",
    hex: "#1E3D6B",
    hint: "Gives you wings",
  },

  // Sports
  {
    id: "ferrari-red",
    name: "Ferrari Red",
    category: "Sports",
    hex: "#DC0000",
    hint: "The prancing horse",
  },
  {
    id: "lakers-purple",
    name: "Lakers Purple",
    category: "Sports",
    hex: "#552583",
    hint: "Showtime in LA",
  },
  {
    id: "yankees-navy",
    name: "Yankees Navy",
    category: "Sports",
    hex: "#003087",
    hint: "27 championships",
  },
  {
    id: "john-deere-green",
    name: "John Deere Green",
    category: "Brands",
    hex: "#367C2B",
    hint: "Nothing runs like it",
  },

  // Fashion & Luxury
  {
    id: "hermes-orange",
    name: "Hermès Orange",
    category: "Fashion",
    hex: "#FF6600",
    hint: "Luxury horse and carriage",
  },
  {
    id: "burberry-tan",
    name: "Burberry Tan",
    category: "Fashion",
    hex: "#D9C4A9",
    hint: "British plaid heritage",
  },
  {
    id: "louboutin-red",
    name: "Louboutin Red",
    category: "Fashion",
    hex: "#E62020",
    hint: "Red bottom shoes",
  },

  // Classic / Cultural
  {
    id: "post-it-yellow",
    name: "Post-it Yellow",
    category: "Office",
    hex: "#FEFF9C",
    hint: "Sticky notes everywhere",
  },
  {
    id: "construction-orange",
    name: "Safety Orange",
    category: "Classic",
    hex: "#FF6700",
    hint: "Caution! Work zone ahead",
  },
  {
    id: "tennis-ball-yellow",
    name: "Tennis Ball Yellow",
    category: "Sports",
    hex: "#CCFF00",
    hint: "Game, set, match",
  },
  {
    id: "ups-brown",
    name: "UPS Brown",
    category: "Brands",
    hex: "#4C3223",
    hint: "What can brown do for you?",
  },
  {
    id: "t-mobile-magenta",
    name: "T-Mobile Magenta",
    category: "Tech",
    hex: "#E20074",
    hint: "The un-carrier",
  },
  {
    id: "ikea-blue",
    name: "IKEA Blue",
    category: "Brands",
    hex: "#0058A3",
    hint: "Swedish flat-pack furniture",
  },
  {
    id: "ikea-yellow",
    name: "IKEA Yellow",
    category: "Brands",
    hex: "#FFCC00",
    hint: "Meatballs and KALLAX",
  },
];

export function getRandomColors(count: number): IconicColor[] {
  const shuffled = [...iconicColors].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) {
    return { r: 0, g: 0, b: 0 };
  }
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
}

export function rgbToHex(r: number, g: number, b: number): string {
  return (
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = Math.round(x).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
}

// Calculate color difference using Delta E (CIE76 formula)
// Returns a value from 0 (identical) to ~100+ (very different)
export function calculateDeltaE(hex1: string, hex2: string): number {
  const rgb1 = hexToRgb(hex1);
  const rgb2 = hexToRgb(hex2);

  // Convert RGB to Lab
  const lab1 = rgbToLab(rgb1.r, rgb1.g, rgb1.b);
  const lab2 = rgbToLab(rgb2.r, rgb2.g, rgb2.b);

  // Calculate Delta E
  const deltaL = lab1.l - lab2.l;
  const deltaA = lab1.a - lab2.a;
  const deltaB = lab1.b - lab2.b;

  return Math.sqrt(deltaL * deltaL + deltaA * deltaA + deltaB * deltaB);
}

function rgbToLab(
  r: number,
  g: number,
  b: number
): { l: number; a: number; b: number } {
  // Convert RGB to XYZ
  let rNorm = r / 255;
  let gNorm = g / 255;
  let bNorm = b / 255;

  rNorm = rNorm > 0.04045 ? Math.pow((rNorm + 0.055) / 1.055, 2.4) : rNorm / 12.92;
  gNorm = gNorm > 0.04045 ? Math.pow((gNorm + 0.055) / 1.055, 2.4) : gNorm / 12.92;
  bNorm = bNorm > 0.04045 ? Math.pow((bNorm + 0.055) / 1.055, 2.4) : bNorm / 12.92;

  rNorm *= 100;
  gNorm *= 100;
  bNorm *= 100;

  const x = rNorm * 0.4124 + gNorm * 0.3576 + bNorm * 0.1805;
  const y = rNorm * 0.2126 + gNorm * 0.7152 + bNorm * 0.0722;
  const z = rNorm * 0.0193 + gNorm * 0.1192 + bNorm * 0.9505;

  // Convert XYZ to Lab (using D65 illuminant)
  let xNorm = x / 95.047;
  let yNorm = y / 100.0;
  let zNorm = z / 108.883;

  xNorm = xNorm > 0.008856 ? Math.pow(xNorm, 1 / 3) : 7.787 * xNorm + 16 / 116;
  yNorm = yNorm > 0.008856 ? Math.pow(yNorm, 1 / 3) : 7.787 * yNorm + 16 / 116;
  zNorm = zNorm > 0.008856 ? Math.pow(zNorm, 1 / 3) : 7.787 * zNorm + 16 / 116;

  return {
    l: 116 * yNorm - 16,
    a: 500 * (xNorm - yNorm),
    b: 200 * (yNorm - zNorm),
  };
}

// Convert Delta E to a percentage score (0-100)
// Delta E of 0 = 100%, Delta E of 100 = 0%
export function deltaEToPercentage(deltaE: number): number {
  // Use a curve that's more forgiving for small differences
  // but drops quickly for large differences
  const maxDeltaE = 100;
  const percentage = Math.max(0, 100 - (deltaE / maxDeltaE) * 100);
  return Math.round(percentage);
}

// Get a rating based on Delta E
export function getAccuracyRating(deltaE: number): {
  rating: string;
  emoji: string;
  description: string;
} {
  if (deltaE < 1) {
    return { rating: "Perfect", emoji: "🎯", description: "Identical to the human eye!" };
  } else if (deltaE < 3) {
    return { rating: "Excellent", emoji: "⭐", description: "Barely noticeable difference" };
  } else if (deltaE < 6) {
    return { rating: "Great", emoji: "👏", description: "Slight difference, still impressive" };
  } else if (deltaE < 12) {
    return { rating: "Good", emoji: "👍", description: "Noticeable but close" };
  } else if (deltaE < 25) {
    return { rating: "Okay", emoji: "🤔", description: "Getting warmer..." };
  } else if (deltaE < 50) {
    return { rating: "Far", emoji: "😬", description: "Quite different" };
  } else {
    return { rating: "Way Off", emoji: "💀", description: "Not even close!" };
  }
}
