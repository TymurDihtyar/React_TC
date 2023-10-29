import {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {ICar} from "../../interfaces/carInterface";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/carValidator";
import {carService} from "../../services/carService";
import {ISetState} from "../../types/ISetState";

interface IProps {
    trigger: () => void
    carForUpdate: ICar
    setCarForUpdate: ISetState<ICar>
}

const CarForm: FC<IProps> = ({trigger, carForUpdate, setCarForUpdate}) => {
    const {reset, register, setValue, formState: {errors, isValid}, handleSubmit} = useForm<ICar>({
        mode: 'all',
        resolver: joiResolver(carValidator)
    })

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate:true})
            setValue('price', carForUpdate.price, {shouldValidate:true})
            setValue('year', carForUpdate.year, {shouldValidate:true})
        }
    },[carForUpdate, setValue]);

    const save: SubmitHandler<ICar> = async (car) => {
        await carService.create(car);
        trigger();
        reset()
    }
    const update: SubmitHandler<ICar> = async (car) => {
        await  carService.updateById(carForUpdate.id, car)
        setCarForUpdate(null)
        trigger();
        reset()
    }

    return (
        <>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'brand'}{...register('brand')}/>
                <input type="text" placeholder={'price'}{...register('price')}/>
                <input type="text" placeholder={'year'}{...register('year')}/>
                <button disabled={!isValid}>submit</button>
            </form>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}
        </>
    );
};

export {CarForm};