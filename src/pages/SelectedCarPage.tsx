import {ICar} from "../interfaces/carInterface";
import {appUseLocation} from "../hooks/appUseLocation";
import {SelectedCar} from "../components/CarContainer/SelectedCar";

const SelectedCarPage = () => {
    const {state:{item}} = appUseLocation<{ item: ICar }>()
    return (
        <div>
            {item && <SelectedCar item={item}/>}
        </div>
    );
};

export {SelectedCarPage};