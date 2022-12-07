import minimist from "minimist";
import express from "express";
import { roll } from "./lib/roll.js";

const args = minimist(process.argv.slice(2));
const port = args.port || 5000;

const app = express();
app.use(express.urlencoded({extended: true}));

// Check endpoint at /app/ that returns 200 OK.
app.get('/app/', (req, res) => {
    res.send('200 OK');
    res.status(200);
})

// Default roll of two six-sided dice one time.
app.get('/app/roll/', (req, res) => {
    res.send(roll(6, 2, 1));
    res.status(200);
})

// Accept either JSON or URLEncoded data body for sides, dice, and rolls.
app.post('/app/roll/', (req, res) => {
    res.send(roll(parseInt(req.body.sides), parseInt(req.body.dice), parseInt(req.body.rolls)));
    res.status(200);
})

// Default number of rolls and dice with whatever number of sides is specified in the parameter.
app.get('/app/roll/:sides/', (req, res) => {
    res.send(roll(parseInt(req.params.sides), 2, 1));
    res.status(200);
})

// Default number of rolls with whatever number of sides and dice specified in the parameters.
app.get('/app/roll/:sides/:dice/', (req, res) => {
    res.send(roll(parseInt(req.params.sides), parseInt(req.params.dice), 1));
    res.status(200);
})

// specified number of rolls with whatever number of sides and dice specified in the parameters
app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
    res.send(roll(parseInt(req.params.sides), parseInt(req.params.dice), parseInt(req.params.rolls)));
    res.status(200);
})

// any endpoints that are not defined
app.use((req, res) => {
	res.send("404 NOT FOUND");
	res.status(404);
});

app.listen(port);