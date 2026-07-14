"use client";

import { useState, useEffect, useRef } from "react";
import { STORY } from "@/config/variables";

function BlickLogo({ color = "black" }: { color?: string }) {
  return (
    <svg className="h-7 w-auto" xmlns="http://www.w3.org/2000/svg" width="100" height="36.463" viewBox="0 0 100 36.463">
      <path
        id="Blick_Logo_Rot_RGB"
        d="M14.166,21.684H8.333v6.63h5.833a3.315,3.315,0,1,0,0-6.63M12.917,9.807H8.333v6.354h4.584a3.177,3.177,0,1,0,0-6.354M26.111,25.412a10.249,10.249,0,0,1-10.278,10.22H0V2.487H14.722a9.7,9.7,0,0,1,9.723,9.669,9.579,9.579,0,0,1-1.8,5.605,10.173,10.173,0,0,1,3.469,7.654M41.667,35.633H50V12.43H41.667v23.2Zm58.333,0H90.277l-6.944-9.207v9.207H75V1.382h8.333V20.717L90,12.43h9.445l-8.89,11.049Zm-71.112,0h8.333V1.382H28.888V35.635ZM41.11,4.7a4.722,4.722,0,1,1,4.721,4.7A4.71,4.71,0,0,1,41.11,4.7M68.889,19.612l3.61-5.8a12.17,12.17,0,0,0-7.222-2.21,12.431,12.431,0,1,0,0,24.861,12.17,12.17,0,0,0,7.222-2.21l-3.61-5.8a6.756,6.756,0,0,1-3.055.828,5.249,5.249,0,1,1,0-10.5,6.78,6.78,0,0,1,3.055.828"
        fill={color}
      />
    </svg>
  );
}

interface HeaderProps {
  /** "light" (défaut): barre blanche historique. "dark": barre sombre effet glass. */
  theme?: "light" | "dark";
}

export function Header({ theme = "light" }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [copied, setCopied] = useState(false);
  const lastScrollYRef = useRef(0);
  const isOpenRef = useRef(false);
  const [shareUrl, setShareUrl] = useState(STORY.url);

  const dark = theme === "dark";

  // Suffixe des icônes: versions noires (-b-) ou blanches (-w-)
  const icons = dark
    ? {
        share: "images/icon-share-w-noborder.svg",
        cross: "images/icon-cross-white-noborder.svg",
        facebook: "images/icon-facebook-w-noborder.svg",
        twitter: "images/icon-twitter-w-noborder.svg",
        linkedin: "images/icon-linkedin-w-noborder.svg",
        wa: "images/icon-wa-w-noborder.svg",
        plane: "images/icon-plane-w-noborder.svg",
      }
    : {
        share: "images/icon-share-b-noborder.svg",
        cross: "images/icon-cross-black-noborder.svg",
        facebook: "images/icon-facebook-b-noborder.svg",
        twitter: "images/icon-twitter-b-noborder.svg",
        linkedin: "images/icon-linkedin-b-noborder.svg",
        wa: "images/icon-wa-b-noborder.svg",
        plane: "images/icon-plane-b-noborder.svg",
      };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href);
    }
  }, []);

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(shareUrl);
    const text = encodeURIComponent(STORY.title);

    switch (platform) {
      case "Facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank", "noopener,noreferrer");
        break;
      case "Twitter / X":
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, "_blank", "noopener,noreferrer");
        break;
      case "LinkedIn":
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank", "noopener,noreferrer");
        break;
      case "Whatsapp":
        window.open(`https://api.whatsapp.com/send?text=${text}%20${url}`, "_blank", "noopener,noreferrer");
        break;
      case "Email":
        window.location.href = `mailto:?subject=${text}&body=${encodeURIComponent("Voici un article intéressant à lire : ")}%20${url}`;
        break;
      case "Copier l'URL":
        navigator.clipboard.writeText(shareUrl).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        });
        break;
    }
  };

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollYRef.current) {
        if (!isOpenRef.current) setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-30 transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <header
        className={`fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-4 md:px-6 z-40 transition-transform duration-300 ease-in-out ${
          dark
            ? "bg-black/40 backdrop-blur-md border-b border-white/10"
            : "bg-white border-b border-gray-100"
        } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <a
          href="https://www.blick.ch/fr/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          <BlickLogo color={dark ? "#ffffff" : (STORY.logoColor || "black")} />
        </a>
        <button
          onClick={() => setIsOpen(true)}
          className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition-colors ${
            dark ? "bg-white/10 hover:bg-white/20" : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          <img src={icons.share} alt="Partager" className="w-8 h-8" />
        </button>
      </header>

      <div
        id="share"
        className={`fixed top-0 right-0 h-screen w-84 z-50 shadow-2xl transition-transform duration-300 ease-in-out ${
          dark ? "bg-neutral-900/90 backdrop-blur-xl" : "bg-white"
        } ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className={`w-full h-16 flex items-center justify-between px-6 border-b ${dark ? "border-white/10" : "border-gray-100"}`}>
          <span className={`text-xs font-bold tracking-widest uppercase ${dark ? "text-white" : "text-black"}`}>Partager</span>
          <button
            onClick={() => setIsOpen(false)}
            className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition-colors ${
              dark ? "bg-white/10 hover:bg-white/20" : "bg-gray-100 hover:bg-gray-200"
            }`}
            aria-label="Close"
          >
            <img src={icons.cross} alt="Fermer" className="w-8 h-8" />
          </button>
        </div>

        <div className="flex flex-col h-[calc(100vh-64px)] overflow-y-auto">
          {[
            { name: "Facebook", icon: icons.facebook, key: "Facebook" },
            { name: "Twitter / X", icon: icons.twitter, key: "Twitter / X" },
            { name: "LinkedIn", icon: icons.linkedin, key: "LinkedIn" },
            { name: "Whatsapp", icon: icons.wa, key: "Whatsapp" },
            { name: "Email", icon: icons.plane, key: "Email" },
            { name: copied ? "URL copiée !" : "Copier l'URL", icon: icons.share, key: "Copier l'URL" }
          ].map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleShare(item.key)}
              className={`flex cursor-pointer items-center gap-3 py-6 px-6 border-b text-left group transition-colors w-full ${
                dark ? "border-white/10 hover:bg-white/5" : "border-gray-100 hover:bg-gray-50"
              }`}
            >
              <span className={`w-9 flex justify-center ${dark ? "text-white" : "text-gray-800"}`}>
                <img src={item.icon} alt={item.name} className="w-9 h-9 opacity-80 group-hover:opacity-100 transition-opacity" />
              </span>
              <span className={dark ? "text-white/85 group-hover:text-white" : "text-gray-800 group-hover:text-black"}>{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
