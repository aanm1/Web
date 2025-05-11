import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import { nextTick } from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, 'personal')));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "personal", "index.html"));
});

app.post('/submit', (req, res) => {
    const email = req.body["email"];
    console.log('Email received:', email);
    console.log("Thank you for the contact the infromation will be stored and contact will be made soon");
    res.send("Thank you for reching out Abel will reach out soon to the provided email.")
    console.log("Success");

});



app.listen(port, () => {
    console.log(`Server is on and listening at http://localhost:${port}`);
});
