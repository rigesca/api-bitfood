import { DataSource, DeepPartial, EntityTarget } from 'typeorm'

export const clearTablesOrderedDirect = async (
  conn: DataSource,
  entities = []
) => {
  await conn.query(
    entities.map(entity => `DELETE FROM "${entity}" CASCADE`).join('; ')
  )
}

export const createFromEntity = async <T>(
  conn: DataSource,
  entity: EntityTarget<T>,
  mock: any
): Promise<T> => {
  const repository = conn.getRepository(entity)
  const createdEntity = repository.create(mock) as unknown as DeepPartial<T>

  return await repository.save(createdEntity)
}
