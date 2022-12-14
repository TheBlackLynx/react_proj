import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import {  CounterSchema } from "../../types/CounterSchema";
import { getCounter } from "../getCounter/getCounter";

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value
)