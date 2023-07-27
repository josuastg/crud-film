import { Controller, Get, NotFoundException, Param, Post, Body, ValidationPipe, Put, Delete, HttpCode } from "@nestjs/common";
import { Film } from "src/entities/film";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateFilmDto } from "src/entities/create-film-dto";
import { UpdateFilmDto } from "src/entities/update-film-dto";

@Controller('/film')
export class FilmController {
    constructor(
        @InjectRepository(Film)
        private readonly repository: Repository<Film>,
    ) { }

    @Get()
    async findAll() {
        return await this.repository.find();
    }

    @Get(':id')
    async findOne(@Param('id') id) {
        const film = await this.repository.findOneBy({ id });
        if (!film) {
            throw new NotFoundException('Film tidak ditemukan');
        }
        return film;
    }

    @Post('/create')
    async createFilm(@Body(ValidationPipe) payload: CreateFilmDto) {
        const film = await this.repository.save({ ...payload });
        return film;
    }

    @Put('/update/:id')
    async updateFilm(@Param('id') id, @Body(ValidationPipe) payload: UpdateFilmDto) {
        const film = await this.repository.findOneBy({ id });
        if (!film) {
            throw new NotFoundException('Film tidak ditemukan');
        }
        return this.repository.save({ ...film, ...payload });
    }

    @Delete('/delete/:id')
    @HttpCode(204)
    async remove(@Param('id') id) {
        const film = await this.repository.findOneBy({ id });
        if (!film) {
            throw new NotFoundException();
        }
        await this.repository.remove(film);
    }
}