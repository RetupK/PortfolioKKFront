import React, { lazy, Suspense, useMemo, useState } from "react";
import { ContactMainContainer, FormWrapper, Btn } from "./ContactMe.css";
import { formData, contactMeTitle } from "./ContactMeData";
import axios from "axios";
import Loading from "../../components/Spinner/SpinnerLoading/SpinnerLoading.css";
import { api } from "../../utility/Api/ApiLinks";
import ModalComp from "../../components/Modal/Modal";
import Bounce from 'react-reveal/Bounce';
const Form = lazy(() => import("../../components/AllAboutForm/Form/Form"));
const Input = lazy(() => import("../../components/AllAboutForm/Input/Input"));
const SectionDescription = lazy(() => import("../../components/SectionDescription/SectionDescription"));

const Contact = () => {
    const [sendedEmail, setSendedEmail] = useState(false);
    const [clickedButton, setClickedButton] = useState(false);

    const handleSubmit = async(data) => {
        await setClickedButton(true);
        await axios.post(api("contacts"), {
            title: data.title,
            email: data.email,
            message: data.message
        })
            .then(function (response) {
                setSendedEmail(true);
                setClickedButton(false);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const memoRenderModal = useMemo(() => {
        return (
            sendedEmail && <ModalComp toggleModal={setSendedEmail} showModal={sendedEmail}>Wiadomość została wysłana :)</ModalComp>
        )
    }, [setSendedEmail, sendedEmail])


    return (
        <>
            {memoRenderModal}
            <ContactMainContainer id="#Kontakt">
                <Suspense fallback={<Loading />}>
                    <SectionDescription
                        title={contactMeTitle.title}
                        subTitle={contactMeTitle.subTitle}
                    />
                </Suspense>
                <Bounce bottom>
                    <FormWrapper className="controllContact">
                        <Suspense fallback={<Loading />}>
                            <Form onSubmit={handleSubmit}>
                                {formData.map((item) =>
                                    <Input
                                        key={item.id}
                                        name={item.name}
                                        label={item.label}
                                        required={item.required}
                                        placeholder={item.placeholder}
                                        textarea={item.textarea}
                                        validation={{
                                            required: true,
                                            pattern: {
                                                value: item.validationRegex,
                                                message: item.errMess,
                                            },
                                            minLength: {
                                                value: item.minLength,
                                                message: item.errMess
                                            }
                                        }}
                                    />
                                )}
                                <Btn variant="success" type="submit">{clickedButton ? <Loading/> : "Wyślij"}</Btn>
                            </Form>
                        </Suspense>
                    </FormWrapper>
                </Bounce>
            </ContactMainContainer>
        </>
    )
}

export default Contact;