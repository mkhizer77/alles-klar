/** Public-folder URL that respects the deploy base path (e.g. /alles-klar/ on GitHub Pages). */
export const asset = (path: string) => import.meta.env.BASE_URL + path.replace(/^\//, '');
