import type { Episode } from "./Episode.ts";

export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  episode: Episode[];
}
