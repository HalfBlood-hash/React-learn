

import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "../Featrue/Todo/TodoSlice";

export const store=configureStore({
    reducer: {
        todos: todoReducer
      }
});