(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/layout/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site-config.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const navLinks = [
    {
        href: "/about",
        label: "About"
    },
    {
        href: "/services",
        label: "Our Services"
    },
    {
        href: "/our-clients",
        label: "Our Clients"
    }
];
function Header() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "flex h-20 items-center justify-between py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-2.5",
                        onClick: ()=>setOpen(false),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/logo-icon.png",
                                alt: "",
                                width: 46,
                                height: 48,
                                className: "h-11 w-auto sm:h-12",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Header.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-display text-xl font-semibold uppercase tracking-tight text-forest",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["site"].name
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Header.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Header.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden items-center gap-8 md:flex",
                        "aria-label": "Primary",
                        children: [
                            navLinks.map((link)=>{
                                const active = pathname === link.href || pathname.startsWith(link.href + "/");
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: `group relative py-1 text-sm font-medium transition-colors ${active ? "text-forest" : "text-ink/70 hover:text-forest"}`,
                                    children: [
                                        link.label,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `absolute -bottom-0.5 left-0 h-px bg-forest transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"}`
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Header.tsx",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, link.href, true, {
                                    fileName: "[project]/components/layout/Header.tsx",
                                    lineNumber: 34,
                                    columnNumber: 15
                                }, this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: "bg-forest px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-forest-dark",
                                children: "Request a Consultation"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Header.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Header.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "flex h-10 w-10 items-center justify-center md:hidden",
                        "aria-expanded": open,
                        "aria-controls": "mobile-nav",
                        "aria-label": open ? "Close menu" : "Open menu",
                        onClick: ()=>setOpen((v)=>!v),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "relative block h-4 w-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `absolute left-0 top-0 h-0.5 w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Header.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `absolute left-0 top-2 h-0.5 w-6 bg-ink transition-opacity ${open ? "opacity-0" : "opacity-100"}`
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Header.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `absolute left-0 top-4 h-0.5 w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Header.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Header.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Header.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Header.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                id: "mobile-nav",
                "aria-label": "Mobile",
                className: "border-t border-line bg-paper md:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "flex flex-col gap-1 py-4",
                    children: [
                        navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: link.href,
                                onClick: ()=>setOpen(false),
                                className: "px-1 py-3 text-base font-medium text-ink/80 hover:text-forest",
                                children: link.label
                            }, link.href, false, {
                                fileName: "[project]/components/layout/Header.tsx",
                                lineNumber: 90,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact",
                            onClick: ()=>setOpen(false),
                            className: "mt-2 bg-forest px-5 py-3 text-center text-sm font-medium text-paper",
                            children: "Request a Consultation"
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Header.tsx",
                            lineNumber: 99,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/Header.tsx",
                    lineNumber: 88,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/Header.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/Header.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(Header, "zulZ+F5240eOSupJE1BcVv8NMvo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Container.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Container
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Container({ children, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `mx-auto w-full max-w-6xl px-6 md:px-10 ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/Container.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = Container;
var _c;
__turbopack_context__.k.register(_c, "Container");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/TrackedLink.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrackedLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/analytics.ts [app-client] (ecmascript)");
"use client";
;
;
function TrackedLink({ eventName, onClick, ...rest }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        ...rest,
        onClick: (e)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackEvent"])(eventName);
            onClick?.(e);
        }
    }, void 0, false, {
        fileName: "[project]/components/ui/TrackedLink.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = TrackedLink;
var _c;
__turbopack_context__.k.register(_c, "TrackedLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/analytics.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// GA4 scaffold. Set NEXT_PUBLIC_GA_MEASUREMENT_ID (a "G-XXXXXXX" Measurement
// ID from a real GA4 property) as an environment variable to activate it —
// nothing loads or fires without it, so this is inert until configured.
__turbopack_context__.s([
    "GA_MEASUREMENT_ID",
    ()=>GA_MEASUREMENT_ID,
    "trackEvent",
    ()=>trackEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const GA_MEASUREMENT_ID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
function trackEvent(name, params) {
    if (("TURBOPACK compile-time value", "object") !== "undefined" && window.gtag) {
        window.gtag("event", name, params);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/site-config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// All content here is sourced directly from the Geovince company document.
// Anything not present in that document is marked with a bracketed placeholder
// and must be supplied by the client before launch.
__turbopack_context__.s([
    "benefits",
    ()=>benefits,
    "closingStatement",
    ()=>closingStatement,
    "cost",
    ()=>cost,
    "dashboard",
    ()=>dashboard,
    "howItWorks",
    ()=>howItWorks,
    "marketShift",
    ()=>marketShift,
    "onboarding",
    ()=>onboarding,
    "outcomes",
    ()=>outcomes,
    "phoneIntl",
    ()=>phoneIntl,
    "pricingNote",
    ()=>pricingNote,
    "pricingTiers",
    ()=>pricingTiers,
    "problem",
    ()=>problem,
    "qrSystem",
    ()=>qrSystem,
    "rootCause",
    ()=>rootCause,
    "sectors",
    ()=>sectors,
    "services",
    ()=>services,
    "site",
    ()=>site,
    "startOptions",
    ()=>startOptions,
    "system",
    ()=>system,
    "telHref",
    ()=>telHref,
    "urgency",
    ()=>urgency,
    "whatsappHref",
    ()=>whatsappHref,
    "whyGeovince",
    ()=>whyGeovince
]);
const site = {
    name: "Geovince",
    legalName: "Geovince Security Limited",
    tagline: "Real-Time Patrol Verification & Intelligent Security Monitoring",
    strapline: "Security You Can See, Verify, and Trust",
    url: "https://www.geovince.co.ke",
    description: "Geovince is a smart security company that replaces assumption-based patrols with verified, real-time monitoring, QR-based checkpoint scanning, a live dashboard, instant incident reporting, and automated compliance-ready reports.",
    contact: {
        email: "info@geovince.co.ke",
        phone: "0712 545 678",
        address: "[OFFICE ADDRESS]",
        hours: "[BUSINESS HOURS TO BE PROVIDED]"
    },
    social: {
        instagram: "https://www.instagram.com/geovincekenya",
        facebook: "https://www.facebook.com/profile.php?id=61589527446157",
        linkedin: "https://www.linkedin.com/in/hassan-chanzu-70a50a217"
    }
};
// Kenyan local format (0712 545 678) -> +254 international format, derived
// once from site.contact.phone so tel:/WhatsApp links can't drift out of
// sync with the displayed number.
const phoneDigits = site.contact.phone.replace(/\D/g, "").replace(/^0/, "254");
const phoneIntl = `+${phoneDigits}`;
const telHref = `tel:${phoneIntl}`;
const whatsappHref = `https://wa.me/${phoneDigits}`;
const problem = {
    eyebrow: "The problem",
    title: "Flying blind in the dark",
    lead: "When was the last time you had absolute certainty your security team was exactly where they were supposed to be, doing exactly what they were paid to do?",
    answer: "For most organisations, the honest answer is never.",
    points: [
        {
            title: "Patrols happen on assumption, not confirmation",
            body: "There is no proof that a guard reached their checkpoint."
        },
        {
            title: "Paper logs can be falsified, forgotten, or lost",
            body: "Manual logbooks tell you what someone wrote, not what actually happened."
        },
        {
            title: "Clients have zero real-time visibility",
            body: "You are kept in the dark until something goes wrong."
        },
        {
            title: "Gaps surface only after an incident",
            body: "By the time a gap is discovered, the damage is already done."
        }
    ],
    closing: "This is not a staffing problem. It is a visibility problem. And it has a solution."
};
const rootCause = {
    eyebrow: "The root cause",
    title: "Security built on assumption",
    lead: "Traditional security models were designed for a world that no longer exists, one where a uniform and a clipboard were enough to inspire confidence. Today, clients and risk managers demand more. They demand proof.",
    closing: "Assumption is not a security strategy. Verification is.",
    points: [
        {
            title: "Patrols are assumed completed",
            body: "Without a verification mechanism, a guard can log a full patrol without leaving the guardhouse. You would never know."
        },
        {
            title: "Guard presence is assumed",
            body: "A name on a roster does not mean a body on a site. Without live check-in data, presence is a guess at best."
        },
        {
            title: "Incident reporting is assumed accurate",
            body: "Delayed, incomplete, or memory-based reporting means critical details are routinely missed, distorted, or omitted."
        }
    ]
};
const cost = {
    eyebrow: "The cost of getting it wrong",
    title: "Unverified security is not an inconvenience",
    lead: "Unverified security does not just create inconvenience, it creates measurable, financial, and reputational damage that compounds over time. These are the daily operational realities of organisations still running legacy security systems.",
    points: [
        {
            title: "Increased theft and loss exposure",
            body: "When patrol routes are inconsistent and unverified, opportunistic theft and asset loss become a matter of when, not if."
        },
        {
            title: "Weak accountability",
            body: "Without objective data, disciplinary actions are challenged, insurance claims are disputed, and liability is difficult to establish."
        },
        {
            title: "Delayed incident response",
            body: "When incidents are reported hours after the fact, if at all, the window for effective response has already closed."
        },
        {
            title: "Eroded client trust",
            body: "A client who cannot see what their security team is doing has no reason to believe it is being done well."
        }
    ]
};
const marketShift = {
    eyebrow: "The market has moved",
    title: "Has your security?",
    lead: "The security industry is undergoing one of the most significant transformations in its history. Clients no longer accept passive, unverifiable security arrangements. The shift is already underway, and the organisations that move with it will separate themselves decisively from those that do not.",
    closing: "The question is not whether this shift is coming. It is already here. The question is whether you will lead it or lag behind it.",
    points: [
        {
            title: "Digital verification is the new standard",
            body: "Digital verification systems are replacing paper logs and verbal reports as the standard expectation, not an optional upgrade."
        },
        {
            title: "Real-time monitoring removes the guesswork",
            body: "Operations managers and clients get live visibility into patrol activity, removing the guesswork from security management entirely."
        },
        {
            title: "Data-driven accountability",
            body: "Every shift, every patrol, and every incident is traceable, creating audit trails that protect both the service provider and the client."
        },
        {
            title: "Automated reporting eliminates human error",
            body: "The system delivers consistent, professional records without administrative burden."
        }
    ]
};
const system = {
    eyebrow: "The Geovince system",
    title: "Introducing the Geovince Smart Security System",
    lead: "We built Geovince because we saw what traditional security was missing, not people, not effort, but proof. Our system does not replace the human element of security. It empowers it, validates it, and makes it visible to the people who depend on it most.",
    closing: "Geovince is not a patch on a broken system. It is a fundamentally better way to do security.",
    capabilities: [
        {
            title: "QR-Based Patrol Verification",
            body: "Every checkpoint is physically tagged. Every guard scan creates a time-stamped, identity-linked, location-verified record. No scan, no credit."
        },
        {
            title: "Live Monitoring Dashboard",
            body: "A real-time operational view of all active patrols, guard locations, checkpoint completions, and flag events, accessible from any device, at any time."
        },
        {
            title: "Instant Incident Reporting",
            body: "Guards log incidents directly from the field the moment they occur, complete with time, location, and supporting detail, eliminating after-the-fact reconstruction."
        },
        {
            title: "Automated Logs and Reports",
            body: "The system generates compliance-ready reports automatically, removing the burden of manual documentation and producing records that are credible in any dispute or audit."
        }
    ]
};
const whyGeovince = {
    eyebrow: "Why Geovince",
    title: "Because visible security is effective security",
    lead: "There are security companies, and there are technology platforms. Geovince is built at the intersection of both, combining the irreplaceable value of professional, trained security personnel with the precision and transparency that only a purpose-built technology system can deliver.",
    closing: "Accountability is not a feature. At Geovince, it is the foundation.",
    points: [
        {
            title: "We combine manpower with technology",
            body: "Trained guards backed by a live verification system, not one or the other, but both working together."
        },
        {
            title: "We eliminate blind patrols",
            body: "Every movement, every checkpoint, every guard interaction is captured and recorded in real time, giving you a complete operational picture."
        },
        {
            title: "We create genuine accountability",
            body: "Guards know their patrol data is live and visible. That knowledge alone transforms performance standards."
        },
        {
            title: "We give you operational visibility",
            body: "For the first time, you can see exactly what is happening on your site, right now, from wherever you are."
        }
    ]
};
const qrSystem = {
    eyebrow: "How verification works",
    title: "Verification at every step",
    lead: "The Geovince QR Patrol System is the operational backbone of everything we do. It is simple enough for every guard to use on their first day, and sophisticated enough to provide the audit-grade verification that enterprise clients demand.",
    closing: "The result: a complete, unalterable patrol record that tells you not just that security happened, but exactly how, when, and where.",
    steps: [
        {
            title: "Strategic placement",
            body: "QR codes are installed at critical patrol points across your site, entry points, perimeters, high-value asset locations, and any area that requires verified attention."
        },
        {
            title: "Guard scanning",
            body: "Each guard scans the QR code at every checkpoint during their patrol. The scan cannot be replicated remotely, bypassed, or backdated."
        },
        {
            title: "Automatic data capture",
            body: "The system instantly records the time of scan, the identity of the guard, and their precise location, creating an objective, tamper-proof patrol record."
        },
        {
            title: "Live dashboard feed",
            body: "All scan data flows directly to the client dashboard in real time, where patrol progress can be monitored live or reviewed in retrospect."
        }
    ]
};
const howItWorks = {
    eyebrow: "How Geovince works",
    title: "From installation to insight",
    lead: "Deploying the Geovince Smart Security System is a structured, seamless process. From day one, your site transitions from assumption-based security to verified, data-backed protection.",
    closing: "Simple for guards. Powerful for managers. Reassuring for clients.",
    steps: [
        {
            step: "01",
            title: "QR code installation",
            body: "Our team installs QR checkpoints at every designated patrol point across your site, tailored to your site's layout, risk profile, and operational requirements."
        },
        {
            step: "02",
            title: "Scheduled patrols begin",
            body: "Trained guards execute patrols according to your security schedule, visiting each checkpoint in the required sequence and timeframe."
        },
        {
            step: "03",
            title: "Real-time logging",
            body: "Every checkpoint scan is instantly logged to the system, time-stamped, guard-identified, and location-confirmed. No gaps, no grey areas."
        },
        {
            step: "04",
            title: "Automated reporting",
            body: "Reports are generated automatically at the end of each shift, patrol cycle, or incident event, delivered directly to your dashboard without any manual input required."
        }
    ]
};
const onboarding = {
    eyebrow: "Onboarding",
    title: "From decision to deployment",
    lead: "We have designed our implementation process to minimise disruption, maximise confidence, and ensure that every client is fully operational and supported from day one.",
    stages: [
        {
            stage: "Stage 1",
            title: "Site assessment",
            body: "Our security experts conduct a comprehensive assessment of your site, identifying vulnerabilities, patrol requirements, access points, and priority zones."
        },
        {
            stage: "Stage 2",
            title: "Security mapping",
            body: "We design a tailored patrol plan and checkpoint configuration that reflects the unique risk profile, layout, and operational demands of your environment."
        },
        {
            stage: "Stage 3",
            title: "QR checkpoint installation",
            body: "Physical QR codes are installed at every designated patrol point. The process is swift, unobtrusive, and does not require IT infrastructure on your part."
        },
        {
            stage: "Stage 4",
            title: "Guard onboarding",
            body: "Our security personnel are briefed on your site, trained on the Geovince system, and prepared to operate to your specific security requirements from day one."
        },
        {
            stage: "Stage 5",
            title: "System activation",
            body: "The live dashboard goes live, reporting begins, and your security operation transitions from assumption-based to verification-driven, completely and immediately."
        }
    ]
};
const dashboard = {
    eyebrow: "The live dashboard",
    title: "Your security command centre",
    lead: "The Geovince dashboard gives you something that no traditional security arrangement has ever offered: complete, real-time visibility of everything happening on your site, right now, from any device, anywhere.",
    closing: "You should not have to wait for a report to know what is happening on your site. With Geovince, you never have to.",
    points: [
        {
            title: "Real-time patrol tracking",
            body: "Watch patrols unfold in real time. Know the moment a guard reaches a checkpoint, and the moment one is missed."
        },
        {
            title: "Full guard activity logs",
            body: "A complete, timestamped history of every guard movement, checkpoint scan, and shift activity, searchable and downloadable at any time."
        },
        {
            title: "Missed checkpoint alerts",
            body: "Instant notifications when a scheduled checkpoint is not completed on time, allowing for immediate supervisory intervention before a gap becomes an exposure."
        },
        {
            title: "Live incident reporting feed",
            body: "View incidents as they are logged in the field, with time, location, guard identity, and incident detail, for the fastest possible situational awareness."
        }
    ]
};
const services = [
    {
        slug: "manned-guarding",
        number: "01",
        name: "Manned Guarding Services",
        summary: "Professional, trained security personnel deployed to your site, backed by rigorous vetting, ongoing supervision, and performance monitoring through the Geovince system.",
        body: "Professional, trained security personnel deployed to your site, backed by rigorous vetting, ongoing supervision, and performance monitoring through the Geovince system."
    },
    {
        slug: "mobile-patrol",
        number: "02",
        name: "Mobile Patrol Services",
        summary: "Scheduled and random mobile patrols that cover multiple locations or large sites, verified at every point through our QR checkpoint technology.",
        body: "Scheduled and random mobile patrols that cover multiple locations or large sites, verified at every point through our QR checkpoint technology."
    },
    {
        slug: "event-security",
        number: "03",
        name: "Event Security",
        summary: "Specialist security teams for corporate events, private functions, product launches, and high-footfall gatherings, planned, coordinated, and fully reportable.",
        body: "Specialist security teams for corporate events, private functions, product launches, and high-footfall gatherings, planned, coordinated, and fully reportable."
    },
    {
        slug: "corporate-security-consultancy",
        number: "04",
        name: "Corporate Security Consultancy",
        summary: "Expert assessment of your current security posture, vulnerability mapping, and strategic recommendations for closing gaps before they become incidents.",
        body: "Expert assessment of your current security posture, vulnerability mapping, and strategic recommendations for closing gaps before they become incidents."
    },
    {
        slug: "qr-patrol-system-integration",
        number: "05",
        name: "QR Patrol System Integration",
        summary: "Standalone technology deployment for organisations with existing security teams who want to add the verification, transparency, and reporting power of the Geovince platform.",
        body: "Standalone technology deployment for organisations with existing security teams who want to add the verification, transparency, and reporting power of the Geovince platform."
    }
];
const benefits = [
    {
        title: "Full visibility of guard activity",
        body: "See every patrol, every checkpoint, every scan, in real time. No more wondering. No more waiting for a report that may or may not be accurate."
    },
    {
        title: "Reduced security risk",
        body: "Verified patrols, live alerts, and instant incident reporting close the gaps that opportunistic threats depend on."
    },
    {
        title: "Faster incident response",
        body: "When an incident is logged the moment it occurs, response teams can be mobilised immediately, not hours later, when the trail has gone cold."
    },
    {
        title: "Lower supervision costs",
        body: "The Geovince system acts as a continuous, automated supervisor, reducing the management overhead required to maintain accountability across your operation."
    },
    {
        title: "Audit-ready reporting",
        body: "Every report generated by Geovince is timestamped, structured, and ready for compliance, insurance, legal, or executive review, with zero preparation required."
    }
];
const outcomes = {
    eyebrow: "Proof in practice",
    title: "What clients experience",
    lead: "Every organisation that transitions to Geovince undergoes the same shift, from hoping their security is working to knowing it is. While client details remain confidential pending formal sign-off, the operational outcomes speak consistently across every deployment.",
    closing: "Full case study documentation, including client references, is available upon request during our proposal process.",
    points: [
        {
            title: "Dramatically improved patrol compliance visibility",
            body: "Clients gain immediate, real-time confirmation that patrols are being completed to specification, something that was simply not measurable before Geovince."
        },
        {
            title: "Sharp reduction in missed patrol incidents",
            body: "With live checkpoint monitoring and automated alerts, missed patrols are flagged and addressed before they become security gaps, not discovered after the fact."
        },
        {
            title: "Increased client trust through verified reporting",
            body: "When clients can see the data themselves, the relationship shifts from assumed competence to demonstrated performance. That trust compounds over time."
        }
    ]
};
const pricingTiers = [
    {
        name: "Basic Security Package",
        body: "Professional manned guarding with standard reporting. Ideal for organisations taking their first step toward structured, managed security, with the option to upgrade to verification technology at any time."
    },
    {
        name: "Smart QR Patrol Package",
        flagship: true,
        body: "Our recommended offering. Combines trained security personnel with the full Geovince QR verification system, live dashboard access, and automated reporting. This is security that proves itself every shift."
    },
    {
        name: "Enterprise Security Solution",
        body: "A fully customised security architecture for complex sites, multi-location operations, or organisations with heightened risk profiles. Includes consultancy, dedicated account management, and bespoke reporting frameworks."
    }
];
const pricingNote = "Custom pricing is developed based on site assessment, patrol requirements, and service scope. Contact us to receive a tailored proposal with full cost transparency.";
const sectors = [
    {
        title: "Corporate Offices",
        body: "Protect people, premises, and intellectual property with verified perimeter patrols, access point monitoring, and after-hours compliance reporting."
    },
    {
        title: "Residential Estates",
        body: "Give residents and estate management teams the assurance they deserve, verified patrol routes, real-time visibility, and instant incident escalation."
    },
    {
        title: "Warehouses & Logistics Hubs",
        body: "High-value inventory requires high-confidence security. Geovince ensures every corner of your facility is patrolled, verified, and documented."
    },
    {
        title: "Schools & Institutions",
        body: "Child safety and institutional security demand the highest level of operational diligence. Geovince delivers verification that boards, governors, and parents can rely on."
    },
    {
        title: "Construction Sites",
        body: "Dynamic, high-risk environments with shifting access points and significant asset exposure. Geovince adapts to site changes while maintaining comprehensive patrol verification."
    }
];
const urgency = {
    eyebrow: "Why now",
    title: "Why now is the right time to act",
    lead: "There is rarely a convenient moment to upgrade your security infrastructure. But there is a right moment, and for most organisations, that moment is already overdue.",
    closing: "The longer you wait to implement verified security, the longer your gaps remain open. Let us close them.",
    points: [
        {
            title: "Rising demand for accountability",
            body: "Boards, insurers, and regulators are demanding greater transparency in how organisations manage their security obligations. Demonstrating verified patrols is fast becoming a governance requirement, not a nice-to-have."
        },
        {
            title: "Increasing security risk exposure",
            body: "Theft, vandalism, and organised crime targeting commercial and residential properties are trending upward. Unverified security is an invitation to those who understand its gaps."
        },
        {
            title: "An irreversible shift to digital monitoring",
            body: "The window to transition smoothly, on your own terms, at your own pace, is open now. As client expectations harden and competitors upgrade, the cost of delay grows every month."
        }
    ]
};
const startOptions = [
    {
        title: "Schedule a site visit",
        body: "Our security consultants will visit your premises at a time that suits you, assess your current security setup, and provide an honest, expert evaluation, completely without obligation."
    },
    {
        title: "Request a custom proposal",
        body: "Based on your site assessment or an initial briefing, we will develop a detailed, costed security proposal tailored precisely to your requirements, risk profile, and budget."
    },
    {
        title: "Request a pilot deployment",
        body: "Not ready for a full commitment? We offer pilot deployments that let you experience the Geovince system in a live environment before making any long-term decision."
    }
];
const closingStatement = "There is a reason the best security is also the most transparent. When your guards know their patrols are verified, they perform at a higher standard. When your clients can see the data, they trust what you are delivering. When you can prove your security works, everything else, risk, liability, reputation, becomes easier to manage. Geovince is not just a better security product. It is a better way to protect what matters most.";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0zrtd3m._.js.map