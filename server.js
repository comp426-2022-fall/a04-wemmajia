import minimist from "minimist";
import express from "express";
import { roll } from "./lib/roll.js";

const args = minimist(process.argv.slice(2));
const port = args.port || 5000;

const app = express();
app.use(express.urlencoded({extended: true}));


