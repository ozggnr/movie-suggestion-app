import { InputHTMLAttributes } from 'react';

type InputProps = {
    label?: string;
    labelcn?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ label, labelcn, type, name, ...rest }: InputProps) => {
    return (
        <div className="input-field">
            {label ? <label className="labelcn">{label}</label> : ''}
            <input type={type} name={name} {...rest} />
        </div>
    );
};
