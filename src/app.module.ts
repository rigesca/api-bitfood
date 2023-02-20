import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { databasePostgresOptions } from './database/database-postgres.config'

@Module({
  imports: [TypeOrmModule.forRoot(databasePostgresOptions)],
  controllers: [],
  providers: []
})
export class AppModule {}
