import { client } from "$lib/graphql/client.js";
import { SEARCH_QUERY } from "$lib/graphql/queries.js";
import { json, fail } from "@sveltejs/kit";

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("query");

    if (!name) {
      return fail(400, { error: "Query must be at least 3 characters" });
    }

    try {
      const response = await client.query(SEARCH_QUERY, { name });

      const characters = response.data.characters.results || null
      const episodes = response.data.episodes.results || null

      if (characters.length === 0 && episodes.length === 0) {
        return fail(404, { results: [], error: "No results found" });
      }

      return {
        characters,
        episodes,
      };
    } catch (err) {
      return fail(500, { error: "Failed to fetch data" });
    }
  },
};
