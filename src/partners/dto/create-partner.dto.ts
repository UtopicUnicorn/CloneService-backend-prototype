export interface CreatePartnerDto {
  readonly name: string;
  readonly surname: string;
  readonly parentname: string;
  readonly phone: string;
  readonly mail: string;
  readonly priceRule: string;
  readonly payNumber: string;
  readonly bik: string;
  readonly kpp: string;
  readonly address: string;
  readonly inn: string;
  readonly bank: string;
  readonly type?: string;
  user?: string;
}
