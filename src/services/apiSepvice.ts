import axios from "axios";
import {baseURL} from "../costants/urls";

const apiSepvice = axios.create({baseURL})

export {apiSepvice}