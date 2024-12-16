import type { Episode } from "./Episode.ts";

export interface Season {
  seasonNumber: string;
  episodes: Episode[];
}
