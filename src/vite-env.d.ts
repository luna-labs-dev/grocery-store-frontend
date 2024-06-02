/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PORT: string;
  readonly VITE_CLIENT_ID: string;
  readonly VITE_SECRET_KEY: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
