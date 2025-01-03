'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane, {
        foreignKey: 'airplaneId',
        as: "airplane_details"
      });
      this.belongsTo(models.Airport, {
        foreignKey: 'departureAirportCode',
        as: "airport_departure_details",
      });
      this.belongsTo(models.Airport, {
        foreignKey: 'arrivalAirportCode',
        as: "airport_arrival_details",
      });
    }
  }
  Flight.init({
    flightNumber:
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    airplaneId:
    {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    departureAirportCode:
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    arrivalAirportCode:
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    arrivalTime:
    {
      type: DataTypes.DATE,
      allowNull: false
    },
    departureTime:
    {
      type: DataTypes.DATE,
      allowNull: false
    },
    price:
    {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    boardingGate:
    {
      type: DataTypes.STRING
    },
    totalSeats: // total remaining sheet
    {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};