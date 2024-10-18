import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

dotenv.config({ path: "../.env" });

const PORT = process.env.PORT || 2907;

if (!process.env.PORT) {
    console.log("There is no PORT specified!...");
}

const app = express();

app.get("/", (req, res) => {
    res.send("Connected! server is running on port 2907");
});

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
});
