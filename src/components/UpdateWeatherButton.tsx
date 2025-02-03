"use client";

import { useIsFetching, useQueryClient } from "@tanstack/react-query";

/**
 * UpdateWeatherButton component triggers a refetch of weather data queries when clicked.
 * 
 * This component uses React Query's `useQueryClient` to access the query client and
 * `useIsFetching` to determine if any weather data queries are currently fetching.
 * 
 * The button displays a spinning animation on the SVG icon when data is being fetched.
 *
 * @returns {JSX.Element} A button element that initiates a refetch of weather data queries.
 */

const UpdateWeatherButton: React.FC = () => {
    const queryClient = useQueryClient();
    const isFetching = useIsFetching();
    return (
        <button
            className="btn btn-sm btn-primary rounded-full p-2"
            onClick={() => {
                queryClient.refetchQueries({ queryKey: ["weather"] });
            }}>
            <svg
                role="icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="currentColor"
                className={`size-4 ${isFetching ? "animate-spin" : null}`}>
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
            </svg>
        </button>
    );
};

export default UpdateWeatherButton;
