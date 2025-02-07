export default interface SearchInputProps extends React.ComponentProps<"label"> {
    inputState: string;
    handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}