import { WeatherViewProps } from "@/types";
import { twMerge } from "tailwind-merge";

//?------------------------ Utility Components ------------------------

/**
 * WeatherView component serves as a container for weather-related UI elements.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the container.
 * @param {string} [props.className] - Additional classes to style the component.
 * @param {Object} [props.rest] - Additional Div Element properties to be passed to the component.
 *
 * @returns {JSX.Element} A styled container for organizing weather-related components.
 */
const WeatherView: WeatherViewProps = ({ children, className, ...rest }) => {
    return (
        <div
            className={twMerge(
                "md:card md:glass md:bg-white md:bg-opacity-20 md:shadow-lg w-full",
                className
            )}
            {...rest}>
            {children}
        </div>
    );
};

/**
 * Body component serves as a container for the content of the WeatherView component.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the container.
 * @param {string} [props.className] - Additional classes to style the component.
 * @param {Object} [props.rest] - Additional Div Element properties to be passed to the component.
 *
 * @returns {JSX.Element} A styled container for the content of the WeatherView component.
 */
const Body: WeatherViewProps["Body"] = ({ children, className, ...rest }) => {
    return (
        <div className={twMerge("card-body grid md:grid-cols-12 grid-cols-1", className)} {...rest}>
            {children}
        </div>
    );
};

/**
 * Column component serves as a container for organizing elements in a column layout.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the container.
 * @param {string} [props.className] - Change the default size of the column by add col-span-[number] to the className. Additional classes to style the component.
 * @param {Object} [props.rest] - Additional Div Element properties to be passed to the component.
 *
 * @returns {JSX.Element} A styled container for organizing elements in a column layout.
 */
const Column: WeatherViewProps["Column"] = ({ children, className, ...rest }) => {
    return (
        <div
            className={twMerge(
                "flex flex-col items-start justify-start col-span-1 space-y-5",
                className
            )}
            {...rest}>
            {children}
        </div>
    );
};

/**
 * HeadItem component serves as a container for the title and value of a weather metric.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The value of the weather metric.
 * @param {string} props.title - The title of the weather metric.
 * @param {string} [props.className] - Additional classes to style the component.
 * @param {Object} [props.rest] - Additional Div Element properties to be passed to the component.
 *
 * @returns {JSX.Element} A styled container for the title and value of a weather metric.
 */
const HeadItem: WeatherViewProps["HeadItem"] = ({ children, className, title, ...rest }) => {
    return (
        <div
            className={twMerge("flex flex-row w-full items-center justify-between", className)}
            {...rest}>
            <div className="stat-title">{title}</div>
            {children}
        </div>
    );
};

/**
 * SubItem component serves as a container for a subtitle and value of a weather metric.
 *
 * @param {Object} props - The properties object.
 * @param {string} [props.title] - The subtitle of the weather metric.
 * @param {string} props.value - The value of the weather metric.
 * @param {string} [props.signRight] - The right-side sign for the value.
 * @param {string} [props.signLeft] - The left-side sign for the value.
 * @param {string} [props.className] - Additional classes to style the component.
 * @param {Object} [props.rest] - Additional Div Element properties to be passed to the component.
 *
 * @returns {JSX.Element} A styled container for the subtitle and value of a weather metric.
 */
const SubItem: WeatherViewProps["SubItem"] = ({
    title = null,
    value,
    signRight = null,
    signLeft = null,
    className,
    ...rest
}) => {
    return (
        <div
            className={twMerge(
                "stat-value text-primary flex flex-row w-full items-center justify-between",
                className
            )}
            {...rest}>
            <div className="stat-desc">{title}</div>
            {(signRight || !signLeft) && (
                <span>
                    <span className="text-sm align-middle"> {signRight} </span>
                    <span dir="rtl">{value}</span>
                </span>
            )}
            {signLeft && (
                <span>
                    <span dir="ltr">{value}</span>
                    <span className="text-sm align-middle mr-1">{signLeft}</span>
                </span>
            )}
        </div>
    );
};

/**
 * ForecastItem component serves as a container for each forecast item in the forecast list.
 *
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the container.
 * @param {string} [props.className] - Additional classes to style the component.
 * @param {Object} [props.rest] - Additional Div Element properties to be passed to the component.
 *
 * @returns {JSX.Element} A styled container for each forecast item in the forecast list.
 */
const ForecastItem: WeatherViewProps["ForecastItem"] = ({ children, className, ...rest }) => {
    return (
        <div
            className={twMerge(
                "flex-none mx-auto border border-gray-300 md:border-none w-44 bg-layer-0 bg-opacity-10 md:bg-layer-1 md:bg-opacity-30 rounded-md p-2 shadow-md",
                className
            )}
            {...rest}>
            {children}
        </div>
    );
};

/**
 * Divider component serves as a visual separator between sections of content that manage automatically to be vertical or horizontal.
 *
 * @returns {JSX.Element} A JSX element representing a styled divider.
 */
const Divider: React.FC = () => {
    return (
        <div className="divider divider-vertical md:divider-horizontal col-span-1 md:col-span-1" />
    );
};

WeatherView.Body = Body;
WeatherView.Column = Column;
WeatherView.HeadItem = HeadItem;
WeatherView.SubItem = SubItem;
WeatherView.ForecastItem = ForecastItem;
WeatherView.Divider = Divider;

export default WeatherView;
