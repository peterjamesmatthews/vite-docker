import { spawn } from "redux-saga/effects";
import logger from "./logger";

export default function* rootSaga() {
	yield spawn(logger);
}
