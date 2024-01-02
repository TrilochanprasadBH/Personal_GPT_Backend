//installing cookie parser, express validator,openai left for later  
// for dist folder its empty initially, to get index.js automatically - run - npm run build after adding necessary scripts in package.json

import express from "express";
import { config } from "dotenv";
import { connection } from "mongoose";

const app = express();
app.use(express.json());


app.listen();
