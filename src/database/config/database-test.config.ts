import { DataSourceOptions } from 'typeorm'

export const databaseConfigMock = (
  dirname: string,
  entities = []
): DataSourceOptions => ({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'onebitfood_db_test',
  entities: [dirname + '/../**/*.entity{.ts,.js}', ...entities],
  synchronize: true
})
