import { google } from 'googleapis';

export class Search {
  static async search(query: string) {
    const response = await google.customsearch('v1').cse.list({
      auth: process.env.GOOGLE_API_KEY,
      cx: process.env.GOOGLE_ENG_ID,
      q: query,
    });

    return response.data;
  }
}
