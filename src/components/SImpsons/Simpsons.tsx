import {simpsons} from "../../constants/constants";
import {Simpson} from "../Simpson/Simpson";
import {ISimpson} from "../../interfaces/simpsonInterface";
import "./Simpsons.css";


const Simpsons = () => {
    return (
        <div className='all'>
            {simpsons.map((item: ISimpson, index: number) => <Simpson key={index} item={item}/>)}
        </div>
    );
};

export {Simpsons};