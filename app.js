const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');

// set dynamic views file / untuk membaca file dalam folder views
app.set('views', path.join(__dirname, 'views'));
// set views engine / untuk membaca file hbs dan bisa untuk di render
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({
  extended: false
}))

// set public file / membaca folder static untuk bisa membaca file css maupun jquery
app.use(express.static('public'))

// file index / Home
app.get('/', (req, res) => {
  res.render('index');
});

// persegi
app.get('/persegi', (req, res) => {
  res.render('persegi');
})
// menghitung keliling
app.post('/kPersegi', (req, res) => {
  const s = req.body.sisi;
  const h = 4 * s;
  res.render('hp', {
    sisi: s,
    hasil: h
  })
})
// menghitung luas
app.post('/lPersegi', (req, res) => {
  const s = req.body.sisi;
  const h = s * s;
  res.render('hp', {
    sisi: s,
    hasil: h
  })
})

// Persegi Panjang
app.get('/persegiPanjang', (req, res) => {
  res.render('persegiPanjang')
})

// Menghitung Keliling
app.post('/kpPanjang', (req, res) => {
  const p = req.body.panjang;
  const l = req.body.lebar;
  const h = (2 * p) + (2 * l);
  res.render('hasil', {
    panjang: p,
    lebar: l,
    hasil: h
  })
})

// Menghitung Luas
app.post('/lpPanjang', (req, res) => {
  const p = req.body.panjangL;
  const l = req.body.lebarL;
  const h = p * l
  res.render('hasil', {
    panjang: p,
    lebar: l,
    hasil: h
  })
})

app.listen(8080, () => {
  console.log("port 8080");
})