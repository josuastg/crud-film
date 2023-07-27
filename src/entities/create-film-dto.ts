import { IsNotEmpty } from "class-validator";


export class CreateFilmDto {

    id_film: number;

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    genre: string;

    @IsNotEmpty()
    duration: number;

    @IsNotEmpty()
    synopsis: string;

    @IsNotEmpty()
    director: string;

    @IsNotEmpty()
    writer: string;

    @IsNotEmpty()
    film_img: string;

    @IsNotEmpty()
    trailer: string;

    @IsNotEmpty()
    language: string;
}