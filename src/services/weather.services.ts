import http from "./http";

export const getCurrentWeather = ({ city }: { city: string }): Promise<any> => {
    return http
        .get(`/weather?appid=${process.env.NEXT_PUBLIC_API_KEY}&q=${city}&units=metric&lang=fa`)
        .then(({ data }) => data);
};

export const getForecastWeather = ({ city }: { city: string }): Promise<any> => {
    return http
        .get(`/forecast?appid=${process.env.NEXT_PUBLIC_API_KEY}&q=${city}&units=metric&lang=fa&cnt=100`)
        .then(({ data }) => data);
};
