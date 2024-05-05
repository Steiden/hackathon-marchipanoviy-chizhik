export const BASE_URL:string = 'https://restcountries.eu/rest/v2/all';

export const endpoints: Record<string, string> = {
    search: `${BASE_URL}/search`,
    name: `${BASE_URL}/name`,
    code: `${BASE_URL}/alpha`,
}