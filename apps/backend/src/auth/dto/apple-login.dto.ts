import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AppleLoginDto {
  @IsNotEmpty()
  @IsString()
  identityToken: string;

  @IsOptional()
  @IsString()
  authorizationCode?: string;

  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;
}
