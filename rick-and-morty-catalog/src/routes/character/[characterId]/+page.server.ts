import { client } from "$lib/graphql/client.js";
import { GET_CHARACTER_DETAILS } from "$lib/graphql/queries.ts";
import { error } from "@sveltejs/kit";

export async function load({ params }: any) {
  const { characterId } = params;
  try {
    const response = await client
      .query(GET_CHARACTER_DETAILS, {
        id: characterId,
      })
      .toPromise();

    if (!response.data || !response.data.character) {
      throw error(404, "Character not found");
    }
    return {
      character: response.data.character,
    };
  } catch (err) {
    console.error(err);
    throw error(500, "Failed to fetch character data");
  }
}
