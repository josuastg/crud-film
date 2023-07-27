import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import ormConfig from './config/orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmModule } from './modules/film.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [ormConfig],
    expandVariables: true
  }),
  TypeOrmModule.forRootAsync({
    useFactory: ormConfig
  }),
    FilmModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
