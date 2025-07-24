

import {configureStore} from "@reduxjs/toolkit"
import authSlice from "../Reduxslice/authSlice"

const store=configureStore({
    reducer:{
        auth:authSlice
    }
})

export default store