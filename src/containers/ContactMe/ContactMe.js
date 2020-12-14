import React, { lazy, Suspense, useState } from "react";
import { ContactMainContainer, FormWrapper } from "./ContactMe.css";
import { formData, contactMeTitle } from "./ContactMeData";
import axios from "axios";
import { useEventListener } from "../../utility/HelperFunction/useEventListener";
import { useSpring, animated } from 'react-spring'
import Loading from "../../components/Spinner/SpinnerLoading/SpinnerLoading.css";
const Form = lazy(() => import("../../components/AllAboutForm/Form/Form"));
const Input = lazy(() => import("../../components/AllAboutForm/Input/Input"));
const SectionDescription = lazy(() => import("../../components/SectionDescription/SectionDescription"));

const Contact = () => {

    const [isVisible, setIsVisiblee] = useState(null);
    useEventListener("scroll", "controllContact", setIsVisiblee);

    const animationProps = useSpring({
        transform: "scale(1)",
        opacity: 1,
        x: 200,
        from: {
            border: "0px solid",
            transform: "scale(0.5)",
            opacity: 0,
            x: 0,
        },
        config: {duration: 500},
        reset: isVisible,
    })
    

    const handleSubmit = (data) => {
        axios.post('http://localhost:8000/contacts', {
            title: data.title,
            email: data.email,
            message: data.message
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <ContactMainContainer id="#Kontakt">
            <Suspense fallback={<Loading/>}>
                <SectionDescription
                    title={contactMeTitle.title}
                    subTitle={contactMeTitle.subTitle}
                />
            </Suspense>
            <animated.div style={animationProps}>
                <FormWrapper className="controllContact">
                    <Suspense fallback={<Loading/>}>
                        <Form onSubmit={handleSubmit}>
                            {formData.map((item) =>
                                <Input
                                    key={item.id}
                                    name={item.name}
                                    label={item.label}
                                    required={item.required}
                                    placeholder={item.placeholder}
                                    textarea={item.textarea}
                                />
                            )}
                        </Form>
                    </Suspense>
                    
                </FormWrapper>
            </animated.div>
        </ContactMainContainer>
    )
}

export default Contact;