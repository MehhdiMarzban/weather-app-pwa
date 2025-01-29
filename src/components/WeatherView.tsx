import { twMerge } from "tailwind-merge";

interface WeatherViewProps extends React.FC<React.ComponentProps<"div">> {
    Body: React.FC<React.ComponentProps<"div">>;
    Column: React.FC<React.ComponentProps<"div">>;
    SubItem: React.FC<React.ComponentProps<"div"> & SubItemProps>;
    HeadItem: React.FC<React.ComponentProps<"div"> & HeadItemProps>;
    ForecastItem: React.FC<React.ComponentProps<"div">>;
    Divider: React.FC;
}

interface HeadItemProps {
    title: string;
}
interface SubItemProps {
    title?: string;
    value: string;
    signLeft?: string;
    signRight?: string;
}

const WeatherView: WeatherViewProps = ({ children, className, ...rest }) => {
    return (
        <div
            className={twMerge("card glass bg-slate-200 bg-opacity-30 shadow-lg w-full", className)}
            {...rest}>
            {children}
        </div>
    );
};

const Body: React.FC<React.ComponentProps<"div">> = ({ children, className, ...rest }) => {
    return (
        <div className={twMerge("card-body grid md:grid-cols-12 grid-cols-1", className)} {...rest}>
            {children}
        </div>
    );
};

const Column: React.FC<React.ComponentProps<"div">> = ({ children, className, ...rest }) => {
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

const HeadItem: React.FC<React.ComponentProps<"div"> & HeadItemProps> = ({
    children,
    className,
    title,
    ...rest
}) => {
    return (
        <div
            className={twMerge("flex flex-row w-full items-center justify-between", className)}
            {...rest}>
            <div className="stat-title">{title}</div>
            {children}
        </div>
    );
};

const SubItem: React.FC<React.ComponentProps<"div"> & SubItemProps> = ({
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

const ForecastItem: React.FC<React.ComponentProps<"div">> = ({children, className,...rest}) => {
    return (
        <div className={twMerge("flex-none w-48 bg-slate-200 bg-opacity-30 rounded-md p-2 shadow-md", className)} {...rest} >
            {children}
        </div>
    );
};

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
