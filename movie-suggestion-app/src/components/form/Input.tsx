import { InputHTMLAttributes } from 'react';

type InputProps = {
    label?: string;
    labelcn?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ label, labelcn, type, name, ...rest }: InputProps) => {
    return (
        <div className="input-field">
            <input type={type} name={name} {...rest} />
            {label ? <label className={labelcn}>{label}</label> : ''}
        </div>
    );
};
