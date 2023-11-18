'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Event extends Model {
        static associate(models) {
            Event.belongsTo(models.Location)
        }
    }
    Event.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING(100)
            },
            description: {
                type: DataTypes.TEXT
            },
            startAt: {
                type: DataTypes.DATE
            },
            locationId: {
                type: DataTypes.INTEGER
            },
        },
        {
            sequelize,
            modelName: 'Event'
        });
    return Event;
};