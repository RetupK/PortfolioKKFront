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
    },
    {
        id: 1,
        name: "email",
        label: "Email",
        required: true,
        placeholder: "Wpisz swój email...",
        textarea: false,
    },
    {
        id: 2,
        name: "message",
        label: "Wiadomość",
        required: true,
        placeholder: "Napisz do mnie wiadomość",
        textarea: true,
    }
]
