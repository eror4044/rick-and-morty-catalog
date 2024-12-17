import type { Character } from "./Character.ts";

export interface Episode {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  created: string;
  characters: Character[];
}
