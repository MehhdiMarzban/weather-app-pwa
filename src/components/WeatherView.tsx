import { twMerge } from "tailwind-merge";

interface WeatherViewProps extends React.FC<React.ComponentProps<"div">> {
    Body: React.FC<React.ComponentProps<"div">>;
    Column: React.FC<React.ComponentProps<"div">>;
    Divider: React.FC;
}

const WeatherView: WeatherViewProps = ({ children, className, ...rest }) => {
    return (
        <div className={twMerge("card glass bg-slate-200 bg-opacity-20 shadow-lg w-full", className)} {...rest}>
            {children}
        </div>
    );
};

const Body: React.FC<React.ComponentProps<"div">> = ({ children, className, ...rest }) => {
    return (
        <div
            className={twMerge("card-body grid md:grid-cols-12 grid-cols-1", className)}
            {...rest}>
            {children}
        </div>
    );
};

const Column: React.FC<React.ComponentProps<"div">> = ({ children, className, ...rest }) => {
    return (
        <div className={twMerge("flex flex-col items-start justify-start col-span-1 space-y-5", className)} {...rest}>
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
WeatherView.Divider = Divider;

export default WeatherView;
