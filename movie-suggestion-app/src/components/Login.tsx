import { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from './form/Form';
import { Input } from './form/Input';

const defaultFormFields = {
    username: '',
    password: '',
};

export default function Login() {
    const [formFields, setFormFields] = useState(defaultFormFields);
    console.log(formFields);
    return (
        <div className="auth-page">
            <h1 className="auth-welcome-message">Welcome!</h1>
            <Form className="auth-form" onSubmit={handleSubmit}>
                <Input
                    className="c-input"
                    labelcn="placeholder"
                    type="text"
                    name="username"
                    value={formFields.username}
                    placeholder=" "
                    onChange={handleInputChange}
                />
                <Input
                    className="c-input"
                    labelcn="placeholder"
                    type="password"
                    name="password"
                    value={formFields.password}
                    placeholder=" "
                    onChange={handleInputChange}
                />

                <button className="btn-primary" type="submit">
                    Log in
                </button>
            </Form>
            <div className="auth-message">
                Don't have an account? <Link to="/signup">Sign up</Link>
            </div>
        </div>
    );
    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        const { name, value } = event.target;
        setFormFields((prev) => ({ ...prev, [name]: value }));
    }
    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        event.stopPropagation();
        console.log(formFields);
    }
}
