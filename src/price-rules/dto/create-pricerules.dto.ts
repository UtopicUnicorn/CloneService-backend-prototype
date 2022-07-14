export interface CreatePriceRulesDto {
  readonly name?: string;
  readonly percent?: number;
  readonly min?: number;
  readonly max?: number;
  user?: string;
}
