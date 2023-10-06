import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import cors from "cors"; // cors biar bisa di akses di luar domain
import OrderRoute from "./routes/OrderRoute.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.set('view engine','ejs' );
app.use(express.static(path.join(__dirname,'views')))
app.use(cors());
app.use(express.json());
app.use(OrderRoute);



app.get('/form' , (req,res) => {
    res.render('form', { title: 'Halaman Form' });
});

app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>Not Found 404</h1>');
});

// app.listen(3000, ()=>
// console.log('Server up and running....!')
// );

app.listen(PORT, '0.0.0.0', function() {});