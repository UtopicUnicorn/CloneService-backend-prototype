export interface CreateNomenclatureDto {
  readonly brand?: string;
  readonly model?: string;
  readonly width?: number;
  readonly profile?: number;
  readonly diameter?: number;
  readonly index?: string;
  readonly year?: number;
  readonly description?: string;
  readonly type?: string;
  readonly status?: string;
  readonly season?: string;
  user?: string;
}

// export interface CapsDto {
//   readonly brand?: string;
//   readonly model?: string;
//   readonly diameter?: string;
//   readonly color?: string;
//   readonly application?: string;
//   readonly type?: string;
// }
//
// export interface TiresDto {
//   readonly season?: string;
// }
