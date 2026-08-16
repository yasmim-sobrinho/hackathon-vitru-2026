/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AGENT_MODE?: 'mock' | 'agentforce';
  readonly VITE_SF_INSTANCE_URL?: string;
  readonly VITE_SF_AGENT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
