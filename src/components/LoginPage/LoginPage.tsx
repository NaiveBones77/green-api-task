import {SubmitHandler, useForm} from "react-hook-form";
import {TypeInputs} from "./LoginPage.interface";
import {useActions} from "../../hooks/useActions";
import {useAuth} from "../../hooks/useAuth";
import styles from './LoginPage.module.css'
import {Navigate, useNavigate} from "react-router-dom";




export const LoginPage = () => {

    const navigate = useNavigate()

    const {register, handleSubmit, watch, formState: {errors}} = useForm<TypeInputs>()
    const {login, logout} = useActions()
    const {instanceId, isLoading, error} = useAuth()


    const onSumbit: SubmitHandler<TypeInputs> = data => {
        const response = login(data)
    }

    return (
        <div className={styles.container}>
            <div className={styles.containerLogin}>
                <div className={styles.wrapLogin}>
                    <form
                        className={styles.formLogin}
                        onSubmit={handleSubmit(onSumbit)}
                    >
                        <div className={styles.wrapInput}>
                            <input
                                {...register('instanceId', {required: true})}
                                placeholder={'instanceId'}
                            />
                            {errors.instanceId && <div>Это поле обязательно!</div>}
                        </div>
                        <div className={styles.wrapInput}>
                            <input
                                {...register('apiTokenInstance', {required: true})}
                                placeholder={'apiTokenInstance'}
                            />
                            {errors.instanceId && <div>Это поле обязательно!</div>}
                        </div>
                        <button type={'submit'} disabled={isLoading}>Вход</button>
                        {error? <div className={styles.error}>Неправильный логин или пароль</div> : null}
                    </form>
                </div>
                {
                    instanceId && <Navigate to={'/messages'}/>
                }
            </div>
        </div>
    )
}