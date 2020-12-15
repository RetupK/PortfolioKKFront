export const contactMeTitle = {
    title: "Skontaktuj się ze mną",
    subTitle: "Wypełnij formularz"
}

export const formData = [
    {
        id: 0,
        name: "title",
        label: "Tytuł wiadomości",
        required: true,
        placeholder: "Wpisz tytuł wiadomości...",
        textarea: false,
        minLength: 3,
        errMess: "Wpisz przynajmniej 3 znaki"
    },
    {
        id: 1,
        name: "email",
        label: "Email",
        required: true,
        placeholder: "Wpisz swój email...",
        textarea: false,
        validationRegex: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        errMess: "Wpisz poprawnie email - przykład@host.com"
    },
    {
        id: 2,
        name: "message",
        label: "Wiadomość",
        required: true,
        placeholder: "Napisz do mnie wiadomość",
        textarea: true,
        minLength: 10,
        errMess: "Wpisz przynajmniej 10 znaków"
    }
]
