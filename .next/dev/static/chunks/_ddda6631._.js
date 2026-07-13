(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/config/variables.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ---------------------------------------------------------------------------
// 📝 CONFIGURATION DE LA STORY
// C'est le SEUL fichier à modifier pour configurer une nouvelle story.
// ---------------------------------------------------------------------------
__turbopack_context__.s([
    "ABSOLUTE_SOCIAL_URL",
    ()=>ABSOLUTE_SOCIAL_URL,
    "STORY",
    ()=>STORY
]);
const STORY = {
    // Infos générales
    title: "Naïka, le nouveau joyau de la pop cosmopolite",
    metaTitle: "Montreux Jazz: dans les coulisses de Naïka, joyau de la pop cosmopolite",
    ogTitle: "Naïka, le nouveau joyau de la pop cosmopolite",
    titleDisplay: "Naïka,<br>le nouveau joyau<br>de la pop cosmopolite",
    description: "Pendant près de neuf heures, L'illustré a suivi Naïka dans les coulisses de sa première au Montreux Jazz Festival. Rencontre intime avec la chanteuse franco-haïtienne aux millions d'écoutes.",
    author: "L'illustré",
    publicationDate: "2026-07-09",
    publicationDisplayDate: "9 juillet 2026",
    // URLs
    // L'URL finale où sera hébergé le projet (Important pour le SEO Facebook/Twitter)
    url: "https://storytelling.blick.ch/fr/2026/naika-montreux-jazz-festival/",
    // Nom de l'image dans le dossier 'public' (ex: "social.jpg")
    socialImageFilename: "images/social.jpg",
    // Crédits de fin d'article
    credits: [
        {
            name: "L'illustré",
            produces: "Production",
            inCredits: true
        },
        {
            name: "L'illustré",
            isAuthor: true,
            inCredits: true,
            job: "Journaliste",
            produces: "Texte",
            img: null
        },
        {
            name: "À compléter",
            isAuthor: false,
            inCredits: true,
            job: "Photographe",
            produces: "Photos",
            img: null
        },
        {
            name: "César Greppin",
            isAuthor: false,
            inCredits: true,
            job: "Développement",
            produces: "Format web",
            img: "cesar-greppin.jpg"
        }
    ],
    // Esthétique
    themeColor: "#000000",
    logoColor: "#000000",
    // Technique (ne touchez pas si vous n'avez pas besoin)
    siteName: "Blick.ch/fr",
    twitterHandle: "@Blick_fr",
    faviconBaseUrl: "https://storytelling.blick.ch/fr/__is_embed_somewhere/favicon"
};
const ABSOLUTE_SOCIAL_URL = `${STORY.url.replace(/\/$/, "")}/${STORY.socialImageFilename}`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/variables.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function BlickLogo({ color = "black" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "h-7 w-auto",
        xmlns: "http://www.w3.org/2000/svg",
        width: "100",
        height: "36.463",
        viewBox: "0 0 100 36.463",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            id: "Blick_Logo_Rot_RGB",
            d: "M14.166,21.684H8.333v6.63h5.833a3.315,3.315,0,1,0,0-6.63M12.917,9.807H8.333v6.354h4.584a3.177,3.177,0,1,0,0-6.354M26.111,25.412a10.249,10.249,0,0,1-10.278,10.22H0V2.487H14.722a9.7,9.7,0,0,1,9.723,9.669,9.579,9.579,0,0,1-1.8,5.605,10.173,10.173,0,0,1,3.469,7.654M41.667,35.633H50V12.43H41.667v23.2Zm58.333,0H90.277l-6.944-9.207v9.207H75V1.382h8.333V20.717L90,12.43h9.445l-8.89,11.049Zm-71.112,0h8.333V1.382H28.888V35.635ZM41.11,4.7a4.722,4.722,0,1,1,4.721,4.7A4.71,4.71,0,0,1,41.11,4.7M68.889,19.612l3.61-5.8a12.17,12.17,0,0,0-7.222-2.21,12.431,12.431,0,1,0,0,24.861,12.17,12.17,0,0,0,7.222-2.21l-3.61-5.8a6.756,6.756,0,0,1-3.055.828,5.249,5.249,0,1,1,0-10.5,6.78,6.78,0,0,1,3.055.828",
            fill: color
        }, void 0, false, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Header.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = BlickLogo;
function Header({ theme = "light" }) {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const lastScrollYRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const isOpenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [shareUrl, setShareUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORY"].url);
    const dark = theme === "dark";
    // Suffixe des icônes: versions noires (-b-) ou blanches (-w-)
    const icons = dark ? {
        share: "images/icon-share-w-noborder.svg",
        cross: "images/icon-cross-white-noborder.svg",
        facebook: "images/icon-facebook-w-noborder.svg",
        twitter: "images/icon-twitter-w-noborder.svg",
        linkedin: "images/icon-linkedin-w-noborder.svg",
        wa: "images/icon-wa-w-noborder.svg",
        plane: "images/icon-plane-w-noborder.svg"
    } : {
        share: "images/icon-share-b-noborder.svg",
        cross: "images/icon-cross-black-noborder.svg",
        facebook: "images/icon-facebook-b-noborder.svg",
        twitter: "images/icon-twitter-b-noborder.svg",
        linkedin: "images/icon-linkedin-b-noborder.svg",
        wa: "images/icon-wa-b-noborder.svg",
        plane: "images/icon-plane-b-noborder.svg"
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                setShareUrl(window.location.href);
            }
        }
    }["Header.useEffect"], []);
    const handleShare = (platform)=>{
        const url = encodeURIComponent(shareUrl);
        const text = encodeURIComponent(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORY"].title);
        switch(platform){
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
                navigator.clipboard.writeText(shareUrl).then(()=>{
                    setCopied(true);
                    setTimeout(()=>setCopied(false), 2000);
                });
                break;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            isOpenRef.current = isOpen;
        }
    }["Header.useEffect"], [
        isOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const handleScroll = {
                "Header.useEffect.handleScroll": ()=>{
                    const currentScrollY = window.scrollY;
                    if (currentScrollY < 100) {
                        setIsVisible(true);
                    } else if (currentScrollY > lastScrollYRef.current) {
                        if (!isOpenRef.current) setIsVisible(false);
                    } else {
                        setIsVisible(true);
                    }
                    lastScrollYRef.current = currentScrollY;
                }
            }["Header.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "Header.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 bg-black/40 z-30 transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`,
                onClick: ()=>setIsOpen(false),
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-4 md:px-6 z-40 transition-transform duration-300 ease-in-out ${dark ? "bg-black/40 backdrop-blur-md border-b border-white/10" : "bg-white border-b border-gray-100"} ${isVisible ? "translate-y-0" : "-translate-y-full"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BlickLogo, {
                            color: dark ? "#ffffff" : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORY"].logoColor || "black"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsOpen(true),
                        className: `w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition-colors ${dark ? "bg-white/10 hover:bg-white/20" : "bg-gray-100 hover:bg-gray-200"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: icons.share,
                            alt: "Partager",
                            className: "w-8 h-8"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "share",
                className: `fixed top-0 right-0 h-screen w-84 z-50 shadow-2xl transition-transform duration-300 ease-in-out ${dark ? "bg-neutral-900/90 backdrop-blur-xl" : "bg-white"} ${isOpen ? "translate-x-0" : "translate-x-full"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-full h-16 flex items-center justify-between px-6 border-b ${dark ? "border-white/10" : "border-gray-100"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-xs font-bold tracking-widest uppercase ${dark ? "text-white" : "text-black"}`,
                                children: "Partager"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsOpen(false),
                                className: `w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition-colors ${dark ? "bg-white/10 hover:bg-white/20" : "bg-gray-100 hover:bg-gray-200"}`,
                                "aria-label": "Close",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: icons.cross,
                                    alt: "Fermer",
                                    className: "w-8 h-8"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col h-[calc(100vh-64px)] overflow-y-auto",
                        children: [
                            {
                                name: "Facebook",
                                icon: icons.facebook,
                                key: "Facebook"
                            },
                            {
                                name: "Twitter / X",
                                icon: icons.twitter,
                                key: "Twitter / X"
                            },
                            {
                                name: "LinkedIn",
                                icon: icons.linkedin,
                                key: "LinkedIn"
                            },
                            {
                                name: "Whatsapp",
                                icon: icons.wa,
                                key: "Whatsapp"
                            },
                            {
                                name: "Email",
                                icon: icons.plane,
                                key: "Email"
                            },
                            {
                                name: copied ? "URL copiée !" : "Copier l'URL",
                                icon: icons.share,
                                key: "Copier l'URL"
                            }
                        ].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleShare(item.key),
                                className: `flex cursor-pointer items-center gap-3 py-6 px-6 border-b text-left group transition-colors w-full ${dark ? "border-white/10 hover:bg-white/5" : "border-gray-100 hover:bg-gray-50"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `w-9 flex justify-center ${dark ? "text-white" : "text-gray-800"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: item.icon,
                                            alt: item.name,
                                            className: "w-9 h-9 opacity-80 group-hover:opacity-100 transition-opacity"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 177,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: dark ? "text-white/85 group-hover:text-white" : "text-gray-800 group-hover:text-black",
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Header, "3TPRMJMD7byDge79vKt5swS+Qdo=");
_c1 = Header;
var _c, _c1;
__turbopack_context__.k.register(_c, "BlickLogo");
__turbopack_context__.k.register(_c1, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ImmersiveStory.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImmersiveStory",
    ()=>ImmersiveStory,
    "ScrollCue",
    ()=>ScrollCue,
    "StoryHeading",
    ()=>StoryHeading,
    "StoryKicker",
    ()=>StoryKicker,
    "StorySection",
    ()=>StorySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const StoryContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const bgKey = (bg)=>`${bg.src}|${bg.position ?? ""}|${bg.positionMobile ?? ""}`;
function ImmersiveStory({ children, className = "", scrim = "light" }) {
    _s();
    const [backgrounds, setBackgrounds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeKey, setActiveKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mountedKeys, setMountedKeys] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ImmersiveStory.useState": ()=>new Set()
    }["ImmersiveStory.useState"]);
    const sectionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const backgroundsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const activeKeyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const observerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Active une image: cross-fade + montage progressif (image courante,
    // précédente et suivante — la suivante est ainsi préchargée à l'avance)
    const activate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImmersiveStory.useCallback[activate]": (key)=>{
            activeKeyRef.current = key;
            setActiveKey(key);
            setMountedKeys({
                "ImmersiveStory.useCallback[activate]": (prev)=>{
                    const next = new Set(prev);
                    next.add(key);
                    const list = backgroundsRef.current;
                    const idx = list.findIndex({
                        "ImmersiveStory.useCallback[activate].idx": (b)=>bgKey(b) === key
                    }["ImmersiveStory.useCallback[activate].idx"]);
                    if (idx >= 0 && list[idx + 1]) next.add(bgKey(list[idx + 1]));
                    if (idx > 0) next.add(bgKey(list[idx - 1]));
                    return next.size === prev.size ? prev : next;
                }
            }["ImmersiveStory.useCallback[activate]"]);
        }
    }["ImmersiveStory.useCallback[activate]"], []);
    const register = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImmersiveStory.useCallback[register]": (el, bg)=>{
            sectionsRef.current.set(el, bg);
            // Liste ordonnée (ordre du document) des images uniques
            const key = bgKey(bg);
            if (!backgroundsRef.current.some({
                "ImmersiveStory.useCallback[register]": (b)=>bgKey(b) === key
            }["ImmersiveStory.useCallback[register]"])) {
                backgroundsRef.current = [
                    ...backgroundsRef.current,
                    bg
                ];
                setBackgrounds(backgroundsRef.current);
            }
            // Observer unique: déclenche quand une section traverse la bande
            // centrale du viewport (10% de hauteur autour du centre)
            if (!observerRef.current && ("TURBOPACK compile-time value", "object") !== "undefined") {
                observerRef.current = new IntersectionObserver({
                    "ImmersiveStory.useCallback[register]": (entries)=>{
                        for (const entry of entries){
                            if (entry.isIntersecting) {
                                const cfg = sectionsRef.current.get(entry.target);
                                if (cfg) activate(bgKey(cfg));
                            }
                        }
                    }
                }["ImmersiveStory.useCallback[register]"], {
                    rootMargin: "-45% 0px -45% 0px",
                    threshold: 0
                });
            }
            observerRef.current?.observe(el);
            // La première section enregistrée devient le fond initial
            if (activeKeyRef.current === null) activate(key);
            return ({
                "ImmersiveStory.useCallback[register]": ()=>{
                    sectionsRef.current.delete(el);
                    observerRef.current?.unobserve(el);
                }
            })["ImmersiveStory.useCallback[register]"];
        }
    }["ImmersiveStory.useCallback[register]"], [
        activate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImmersiveStory.useEffect": ()=>({
                "ImmersiveStory.useEffect": ()=>observerRef.current?.disconnect()
            })["ImmersiveStory.useEffect"]
    }["ImmersiveStory.useEffect"], []);
    const scrimClass = scrim === "none" ? null : scrim === "medium" ? "bg-gradient-to-b from-black/50 via-black/25 to-black/60" : "bg-gradient-to-b from-black/40 via-black/10 to-black/50";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StoryContext.Provider, {
        value: register,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-0 overflow-hidden bg-black",
                "aria-hidden": "true",
                children: [
                    backgrounds.map((bg)=>{
                        const key = bgKey(bg);
                        if (!mountedKeys.has(key)) return null;
                        const isActive = key === activeKey;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: bg.src,
                            alt: "",
                            draggable: false,
                            decoding: "async",
                            className: `story-bg-img absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-in-out ${isActive ? "opacity-100 story-bg-active" : "opacity-0"}`,
                            style: {
                                "--bg-pos": bg.position ?? "50% 50%",
                                "--bg-pos-m": bg.positionMobile ?? bg.position ?? "50% 50%"
                            }
                        }, key, false, {
                            fileName: "[project]/src/components/ImmersiveStory.tsx",
                            lineNumber: 138,
                            columnNumber: 13
                        }, this);
                    }),
                    scrimClass && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute inset-0 ${scrimClass}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/ImmersiveStory.tsx",
                        lineNumber: 156,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ImmersiveStory.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative z-10 ${className}`,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ImmersiveStory.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ImmersiveStory.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_s(ImmersiveStory, "Bkb3DBIOSkRa5cRMny9FjnsDUBI=");
_c = ImmersiveStory;
const HEIGHT_CLASSES = {
    short: "min-h-[100svh]",
    normal: "min-h-[150vh]",
    tall: "min-h-[200vh]"
};
const WIDTH_CLASSES = {
    narrow: "max-w-md",
    medium: "max-w-xl",
    wide: "max-w-2xl"
};
const ALIGN_CLASSES = {
    left: "md:justify-start",
    center: "md:justify-center",
    right: "md:justify-end"
};
function StorySection({ image, imagePosition, imagePositionMobile, align = "center", variant = "glass", height = "normal", width = "medium", textAlign, id, className = "", contentClassName = "", children }) {
    _s1();
    const register = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(StoryContext);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StorySection.useEffect": ()=>{
            if (!register || !ref.current) return;
            return register(ref.current, {
                src: image,
                position: imagePosition,
                positionMobile: imagePositionMobile
            });
        }
    }["StorySection.useEffect"], [
        register,
        image,
        imagePosition,
        imagePositionMobile
    ]);
    const resolvedTextAlign = textAlign ?? (align === "center" ? "center" : "left");
    const variantClasses = variant === "glass" ? "story-glass p-6 md:p-9" : "story-text-shadow";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        ref: ref,
        className: `relative flex flex-col justify-center px-5 py-24 md:px-[7%] ${HEIGHT_CLASSES[height]} ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `flex w-full max-w-screen-2xl mx-auto justify-center ${ALIGN_CLASSES[align]}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-full text-white ${WIDTH_CLASSES[width]} ${variantClasses} text-${resolvedTextAlign} ${contentClassName}`,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ImmersiveStory.tsx",
                lineNumber: 248,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ImmersiveStory.tsx",
            lineNumber: 247,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ImmersiveStory.tsx",
        lineNumber: 242,
        columnNumber: 5
    }, this);
}
_s1(StorySection, "mG+P6h6lFoBju9kWkLFbsJibia0=");
_c1 = StorySection;
function StoryKicker({ children, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: `text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-white/80 mb-4 ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ImmersiveStory.tsx",
        lineNumber: 265,
        columnNumber: 5
    }, this);
}
_c2 = StoryKicker;
function StoryHeading({ children, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
        className: `text-3xl md:text-5xl font-bold leading-tight mb-6 ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ImmersiveStory.tsx",
        lineNumber: 274,
        columnNumber: 5
    }, this);
}
_c3 = StoryHeading;
function ScrollCue({ label = "Faites défiler" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[11px] tracking-[0.3em] uppercase",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ImmersiveStory.tsx",
                lineNumber: 284,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-6 h-6 animate-bounce",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                viewBox: "0 0 24 24",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M19 9l-7 7-7-7"
                }, void 0, false, {
                    fileName: "[project]/src/components/ImmersiveStory.tsx",
                    lineNumber: 293,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ImmersiveStory.tsx",
                lineNumber: 285,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ImmersiveStory.tsx",
        lineNumber: 283,
        columnNumber: 5
    }, this);
}
_c4 = ScrollCue;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "ImmersiveStory");
__turbopack_context__.k.register(_c1, "StorySection");
__turbopack_context__.k.register(_c2, "StoryKicker");
__turbopack_context__.k.register(_c3, "StoryHeading");
__turbopack_context__.k.register(_c4, "ScrollCue");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_ddda6631._.js.map