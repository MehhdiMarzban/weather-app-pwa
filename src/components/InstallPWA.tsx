"use client";

import { useEffect, useState } from "react";



/**
 * A component that shows an install button when the beforeinstallprompt event is triggered
 *
 * The component listens for the beforeinstallprompt event and shows a button to install the app when the event is triggered.
 * When the button is clicked, it prompts the user to install the app.
 * If the user accepts the prompt, the userChoice property of the event will be "accepted", otherwise it will be "dismissed".
 *
 * The component also removes the event listener when it is unmounted.
 */
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