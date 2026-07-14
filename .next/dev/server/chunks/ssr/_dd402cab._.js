module.exports = [
"[project]/src/config/variables.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ---------------------------------------------------------------------------
// 📝 CONFIGURATION DE LA STORY
// C'est le SEUL fichier à modifier pour configurer une nouvelle story.
// ---------------------------------------------------------------------------
__turbopack_context__.s([
    "ABSOLUTE_SOCIAL_URL",
    ()=>ABSOLUTE_SOCIAL_URL,
    "ABSOLUTE_SOCIAL_URL_4X3",
    ()=>ABSOLUTE_SOCIAL_URL_4X3,
    "ABSOLUTE_SOCIAL_URL_SQUARE",
    ()=>ABSOLUTE_SOCIAL_URL_SQUARE,
    "STORY",
    ()=>STORY
]);
const STORY = {
    // Infos générales
    title: "Naïka, le nouveau joyau de la pop cosmopolite",
    metaTitle: "Montreux Jazz: dans les coulisses de Naïka, joyau de la pop cosmopolite",
    ogTitle: "Naïka, le nouveau joyau de la pop cosmopolite",
    titleDisplay: "Naïka,<br>le nouveau joyau<br>de la pop cosmopolite",
    // Hero "affiche" de l'ImmersiveStory: le nom porte l'affiche, la tagline le sous-titre.
    // À garder cohérent avec `title`. `titleDisplay` reste la version d'un seul bloc,
    // utilisée par les héros du catalogue (Hero, Hero2).
    heroName: "Naïka",
    heroTagline: "le nouveau joyau<br>de la pop cosmopolite",
    description: "Pendant près de neuf heures, L'illustré a suivi Naïka dans les coulisses de sa première au Montreux Jazz Festival. Rencontre intime avec la chanteuse franco-haïtienne aux millions d'écoutes.",
    author: "Antoine Hürlimann",
    publicationDate: "2026-07-09",
    publicationDisplayDate: "9 juillet 2026",
    // URLs
    // L'URL finale où sera hébergé le projet (Important pour le SEO Facebook/Twitter)
    url: "https://storytelling.blick.ch/fr/2026/naika-montreux-jazz-festival/",
    // Nom de l'image dans le dossier 'public' (ex: "social.jpg")
    socialImageFilename: "images/social.jpg",
    // Recadrages additionnels de la même photo (mêmes sujet/cadrage), pour le
    // tableau "image" du JSON-LD: Google recommande plusieurs ratios (16:9/1.91:1,
    // 4:3, 1:1) pour maximiser les formats de carte sur Discover.
    socialImageFilename4x3: "images/social-4x3.jpg",
    socialImageFilenameSquare: "images/social-1x1.jpg",
    // Crédits de fin d'article
    credits: [
        {
            name: "Blick Suisse romande",
            produces: "Production",
            inCredits: true
        },
        {
            name: "Antoine Hürlimann",
            isAuthor: true,
            inCredits: true,
            job: "Journaliste",
            produces: "Texte",
            img: null
        },
        {
            name: "Valentin Flauraud",
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
// Helpers calculés automatiquement (ne pas toucher)
const STORY_BASE_URL = STORY.url.replace(/\/$/, "");
const ABSOLUTE_SOCIAL_URL = `${STORY_BASE_URL}/${STORY.socialImageFilename}`;
const ABSOLUTE_SOCIAL_URL_4X3 = `${STORY_BASE_URL}/${STORY.socialImageFilename4x3}`;
const ABSOLUTE_SOCIAL_URL_SQUARE = `${STORY_BASE_URL}/${STORY.socialImageFilenameSquare}`;
}),
"[project]/src/components/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/variables.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function BlickLogo({ color = "black" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "h-7 w-auto",
        xmlns: "http://www.w3.org/2000/svg",
        width: "100",
        height: "36.463",
        viewBox: "0 0 100 36.463",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
function Header({ theme = "light" }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const lastScrollYRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const isOpenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [shareUrl, setShareUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STORY"].url);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    const handleShare = (platform)=>{
        const url = encodeURIComponent(shareUrl);
        const text = encodeURIComponent(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STORY"].title);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        isOpenRef.current = isOpen;
    }, [
        isOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
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
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 bg-black/40 z-30 transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`,
                onClick: ()=>setIsOpen(false),
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-4 md:px-6 z-40 transition-transform duration-300 ease-in-out ${dark ? "bg-black/40 backdrop-blur-md border-b border-white/10" : "bg-white border-b border-gray-100"} ${isVisible ? "translate-y-0" : "-translate-y-full"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://www.blick.ch/fr/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex items-center space-x-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BlickLogo, {
                            color: dark ? "#ffffff" : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STORY"].logoColor || "black"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsOpen(true),
                        className: `w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition-colors ${dark ? "bg-white/10 hover:bg-white/20" : "bg-gray-100 hover:bg-gray-200"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: icons.share,
                            alt: "Partager",
                            className: "w-8 h-8"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "share",
                className: `fixed top-0 right-0 h-screen w-84 z-50 shadow-2xl transition-transform duration-300 ease-in-out ${dark ? "bg-neutral-900/90 backdrop-blur-xl" : "bg-white"} ${isOpen ? "translate-x-0" : "translate-x-full"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-full h-16 flex items-center justify-between px-6 border-b ${dark ? "border-white/10" : "border-gray-100"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-xs font-bold tracking-widest uppercase ${dark ? "text-white" : "text-black"}`,
                                children: "Partager"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsOpen(false),
                                className: `w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition-colors ${dark ? "bg-white/10 hover:bg-white/20" : "bg-gray-100 hover:bg-gray-200"}`,
                                "aria-label": "Close",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: icons.cross,
                                    alt: "Fermer",
                                    className: "w-8 h-8"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        ].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleShare(item.key),
                                className: `flex cursor-pointer items-center gap-3 py-6 px-6 border-b text-left group transition-colors w-full ${dark ? "border-white/10 hover:bg-white/5" : "border-gray-100 hover:bg-gray-50"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `w-9 flex justify-center ${dark ? "text-white" : "text-gray-800"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: item.icon,
                                            alt: item.name,
                                            className: "w-9 h-9 opacity-80 group-hover:opacity-100 transition-opacity"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 182,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: dark ? "text-white/85 group-hover:text-white" : "text-gray-800 group-hover:text-black",
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 184,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/components/ImmersiveStory.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const StoryContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
const bgKey = (bg)=>`${bg.src}|${bg.position ?? ""}|${bg.positionMobile ?? ""}`;
function ImmersiveStory({ children, className = "", scrim = "light" }) {
    const [backgrounds, setBackgrounds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeKey, setActiveKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mountedKeys, setMountedKeys] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new Set());
    const sectionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const backgroundsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const activeKeyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Active une image: cross-fade + montage progressif (image courante,
    // précédente et suivante — la suivante est ainsi préchargée à l'avance)
    const activate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((key)=>{
        if (activeKeyRef.current === key) return;
        activeKeyRef.current = key;
        setActiveKey(key);
        setMountedKeys((prev)=>{
            const next = new Set(prev);
            next.add(key);
            const list = backgroundsRef.current;
            const idx = list.findIndex((b)=>bgKey(b) === key);
            if (idx >= 0 && list[idx + 1]) next.add(bgKey(list[idx + 1]));
            if (idx > 0) next.add(bgKey(list[idx - 1]));
            return next.size === prev.size ? prev : next;
        });
    }, []);
    // Détection déterministe: à chaque scroll, on identifie LA section dont le
    // rectangle couvre la ligne horizontale médiane du viewport, et on active
    // son image. Les sections s'empilent sans espace dans le flux du document,
    // donc exactement une section couvre toujours cette ligne (sauf tout en
    // haut/bas de page, géré par le repli "plus proche"). Remplace l'ancien
    // IntersectionObserver à bande de 10%: avec plusieurs entrées simultanées
    // (scroll rapide, allers-retours), l'ordre de traitement des entries ne
    // garantissait pas de retenir la section réellement au centre — d'où des
    // désynchronisations occasionnelles texte / image observées en usage.
    const recomputeActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const centerY = undefined;
        let hitKey;
        let closestKey;
        let closestDist;
        const el = undefined, cfg = undefined;
        const next = undefined;
    }, [
        activate
    ]);
    const register = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((el, bg)=>{
        sectionsRef.current.set(el, bg);
        // Liste ordonnée (ordre du document) des images uniques
        const key = bgKey(bg);
        if (!backgroundsRef.current.some((b)=>bgKey(b) === key)) {
            backgroundsRef.current = [
                ...backgroundsRef.current,
                bg
            ];
            setBackgrounds(backgroundsRef.current);
        }
        // La première section enregistrée devient le fond initial
        if (activeKeyRef.current === null) {
            activate(key);
        }
        recomputeActive();
        return ()=>{
            sectionsRef.current.delete(el);
        };
    }, [
        activate,
        recomputeActive
    ]);
    // Écoute unique scroll/resize, cadencée par requestAnimationFrame pour ne
    // recalculer qu'une fois par frame peu importe le nombre d'événements.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        let ticking;
        const onScrollOrResize = undefined;
    }, [
        recomputeActive
    ]);
    // Le voile "quart de cercle" n'existe que pour l'ouverture: elle seule occupe
    // exactement un écran (jamais de défilement interne), ce qui lui permet de
    // rester ancrée au même coin sans jamais se désynchroniser du texte.
    const isHeroActive = backgrounds.length > 0 && activeKey === bgKey(backgrounds[0]);
    // Le scrim ambiant assombrissait aussi le haut du viewport. On retire cette
    // partie haute (le bas reste, il sert la lisibilité) — mais seulement hors
    // hero: l'ouverture garde son dégradé d'origine, inchangé.
    const scrimClass = scrim === "none" ? null : scrim === "medium" ? isHeroActive ? "bg-gradient-to-b from-black/50 via-black/25 to-black/60" : "bg-gradient-to-b from-transparent via-black/25 to-black/60" : isHeroActive ? "bg-gradient-to-b from-black/40 via-black/10 to-black/50" : "bg-gradient-to-b from-transparent via-black/10 to-black/50";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StoryContext.Provider, {
        value: register,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-0 overflow-hidden bg-black",
                "aria-hidden": "true",
                children: [
                    backgrounds.map((bg)=>{
                        const key = bgKey(bg);
                        if (!mountedKeys.has(key)) return null;
                        const isActive = key === activeKey;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: bg.src,
                            alt: "",
                            draggable: false,
                            decoding: "async",
                            className: `story-bg-img absolute inset-0 h-full w-full object-cover transition-opacity duration-[1000ms] ease-in-out ${isActive ? "opacity-100" : "opacity-0"}`,
                            style: {
                                "--bg-pos": bg.position ?? "50% 50%",
                                "--bg-pos-m": bg.positionMobile ?? bg.position ?? "50% 50%"
                            }
                        }, key, false, {
                            fileName: "[project]/src/components/ImmersiveStory.tsx",
                            lineNumber: 188,
                            columnNumber: 13
                        }, this);
                    }),
                    scrimClass && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute inset-0 ${scrimClass}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/ImmersiveStory.tsx",
                        lineNumber: 206,
                        columnNumber: 24
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `story-hero-veil absolute inset-0 transition-opacity duration-[1000ms] ease-in-out ${isHeroActive ? "opacity-100" : "opacity-0"}`,
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ImmersiveStory.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ImmersiveStory.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative z-10 ${className}`,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ImmersiveStory.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ImmersiveStory.tsx",
        lineNumber: 180,
        columnNumber: 5
    }, this);
}
const HEIGHT_CLASSES = {
    short: "min-h-[100svh]",
    normal: "min-h-[150vh]",
    tall: "min-h-[200vh]"
};
const V_ALIGN_CLASSES = {
    center: "justify-center",
    bottom: "justify-end"
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
function StorySection({ image, imagePosition, imagePositionMobile, align = "center", height = "normal", width = "medium", textAlign, vAlign = "center", id, className = "", contentClassName = "", children }) {
    const register = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(StoryContext);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!register || !ref.current) return;
        return register(ref.current, {
            src: image,
            position: imagePosition,
            positionMobile: imagePositionMobile
        });
    }, [
        register,
        image,
        imagePosition,
        imagePositionMobile
    ]);
    const resolvedTextAlign = textAlign ?? (align === "center" ? "center" : "left");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        ref: ref,
        className: `relative flex flex-col px-5 py-24 md:px-[7%] ${V_ALIGN_CLASSES[vAlign]} ${HEIGHT_CLASSES[height]} ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `relative flex w-full max-w-screen-2xl mx-auto justify-center ${ALIGN_CLASSES[align]}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-full text-white ${WIDTH_CLASSES[width]} story-text-shadow text-left md:text-${resolvedTextAlign} ${contentClassName}`,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ImmersiveStory.tsx",
                lineNumber: 308,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ImmersiveStory.tsx",
            lineNumber: 307,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ImmersiveStory.tsx",
        lineNumber: 302,
        columnNumber: 5
    }, this);
}
function StoryKicker({ children, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `story-kicker-group ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "story-kicker",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ImmersiveStory.tsx",
                lineNumber: 330,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "story-kicker__rule",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/ImmersiveStory.tsx",
                lineNumber: 331,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ImmersiveStory.tsx",
        lineNumber: 329,
        columnNumber: 5
    }, this);
}
function StoryHeading({ children, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
        className: `story-heading ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ImmersiveStory.tsx",
        lineNumber: 338,
        columnNumber: 10
    }, this);
}
function ScrollCue({ label = "Faites défiler" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "story-cue",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ImmersiveStory.tsx",
                lineNumber: 348,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "story-cue__arrow",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.75",
                viewBox: "0 0 24 24",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M12 5v14M19 12l-7 7-7-7"
                }, void 0, false, {
                    fileName: "[project]/src/components/ImmersiveStory.tsx",
                    lineNumber: 357,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ImmersiveStory.tsx",
                lineNumber: 349,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ImmersiveStory.tsx",
        lineNumber: 347,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=_dd402cab._.js.map