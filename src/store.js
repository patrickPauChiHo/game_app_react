import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./reducers/gamesReducer";


export default configureStore({
    reducer: {
        games: gamesReducer,
    },

});