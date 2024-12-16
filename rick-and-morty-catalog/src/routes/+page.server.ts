import { client } from "$lib/graphql/client.ts";
import { GET_EPISODES_PAGE } from "$lib/graphql/queries.ts";
import { error } from "@sveltejs/kit";

interface Episode {
  id: string;
  name: string;
  episode: string;
  air_date: string;
}



export async function load() {
  try {
    let allEpisodes = [];
    let nextPage = 1;

    while (nextPage) {
      const response = await client
        .query(GET_EPISODES_PAGE, { page: nextPage })
        .toPromise();

      if (!response.data || !response.data.episodes) {
        throw error(500, "Failed to fetch episodes");
      }

      const { results, info } = response.data.episodes;

      allEpisodes = [...allEpisodes, ...results];
      nextPage = info.next;
    }

    const seasons = allEpisodes.reduce((acc, episode) => {
      const season = episode.episode.match(/S(\d{2})/)?.[1];
      if (season) {
        acc[season] = acc[season] || [];
        acc[season].push(episode);
      }
      return acc;
    }, {});

    return { seasons };
  } catch (err) {
    console.error("Error loading episodes:", err);
    throw error(500, "Failed to fetch episodes");
  }
}
