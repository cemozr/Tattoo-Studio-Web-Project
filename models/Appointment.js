const mongoose = require('mongoose')

const AppointmentSchema = new mongoose.Schema({
    ad: {type: String, require:true},
    soyad: {type: String, require:true},
    eposta: {type: String, require:true},
    tel: {type:String, require:true},
    dovme_tarzi: {type:String },
    dovme_rengi: {type:String },
    dovme_boyutu: {type:String },
    ozel_durum: {type:String },

})

module.exports = mongoose.model('Appointment', AppointmentSchema)