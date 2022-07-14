export interface CreatePurchasesDto {
  readonly organization?: string;
  readonly supplier?: string;
  readonly stock?: string;
  // readonly interval?: string;
  readonly sum?: number;
  readonly partner: string;
  readonly item?: string;
  readonly document?: string;
  user?: string;
}
