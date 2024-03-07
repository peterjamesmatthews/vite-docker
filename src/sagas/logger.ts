import { Action } from "@reduxjs/toolkit";
import { takeEvery } from "redux-saga/effects";

export function* log(action: Action) {
	yield console.log(`action: ${action.type}`);
}

export default function* logger() {
	yield takeEvery("*", log);
}
