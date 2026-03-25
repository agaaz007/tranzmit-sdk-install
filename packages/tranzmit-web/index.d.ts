export type TranzmitWidgetConfig = {
  apiKey: string;
  endpoint: string;
  distinctId: string;
  interviewApiKey?: string;
  pollInterval?: number;
  scriptUrl?: string;
};

export type TranzmitReplayConfig = {
  apiKey: string;
  endpoint: string;
  scriptUrl?: string;
  rrwebUrl?: string;
};

export type RemoveOptions = {
  preserveConfig?: boolean;
};

export function normalizeEndpoint(endpoint: string): string;
export function installTranzmitWidget(config: TranzmitWidgetConfig): Promise<HTMLScriptElement | null>;
export function updateTranzmitWidgetConfig(partialConfig: Partial<TranzmitWidgetConfig>): TranzmitWidgetConfig | null;
export function removeTranzmitWidget(options?: RemoveOptions): void;
export function installTranzmitReplay(config: TranzmitReplayConfig): Promise<HTMLScriptElement | null>;
export function updateTranzmitReplayConfig(partialConfig: Partial<TranzmitReplayConfig>): TranzmitReplayConfig | null;
export function removeTranzmitReplay(options?: RemoveOptions): void;
