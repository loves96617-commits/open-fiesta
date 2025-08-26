export interface Model {
  id: string;
  name: string;
  provider: string;
  pricing: {
    input: string;
    output: string;
  };
  context?: string;
  gateway: Gateway;
  isFree: boolean;
}

export type Gateway = "openrouter" | "aimlapi" | "vercel";

export interface AIMLModel {
  id: string;
  type: string;
  info: Info;
  features: string[];
}

export interface Info {
  name: string;
  developer: string;
  description: string;
  contextLength: number;
  maxTokens: number;
  url: string;
}

export interface OpenRouterModel {
  id: string;
  canonical_slug: string;
  name: string;
  created: number;
  description: string;
  context_length: number;
  pricing: OpenRouterPricing;
  supported_parameters: string[];
}

export interface OpenRouterPricing {
  prompt: string;
  completion: string;
  request: string;
  image: string;
  web_search: string;
  internal_reasoning: string;
}

export interface VercelModel {
  id: string;
  object: string;
  created: number;
  owned_by: string;
  name: string;
  description: string;
  context_window: number;
  max_tokens: number;
  type: string;
  pricing: VercelPricing;
}

export interface VercelPricing {
  input: string;
  output: string;
}
