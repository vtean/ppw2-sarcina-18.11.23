const Event = require('../models').Event
const Location = require('../models').Location

class EventsRepository {
    async getAll(fields = undefined) {
        return await Event.findAll({
            attributes: fields,
            include: [{ model: Location, attributes: ['id', 'name', 'address'] }]
        })
    }

    async getOne(id) {
        return await Event.findByPk(id)
    }

    async create(event) {
        return await Event.create(event)
    }

    async update(id, event) {
        const existingEvent = await Event.findByPk(id)
        if (!existingEvent) return null;

        return await existingEvent.update(event);
    }

    async delete(id) {
        return await Event.destroy({
            where: { id: id }
        })
    }

    async getAllOfLocation(locationId, fields = undefined) {
        return await Event.findAll({
            where: { locationId }, // Filter by locationId
            attributes: fields
        });
    }
}

module.exports = new EventsRepository()