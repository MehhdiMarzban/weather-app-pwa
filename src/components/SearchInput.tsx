import { twMerge } from "tailwind-merge";

import { SearchInputProps } from "@/types";

/**
 * SearchInput is a component that renders a text input with an optional placeholder
 * and an icon. It allows users to enter text and triggers a callback on input change.
 *
 * @param {SearchInputProps} props - The props for the SearchInput component.
 * @param {string} props.inputState - The current value of the text input.
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} props.handleChangeInput - 
 * The function called when the input value changes.
 * @param {string} [props.placeholder] - An optional placeholder text for the input field.
 * @param {string} [props.className] - Additional CSS classes for the label element.
 * @returns {JSX.Element} A JSX element representing the search input field.
 */
const SearchInput: React.FC<SearchInputProps> = ({
    handleChangeInput,
    inputState,
    placeholder = "",
    className = "",
    ...rest
}) => {
    return (
        <label
            className={twMerge("input input-bordered flex items-center gap-2", className)}
            {...rest}>
            <input
                type="text"
                className="grow"
                placeholder={placeholder}
                value={inputState}
                onChange={handleChangeInput}
            />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                />
            </svg>
        </label>
    );
};

export default SearchInput;
