import React, {useState} from 'react';
import styles from './AddNewContact.module.css'
import {useForm} from "react-hook-form";
import {useActions} from "../../../../hooks/useActions";
import {IContact} from "../../../../store/contacts/contacts.interface";


type TypeInputTel = {
    tel: string
}

const AddNewContact = () => {

    const [newContact, setNewContact] = useState('')
    const {register, handleSubmit,  watch, formState: {errors}} = useForm<TypeInputTel>()

    const {addContact} = useActions()

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNewContact(e.target.value)
    }

    const onSubmit = (data:TypeInputTel) => {
        console.log(data)
        const newContact:IContact = {
            tel: data.tel,
            chatId: data.tel.replace('+','')
        }
        addContact(newContact)
    }

    return (
        <div className={styles.box}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type = {'text'}
                    placeholder={'+7хххххххххх'}
                    {...register('tel', {
                        required: true,
                        onChange: handleInputChange,
                        pattern: {
                            value: /^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$/,
                            message: 'Неккоректный номер телефона'
                        }
                    })}
                />
                <button type={'submit'}>Добавить</button>
            </form>
            <div className={styles.error}>
                {errors? errors.tel?.message: null}
            </div>
        </div>
    );
};

export default AddNewContact;