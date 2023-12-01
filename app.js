const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;
const piket = require("./utils/data");
const moment = require("moment");
const isLogin = require("./middleware/login");

app.set("view engine", "ejs");
app.use(expressLayouts);


app.get("/", (req, res) => {
  res.render("login", {
    title: "Login",
    layout: "layout/login",
  });
});

app.get("/dashboard", (req, res) => {
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
});

// app.get("/mahasiswa", (req, res) => {
//   const mahasiswa = [
//     {
//       nama: "Zacky Hafsari",
//       kelas: "2c informatika",
//     },
//     {
//       nama: "Abrar Wahid",
//       kelas: "2c informatika",
//     },
//     {
//       nama: "Ahmad Nur Ain",
//       kelas: "2c informatika",
//     },
//     {
//       nama: "Bayu Rismana",
//       kelas: "2c Seni Budaya",
//     },
//   ];
//   res.render("mahasiswa", {
//     layout: "layout/navbar",
//     title: "mahasiswa",
//     mahasiswa,
//   });
// });

app.get("/piket", (req, res) => {
  res.render("piket", {
    title: "Piket",
    layout: "layout/navbar",
    piket,
  });
});

app.get("/piket/daftar", (req, res) => {
  res.render("daftar", {
    title: "Daftar",
    layout: "layout/navbar",
  });
});

app.use("/", (req, res) => {
  res.send("Halaman tidak ditemukan");
});

app.listen(port, () => {
  console.log(`server sedang berjalan di http://localhost:${port}`);
});
