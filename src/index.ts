import express, {Response, Request} from 'express';
import cors from 'cors';
const connectDb = require('../config/connectDb');

require("dotenv").config();
connectDb();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req: Request, res: Response) => {
  res.json({ message: "Welcome to our online shop API..." });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running on app ${port}`);
});
