import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Label, InputComp, InputContainer, TextArea, ErrorDiv } from "./Input.css";

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
            <ErrorDiv>
                {errors[name] && <i>{errors[name].message}</i>}
            </ErrorDiv>
        </InputContainer>
    )
}

export default Input;