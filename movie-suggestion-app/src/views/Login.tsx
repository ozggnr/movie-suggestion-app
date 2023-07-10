import { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '../components/form/Form';
import { Input } from '../components/form/Input';

const defaultFormFields = {
    username: '',
    email: '',
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
                    label="Username"
                    labelcn="placeholder"
                    type="text"
                    name="username"
                    value={formFields.username}
                    placeholder=" "
                    onChange={handleInputChange}
                />
                {/* <Input
                    className="c-input"
                    label="Email"
                    labelcn="placeholder"
                    type="email"
                    name="email"
                    value={formFields.email}
                    placeholder=" "
                    onChange={handleInputChange}
                /> */}
                <Input
                    className="c-input"
                    label="Password"
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
        fetch('http://127.0.0.1:8000/api/login/', {
            method: 'POST',
            body: JSON.stringify(formFields),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then((data) => console.log(data));
    }
}
