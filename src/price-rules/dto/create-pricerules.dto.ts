export interface CreatePriceRulesDto {
  // readonly id?: string;
  readonly name: string;
  readonly percent: number;
  readonly min: number;
  readonly max: number;
  user?: string;
}
