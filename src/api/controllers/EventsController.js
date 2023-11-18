const EventsService = require('../services/EventsService')

class EventsController{
    async getAll(req, res){
        try{
            return await res.status(200).json(await EventsService.getAll([
                'id',
                'name',
                'description',
                'startAt',
                'locationId'
            ]))
        } catch (error){
            return await res.status(500).json(JSON.stringify(error))
        }
    }

    async getOne(req, res){
        try{
            const event = await EventsService.getOne(req.params.id)
            if (!event) return res.status(404).json()
            
            return res.status(200).json(event)
        } catch(error) {
            return res.status(500).json(JSON.stringify(error))
        }
    }

    async create(req, res){
        try {
            return res.status(200).json(await EventsService.create(req.body));
        } catch(error) {
            return res.status(400).json(JSON.stringify(error))
        }
    }

    async update(req, res){
        try{
            const existingEvent = await EventsService.getOne(req.params.id)
            if (!existingEvent) return res.status(404).json();

            return res.status(200).json(await existingEvent.update(req.body));
        } catch (error){
            return res.status(400).json(JSON.stringify(error))
        }
    }

    async delete(req, res){
        try{
            return res.status(200).json(await EventsService.delete(req.params.id))
        } catch (error) {
            return res.status(400).json(JSON.stringify(error))
        }
    }

    async getAllOfLocation(req, res) {
        try {
            const locationId = req.params.locationId;
            const eventsOfLocation = await EventsService.getAllOfLocation(locationId, [
                'id',
                'name',
                'description',
                'startAt',
                'locationId'
            ]);
            
            return res.status(200).json(eventsOfLocation);
        } catch (error) {
            return res.status(500).json(JSON.stringify(error));
        }
    }
}

module.exports = new EventsController()