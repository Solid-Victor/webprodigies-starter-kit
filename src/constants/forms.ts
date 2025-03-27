export type AuthFormProps = {
    id: string
    type: "email" | "text" | "password" 
    inputType: "select" | "input" 
    options?: { value: string; label: string; id: string }[]
    label?: string
    placeholder: string
    name: string
}

export const SIGN_UP_FORM: AuthFormProps[] = [
    {
        id: "1",
        inputType: 'input',
        placeholder: 'first name',
        name: 'firstname',
        label: 'Email',
        type: 'text',
    },
    {
        id: '2',
        inputType: 'input',
        placeholder: 'last name',
        name: 'lastname',
        type: 'text',
    },
    {
        id: '3',
        inputType: 'input',
        placeholder: 'email',
        name: 'email',
        type: 'email',
    },
    {
        id: '4',
        inputType: 'input',
        placeholder: 'password',
        name: 'password',
        type: 'password',
    }
]

export const SIGN_IN_FORM: AuthFormProps[] = [
    {
        id: '1',
        inputType: 'input',
        placeholder: 'email',
        name: 'email',
        type: 'email',
    },
    {
        id: '2',
        inputType: 'input',
        placeholder: 'password',
        name: "password`",
        type: "password",
    }
]

