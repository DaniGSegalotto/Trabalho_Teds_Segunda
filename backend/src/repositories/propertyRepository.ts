import { DataSource, In, Repository } from 'typeorm'
import PropertyEntity from '../entities/property'

class PropertyRepository implements PropertyRepository {
    private repository: Repository<PropertyEntity>

    constructor(dataSource: DataSource) {
        this.repository = dataSource.getRepository(PropertyEntity)
    }

    async create(property: Omit<PropertyEntity, 'id'>): Promise<PropertyEntity> {
        const newProperty = this.repository.create(property);
        return this.repository.save(newProperty);
    }

    async getAll(): Promise<PropertyEntity[]> {
        return this.repository.find()
    }
}

export default PropertyRepository;