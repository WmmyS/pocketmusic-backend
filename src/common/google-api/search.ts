import { google } from 'googleapis';

export class Search {
  static async search(query: string) {
    const response = await google.customsearch('v1').cse.list({
      auth: 'AIzaSyCyP-1Wc8KiCaT6rWr2Cgr2fgNvj6zpwWA',
      cx: '01d8164ebea01ef0f',
      q: query,
    });

    return response.data;
  }
}
