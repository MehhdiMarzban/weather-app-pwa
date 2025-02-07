import { ComponentProps, FC } from "react";

export type DivElementProps = ComponentProps<"div">;

export interface HeadItemProps {
    title: string;
}
export interface SubItemProps {
    title?: string;
    value: string;
    signLeft?: string;
    signRight?: string;
}

export default interface WeatherViewProps extends FC<DivElementProps> {
    Body: FC<DivElementProps>;
    Column: FC<DivElementProps>;
    SubItem: FC<DivElementProps & SubItemProps>;
    HeadItem: FC<DivElementProps & HeadItemProps>;
    ForecastItem: FC<DivElementProps>;
    Divider: FC;
}