module.exports = [
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/config/variables.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    //
    // 5 champs "titre" ci-dessous, chacun avec un rôle et un usage précis:
    //
    // - title: le titre "de référence". Sert de repli (fallback) partout où
    //   metaTitle/ogTitle ne sont pas définis, et c'est LUI (jamais metaTitle)
    //   qu'utilisent le JSON-LD (headline), le partage par e-mail/Twitter du
    //   Header, et l'alt de l'image sociale. À garder toujours renseigné.
    // - metaTitle: surcharge SEO. Affiché dans l'onglet du navigateur (<title>)
    //   et le résultat Google — peut différer de `title` pour placer des
    //   mots-clés (ex: "Montreux Jazz" ici) sans alourdir le titre éditorial.
    //   Laisser vide pour retomber sur `title`.
    // - ogTitle: surcharge réseaux sociaux. Titre affiché dans la carte de
    //   partage Facebook/Twitter/LinkedIn (Open Graph + Twitter Card). Laisser
    //   vide pour retomber sur `title`.
    // - titleDisplay: UNIQUEMENT pour les héros du catalogue (composants
    //   Hero/Hero2, non utilisés par cette page) — version un seul bloc avec
    //   des <br> pour forcer les retours à la ligne. Sans effet ici.
    // - heroName / heroTagline ci-dessous: ce que le hero RÉELLEMENT affiché
    //   sur cette page (ImmersiveStory) utilise.
    title: "Naïka, le nouveau joyau de la pop cosmopolite",
    metaTitle: "Naïka: interview exclusive au Montreux Jazz Festival",
    ogTitle: "Rencontre avec Naïka au Montreux Jazz Festival",
    titleDisplay: "Naïka,<br>le nouveau joyau<br>de la pop cosmopolite",
    // Hero "affiche" de l'ImmersiveStory (le vrai hero de cette page): heroName
    // porte l'affiche (gros nom en majuscules), heroTagline le sous-titre juste
    // en dessous (accepte le HTML, notamment <br>). À garder cohérent avec
    // `title` ci-dessus, mais ce sont ces deux champs-ci, pas `titleDisplay`,
    // qui pilotent ce que le lecteur voit à l'ouverture.
    heroName: "Naïka",
    heroTagline: "le nouveau joyau<br>de la pop cosmopolite",
    description: "Neuf heures en coulisses avec Naïka avant sa première au Montreux Jazz Festival. Rencontre avec la chanteuse franco-haïtienne aux millions d'écoutes.",
    author: "Antoine Hürlimann",
    publicationDate: "2026-07-17",
    publicationDisplayDate: "17 juillet 2026",
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
"[project]/src/components/Header.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Header = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Header() from the server but Header is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/Header.tsx <module evaluation>", "Header");
}),
"[project]/src/components/Header.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Header = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Header() from the server but Header is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/Header.tsx", "Header");
}),
"[project]/src/components/Header.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/Credits.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Credits",
    ()=>Credits
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function Credits({ items, theme = "light" }) {
    if (!items || items.length === 0) return null;
    const glass = theme === "glass";
    // Regrouper les crédits qui partagent le même label "produces"
    const groupedItems = items.reduce((acc, current)=>{
        const existing = acc.find((item)=>item.produces === current.produces);
        const person = {
            name: current.name,
            link: current.link
        };
        if (existing) {
            existing.people.push(person);
        } else {
            acc.push({
                produces: current.produces,
                people: [
                    person
                ]
            });
        }
        return acc;
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `w-full max-w-[672px] mx-auto text-sm md:text-lg leading-relaxed font-light ${glass ? "text-white/85" : "text-gray-500"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-bold",
                        children: "Un article de «L'illustré» n°29"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Credits.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/components/Credits.tsx",
                        lineNumber: 52,
                        columnNumber: 75
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/components/Credits.tsx",
                        lineNumber: 52,
                        columnNumber: 84
                    }, this),
                    "Cet article a été publié initialement dans le ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://www.illustre.ch/",
                        target: "_blank",
                        className: "underline",
                        children: "n°29 de «L'illustré»"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Credits.tsx",
                        lineNumber: 53,
                        columnNumber: 55
                    }, this),
                    ", paru en kiosque le 16 juillet 2026."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Credits.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                className: `w-full max-w-[672px] mx-auto mt-6 md:mt-14 ${glass ? "border-white/15" : "border-gray-200"}`
            }, void 0, false, {
                fileName: "[project]/src/components/Credits.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-full max-w-[672px] mx-auto mt-8 md:mt-16 text-lg p-8 ${glass ? "story-glass text-white" : "bg-gray-50"}`,
                children: groupedItems.map((group, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: idx === groupedItems.length - 1 ? "" : "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `font-bold ${glass ? "text-white" : "text-black"}`,
                                children: group.produces
                            }, void 0, false, {
                                fileName: "[project]/src/components/Credits.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            group.people.map((person, pIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: glass ? "text-white/70" : "text-gray-700",
                                    children: person.link ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: person.link,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: `underline underline-offset-2 transition-colors ${glass ? "hover:text-white" : "hover:text-accent2"}`,
                                        children: person.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Credits.tsx",
                                        lineNumber: 63,
                                        columnNumber: 19
                                    }, this) : person.name
                                }, pIdx, false, {
                                    fileName: "[project]/src/components/Credits.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, idx, true, {
                        fileName: "[project]/src/components/Credits.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Credits.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/components/ReadingProgress.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "ReadingProgress",
    ()=>ReadingProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ReadingProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ReadingProgress() from the server but ReadingProgress is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ReadingProgress.tsx <module evaluation>", "ReadingProgress");
}),
"[project]/src/components/ReadingProgress.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "ReadingProgress",
    ()=>ReadingProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ReadingProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ReadingProgress() from the server but ReadingProgress is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ReadingProgress.tsx", "ReadingProgress");
}),
"[project]/src/components/ReadingProgress.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReadingProgress$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ReadingProgress.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReadingProgress$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/ReadingProgress.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReadingProgress$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/VerticalVideo.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "VerticalVideo",
    ()=>VerticalVideo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const VerticalVideo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call VerticalVideo() from the server but VerticalVideo is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/VerticalVideo.tsx <module evaluation>", "VerticalVideo");
}),
"[project]/src/components/VerticalVideo.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "VerticalVideo",
    ()=>VerticalVideo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const VerticalVideo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call VerticalVideo() from the server but VerticalVideo is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/VerticalVideo.tsx", "VerticalVideo");
}),
"[project]/src/components/VerticalVideo.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VerticalVideo$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/VerticalVideo.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VerticalVideo$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/VerticalVideo.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VerticalVideo$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/ImmersiveStory.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ImmersiveStory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ImmersiveStory() from the server but ImmersiveStory is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ImmersiveStory.tsx <module evaluation>", "ImmersiveStory");
const ScrollCue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ScrollCue() from the server but ScrollCue is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ImmersiveStory.tsx <module evaluation>", "ScrollCue");
const StoryHeading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call StoryHeading() from the server but StoryHeading is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ImmersiveStory.tsx <module evaluation>", "StoryHeading");
const StoryKicker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call StoryKicker() from the server but StoryKicker is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ImmersiveStory.tsx <module evaluation>", "StoryKicker");
const StorySection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call StorySection() from the server but StorySection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ImmersiveStory.tsx <module evaluation>", "StorySection");
}),
"[project]/src/components/ImmersiveStory.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ImmersiveStory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ImmersiveStory() from the server but ImmersiveStory is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ImmersiveStory.tsx", "ImmersiveStory");
const ScrollCue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ScrollCue() from the server but ScrollCue is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ImmersiveStory.tsx", "ScrollCue");
const StoryHeading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call StoryHeading() from the server but StoryHeading is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ImmersiveStory.tsx", "StoryHeading");
const StoryKicker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call StoryKicker() from the server but StoryKicker is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ImmersiveStory.tsx", "StoryKicker");
const StorySection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call StorySection() from the server but StorySection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ImmersiveStory.tsx", "StorySection");
}),
"[project]/src/components/ImmersiveStory.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImmersiveStory$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ImmersiveStory.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImmersiveStory$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/ImmersiveStory.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImmersiveStory$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/content.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Content,
    "metadata",
    ()=>metadata,
    "viewport",
    ()=>viewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/variables.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Credits$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Credits.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReadingProgress$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ReadingProgress.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VerticalVideo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/VerticalVideo.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImmersiveStory$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ImmersiveStory.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const viewport = {
    width: "device-width",
    initialScale: 1,
    colorScheme: "light"
};
const metadata = {
    title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STORY"].metaTitle || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STORY"].title,
    description: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STORY"].description,
    authors: [
        {
            name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STORY"].author
        }
    ],
    openGraph: {
        title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STORY"].ogTitle || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STORY"].title,
        siteName: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STORY"].siteName,
        url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STORY"].url,
        description: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STORY"].description,
        type: "article",
        images: [
            {
                url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ABSOLUTE_SOCIAL_URL"],
                width: 1200,
                height: 630,
                alt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STORY"].title
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        site: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STORY"].twitterHandle,
        title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STORY"].ogTitle || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STORY"].title,
        description: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STORY"].description,
        images: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ABSOLUTE_SOCIAL_URL"]
        ]
    },
    alternates: {
        canonical: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STORY"].url
    },
    icons: {
        icon: [
            {
                url: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STORY"].faviconBaseUrl}/favicon-48x48.png`,
                sizes: '48x48',
                type: 'image/png'
            }
        ],
        shortcut: [
            `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STORY"].faviconBaseUrl}/favicon.ico`
        ],
        apple: [
            {
                url: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STORY"].faviconBaseUrl}/apple-touch-icon.png`,
                sizes: '180x180'
            }
        ],
        other: [
            {
                rel: 'mask-icon',
                url: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STORY"].faviconBaseUrl}/safari-pinned-tab.svg`,
                color: '#5bbad5'
            }
        ]
    },
    other: {
        "msapplication-TileColor": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STORY"].themeColor,
        "image_src": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ABSOLUTE_SOCIAL_URL"]
    }
};
// Classe commune des paragraphes de la story
const P = "text-base md:text-lg leading-relaxed font-light mb-6 last:mb-0";
function Content() {
    // Construction du JSON-LD pour Schema.org
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STORY"].title,
        "image": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ABSOLUTE_SOCIAL_URL"],
        "author": {
            "@type": "Person",
            "name": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STORY"].author
        },
        "publisher": {
            "@type": "Organization",
            "name": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STORY"].siteName,
            "logo": {
                "@type": "ImageObject",
                "url": `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STORY"].faviconBaseUrl}/favicon-48x48.png`
            }
        },
        "datePublished": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STORY"].publicationDate,
        "description": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STORY"].description
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "relative min-h-screen bg-black text-white -mt-16 2xl:-mt-24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify(jsonLd)
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/content.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Header"], {
                    theme: "dark"
                }, void 0, false, {
                    fileName: "[project]/src/app/content.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReadingProgress$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReadingProgress"], {}, void 0, false, {
                    fileName: "[project]/src/app/content.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImmersiveStory$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ImmersiveStory"], {
                    scrim: "none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImmersiveStory$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StorySection"], {
                            id: "hero",
                            image: "images/naika/_F2_1047.webp",
                            imagePosition: "center 38%",
                            imagePositionMobile: "68% 35%",
                            align: "left",
                            height: "short",
                            width: "wide",
                            vAlign: "bottom",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "story-hero__title",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "story-hero__name-mask",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "story-hero__name",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STORY"].heroName
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/content.tsx",
                                                lineNumber: 137,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/content.tsx",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "story-hero__tagline",
                                            dangerouslySetInnerHTML: {
                                                __html: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STORY"].heroTagline
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/content.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/content.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "story-hero__rule",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/content.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "story-hero__lede",
                                    children: "Pendant près de neuf heures, Blick a suivi Naïka dans les coulisses de sa première au Montreux Jazz Festival. Derrière les paillettes, le portrait d’une chanteuse en quête d’un chez-soi. Rencontre intime avec la jeune artiste franco-haïtienne aux millions d’écoutes."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/content.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "story-hero__footer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "story-hero__byline",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "story-hero__flag",
                                                    children: "Rencontre exclusive"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/content.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "story-hero__sep",
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/content.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STORY"].author,
                                                        " · ",
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STORY"].publicationDisplayDate
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/content.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/content.tsx",
                                            lineNumber: 152,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImmersiveStory$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ScrollCue"], {}, void 0, false, {
                                            fileName: "[project]/src/app/content.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/content.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/content.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImmersiveStory$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StorySection"], {
                            image: "images/naika/_F3_5615.webp",
                            imagePosition: "70% 60%",
                            imagePositionMobile: "60% 55%",
                            align: "left",
                            veil: "left",
                            veilStr: 1,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: P,
                                children: "Le crépuscule enveloppe Montreux. Derrière un rideau noir, un autre soleil s’apprête à se lever. Des cris de joie s’échappent de la loge voisine. Les musiciens de la chanteuse brésilienne Liniker vivent les dernières minutes d’Argentine-Egypte avec la passion du football. A quelques mètres de là, un tout autre rituel se joue."
                            }, void 0, false, {
                                fileName: "[project]/src/app/content.tsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/content.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImmersiveStory$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StorySection"], {
                            image: "images/naika/_F2_1040.webp",
                            imagePosition: "left 35%",
                            imagePositionMobile: "56% 35%",
                            align: "left",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: P,
                                children: "Naïka ferme les yeux. Les voix s’éteignent d’elles-mêmes. Une brève prière avec les siens. Lorsqu’elle les rouvre, son visage s’éclaire. La native de Miami aux lèvres carmin accroche nos doigts dans un check furtif avant de s’éloigner vers la scène, d’où la clameur se fait de plus en plus forte."
                            }, void 0, false, {
                                fileName: "[project]/src/app/content.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/content.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImmersiveStory$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StorySection"], {
                            image: "images/naika/_F2_0021.webp",
                            imagePosition: "left 30%",
                            imagePositionMobile: "55% 30%",
                            align: "left",
                            veil: "left",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: P,
                                children: "Juste avant de se présenter à ses fans, deux membres de son équipe ajustent encore sa tenue jaune. Une main défroisse un pan de jupe. Une autre replace délicatement une manchette. Ça y est! Le long manteau tombe de ses épaules. Son bustier constellé de strass s’embrase sous les projecteurs. De longues bandes de tissu dansent autour de jambes interminables tandis que d’impressionnantes bottes frangées remontent jusqu’aux cuisses."
                            }, void 0, false, {
                                fileName: "[project]/src/app/content.tsx",
                                lineNumber: 197,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/content.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImmersiveStory$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StorySection"], {
                            id: "coulisses",
                            image: "images/naika/_F3_4504.webp",
                            imagePosition: "left bottom",
                            imagePositionMobile: "46% bottom",
                            align: "left",
                            width: "wide",
                            veil: "left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImmersiveStory$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StoryHeading"], {
                                    children: "Dans les coulisses d’une star"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/content.tsx",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: P,
                                    children: "Plus tôt dans l’après-midi, à 15 h 20, elle foulait cette scène en jean bleu, blouse blanche quasi transparente, une longue tresse dans le dos et des tongs aux pieds. Le Montreux Jazz Lab était alors vide. Les musiciens répétaient. Seuls les échos du soundcheck répondaient au clapotis du Léman. Pendant près de neuf heures, ce mardi 7 juillet, du premier accord jusqu’à son retour en loge après le concert, L’illustré a suivi en exclusivité Naïka dans les coulisses de sa première au Montreux Jazz Festival."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/content.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/content.tsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImmersiveStory$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StorySection"], {
                            image: "images/naika/_F3_4543.webp",
                            imagePosition: "center 35%",
                            imagePositionMobile: "65% 35%",
                            align: "left",
                            veil: "left",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: P,
                                children: "A 31 ans, Naïka est un joyau de la pop cosmopolite. Plus de 3,3 millions d’auditrices et d’auditeurs mensuels sur Spotify et 1,3 million de followers sur Instagram. Un premier album, Eclesia, et un tube, One Track Mind, hymne féministe aux accents caribéens devenu viral qui lui a offert une renommée internationale. En français, en anglais comme en créole haïtien, elle chante une identité à l’image de son parcours: multiple. Bien avant de chercher un chez-soi, Naïka a grandi sans véritable port d’attache. Entre Paris, la Guadeloupe, le Kenya, l’Afrique du Sud et le Vanuatu, elle passe son enfance dans un perpétuel ailleurs avant de revenir à Miami à l’adolescence."
                            }, void 0, false, {
                                fileName: "[project]/src/app/content.tsx",
                                lineNumber: 228,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/content.tsx",
                            lineNumber: 221,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImmersiveStory$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StorySection"], {
                            image: "images/naika/_F3_4626.webp",
                            imagePosition: "left 35%",
                            imagePositionMobile: "53% 35%",
                            align: "left",
                            veil: "left",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: P,
                                children: "Au cœur de l’après-midi, cette célébrité mondiale déambule sur les quais comme n’importe quelle festivalière. Mais son nom la précède. «C’est Naïka...» Le murmure court d’une oreille à l’autre avant de s’évanouir. Les regards s’illuminent. Personne ne s’approche. Ni téléphone tendu. Ni autographe réclamé. Seulement cette élégante retenue dont le public suisse semble avoir le secret."
                            }, void 0, false, {
                                fileName: "[project]/src/app/content.tsx",
                                lineNumber: 240,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/content.tsx",
                            lineNumber: 233,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImmersiveStory$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StorySection"], {
                            image: "images/naika/_F3_4686.webp",
                            imagePosition: "left 35%",
                            imagePositionMobile: "62% 35%",
                            align: "left",
                            veil: "left",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: P,
                                children: "L’après-midi s’écoule au rythme des interviews. Radio et presse écrite. Blick lui fait découvrir le thé froid Migros, saveur pêche ou citron. Les deux journalistes filent ensuite lui acheter un carac «pour du réconfort après l’effort». Elle éclate de rire, remercie, puis disparaît déjà vers un autre rendez-vous. A chaque entretien, la même question ressurgit. Qui est Naïka? Pour elle, Eclesia est une manière de dévoiler les différentes facettes d’une femme qui a appris à ne plus choisir entre ses langues, ses cultures et les pays qui l’ont construite."
                            }, void 0, false, {
                                fileName: "[project]/src/app/content.tsx",
                                lineNumber: 252,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/content.tsx",
                            lineNumber: 245,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImmersiveStory$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StorySection"], {
                            image: "images/naika/_F3_6028.jpg",
                            imagePosition: "center 40%",
                            imagePositionMobile: "center 40%",
                            align: "center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VerticalVideo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VerticalVideo"], {
                                videoSrc: "https://cdn.jwplayer.com/manifests/JvMjkvQm.m3u8",
                                poster: "images/naika/vignette.png"
                            }, void 0, false, {
                                fileName: "[project]/src/app/content.tsx",
                                lineNumber: 266,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/content.tsx",
                            lineNumber: 260,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImmersiveStory$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StorySection"], {
                            image: "images/naika/_F3_4896.webp",
                            imagePosition: "center 35%",
                            imagePositionMobile: "80% 35%",
                            align: "left",
                            veil: "left",
                            veilStr: 1,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: P,
                                children: "Sa loge n’a rien de spectaculaire: des miroirs cerclés d’ampoules, des portants de costumes, un canapé, un fauteuil, un frigo et des flight-cases empilés contre les murs. Pourtant, cette pièce impersonnelle devient peu à peu une maison de fortune. La porte s’ouvre. «Salut!» Mathieu Jaton vient saluer l’étoile avant son concert. Une accolade, quelques mots, des remerciements. Puis le directeur du Montreux Jazz Festival s’éclipse aussi discrètement qu’il est arrivé. Autour de Naïka, une dizaine de personnes poursuivent leurs préparatifs. Ou plutôt... veillent sur elle."
                            }, void 0, false, {
                                fileName: "[project]/src/app/content.tsx",
                                lineNumber: 280,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/content.tsx",
                            lineNumber: 272,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImmersiveStory$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StorySection"], {
                            image: "images/naika/_F3_4896.webp",
                            imagePosition: "center 35%",
                            imagePositionMobile: "80% 35%",
                            align: "left",
                            veil: "left",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: P,
                                children: "Marta, sa manageuse, anticipe le moindre besoin. Raf orchestre les déplacements avec un calme désarmant. Plus loin, Lorr et Mateus peaufinent une dernière fois la scénographie pendant que Lucas affine les lumières. Dans un coin de la loge, Alix fait rebondir distraitement ses baguettes sur sa cuisse, Emile gratte des accords, Sami pianote machinalement sur un clavier éteint. Clément plaisante avec Tibo. Noémie, caméra à la main, immortalise ces instants que le public ne peut vivre qu’à bonne distance."
                            }, void 0, false, {
                                fileName: "[project]/src/app/content.tsx",
                                lineNumber: 292,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/content.tsx",
                            lineNumber: 285,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImmersiveStory$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StorySection"], {
                            image: "images/naika/_F3_5206.webp",
                            imagePosition: "center 30%",
                            imagePositionMobile: "78% 30%",
                            align: "left",
                            veil: "left",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: P,
                                children: "Ici, personne n’a l’air de diriger. Pourtant, chacun connaît sa place. Le repas arrive, la concentration cède la place aux rires. Un steak bien cuit. Du riz. Naïka observe son assiette. «Je ne veux pas voir le sang de l’animal. J’aime la viande comme un pneu!» Elle aperçoit des carottes. «Lorr sait pourtant que je n’aime pas les légumes...» Noémie pouffe: «C’est moi! Je pensais que ça te ferait du bien.»"
                            }, void 0, false, {
                                fileName: "[project]/src/app/content.tsx",
                                lineNumber: 304,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/content.tsx",
                            lineNumber: 297,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImmersiveStory$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StorySection"], {
                            id: "chez-soi",
                            image: "images/naika/_F3_5427.webp",
                            imagePosition: "center 30%",
                            imagePositionMobile: "65% 30%",
                            align: "left",
                            width: "wide",
                            veil: "left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImmersiveStory$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StoryHeading"], {
                                    children: "À la recherche de son chez-soi"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/content.tsx",
                                    lineNumber: 322,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: P,
                                    children: "Une maquilleuse s’approche. «Tu veux des paillettes?» Les yeux de Naïka brillent. «Bien sûr! On est à Montreux.» Cette «hypersensible» aux hautes murailles ne tarde pourtant pas à se confier à nous. Son soutien à la Palestine, explique-t-elle, naît de l’effroi que lui inspire la violence du monde. Une phrase s’impose sans qu’elle y pense: «Chez moi, ce sont les autres.» Sa mère haïtienne d’origine libanaise et palestino-syrienne lui a transmis le goût de la mode."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/content.tsx",
                                    lineNumber: 323,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/content.tsx",
                            lineNumber: 312,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImmersiveStory$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StorySection"], {
                            image: "images/naika/_F2_9839.webp",
                            imagePosition: "left center",
                            imagePositionMobile: "58% 30%",
                            align: "left",
                            veil: "left",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: P,
                                children: "Créatrice de vêtements, elle l’emmenait chaque jour après l’école dans sa boutique. Les tissus devenaient des terrains de jeu, les cabines d’essayage des coulisses avant l’heure. Plus loin encore, en Haïti, ses grands-parents tenaient un magasin de tissus. Entre les rouleaux d’étoffe, la petite fille découpait, assemblait, imaginait des costumes avant d’organiser des défilés et de petits concerts devant toute la famille."
                            }, void 0, false, {
                                fileName: "[project]/src/app/content.tsx",
                                lineNumber: 335,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/content.tsx",
                            lineNumber: 328,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImmersiveStory$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StorySection"], {
                            image: "images/naika/_F3_5478.webp",
                            imagePosition: "center 30%",
                            imagePositionMobile: "40% 30%",
                            align: "left",
                            veil: "left",
                            veilStr: 1,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: P,
                                children: "Son père, un Français né et élevé à Madagascar, parlait un autre langage: celui des chiffres. Ancien professionnel de la finance, il a quitté son métier lorsque la musique a commencé à prendre toute la place. Aujourd’hui, il veille sur les comptes de sa fille. «Il a le plus grand cœur que je connaisse», souffle-t-elle."
                            }, void 0, false, {
                                fileName: "[project]/src/app/content.tsx",
                                lineNumber: 348,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/content.tsx",
                            lineNumber: 340,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImmersiveStory$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StorySection"], {
                            image: "images/naika/_F2_0419.webp",
                            imagePosition: "right 35%",
                            imagePositionMobile: "41% 35%",
                            align: "right",
                            veil: "right",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: P,
                                children: "La trentaine entamée, les rêves sont restés ceux de l’enfant qu’elle était. «Je veux gagner un Grammy.» L’aveu fuse avec une simplicité désarmante. Puis viennent les autres envies: le cinéma, une griffe en hommage à sa mère, une fondation pour Haïti. Lorsqu’on oriente la discussion vers sa sphère privée et qu’on lui demande si elle partage sa vie avec quelqu’un, elle botte en touche: «Aujourd’hui, mon couple, c’est ma carrière.»"
                            }, void 0, false, {
                                fileName: "[project]/src/app/content.tsx",
                                lineNumber: 360,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/content.tsx",
                            lineNumber: 353,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImmersiveStory$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StorySection"], {
                            image: "images/naika/_F3_6045.webp",
                            imagePosition: "right top",
                            imagePositionMobile: "87% 35%",
                            align: "left",
                            veil: "left",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: P,
                                children: "Casablanca il y a deux jours. Montreux aujourd’hui. Paris dès demain. Les semaines finissent par se confondre. «J’avoue que je ne sais même pas quel jour on est…» Son ton se fait plus discret. Elle lâche: «Un jour, j’aimerais fonder une famille. Mais je ne sais même pas où je vivrai.» Elle qui enchaîne désormais les concerts à guichets fermés aux quatre coins du monde ignore dans quel pays elle bâtira son foyer."
                            }, void 0, false, {
                                fileName: "[project]/src/app/content.tsx",
                                lineNumber: 372,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/content.tsx",
                            lineNumber: 365,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImmersiveStory$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StorySection"], {
                            id: "galere",
                            image: "images/naika/_F3_5951.webp",
                            imagePosition: "right 50%",
                            imagePositionMobile: "30% 50%",
                            align: "right",
                            veil: "right",
                            width: "wide",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImmersiveStory$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StoryHeading"], {
                                    children: "Avant le succès, la galère"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/content.tsx",
                                    lineNumber: 395,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: P,
                                    children: "Casablanca il y a deux jours. Montreux aujourd’hui. Paris dès demain. Les semaines finissent par se confondre. «J’avoue que je ne sais même pas quel jour on est...» Son ton se fait plus discret. Elle lâche: «Un jour, j’aimerais fonder une famille. Mais je ne sais même pas où je vivrai.» Elle qui enchaîne désormais les concerts à guichets fermés aux quatre coins du monde ignore dans quel pays elle bâtira son foyer."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/content.tsx",
                                    lineNumber: 396,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/content.tsx",
                            lineNumber: 385,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImmersiveStory$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StorySection"], {
                            image: "images/naika/_F3_5877.webp",
                            imagePosition: "right 30%",
                            imagePositionMobile: "35% 30%",
                            align: "right",
                            veil: "right",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: P,
                                children: "Avant les salles combles, il y eut les bars presque vides. Les mariages. Les casinos. Les soirées d’entreprise. Un soir, à Los Angeles, elles étaient deux dans le public. Ses deux colocataires. «On était plus nombreux sur scène que dans la salle.» Elle en rit aujourd’hui. Ce soir-là pourtant, elle a chanté comme si une foule immense se dressait devant elle. Sur son avant-bras, trois lettres résument cette époque. «DIY». Do it yourself, autrement dit «fais-le toi-même». Elle tourne ses clips, fabrique ses décors, imagine ses costumes. Pour sa première tournée, elle peint pendant trois jours la vaste toile qui servira d’écrin à son univers. «Franchir toutes ces étapes, ça m’a rendue plus forte et plus déterminée», appuie-t-elle."
                            }, void 0, false, {
                                fileName: "[project]/src/app/content.tsx",
                                lineNumber: 408,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/content.tsx",
                            lineNumber: 401,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImmersiveStory$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StorySection"], {
                            image: "images/naika/_F3_6215.webp",
                            imagePosition: "left 35%",
                            imagePositionMobile: "70% 35%",
                            align: "left",
                            veil: "left",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: P,
                                children: "Le déclic? Son titre Sauce, sorti en 2021, est repéré par Apple qui l’utilise dans une publicité pour l’iPhone 12. Cette visibilité la fait décoller. L’argent gagné grâce au géant lui permet d’investir dans son projet. Des millions d’écoutes plus tard, quand on lui demande ce qui a changé son destin, elle ne cite ni la marque à la pomme ni Spotify, mais sa garde rapprochée. Un noyau dur qui l’accompagne partout depuis les bancs du Berklee College of Music, à Boston."
                            }, void 0, false, {
                                fileName: "[project]/src/app/content.tsx",
                                lineNumber: 420,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/content.tsx",
                            lineNumber: 413,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImmersiveStory$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StorySection"], {
                            image: "images/naika/_F3_6177.webp",
                            imagePosition: "center 45%",
                            imagePositionMobile: "52% 45%",
                            align: "left",
                            veil: "left",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: P,
                                children: "«Si on ne s’aimait pas, ce métier serait insupportable de sauter constamment d’un endroit à un autre.» Les mots flottent encore lorsqu’un régisseur annonce que le concert de Liniker touche à sa fin. La loge se vide d’un seul mouvement. Les musiciens rejoignent leurs instruments. Les derniers réglages s’enchaînent. On entend des vocalises puis le silence s’installe. Le noir se fait."
                            }, void 0, false, {
                                fileName: "[project]/src/app/content.tsx",
                                lineNumber: 432,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/content.tsx",
                            lineNumber: 425,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImmersiveStory$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StorySection"], {
                            image: "images/naika/_F3_5917.webp",
                            imagePosition: "right 30%",
                            imagePositionMobile: "35% 30%",
                            align: "right",
                            veil: "right",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: P,
                                children: "Derrière son micro habillé de fleurs tropicales, il ne reste plus que Naïka. Les premières notes résonnent. Le Lab, plein à craquer, chavire avec elle. Une bonne heure passe. Les applaudissements s’éteignent à leur tour. Le manteau jaune retrouve le dossier d’une chaise. Les bottes vertigineuses sont retirées. Marta l’enlace et lui apporte un drapeau rouge à croix blanche ainsi qu’une montagne de photos et de vinyles à dédicacer. Les conversations reprennent exactement là où elles s’étaient arrêtées. Comme si les 2000 spectateurs n’avaient été qu’une parenthèse."
                            }, void 0, false, {
                                fileName: "[project]/src/app/content.tsx",
                                lineNumber: 444,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/content.tsx",
                            lineNumber: 437,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImmersiveStory$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StorySection"], {
                            id: "epilogue",
                            image: "images/naika/_F3_6438.webp",
                            imagePosition: "center 40%",
                            imagePositionMobile: "55% 45%",
                            align: "right",
                            veil: "right",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: P,
                                children: "Après une courte nuit, plusieurs jours de repos. Avant un autre avion. Une autre affiche. Une autre ville. «J’ai tellement de chance... Mais si je ne m’arrête jamais, je finirai par casser», glisse-t-elle. Dehors, la nuit a repris ses droits sur la perle de la Riviera. Le soleil qui étincelait, une poignée d’heures plus tôt, sous les spots, s’est éteint. Pas celui de Naïka. Celui-là ne se lève ni dans un ciel ni sur une scène. Il éclaire les visages familiers qui s’engouffrent avec elle dans les aéroports, traversent les halls d’hôtel et l’accueillent chaque soir, au retour des applaudissements. Elle rêve d’un jour poser ses valises. Sa vie lui apprend, chaque matin, à les refaire."
                            }, void 0, false, {
                                fileName: "[project]/src/app/content.tsx",
                                lineNumber: 460,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/content.tsx",
                            lineNumber: 452,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImmersiveStory$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StorySection"], {
                            id: "sortie",
                            image: "images/naika/IL29_NAIKA_MJF_1__F2_9759-FINAL.webp",
                            imagePosition: "right 35%",
                            imagePositionMobile: "56% 30%",
                            align: "center",
                            height: "short",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false)
                        }, void 0, false, {
                            fileName: "[project]/src/app/content.tsx",
                            lineNumber: 468,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/content.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 px-4 pb-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Credits$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Credits"], {
                        theme: "glass",
                        items: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$variables$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STORY"].credits.filter((credit)=>credit.inCredits)
                    }, void 0, false, {
                        fileName: "[project]/src/app/content.tsx",
                        lineNumber: 485,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/content.tsx",
                    lineNumber: 484,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/content.tsx",
            lineNumber: 106,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$content$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/content.tsx [app-rsc] (ecmascript)");
;
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$content$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "metadata",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$content$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["metadata"],
    "viewport",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$content$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["viewport"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$content$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/content.tsx [app-rsc] (ecmascript)");
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6ea59029._.js.map