import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Label, InputComp, InputContainer, TextArea } from "./Input.css";

const Input = ({ label, name, type = "text", required, validation, value, placeholder, textarea }) => {
    const { register, errors } = useFormContext();

    return (
        <InputContainer>
            {textarea ?
                <TextArea
                    name={name}
                    ref={register(validation || { required: !!required })}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                />
                :
                <InputComp
                    name={name}
                    ref={register(validation || { required: !!required })}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                />
            }
            <Label>{label}</Label>
            <div>
                {errors[name] && <i>{errors[name].message}</i>}
            </div>
        </InputContainer>
    )
}

export default Input;