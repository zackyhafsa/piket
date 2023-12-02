const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;
const { login, dashboard, daftarPiket, tambahPiket } = require("./utils/routes");

app.set("view engine", "ejs");
app.use(expressLayouts);

app.get("/", login);

app.get("/dashboard", dashboard);

app.get("/piket", daftarPiket);

app.get("/piket/daftar", tambahPiket);

app.use("/", (req, res) => {
  res.send("Halaman tidak ditemukan");
});

app.listen(port, () => {
  console.log(`server sedang berjalan di http://localhost:${port}`);
});
