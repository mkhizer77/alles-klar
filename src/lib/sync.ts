// Port: where progress is synced to. The store only knows this interface.
import type { ApiClient, KvEntryDto } from './api';

export interface SyncBackend {
  pull(): Promise<KvEntryDto[]>;
  push(entries: KvEntryDto[]): Promise<KvEntryDto[]>;
}

export class ApiSyncBackend implements SyncBackend {
  private readonly api: ApiClient;
  constructor(api: ApiClient) {
    this.api = api;
  }
  async pull() {
    return (await this.api.pullKv()).entries;
  }
  async push(entries: KvEntryDto[]) {
    return (await this.api.pushKv(entries)).entries;
  }
}
