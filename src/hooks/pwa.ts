"use client";
import { useEffect } from "react";

async function registerServiceWorker() {
    await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
        updateViaCache: "none",
    });
}

export const useRegisterPWA = () => {
    useEffect(() => {
        registerServiceWorker();
    }, []);
    return null;
};
