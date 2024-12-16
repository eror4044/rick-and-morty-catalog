import { client } from "$lib/graphql/client.js";
import { GET_EPISODE_DETAILS } from "$lib/graphql/queries.js";
import { error } from "@sveltejs/kit";

export async function load({ params }: any) {
  const { episodeId } = params;

  try {    
    const response = await client
      .query(GET_EPISODE_DETAILS, { id: episodeId }).toPromise();

    if (!response.data || !response.data.episode) {
      throw error(404, "Episode not found");
    }

    return {
      episode: response.data.episode,
    };
  } catch (err) {
    console.error(err);
    throw error(500, "Failed to fetch episode data");
  }
}
