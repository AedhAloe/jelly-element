export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type ButtonSize = 'small' | 'large';
export type NativeType='button'|'submit'|'reset';

export interface ButtonProps {
    type?: ButtonType;
    size?: ButtonSize;
    plain?: boolean;
    round?: boolean;
    circle?: boolean;
    disabled?: boolean;
    nativetype?:NativeType;
    autofocus?:boolean;
    icon?: string;
    loading?: boolean;
}

export interface ButtonInstance{
    ref:HTMLButtonElement;
}