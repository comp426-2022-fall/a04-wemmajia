import minimist from "minimist";
import express from "express";
import { roll } from "./lib/roll.js";

const args = minimist(process.argv.slice(2));
const port = args.port || 5000;

const app = express();
app.use(express.urlencoded({extended: true}));

app.get('/app/', (req, res) => {
    res.send('200 OK')
})

app.get('/app/roll/', (req, res) => {
    res.send(roll(6, 2, 1))
})

app.get('/app/roll/', (req, res) => {
    res.send(roll(parseInt(req.body.sides), parseInt(req.body.dice), parseInt(req.body.rolls)))
})