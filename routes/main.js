const express = require('express')
const router = express.Router()
const Appointment = require('../models/Appointment')

router.get('/', (req,res) => {
    res.render('pages/index');
  })
  router.get('/calismalarimiz', (req,res) => {
    res.render('pages/calismalarimiz');
  })
  router.get('/randevu', (req,res) => {
    res.render('pages/randevu');
  })
  router.get('/s-s-s', (req,res) => {
    res.render('pages/s-s-s');
  })
 
  router.post('/appointments/test', (req,res) => {
    Appointment.create(req.body)
    res.redirect('/')
  })
  
  module.exports = router