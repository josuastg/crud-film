import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('film')
export class Film {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    title: string;

    @Column()
    genre: string;

    @Column()
    duration: number; //minutes

    @Column()
    synopsis: string;

    @Column()
    director: string;

    @Column()
    writer: string;

    @Column()
    film_img: string; //link to image

    @Column()
    trailer: string; //link to trailer

    @Column()
    language: string;
}