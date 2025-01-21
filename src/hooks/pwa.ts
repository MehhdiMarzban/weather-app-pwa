"use client";
import { useEffect } from "react";

async function registerServiceWorker() {
    const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
        updateViaCache: "none",
    });
}

export const useRegisterPWA = () => {
    useEffect(() => {
        registerServiceWorker();
    }, []);
    console.log("PWA Registered");
    return null;
};
