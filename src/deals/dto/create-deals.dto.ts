export interface CreateDealsDto {
  readonly number?: string;
  readonly price?: number;
  readonly partner?: string;
  readonly item?: string;
  readonly state?: string;
  readonly amount?: number;
  user?: string;
}
