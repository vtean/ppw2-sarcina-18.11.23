const EventsRepository = require('../../database/repositories/EventsRepository');

class EventsService {
    async getAll(fields = undefined) {
        return await EventsRepository.getAll(fields)
    }

    async getOne(id) {
        return await EventsRepository.getOne(id)
    }

    async create(event) {
        return await EventsRepository.create(event)
    }

    async update(id, event) {
        const existingLocation = await EventsRepository.getOne(id)
        if (!existingLocation) return null;
        
        return await existingLocation.update(event);
    }

    async delete(id) {
        return await EventsRepository.delete(id)
    }

    async getAllOfLocation(locationId, fields = undefined) {
        return await EventsRepository.getAllOfLocation(locationId, fields);
    }
}

module.exports = new EventsService()