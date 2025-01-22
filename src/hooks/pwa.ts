"use client";
import { useEffect } from "react";
import toast from "react-hot-toast";

async function registerServiceWorker() {
    await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
        updateViaCache: "none",
    }).then(registration => {
        registration.onupdatefound = () => {
            const newWorker : any = registration.installing;
            newWorker.onstatechange = () => {
                if (newWorker?.state === 'installed') {
                    if (navigator.serviceWorker.controller) {
                        // یک نسخه جدید نصب شده است
                        toast.success("یک نسخه جدیدی برای بروزرسانی در دسترس میباشد.")
                    }
                }
            };
        };
    });;
}

export const useRegisterPWA = () => {
    useEffect(() => {
        registerServiceWorker();
    }, []);
    return null;
};
