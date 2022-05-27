import express, { Response, Request } from 'express';
import cookieParser from 'cookie-parser';
import BodyParser from 'body-parser';
import cors from 'cors';

import routes from "./routes/index";
import * as dotenv from "dotenv";

dotenv.config();
const app = express();

const port = process.env.PORT || 4000;
app.use(cors({
	origin: 'http://localhost:8000',
	methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
	credentials: true
}));
//app.use(cors());
app.use(cookieParser());
app.use(BodyParser.json());
app.use(routes);

app.listen(port, () => {
	console.log(`api is running on port ${port}.`);
});
