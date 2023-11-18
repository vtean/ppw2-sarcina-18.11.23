'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Location extends Model {
        static associate(models) {
            Location.hasMany(models.Event)
        }
    }
    Location.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING(50)
            },
            address: {
                type: DataTypes.STRING(255)
            }
        },
        {
            sequelize,
            modelName: 'Location'
        });
    return Location;
};