export interface Hero {
    id: number;
    name: string;
    powerstats: {
      intelligence: number;
      strength: number;
      speed: number;
      durability: number;
      power: number;
      combat: number;
    };
    biography: {
      fullName: string;
      aliases: string[];
      firstAppearance: string;
      publisher: string;
    };
  }
  