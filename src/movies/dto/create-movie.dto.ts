import { IsNumber, IsOptional, IsString } from 'class-validator';
//사람들이 보냈으면 하는 틀
export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  //장르를 꼭 안넣고 싶으면
  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}
