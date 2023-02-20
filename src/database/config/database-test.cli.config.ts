import { DataSource } from 'typeorm'
import { databaseConfigMock } from './database-test.config'

export default new DataSource(databaseConfigMock(__dirname))
