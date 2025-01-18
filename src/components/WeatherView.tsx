interface WeatherViewProps extends React.FC<React.PropsWithChildren> {
    Body: React.FC<React.PropsWithChildren>;
    Column: React.FC<React.PropsWithChildren<ColumnProps>>;
    Divider: React.FC;
}
interface ColumnProps {
    defaultCols: number;
    mdCols: number;
    spaceBetween?: number;
}

const WeatherView: WeatherViewProps = ({ children }) => {
    return <div className="card bg-base-300 shadow-lg w-full">{children}</div>;
};
export default WeatherView;

const Body: React.FC<React.PropsWithChildren> = ({ children }) => {
    return <div className="card-body grid md:grid-cols-12 grid-cols-1">{children}</div>;
};

const Column: React.FC<React.PropsWithChildren<ColumnProps>> = ({
    children,
    defaultCols = 1,
    mdCols = 1,
    spaceBetween = 0,
}) => {
    return (
        <div
            className={`flex flex-col items-start justify-start space-y-${spaceBetween} col-span-${defaultCols} md:col-span-${mdCols}`}>
            {children}
        </div>
    );
};

const Divider : React.FC = () => {
    return <div className="divider divider-vertical md:divider-horizontal col-span-1 md:col-span-1" />;
}

WeatherView.Body = Body;
WeatherView.Column = Column;
WeatherView.Divider = Divider;