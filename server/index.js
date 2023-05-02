import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors'
import postRoutes from './routes/posts.js';

const app = express(); 


app.use(bodyParser.json({limit: '30mb', extended : true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended : true}));
app.use(cors());
app.use('/posts',postRoutes)
const CONNECTION_URL = 'mongodb+srv://heeketmehta:vXcb6xGVtTYMw69l@cluster0.66uuoq3.mongodb.net/cluster0'
const PORT = process.env.port || 9000;
// mongodb+srv://heeketmehta:<password>@cluster0-idjjd.gcp.mongodb.net/test?retryWrites=true&w=majority
//

mongoose.connect(CONNECTION_URL,  {useNewUrlParses: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on PORT : ${PORT}`) ))
    .catch((error) => console.log(error.message));


mongoose.set("useFindAndModify", false);