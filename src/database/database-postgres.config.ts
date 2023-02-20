import { DataSource, DataSourceOptions } from 'typeorm'
import { databaseConfigMock } from './config/database-test.config'

export const databasePostgresOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'onebitfood_db',
  synchronize: false,
  logging: ['query'],
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/*.ts']
}

export class DataSourceSingleton {
  private static datasource: DataSource

  static getInstance(isTest = false) {
    const isEnvTest = process.env.NODE_ENV === 'test'
    const isRunningJEst = !!process.env.JEST_WORKER_ID
    isTest = isTest || isRunningJEst || isEnvTest

    if (!DataSourceSingleton.datasource) {
      DataSourceSingleton.datasource = new DataSource(
        isTest ? databaseConfigMock(__dirname) : databasePostgresOptions
      )
    }

    return DataSourceSingleton.datasource
  }

  static async getInstanceWithConnection(isTest = false) {
    const _dataSource = DataSourceSingleton.getInstance(isTest)
    if (!_dataSource.isInitialized) {
      await _dataSource.initialize()
    }
    return _dataSource
  }
}

export default new DataSource(databasePostgresOptions)
