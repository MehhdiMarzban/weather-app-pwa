import http from "./http";

export const getCurrentWeather = ({ city }: { city: string }): Promise<any> => {
    return http
        .get(`/weather?appid=${process.env.NEXT_PUBLIC_API_KEY}&q=${city}&units=metric&lang=fa`)
        .then(({ data }) => data);
};
