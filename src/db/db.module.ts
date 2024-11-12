import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseProviders } from './db.providers';

@Module({
    imports: [],
    providers: [...databaseProviders],
    exports: [...databaseProviders]
})
export class DatabaseModule {}