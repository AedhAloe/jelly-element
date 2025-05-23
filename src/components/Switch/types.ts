export type SwitchValueType = boolean | string | number;
export interface SwitchProps {
    modelValue: SwitchValueType;
    disabled?: boolean;
    activeText?: string;
    inactiveText?: string;
    activeValue?: SwitchValueType;
    inactiveValue?: SwitchValueType;
    name?: string;
    id?: string;
    size?: 'large' | 'small';

}
export interface SwitchEmits {
    (e: 'change', value: SwitchValueType): void;
    (e: 'update:modelValue', value: SwitchValueType): void;
}
