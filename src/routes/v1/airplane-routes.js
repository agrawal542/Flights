const express = require("express");
const { AirplaneController } = require("../../controllers");
const { AirplaneMiddleware } = require("../../middlewares");

const router = express.Router();

// /api/v1/airplanes  POST
router.post('/', AirplaneMiddleware.validCreateRequest, AirplaneController.createAirplane)

// /api/v1/airplanes  GET
router.get('/', AirplaneController.getAirplanes)

// /api/v1/airplanes/:id  GET
router.get('/:id', AirplaneController.getAirplane)

// /api/v1/airplanes/:id  DELETE
router.delete('/:id', AirplaneController.deleteAirplane)

// /api/v1/airplanes/:id  PATCH
router.patch('/', AirplaneController.updateAirplane)

module.exports = router;