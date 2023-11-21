import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../interfaces/authInterface";
import {authService} from "../services/authService";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const {register,handleSubmit} = useForm<IAuth>()
    const [errors, setErrors] = useState<boolean>(null)
    const navigate = useNavigate()

    const regUser: SubmitHandler<IAuth> = async (user) => {
        try {
            await authService.register(user)
            setErrors(false)
            navigate('/login')
        } catch (e) {
            setErrors(true)
        }
    };

    return (
        <form onSubmit={handleSubmit(regUser)}>
            <input type="text" placeholder={'username'}{...register('username')}/>
            <input type="text" placeholder={'password'}{...register('password')}/>
            <button>Register</button>
            {errors&& <div>user already exists</div>}
        </form>
    );
};

export {RegisterPage};