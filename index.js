import cookieParser from 'cookie-parser';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import db from './config/MongooseConnection.js';
import ownersRouter from './routes/ownersRouter.js';
import usersRouter from './routes/usersRouter.js';
import productsRouter from './routes/productsRouter.js';


const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine','ejs');

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/owners',ownersRouter);
app.use('/users',usersRouter);
app.use('/products',productsRouter);

app.get('/',(req,res)=>{
    res.send("This is the starting of my project");
});

app.listen(3000,()=>{
    console.log("Server is Running on the Port 3000");
});