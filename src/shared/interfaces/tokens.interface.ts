import { Role } from 'shared/enums/role.enum';

export interface DecodedTokenI {
  sub: string;
  role: Role;
  iat: number;
  exp: number;
}
export interface TokenPayloadI {
  sub: string;
}
