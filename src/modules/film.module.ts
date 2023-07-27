import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Film } from 'src/entities/film';
import { FilmController } from 'src/controller/film.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([Film])],
    controllers: [FilmController]
})
export class FilmModule { }
