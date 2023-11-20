import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../interfaces/carInterface";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {carActions} from "../redux/slices/carSlice";
import {useEffect} from "react";

const CarsForm = () => {
    const {reset, register, handleSubmit, setValue} = useForm<ICar>()
    const {carForUpdate} = useAppSelector(state => state.cars)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate, setValue]);

    const save: SubmitHandler<ICar> = async (car) => {
       await dispatch(carActions.create({car}))
        reset()
    }
    const update: SubmitHandler<ICar> = async (car)=> {
        await dispatch(carActions.update({id: carForUpdate.id, car}))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type="text" placeholder={'brand'}{...register('brand')}/>
            <input type="text" placeholder={'price'}{...register('price')}/>
            <input type="text" placeholder={'year'}{...register('year')}/>
            <button>{carForUpdate? 'update' : 'save'}</button>
        </form>
    );
};

export {CarsForm};