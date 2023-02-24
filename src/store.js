import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./reducers/gamesReducer";
import detailReducer from "./reducers/detailReducer";

export default configureStore({
    reducer: {
        games: gamesReducer,
        detail: detailReducer,
    },

});