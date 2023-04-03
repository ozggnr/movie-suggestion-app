import { PropsWithChildren } from 'react';

type Props = {
    className: string;
    children?: React.ReactNode;
    onSubmit: React.FormEventHandler;
};

export const Form = ({ children, onSubmit, className }: PropsWithChildren<Props>) => {
    return (
        <form onSubmit={onSubmit} className={className}>
            {children}
        </form>
    );
};
