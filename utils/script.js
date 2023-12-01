const moment = require("moment");
moment.locale("id");
const sekarang = moment();
const hari = sekarang.format("dddd");
const jam = parseFloat(sekarang.format("HH:mm"));

