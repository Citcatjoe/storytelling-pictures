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
    title: "Business de l’ombre: comment le groupe Orllati accapare des terres agricoles ",
    metaTitle: "Immobilier: Comment le groupe Orllati accapare des terres agricoles?",
    ogTitle: "Comment des terres agricoles sont accaparées par Orllati",
    titleDisplay: "Business de l’ombre:<br>comment le groupe Orllati<br>accapare des terres agricoles ",
    description: "Via des sociétés agricoles, le groupe de construction Orllati acquiert des parcelles normalement réservées aux paysans. Enquête sur un business de l'ombre",
    author: "Camille Krafft",
    publicationDate: "2026-06-26",
    publicationDisplayDate: "26 juin 2026",
    // URLs
    // L'URL finale où sera hébergé le projet (Important pour le SEO Facebook/Twitter)
    url: "https://storytelling.blick.ch/fr/2026/orllati-accaparement-terres-agricoles/",
    // Nom de l'image dans le dossier 'public' (ex: "social.jpg")
    socialImageFilename: "images/social.jpg",
    // Crédits de fin d'article
    credits: [
        {
            name: "Blick Suisse romande",
            produces: "Production",
            inCredits: true
        },
        {
            name: "Camille Krafft",
            isAuthor: true,
            inCredits: true,
            job: "Journaliste Blick",
            produces: "Enquête",
            img: "camille-krafft.jpg",
            link: "https://www.blick.ch/fr/auteurs/camille-krafft-journaliste-blick-id20560911.html"
        },
        {
            name: "Antoine Harari",
            isAuthor: true,
            inCredits: true,
            job: "Journaliste indépendant",
            produces: "Enquête",
            img: "antoine-harari.jpg"
        },
        {
            name: "Julie Body",
            isAuthor: false,
            inCredits: true,
            job: "Ai creative director",
            produces: "Visuels",
            img: "julie-body.jpg"
        },
        {
            name: "Blaise Kormann",
            isAuthor: false,
            inCredits: true,
            job: "Photographe",
            produces: "Photos",
            img: null
        },
        {
            name: "Alexandre Caporal",
            isAuthor: false,
            inCredits: true,
            job: "Vidéaste",
            produces: "Montages vidéos",
            img: null
        },
        {
            name: "Adam Malard",
            isAuthor: false,
            inCredits: true,
            job: "Vidéaste",
            produces: "Montages vidéos",
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
    themeColor: "#ff0000",
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
function Header() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const lastScrollYRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const isOpenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [shareUrl, setShareUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORY"].url);
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
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 md:px-6 z-40 transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BlickLogo, {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORY"].logoColor || "black"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsOpen(true),
                        className: "w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "images/icon-share-b-noborder.svg",
                            alt: "Partager",
                            className: "w-8 h-8"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "share",
                className: `fixed top-0 right-0 h-screen w-84 bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-16 flex items-center justify-between px-6 border-b border-gray-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-black font-bold tracking-widest uppercase",
                                children: "Partager"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsOpen(false),
                                className: "w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer transition-colors",
                                "aria-label": "Close",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "images/icon-cross-black-noborder.svg",
                                    alt: "Fermer",
                                    className: "w-8 h-8"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col h-[calc(100vh-64px)] overflow-y-auto",
                        children: [
                            {
                                name: "Facebook",
                                icon: "images/icon-facebook-b-noborder.svg",
                                key: "Facebook"
                            },
                            {
                                name: "Twitter / X",
                                icon: "images/icon-twitter-b-noborder.svg",
                                key: "Twitter / X"
                            },
                            //{ name: "Threads", icon: "images/icon-threads-b-noborder.svg", key: "Threads" },
                            {
                                name: "LinkedIn",
                                icon: "images/icon-linkedin-b-noborder.svg",
                                key: "LinkedIn"
                            },
                            {
                                name: "Whatsapp",
                                icon: "images/icon-wa-b-noborder.svg",
                                key: "Whatsapp"
                            },
                            {
                                name: "Email",
                                icon: "images/icon-plane-b-noborder.svg",
                                key: "Email"
                            },
                            {
                                name: copied ? "URL copiée !" : "Copier l'URL",
                                icon: "images/icon-share-b-noborder.svg",
                                key: "Copier l'URL"
                            }
                        ].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleShare(item.key),
                                className: "flex cursor-pointer items-center gap-3 py-6 px-6 border-b border-gray-100 hover:bg-gray-50 text-left group transition-colors w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-9 flex justify-center text-gray-800",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: item.icon,
                                            alt: item.name,
                                            className: "w-9 h-9 opacity-80 group-hover:opacity-100 transition-opacity"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 140,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-800 text-normal font-regular group-hover:text-black",
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 109,
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
"[project]/src/components/Image.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Image",
    ()=>Image
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$medium$2d$image$2d$zoom$2f$dist$2f$Uncontrolled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Uncontrolled__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/react-medium-image-zoom/dist/Uncontrolled.js [app-client] (ecmascript) <export Uncontrolled as default>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Image({ src, alt = "Image", ratio, placeholderTxt = "Zoning Image", className = "", imgClassName = "", zoomable = true, forceRatio = false }) {
    _s();
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const imgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "Image.useLayoutEffect": ()=>{
            if (imgRef.current) {
                if (imgRef.current.complete) {
                    setIsLoaded(true);
                } else {
                    setIsLoaded(false);
                }
            }
        }
    }["Image.useLayoutEffect"], [
        src
    ]);
    const handleLoad = ()=>setIsLoaded(true);
    const handleError = ()=>setIsLoaded(true); // Évite de bloquer sur le skeleton si l'image est cassée
    const hasImage = !!src;
    // Si forceRatio est activé (ou si c'est un placeholder), on applique le ratio d'aspect sur le conteneur.
    // Sinon, on laisse couler l'image naturellement (w-full h-auto) pour simplifier le zoom.
    const shouldApplyRatio = ratio && (!hasImage || forceRatio);
    const containerStyle = shouldApplyRatio ? {
        aspectRatio: ratio
    } : {};
    // Check if a rounded class is provided in className or imgClassName to avoid conflicts
    const hasRoundedInContainer = /\brounded-/.test(className);
    const containerRounded = hasRoundedInContainer ? "" : "rounded-2xl";
    const hasRoundedInImg = /\brounded-/.test(imgClassName);
    const imgRounded = hasRoundedInImg ? "" : className.split(/\s+/).filter((c)=>c.startsWith('rounded-') || c.includes(':rounded-')).join(' ') || "rounded-2xl";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative w-full overflow-hidden ${containerRounded} bg-[#E5DCC3]/10 ${shouldApplyRatio ? "image-fill-container" : ""} ${!isLoaded && hasImage && !shouldApplyRatio ? "min-h-[220px]" : ""} ${className}`,
        style: containerStyle,
        children: hasImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                !isLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-neutral-200 flex items-center justify-center min-h-[220px] overflow-hidden z-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-shimmer"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Image.tsx",
                            lineNumber: 77,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1",
                            className: "w-10 h-10 text-neutral-400/40 animate-pulse relative z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    width: "18",
                                    height: "18",
                                    x: "3",
                                    y: "3",
                                    rx: "2",
                                    ry: "2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Image.tsx",
                                    lineNumber: 86,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "9",
                                    cy: "9",
                                    r: "2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Image.tsx",
                                    lineNumber: 87,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Image.tsx",
                                    lineNumber: 88,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Image.tsx",
                            lineNumber: 78,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Image.tsx",
                    lineNumber: 76,
                    columnNumber: 13
                }, this),
                zoomable ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$medium$2d$image$2d$zoom$2f$dist$2f$Uncontrolled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Uncontrolled__as__default$3e$__["default"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        ref: imgRef,
                        src: src,
                        alt: alt,
                        loading: "lazy",
                        onLoad: handleLoad,
                        onError: handleError,
                        className: `w-full bg-slate-50 cursor-zoom-in ${imgRounded} transition-opacity duration-500 ease-out ${isLoaded ? "opacity-100" : "opacity-0"} ${shouldApplyRatio ? "h-full object-cover" : "h-auto"} ${imgClassName}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/Image.tsx",
                        lineNumber: 95,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Image.tsx",
                    lineNumber: 94,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    ref: imgRef,
                    src: src,
                    alt: alt,
                    loading: "lazy",
                    onLoad: handleLoad,
                    onError: handleError,
                    className: `w-full ${imgRounded} transition-opacity duration-500 ease-out ${isLoaded ? "opacity-100" : "opacity-0"} ${shouldApplyRatio ? "h-full object-cover" : "h-auto"} ${imgClassName}`
                }, void 0, false, {
                    fileName: "[project]/src/components/Image.tsx",
                    lineNumber: 108,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true) : /* Mode 2 : Place-holder de zoning premium */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `w-full h-full ${containerRounded} bg-[#E5DCC3]/15 border-2 border-dashed border-[#CBBFA0] flex flex-col items-center justify-center p-6 text-center select-none`,
            style: {
                minHeight: ratio ? undefined : '220px',
                aspectRatio: ratio
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className: "w-8 h-8 text-[#A69B7B] opacity-40 mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            width: "18",
                            height: "18",
                            x: "3",
                            y: "3",
                            rx: "2",
                            ry: "2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Image.tsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "9",
                            cy: "9",
                            r: "2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Image.tsx",
                            lineNumber: 138,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Image.tsx",
                            lineNumber: 139,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Image.tsx",
                    lineNumber: 127,
                    columnNumber: 11
                }, this),
                placeholderTxt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm font-medium text-[#8E8366] leading-tight mb-1.5 max-w-[80%]",
                    children: placeholderTxt
                }, void 0, false, {
                    fileName: "[project]/src/components/Image.tsx",
                    lineNumber: 143,
                    columnNumber: 13
                }, this),
                ratio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[10px] font-mono uppercase tracking-widest text-[#A69B7B] opacity-75",
                    children: [
                        "Ratio ",
                        ratio
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Image.tsx",
                    lineNumber: 149,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Image.tsx",
            lineNumber: 123,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Image.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_s(Image, "rhNi3ubsNE4t03vnyMXpB8DkOdw=");
_c = Image;
var _c;
__turbopack_context__.k.register(_c, "Image");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Authors3.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Authors3",
    ()=>Authors3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Authors3({ authors, date }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto w-full max-w-2xl mt-8 sm:mt-10 select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row justify-between items-stretch gap-y-4 gap-x-0",
                children: authors.map((author, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "group flex-1 flex flex-row sm:flex-col items-center sm:items-center text-left sm:text-center py-0 sm:px-4 sm:py-0 gap-4 sm:gap-3 sm:border-r sm:border-[#CBBFA0] last:sm:border-r-0",
                        children: [
                            author.img && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: `images/${author.img}`,
                                alt: author.name,
                                className: "w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover bg-gray-100 shadow-lg shrink-0",
                                loading: "lazy"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Authors3.tsx",
                                lineNumber: 23,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs leading-tight flex flex-col gap-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-bold tracking-tight text-gray-700",
                                        children: author.link ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: author.link,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "underline underline-offset-2 hover:text-accent2 transition-colors",
                                            children: author.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Authors3.tsx",
                                            lineNumber: 33,
                                            columnNumber: 19
                                        }, this) : author.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Authors3.tsx",
                                        lineNumber: 31,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[#8E8366] opacity-100",
                                        children: author.job
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Authors3.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Authors3.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/Authors3.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Authors3.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[12px] text-[#E20000] font-mono mt-6 md:mt-10 text-left sm:text-center",
                children: [
                    "Publié le ",
                    date
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Authors3.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Authors3.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = Authors3;
var _c;
__turbopack_context__.k.register(_c, "Authors3");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/variables.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Image.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Authors3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Authors3.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
const colorMap = {
    violet: "bg-purple-600",
    purple: "bg-purple-600",
    rouge: "bg-[#E20000]",
    red: "bg-[#E20000]",
    jaune: "bg-amber-500",
    yellow: "bg-amber-500",
    vert: "bg-[#009FAB]",
    green: "bg-[#009FAB]"
};
function Hero({ category = "Enquête", title = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORY"].title, titleDisplay = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORY"].titleDisplay || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORY"].title, subtitle = "En s’appuyant sur des agriculteurs placés dans des sociétés anonymes, le promoteur vaudois, également actif dans les décharges et le béton, contrôle des parcelles qui devraient être réservées à des paysans exploitant eux-mêmes leurs terres. Avec des avantages stratégiques et financiers à la clé. ", badge, badgeColor = "violet", imageSrc, imageAlt = "Illustration principale", ratio = "16/9" }) {
    // Resolve badge color
    const resolvedBgColor = badgeColor.startsWith("bg-") ? badgeColor : colorMap[badgeColor.toLowerCase()] || "bg-purple-600";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "hero",
        className: "bg-trame pt-8 pb-8 md:pt-20 md:pb-14 -mx-4 md:-mx-7 -mt-4 md:-mt-7",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "hero-container",
            className: "w-full mx-auto max-w-6xl px-4 md:px-0 [@container]",
            children: [
                category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center gap-4 select-none text-sm md:text-lg font-mono font-black uppercase tracking-[0.35em] text-[#E20000]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "h-[2px] md:h-[2px] w-12 md:w-20 bg-[#E20000]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: category
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "h-[2px] md:h-[2px] w-12 md:w-20 bg-[#E20000]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 50,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-center text-[clamp(1.5rem,6cqw,4rem)] leading-[1.083] tracking-tighter font-black mt-6 md:mt-10 antialiased",
                    children: titleDisplay.split("<br>").map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block sm:whitespace-nowrap",
                            children: line
                        }, i, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                    className: "mt-6 md:mt-12 -mx-4 w-[calc(100%+2rem)] md:mx-auto md:w-full md:max-w-screen-2xl md:px-7 relative transition-all duration-300",
                    children: [
                        badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-4 right-4 md:right-11 z-10 select-none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `inline-flex items-center px-4 py-2 rounded-none text-xs font-mono font-bold uppercase tracking-wider text-white border-2 border-black shadow-[3px_3px_0px_#000] transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-200 ${resolvedBgColor}`,
                                children: badge
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 68,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                            src: imageSrc,
                            alt: imageAlt,
                            placeholderTxt: "Illustration principale",
                            ratio: ratio,
                            forceRatio: true,
                            className: "rounded-none md:rounded-lg"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-[672px] mx-auto mt-8 md:mt-12 text-gray-800 leading-relaxed",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-medium text-xl md:text-2xl",
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 85,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 84,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Authors3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Authors3"], {
                    authors: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORY"].credits.filter((credit)=>credit.isAuthor).map((credit)=>({
                            name: credit.name,
                            job: credit.job || "",
                            img: credit.img || "",
                            link: credit.link
                        })),
                    date: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORY"].publicationDisplayDate
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Hero.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/config/layout.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Configuration des débordements (Breakouts)
 * Utilisé pour aligner les Galeries et les Blocs de mise en avant.
 */ __turbopack_context__.s([
    "BREAKOUTS",
    ()=>BREAKOUTS,
    "mergeMargins",
    ()=>mergeMargins
]);
const BREAKOUTS = {
    // Mode "Medium" : Largeur intermédiaire d'environ 968px max
    med: {
        container: "w-full max-w-[968px] mx-auto px-4 md:px-7"
    },
    // Mode "High" : Largeur maximale (Hero Edge) s'alignant sur l'Article (1536px max)
    high: {
        container: "w-full max-w-screen-2xl mx-auto px-4 md:px-7",
        pageFullWidth: "-mx-4 md:-mx-7 w-[calc(100%+2rem)] md:w-[calc(100%+3.5rem)]"
    }
};
function mergeMargins(defaultClasses, customClasses) {
    if (!customClasses) return defaultClasses;
    const customWords = customClasses.trim().split(/\s+/);
    const hasCustomMargin = customWords.some((w)=>/^([a-z0-9]+:)?-?m[tblrxy]?-\S+/.test(w));
    if (!hasCustomMargin) {
        return `${defaultClasses} ${customClasses}`;
    }
    const hasMt = customWords.some((w)=>/^([a-z0-9]+:)?-?mt-\S+/.test(w));
    const hasMb = customWords.some((w)=>/^([a-z0-9]+:)?-?mb-\S+/.test(w));
    const hasMy = customWords.some((w)=>/^([a-z0-9]+:)?-?my-\S+/.test(w));
    const hasM = customWords.some((w)=>/^([a-z0-9]+:)?-?m-\S+/.test(w));
    let filteredDefaults = defaultClasses.split(/\s+/);
    if (hasM || hasMy) {
        filteredDefaults = filteredDefaults.filter((w)=>!/^([a-z0-9]+:)?-?(mt|mb|my|m)-\S+/.test(w));
    } else {
        if (hasMt) {
            filteredDefaults = filteredDefaults.filter((w)=>!/^([a-z0-9]+:)?-?(mt|my|m)-\S+/.test(w));
        }
        if (hasMb) {
            filteredDefaults = filteredDefaults.filter((w)=>!/^([a-z0-9]+:)?-?(mb|my|m)-\S+/.test(w));
        }
    }
    return [
        ...filteredDefaults,
        ...customWords
    ].join(" ");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MediaGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaGrid",
    ()=>MediaGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Image.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
const colorMap = {
    violet: "bg-purple-600",
    purple: "bg-purple-600",
    rouge: "bg-[#E20000]",
    red: "bg-[#E20000]",
    jaune: "bg-amber-500",
    yellow: "bg-amber-500",
    vert: "bg-[#009FAB]",
    green: "bg-[#009FAB]"
};
function MediaGrid({ children, images, ratio = "3/2", placeholderCount, placeholderTxt = "Zoning Image", overflow = "low", caption, badge, badgeColor = "rouge", className = "" }) {
    // Détermination de la largeur d'échappement (Breakout)
    let containerClass = "w-full max-w-[672px] mx-auto px-0"; // low
    if (overflow === "med") {
        containerClass = "w-full max-w-[968px] mx-auto px-0 md:px-7";
    } else if (overflow === "high") {
        containerClass = "w-full max-w-screen-2xl mx-auto px-0 md:px-7";
    }
    // Détermination des enfants à afficher (composition vs héritage des props)
    let renderedChildren = [];
    if (children) {
        renderedChildren = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.toArray(children);
    } else if (images && images.length > 0) {
        renderedChildren = images.map((src, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                src: src,
                alt: caption ? `${caption} - image ${idx + 1}` : `Image ${idx + 1}`,
                ratio: ratio
            }, idx, false, {
                fileName: "[project]/src/components/MediaGrid.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this));
    } else {
        const count = placeholderCount || 1;
        renderedChildren = Array.from({
            length: count
        }).map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                ratio: ratio,
                placeholderTxt: `${placeholderTxt} ${count > 1 ? idx + 1 : ""}`
            }, idx, false, {
                fileName: "[project]/src/components/MediaGrid.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this));
    }
    // Détermination du nombre de colonnes pour la grille
    const colCount = renderedChildren.length;
    let gridClass = "grid-cols-1";
    if (colCount === 2) gridClass = "grid-cols-1 sm:grid-cols-2 gap-4";
    if (colCount >= 3) gridClass = "grid-cols-1 sm:grid-cols-3 gap-4";
    // Resolve badge background color
    const resolvedBgColor = badgeColor.startsWith("bg-") ? badgeColor : colorMap[badgeColor.toLowerCase()] || "bg-gray-500";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
        className: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeMargins"])("mt-10 md:mt-12 mb-8 md:mb-12", className)} ${containerClass} relative transition-all duration-300`,
        children: [
            badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 right-4 z-10 select-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `inline-flex items-center px-4 py-2 rounded-none text-xs font-mono font-bold uppercase tracking-wider text-white border-2 border-black shadow-[3px_3px_0px_#000] transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-200 ${resolvedBgColor}`,
                    children: badge
                }, void 0, false, {
                    fileName: "[project]/src/components/MediaGrid.tsx",
                    lineNumber: 97,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/MediaGrid.tsx",
                lineNumber: 96,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `grid ${gridClass}`,
                children: renderedChildren
            }, void 0, false, {
                fileName: "[project]/src/components/MediaGrid.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                className: "mt-3 text-xs text-black text-left font-light leading-snug px-0",
                children: caption
            }, void 0, false, {
                fileName: "[project]/src/components/MediaGrid.tsx",
                lineNumber: 107,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MediaGrid.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
_c = MediaGrid;
var _c;
__turbopack_context__.k.register(_c, "MediaGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/DetachableBlock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DetachableBlock",
    ()=>DetachableBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/layout.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const colorMap = {
    violet: "bg-purple-600",
    purple: "bg-purple-600",
    rouge: "bg-[#E20000]",
    red: "bg-[#E20000]",
    jaune: "bg-amber-500",
    yellow: "bg-amber-500",
    vert: "bg-[#009FAB]",
    green: "bg-[#009FAB]"
};
function DetachableBlock({ children, ratio = "16/9", caption, badge, badgeColor = "rouge", className = "", title }) {
    _s();
    const [isDetached, setIsDetached] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMinimized, setIsMinimized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFlipCardOpen, setIsFlipCardOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hideDetached, setHideDetached] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const anchorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const prevIsDetachedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const renderPrevDetachedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const isFlipCardOpenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(isFlipCardOpen);
    const lastClosedTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const wasMinimizedAutomaticallyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const isMinimizedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(isMinimized);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DetachableBlock.useEffect": ()=>{
            isMinimizedRef.current = isMinimized;
        }
    }["DetachableBlock.useEffect"], [
        isMinimized
    ]);
    const [isContentVisible, setIsContentVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const intendedMinimizedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const animateMinimize = (shouldMinimize)=>{
        intendedMinimizedRef.current = shouldMinimize;
        if (shouldMinimize) {
            // 1: fade-out content
            setIsContentVisible(false);
            // 2: shrink container after fade-out finishes (200ms)
            setTimeout(()=>{
                if (intendedMinimizedRef.current) {
                    setIsMinimized(true);
                }
            }, 200);
        } else {
            // 1: expand container
            setIsMinimized(false);
            // 2: fade-in content after expand transition finishes (300ms)
            setTimeout(()=>{
                if (!intendedMinimizedRef.current) {
                    setIsContentVisible(true);
                }
            }, 300);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DetachableBlock.useEffect": ()=>{
            isFlipCardOpenRef.current = isFlipCardOpen;
            if (!isFlipCardOpen) {
                lastClosedTimeRef.current = Date.now();
                const timer = setTimeout({
                    "DetachableBlock.useEffect.timer": ()=>setHideDetached(false)
                }["DetachableBlock.useEffect.timer"], 50);
                return ({
                    "DetachableBlock.useEffect": ()=>clearTimeout(timer)
                })["DetachableBlock.useEffect"];
            } else {
                setHideDetached(true);
            }
        }
    }["DetachableBlock.useEffect"], [
        isFlipCardOpen
    ]);
    const enableTransition = isDetached && renderPrevDetachedRef.current;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DetachableBlock.useEffect": ()=>{
            renderPrevDetachedRef.current = isDetached;
        }
    }["DetachableBlock.useEffect"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DetachableBlock.useEffect": ()=>{
            const handleActiveCardsChange = {
                "DetachableBlock.useEffect.handleActiveCardsChange": ()=>{
                    const activeCards = window.__activeFlipCards;
                    setIsFlipCardOpen(activeCards ? activeCards.size > 0 : false);
                }
            }["DetachableBlock.useEffect.handleActiveCardsChange"];
            window.addEventListener("active-flip-cards-change", handleActiveCardsChange);
            handleActiveCardsChange();
            return ({
                "DetachableBlock.useEffect": ()=>{
                    window.removeEventListener("active-flip-cards-change", handleActiveCardsChange);
                }
            })["DetachableBlock.useEffect"];
        }
    }["DetachableBlock.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DetachableBlock.useEffect": ()=>{
            const handleIntersectionOrScroll = {
                "DetachableBlock.useEffect.handleIntersectionOrScroll": (bottom)=>{
                    const newDetached = bottom < 80;
                    const isCooldown = Date.now() - lastClosedTimeRef.current < 800;
                    const ignoreDetachChange = isFlipCardOpenRef.current || isCooldown;
                    if (ignoreDetachChange && !newDetached) {
                        return;
                    }
                    if (newDetached !== prevIsDetachedRef.current) {
                        prevIsDetachedRef.current = newDetached;
                        requestAnimationFrame({
                            "DetachableBlock.useEffect.handleIntersectionOrScroll": ()=>{
                                setIsDetached(newDetached);
                                if (!newDetached) {
                                    setIsMinimized(false);
                                    setIsContentVisible(true);
                                    intendedMinimizedRef.current = false;
                                    wasMinimizedAutomaticallyRef.current = false;
                                }
                            }
                        }["DetachableBlock.useEffect.handleIntersectionOrScroll"]);
                    }
                }
            }["DetachableBlock.useEffect.handleIntersectionOrScroll"];
            const observer = new IntersectionObserver({
                "DetachableBlock.useEffect": ([entry])=>{
                    handleIntersectionOrScroll(entry.boundingClientRect.bottom);
                }
            }["DetachableBlock.useEffect"], {
                threshold: 0,
                rootMargin: "-80px 0px 999999px 0px"
            });
            const currentAnchor = anchorRef.current;
            if (currentAnchor) {
                observer.observe(currentAnchor);
                // Fallback check pour attraper la restauration de scroll asynchrone des navigateurs
                const checkPosition = {
                    "DetachableBlock.useEffect.checkPosition": ()=>{
                        if (anchorRef.current) {
                            handleIntersectionOrScroll(anchorRef.current.getBoundingClientRect().bottom);
                        }
                    }
                }["DetachableBlock.useEffect.checkPosition"];
                setTimeout(checkPosition, 100);
                setTimeout(checkPosition, 500);
            }
            return ({
                "DetachableBlock.useEffect": ()=>{
                    if (currentAnchor) {
                        observer.unobserve(currentAnchor);
                    }
                }
            })["DetachableBlock.useEffect"];
        }
    }["DetachableBlock.useEffect"], []);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DetachableBlock.useEffect": ()=>{
            const handleResize = {
                "DetachableBlock.useEffect.handleResize": ()=>{
                    setIsMobile(window.innerWidth < 768);
                }
            }["DetachableBlock.useEffect.handleResize"];
            handleResize();
            window.addEventListener("resize", handleResize);
            return ({
                "DetachableBlock.useEffect": ()=>window.removeEventListener("resize", handleResize)
            })["DetachableBlock.useEffect"];
        }
    }["DetachableBlock.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DetachableBlock.useEffect": ()=>{
            const handleSectionChange = {
                "DetachableBlock.useEffect.handleSectionChange": (e)=>{
                    const sectionId = e.detail.sectionId;
                    if (sectionId === "chapitre-9") {
                        if (!isMinimizedRef.current && !intendedMinimizedRef.current) {
                            animateMinimize(true);
                            wasMinimizedAutomaticallyRef.current = true;
                        }
                    } else {
                        if (wasMinimizedAutomaticallyRef.current) {
                            animateMinimize(false);
                            wasMinimizedAutomaticallyRef.current = false;
                        }
                    }
                }
            }["DetachableBlock.useEffect.handleSectionChange"];
            window.addEventListener("zoning-map-section-change", handleSectionChange);
            return ({
                "DetachableBlock.useEffect": ()=>{
                    window.removeEventListener("zoning-map-section-change", handleSectionChange);
                }
            })["DetachableBlock.useEffect"];
        }
    }["DetachableBlock.useEffect"], []);
    const widthVal = 380;
    const formattedRatio = ratio.includes("/") ? ratio.replace("/", " / ") : ratio;
    const containerStyle = isDetached ? isMinimized ? {
        width: "56px",
        height: "56px",
        borderRadius: "28px"
    } : {
        width: isMobile ? "calc((100vw - 2rem) * 0.75)" : "calc(100vw - 3rem)",
        maxWidth: `${widthVal}px`,
        borderRadius: "16px",
        height: "auto",
        minHeight: "0px",
        minWidth: "0px"
    } : {
        aspectRatio: formattedRatio,
        height: "auto",
        minHeight: "0px",
        minWidth: "0px"
    };
    const resolvedBgColor = badgeColor.startsWith("bg-") ? badgeColor : colorMap[badgeColor.toLowerCase()] || "bg-gray-500";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeMargins"])("mt-10 mb-8", className)} w-full`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                ref: anchorRef,
                className: "w-full relative block overflow-hidden",
                style: {
                    aspectRatio: formattedRatio,
                    height: "auto",
                    minHeight: "0px",
                    minWidth: "0px",
                    margin: 0,
                    padding: 0
                },
                children: [
                    isDetached && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 border-2 border-dashed border-[#CBBFA0] bg-[#E5DCC3]/10 rounded-2xl flex flex-col items-center justify-center p-4 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[9px] font-mono text-[#8E8366] uppercase tracking-widest leading-normal select-none",
                                children: "Carte détachée"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetachableBlock.tsx",
                                lineNumber: 243,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[8px] font-mono text-[#8E8366]/70 uppercase tracking-wider leading-normal mt-1 select-none",
                                children: isMinimized ? "(cliquez sur l'icône pour rouvrir)" : "(voir en bas à gauche)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetachableBlock.tsx",
                                lineNumber: 246,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetachableBlock.tsx",
                        lineNumber: 242,
                        columnNumber: 11
                    }, this),
                    !isDetached && badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 right-4 z-10 select-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `inline-flex items-center px-4 py-2 rounded-none text-xs font-mono font-bold uppercase tracking-wider text-white border-2 border-black shadow-[3px_3px_0px_#000] transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-200 ${resolvedBgColor}`,
                            children: badge
                        }, void 0, false, {
                            fileName: "[project]/src/components/DetachableBlock.tsx",
                            lineNumber: 255,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/DetachableBlock.tsx",
                        lineNumber: 254,
                        columnNumber: 11
                    }, this),
                    !isDetached && title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 left-4 z-10 select-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-2 px-4 py-2 bg-white text-xs font-semibold text-gray-800 rounded-xl border border-gray-100/50 shadow-md font-sans",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-1.5 w-1.5 rounded-full bg-[#E20000] shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DetachableBlock.tsx",
                                    lineNumber: 269,
                                    columnNumber: 15
                                }, this),
                                title
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DetachableBlock.tsx",
                            lineNumber: 266,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/DetachableBlock.tsx",
                        lineNumber: 265,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: isDetached ? `fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 bg-white shadow-2xl border border-gray-100 ${enableTransition ? "transition-detachable" : ""} ${isMinimized ? "cursor-pointer hover:scale-110 active:scale-95 border-2 border-black flex items-center justify-center p-0 overflow-hidden transition-transform duration-200" : "cursor-default p-[5px]"} ${hideDetached ? "opacity-0 pointer-events-none" : "opacity-100"}` : "absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-gray-100 shadow-none bg-white",
                        style: isDetached ? containerStyle : {},
                        onClick: isDetached && isMinimized ? ()=>{
                            animateMinimize(false);
                            wasMinimizedAutomaticallyRef.current = false;
                        } : undefined,
                        title: isDetached && isMinimized ? "Ouvrir la carte" : undefined,
                        children: [
                            isDetached && !isMinimized && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    animateMinimize(true);
                                    wasMinimizedAutomaticallyRef.current = false;
                                },
                                className: "absolute bottom-2 right-2 bg-black text-white rounded-full w-9 h-9 flex items-center justify-center shadow-lg border border-white/20 cursor-pointer z-50",
                                "aria-label": "Réduire",
                                title: "Réduire la carte",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    strokeWidth: 2.5,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M6 18L18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetachableBlock.tsx",
                                        lineNumber: 317,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DetachableBlock.tsx",
                                    lineNumber: 309,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetachableBlock.tsx",
                                lineNumber: 299,
                                columnNumber: 13
                            }, this),
                            isDetached && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isMinimized ? "opacity-100" : "opacity-0 pointer-events-none"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2.2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    className: "w-5 h-5 text-black",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                            points: "3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetachableBlock.tsx",
                                            lineNumber: 339,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "9",
                                            y1: "3",
                                            x2: "9",
                                            y2: "18"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetachableBlock.tsx",
                                            lineNumber: 340,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "15",
                                            y1: "6",
                                            x2: "15",
                                            y2: "21"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetachableBlock.tsx",
                                            lineNumber: 341,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DetachableBlock.tsx",
                                    lineNumber: 329,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetachableBlock.tsx",
                                lineNumber: 324,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-full rounded-xl overflow-hidden relative bg-neutral-50 transition-opacity duration-200 ${!isDetached || isMinimized ? "h-full" : ""} ${isContentVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`,
                                style: isDetached && !isMinimized ? {
                                    aspectRatio: formattedRatio
                                } : {},
                                children: children
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetachableBlock.tsx",
                                lineNumber: 347,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetachableBlock.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DetachableBlock.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, this),
            caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                className: "mt-3 text-xs text-black text-left font-light leading-snug",
                children: caption
            }, void 0, false, {
                fileName: "[project]/src/components/DetachableBlock.tsx",
                lineNumber: 360,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DetachableBlock.tsx",
        lineNumber: 227,
        columnNumber: 5
    }, this);
}
_s(DetachableBlock, "JX1KlAv5EpJrKzIi6FbXwtlvPE0=");
_c = DetachableBlock;
var _c;
__turbopack_context__.k.register(_c, "DetachableBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/HighlightBlock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HighlightBlock",
    ()=>HighlightBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/layout.ts [app-client] (ecmascript)");
"use client";
;
;
// Map standard French/English color names to the design system or Tailwind classes
const colorMap = {
    violet: "bg-purple-600",
    purple: "bg-purple-600",
    rouge: "bg-[#E20000]",
    red: "bg-[#E20000]",
    jaune: "bg-amber-500",
    yellow: "bg-amber-500",
    vert: "bg-[#009FAB]",
    green: "bg-[#009FAB]"
};
function HighlightBlock({ title, text, children, bgColor = "bg-trame", className = "", badge, badgeColor = "rouge" }) {
    // Resolve badge background color
    const resolvedBgColor = badgeColor.startsWith("bg-") ? badgeColor : colorMap[badgeColor.toLowerCase()] || "bg-gray-500";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeMargins"])("mt-8 mb-8 md:mt-16 md:mb-16", className)} relative highlight ${bgColor} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BREAKOUTS"].high.pageFullWidth} pt-8 pb-12 md:pt-12 md:pb-16 transition-all duration-300`,
        children: [
            badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 right-4 md:right-10 z-10 select-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `inline-flex items-center px-4 py-2 rounded-none text-xs font-mono font-bold uppercase tracking-wider text-white border-2 border-black shadow-[3px_3px_0px_#000] transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-200 ${resolvedBgColor}`,
                    children: badge
                }, void 0, false, {
                    fileName: "[project]/src/components/HighlightBlock.tsx",
                    lineNumber: 55,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/HighlightBlock.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BREAKOUTS"].med.container} text-gray-800`,
                children: [
                    title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl md:text-3xl font-extrabold tracking-tight leading-[1.15] md:leading-[1.1] mb-3 md:mb-4 max-w-[500px]",
                        children: title.split(/<br\s*\/?>/i).map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: line
                            }, i, false, {
                                fileName: "[project]/src/components/HighlightBlock.tsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/HighlightBlock.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-semibold text-sm md:text-base text-[#755e45] leading-snug max-w-[560px] mb-6",
                        children: text
                    }, void 0, false, {
                        fileName: "[project]/src/components/HighlightBlock.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HighlightBlock.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HighlightBlock.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_c = HighlightBlock;
var _c;
__turbopack_context__.k.register(_c, "HighlightBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ChapterHeader4.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChapterHeader4",
    ()=>ChapterHeader4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$video$2e$js$2f$dist$2f$video$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/video.js/dist/video.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Image.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const colorMap = {
    violet: "bg-purple-600",
    purple: "bg-purple-600",
    rouge: "bg-[#E20000]",
    red: "bg-[#E20000]",
    jaune: "bg-amber-500",
    yellow: "bg-amber-500",
    vert: "bg-[#009FAB]",
    green: "bg-[#009FAB]"
};
function ChapterHeader4({ titlePart1, titlePart2, chapterNumber, src, videoSrc, ratio = "16/9", placeholderTxt = "Zoning En-tête", badge, badgeColor = "rouge", alt, align = "bottom", alignX = "left" }) {
    _s();
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const videoContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const playerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVideoLoaded, setIsVideoLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Formatage du numéro de chapitre (ex: 1 -> 01)
    const formattedNumber = chapterNumber !== undefined ? typeof chapterNumber === 'number' || !isNaN(Number(chapterNumber)) ? String(chapterNumber).padStart(2, '0') : chapterNumber : null;
    const resolvedAlt = alt || (titlePart1 && titlePart2 ? `${titlePart1} : ${titlePart2}` : titlePart1 || titlePart2 || "");
    const hasVideo = !!videoSrc;
    const hasImage = !hasVideo && !!src;
    const hasBg = hasVideo || hasImage;
    // Resolve badge background color
    const resolvedBgColor = badgeColor.startsWith("bg-") ? badgeColor : colorMap[badgeColor.toLowerCase()] || "bg-gray-500";
    const hasTitle = !!(formattedNumber || titlePart1 || titlePart2);
    // Initialize Video.js for autoplaying loop if videoSrc is provided
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChapterHeader4.useEffect": ()=>{
            if (!videoSrc) return;
            // Resolve JW Player ID or URLs to manifests
            let resolvedSrc = videoSrc;
            if (!videoSrc.includes("://") && !videoSrc.includes("/")) {
                resolvedSrc = `https://cdn.jwplayer.com/manifests/${videoSrc}.m3u8`;
            } else {
                const match = videoSrc.match(/\/players\/([a-zA-Z0-9]+)-[a-zA-Z0-9]+\.js/);
                if (match && match[1]) {
                    resolvedSrc = `https://cdn.jwplayer.com/manifests/${match[1]}.m3u8`;
                }
            }
            const videoElement = document.createElement("video");
            videoElement.className = "video-js w-full h-full object-cover scale-[1.015]";
            videoElement.setAttribute("playsinline", "true");
            videoElement.setAttribute("webkit-playsinline", "true");
            videoElement.muted = true;
            if (videoContainerRef.current) {
                videoContainerRef.current.appendChild(videoElement);
            }
            const player = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$video$2e$js$2f$dist$2f$video$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(videoElement, {
                controls: false,
                autoplay: false,
                muted: true,
                loop: true,
                preload: 'auto',
                fluid: false,
                fill: true,
                sources: [
                    {
                        src: resolvedSrc,
                        type: resolvedSrc.endsWith('.m3u8') ? 'application/x-mpegURL' : 'video/mp4'
                    }
                ]
            });
            playerRef.current = player;
            const onPlayOrLoaded = {
                "ChapterHeader4.useEffect.onPlayOrLoaded": ()=>{
                    setIsVideoLoaded(true);
                }
            }["ChapterHeader4.useEffect.onPlayOrLoaded"];
            player.on('loadedmetadata', onPlayOrLoaded);
            player.on('play', onPlayOrLoaded);
            player.on('playing', onPlayOrLoaded);
            const observer = new IntersectionObserver({
                "ChapterHeader4.useEffect": ([entry])=>{
                    if (playerRef.current) {
                        if (entry.isIntersecting) {
                            playerRef.current.play().catch({
                                "ChapterHeader4.useEffect": (err)=>{
                                    console.log("Autoplay play was prevented:", err);
                                }
                            }["ChapterHeader4.useEffect"]);
                        } else {
                            playerRef.current.pause();
                        }
                    }
                }
            }["ChapterHeader4.useEffect"], {
                threshold: 0.1
            });
            if (headerRef.current) {
                observer.observe(headerRef.current);
            }
            return ({
                "ChapterHeader4.useEffect": ()=>{
                    observer.disconnect();
                    if (playerRef.current) {
                        playerRef.current.dispose();
                        playerRef.current = null;
                    }
                    if (videoContainerRef.current) {
                        videoContainerRef.current.innerHTML = '';
                    }
                }
            })["ChapterHeader4.useEffect"];
        }
    }["ChapterHeader4.useEffect"], [
        videoSrc
    ]);
    let alignYClasses = "";
    if (align === "top") {
        alignYClasses = "top-[2cqw]";
    } else {
        // bottom
        alignYClasses = "bottom-[2cqw]";
    }
    let alignXClasses = "";
    if (alignX === "center") {
        alignXClasses = "left-1/2 -translate-x-[50%]";
    } else if (alignX === "right") {
        alignXClasses = "right-[2cqw] left-auto";
    } else {
        // left
        alignXClasses = "left-[2cqw] right-auto";
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        ref: headerRef,
        className: "relative w-full md:mx-auto max-w-screen-2xl md:px-7 mb-8 md:mb-12 transition-all duration-300 group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                className: `relative -mx-4 w-[calc(100%+2rem)] md:mx-0 md:w-full overflow-hidden rounded-none md:rounded-2xl transition-all duration-300 aspect-(--header-ratio) @container ${hasBg ? "bg-black" : "bg-[#E5DCC3]/15 border-2 border-dashed border-[#CBBFA0] flex flex-col items-center justify-center p-6 text-center select-none"}`,
                style: {
                    "--header-ratio": ratio,
                    containerType: "inline-size"
                },
                children: [
                    badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 right-4 z-30 select-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `inline-flex items-center px-4 py-2 rounded-none text-xs font-mono font-bold uppercase tracking-wider text-white border-2 border-black shadow-[3px_3px_0px_#000] transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-200 ${resolvedBgColor}`,
                            children: badge
                        }, void 0, false, {
                            fileName: "[project]/src/components/ChapterHeader4.tsx",
                            lineNumber: 194,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChapterHeader4.tsx",
                        lineNumber: 193,
                        columnNumber: 11
                    }, this),
                    hasVideo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            !isVideoLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-neutral-200 flex items-center justify-center overflow-hidden z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-shimmer"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ChapterHeader4.tsx",
                                    lineNumber: 205,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChapterHeader4.tsx",
                                lineNumber: 204,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: videoContainerRef,
                                className: `absolute inset-0 w-full h-full rounded-none md:rounded-2xl transition-opacity duration-500 ${isVideoLoaded ? "opacity-100" : "opacity-0"}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChapterHeader4.tsx",
                                lineNumber: 209,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true) : hasImage ? /* Mode 1: Image réelle avec zoom progressif au survol */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                            src: src,
                            alt: resolvedAlt,
                            zoomable: false,
                            className: "absolute inset-0 w-full h-full rounded-none md:rounded-2xl bg-transparent",
                            imgClassName: "w-full h-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ChapterHeader4.tsx",
                            lineNumber: 219,
                            columnNumber: 13
                        }, this)
                    }, void 0, false) : /* Mode 2: Place-holder de zoning (pas d'image réelle) */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center mb-14 md:mb-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "1",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                className: "w-10 h-10 text-[#A69B7B] opacity-40 mb-3 transition-transform duration-700 group-hover:scale-110",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        width: "18",
                                        height: "18",
                                        x: "3",
                                        y: "3",
                                        rx: "2",
                                        ry: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChapterHeader4.tsx",
                                        lineNumber: 241,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "9",
                                        cy: "9",
                                        r: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChapterHeader4.tsx",
                                        lineNumber: 242,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChapterHeader4.tsx",
                                        lineNumber: 243,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChapterHeader4.tsx",
                                lineNumber: 231,
                                columnNumber: 13
                            }, this),
                            placeholderTxt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium text-[#8E8366] leading-tight mb-2 max-w-[80%]",
                                children: placeholderTxt
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChapterHeader4.tsx",
                                lineNumber: 247,
                                columnNumber: 15
                            }, this),
                            ratio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-mono uppercase tracking-widest text-[#A69B7B] opacity-60",
                                children: [
                                    "Ratio ",
                                    ratio
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChapterHeader4.tsx",
                                lineNumber: 253,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChapterHeader4.tsx",
                        lineNumber: 229,
                        columnNumber: 11
                    }, this),
                    hasTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `hidden md:flex absolute z-20 w-[42cqw] bg-white/12 backdrop-blur-md p-[1.8cqw] rounded-[1cqw] border border-white/20 flex-col items-start text-left transition-all duration-300 shadow-lg ${alignYClasses} ${alignXClasses}`,
                        children: [
                            formattedNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-start mb-[0.8cqw] select-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-accent2 px-[0.8cqw] py-[0.15cqw] text-[1.2cqw] font-mono font-black text-white uppercase tracking-wide",
                                    children: [
                                        "CHAPITRE ",
                                        formattedNumber
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ChapterHeader4.tsx",
                                    lineNumber: 265,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChapterHeader4.tsx",
                                lineNumber: 264,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[2.2cqw] font-black tracking-tight leading-snug text-white drop-shadow-md",
                                children: [
                                    titlePart1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            titlePart1,
                                            titlePart2 ? " : " : ""
                                        ]
                                    }, void 0, true),
                                    titlePart2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "italic font-normal",
                                        children: titlePart2
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChapterHeader4.tsx",
                                        lineNumber: 273,
                                        columnNumber: 30
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChapterHeader4.tsx",
                                lineNumber: 271,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChapterHeader4.tsx",
                        lineNumber: 262,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ChapterHeader4.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            hasTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 mx-auto mt-6 w-full max-w-[672px] bg-white p-0 flex flex-col items-start text-left transition-all duration-300 md:hidden",
                children: [
                    formattedNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-start mb-2 select-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "bg-accent2 px-[0.8cqw] py-[0.10cqw] text-md font-mono font-black text-white uppercase tracking-wide",
                            children: [
                                "CHAPITRE ",
                                formattedNumber
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ChapterHeader4.tsx",
                            lineNumber: 284,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChapterHeader4.tsx",
                        lineNumber: 283,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-black tracking-tight leading-snug text-gray-900",
                        children: [
                            titlePart1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    titlePart1,
                                    titlePart2 ? " : " : ""
                                ]
                            }, void 0, true),
                            titlePart2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "italic",
                                children: titlePart2
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChapterHeader4.tsx",
                                lineNumber: 292,
                                columnNumber: 28
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChapterHeader4.tsx",
                        lineNumber: 290,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ChapterHeader4.tsx",
                lineNumber: 281,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ChapterHeader4.tsx",
        lineNumber: 179,
        columnNumber: 5
    }, this);
}
_s(ChapterHeader4, "4s734l7FQtRvdTka1ykyb90Tnxo=");
_c = ChapterHeader4;
var _c;
__turbopack_context__.k.register(_c, "ChapterHeader4");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/QuoteBlock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuoteBlock",
    ()=>QuoteBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/layout.ts [app-client] (ecmascript)");
"use client";
;
;
function QuoteBlock({ quote, author, info, imageSrc, accent = "accent2", className = "" }) {
    // Sélection de la couleur d'accentuation en fonction du prop accent
    const accentTextClass = accent === "accent2" ? "text-accent2" : "text-accent1";
    const accentBgClass = accent === "accent2" ? "bg-accent2" : "bg-accent1";
    const accentBorderClass = accent === "accent2" ? "border-accent2" : "border-accent1";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
        className: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeMargins"])("mt-12 mb-12 md:mt-16 md:mb-16", className)} mx-auto w-full max-w-[600px] flex flex-col items-center select-none text-center`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden mb-6 md:mb-8 ${accentBgClass} flex items-center justify-center border-2 ${accentBorderClass} transition-all duration-300 hover:scale-105`,
                children: imageSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: imageSrc,
                    alt: author,
                    className: "w-full h-full object-cover rounded-full"
                }, void 0, false, {
                    fileName: "[project]/src/components/QuoteBlock.tsx",
                    lineNumber: 38,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/QuoteBlock.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xl md:text-3xl font-semibold text-black leading-snug tracking-tight mb-4 md:mb-6 subpixel-antialiased px-4",
                children: quote.startsWith("«") || quote.startsWith("“") ? quote : `« ${quote} »`
            }, void 0, false, {
                fileName: "[project]/src/components/QuoteBlock.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cite", {
                className: `not-italic font-semibold text-base md:text-lg ${accentTextClass} tracking-wide transition-colors duration-300`,
                children: [
                    "— ",
                    author,
                    info ? `, ${info}` : ""
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/QuoteBlock.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/QuoteBlock.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c = QuoteBlock;
var _c;
__turbopack_context__.k.register(_c, "QuoteBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/VerticalVideo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VerticalVideo",
    ()=>VerticalVideo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$video$2e$js$2f$dist$2f$video$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/video.js/dist/video.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/layout.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function VerticalVideo({ videoSrc, poster, placeholderTxt = "Zoning Vidéo 9:16", caption, className = "" }) {
    _s();
    const outerContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const videoContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const playerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const progressBarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isDraggingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(isDragging);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VerticalVideo.useEffect": ()=>{
            isDraggingRef.current = isDragging;
        }
    }["VerticalVideo.useEffect"], [
        isDragging
    ]);
    const togglePlay = (e)=>{
        e.stopPropagation(); // Avoid triggering video container clicks twice
        if (playerRef.current) {
            if (isPlaying) {
                playerRef.current.pause();
            } else {
                const playPromise = playerRef.current.play();
                if (playPromise !== undefined) {
                    playPromise.catch((err)=>{
                        console.error("Playback error:", err);
                    });
                }
            }
        }
    };
    const updateProgressFromClientX = (clientX)=>{
        if (playerRef.current && progressBarRef.current) {
            const rect = progressBarRef.current.getBoundingClientRect();
            const clickX = clientX - rect.left;
            const width = rect.width;
            if (width > 0) {
                const newPercentage = Math.min(Math.max(0, clickX / width), 1);
                const duration = playerRef.current.duration();
                if (duration && !isNaN(duration) && isFinite(duration)) {
                    playerRef.current.currentTime(newPercentage * duration);
                }
                setProgress(newPercentage * 100);
            }
        }
    };
    const handleStartDrag = (e)=>{
        e.stopPropagation();
        setIsDragging(true);
        updateProgressFromClientX(e.clientX);
    };
    const handleTouchStart = (e)=>{
        e.stopPropagation();
        setIsDragging(true);
        if (e.touches.length > 0) {
            updateProgressFromClientX(e.touches[0].clientX);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VerticalVideo.useEffect": ()=>{
            if (!isDragging) return;
            const handleMouseMove = {
                "VerticalVideo.useEffect.handleMouseMove": (e)=>{
                    updateProgressFromClientX(e.clientX);
                }
            }["VerticalVideo.useEffect.handleMouseMove"];
            const handleTouchMove = {
                "VerticalVideo.useEffect.handleTouchMove": (e)=>{
                    if (e.touches.length > 0) {
                        updateProgressFromClientX(e.touches[0].clientX);
                    }
                }
            }["VerticalVideo.useEffect.handleTouchMove"];
            const handleEndDrag = {
                "VerticalVideo.useEffect.handleEndDrag": ()=>{
                    setIsDragging(false);
                }
            }["VerticalVideo.useEffect.handleEndDrag"];
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleEndDrag);
            window.addEventListener('touchmove', handleTouchMove, {
                passive: true
            });
            window.addEventListener('touchend', handleEndDrag);
            return ({
                "VerticalVideo.useEffect": ()=>{
                    window.removeEventListener('mousemove', handleMouseMove);
                    window.removeEventListener('mouseup', handleEndDrag);
                    window.removeEventListener('touchmove', handleTouchMove);
                    window.removeEventListener('touchend', handleEndDrag);
                }
            })["VerticalVideo.useEffect"];
        }
    }["VerticalVideo.useEffect"], [
        isDragging
    ]);
    // Initialize Video.js Player
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VerticalVideo.useEffect": ()=>{
            if (!videoSrc) return;
            const videoElement = document.createElement("video");
            videoElement.className = "video-js w-full h-full object-cover scale-[1.015] !bg-transparent";
            videoElement.setAttribute("playsinline", "true");
            videoElement.setAttribute("webkit-playsinline", "true");
            if (poster) {
                videoElement.setAttribute("poster", poster);
            }
            if (videoContainerRef.current) {
                videoContainerRef.current.appendChild(videoElement);
            }
            const player = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$video$2e$js$2f$dist$2f$video$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(videoElement, {
                controls: false,
                autoplay: false,
                preload: 'auto',
                fluid: false,
                fill: true,
                poster: poster,
                sources: [
                    {
                        src: videoSrc,
                        type: videoSrc.endsWith('.m3u8') ? 'application/x-mpegURL' : 'video/mp4'
                    }
                ]
            });
            playerRef.current = player;
            player.on('play', {
                "VerticalVideo.useEffect": ()=>setIsPlaying(true)
            }["VerticalVideo.useEffect"]);
            player.on('pause', {
                "VerticalVideo.useEffect": ()=>setIsPlaying(false)
            }["VerticalVideo.useEffect"]);
            const handleTimeUpdate = {
                "VerticalVideo.useEffect.handleTimeUpdate": ()=>{
                    if (!isDraggingRef.current) {
                        const current = player.currentTime();
                        const duration = player.duration();
                        if (current !== undefined && duration) {
                            setProgress(current / duration * 100);
                        }
                    }
                }
            }["VerticalVideo.useEffect.handleTimeUpdate"];
            player.on('timeupdate', handleTimeUpdate);
            // Intersection Observer to pause if it scrolls out of view
            const observer = new IntersectionObserver({
                "VerticalVideo.useEffect": ([entry])=>{
                    if (!entry.isIntersecting && playerRef.current) {
                        playerRef.current.pause();
                    }
                }
            }["VerticalVideo.useEffect"], {
                threshold: 0.1
            });
            if (outerContainerRef.current) {
                observer.observe(outerContainerRef.current);
            }
            return ({
                "VerticalVideo.useEffect": ()=>{
                    observer.disconnect();
                    if (playerRef.current) {
                        playerRef.current.dispose();
                        playerRef.current = null;
                    }
                    if (videoContainerRef.current) {
                        videoContainerRef.current.innerHTML = '';
                    }
                }
            })["VerticalVideo.useEffect"];
        }
    }["VerticalVideo.useEffect"], [
        videoSrc
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
        className: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeMargins"])("mt-12 mb-6 md:mb-12", className)} w-full max-w-[320px] mx-auto transition-all duration-300`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .video-js, .video-js .vjs-tech, .video-js .vjs-poster, video { background-color: transparent !important; }
        video::-webkit-media-controls-start-playback-button { display: none !important; }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/VerticalVideo.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            videoSrc ? /* Mode 1 : Rendu de la vidéo réelle */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: outerContainerRef,
                className: `relative w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 group bg-cover bg-center ${poster ? 'bg-transparent' : 'bg-transparent'}`,
                style: {
                    aspectRatio: '9/16',
                    backgroundImage: poster ? `url('${poster}')` : undefined
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: videoContainerRef,
                        className: "w-full h-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/VerticalVideo.tsx",
                        lineNumber: 205,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: togglePlay,
                        className: "absolute inset-0 cursor-pointer z-0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/VerticalVideo.tsx",
                        lineNumber: 211,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-0 bottom-0 flex justify-center px-6 pt-6 pb-12 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: togglePlay,
                            className: `pointer-events-auto cursor-pointer w-28 h-12 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg border border-transparent ${isPlaying ? "bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border-white/20" : "bg-accent2 text-white hover:bg-accent2/90 shadow-[0_8px_20px_rgba(226,0,0,0.35)]"}`,
                            "aria-label": isPlaying ? "Pause" : "Play",
                            children: isPlaying ? /* Pause Icon */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                className: "w-8 h-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    d: "M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z",
                                    clipRule: "evenodd"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/VerticalVideo.tsx",
                                    lineNumber: 235,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/VerticalVideo.tsx",
                                lineNumber: 229,
                                columnNumber: 17
                            }, this) : /* Play Icon (optically balanced at w-9 h-9, visually centered using pl-[2.5px]) */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                className: "w-9 h-9 pl-[2.5px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M8 5v14l11-7z"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/VerticalVideo.tsx",
                                    lineNumber: 245,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/VerticalVideo.tsx",
                                lineNumber: 239,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/VerticalVideo.tsx",
                            lineNumber: 218,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/VerticalVideo.tsx",
                        lineNumber: 217,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: progressBarRef,
                        onMouseDown: handleStartDrag,
                        onTouchStart: handleTouchStart,
                        className: "absolute bottom-0 inset-x-0 h-8 flex items-end cursor-pointer pointer-events-auto z-20 group/progress",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-1.5 bg-white/25 transition-all duration-200 group-hover/progress:h-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full bg-accent2 transition-all duration-75 ease-out",
                                style: {
                                    width: `${progress}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/VerticalVideo.tsx",
                                lineNumber: 259,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/VerticalVideo.tsx",
                            lineNumber: 258,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/VerticalVideo.tsx",
                        lineNumber: 252,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/VerticalVideo.tsx",
                lineNumber: 197,
                columnNumber: 9
            }, this) : /* Mode 2 : Gabarit de zoning (Placeholder) ultra-premium */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full rounded-2xl bg-[#E5DCC3]/15 border-2 border-dashed border-[#CBBFA0] flex flex-col items-center justify-center p-6 text-center select-none cursor-pointer group hover:bg-[#E5DCC3]/25 transition-all duration-300",
                style: {
                    aspectRatio: '9/16'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-14 h-14 rounded-full bg-[#CBBFA0]/20 flex items-center justify-center text-[#8E8366] group-hover:scale-110 transition-transform duration-300 mb-4 border border-[#CBBFA0]/40",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            className: "w-6 h-6 ml-1 text-[#8E8366]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M8 5v14l11-7z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/VerticalVideo.tsx",
                                lineNumber: 280,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/VerticalVideo.tsx",
                            lineNumber: 274,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/VerticalVideo.tsx",
                        lineNumber: 273,
                        columnNumber: 11
                    }, this),
                    placeholderTxt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium text-[#8E8366] leading-tight mb-1.5 max-w-[80%]",
                        children: placeholderTxt
                    }, void 0, false, {
                        fileName: "[project]/src/components/VerticalVideo.tsx",
                        lineNumber: 285,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] font-mono uppercase tracking-widest text-[#A69B7B] opacity-75",
                        children: "Ratio 9/16"
                    }, void 0, false, {
                        fileName: "[project]/src/components/VerticalVideo.tsx",
                        lineNumber: 290,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/VerticalVideo.tsx",
                lineNumber: 268,
                columnNumber: 9
            }, this),
            caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                className: "mt-3 text-xs text-black text-left font-light leading-snug",
                children: caption
            }, void 0, false, {
                fileName: "[project]/src/components/VerticalVideo.tsx",
                lineNumber: 298,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/VerticalVideo.tsx",
        lineNumber: 190,
        columnNumber: 5
    }, this);
}
_s(VerticalVideo, "FcWnlYaVQsvrhSW1qJ+QBt0RGA8=");
_c = VerticalVideo;
var _c;
__turbopack_context__.k.register(_c, "VerticalVideo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FlipCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlipCard",
    ()=>FlipCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function FlipCard({ children, backContent, className = "", showHintOnScroll, title }) {
    _s();
    const [animState, setAnimState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [isHinting, setIsHinting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const hintHasRun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [targetScale, setTargetScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FlipCard.useEffect": ()=>{
            if (slotRef.current) {
                const rect = slotRef.current.getBoundingClientRect();
                const viewportWidth = document.documentElement.clientWidth;
                const viewportHeight = document.documentElement.clientHeight;
                const tSize = Math.min(viewportWidth * 0.9, viewportHeight * 0.8, 450);
                setTargetScale(tSize / rect.width);
            }
        }
    }["FlipCard.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FlipCard.useEffect": ()=>{
            if (!showHintOnScroll || !slotRef.current || hintHasRun.current) return;
            const observer = new IntersectionObserver({
                "FlipCard.useEffect": (entries)=>{
                    if (entries[0].isIntersecting && !hintHasRun.current) {
                        hintHasRun.current = true;
                        setTimeout({
                            "FlipCard.useEffect": ()=>{
                                setIsHinting(true);
                                setTimeout({
                                    "FlipCard.useEffect": ()=>{
                                        setIsHinting(false);
                                    }
                                }["FlipCard.useEffect"], 800);
                            }
                        }["FlipCard.useEffect"], 1200);
                    }
                }
            }["FlipCard.useEffect"], {
                threshold: 0.9,
                rootMargin: "0px 0px -15% 0px"
            });
            observer.observe(slotRef.current);
            return ({
                "FlipCard.useEffect": ()=>observer.disconnect()
            })["FlipCard.useEffect"];
        }
    }["FlipCard.useEffect"], [
        showHintOnScroll
    ]);
    // Store the exact pixel rect of the card in the grid to lock its physical size
    const [cardRect, setCardRect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [transformStyle, setTransformStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [scale, setScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const slotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    if (!cardIdRef.current) {
        cardIdRef.current = Math.random().toString(36).substring(2, 9);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FlipCard.useEffect": ()=>{
            setMounted(true);
        }
    }["FlipCard.useEffect"], []);
    // Handle FLIP animation states
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FlipCard.useEffect": ()=>{
            if (animState === 'opening') {
                const raf = requestAnimationFrame({
                    "FlipCard.useEffect.raf": ()=>{
                        requestAnimationFrame({
                            "FlipCard.useEffect.raf": ()=>{
                                if (!cardRect) return;
                                const viewportWidth = document.documentElement.clientWidth;
                                const viewportHeight = document.documentElement.clientHeight;
                                const targetSize = Math.min(viewportWidth * 0.9, viewportHeight * 0.8, 450);
                                const targetScale = targetSize / cardRect.width;
                                const cx = cardRect.left + cardRect.width / 2;
                                const cy = cardRect.top + cardRect.height / 2;
                                const targetCx = viewportWidth / 2;
                                const targetCy = viewportHeight / 2;
                                const tx = targetCx - cx;
                                const ty = targetCy - cy;
                                setTransformStyle(`translate(${tx}px, ${ty}px) scale(${targetScale})`);
                                setScale(targetScale);
                                setAnimState('open');
                            }
                        }["FlipCard.useEffect.raf"]);
                    }
                }["FlipCard.useEffect.raf"]);
                return ({
                    "FlipCard.useEffect": ()=>cancelAnimationFrame(raf)
                })["FlipCard.useEffect"];
            } else if (animState === 'closing') {
                const timer = setTimeout({
                    "FlipCard.useEffect.timer": ()=>{
                        setAnimState('idle');
                        setCardRect(null);
                        setScale(1);
                    }
                }["FlipCard.useEffect.timer"], 400); // duration matches CSS
                return ({
                    "FlipCard.useEffect": ()=>clearTimeout(timer)
                })["FlipCard.useEffect"];
            }
        }
    }["FlipCard.useEffect"], [
        animState,
        cardRect
    ]);
    // Lock body scroll when a card is zoomed & manage global active list
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FlipCard.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                window.__activeFlipCards = window.__activeFlipCards || new Set();
            }
            if (animState !== 'idle') {
                document.body.style.overflow = 'hidden';
                document.documentElement.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
                document.documentElement.style.overflow = '';
            }
            const isVisuallyOpen = animState === 'opening' || animState === 'open';
            if (isVisuallyOpen) {
                if ("TURBOPACK compile-time truthy", 1) {
                    window.__activeFlipCards.add(cardIdRef.current);
                    window.dispatchEvent(new CustomEvent('active-flip-cards-change'));
                }
            } else {
                if ("TURBOPACK compile-time truthy", 1) {
                    window.__activeFlipCards.delete(cardIdRef.current);
                    window.dispatchEvent(new CustomEvent('active-flip-cards-change'));
                }
            }
            return ({
                "FlipCard.useEffect": ()=>{
                    document.body.style.overflow = '';
                    document.documentElement.style.overflow = '';
                    if (("TURBOPACK compile-time value", "object") !== "undefined" && window.__activeFlipCards) {
                        window.__activeFlipCards.delete(cardIdRef.current);
                        window.dispatchEvent(new CustomEvent('active-flip-cards-change'));
                    }
                }
            })["FlipCard.useEffect"];
        }
    }["FlipCard.useEffect"], [
        animState
    ]);
    const toggleFlip = (e)=>{
        if (e) e.stopPropagation();
        if (animState === 'idle') {
            const rect = slotRef.current?.getBoundingClientRect();
            if (!rect) return;
            const viewportWidth = document.documentElement.clientWidth;
            const viewportHeight = document.documentElement.clientHeight;
            const targetSize = Math.min(viewportWidth * 0.9, viewportHeight * 0.8, 450);
            const computedScale = targetSize / rect.width;
            // Lock the exact physical DOM dimensions so there is ZERO layout reflow!
            // This makes the card animate as one single solid paper object.
            setCardRect({
                width: rect.width,
                height: rect.height,
                top: rect.top,
                left: rect.left
            });
            setScale(computedScale);
            setTransformStyle(`translate(0px, 0px) scale(1)`);
            setAnimState('opening');
        } else if (animState === 'open') {
            const rect = slotRef.current?.getBoundingClientRect();
            if (!rect || !cardRect) return;
            // Calculate the transform needed to return to the current grid slot position (in case of scroll)
            const targetCx = rect.left + rect.width / 2;
            const targetCy = rect.top + rect.height / 2;
            const currentBaseCx = cardRect.left + cardRect.width / 2;
            const currentBaseCy = cardRect.top + cardRect.height / 2;
            const tx = targetCx - currentBaseCx;
            const ty = targetCy - currentBaseCy;
            const targetScale = rect.width / cardRect.width;
            setTransformStyle(`translate(${tx}px, ${ty}px) scale(${targetScale})`);
            setAnimState('closing');
        }
    };
    const isActive = animState !== 'idle';
    const isVisuallyFlipped = animState === 'opening' || animState === 'open';
    const shouldBeFlipped = isVisuallyFlipped || isHinting;
    const cardStyle = isActive && cardRect ? {
        position: 'fixed',
        top: cardRect.top,
        left: cardRect.left,
        width: cardRect.width,
        height: cardRect.height,
        transformOrigin: 'center center',
        transform: transformStyle,
        transition: animState === 'opening' ? 'none' : 'transform 0.4s cubic-bezier(0.34, 1.05, 0.64, 1)',
        zIndex: 50
    } : {};
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative w-full flex flex-col ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full aspect-square",
                ref: slotRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                        dangerouslySetInnerHTML: {
                            __html: `
          .flip-card {
            perspective: 1000px;
            border-radius: 0.5rem;
          }
          .flip-card.inline-card {
            transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s cubic-bezier(0.25, 1, 0.5, 1);
          }
          .flip-card.inline-card:hover {
            transform: scale(1.03);
            box-shadow: 0 12px 30px rgba(213, 201, 163, 0.35);
          }
          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.4s cubic-bezier(0.34, 1.05, 0.64, 1);
            transform-style: preserve-3d;
          }
          .flip-card.flipped .flip-card-inner {
            transform: rotateY(180deg);
          }
          .flip-card-front {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            border-radius: 0.5rem; 
            transform: rotateY(0deg) translateZ(1px); /* Anti z-fighting layer */
          }
          .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            border-radius: 0.5rem; 
            transform: rotateY(180deg) translateZ(1px); /* Anti z-fighting layer */
          }
          .flip-card-active {
            /* Ombre retirée à la demande de l'utilisateur */
          }
          .flip-card-back p {
            font-size: calc(14px / var(--target-scale, 3)) !important;
            line-height: 1.5 !important;
          }
          @media (min-width: 768px) {
            .flip-card-back p {
              font-size: calc(16px / var(--target-scale, 3)) !important;
            }
          }
          .flip-card-back h1,
          .flip-card-back h2,
          .flip-card-back h3,
          .flip-card-back h4 {
            font-size: calc(16px / var(--target-scale, 3)) !important;
            line-height: 1.3 !important;
            font-weight: 700 !important;
          }
          @media (min-width: 768px) {
            .flip-card-back h1,
            .flip-card-back h2,
            .flip-card-back h3,
            .flip-card-back h4 {
              font-size: calc(18px / var(--target-scale, 3)) !important;
            }
          }
          .flip-card-back span {
            font-size: calc(9px / var(--target-scale, 3)) !important;
            line-height: 1.3 !important;
          }
          .flip-card-close-btn {
            position: absolute;
            bottom: calc(-18px / var(--target-scale, 3)) !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            width: calc(36px / var(--target-scale, 3)) !important;
            height: calc(36px / var(--target-scale, 3)) !important;
            border-radius: 9999px !important;
            background-color: black !important;
            color: white !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3) !important;
            border: calc(1px / var(--target-scale, 3)) solid rgba(255, 255, 255, 0.2) !important;
            cursor: pointer !important;
            z-index: 50 !important;
          }
          .flip-card-close-btn svg {
            width: calc(20px / var(--target-scale, 3)) !important;
            height: calc(20px / var(--target-scale, 3)) !important;
          }
        `
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/FlipCard.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: toggleFlip,
                        style: {
                            ...cardStyle,
                            "--card-scale": scale,
                            "--target-scale": targetScale
                        },
                        className: `flip-card group cursor-pointer select-none ${shouldBeFlipped ? "flipped" : ""} ${isActive ? 'flip-card-active' : 'inline-card absolute inset-0 w-full h-full'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flip-card-inner w-full h-full relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flip-card-front w-full h-full overflow-hidden relative",
                                    children: [
                                        children,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none z-10 ${isActive ? 'hidden' : ''}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FlipCard.tsx",
                                            lineNumber: 304,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FlipCard.tsx",
                                    lineNumber: 302,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flip-card-back w-full h-full ${isActive ? "" : "overflow-hidden"} bg-[#f7f3ea] text-black p-3 md:p-6 flex flex-col justify-between relative transition-all duration-300 ${isHinting ? "border-2 border-dashed border-[#CBBFA0]" : "border border-[#CBBFA0]/20"} ${isActive ? "" : "group-hover:border-[#CBBFA0]/50 group-hover:bg-[#E5DCC3]/20"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "z-10 h-full w-full",
                                            children: backContent
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FlipCard.tsx",
                                            lineNumber: 309,
                                            columnNumber: 15
                                        }, this),
                                        isVisuallyFlipped && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                toggleFlip(e);
                                            },
                                            className: "flip-card-close-btn",
                                            "aria-label": "Fermer",
                                            title: "Fermer la carte",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                strokeWidth: 2.5,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M6 18L18 6M6 6l12 12"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FlipCard.tsx",
                                                    lineNumber: 330,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FlipCard.tsx",
                                                lineNumber: 323,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FlipCard.tsx",
                                            lineNumber: 314,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none z-0 ${isActive ? 'hidden' : ''}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FlipCard.tsx",
                                            lineNumber: 335,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FlipCard.tsx",
                                    lineNumber: 308,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FlipCard.tsx",
                            lineNumber: 300,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/FlipCard.tsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FlipCard.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this),
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mt-3 text-sm sm:text-base font-semibold text-gray-800 uppercase tracking-wider select-none leading-tight",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/FlipCard.tsx",
                lineNumber: 343,
                columnNumber: 9
            }, this),
            mounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ease-out",
                style: {
                    opacity: isVisuallyFlipped ? 1 : 0,
                    pointerEvents: isVisuallyFlipped ? 'auto' : 'none',
                    zIndex: 40
                },
                onClick: isVisuallyFlipped ? toggleFlip : undefined
            }, void 0, false, {
                fileName: "[project]/src/components/FlipCard.tsx",
                lineNumber: 350,
                columnNumber: 9
            }, this), document.body)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FlipCard.tsx",
        lineNumber: 192,
        columnNumber: 5
    }, this);
}
_s(FlipCard, "kxvpR1dSJOuvFIeLQ4v2SIBxOkI=");
_c = FlipCard;
var _c;
__turbopack_context__.k.register(_c, "FlipCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AutoplayVideo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AutoplayVideo",
    ()=>AutoplayVideo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$video$2e$js$2f$dist$2f$video$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/video.js/dist/video.es.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AutoplayVideo({ videoSrc, ratio = "16/9", overflow = "high", caption, className = "", bare = false }) {
    _s();
    const outerContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const videoContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const playerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [videoRatio, setVideoRatio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Initialize Video.js for Autoplay Looping Video
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AutoplayVideo.useEffect": ()=>{
            if (!videoSrc) return;
            // Resolve JW Player script urls automatically to HLS streams
            let resolvedSrc = videoSrc;
            const match = videoSrc.match(/\/players\/([a-zA-Z0-9]+)-[a-zA-Z0-9]+\.js/);
            if (match && match[1]) {
                resolvedSrc = `https://cdn.jwplayer.com/manifests/${match[1]}.m3u8`;
            }
            const videoElement = document.createElement("video");
            videoElement.className = "video-js w-full h-full object-cover scale-[1.015]";
            videoElement.setAttribute("playsinline", "true");
            videoElement.setAttribute("webkit-playsinline", "true");
            videoElement.muted = true; // Ensure native mute is set
            if (videoContainerRef.current) {
                videoContainerRef.current.appendChild(videoElement);
            }
            const player = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$video$2e$js$2f$dist$2f$video$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(videoElement, {
                controls: false,
                autoplay: false,
                muted: true,
                loop: true,
                preload: 'auto',
                fluid: false,
                fill: true,
                sources: [
                    {
                        src: resolvedSrc,
                        type: resolvedSrc.endsWith('.m3u8') ? 'application/x-mpegURL' : 'video/mp4'
                    }
                ]
            });
            playerRef.current = player;
            const updateRatio = {
                "AutoplayVideo.useEffect.updateRatio": ()=>{
                    const width = player.videoWidth();
                    const height = player.videoHeight();
                    if (width && height) {
                        setVideoRatio(`${width}/${height}`);
                    }
                    setIsLoaded(true);
                }
            }["AutoplayVideo.useEffect.updateRatio"];
            player.on('loadedmetadata', updateRatio);
            player.on('play', updateRatio);
            player.on('playing', updateRatio);
            // Intersection Observer to pause/play based on visibility
            const observer = new IntersectionObserver({
                "AutoplayVideo.useEffect": ([entry])=>{
                    if (playerRef.current) {
                        if (entry.isIntersecting) {
                            playerRef.current.play().catch({
                                "AutoplayVideo.useEffect": (err)=>{
                                    console.log("Autoplay play was prevented or failed:", err);
                                }
                            }["AutoplayVideo.useEffect"]);
                        } else {
                            playerRef.current.pause();
                        }
                    }
                }
            }["AutoplayVideo.useEffect"], {
                threshold: 0.1
            });
            if (outerContainerRef.current) {
                observer.observe(outerContainerRef.current);
            }
            return ({
                "AutoplayVideo.useEffect": ()=>{
                    observer.disconnect();
                    if (playerRef.current) {
                        playerRef.current.dispose();
                        playerRef.current = null;
                    }
                    if (videoContainerRef.current) {
                        videoContainerRef.current.innerHTML = '';
                    }
                }
            })["AutoplayVideo.useEffect"];
        }
    }["AutoplayVideo.useEffect"], [
        videoSrc
    ]);
    if (bare) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: outerContainerRef,
            className: `relative w-full overflow-hidden rounded-2xl bg-black ${className}`,
            style: {
                aspectRatio: videoRatio || ratio
            },
            children: [
                !isLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-neutral-200 flex items-center justify-center overflow-hidden z-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-shimmer"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AutoplayVideo.tsx",
                        lineNumber: 127,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/AutoplayVideo.tsx",
                    lineNumber: 126,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: videoContainerRef,
                    className: `w-full h-full transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`
                }, void 0, false, {
                    fileName: "[project]/src/components/AutoplayVideo.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AutoplayVideo.tsx",
            lineNumber: 119,
            columnNumber: 7
        }, this);
    }
    // Breakout layouts
    let containerClass = "w-full max-w-[672px] mx-auto px-0"; // low
    if (overflow === "med") {
        containerClass = "w-full max-w-[968px] mx-auto px-0 md:px-7";
    } else if (overflow === "high") {
        containerClass = "w-full max-w-screen-2xl mx-auto px-0 md:px-7";
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
        className: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeMargins"])("mt-12 mb-12", className)} ${containerClass} relative transition-all duration-300`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: outerContainerRef,
                className: "relative w-full overflow-hidden rounded-2xl bg-black",
                style: {
                    aspectRatio: videoRatio || ratio
                },
                children: [
                    !isLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-neutral-200 flex items-center justify-center overflow-hidden z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-shimmer"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AutoplayVideo.tsx",
                            lineNumber: 159,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/AutoplayVideo.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: videoContainerRef,
                        className: `w-full h-full transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/AutoplayVideo.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AutoplayVideo.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                className: "mt-3 text-xs text-black text-left font-light leading-snug",
                children: caption
            }, void 0, false, {
                fileName: "[project]/src/components/AutoplayVideo.tsx",
                lineNumber: 172,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AutoplayVideo.tsx",
        lineNumber: 150,
        columnNumber: 5
    }, this);
}
_s(AutoplayVideo, "QPK7WEw+1IgbEchrL0/+w0LEyRc=");
_c = AutoplayVideo;
var _c;
__turbopack_context__.k.register(_c, "AutoplayVideo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FramedContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FramedContent",
    ()=>FramedContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/layout.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function FramedContent({ title, description, shortDescription, className = "" }) {
    _s();
    const [isMobile, setIsMobile] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [isExpanded, setIsExpanded] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "FramedContent.useEffect": ()=>{
            const handleResize = {
                "FramedContent.useEffect.handleResize": ()=>{
                    setIsMobile(window.innerWidth < 768);
                }
            }["FramedContent.useEffect.handleResize"];
            handleResize();
            window.addEventListener('resize', handleResize);
            return ({
                "FramedContent.useEffect": ()=>window.removeEventListener('resize', handleResize)
            })["FramedContent.useEffect"];
        }
    }["FramedContent.useEffect"], []);
    const truncateText = (text, limit = 60)=>{
        if (text.length <= limit) return text;
        const sub = text.substring(0, limit);
        const lastSpace = sub.lastIndexOf(' ');
        return (lastSpace > 20 ? sub.substring(0, lastSpace) : sub).trim();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeMargins"])("mt-10 mb-8 md:mb-10", className)} w-full bg-yellow-100 rounded-2xl p-5 md:p-7.5 text-black relative transition-all duration-300 subpixel-antialiased`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "images/icon-info.svg",
                alt: "Info",
                className: "absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 select-none",
                loading: "lazy"
            }, void 0, false, {
                fileName: "[project]/src/components/FramedContent.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-1.5 text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-base font-extrabold text-black",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/FramedContent.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-base font-base text-black",
                        children: !isMobile || isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                description,
                                isMobile && isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsExpanded(false),
                                    className: "ml-2 text-black font-bold underline cursor-pointer hover:opacity-80 inline-block align-baseline",
                                    children: "lire moins"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FramedContent.tsx",
                                    lineNumber: 62,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                shortDescription ? truncateText(shortDescription) : typeof description === 'string' ? truncateText(description) : "",
                                "....",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsExpanded(true),
                                    className: "ml-1 text-black font-bold underline cursor-pointer hover:opacity-80 inline-block align-baseline",
                                    children: "Lire plus"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FramedContent.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/FramedContent.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FramedContent.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FramedContent.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(FramedContent, "/yk+riUE9i4cYpgI0SHqBus+cFo=");
_c = FramedContent;
var _c;
__turbopack_context__.k.register(_c, "FramedContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/RecipeBook.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RecipeBook",
    ()=>RecipeBook
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const INGREDIENTS = [
    {
        label: "100’000 francs",
        chipLabel: "De l’argent"
    },
    {
        label: "Un ou deux paysans avec un numéro d’exploitant"
    },
    {
        label: "Un réseau d’informateurs"
    },
    {
        label: "Un notaire coulant"
    },
    {
        label: "Des membres de Commission foncière aux petits oignons"
    },
    {
        label: "Des autorités cuites au bain marie"
    },
    {
        label: "Une louche de temps"
    }
];
// Chaque étape référence les ingrédients requis par leur index dans INGREDIENTS
const STEPS = [
    {
        title: "Intégrer des paysans dans une société anonyme agricole",
        ingredients: [
            0,
            1,
            3
        ]
    },
    {
        title: "Trouver un terrain à acquérir",
        ingredients: [
            2,
            6
        ]
    },
    {
        title: "Formaliser la vente",
        ingredients: [
            3,
            0
        ]
    },
    {
        title: "Obtenir l’aval de la Commission foncière",
        ingredients: [
            4,
            5
        ]
    },
    {
        title: "Faire mûrir son investissement",
        ingredients: [
            6
        ]
    }
];
/* ------------------------------------------------------------------ */ /* Icônes des panneaux (panier pour les ingrédients, liste ordonnée    */ /* pour les étapes) — réutilisées dans les onglets mobiles.            */ /* ------------------------------------------------------------------ */ function BasketIcon({ className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m15 11-1 9"
            }, void 0, false, {
                fileName: "[project]/src/components/RecipeBook.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m19 11-4-7"
            }, void 0, false, {
                fileName: "[project]/src/components/RecipeBook.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 11h20"
            }, void 0, false, {
                fileName: "[project]/src/components/RecipeBook.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"
            }, void 0, false, {
                fileName: "[project]/src/components/RecipeBook.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.5 15.5h15"
            }, void 0, false, {
                fileName: "[project]/src/components/RecipeBook.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m5 11 4-7"
            }, void 0, false, {
                fileName: "[project]/src/components/RecipeBook.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m9 11 1 9"
            }, void 0, false, {
                fileName: "[project]/src/components/RecipeBook.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RecipeBook.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c = BasketIcon;
function ChefHatIcon({ className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"
            }, void 0, false, {
                fileName: "[project]/src/components/RecipeBook.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 17h12"
            }, void 0, false, {
                fileName: "[project]/src/components/RecipeBook.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RecipeBook.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_c1 = ChefHatIcon;
function UtensilsIcon({ className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"
            }, void 0, false, {
                fileName: "[project]/src/components/RecipeBook.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 2v20"
            }, void 0, false, {
                fileName: "[project]/src/components/RecipeBook.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"
            }, void 0, false, {
                fileName: "[project]/src/components/RecipeBook.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RecipeBook.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_c2 = UtensilsIcon;
function StepsIcon({ className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 12h11"
            }, void 0, false, {
                fileName: "[project]/src/components/RecipeBook.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 18h11"
            }, void 0, false, {
                fileName: "[project]/src/components/RecipeBook.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 6h11"
            }, void 0, false, {
                fileName: "[project]/src/components/RecipeBook.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 10h2"
            }, void 0, false, {
                fileName: "[project]/src/components/RecipeBook.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 6h1v4"
            }, void 0, false, {
                fileName: "[project]/src/components/RecipeBook.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"
            }, void 0, false, {
                fileName: "[project]/src/components/RecipeBook.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RecipeBook.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_c3 = StepsIcon;
/** Titre de panneau commun aux deux zones — typographie alignée sur h4.lpi-title */ function PanelTitle({ icon, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
        className: "flex items-center gap-2.5 font-extrabold tracking-tight text-base md:text-lg text-[#755e45] leading-snug",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "shrink-0 text-[#E20000]",
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/components/RecipeBook.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RecipeBook.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_c4 = PanelTitle;
function RecipeBook({ className = "" }) {
    _s();
    // Page 0 = page de garde, pages 1..5 = les étapes, dernière page = bon appétit
    const PAGE_COUNT = STEPS.length + 2;
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ingredients");
    const [hasInteracted, setHasInteracted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleNext = ()=>{
        setPage((prev)=>(prev + 1) % PAGE_COUNT);
        setHasInteracted(true);
    };
    const handlePrev = ()=>{
        setPage((prev)=>(prev - 1 + PAGE_COUNT) % PAGE_COUNT);
        setHasInteracted(true);
    };
    const handleDotClick = (index)=>{
        setPage(index);
        setHasInteracted(true);
    };
    // Sur la page de garde et la page finale, aucun ingrédient n'est mis en évidence
    const activeIngredients = page >= 1 && page <= STEPS.length ? STEPS[page - 1].ingredients : [];
    // La liste des ingrédients ne se déroule que lorsque le lecteur arrive
    // à la hauteur du composant (une seule fois), comme LandPriceIsometric
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [revealed, setRevealed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RecipeBook.useEffect": ()=>{
            const el = rootRef.current;
            if (!el || typeof IntersectionObserver === "undefined") {
                const fallback = setTimeout({
                    "RecipeBook.useEffect.fallback": ()=>setRevealed(true)
                }["RecipeBook.useEffect.fallback"], 0);
                return ({
                    "RecipeBook.useEffect": ()=>clearTimeout(fallback)
                })["RecipeBook.useEffect"];
            }
            const obs = new IntersectionObserver({
                "RecipeBook.useEffect": (entries)=>{
                    if (entries.some({
                        "RecipeBook.useEffect": (e)=>e.isIntersecting
                    }["RecipeBook.useEffect"])) {
                        setRevealed(true);
                        obs.disconnect();
                    }
                }
            }["RecipeBook.useEffect"], // Déclenchement volontairement tardif : il faut presque la moitié du
            // composant à l'écran, et la bande basse du viewport (occupée par la
            // mini-carte fixée) est exclue du calcul
            {
                threshold: 0.45,
                rootMargin: "0px 0px -12% 0px"
            });
            obs.observe(el);
            return ({
                "RecipeBook.useEffect": ()=>obs.disconnect()
            })["RecipeBook.useEffect"];
        }
    }["RecipeBook.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: rootRef,
        className: `w-full ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
                    __html: `
        @keyframes rb-fade {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .rb-fade { animation: rb-fade 0.45s cubic-bezier(0.25, 0.6, 0.3, 1) both; }
        @keyframes rb-slide-in {
          from { opacity: 0; transform: translateX(-16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .rb-slide-in { animation: rb-slide-in 0.5s cubic-bezier(0.25, 1, 0.5, 1) both; }
      `
                }
            }, void 0, false, {
                fileName: "[project]/src/components/RecipeBook.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-[920px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 flex w-full rounded-full border border-[#8E8366]/25 bg-[#efe8d4] p-1 shadow-inner md:hidden",
                        role: "tablist",
                        "aria-label": "La recette",
                        children: [
                            [
                                "ingredients",
                                "Les ingrédients",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BasketIcon, {
                                    className: "h-4 w-4"
                                }, "i", false, {
                                    fileName: "[project]/src/components/RecipeBook.tsx",
                                    lineNumber: 178,
                                    columnNumber: 48
                                }, this)
                            ],
                            [
                                "steps",
                                "Les étapes",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepsIcon, {
                                    className: "h-4 w-4"
                                }, "s", false, {
                                    fileName: "[project]/src/components/RecipeBook.tsx",
                                    lineNumber: 179,
                                    columnNumber: 37
                                }, this)
                            ]
                        ].map(([key, label, icon])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                role: "tab",
                                "aria-selected": tab === key,
                                onClick: ()=>setTab(key),
                                className: `flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full px-0 py-2.5 text-center text-sm font-bold transition-all ${tab === key ? "bg-white text-gray-800 shadow-sm" : "text-gray-500 hover:text-gray-800"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: tab === key ? "text-[#E20000]" : "text-gray-400",
                                        children: icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RecipeBook.tsx",
                                        lineNumber: 193,
                                        columnNumber: 15
                                    }, this),
                                    label
                                ]
                            }, key, true, {
                                fileName: "[project]/src/components/RecipeBook.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/RecipeBook.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-3 md:grid-cols-[2fr_3fr] md:gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${tab === "ingredients" ? "block" : "hidden"} rounded-2xl bg-[#8E8366]/10 p-4 md:block md:p-8`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PanelTitle, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BasketIcon, {
                                            className: "h-5 w-5 md:h-7 md:w-7"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RecipeBook.tsx",
                                            lineNumber: 203,
                                            columnNumber: 31
                                        }, void 0),
                                        children: "Les ingrédients"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RecipeBook.tsx",
                                        lineNumber: 203,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-3 md:mt-5 space-y-2 md:space-y-3",
                                        children: INGREDIENTS.map((ingredient, i)=>{
                                            const isActive = activeIngredients.includes(i);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: `flex items-start gap-3 ${revealed ? "rb-slide-in" : "opacity-0"}`,
                                                style: revealed ? {
                                                    animationDelay: `${i * 150}ms`
                                                } : undefined,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `mt-[9px] md:mt-[11px] h-[7px] w-[7px] shrink-0 rounded-[1.5px] bg-[#8E8366]/50 transition-colors duration-500 ${isActive ? "md:bg-[#E20000]" : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/RecipeBook.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `font-hand text-xl md:text-[26px] font-semibold leading-tight text-[#736a52]/80 transition-all duration-500 ${isActive ? "md:text-[#5c5440]" : ""}`,
                                                        children: ingredient.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/RecipeBook.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/components/RecipeBook.tsx",
                                                lineNumber: 209,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RecipeBook.tsx",
                                        lineNumber: 205,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RecipeBook.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${tab === "steps" ? "flex" : "hidden"} flex-col rounded-2xl bg-[#FAF8F4] p-4 md:flex md:p-8`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PanelTitle, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepsIcon, {
                                            className: "h-5 w-5 md:h-7 md:w-7"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RecipeBook.tsx",
                                            lineNumber: 237,
                                            columnNumber: 31
                                        }, void 0),
                                        children: "Les étapes"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RecipeBook.tsx",
                                        lineNumber: 237,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "aria-hidden": page !== 0,
                                                className: `col-start-1 row-start-1 flex flex-col items-center justify-center py-5 md:py-6 text-center ${page === 0 ? "rb-fade" : "invisible pointer-events-none"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChefHatIcon, {
                                                        className: "h-8 w-8 text-[#E20000] md:h-12 md:w-12"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/RecipeBook.tsx",
                                                        lineNumber: 250,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "font-hand mt-3 md:mt-4 max-w-[400px] text-2xl md:text-4xl font-bold leading-none text-[#5c5440]",
                                                        children: "Comment mettre la main sur des terres agricoles sans être agriculteur, en cinq étapes et sept ingrédients."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/RecipeBook.tsx",
                                                        lineNumber: 251,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: handleNext,
                                                        className: `mt-4 md:mt-6 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#E20000] px-4 py-2 md:px-5 md:py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#c40000] ${page === 0 ? "rb-fade" : ""}`,
                                                        style: page === 0 ? {
                                                            animationDelay: "220ms"
                                                        } : undefined,
                                                        children: [
                                                            "Commencer la recette",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                className: "h-4 w-4",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2.5",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                    points: "9 18 15 12 9 6"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/RecipeBook.tsx",
                                                                    lineNumber: 269,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/RecipeBook.tsx",
                                                                lineNumber: 268,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/RecipeBook.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/RecipeBook.tsx",
                                                lineNumber: 244,
                                                columnNumber: 15
                                            }, this),
                                            STEPS.map((s, i)=>{
                                                const isCurrent = page === i + 1;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "aria-hidden": !isCurrent,
                                                    className: `col-start-1 row-start-1 flex flex-col items-center justify-center py-5 md:py-6 text-center ${isCurrent ? "rb-fade" : "invisible pointer-events-none"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "inline-flex items-center gap-2 rounded-full border border-[#8E8366]/25 bg-white/80 px-3 py-1.5 md:px-4 md:py-2 shadow-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs md:text-sm font-bold uppercase leading-none tracking-[0.08em] text-[#736a52]",
                                                                    children: "Étape"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/RecipeBook.tsx",
                                                                    lineNumber: 285,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xl md:text-3xl font-extrabold leading-none text-[#E20000]",
                                                                    children: i + 1
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/RecipeBook.tsx",
                                                                    lineNumber: 286,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs md:text-sm font-semibold leading-none text-[#736a52]/60",
                                                                    children: [
                                                                        "/ ",
                                                                        STEPS.length
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/RecipeBook.tsx",
                                                                    lineNumber: 287,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/RecipeBook.tsx",
                                                            lineNumber: 284,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "mt-3 md:mt-4 max-w-[440px] text-xl md:text-[28px] font-bold leading-snug tracking-tight text-[#5c5440]",
                                                            children: s.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/RecipeBook.tsx",
                                                            lineNumber: 290,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `font-hand mt-4 md:mt-6 text-base md:text-xl font-semibold leading-none text-[#736a52]/70 ${isCurrent ? "rb-fade" : ""}`,
                                                            style: isCurrent ? {
                                                                animationDelay: "120ms"
                                                            } : undefined,
                                                            children: s.ingredients.length > 1 ? "Combiner les ingrédients suivants :" : "Ajouter l’ingrédient suivant :"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/RecipeBook.tsx",
                                                            lineNumber: 295,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-2 md:mt-3 flex flex-col items-center gap-1.5 md:gap-2",
                                                            children: s.ingredients.map((ingIdx, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `font-hand inline-flex items-center gap-1.5 md:gap-2 rounded-full border border-[#8E8366]/25 bg-white/80 px-3 py-1 md:px-4 md:py-1.5 text-base md:text-[22px] font-semibold leading-none text-[#736a52] ${isCurrent ? "rb-fade" : ""}`,
                                                                    style: isCurrent ? {
                                                                        animationDelay: `${200 + j * 110}ms`
                                                                    } : undefined,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "h-[6px] w-[6px] shrink-0 rounded-[1.5px] bg-[#E20000]"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/RecipeBook.tsx",
                                                                            lineNumber: 312,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        INGREDIENTS[ingIdx].chipLabel ?? INGREDIENTS[ingIdx].label
                                                                    ]
                                                                }, ingIdx, true, {
                                                                    fileName: "[project]/src/components/RecipeBook.tsx",
                                                                    lineNumber: 305,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/RecipeBook.tsx",
                                                            lineNumber: 303,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/src/components/RecipeBook.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 19
                                                }, this);
                                            }),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "aria-hidden": page !== PAGE_COUNT - 1,
                                                className: `col-start-1 row-start-1 flex flex-col items-center justify-center py-5 md:py-6 text-center ${page === PAGE_COUNT - 1 ? "rb-fade" : "invisible pointer-events-none"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UtensilsIcon, {
                                                        className: "h-8 w-8 text-[#E20000] md:h-12 md:w-12"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/RecipeBook.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "font-hand mt-3 md:mt-4 max-w-[400px] text-2xl md:text-4xl font-bold leading-tight text-[#5c5440]",
                                                        children: "Bon appétit !"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/RecipeBook.tsx",
                                                        lineNumber: 329,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `mt-2 md:mt-3 max-w-[380px] text-sm md:text-[15px] font-light leading-relaxed text-[#736a52] ${page === PAGE_COUNT - 1 ? "rb-fade" : ""}`,
                                                        style: page === PAGE_COUNT - 1 ? {
                                                            animationDelay: "120ms"
                                                        } : undefined,
                                                        children: "Félicitations : vous avez mis la main sur des terres agricoles sans être agriculteur. Laissez mijoter quelques années, le terrain prendra de la valeur tout seul."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/RecipeBook.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>handleDotClick(0),
                                                        className: `mt-4 md:mt-6 inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#8E8366]/40 bg-white/80 px-4 py-2 md:px-5 md:py-2.5 text-sm font-bold text-[#736a52] shadow-sm transition-all hover:border-[#8E8366]/70 hover:bg-[#f7f3ea] ${page === PAGE_COUNT - 1 ? "rb-fade" : ""}`,
                                                        style: page === PAGE_COUNT - 1 ? {
                                                            animationDelay: "220ms"
                                                        } : undefined,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                className: "h-4 w-4",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2.5",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/RecipeBook.tsx",
                                                                        lineNumber: 347,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M3 3v5h5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/RecipeBook.tsx",
                                                                        lineNumber: 348,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/RecipeBook.tsx",
                                                                lineNumber: 346,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Revoir la recette"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/RecipeBook.tsx",
                                                        lineNumber: 340,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/RecipeBook.tsx",
                                                lineNumber: 322,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RecipeBook.tsx",
                                        lineNumber: 241,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 flex items-center justify-between border-t border-[#8E8366]/20 pt-4 font-mono text-xs text-neutral-400 md:mt-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-[#8E8366]",
                                                        children: [
                                                            page + 1,
                                                            " / ",
                                                            PAGE_COUNT
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/RecipeBook.tsx",
                                                        lineNumber: 358,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-1.5",
                                                        children: Array.from({
                                                            length: PAGE_COUNT
                                                        }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>handleDotClick(index),
                                                                className: `h-2.5 w-2.5 cursor-pointer rounded-full transition-all ${index === page ? "w-5 bg-[#E20000] shadow-[0_0_8px_rgba(226,0,0,0.3)]" : "bg-[#8E8366]/30 hover:bg-[#8E8366]/60"}`,
                                                                "aria-label": index === 0 ? "Aller à la page de garde" : index === PAGE_COUNT - 1 ? "Aller à la page finale" : `Aller à l'étape ${index}`
                                                            }, index, false, {
                                                                fileName: "[project]/src/components/RecipeBook.tsx",
                                                                lineNumber: 361,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/RecipeBook.tsx",
                                                        lineNumber: 359,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/RecipeBook.tsx",
                                                lineNumber: 357,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: handlePrev,
                                                        className: "pointer-events-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#8E8366]/40 bg-[#f7f3ea] text-[#8E8366] shadow-sm transition-all hover:border-[#8E8366]/70 hover:bg-[#ebe4d6] hover:text-[#736a52]",
                                                        "aria-label": "Étape précédente",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className: "h-5 w-5",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2.5",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                points: "15 18 9 12 15 6"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/RecipeBook.tsx",
                                                                lineNumber: 390,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/RecipeBook.tsx",
                                                            lineNumber: 389,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/RecipeBook.tsx",
                                                        lineNumber: 383,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: handleNext,
                                                        className: `pointer-events-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#8E8366]/40 bg-[#f7f3ea] text-[#8E8366] shadow-sm transition-all hover:border-[#8E8366]/70 hover:bg-[#ebe4d6] hover:text-[#736a52] ${!hasInteracted ? "halo-pulse" : ""}`,
                                                        "aria-label": "Étape suivante",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className: "h-5 w-5",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2.5",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                points: "9 18 15 12 9 6"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/RecipeBook.tsx",
                                                                lineNumber: 402,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/RecipeBook.tsx",
                                                            lineNumber: 401,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/RecipeBook.tsx",
                                                        lineNumber: 393,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/RecipeBook.tsx",
                                                lineNumber: 382,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RecipeBook.tsx",
                                        lineNumber: 356,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RecipeBook.tsx",
                                lineNumber: 236,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RecipeBook.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RecipeBook.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RecipeBook.tsx",
        lineNumber: 159,
        columnNumber: 5
    }, this);
}
_s(RecipeBook, "avS54UocljKNZ8UQYpB/XfCIv8Y=");
_c5 = RecipeBook;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "BasketIcon");
__turbopack_context__.k.register(_c1, "ChefHatIcon");
__turbopack_context__.k.register(_c2, "UtensilsIcon");
__turbopack_context__.k.register(_c3, "StepsIcon");
__turbopack_context__.k.register(_c4, "PanelTitle");
__turbopack_context__.k.register(_c5, "RecipeBook");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ZoningMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ZoningMap",
    ()=>ZoningMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mapbox-gl/dist/mapbox-gl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mapbox$2f$mapbox$2d$gl$2d$language$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mapbox/mapbox-gl-language/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Use the token extracted from the other components
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].accessToken = 'pk.eyJ1IjoiY3JlYXRpdmVsYWJibGlja2ZyIiwiYSI6ImNsZDRjbTM5bjByM3Mzb2wwYXBzN3B3MDYifQ.H5aWzNdSibf-Vd4rPmwhYA';
function createHatchPattern(color = '#E20000', size = 5, lineWidth = 1.2) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const canvas = window.document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(0, size);
    ctx.lineTo(size, 0);
    ctx.stroke();
    return ctx.getImageData(0, 0, size, size);
}
function getGeojsonBounds(geojson) {
    let minLng = 180, maxLng = -180, minLat = 90, maxLat = -90;
    let hasCoords = false;
    const processCoord = (coord)=>{
        const [lng, lat] = coord;
        if (lng < minLng) minLng = lng;
        if (lng > maxLng) maxLng = lng;
        if (lat < minLat) minLat = lat;
        if (lat > maxLat) maxLat = lat;
        hasCoords = true;
    };
    const processGeometry = (geom)=>{
        if (!geom) return;
        if (geom.type === 'Point') {
            processCoord(geom.coordinates);
        } else if (geom.type === 'LineString' || geom.type === 'MultiPoint') {
            geom.coordinates.forEach(processCoord);
        } else if (geom.type === 'Polygon' || geom.type === 'MultiLineString') {
            geom.coordinates.forEach((ring)=>ring.forEach(processCoord));
        } else if (geom.type === 'MultiPolygon') {
            geom.coordinates.forEach((poly)=>poly.forEach((ring)=>ring.forEach(processCoord)));
        }
    };
    if (geojson.type === 'FeatureCollection') {
        geojson.features.forEach((f)=>processGeometry(f.geometry));
    } else if (geojson.type === 'Feature') {
        processGeometry(geojson.geometry);
    } else {
        processGeometry(geojson);
    }
    return hasCoords ? [
        [
            minLng,
            minLat
        ],
        [
            maxLng,
            maxLat
        ]
    ] : null;
}
const zoningPoints = [
    {
        id: "orllati_vaud",
        name: "Groupe Orllati - Vaud",
        coordinates: [
            6.5907399,
            46.6217156
        ],
        anchor: "bottom",
        offset: [
            0,
            -11
        ]
    },
    {
        id: "grange_verney",
        name: "Ecole d'agrilogie de Grange-Verney",
        coordinates: [
            6.8081789,
            46.6794510
        ],
        anchor: "bottom",
        offset: [
            0,
            -11
        ]
    },
    {
        id: "decharge_planifiee",
        name: "Décharge planifiée",
        coordinates: [
            6.199159,
            46.370290
        ],
        anchor: "bottom",
        offset: [
            0,
            -11
        ]
    },
    {
        id: "henny_freres",
        name: "Société Henny Frères SA",
        coordinates: [
            6.5836671,
            46.6073866
        ],
        anchor: "bottom",
        offset: [
            0,
            -11
        ]
    },
    {
        id: "zone_viticole",
        name: "Parcelles en zone viticole",
        coordinates: [
            6.833717,
            46.474034
        ],
        anchor: "bottom",
        offset: [
            0,
            -11
        ]
    },
    {
        id: "domaine_flogere",
        name: "Domaine de la Flogère",
        coordinates: [
            6.39121,
            46.52923
        ],
        anchor: "bottom",
        offset: [
            0,
            -11
        ]
    },
    {
        id: "hameau_convoite",
        name: "Hameau convoité par Orllati",
        coordinates: [
            6.6084864,
            46.5770538
        ],
        anchor: "bottom",
        offset: [
            0,
            -11
        ]
    },
    {
        id: "commission_fonciere",
        name: "Secrétariat de la commission foncière",
        coordinates: [
            6.6277618,
            46.5095115
        ],
        anchor: "bottom",
        offset: [
            0,
            -11
        ]
    }
];
function ZoningMapInner() {
    _s();
    const mapContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sentinelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pointMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const labelMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const pointDotsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const pointLabelsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const swissBounds = [
        [
            5.9559,
            45.8179
        ],
        [
            10.4921,
            47.8084
        ]
    ];
    const vaudBounds = [
        [
            6.0766,
            46.1011
        ],
        [
            7.2155,
            47.0633
        ]
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ZoningMapInner.useEffect": ()=>{
            if (!mapContainer.current) return;
            const timeoutIds = [];
            let mapLoaded = false;
            let geojsonLoaded = false;
            let intersected = false;
            let animationTriggered = false;
            let dynamicBounds = null;
            let cameraTimeoutId;
            let markerTimeoutId;
            let resizeTimeoutId;
            let initialZoomCompleted = false;
            let scrollHandler = null;
            const SECTION_MAP_STATES = {
                "chapitre-1": {
                    desktop: {
                        center: [
                            6.6589635,
                            46.5852257
                        ],
                        zoom: 8.87
                    },
                    mobile: {
                        center: [
                            6.6264170,
                            46.6008984
                        ],
                        zoom: 8.84
                    },
                    highlightedPoints: [
                        "orllati_vaud"
                    ],
                    highlightedCommunes: [
                        "bioley-orjulaz"
                    ]
                },
                "chapitre-2": {
                    desktop: {
                        center: [
                            6.7295744,
                            46.6435337
                        ],
                        zoom: 9.23
                    },
                    mobile: {
                        center: [
                            6.7935869,
                            46.6739208
                        ],
                        zoom: 9.52
                    },
                    highlightedPoints: [
                        "grange_verney"
                    ],
                    highlightedCommunes: [
                        "moudon"
                    ]
                },
                "chapitre-3": {
                    desktop: {
                        center: [
                            6.2937794,
                            46.4085003
                        ],
                        zoom: 9.23
                    },
                    mobile: {
                        center: [
                            6.2678241,
                            46.4049140
                        ],
                        zoom: 9.26
                    },
                    highlightedPoints: [
                        "decharge_planifiee"
                    ],
                    highlightedCommunes: [
                        "arnex"
                    ]
                },
                "chapitre-4": {
                    desktop: {
                        center: [
                            6.6329336,
                            46.5733769
                        ],
                        zoom: 9.30
                    },
                    mobile: {
                        center: [
                            6.6217462,
                            46.5896646
                        ],
                        zoom: 9.33
                    },
                    highlightedPoints: [
                        "henny_freres"
                    ],
                    highlightedCommunes: [
                        "boussens"
                    ]
                },
                "chapitre-5": {
                    desktop: {
                        center: [
                            6.7466815,
                            46.4968733
                        ],
                        zoom: 9.30
                    },
                    mobile: {
                        center: [
                            6.7750385,
                            46.4982540
                        ],
                        zoom: 9.10
                    },
                    highlightedPoints: [
                        "zone_viticole"
                    ],
                    highlightedCommunes: [
                        "chardonne"
                    ]
                },
                "chapitre-6": {
                    desktop: {
                        center: [
                            6.4502312,
                            46.5450134
                        ],
                        zoom: 8.76
                    },
                    mobile: {
                        center: [
                            6.4502312,
                            46.5450134
                        ],
                        zoom: 8.76
                    },
                    highlightedPoints: [
                        "domaine_flogere"
                    ],
                    highlightedCommunes: [
                        "yens"
                    ]
                },
                "chapitre-7": {
                    desktop: {
                        center: [
                            6.6328458,
                            46.5582027
                        ],
                        zoom: 9.35
                    },
                    mobile: {
                        center: [
                            6.6328458,
                            46.5582027
                        ],
                        zoom: 9.35
                    },
                    highlightedPoints: [
                        "hameau_convoite"
                    ],
                    highlightedCommunes: [
                        "lausanne"
                    ]
                },
                "chapitre-8": {
                    desktop: {
                        center: [
                            6.6244500,
                            46.5266913
                        ],
                        zoom: 10.13
                    },
                    mobile: {
                        center: [
                            6.6287718,
                            46.5468162
                        ],
                        zoom: 9.35
                    },
                    highlightedPoints: [
                        "commission_fonciere"
                    ],
                    highlightedCommunes: [
                        "lausanne"
                    ]
                }
            };
            const sectionIds = [
                "story-header",
                "introduction",
                "chapitre-1",
                "chapitre-2",
                "chapitre-3",
                "chapitre-4",
                "chapitre-5",
                "chapitre-6",
                "chapitre-7",
                "chapitre-8",
                "chapitre-9"
            ];
            let activeSectionId = "story-header";
            // Pre-create and prepare the custom markers in refs
            zoningPoints.forEach({
                "ZoningMapInner.useEffect": (loc)=>{
                    const el = document.createElement('div');
                    el.className = `custom-marker marker-${loc.id}`;
                    el.style.width = '14px';
                    el.style.height = '14px';
                    el.style.borderRadius = '50%';
                    el.style.backgroundColor = '#E20000';
                    el.style.border = '2px solid white';
                    el.style.boxShadow = '0 0 8px rgba(226, 0, 0, 0.6)';
                    el.style.cursor = 'pointer';
                    el.style.opacity = '0';
                    el.style.transition = 'opacity 0.6s ease';
                    pointDotsRef.current[loc.id] = el;
                    const dotMarker = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Marker(el).setLngLat(loc.coordinates);
                    pointMarkersRef.current[loc.id] = dotMarker;
                    const labelEl = document.createElement('div');
                    labelEl.style.whiteSpace = 'nowrap';
                    labelEl.style.backgroundColor = 'white';
                    labelEl.style.border = '1px solid rgba(142, 131, 102, 0.35)';
                    labelEl.style.borderRadius = '4px';
                    labelEl.style.padding = '3px 8px';
                    labelEl.style.fontFamily = 'sans-serif';
                    labelEl.style.fontSize = '11px';
                    labelEl.style.fontWeight = '600';
                    labelEl.style.color = '#1a1a1a';
                    labelEl.style.boxShadow = '0 1px 4px rgba(0,0,0,0.12)';
                    labelEl.style.pointerEvents = 'none';
                    labelEl.style.opacity = '0';
                    labelEl.style.transition = 'opacity 0.6s ease';
                    labelEl.textContent = loc.name;
                    pointLabelsRef.current[loc.id] = labelEl;
                    const labelMarker = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Marker(labelEl, {
                        anchor: loc.anchor,
                        offset: loc.offset
                    }).setLngLat(loc.coordinates);
                    labelMarkersRef.current[loc.id] = labelMarker;
                }
            }["ZoningMapInner.useEffect"]);
            const applyMapCamera = {
                "ZoningMapInner.useEffect.applyMapCamera": (sectionId, duration = 1500)=>{
                    if (!map.current) return;
                    const state = SECTION_MAP_STATES[sectionId] || {
                        bounds: dynamicBounds || vaudBounds
                    };
                    const isMobile = ("TURBOPACK compile-time value", "object") !== 'undefined' && window.innerWidth < 768;
                    const responsiveValues = isMobile ? state.mobile : state.desktop;
                    if (responsiveValues) {
                        map.current.flyTo({
                            center: responsiveValues.center,
                            zoom: responsiveValues.zoom,
                            duration: duration,
                            essential: true
                        });
                    } else if (state.center && state.zoom !== undefined) {
                        map.current.flyTo({
                            center: state.center,
                            zoom: state.zoom,
                            duration: duration,
                            essential: true
                        });
                    } else {
                        const targetBounds = state.bounds || dynamicBounds || vaudBounds;
                        map.current.fitBounds(targetBounds, {
                            padding: isMobile ? 15 : 25,
                            duration: duration
                        });
                    }
                }
            }["ZoningMapInner.useEffect.applyMapCamera"];
            const handleSectionChange = {
                "ZoningMapInner.useEffect.handleSectionChange": (sectionId)=>{
                    if (!map.current) return;
                    // Dispatch a custom window event to notify other components of the active section change
                    if ("TURBOPACK compile-time truthy", 1) {
                        const event = new CustomEvent("zoning-map-section-change", {
                            detail: {
                                sectionId
                            }
                        });
                        window.dispatchEvent(event);
                    }
                    const state = SECTION_MAP_STATES[sectionId] || {
                        bounds: dynamicBounds || vaudBounds
                    };
                    const zoomDuration = 1500;
                    const delayDuration = sectionId.startsWith("chapitre-") ? 1000 : 350; // 1s delay for all chapter focuses, 350ms reset delay for others
                    const targetPoints = state.highlightedPoints || [];
                    const targetCommunes = state.highlightedCommunes || [];
                    console.log(`[ZoningMap] handleSectionChange: ${sectionId}, targetPoints:`, targetPoints);
                    // 0. Update commune layers paint properties dynamically
                    if (map.current.getLayer('commune-fills') && map.current.getLayer('commune-borders')) {
                        if (targetCommunes.length > 0) {
                            map.current.setPaintProperty('commune-fills', 'fill-pattern', [
                                'match',
                                [
                                    'get',
                                    'id'
                                ],
                                targetCommunes,
                                'hatch-pattern',
                                'hatch-pattern-grey' // Grey pattern for others
                            ]);
                            map.current.setPaintProperty('commune-borders', 'line-color', [
                                'match',
                                [
                                    'get',
                                    'id'
                                ],
                                targetCommunes,
                                '#E20000',
                                '#A0A0A0' // Grey border for others
                            ]);
                            map.current.setPaintProperty('commune-borders', 'line-width', [
                                'match',
                                [
                                    'get',
                                    'id'
                                ],
                                targetCommunes,
                                1.5,
                                1.0
                            ]);
                        } else {
                            // Default state when no communes are highlighted (e.g., header, intro)
                            map.current.setPaintProperty('commune-fills', 'fill-pattern', 'hatch-pattern');
                            map.current.setPaintProperty('commune-borders', 'line-color', '#E20000');
                            map.current.setPaintProperty('commune-borders', 'line-width', 1.5);
                        }
                    }
                    // 1. Hide points that are not highlighted in this section (fade out immediately)
                    zoningPoints.forEach({
                        "ZoningMapInner.useEffect.handleSectionChange": (point)=>{
                            const dotEl = pointDotsRef.current[point.id];
                            const labelEl = pointLabelsRef.current[point.id];
                            if (!targetPoints.includes(point.id)) {
                                if (dotEl) dotEl.style.opacity = '0';
                                if (labelEl) labelEl.style.opacity = '0';
                                const removeTimeout = window.setTimeout({
                                    "ZoningMapInner.useEffect.handleSectionChange.removeTimeout": ()=>{
                                        // Only remove if this section is still active
                                        if (activeSectionId !== sectionId) return;
                                        if (!targetPoints.includes(point.id)) {
                                            console.log(`[ZoningMap] Removing marker from map for: ${point.id}`);
                                            pointMarkersRef.current[point.id]?.remove();
                                            labelMarkersRef.current[point.id]?.remove();
                                        }
                                    }
                                }["ZoningMapInner.useEffect.handleSectionChange.removeTimeout"], 600);
                                timeoutIds.push(removeTimeout);
                            }
                        }
                    }["ZoningMapInner.useEffect.handleSectionChange"]);
                    // 2. Cancel any pending camera movements and reveals
                    window.clearTimeout(cameraTimeoutId);
                    window.clearTimeout(markerTimeoutId);
                    // 3. Schedule the camera zoom and focus after the transition delay
                    cameraTimeoutId = window.setTimeout({
                        "ZoningMapInner.useEffect.handleSectionChange": ()=>{
                            console.log(`[ZoningMap] cameraTimeoutId fired for: ${sectionId}, activeSectionId is: ${activeSectionId}`);
                            if (activeSectionId !== sectionId) return;
                            applyMapCamera(sectionId, zoomDuration);
                        }
                    }["ZoningMapInner.useEffect.handleSectionChange"], delayDuration);
                    timeoutIds.push(cameraTimeoutId);
                    // 4. Highlight and fade in markers synchronized with the camera movement start
                    if (targetPoints.length > 0) {
                        markerTimeoutId = window.setTimeout({
                            "ZoningMapInner.useEffect.handleSectionChange": ()=>{
                                console.log(`[ZoningMap] markerTimeoutId fired for: ${sectionId}, activeSectionId is: ${activeSectionId}`);
                                if (activeSectionId !== sectionId) return;
                                targetPoints.forEach({
                                    "ZoningMapInner.useEffect.handleSectionChange": (pointId)=>{
                                        const point = zoningPoints.find({
                                            "ZoningMapInner.useEffect.handleSectionChange.point": (p)=>p.id === pointId
                                        }["ZoningMapInner.useEffect.handleSectionChange.point"]);
                                        if (!point || !map.current) {
                                            console.log(`[ZoningMap] Point ${pointId} not found or map.current is null`);
                                            return;
                                        }
                                        const dotEl = pointDotsRef.current[point.id];
                                        const labelEl = pointLabelsRef.current[point.id];
                                        const dotMarker = pointMarkersRef.current[point.id];
                                        const labelMarker = labelMarkersRef.current[point.id];
                                        console.log(`[ZoningMap] Point ${pointId} markers:`, {
                                            dotElExists: !!dotEl,
                                            labelElExists: !!labelEl,
                                            dotMarkerExists: !!dotMarker,
                                            labelMarkerExists: !!labelMarker
                                        });
                                        if (dotMarker && labelMarker) {
                                            console.log(`[ZoningMap] Adding marker and label to map for: ${pointId}`);
                                            dotMarker.addTo(map.current);
                                            labelMarker.addTo(map.current);
                                            // Set opacity to 0 initially and force browser reflow to register the transition state
                                            if (dotEl) {
                                                dotEl.style.opacity = '0';
                                                void dotEl.offsetHeight;
                                            }
                                            if (labelEl) {
                                                labelEl.style.opacity = '0';
                                                void labelEl.offsetHeight;
                                            }
                                            requestAnimationFrame({
                                                "ZoningMapInner.useEffect.handleSectionChange": ()=>{
                                                    requestAnimationFrame({
                                                        "ZoningMapInner.useEffect.handleSectionChange": ()=>{
                                                            if (dotEl) {
                                                                dotEl.style.opacity = '1';
                                                                console.log(`[ZoningMap] Set dot opacity to 1 for: ${pointId}`);
                                                            }
                                                            if (labelEl) {
                                                                labelEl.style.opacity = '1';
                                                                console.log(`[ZoningMap] Set label opacity to 1 for: ${pointId}`);
                                                            }
                                                        }
                                                    }["ZoningMapInner.useEffect.handleSectionChange"]);
                                                }
                                            }["ZoningMapInner.useEffect.handleSectionChange"]);
                                        }
                                    }
                                }["ZoningMapInner.useEffect.handleSectionChange"]);
                            }
                        }["ZoningMapInner.useEffect.handleSectionChange"], delayDuration);
                        timeoutIds.push(markerTimeoutId);
                    }
                    timeoutIds.push(cameraTimeoutId);
                }
            }["ZoningMapInner.useEffect.handleSectionChange"];
            const checkAndTrigger = {
                "ZoningMapInner.useEffect.checkAndTrigger": ()=>{
                    if (map.current) {
                        map.current.resize();
                    }
                    if (mapLoaded && geojsonLoaded && intersected && !animationTriggered) {
                        animationTriggered = true;
                        // Wait 0.5 seconds before initiating the zoom and layer fade-in
                        const initialTimeout = window.setTimeout({
                            "ZoningMapInner.useEffect.checkAndTrigger.initialTimeout": ()=>{
                                const targetBounds = dynamicBounds || vaudBounds;
                                const isMobile = ("TURBOPACK compile-time value", "object") !== 'undefined' && window.innerWidth < 768;
                                map.current?.fitBounds(targetBounds, {
                                    padding: isMobile ? 15 : 25,
                                    duration: 2500
                                });
                                // Delay fade-out of Vaud boundaries until AFTER the zoom focus finishes
                                const initialZoomDuration = 2500;
                                const fadeOutVaudTimeout = window.setTimeout({
                                    "ZoningMapInner.useEffect.checkAndTrigger.initialTimeout.fadeOutVaudTimeout": ()=>{
                                        if (map.current?.getLayer('vaud-fill')) {
                                            map.current.setPaintProperty('vaud-fill', 'fill-opacity', 0);
                                        }
                                        if (map.current?.getLayer('vaud-line')) {
                                            map.current.setPaintProperty('vaud-line', 'line-opacity', 0);
                                        }
                                    }
                                }["ZoningMapInner.useEffect.checkAndTrigger.initialTimeout.fadeOutVaudTimeout"], initialZoomDuration);
                                timeoutIds.push(fadeOutVaudTimeout);
                                // Delay fade-in of communes layers sequentially after Vaud boundaries fade out
                                const startObserverTimeout = window.setTimeout({
                                    "ZoningMapInner.useEffect.checkAndTrigger.initialTimeout.startObserverTimeout": ()=>{
                                        if (map.current?.getLayer('commune-fills')) {
                                            map.current.setPaintProperty('commune-fills', 'fill-opacity', 0.25);
                                        }
                                        if (map.current?.getLayer('commune-borders')) {
                                            map.current.setPaintProperty('commune-borders', 'line-opacity', 0.6);
                                        }
                                        if (map.current?.getLayer('commune-labels')) {
                                            map.current.setPaintProperty('commune-labels', 'text-opacity', 1);
                                        }
                                        // Use a robust scroll listener instead of IntersectionObserver
                                        // to guarantee bulletproof section detection on all devices and scroll speeds.
                                        const detectActiveSection = {
                                            "ZoningMapInner.useEffect.checkAndTrigger.initialTimeout.startObserverTimeout.detectActiveSection": ()=>{
                                                const viewportCenter = window.innerHeight * 0.5;
                                                let bestSection = activeSectionId;
                                                let minDistance = Infinity;
                                                for (const id of sectionIds){
                                                    const el = document.getElementById(id);
                                                    if (!el) continue;
                                                    const rect = el.getBoundingClientRect();
                                                    // If the section spans across the viewport center, it's the active one
                                                    if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
                                                        bestSection = id;
                                                        minDistance = 0;
                                                        break;
                                                    }
                                                    // Otherwise, find the section closest to the center
                                                    const sectionCenter = (rect.top + rect.bottom) / 2;
                                                    const distance = Math.abs(sectionCenter - viewportCenter);
                                                    if (distance < minDistance) {
                                                        minDistance = distance;
                                                        bestSection = id;
                                                    }
                                                }
                                                if (bestSection !== activeSectionId) {
                                                    activeSectionId = bestSection;
                                                    handleSectionChange(bestSection);
                                                }
                                            }
                                        }["ZoningMapInner.useEffect.checkAndTrigger.initialTimeout.startObserverTimeout.detectActiveSection"];
                                        let ticking = false;
                                        scrollHandler = ({
                                            "ZoningMapInner.useEffect.checkAndTrigger.initialTimeout.startObserverTimeout": ()=>{
                                                if (!ticking) {
                                                    window.requestAnimationFrame({
                                                        "ZoningMapInner.useEffect.checkAndTrigger.initialTimeout.startObserverTimeout": ()=>{
                                                            detectActiveSection();
                                                            ticking = false;
                                                        }
                                                    }["ZoningMapInner.useEffect.checkAndTrigger.initialTimeout.startObserverTimeout"]);
                                                    ticking = true;
                                                }
                                            }
                                        })["ZoningMapInner.useEffect.checkAndTrigger.initialTimeout.startObserverTimeout"];
                                        window.addEventListener('scroll', scrollHandler, {
                                            passive: true
                                        });
                                        window.addEventListener('resize', scrollHandler, {
                                            passive: true
                                        });
                                        initialZoomCompleted = true;
                                        // Initial check to set the first active section
                                        detectActiveSection();
                                    }
                                }["ZoningMapInner.useEffect.checkAndTrigger.initialTimeout.startObserverTimeout"], initialZoomDuration + 1500);
                                timeoutIds.push(startObserverTimeout);
                            }
                        }["ZoningMapInner.useEffect.checkAndTrigger.initialTimeout"], 500);
                        timeoutIds.push(initialTimeout);
                    }
                }
            }["ZoningMapInner.useEffect.checkAndTrigger"];
            // Initialize Mapbox map focused on Switzerland
            const isMobileInit = ("TURBOPACK compile-time value", "object") !== 'undefined' && window.innerWidth < 768;
            map.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/light-v11",
                interactive: false,
                ...isMobileInit ? {
                    center: [
                        8.3062266,
                        46.8154387
                    ],
                    zoom: 5.0
                } : {
                    bounds: swissBounds,
                    fitBoundsOptions: {
                        padding: 15
                    }
                }
            });
            // Console log exact coordinates and zoom levels on movements and zooms
            // map.current.on('moveend', () => {
            //   if (!map.current) return;
            //   const center = map.current.getCenter();
            //   console.log(`[ZoningMap] Center: [${center.lng.toFixed(7)}, ${center.lat.toFixed(7)}], Zoom: ${map.current.getZoom().toFixed(2)}`);
            // });
            // map.current.on('zoomend', () => {
            //   if (!map.current) return;
            //   console.log(`[ZoningMap] Zoom Level: ${map.current.getZoom().toFixed(2)}`);
            // });
            // Translate map labels to French
            const language = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mapbox$2f$mapbox$2d$gl$2d$language$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                defaultLanguage: 'fr'
            });
            map.current.addControl(language);
            map.current.on('load', {
                "ZoningMapInner.useEffect": ()=>{
                    if (!map.current) return;
                    // Register the red diagonal hatch pattern
                    const hatchImg = createHatchPattern('#E20000', 5, 1.2);
                    if (hatchImg) {
                        map.current.addImage('hatch-pattern', hatchImg);
                    }
                    // Register the grey diagonal hatch pattern for non-highlighted communes
                    const hatchImgGrey = createHatchPattern('#A0A0A0', 5, 1.2);
                    if (hatchImgGrey) {
                        map.current.addImage('hatch-pattern-grey', hatchImgGrey);
                    }
                    const layers = map.current.getStyle()?.layers;
                    // Color the global map layers with the warm format colors to match the rest of the site
                    if (layers) {
                        layers.forEach({
                            "ZoningMapInner.useEffect": (layer)=>{
                                if (layer.id === 'background') {
                                    map.current?.setPaintProperty(layer.id, 'background-color', '#FAF8F4'); // Warm cream background
                                } else if (layer.id.includes('water') && layer.type === 'fill') {
                                    map.current?.setPaintProperty(layer.id, 'fill-color', '#A3CFD1'); // Teal water
                                } else if ((layer.id.includes('landuse') || layer.id.includes('park') || layer.id.includes('wood') || layer.id.includes('sand')) && layer.type === 'fill') {
                                    map.current?.setPaintProperty(layer.id, 'fill-color', '#E5DEC9'); // Warm beige landuse
                                } else if (layer.id.includes('road') && layer.type === 'line') {
                                    map.current?.setPaintProperty(layer.id, 'line-color', '#ffffff');
                                    map.current?.setPaintProperty(layer.id, 'line-opacity', 0.8);
                                } else if (layer.id.includes('building') && layer.type === 'fill') {
                                    map.current?.setPaintProperty(layer.id, 'fill-color', '#f1f3f5');
                                } else if (layer.type === 'symbol' && layer.id.includes('settlement')) {
                                    map.current?.setLayoutProperty(layer.id, 'visibility', 'none');
                                }
                            }
                        }["ZoningMapInner.useEffect"]);
                    }
                    // Canton de Vaud GeoJSON Source
                    map.current.addSource('vaud-boundary', {
                        type: 'geojson',
                        data: './CH-VD.geojson'
                    });
                    // Fill layer (initially visible at 0.3 opacity with hatch pattern)
                    map.current.addLayer({
                        'id': 'vaud-fill',
                        'type': 'fill',
                        'source': 'vaud-boundary',
                        'layout': {},
                        'paint': {
                            'fill-pattern': 'hatch-pattern',
                            'fill-opacity': 0.3,
                            'fill-opacity-transition': {
                                duration: 1500
                            }
                        }
                    });
                    // Border layer (initially visible at 1.0 opacity)
                    map.current.addLayer({
                        'id': 'vaud-line',
                        'type': 'line',
                        'source': 'vaud-boundary',
                        'layout': {
                            'line-cap': 'round',
                            'line-join': 'round'
                        },
                        'paint': {
                            'line-color': '#E20000',
                            'line-width': 1.5,
                            'line-opacity': 1.0,
                            'line-opacity-transition': {
                                duration: 1500
                            }
                        }
                    });
                    // Fetch local communes GeoJSON and add it to the map
                    fetch('./communes.geojson').then({
                        "ZoningMapInner.useEffect": (res)=>res.json()
                    }["ZoningMapInner.useEffect"]).then({
                        "ZoningMapInner.useEffect": (data)=>{
                            if (!map.current) return;
                            // Compute dynamic bounds from GeoJSON features to zoom closer
                            const bounds = getGeojsonBounds(data);
                            if (bounds) {
                                dynamicBounds = bounds;
                            }
                            map.current.addSource('communes', {
                                type: 'geojson',
                                data: data
                            });
                            // Add fill layer for Polygons/MultiPolygons (Initial opacity = 0, transition duration = 1500)
                            map.current.addLayer({
                                'id': 'commune-fills',
                                'type': 'fill',
                                'source': 'communes',
                                'filter': [
                                    'any',
                                    [
                                        '==',
                                        [
                                            'geometry-type'
                                        ],
                                        'Polygon'
                                    ],
                                    [
                                        '==',
                                        [
                                            'geometry-type'
                                        ],
                                        'MultiPolygon'
                                    ]
                                ],
                                'paint': {
                                    'fill-pattern': 'hatch-pattern',
                                    'fill-opacity': 0,
                                    'fill-opacity-transition': {
                                        duration: 1500
                                    }
                                }
                            });
                            // Add line layer for borders (Initial opacity = 0, transition duration = 1500)
                            map.current.addLayer({
                                'id': 'commune-borders',
                                'type': 'line',
                                'source': 'communes',
                                'filter': [
                                    'any',
                                    [
                                        '==',
                                        [
                                            'geometry-type'
                                        ],
                                        'Polygon'
                                    ],
                                    [
                                        '==',
                                        [
                                            'geometry-type'
                                        ],
                                        'MultiPolygon'
                                    ]
                                ],
                                'paint': {
                                    'line-color': '#E20000',
                                    'line-width': 1.5,
                                    'line-opacity': 0,
                                    'line-opacity-transition': {
                                        duration: 1500
                                    }
                                }
                            });
                            // Add labels for all features (Initial opacity = 0, transition duration = 1500)
                            // Filter to only administrative polygon features to show commune names
                            map.current.addLayer({
                                'id': 'commune-labels',
                                'type': 'symbol',
                                'source': 'communes',
                                'filter': [
                                    'any',
                                    [
                                        '==',
                                        [
                                            'geometry-type'
                                        ],
                                        'Polygon'
                                    ],
                                    [
                                        '==',
                                        [
                                            'geometry-type'
                                        ],
                                        'MultiPolygon'
                                    ]
                                ],
                                'layout': {
                                    'text-field': [
                                        'get',
                                        'name'
                                    ],
                                    'text-size': 11,
                                    'text-anchor': 'top',
                                    'text-offset': [
                                        0,
                                        0.6
                                    ],
                                    'text-max-width': 8
                                },
                                'paint': {
                                    'text-color': '#1a1a1a',
                                    'text-halo-color': '#ffffff',
                                    'text-halo-width': 1.5,
                                    'text-opacity': 0,
                                    'text-opacity-transition': {
                                        duration: 1500
                                    }
                                }
                            });
                            geojsonLoaded = true;
                            checkAndTrigger();
                        }
                    }["ZoningMapInner.useEffect"]).catch({
                        "ZoningMapInner.useEffect": (err)=>console.error("Error loading communes GeoJSON on zoning map:", err)
                    }["ZoningMapInner.useEffect"]);
                    mapLoaded = true;
                    checkAndTrigger();
                }
            }["ZoningMapInner.useEffect"]);
            // Intersection observer to wait until the map is actually visible on screen
            const visibilityObserver = new IntersectionObserver({
                "ZoningMapInner.useEffect": (entries)=>{
                    if (entries[0].isIntersecting) {
                        intersected = true;
                        checkAndTrigger();
                        visibilityObserver.disconnect(); // Only trigger once
                    }
                }
            }["ZoningMapInner.useEffect"], {
                threshold: 0
            }); // Use 0 to match LandfillMap which works on Android Chrome
            if (mapContainer.current) {
                visibilityObserver.observe(mapContainer.current);
            }
            // Resize observer to handle map resizing dynamically (e.g. when detached)
            const resizeObserver = new ResizeObserver({
                "ZoningMapInner.useEffect": ()=>{
                    if (!map.current) return;
                    map.current.resize();
                    if (initialZoomCompleted) {
                        // Debounce camera re-centering to run after the resize animation stabilizes
                        window.clearTimeout(resizeTimeoutId);
                        resizeTimeoutId = window.setTimeout({
                            "ZoningMapInner.useEffect": ()=>{
                                applyMapCamera(activeSectionId, 800); // smooth snap in 800ms
                            }
                        }["ZoningMapInner.useEffect"], 150);
                        timeoutIds.push(resizeTimeoutId);
                    }
                }
            }["ZoningMapInner.useEffect"]);
            if (mapContainer.current) {
                resizeObserver.observe(mapContainer.current);
            }
            return ({
                "ZoningMapInner.useEffect": ()=>{
                    visibilityObserver.disconnect();
                    resizeObserver.disconnect();
                    if (scrollHandler) {
                        window.removeEventListener("scroll", scrollHandler);
                        window.removeEventListener("resize", scrollHandler);
                    }
                    window.clearTimeout(cameraTimeoutId);
                    window.clearTimeout(resizeTimeoutId);
                    timeoutIds.forEach(clearTimeout);
                    map.current?.remove();
                    map.current = null;
                }
            })["ZoningMapInner.useEffect"];
        }
    }["ZoningMapInner.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full relative bg-neutral-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: mapContainer,
                className: "absolute inset-0 h-full w-full"
            }, void 0, false, {
                fileName: "[project]/src/components/ZoningMap.tsx",
                lineNumber: 836,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: sentinelRef,
                className: "absolute bottom-0 left-0 right-0 h-[1px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/ZoningMap.tsx",
                lineNumber: 837,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ZoningMap.tsx",
        lineNumber: 835,
        columnNumber: 5
    }, this);
}
_s(ZoningMapInner, "BQ31wMTRB8duIUkfKUrAQI+hXfE=");
_c = ZoningMapInner;
const ZoningMap = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(ZoningMapInner);
_c1 = ZoningMap;
var _c, _c1;
__turbopack_context__.k.register(_c, "ZoningMapInner");
__turbopack_context__.k.register(_c1, "ZoningMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LandPriceIsometric.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandPriceIsometric
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const PLOTS = [
    {
        id: "foret",
        label: "Forêt liée à terrain agricole",
        shortLabel: [
            "Forêt"
        ],
        price: 2,
        priceLabel: "2.-",
        swatch: "bg-[#6d7a55]",
        description: "Les bois attenants à un domaine agricole se négocient au prix d'un café le mètre carré. Indissociables des terres qu'ils bordent, ils en suivent le destin."
    },
    {
        id: "agricole",
        label: "Terrain agricole",
        shortLabel: [
            "Terrain",
            "agricole"
        ],
        price: 8,
        priceLabel: "8.-",
        swatch: "bg-[#a3825e]",
        description: "La LDFR plafonne le prix des terres cultivables pour barrer la route à la spéculation. En principe, seuls les exploitants à titre personnel peuvent acquérir. C'est ce verrou qu'Orllati parvient à contourner."
    },
    {
        id: "speciale",
        label: "Zone agricole spéciale (dérogation)",
        shortLabel: [
            "Zone agricole",
            "spéciale"
        ],
        price: 12,
        priceLabel: "12.-",
        swatch: "bg-[#4f8d8a]",
        description: "La dérogation qui autorise serres et cultures hors-sol fait grimper le mètre carré de 50%. Un premier indice: dès qu'on peut construire, la terre s'envole."
    },
    {
        id: "viticole",
        label: "Terrain viticole",
        shortLabel: [
            "Terrain",
            "viticole"
        ],
        price: 15,
        priceLabel: "15.-",
        swatch: "bg-[#748257]",
        description: "Le sommet de l'échelle agricole: les coteaux genevois, culture exigeante et à forte valeur paysagère. Quinze francs le mètre carré — toujours 36 fois moins que le béton."
    },
    {
        id: "batir",
        label: "Terrain à bâtir (Genève 2025)",
        shortLabel: [
            "Terrain",
            "à bâtir"
        ],
        price: 540,
        priceLabel: "540.-",
        swatch: "bg-[#E20000]",
        description: "540 francs le mètre carré: sortir une parcelle de la zone agricole multiplie sa valeur par 67,5. Le déclassement est le jackpot foncier — d'où l'intérêt d'acheter des terres à 8 francs… et d'attendre."
    }
];
/* ------------------------------------------------------------------ */ /* Géométrie isométrique 2:1                                           */ /* ------------------------------------------------------------------ */ // Position des parcelles dans la scène (860 x 560)
const LAYOUT = [
    {
        cx: 100,
        cy: 428,
        w: 56
    },
    {
        cx: 244,
        cy: 440,
        w: 56
    },
    {
        cx: 388,
        cy: 430,
        w: 56
    },
    {
        cx: 532,
        cy: 442,
        w: 56
    },
    {
        cx: 700,
        cy: 436,
        w: 72
    }
];
const H_ZOOM_MAX = 150; // hauteur du viticole (15.-) en mode zoom
const H_TOWER_ZOOM = 580; // la tour crève le cadre (clippée par le SVG)
const H_REAL_MAX = 322; // hauteur de la tour en échelle réelle
const lerp = (a, b, t)=>a + (b - a) * t;
const clamp01 = (t)=>Math.min(Math.max(t, 0), 1);
const easeInOutCubic = (t)=>t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const linearEase = (t)=>t;
// Léger dépassement élastique pour l'apparition des parcelles
const easeOutBack = (t)=>{
    const c1 = 1.2;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};
/** Interpole une valeur cible avec une animation rAF organique. */ function useAnimatedNumber(target, duration = 1100, ease = easeInOutCubic) {
    _s();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(target);
    const current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(target);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAnimatedNumber.useEffect": ()=>{
            if (current.current === target) return;
            const from = current.current;
            const start = performance.now();
            let raf = 0;
            const tick = {
                "useAnimatedNumber.useEffect.tick": (now)=>{
                    const p = duration <= 0 ? 1 : Math.min((now - start) / duration, 1);
                    const v = lerp(from, target, ease(p));
                    current.current = v;
                    setValue(v);
                    if (p < 1) raf = requestAnimationFrame(tick);
                }
            }["useAnimatedNumber.useEffect.tick"];
            raf = requestAnimationFrame(tick);
            return ({
                "useAnimatedNumber.useEffect": ()=>cancelAnimationFrame(raf)
            })["useAnimatedNumber.useEffect"];
        }
    }["useAnimatedNumber.useEffect"], [
        target,
        duration,
        ease
    ]);
    return value;
}
_s(useAnimatedNumber, "3qR67roCXCFN7CO5AJJ3zo7LPFc=");
const makeIso = (cx, cyTop, w)=>{
    const hh = w / 2;
    return (u, v, z = 0)=>[
            cx + (u - v) * w,
            cyTop + (u + v - 1) * hh - z
        ];
};
const poly = (pts)=>pts.map((p)=>`${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");
/* ------------------------------------------------------------------ */ /* Décors végétaux & bâtis (posés sur le plateau, suivent la hauteur)  */ /* ------------------------------------------------------------------ */ function Trees({ iso, k }) {
    const spots = [
        [
            0.3,
            0.28,
            1.1
        ],
        [
            0.68,
            0.2,
            0.85
        ],
        [
            0.22,
            0.68,
            0.9
        ],
        [
            0.55,
            0.55,
            1.2
        ],
        [
            0.8,
            0.62,
            0.75
        ]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: spots.map(([u, v, size], i)=>{
            const s = size * k;
            const [x, y] = iso(u, v);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: x,
                        y1: y,
                        x2: x,
                        y2: y - 5 * s,
                        stroke: "#5d4a33",
                        strokeWidth: 1.6 * s
                    }, void 0, false, {
                        fileName: "[project]/src/components/LandPriceIsometric.tsx",
                        lineNumber: 181,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                        points: poly([
                            [
                                x - 6 * s,
                                y - 4 * s
                            ],
                            [
                                x + 6 * s,
                                y - 4 * s
                            ],
                            [
                                x,
                                y - 14 * s
                            ]
                        ]),
                        fill: "#4f6644"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LandPriceIsometric.tsx",
                        lineNumber: 182,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                        points: poly([
                            [
                                x - 4.5 * s,
                                y - 9 * s
                            ],
                            [
                                x + 4.5 * s,
                                y - 9 * s
                            ],
                            [
                                x,
                                y - 17 * s
                            ]
                        ]),
                        fill: "#66794f"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LandPriceIsometric.tsx",
                        lineNumber: 186,
                        columnNumber: 13
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/src/components/LandPriceIsometric.tsx",
                lineNumber: 180,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/LandPriceIsometric.tsx",
        lineNumber: 175,
        columnNumber: 5
    }, this);
}
_c = Trees;
function Furrows({ iso, k }) {
    const rows = [
        0.18,
        0.36,
        0.54,
        0.72,
        0.9
    ];
    const wheat = [
        [
            0.2,
            0.27
        ],
        [
            0.45,
            0.27
        ],
        [
            0.7,
            0.27
        ],
        [
            0.3,
            0.63
        ],
        [
            0.55,
            0.63
        ],
        [
            0.8,
            0.63
        ]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            rows.map((v, i)=>{
                const [x1, y1] = iso(0.06, v);
                const [x2, y2] = iso(0.94, v);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: x1,
                    y1: y1,
                    x2: x2,
                    y2: y2,
                    stroke: "#7d5c38",
                    strokeWidth: 2.2,
                    strokeLinecap: "round",
                    opacity: 0.85
                }, i, false, {
                    fileName: "[project]/src/components/LandPriceIsometric.tsx",
                    lineNumber: 209,
                    columnNumber: 11
                }, this);
            }),
            wheat.map(([u, v], i)=>{
                const [x, y] = iso(u, v);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: x,
                            y1: y,
                            x2: x,
                            y2: y - 8 * k,
                            stroke: "#cfa45c",
                            strokeWidth: 1.4
                        }, void 0, false, {
                            fileName: "[project]/src/components/LandPriceIsometric.tsx",
                            lineNumber: 217,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: x,
                            cy: y - 9 * k,
                            rx: 2 * k,
                            ry: 3.2 * k,
                            fill: "#d9bc80"
                        }, void 0, false, {
                            fileName: "[project]/src/components/LandPriceIsometric.tsx",
                            lineNumber: 218,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/components/LandPriceIsometric.tsx",
                    lineNumber: 216,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/LandPriceIsometric.tsx",
        lineNumber: 204,
        columnNumber: 5
    }, this);
}
_c1 = Furrows;
function Greenhouse({ iso, k }) {
    const gh = 16 * k; // hauteur des parois
    const rh = 9 * k; // surélévation du faîte
    const u0 = 0.26, u1 = 0.8, v0 = 0.3, v1 = 0.74;
    const B = iso(u1, v0), C = iso(u1, v1), D = iso(u0, v1);
    const A2 = iso(u0, v0, gh), B2 = iso(u1, v0, gh), C2 = iso(u1, v1, gh), D2 = iso(u0, v1, gh);
    const M0 = iso(u0, (v0 + v1) / 2, gh + rh);
    const M1 = iso(u1, (v0 + v1) / 2, gh + rh);
    const glass = {
        fill: "#bcd6d0",
        fillOpacity: 0.55,
        stroke: "#ffffff",
        strokeWidth: 1
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        opacity: k <= 0.05 ? 0 : 1,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: poly([
                    A2,
                    B2,
                    M1,
                    M0
                ]),
                ...glass,
                fillOpacity: 0.4
            }, void 0, false, {
                fileName: "[project]/src/components/LandPriceIsometric.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: poly([
                    B,
                    C,
                    C2,
                    B2
                ]),
                ...glass,
                fillOpacity: 0.45
            }, void 0, false, {
                fileName: "[project]/src/components/LandPriceIsometric.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: poly([
                    D,
                    C,
                    C2,
                    D2
                ]),
                ...glass
            }, void 0, false, {
                fileName: "[project]/src/components/LandPriceIsometric.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: poly([
                    D2,
                    C2,
                    M1,
                    M0
                ]),
                ...glass,
                fillOpacity: 0.7
            }, void 0, false, {
                fileName: "[project]/src/components/LandPriceIsometric.tsx",
                lineNumber: 244,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: M0[0],
                y1: M0[1],
                x2: M1[0],
                y2: M1[1],
                stroke: "#4f8d8a",
                strokeWidth: 1.2
            }, void 0, false, {
                fileName: "[project]/src/components/LandPriceIsometric.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/LandPriceIsometric.tsx",
        lineNumber: 236,
        columnNumber: 5
    }, this);
}
_c2 = Greenhouse;
function Vines({ iso, k }) {
    const rows = [
        0.25,
        0.5,
        0.75
    ];
    const posts = [
        0.12,
        0.31,
        0.5,
        0.69,
        0.88
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: rows.map((v, i)=>{
            const [wx1, wy1] = iso(0.12, v, 8 * k);
            const [wx2, wy2] = iso(0.88, v, 8 * k);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: wx1,
                        y1: wy1,
                        x2: wx2,
                        y2: wy2,
                        stroke: "#6b7a4f",
                        strokeWidth: 1,
                        opacity: 0.7
                    }, void 0, false, {
                        fileName: "[project]/src/components/LandPriceIsometric.tsx",
                        lineNumber: 261,
                        columnNumber: 13
                    }, this),
                    posts.map((u, j)=>{
                        const [x, y] = iso(u, v);
                        const [tx, ty] = iso(u, v, 9 * k);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: x,
                                    y1: y,
                                    x2: tx,
                                    y2: ty,
                                    stroke: "#6b5536",
                                    strokeWidth: 1.5
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                    lineNumber: 267,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: tx,
                                    cy: ty,
                                    r: 3 * k,
                                    fill: "#748257"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                    lineNumber: 268,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: tx + 1.5 * k,
                                    cy: ty + 2.5 * k,
                                    r: 1.3 * k,
                                    fill: "#6d5570"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                    lineNumber: 269,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, j, true, {
                            fileName: "[project]/src/components/LandPriceIsometric.tsx",
                            lineNumber: 266,
                            columnNumber: 17
                        }, this);
                    })
                ]
            }, i, true, {
                fileName: "[project]/src/components/LandPriceIsometric.tsx",
                lineNumber: 260,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/LandPriceIsometric.tsx",
        lineNumber: 255,
        columnNumber: 5
    }, this);
}
_c3 = Vines;
function Cloud({ x, y, s = 1, dur = 11, delay = 0 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        className: "lpi-cloud lpi-anim",
        style: {
            animation: `lpi-drift ${dur}s ease-in-out ${delay}s infinite alternate`
        },
        opacity: 0.92,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: x,
                cy: y,
                rx: 34 * s,
                ry: 13 * s,
                fill: "#ffffff"
            }, void 0, false, {
                fileName: "[project]/src/components/LandPriceIsometric.tsx",
                lineNumber: 287,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: x - 20 * s,
                cy: y + 4 * s,
                rx: 20 * s,
                ry: 9 * s,
                fill: "#ffffff"
            }, void 0, false, {
                fileName: "[project]/src/components/LandPriceIsometric.tsx",
                lineNumber: 288,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: x + 22 * s,
                cy: y + 5 * s,
                rx: 22 * s,
                ry: 9 * s,
                fill: "#ffffff"
            }, void 0, false, {
                fileName: "[project]/src/components/LandPriceIsometric.tsx",
                lineNumber: 289,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: x + 4 * s,
                cy: y - 8 * s,
                rx: 18 * s,
                ry: 10 * s,
                fill: "#ffffff"
            }, void 0, false, {
                fileName: "[project]/src/components/LandPriceIsometric.tsx",
                lineNumber: 290,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/LandPriceIsometric.tsx",
        lineNumber: 282,
        columnNumber: 5
    }, this);
}
_c4 = Cloud;
function LandPriceIsometric() {
    _s1();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("zoom");
    // Sélection fixée au clic (desktop) ou au tap (mobile) — pas de survol
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Apparition à la découverte de la zone (une seule fois)
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [revealed, setRevealed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [reduceMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "LandPriceIsometric.useState": ()=>("TURBOPACK compile-time value", "object") !== "undefined" && (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false)
    }["LandPriceIsometric.useState"]);
    // Visite guidée: un "faux survol" parcourt les parcelles jusqu'à la
    // première interaction réelle du lecteur.
    const [hintId, setHintId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [interacted, setInteracted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // 0 = zoom agricole, 1 = échelle réelle — anime toutes les hauteurs d'un geste
    const mix = useAnimatedNumber(mode === "real" ? 1 : 0, 1200);
    // 0 → 1 linéaire, le stagger + easing par parcelle est calculé localement
    const reveal = useAnimatedNumber(revealed ? 1 : 0, reduceMotion ? 0 : 2000, linearEase);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LandPriceIsometric.useEffect": ()=>{
            const el = rootRef.current;
            if (!el || typeof IntersectionObserver === "undefined") {
                const fallback = setTimeout({
                    "LandPriceIsometric.useEffect.fallback": ()=>setRevealed(true)
                }["LandPriceIsometric.useEffect.fallback"], 0);
                return ({
                    "LandPriceIsometric.useEffect": ()=>clearTimeout(fallback)
                })["LandPriceIsometric.useEffect"];
            }
            const obs = new IntersectionObserver({
                "LandPriceIsometric.useEffect": (entries)=>{
                    if (entries.some({
                        "LandPriceIsometric.useEffect": (e)=>e.isIntersecting
                    }["LandPriceIsometric.useEffect"])) {
                        setRevealed(true);
                        obs.disconnect();
                    }
                }
            }["LandPriceIsometric.useEffect"], {
                threshold: 0.3
            });
            obs.observe(el);
            return ({
                "LandPriceIsometric.useEffect": ()=>obs.disconnect()
            })["LandPriceIsometric.useEffect"];
        }
    }["LandPriceIsometric.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LandPriceIsometric.useEffect": ()=>{
            if (!revealed || interacted) return;
            let i = 0;
            let interval;
            const start = setTimeout({
                "LandPriceIsometric.useEffect.start": ()=>{
                    setHintId(PLOTS[0].id);
                    i = 1;
                    interval = setInterval({
                        "LandPriceIsometric.useEffect.start": ()=>{
                            if (i >= PLOTS.length) {
                                setHintId(null);
                                clearInterval(interval);
                                return;
                            }
                            setHintId(PLOTS[i].id);
                            i += 1;
                        }
                    }["LandPriceIsometric.useEffect.start"], 1300);
                }
            }["LandPriceIsometric.useEffect.start"], 2400); // démarre une fois les parcelles sorties de terre
            return ({
                "LandPriceIsometric.useEffect": ()=>{
                    clearTimeout(start);
                    if (interval) clearInterval(interval);
                }
            })["LandPriceIsometric.useEffect"];
        }
    }["LandPriceIsometric.useEffect"], [
        revealed,
        interacted
    ]);
    const selectPlot = (id)=>{
        setInteracted(true);
        setHintId(null);
        setSelectedId(id);
    };
    const heightOf = (price)=>{
        const hZoom = price <= 15 ? price / 15 * H_ZOOM_MAX : H_TOWER_ZOOM;
        const hReal = Math.max(price / 540 * H_REAL_MAX, 3);
        return lerp(hZoom, hReal, mix);
    };
    const focusId = selectedId ?? hintId;
    const activeItem = PLOTS.find((p)=>p.id === focusId) ?? PLOTS[4];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: rootRef,
        className: "lpi-root w-full flex flex-col gap-4 select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes lpi-drift { from { transform: translateX(-26px); } to { transform: translateX(26px); } }
        @keyframes lpi-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.15; } }
        
        .lpi-labels, .lpi-annotation {
          transition: transform 0.3s ease;
        }
        @media (max-width: 640px) {
          .lpi-labels {
            transform: scale(1.85) translateY(12px);
          }
          .lpi-annotation {
            transform: scale(1.4) translate(-25px, -15px);
            transform-origin: 560px 140px;
          }
        }
        @media (prefers-reduced-motion: reduce) { .lpi-anim { animation: none !important; } }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/LandPriceIsometric.tsx",
                lineNumber: 382,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lpi-header flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[#8E8366]/15 pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "lpi-title font-semibold text-sm md:text-base text-[#755e45] leading-snug max-w-[560px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://www.ge.ch/droit-foncier-rural-bail-ferme-agricole/droit-foncier-rural",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "hover:underline hover:text-accent2 transition-colors duration-200",
                            children: `Prix maxima licites de vente pour les immeubles agricoles soumis à la loi fédérale sur le droit foncier rural fixés par la Commission foncière agricole pour l'année en cours:`
                        }, void 0, false, {
                            fileName: "[project]/src/components/LandPriceIsometric.tsx",
                            lineNumber: 404,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/LandPriceIsometric.tsx",
                        lineNumber: 403,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lpi-toggle flex bg-[#efe8d4] p-1 rounded-full border border-[#8E8366]/25 w-full sm:w-auto sm:max-w-xs shrink-0 shadow-inner",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setMode("zoom"),
                                className: `lpi-toggle-zoom flex-1 sm:flex-none text-center py-2.5 px-4 rounded-full text-sm font-bold transition-all cursor-pointer ${mode === "zoom" ? "bg-white text-gray-800 shadow-sm" : "text-gray-500 hover:text-gray-800"}`,
                                children: "Zoom agricole"
                            }, void 0, false, {
                                fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                lineNumber: 415,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setMode("real"),
                                className: `lpi-toggle-real flex-1 sm:flex-none text-center py-2.5 px-4 rounded-full text-sm font-bold transition-all cursor-pointer ${mode === "real" ? "bg-[#E20000] text-white shadow-sm" : "text-gray-500 hover:text-gray-800"}`,
                                children: "Échelle réelle"
                            }, void 0, false, {
                                fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                lineNumber: 423,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LandPriceIsometric.tsx",
                        lineNumber: 414,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LandPriceIsometric.tsx",
                lineNumber: 402,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lpi-scene w-full rounded-xl overflow-hidden bg-gradient-to-b from-[#edeadd] via-[#f5f1e6]/70 to-transparent pb-10 sm:pb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 860 550",
                    overflow: "visible",
                    className: "lpi-svg w-full h-auto block",
                    role: "img",
                    "aria-label": "Comparaison isométrique des prix du foncier à Genève: de 2 francs le m² de forêt à 540 francs le m² constructible",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                    id: "lpi-win-l",
                                    width: "16",
                                    height: "18",
                                    patternUnits: "userSpaceOnUse",
                                    patternTransform: "skewY(26.57)",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "4",
                                        y: "5",
                                        width: "6",
                                        height: "8",
                                        rx: "0.5",
                                        fill: "#49453a",
                                        opacity: "0.38"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                        lineNumber: 446,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                    lineNumber: 445,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                    id: "lpi-win-r",
                                    width: "16",
                                    height: "18",
                                    patternUnits: "userSpaceOnUse",
                                    patternTransform: "skewY(-26.57)",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "4",
                                        y: "5",
                                        width: "6",
                                        height: "8",
                                        rx: "0.5",
                                        fill: "#49453a",
                                        opacity: "0.3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                        lineNumber: 449,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                    lineNumber: 448,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                    id: "lpi-fade",
                                    x1: "0",
                                    y1: "0",
                                    x2: "0",
                                    y2: "1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "0%",
                                            stopColor: "#edeadd",
                                            stopOpacity: "1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                            lineNumber: 453,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "55%",
                                            stopColor: "#edeadd",
                                            stopOpacity: "0.85"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                            lineNumber: 454,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "100%",
                                            stopColor: "#edeadd",
                                            stopOpacity: "0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                            lineNumber: 455,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                    lineNumber: 452,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LandPriceIsometric.tsx",
                            lineNumber: 443,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: 92,
                            cy: 66,
                            r: 38,
                            fill: "#f4d9a1",
                            opacity: 0.25
                        }, void 0, false, {
                            fileName: "[project]/src/components/LandPriceIsometric.tsx",
                            lineNumber: 460,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: 92,
                            cy: 66,
                            r: 24,
                            fill: "#f4d9a1",
                            opacity: 0.9
                        }, void 0, false, {
                            fileName: "[project]/src/components/LandPriceIsometric.tsx",
                            lineNumber: 461,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m296 96 q5 -5 10 0 q5 -5 10 0",
                            stroke: "#978f7d",
                            strokeWidth: 1.4,
                            fill: "none",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/src/components/LandPriceIsometric.tsx",
                            lineNumber: 462,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m338 80 q4 -4 8 0 q4 -4 8 0",
                            stroke: "#978f7d",
                            strokeWidth: 1.2,
                            fill: "none",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/src/components/LandPriceIsometric.tsx",
                            lineNumber: 463,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            points: poly([
                                [
                                    430,
                                    240
                                ],
                                [
                                    918,
                                    484
                                ],
                                [
                                    430,
                                    728
                                ],
                                [
                                    -58,
                                    484
                                ]
                            ]),
                            fill: "#efe8d6",
                            opacity: 0.85
                        }, void 0, false, {
                            fileName: "[project]/src/components/LandPriceIsometric.tsx",
                            lineNumber: 466,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            points: poly([
                                [
                                    430,
                                    248
                                ],
                                [
                                    906,
                                    486
                                ],
                                [
                                    430,
                                    724
                                ],
                                [
                                    -46,
                                    486
                                ]
                            ]),
                            fill: "none",
                            stroke: "#d9cdaf",
                            strokeWidth: 1.5,
                            opacity: 0.6
                        }, void 0, false, {
                            fileName: "[project]/src/components/LandPriceIsometric.tsx",
                            lineNumber: 471,
                            columnNumber: 11
                        }, this),
                        PLOTS.map((plot, i)=>{
                            const { cx, cy, w } = LAYOUT[i];
                            const hh = w / 2;
                            // sortie de terre staggerée, avec un léger rebond
                            const grow = easeOutBack(clamp01((reveal - i * 0.13) / 0.48));
                            const h = heightOf(plot.price) * grow;
                            const cyTop = cy - h;
                            const iso = makeIso(cx, cyTop, w);
                            const isTower = plot.id === "batir";
                            const isSelected = focusId === plot.id;
                            const N = [
                                cx,
                                cyTop - hh
                            ];
                            const E = [
                                cx + w,
                                cyTop
                            ];
                            const S = [
                                cx,
                                cyTop + hh
                            ];
                            const W = [
                                cx - w,
                                cyTop
                            ];
                            const faceL = poly([
                                W,
                                S,
                                [
                                    cx,
                                    cy + hh
                                ],
                                [
                                    cx - w,
                                    cy
                                ]
                            ]);
                            const faceR = poly([
                                E,
                                S,
                                [
                                    cx,
                                    cy + hh
                                ],
                                [
                                    cx + w,
                                    cy
                                ]
                            ]);
                            const top = poly([
                                N,
                                E,
                                S,
                                W
                            ]);
                            const colors = isTower ? {
                                top: "#d3cec3",
                                left: "#837c6e",
                                right: "#a9a293"
                            } : {
                                top: ({
                                    foret: "#6d7a55",
                                    agricole: "#a3825e",
                                    speciale: "#a5a06b",
                                    viticole: "#97825b"
                                })[plot.id],
                                left: "#6e5639",
                                right: "#8a6d4b"
                            };
                            const hitTop = Math.max(cyTop - hh - 34, 0);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                onClick: ()=>selectPlot(plot.id),
                                className: `lpi-plot lpi-plot-${plot.id} cursor-pointer`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                        className: "lpi-plot-shadow",
                                        cx: cx,
                                        cy: cy + 5,
                                        rx: w + 12,
                                        ry: hh * 0.58,
                                        fill: "#4a3f2c",
                                        opacity: isSelected ? 0.16 : 0.09,
                                        style: {
                                            transition: "opacity .3s ease"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                        lineNumber: 517,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        className: "lpi-plot-body",
                                        style: {
                                            transform: `translateY(${isSelected ? -8 : 0}px)`,
                                            transition: "transform .35s cubic-bezier(.34,1.56,.64,1)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                points: faceL,
                                                fill: colors.left
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                                lineNumber: 534,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                points: faceR,
                                                fill: colors.right
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                                lineNumber: 535,
                                                columnNumber: 19
                                            }, this),
                                            isTower && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                        points: faceL,
                                                        fill: "url(#lpi-win-l)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                                        lineNumber: 538,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                        points: faceR,
                                                        fill: "url(#lpi-win-r)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                                        lineNumber: 539,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                points: top,
                                                fill: colors.top
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                                lineNumber: 542,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: poly([
                                                    W,
                                                    N,
                                                    E
                                                ]),
                                                fill: "none",
                                                stroke: "#ffffff",
                                                strokeWidth: 1.2,
                                                opacity: isTower ? 0.55 : 0.35
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                                lineNumber: 543,
                                                columnNumber: 19
                                            }, this),
                                            !isTower && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                pointerEvents: "none",
                                                children: [
                                                    plot.id === "foret" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Trees, {
                                                        iso: iso,
                                                        k: 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                                        lineNumber: 554,
                                                        columnNumber: 47
                                                    }, this),
                                                    plot.id === "agricole" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Furrows, {
                                                        iso: iso,
                                                        k: 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                                        lineNumber: 555,
                                                        columnNumber: 50
                                                    }, this),
                                                    plot.id === "speciale" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Greenhouse, {
                                                        iso: iso,
                                                        k: 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                                        lineNumber: 556,
                                                        columnNumber: 50
                                                    }, this),
                                                    plot.id === "viticole" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Vines, {
                                                        iso: iso,
                                                        k: 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                                        lineNumber: 557,
                                                        columnNumber: 50
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                                lineNumber: 553,
                                                columnNumber: 21
                                            }, this),
                                            isTower && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                pointerEvents: "none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                        points: poly([
                                                            [
                                                                cx,
                                                                cyTop - hh * 0.72
                                                            ],
                                                            [
                                                                cx + w * 0.72,
                                                                cyTop
                                                            ],
                                                            [
                                                                cx,
                                                                cyTop + hh * 0.72
                                                            ],
                                                            [
                                                                cx - w * 0.72,
                                                                cyTop
                                                            ]
                                                        ]),
                                                        fill: "none",
                                                        stroke: "#b6afa1",
                                                        strokeWidth: 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                                        lineNumber: 564,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: N[0],
                                                        y1: N[1],
                                                        x2: N[0],
                                                        y2: N[1] - 14,
                                                        stroke: "#6a6458",
                                                        strokeWidth: 1.5
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                                        lineNumber: 569,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: N[0],
                                                        cy: N[1] - 17,
                                                        r: 3.2,
                                                        fill: "#E20000",
                                                        className: "lpi-anim",
                                                        style: {
                                                            animation: "lpi-blink 1.8s ease-in-out infinite"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                                        lineNumber: 570,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                        opacity: mix,
                                                        stroke: "#E20000",
                                                        strokeWidth: 2.2,
                                                        strokeLinecap: "round",
                                                        fill: "none",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: cx - 14,
                                                                y1: cyTop + 2,
                                                                x2: cx - 14,
                                                                y2: cyTop - 46
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                                                lineNumber: 577,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: cx - 46,
                                                                y1: cyTop - 46,
                                                                x2: cx + 40,
                                                                y2: cyTop - 46
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                                                lineNumber: 578,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: cx - 14,
                                                                y1: cyTop - 58,
                                                                x2: cx - 46,
                                                                y2: cyTop - 46,
                                                                strokeWidth: 1.2
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                                                lineNumber: 579,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: cx - 14,
                                                                y1: cyTop - 58,
                                                                x2: cx + 40,
                                                                y2: cyTop - 46,
                                                                strokeWidth: 1.2
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                                                lineNumber: 580,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: cx - 14,
                                                                y1: cyTop - 58,
                                                                x2: cx - 14,
                                                                y2: cyTop - 46,
                                                                strokeWidth: 1.2
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                                                lineNumber: 581,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: cx + 30,
                                                                y1: cyTop - 46,
                                                                x2: cx + 30,
                                                                y2: cyTop - 30,
                                                                strokeWidth: 1.2
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                                                lineNumber: 582,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                x: cx + 26,
                                                                y: cyTop - 30,
                                                                width: 8,
                                                                height: 6,
                                                                fill: "#E20000",
                                                                stroke: "none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                                                lineNumber: 583,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                                        lineNumber: 576,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                                lineNumber: 562,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                        lineNumber: 527,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        className: "lpi-labels",
                                        style: {
                                            transformOrigin: `${cx}px 484px`
                                        },
                                        children: [
                                            (()=>{
                                                const bw = plot.priceLabel.length * 9.5 + 24;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            className: "lpi-price-badge",
                                                            x: cx - bw / 2,
                                                            y: 484,
                                                            width: bw,
                                                            height: 26,
                                                            rx: 13,
                                                            fill: isSelected ? "#E20000" : "#fbf7ec",
                                                            stroke: "#8E8366",
                                                            strokeOpacity: 0.35,
                                                            strokeWidth: 1,
                                                            style: {
                                                                transition: "fill .25s ease"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                                            lineNumber: 595,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                            className: "lpi-price-text",
                                                            x: cx,
                                                            y: 502,
                                                            textAnchor: "middle",
                                                            fontSize: 15.5,
                                                            fontWeight: 700,
                                                            fill: isSelected ? "#ffffff" : "#473b2b",
                                                            style: {
                                                                fontFamily: "var(--font-mono)",
                                                                transition: "fill .25s ease"
                                                            },
                                                            children: plot.priceLabel
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                                            lineNumber: 602,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true);
                                            })(),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                className: "lpi-plot-label",
                                                x: cx,
                                                y: 526,
                                                textAnchor: "middle",
                                                fontSize: 12.5,
                                                fontWeight: 500,
                                                fill: isSelected ? "#1f2937" : "#6b7280",
                                                style: {
                                                    transition: "fill .25s ease"
                                                },
                                                children: plot.shortLabel.map((line, li)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tspan", {
                                                        x: cx,
                                                        dy: li === 0 ? 0 : 13,
                                                        children: line
                                                    }, li, false, {
                                                        fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                                        lineNumber: 622,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                                lineNumber: 614,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                        lineNumber: 590,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        className: "lpi-hit",
                                        x: cx - w - 10,
                                        y: hitTop,
                                        width: 2 * w + 20,
                                        height: 536 - hitTop,
                                        fill: "transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                        lineNumber: 628,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, plot.id, true, {
                                fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                lineNumber: 511,
                                columnNumber: 15
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Cloud, {
                            x: 646,
                            y: 96,
                            s: 1.15,
                            dur: 13
                        }, void 0, false, {
                            fileName: "[project]/src/components/LandPriceIsometric.tsx",
                            lineNumber: 634,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Cloud, {
                            x: 760,
                            y: 158,
                            s: 0.85,
                            dur: 10,
                            delay: 1.2
                        }, void 0, false, {
                            fileName: "[project]/src/components/LandPriceIsometric.tsx",
                            lineNumber: 635,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Cloud, {
                            x: 186,
                            y: 64,
                            s: 0.75,
                            dur: 15,
                            delay: 0.6
                        }, void 0, false, {
                            fileName: "[project]/src/components/LandPriceIsometric.tsx",
                            lineNumber: 636,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            className: "lpi-veil",
                            opacity: 1 - mix,
                            pointerEvents: "none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: 596,
                                    y: 0,
                                    width: 216,
                                    height: 132,
                                    fill: "url(#lpi-fade)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                    lineNumber: 640,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: 552,
                                    y: 14,
                                    width: 296,
                                    height: 42,
                                    rx: 21,
                                    fill: "#ffffff",
                                    opacity: 0.92
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                    lineNumber: 641,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: 700,
                                    y: 41,
                                    textAnchor: "middle",
                                    fontSize: 16.5,
                                    fontWeight: 700,
                                    fill: "#E20000",
                                    style: {
                                        fontFamily: "var(--font-mono)"
                                    },
                                    children: `Fr. 540.-/m² — hors échelle`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                    lineNumber: 642,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LandPriceIsometric.tsx",
                            lineNumber: 639,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            className: "lpi-annotation",
                            opacity: mix,
                            pointerEvents: "none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: 566,
                                    y1: 148,
                                    x2: 646,
                                    y2: 158,
                                    stroke: "#E20000",
                                    strokeWidth: 1.5
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                    lineNumber: 652,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: 560,
                                    y: 120,
                                    textAnchor: "end",
                                    fontSize: 36,
                                    fontWeight: 800,
                                    fill: "#E20000",
                                    style: {
                                        fontFamily: "var(--font-mono)"
                                    },
                                    children: "× 67,5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                    lineNumber: 653,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: 560,
                                    y: 140,
                                    textAnchor: "end",
                                    fontSize: 14,
                                    fontWeight: 600,
                                    fill: "#7a4a3a",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tspan", {
                                            x: 560,
                                            dy: 0,
                                            children: "1 m² à bâtir vaut"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                            lineNumber: 658,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tspan", {
                                            x: 560,
                                            dy: 16,
                                            children: "67,5 m² de terre agricole"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                            lineNumber: 659,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                    lineNumber: 657,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LandPriceIsometric.tsx",
                            lineNumber: 651,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LandPriceIsometric.tsx",
                    lineNumber: 436,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/LandPriceIsometric.tsx",
                lineNumber: 435,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lpi-legend bg-white/50 border border-[#8E8366]/15 rounded-xl p-4 transition-all duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lpi-legend-header flex items-center gap-2 mb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `lpi-legend-swatch w-3 h-3 rounded-full shrink-0 ${activeItem.swatch}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                lineNumber: 668,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                className: "lpi-legend-title font-bold text-xs md:text-base text-gray-800 tracking-tight",
                                children: activeItem.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                lineNumber: 669,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "lpi-legend-price font-mono text-xs md:text-sm text-gray-500 font-bold ml-auto shrink-0 whitespace-nowrap",
                                children: [
                                    "Fr. ",
                                    activeItem.priceLabel,
                                    " / m²"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/LandPriceIsometric.tsx",
                                lineNumber: 672,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LandPriceIsometric.tsx",
                        lineNumber: 667,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "lpi-legend-desc text-xs md:text-sm text-gray-600 font-medium leading-relaxed",
                        children: activeItem.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/LandPriceIsometric.tsx",
                        lineNumber: 676,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "lpi-legend-detail text-[10px] md:text-xs text-gray-400 font-mono mt-1",
                        children: activeItem.detail
                    }, void 0, false, {
                        fileName: "[project]/src/components/LandPriceIsometric.tsx",
                        lineNumber: 679,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LandPriceIsometric.tsx",
                lineNumber: 666,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "lpi-footnote text-[10px] text-gray-400 font-mono text-right -mt-2",
                children: "Prix maxima licites 2025 · Commission foncière agricole, Genève"
            }, void 0, false, {
                fileName: "[project]/src/components/LandPriceIsometric.tsx",
                lineNumber: 684,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/LandPriceIsometric.tsx",
        lineNumber: 381,
        columnNumber: 5
    }, this);
}
_s1(LandPriceIsometric, "9a1/jbDKTWhly3ludIfRTyxvJ94=", false, function() {
    return [
        useAnimatedNumber,
        useAnimatedNumber
    ];
});
_c5 = LandPriceIsometric;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Trees");
__turbopack_context__.k.register(_c1, "Furrows");
__turbopack_context__.k.register(_c2, "Greenhouse");
__turbopack_context__.k.register(_c3, "Vines");
__turbopack_context__.k.register(_c4, "Cloud");
__turbopack_context__.k.register(_c5, "LandPriceIsometric");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_d0646a89._.js.map