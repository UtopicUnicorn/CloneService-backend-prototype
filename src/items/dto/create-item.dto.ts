export interface CreateItemDto {
  // readonly brand?: string;
  // readonly model?: string;
  // readonly width?: number;
  // readonly profile?: string;
  // readonly diameter?: number;
  // readonly status?: string;
  readonly item?: string;
  readonly store?: string;
  readonly amount?: number;
  readonly price?: number;
  image?: string;
  user?: string;
}
