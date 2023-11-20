import {store} from "../redux/store";
import {useDispatch} from "react-redux";

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof useDispatch<>()
