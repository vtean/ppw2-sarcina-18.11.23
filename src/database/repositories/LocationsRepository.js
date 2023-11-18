const Location = require('../models').Location

class LocationsRepository {
    async getAll(fields = undefined) {
        return await Location.findAll({attributes: fields})
    }

    async getOne(id) {
        return await Location.findByPk(id)
    }

    async create(location) {
        return await Location.create(location)
    }

    async update(id, location) {
        const existingLocation = await Location.findByPk(id)
        if (!existingLocation) return null;
        
        return await existingLocation.update(location);
    }

    async delete(id) {
        return await Location.destroy({
            where: { id: id }
        })
    }
}

module.exports = new LocationsRepository()