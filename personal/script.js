import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000; // or any port you prefer

app.use(bodyParser.json()); // to parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // to parse URL-encoded bodies

app.listen(port, () => {
    console.log(`Server is on and listening at http://localhost:${port}`);
});
