import { Module } from '@nestjs/common';
import { PessoasService } from './pessoas.service';
import { PessoasController } from './pessoas.controller';
import { DatabaseModule } from 'src/db/db.module';
import { EstadoEntity } from './entities/estado.entity';
//import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [EstadoEntity, DatabaseModule],
  controllers: [PessoasController],
  providers: [PessoasService],
})
export class PessoasModule {}
