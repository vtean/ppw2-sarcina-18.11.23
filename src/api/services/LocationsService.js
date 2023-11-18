const LocationsRepository = require('../../database/repositories/LocationsRepository');

class LocationsService {
    async getAll(fields = undefined) {
        return await LocationsRepository.getAll(fields)
    }

    async getOne(id) {
        return await LocationsRepository.getOne(id)
    }

    async create(location) {
        return await LocationsRepository.create(location)
    }

    async update(id, location) {
        const existingLocation = await LocationsRepository.getOne(id)
        if (!existingLocation) return null;
        
        return await existingLocation.update(location);
    }

    async delete(id) {
        return await LocationsRepository.delete(id)
    }
}

module.exports = new LocationsService()