/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

interface ImportMetaEnv {
  /** Origin of the API when it is hosted separately, e.g. https://alles-klar-api.<account>.workers.dev */
  readonly VITE_API_URL?: string;
}
