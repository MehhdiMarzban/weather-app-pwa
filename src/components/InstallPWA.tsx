"use client";

import { useEffect, useState } from "react";

const InstallPWA: React.FC = () => {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [showInstallButton, setShowInstallButton] = useState(false);
  
    useEffect(() => {
      const handleBeforeInstallPrompt = (e : any) => {
        e.preventDefault();
        setDeferredPrompt(e);
        setShowInstallButton(true);
      };
  
      window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
  
      return () => {
        window.removeEventListener(
          "beforeinstallprompt",
          handleBeforeInstallPrompt,
        );
      };
    }, []);
  
    const handleInstallClick = () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((result : any) => {
          if (result.outcome === "accepted") {
            console.log("User accepted the install prompt");
          } else {
            console.log("User dismissed the install prompt");
          }
  
          setDeferredPrompt(null);
          setShowInstallButton(false);
        });
      }
    };
  
    if (!showInstallButton) {
      return null;
    }
  
    return (
      <button
        className="btn btn-primary my-2"
        onClick={handleInstallClick}
      >
        نصب اپلیکیشن
      </button>
    );
  
    };

export default InstallPWA;