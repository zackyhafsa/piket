const moment = require("moment");
const piket = require("./data");

const login = (req, res) => {
  res.render("login", {
    title: "Login",
    layout: "layout/login",
  });
};

const dashboard = (req, res) => {
  moment.locale("id");
  const sekarang = moment();
  const hari = sekarang.format("dddd");
  const jam = parseFloat(sekarang.format("HH:mm"));
  const waktu = sekarang.format("llll");

  res.render("home", {
    title: "Dashboard",
    layout: "layout/navbar",
    piket,
    hari,
    waktu,
    jam,
    i: 1,
    sesi1: "09:00-12:00",
    sesi2: "13:00-15:00",
  });
};

const daftarPiket = (req, res) => {
  res.render("piket", {
    title: "Piket",
    layout: "layout/navbar",
    piket,
  });
};

const tambahPiket = (req, res) => {
  res.render("daftar", {
    title: "Daftar",
    layout: "layout/navbar",
  });
};

module.exports = { login, dashboard, daftarPiket, tambahPiket };
