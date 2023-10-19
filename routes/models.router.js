const express = require('express')

const routesAuth = require('./auth.routes')
const routesCustomer = require('./customer.routes')
const routesVehicle = require('./vehicle.routes')
const routesEmployee = require('./employee.routes')
const routesMechanic = require('./mechanic.routes')
const routesService = require('./service.routes')
const routesConfiguration = require('./configuration.routes')

function routerModels(app) {
  const router = express.Router()

  app.use('/api/v1', router)
  router.use('/auth', routesAuth)
  router.use('/customers', routesCustomer)
  router.use('/vehicles', routesVehicle)
  router.use('/employees', routesEmployee)
  router.use('/mechanics', routesMechanic)
  router.use('/services', routesService)
  router.use('/configurations', routesConfiguration)// formulario para los datos de la empresa
}

module.exports = routerModels