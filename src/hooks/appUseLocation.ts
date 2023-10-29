import {useLocation, Location} from "react-router-dom";

// eslint-disable-next-line react-hooks/rules-of-hooks
const appUseLocation = <T>(): Location<T> => useLocation();

export {appUseLocation}