module.exports = [
"[project]/OneDrive/Desktop/omran/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/omran/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/omran/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/OneDrive/Desktop/omran/src/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/omran/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/omran/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/omran/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/omran/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/omran/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/omran/src/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = "Button";
;
}),
"[project]/OneDrive/Desktop/omran/src/app/news/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/omran/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/omran/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/omran/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/omran/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/omran/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const NEWS_PER_PAGE = 6;
function NewsPage() {
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [visibleNews, setVisibleNews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(NEWS_PER_PAGE);
    const [showSubscribeModal, setShowSubscribeModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Filter news based on selected category
    const filteredNews = selectedCategory === "all" ? allNewsArticles : allNewsArticles.filter((article)=>article.category === selectedCategory);
    const displayedNews = filteredNews.slice(0, visibleNews);
    const hasMoreNews = visibleNews < filteredNews.length;
    const handleCategoryChange = (category)=>{
        setSelectedCategory(category);
        setVisibleNews(NEWS_PER_PAGE);
    };
    const loadMoreNews = ()=>{
        setVisibleNews((prev)=>Math.min(prev + NEWS_PER_PAGE, filteredNews.length));
    };
    const handleSubscribe = ()=>{
        setShowSubscribeModal(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-white shadow-sm py-4 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleSubscribe,
                            className: "bg-omran-teal hover:bg-omran-teal/90 text-white px-6 py-2 rounded-full",
                            children: "اشترك الآن"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden lg:flex items-center space-x-8 space-x-reverse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "text-gray-700 hover:text-omran-teal",
                                    children: "الرئيسية"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/projects",
                                    className: "text-gray-700 hover:text-omran-teal",
                                    children: "المشاريع"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/news",
                                    className: "text-omran-teal font-semibold",
                                    children: "الأخبار"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/about",
                                    className: "text-gray-700 hover:text-omran-teal",
                                    children: "من نحن"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(OmranLogo, {}, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-omran-light py-16 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-omran-teal mb-4",
                            children: "آخر الأخبار"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 text-lg max-w-2xl mx-auto",
                            children: "تابع أحدث التطورات والأخبار في السوق العقاري السعودي والاستثمارات العقارية من خبراء مجلة عمران"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-8 px-4 bg-white border-b",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap justify-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: selectedCategory === "all" ? "default" : "outline",
                                onClick: ()=>handleCategoryChange("all"),
                                className: selectedCategory === "all" ? "bg-omran-teal text-white" : "border-omran-teal text-omran-teal hover:bg-omran-teal hover:text-white",
                                children: "جميع الأخبار"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: selectedCategory === "أخبار السوق" ? "default" : "outline",
                                onClick: ()=>handleCategoryChange("أخبار السوق"),
                                className: selectedCategory === "أخبار السوق" ? "bg-omran-teal text-white" : "border-omran-teal text-omran-teal hover:bg-omran-teal hover:text-white",
                                children: "أخبار السوق"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: selectedCategory === "مشاريع جديدة" ? "default" : "outline",
                                onClick: ()=>handleCategoryChange("مشاريع جديدة"),
                                className: selectedCategory === "مشاريع جديدة" ? "bg-omran-teal text-white" : "border-omran-teal text-omran-teal hover:bg-omran-teal hover:text-white",
                                children: "مشاريع جديدة"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: selectedCategory === "تحليلات" ? "default" : "outline",
                                onClick: ()=>handleCategoryChange("تحليلات"),
                                className: selectedCategory === "تحليلات" ? "bg-omran-teal text-white" : "border-omran-teal text-omran-teal hover:bg-omran-teal hover:text-white",
                                children: "تحليلات"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: selectedCategory === "استثمار" ? "default" : "outline",
                                onClick: ()=>handleCategoryChange("استثمار"),
                                className: selectedCategory === "استثمار" ? "bg-omran-teal text-white" : "border-omran-teal text-omran-teal hover:bg-omran-teal hover:text-white",
                                children: "استثمار"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            selectedCategory === "all" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-12 px-4 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-omran-teal mb-8 text-center",
                            children: "الأخبار المميزة"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FeaturedNewsCard, {
                                    article: allNewsArticles[0],
                                    large: true
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FeaturedNewsCard, {
                                            article: allNewsArticles[1]
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FeaturedNewsCard, {
                                            article: allNewsArticles[2]
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                                            lineNumber: 139,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                    lineNumber: 133,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 px-4 bg-omran-light",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-omran-teal mb-8 text-center",
                            children: selectedCategory === "all" ? "جميع الأخبار" : selectedCategory
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                            children: displayedNews.map((article)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NewsCard, {
                                    article: article
                                }, article.id, false, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this),
                        hasMoreNews && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mt-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: loadMoreNews,
                                className: "bg-omran-gold hover:bg-omran-gold/90 text-white px-8 py-3 rounded-full",
                                children: [
                                    "عرض المزيد من الأخبار (",
                                    filteredNews.length - visibleNews,
                                    " متبقي)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                                lineNumber: 162,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                            lineNumber: 161,
                            columnNumber: 13
                        }, this),
                        !hasMoreNews && filteredNews.length > NEWS_PER_PAGE && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mt-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: [
                                    "تم عرض جميع الأخبار (",
                                    filteredNews.length,
                                    " خبر)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                                lineNumber: 174,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                            lineNumber: 173,
                            columnNumber: 13
                        }, this),
                        filteredNews.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mt-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: "لا توجد أخبار في هذه الفئة"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                                    lineNumber: 181,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: ()=>handleCategoryChange("all"),
                                    className: "mt-4 bg-omran-teal hover:bg-omran-teal/90 text-white px-6 py-2 rounded-full",
                                    children: "عرض جميع الأخبار"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                            lineNumber: 180,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 px-4 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto max-w-2xl text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold text-omran-teal mb-4",
                            children: "لا تفوت أي خبر مهم"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 text-lg mb-8",
                            children: "اشترك في النشرة الإخبارية واحصل على آخر الأخبار والتحليلات العقارية"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                            lineNumber: 199,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleSubscribe,
                            className: "bg-omran-teal hover:bg-omran-teal/90 text-white px-8 py-3 rounded-full text-lg",
                            children: "اشترك الآن"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                    lineNumber: 195,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this),
            showSubscribeModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SubscribeModal, {
                onClose: ()=>setShowSubscribeModal(false)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                lineNumber: 213,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
// Featured News Card Component
function FeaturedNewsCard({ article, large = false }) {
    const handleReadMore = ()=>{
        alert(`مقال: ${article.title}\n\nالكاتب: ${article.author}\nوقت القراءة: ${article.readTime}\nالتاريخ: ${article.date}\n\n${article.content}\n\nسيتم إضافة صفحة المقال الكاملة قريباً!`);
    };
    if (large) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-64 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: article.image,
                            alt: article.title,
                            fill: true,
                            className: "object-cover transition-transform duration-300 hover:scale-105"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-4 right-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block bg-omran-gold/90 text-white px-3 py-1 rounded-full text-xs font-semibold",
                                children: article.category
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                                lineNumber: 236,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                            lineNumber: 235,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                    lineNumber: 228,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-omran-teal mb-3 line-clamp-2",
                            children: article.title
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                            lineNumber: 242,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 text-sm mb-4 line-clamp-3",
                            children: article.summary
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                            lineNumber: 245,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center text-xs text-gray-500 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: article.author
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                                    lineNumber: 249,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: article.date
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                                    lineNumber: 250,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: article.readTime
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                                    lineNumber: 251,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                            lineNumber: 248,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleReadMore,
                            className: "w-full bg-omran-teal hover:bg-omran-teal/90 text-white",
                            children: "اقرأ المقال كاملاً"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                            lineNumber: 253,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                    lineNumber: 241,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
            lineNumber: 227,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-32 h-24 flex-shrink-0 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: article.image,
                    alt: article.title,
                    fill: true,
                    className: "object-cover"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                    lineNumber: 267,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-sm font-bold text-omran-teal mb-2 line-clamp-2",
                        children: article.title
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center text-xs text-gray-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: article.date
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                                lineNumber: 279,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                onClick: handleReadMore,
                                className: "text-omran-teal hover:text-omran-gold p-0 h-auto text-xs",
                                children: "اقرأ المزيد"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                                lineNumber: 280,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                lineNumber: 274,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
        lineNumber: 265,
        columnNumber: 5
    }, this);
}
// Regular News Card Component
function NewsCard({ article }) {
    const handleReadMore = ()=>{
        alert(`مقال: ${article.title}\n\nالكاتب: ${article.author}\nوقت القراءة: ${article.readTime}\nالفئة: ${article.category}\nالتاريخ: ${article.date}\n\n${article.content}\n\nسيتم إضافة صفحة المقال الكاملة قريباً!`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover-lift",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-48 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: article.image,
                        alt: article.title,
                        fill: true,
                        className: "object-cover transition-transform duration-300 hover:scale-105"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                        lineNumber: 302,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 right-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-block bg-omran-gold/90 text-white px-3 py-1 rounded-full text-xs font-semibold",
                            children: article.category
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                            lineNumber: 309,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                        lineNumber: 308,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                lineNumber: 301,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold text-omran-teal mb-2 line-clamp-2",
                        children: article.title
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                        lineNumber: 315,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 text-sm mb-4 line-clamp-3",
                        children: article.summary
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                        lineNumber: 318,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center text-xs text-gray-500 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: article.author
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                                lineNumber: 322,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: article.date
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                                lineNumber: 323,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: article.readTime
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                                lineNumber: 324,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                        lineNumber: 321,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleReadMore,
                        className: "w-full bg-omran-teal hover:bg-omran-teal/90 text-white",
                        children: "اقرأ المقال كاملاً"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                        lineNumber: 326,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                lineNumber: 314,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
        lineNumber: 300,
        columnNumber: 5
    }, this);
}
// Subscribe Modal Component
function SubscribeModal({ onClose }) {
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(()=>{
            alert(`شكراً لك! تم تسجيل اشتراكك بنجاح باستخدام البريد الإلكتروني: ${email}`);
            setIsSubmitting(false);
            onClose();
        }, 1000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg max-w-md w-full p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-omran-teal",
                            children: "اشترك في النشرة الإخبارية"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                            lineNumber: 357,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-gray-500 hover:text-gray-700 text-2xl",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                            lineNumber: 358,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                    lineNumber: 356,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 mb-6",
                    children: "احصل على أحدث الأخبار والتحليلات العقارية مباشرة في بريدك الإلكتروني"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                    lineNumber: 365,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "email",
                            required: true,
                            value: email,
                            onChange: (e)=>setEmail(e.target.value),
                            placeholder: "أدخل بريدك الإلكتروني",
                            className: "w-full p-3 border border-gray-300 rounded-md mb-4 text-right",
                            dir: "rtl"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                            lineNumber: 369,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "submit",
                                    disabled: isSubmitting,
                                    className: "flex-1 bg-omran-teal hover:bg-omran-teal/90 text-white",
                                    children: isSubmitting ? "جاري الإرسال..." : "اشترك الآن"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                                    lineNumber: 379,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    variant: "outline",
                                    onClick: onClose,
                                    className: "flex-1 border-gray-300 text-gray-700 hover:bg-gray-50",
                                    children: "إلغاء"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                                    lineNumber: 386,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                            lineNumber: 378,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                    lineNumber: 368,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
            lineNumber: 355,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
        lineNumber: 354,
        columnNumber: 5
    }, this);
}
// Logo component
function OmranLogo({ isDark = false }) {
    const primaryColor = isDark ? "#DDAF37" : "#1B4848";
    const secondaryColor = isDark ? "#FFFFFF" : "#DDAF37";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center space-x-3 space-x-reverse",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40",
                className: "flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "4",
                        y: "20",
                        width: "12",
                        height: "16",
                        fill: primaryColor
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                        lineNumber: 409,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                        points: "4,20 10,12 16,20",
                        fill: secondaryColor
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                        lineNumber: 410,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "18",
                        y: "16",
                        width: "10",
                        height: "20",
                        fill: primaryColor
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                        lineNumber: 411,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                        points: "18,16 23,8 28,16",
                        fill: secondaryColor
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                        lineNumber: 412,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "30",
                        y: "24",
                        width: "8",
                        height: "12",
                        fill: primaryColor
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                        lineNumber: 413,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                        points: "30,24 34,18 38,24",
                        fill: secondaryColor
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                        lineNumber: 414,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "34",
                        cy: "30",
                        r: "1.5",
                        fill: secondaryColor
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                        lineNumber: 415,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "20",
                        y: "28",
                        width: "6",
                        height: "1",
                        fill: secondaryColor
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                        lineNumber: 416,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "6",
                        y: "32",
                        width: "8",
                        height: "1",
                        fill: secondaryColor
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                        lineNumber: 417,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                lineNumber: 408,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xl font-bold",
                        style: {
                            color: primaryColor
                        },
                        children: "عمران"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                        lineNumber: 420,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs font-medium tracking-wider",
                        style: {
                            color: secondaryColor
                        },
                        children: "OMRAN"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                        lineNumber: 421,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
                lineNumber: 419,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/omran/src/app/news/page.tsx",
        lineNumber: 407,
        columnNumber: 5
    }, this);
}
// Extended news data with proper content and images
const allNewsArticles = [
    {
        id: "1",
        title: "ارتفاع أسعار العقارات السكنية في الرياض بنسبة 12% خلال الربع الأول",
        summary: "شهدت العاصمة نمواً ملحوظاً في قطاع العقارات مدفوعاً بالطلب المتزايد والمشاريع الحكومية الجديدة والاستثمارات الضخمة في البنية التحتية مما أثر إيجاباً على السوق العقاري.",
        content: "أظهرت البيانات الحديثة الصادرة عن وزارة الإسكان ارتفاعاً كبيراً في أسعار العقارات السكنية بالرياض بنسبة 12% خلال الربع الأول من العام الحالي. هذا الارتفاع يأتي نتيجة للطلب المتزايد على العقارات السكنية والمشاريع التطويرية الجديدة في العاصمة. كما ساهمت رؤية المملكة 2030 ومشاريع البنية التحتية الضخمة في تعزيز الثقة في السوق العقاري وجذب الاستثمارات المحلية والأجنبية.",
        date: "22 سبتمبر 2025",
        category: "أخبار السوق",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&auto=format&q=80&fm=webp",
        author: "أحمد العبدالله",
        readTime: "5 دقائق"
    },
    {
        id: "2",
        title: "إطلاق مشروع نيوم السكني الجديد بتكلفة 15 مليار ريال",
        summary: "أعلنت شركة نيوم عن إطلاق مشروع سكني متكامل يضم 50 ألف وحدة سكنية بمواصفات عالمية ومرافق ترفيهية متطورة تواكب رؤية المملكة 2030.",
        content: "في خطوة تاريخية نحو تحقيق رؤية المملكة 2030، أعلنت شركة نيوم عن إطلاق مشروع سكني ضخم بتكلفة تقدر بـ 15 مليار ريال سعودي. المشروع سيضم 50 ألف وحدة سكنية متنوعة تشمل الفلل والشقق والمنازل التاونهاوس، بالإضافة إلى مرافق ترفيهية وتعليمية وصحية متطورة. المشروع مصمم وفقاً لأعلى المعايير البيئية والتقنية ويهدف إلى استيعاب نمو السكان المتوقع في المنطقة.",
        date: "21 سبتمبر 2025",
        category: "مشاريع جديدة",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop&auto=format&q=80&fm=webp",
        author: "فاطمة المطيري",
        readTime: "7 دقائق"
    },
    {
        id: "3",
        title: "تحليل: توقعات نمو الاستثمار العقاري في المملكة لعام 2025",
        summary: "يتوقع الخبراء نمو الاستثمار العقاري بنسبة 18% مع تطبيق رؤية 2030 ومشاريع البنية التحتية الضخمة والإصلاحات الاقتصادية الجديدة.",
        content: "تشير التوقعات الاقتصادية إلى نمو قوي في قطاع الاستثمار العقاري بنسبة تصل إلى 18% خلال عام 2025. هذا النمو مدفوع بعدة عوامل رئيسية منها مشاريع رؤية المملكة 2030، والاستثمارات الضخمة في البنية التحتية، وإطلاق مشاريع الترفيه والسياحة الكبرى. كما تساهم التسهيلات الحكومية الجديدة للمستثمرين الأجانب في جذب رؤوس أموال إضافية للسوق العقاري المحلي.",
        date: "20 سبتمبر 2025",
        category: "تحليلات",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop&auto=format&q=80&fm=webp",
        author: "خالد الشهراني",
        readTime: "6 دقائق"
    },
    {
        id: "4",
        title: "افتتاح أكبر مجمع تسوق في جدة بمساحة 500 ألف متر مربع",
        summary: "شهدت جدة افتتاح مجمع التسوق الأكبر في المنطقة الغربية، والذي يضم أكثر من 800 متجر ومطعم ومرافق ترفيهية عالمية.",
        content: "احتفلت مدينة جدة بافتتاح أكبر مجمع تسوق في المنطقة الغربية بمساحة إجمالية تبلغ 500 ألف متر مربع. المجمع الجديد يضم أكثر من 800 متجر ومطعم، بالإضافة إلى مرافق ترفيهية متطورة تشمل دور السينما وألعاب الأطفال ومناطق الطعام الراقية. هذا المشروع الضخم سيساهم في تعزيز القطاع التجاري وخلق آلاف الوظائف الجديدة.",
        date: "19 سبتمبر 2025",
        category: "مشاريع جديدة",
        image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=600&h=400&fit=crop&auto=format&q=80&fm=webp",
        author: "سارة القحطاني",
        readTime: "4 دقائق"
    },
    {
        id: "5",
        title: "صندوق الاستثمارات العامة يطلق مبادرة للاستثمار العقاري بـ 50 مليار ريال",
        summary: "أعلن صندوق الاستثمارات العامة عن مبادرة جديدة للاستثمار في المشاريع العقارية السكنية والتجارية بقيمة 50 مليار ريال.",
        content: "في إطار جهود تنويع الاقتصاد وتحقيق رؤية المملكة 2030، أطلق صندوق الاستثمارات العامة مبادرة استثمارية ضخمة بقيمة 50 مليار ريال تستهدف تطوير المشاريع العقارية المتنوعة. المبادرة تشمل تطوير المجمعات السكنية والمراكز التجارية والمكاتب الإدارية في مختلف مناطق المملكة، مما سيساهم في تلبية الطلب المتزايد على العقارات وخلق فرص استثمارية جديدة.",
        date: "18 سبتمبر 2025",
        category: "استثمار",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&auto=format&q=80&fm=webp",
        author: "محمد العتيبي",
        readTime: "8 دقائق"
    },
    {
        id: "6",
        title: "تقرير: الطلب على العقارات الفاخرة يرتفع 25% في الرياض",
        summary: "أظهر تقرير حديث ارتفاعاً كبيراً في الطلب على العقارات الفاخرة والفلل في أحياء الرياض الراقية مدفوعاً بنمو الدخل والاستثمارات الجديدة.",
        content: "كشف تقرير السوق العقاري الربعي عن ارتفاع الطلب على العقارات الفاخرة في العاصمة بنسبة 25% مقارنة بالعام الماضي. هذا الارتفاع يركز بشكل خاص على الفلل في أحياء النرجس والعليا والملقا. الخبراء يربطون هذا النمو بزيادة الدخل للطبقة الوسطى العليا وجذب المواهب العالمية للعمل في المملكة ضمن مشاريع رؤية 2030.",
        date: "17 سبتمبر 2025",
        category: "أخبار السوق",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop&auto=format&q=80&fm=webp",
        author: "نورا الرشيد",
        readTime: "5 دقائق"
    },
    {
        id: "7",
        title: "البنك المركزي يخفض معدلات الفائدة لدعم القروض العقارية",
        summary: "قرر البنك المركزي السعودي تخفيض معدلات الفائدة بهدف تحفيز الإقراض العقاري وتسهيل الحصول على التمويل للمواطنين.",
        content: "أعلن البنك المركزي السعودي عن قرار تخفيض معدلات الفائدة الأساسية بمقدار 0.5% لتصل إلى 4.75%، وذلك في إطار جهود دعم القطاع العقاري وتسهيل الحصول على القروض السكنية للمواطنين. هذا القرار متوقع أن يساهم في زيادة الطلب على العقارات وتحفيز النشاط الاقتصادي في القطاع، خاصة مع برامج الدعم الحكومية الأخرى مثل برنامج سكني.",
        date: "16 سبتمبر 2025",
        category: "أخبار السوق",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&auto=format&q=80&fm=webp",
        author: "عبدالعزيز الدوسري",
        readTime: "4 دقائق"
    },
    {
        id: "8",
        title: "مشروع القدية يعلن عن تطوير 30 ألف وحدة سكنية جديدة",
        summary: "كشفت شركة القدية للاستثمار عن خطط لتطوير 30 ألف وحدة سكنية متنوعة ضمن مدينة القدية الترفيهية بتصاميم عصرية ومرافق متكاملة.",
        content: "أعلنت شركة القدية للاستثمار عن مرحلة جديدة من التطوير تتضمن بناء 30 ألف وحدة سكنية متنوعة تشمل الشقق والفلل والمنازل التاونهاوس. هذا المشروع السكني سيكون جزءاً من مدينة القدية الترفيهية ويهدف إلى توفير بيئة سكنية متكاملة مع مرافق ترفيهية وتعليمية وصحية عالمية الجودة. المشروع متوقع أن يكتمل على عدة مراحل خلال السنوات القادمة.",
        date: "15 سبتمبر 2025",
        category: "مشاريع جديدة",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop&auto=format&q=80&fm=webp",
        author: "ريم العنزي",
        readTime: "6 دقائق"
    },
    {
        id: "9",
        title: "دراسة: العقارات التجارية تحقق عوائد استثمارية تصل إلى 8% سنوياً",
        summary: "أظهرت دراسة حديثة أن الاستثمار في العقارات التجارية يحقق عوائد مجزية تصل إلى 8% سنوياً مع توقعات بنمو إضافي.",
        content: "كشفت دراسة أجراها معهد الاستثمار العقاري السعودي أن العقارات التجارية تحقق عوائد استثمارية قوية تتراوح بين 6-8% سنوياً. الدراسة شملت المراكز التجارية والمكاتب الإدارية والمستودعات في المدن الرئيسية. الخبراء يتوقعون استمرار هذا الأداء القوي مدفوعاً بنمو القطاعات الاقتصادية المختلفة والتوسع في الأنشطة التجارية.",
        date: "14 سبتمبر 2025",
        category: "تحليلات",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format&q=80&fm=webp",
        author: "حسام البلوي",
        readTime: "7 دقائق"
    },
    {
        id: "10",
        title: "إطلاق منصة رقمية جديدة لتسهيل المعاملات العقارية",
        summary: "أطلقت وزارة الإسكان منصة رقمية متطورة تهدف إلى تسهيل وتسريع المعاملات العقارية وتوفير الخدمات الحكومية إلكترونياً.",
        content: "في إطار التحول الرقمي وتحسين الخدمات الحكومية، أطلقت وزارة الإسكان منصة رقمية جديدة تسمح بإنجاز المعاملات العقارية إلكترونياً. المنصة توفر خدمات متنوعة تشمل نقل الملكية والرهن العقاري وإصدار الصكوك، مما يوفر الوقت والجهد على المواطنين والمستثمرين. هذه المبادرة جزء من جهود المملكة لرقمنة الخدمات الحكومية وتحسين بيئة الأعمال.",
        date: "13 سبتمبر 2025",
        category: "تحليلات",
        image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=600&h=400&fit=crop&auto=format&q=80&fm=webp",
        author: "لينا الغامدي",
        readTime: "5 دقائق"
    }
];
}),
];

//# sourceMappingURL=OneDrive_Desktop_omran_src_d347b65e._.js.map