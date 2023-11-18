const LocationsService = require('../services/LocationsService')

class LocationsController{
    async getAll(req, res){
        try{
            return await res.status(200).json(await LocationsService.getAll([
                'id',
                'name',
                'address'
            ]))
        } catch (error){
            return await res.status(500).json(JSON.stringify(error))
        }
    }

    async getOne(req, res){
        try{
            const location = await LocationsService.getOne(req.params.id)
            if (!location) return res.status(404).json()
            
            return res.status(200).json(location)
        } catch(error) {
            return res.status(500).json(JSON.stringify(error))
        }
    }

    async create(req, res){
        try {
            return res.status(200).json(await LocationsService.create(req.body));
        } catch(error) {
            return res.status(400).json(JSON.stringify(error))
        }
    }

    async update(req, res){
        try{
            const existingLocation = await LocationsService.getOne(req.params.id)
            if (!existingLocation) return res.status(404).json();
            
            return res.status(200).json(await existingLocation.update(req.body));
        } catch (error){
            return res.status(400).json(JSON.stringify(error))
        }
    }

    async delete(req, res){
        try{
            return res.status(200).json(await LocationsService.delete(req.params.id))
        } catch (error) {
            return res.status(400).json(JSON.stringify(error))
        }
    }
}

module.exports = new LocationsController()