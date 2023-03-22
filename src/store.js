import { configureStore } from "@reduxjs/toolkit";
import { studentApi } from "./services/student";

export const store=configureStore({
    reducer:{
        [studentApi.reducerPath]:studentApi.reducer
    },
    middleware: (gDM) => gDM().concat(studentApi.middleware),
})