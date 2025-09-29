(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Desktop/omran/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/omran/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/omran/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/omran/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/omran/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/omran/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/omran/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/omran/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/omran/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
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
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = (param, ref)=>{
    let { className, variant, size, asChild = false, ...props } = param;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
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
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/omran/src/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/omran/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/omran/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/omran/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = (param, ref)=>{
    let { className, type, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/omran/src/components/ui/input.tsx",
        lineNumber: 10,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/omran/src/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authAPI",
    ()=>authAPI,
    "getAuthToken",
    ()=>getAuthToken,
    "newsAPI",
    ()=>newsAPI,
    "projectsAPI",
    ()=>projectsAPI,
    "removeAuthToken",
    ()=>removeAuthToken,
    "setAuthToken",
    ()=>setAuthToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/omran/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:3001") || 'http://localhost:3001';
const getAuthToken = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return localStorage.getItem('omran_admin_token');
    }
    //TURBOPACK unreachable
    ;
};
const setAuthToken = (token)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        localStorage.setItem('omran_admin_token', token);
    }
};
const removeAuthToken = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        localStorage.removeItem('omran_admin_token');
    }
};
// Generic API call function
async function apiCall(endpoint) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const token = getAuthToken();
    const config = {
        headers: {
            'Content-Type': 'application/json',
            ...token && {
                'Authorization': "Bearer ".concat(token)
            },
            ...options.headers
        },
        ...options
    };
    const response = await fetch("".concat(API_BASE_URL).concat(endpoint), config);
    if (!response.ok) {
        const error = await response.json().catch(()=>({
                error: 'An error occurred'
            }));
        throw new Error(error.error || error.message || "HTTP ".concat(response.status));
    }
    return response.json();
}
const authAPI = {
    login: async (email)=>{
        const response = await apiCall('/api/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                email
            })
        });
        if (response.token) {
            setAuthToken(response.token);
        }
        return response;
    },
    verify: async ()=>{
        return apiCall('/api/auth/verify');
    },
    logout: async ()=>{
        removeAuthToken();
        return apiCall('/api/auth/logout', {
            method: 'POST'
        });
    }
};
const newsAPI = {
    getAll: async ()=>{
        return apiCall('/api/news');
    },
    getById: async (id)=>{
        return apiCall("/api/news/".concat(id));
    },
    create: async (data)=>{
        return apiCall('/api/news', {
            method: 'POST',
            body: JSON.stringify(data)
        });
    },
    update: async (id, data)=>{
        return apiCall("/api/news/".concat(id), {
            method: 'PUT',
            body: JSON.stringify(data)
        });
    },
    delete: async (id)=>{
        return apiCall("/api/news/".concat(id), {
            method: 'DELETE'
        });
    }
};
const projectsAPI = {
    getAll: async ()=>{
        return apiCall('/api/projects');
    },
    getById: async (id)=>{
        return apiCall("/api/projects/".concat(id));
    },
    create: async (data)=>{
        return apiCall('/api/projects', {
            method: 'POST',
            body: JSON.stringify(data)
        });
    },
    update: async (id, data)=>{
        return apiCall("/api/projects/".concat(id), {
            method: 'PUT',
            body: JSON.stringify(data)
        });
    },
    delete: async (id)=>{
        return apiCall("/api/projects/".concat(id), {
            method: 'DELETE'
        });
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/omran/src/components/admin/AdminLogin.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminLogin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/omran/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/omran/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/omran/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/omran/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/omran/src/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AdminLogin(param) {
    let { onLoginSuccess } = param;
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleLogin = async (e)=>{
        e.preventDefault();
        if (!email) {
            setError("يرجى إدخال البريد الإلكتروني");
            return;
        }
        setIsLoading(true);
        setError("");
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authAPI"].login(email);
            onLoginSuccess(response.admin);
        } catch (error) {
            console.error("Login error:", error);
            setError(error instanceof Error ? error.message : "فشل في تسجيل الدخول");
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-omran-light flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow-lg p-8 w-full max-w-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-omran-teal mb-2",
                            children: "لوحة تحكم الإدارة"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/components/admin/AdminLogin.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "تسجيل الدخول لإدارة محتوى مجلة عمران"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/components/admin/AdminLogin.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/omran/src/components/admin/AdminLogin.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleLogin,
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "email",
                                    className: "block text-sm font-medium text-gray-700 mb-2 text-right",
                                    children: "البريد الإلكتروني للمدير"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/components/admin/AdminLogin.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "email",
                                    type: "email",
                                    value: email,
                                    onChange: (e)=>setEmail(e.target.value),
                                    placeholder: "أدخل البريد الإلكتروني",
                                    className: "text-right",
                                    dir: "rtl",
                                    disabled: isLoading
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/components/admin/AdminLogin.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500 mt-1 text-right",
                                    children: "فقط المديرون المسجلون يمكنهم الوصول"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/components/admin/AdminLogin.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/components/admin/AdminLogin.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-center",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/components/admin/AdminLogin.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "submit",
                            disabled: isLoading,
                            className: "w-full bg-omran-teal hover:bg-omran-teal/90 text-white py-3",
                            children: isLoading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/components/admin/AdminLogin.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/omran/src/components/admin/AdminLogin.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 text-center text-xs text-gray-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "المديرون المصرحون:"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/components/admin/AdminLogin.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "chedibaaka.pro@gmail.com"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/components/admin/AdminLogin.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "hussam@sauragency.com"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/components/admin/AdminLogin.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "hussambaaka@gmail.com"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/components/admin/AdminLogin.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/omran/src/components/admin/AdminLogin.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/omran/src/components/admin/AdminLogin.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/omran/src/components/admin/AdminLogin.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(AdminLogin, "Y2i9H//XD710kWsGk7Fs4tyosNw=");
_c = AdminLogin;
var _c;
__turbopack_context__.k.register(_c, "AdminLogin");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/omran/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/omran/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/omran/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$components$2f$admin$2f$AdminLogin$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/omran/src/components/admin/AdminLogin.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/omran/src/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AdminPage() {
    _s();
    const [admin, setAdmin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('dashboard');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Check if user is already logged in
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminPage.useEffect": ()=>{
            const checkAuth = {
                "AdminPage.useEffect.checkAuth": async ()=>{
                    try {
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authAPI"].verify();
                        setAdmin(response.admin);
                    } catch (error) {
                        console.log('No valid admin session');
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["AdminPage.useEffect.checkAuth"];
            checkAuth();
        }
    }["AdminPage.useEffect"], []);
    const handleLoginSuccess = (adminData)=>{
        setAdmin(adminData);
    };
    const handleLogout = async ()=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authAPI"].logout();
            setAdmin(null);
            setActiveTab('dashboard');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };
    // Show loading while checking authentication
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-omran-light flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-omran-teal mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "جاري التحقق من صحة تسجيل الدخول..."
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, this);
    }
    // Show login if not authenticated
    if (!admin) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$components$2f$admin$2f$AdminLogin$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onLoginSuccess: handleLoginSuccess
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
            lineNumber: 63,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-omran-light",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-white shadow-sm border-b",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-4 space-x-reverse",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-bold text-omran-teal",
                                        children: "لوحة تحكم الإدارة"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-500",
                                        children: "|"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: [
                                            "مرحباً، ",
                                            admin.name || admin.email
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleLogout,
                                variant: "outline",
                                className: "border-red-500 text-red-500 hover:bg-red-500 hover:text-white",
                                children: "تسجيل الخروج"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow-sm mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-b border-gray-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "flex space-x-8 space-x-reverse px-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab('dashboard'),
                                        className: "py-4 px-1 border-b-2 font-medium text-sm ".concat(activeTab === 'dashboard' ? 'border-omran-teal text-omran-teal' : 'border-transparent text-gray-500 hover:text-gray-700'),
                                        children: "الرئيسية"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab('news'),
                                        className: "py-4 px-1 border-b-2 font-medium text-sm ".concat(activeTab === 'news' ? 'border-omran-teal text-omran-teal' : 'border-transparent text-gray-500 hover:text-gray-700'),
                                        children: "إدارة الأخبار"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab('projects'),
                                        className: "py-4 px-1 border-b-2 font-medium text-sm ".concat(activeTab === 'projects' ? 'border-omran-teal text-omran-teal' : 'border-transparent text-gray-500 hover:text-gray-700'),
                                        children: "إدارة المشاريع"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            activeTab === 'dashboard' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardOverview, {}, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                lineNumber: 129,
                                columnNumber: 41
                            }, this),
                            activeTab === 'news' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EnhancedNewsManager, {}, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                lineNumber: 130,
                                columnNumber: 36
                            }, this),
                            activeTab === 'projects' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EnhancedProjectsManager, {}, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                lineNumber: 131,
                                columnNumber: 40
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(AdminPage, "elPQmd6Pc6tLxyaIIMhFDAA6zmg=");
_c = AdminPage;
// Dashboard Overview Component
function DashboardOverview() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow-sm p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-bold text-omran-teal mb-4",
                    children: "مرحباً بك في لوحة التحكم"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 mb-6",
                    children: "يمكنك من هنا إدارة محتوى مجلة عمران، إضافة وتعديل وحذف الأخبار والمشاريع العقارية."
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-omran-light p-6 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-omran-teal mb-2",
                                    children: "إدارة الأخبار"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 mb-4",
                                    children: "إدارة شاملة للأخبار العقارية"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500",
                                    children: [
                                        "• إضافة مقالات جديدة",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                            lineNumber: 153,
                                            columnNumber: 35
                                        }, this),
                                        "• تحرير المحتوى الموجود",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                            lineNumber: 154,
                                            columnNumber: 38
                                        }, this),
                                        "• حذف الأخبار غير المرغوبة",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                            lineNumber: 155,
                                            columnNumber: 41
                                        }, this),
                                        "• نشر أو إخفاء الأخبار"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-omran-light p-6 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-omran-teal mb-2",
                                    children: "إدارة المشاريع"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 mb-4",
                                    children: "إدارة شاملة للمشاريع العقارية"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500",
                                    children: [
                                        "• إضافة مشاريع جديدة",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                            lineNumber: 164,
                                            columnNumber: 35
                                        }, this),
                                        "• تحديث تفاصيل المشاريع",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                            lineNumber: 165,
                                            columnNumber: 38
                                        }, this),
                                        "• حذف المشاريع القديمة",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                            lineNumber: 166,
                                            columnNumber: 37
                                        }, this),
                                        "• إدارة الصور والأسعار"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
            lineNumber: 142,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
        lineNumber: 141,
        columnNumber: 5
    }, this);
}
_c1 = DashboardOverview;
// Enhanced News Manager Component
function EnhancedNewsManager() {
    _s1();
    const [news, setNews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingNews, setEditingNews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        summary: "",
        content: "",
        category: "أخبار السوق"
    });
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [successMessage, setSuccessMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Load news on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EnhancedNewsManager.useEffect": ()=>{
            loadNews();
        }
    }["EnhancedNewsManager.useEffect"], []);
    const loadNews = async ()=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newsAPI"].getAll();
            setNews(response.news || []);
        } catch (error) {
            console.error("Failed to load news:", error);
            setError("فشل في تحميل الأخبار");
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!formData.title || !formData.summary || !formData.content) {
            setError("جميع الحقول مطلوبة");
            return;
        }
        setIsLoading(true);
        setError("");
        try {
            if (editingNews) {
                // Update existing news
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newsAPI"].update(editingNews.id, formData);
                setNews(news.map((item)=>item.id === editingNews.id ? response : item));
                setSuccessMessage("تم تحديث الخبر بنجاح!");
                setEditingNews(null);
            } else {
                // Create new news
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newsAPI"].create(formData);
                setNews([
                    response,
                    ...news
                ]);
                setSuccessMessage("تم إضافة الخبر بنجاح!");
            }
            resetForm();
            setShowForm(false);
        } catch (error) {
            setError(error instanceof Error ? error.message : "فشل في حفظ الخبر");
        } finally{
            setIsLoading(false);
        }
    };
    const handleEdit = (newsItem)=>{
        setEditingNews(newsItem);
        setFormData({
            title: newsItem.title,
            summary: newsItem.summary,
            content: newsItem.content,
            category: newsItem.category
        });
        setShowForm(true);
    };
    const handleDelete = async (newsId)=>{
        if (!window.confirm("هل أنت متأكد من حذف هذا الخبر؟")) {
            return;
        }
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newsAPI"].delete(newsId);
            setNews(news.filter((item)=>item.id !== newsId));
            setSuccessMessage("تم حذف الخبر بنجاح!");
        } catch (error) {
            setError("فشل في حذف الخبر");
        }
    };
    const resetForm = ()=>{
        setFormData({
            title: "",
            summary: "",
            content: "",
            category: "أخبار السوق"
        });
        setEditingNews(null);
        setError("");
    };
    const handleCancelEdit = ()=>{
        resetForm();
        setShowForm(false);
    };
    // Clear success message after 3 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EnhancedNewsManager.useEffect": ()=>{
            if (successMessage) {
                const timer = setTimeout({
                    "EnhancedNewsManager.useEffect.timer": ()=>setSuccessMessage("")
                }["EnhancedNewsManager.useEffect.timer"], 3000);
                return ({
                    "EnhancedNewsManager.useEffect": ()=>clearTimeout(timer)
                })["EnhancedNewsManager.useEffect"];
            }
        }
    }["EnhancedNewsManager.useEffect"], [
        successMessage
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow-sm p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-omran-teal",
                            children: "إدارة الأخبار"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                            lineNumber: 288,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: ()=>setShowForm(!showForm),
                            className: "bg-omran-teal hover:bg-omran-teal/90 text-white",
                            children: showForm ? "إلغاء" : "إضافة خبر جديد"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                            lineNumber: 289,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                    lineNumber: 287,
                    columnNumber: 9
                }, this),
                successMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-md mb-4",
                    children: successMessage
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                    lineNumber: 299,
                    columnNumber: 11
                }, this),
                showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-4 mb-6 p-4 border rounded-lg bg-gray-50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold text-omran-teal",
                            children: editingNews ? "تحرير الخبر" : "إضافة خبر جديد"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                            lineNumber: 307,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1 text-right",
                                    children: "العنوان"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                    lineNumber: 312,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: formData.title,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            title: e.target.value
                                        }),
                                    className: "w-full px-3 py-2 border border-gray-300 rounded-md text-right",
                                    dir: "rtl",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                    lineNumber: 313,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                            lineNumber: 311,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1 text-right",
                                    children: "الفئة"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                    lineNumber: 324,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: formData.category,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            category: e.target.value
                                        }),
                                    className: "w-full px-3 py-2 border border-gray-300 rounded-md text-right",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "أخبار السوق",
                                            children: "أخبار السوق"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                            lineNumber: 330,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "مشاريع جديدة",
                                            children: "مشاريع جديدة"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                            lineNumber: 331,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "تحليلات",
                                            children: "تحليلات"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                            lineNumber: 332,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "استثمار",
                                            children: "استثمار"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                            lineNumber: 333,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                    lineNumber: 325,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                            lineNumber: 323,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1 text-right",
                                    children: "الملخص"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                    lineNumber: 338,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: formData.summary,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            summary: e.target.value
                                        }),
                                    className: "w-full px-3 py-2 border border-gray-300 rounded-md text-right",
                                    rows: 3,
                                    dir: "rtl",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                    lineNumber: 339,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                            lineNumber: 337,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1 text-right",
                                    children: "المحتوى"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                    lineNumber: 350,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: formData.content,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            content: e.target.value
                                        }),
                                    className: "w-full px-3 py-2 border border-gray-300 rounded-md text-right",
                                    rows: 6,
                                    dir: "rtl",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                    lineNumber: 351,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                            lineNumber: 349,
                            columnNumber: 13
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                            lineNumber: 362,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "submit",
                                    disabled: isLoading,
                                    className: "bg-omran-teal hover:bg-omran-teal/90 text-white",
                                    children: isLoading ? "جاري الحفظ..." : editingNews ? "تحديث الخبر" : "إضافة الخبر"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                    lineNumber: 368,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    variant: "outline",
                                    onClick: handleCancelEdit,
                                    children: "إلغاء"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                    lineNumber: 375,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                            lineNumber: 367,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                    lineNumber: 306,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-omran-teal mb-4",
                            children: [
                                "الأخبار المحفوظة (",
                                news.length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                            lineNumber: 388,
                            columnNumber: 11
                        }, this),
                        news.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 text-center py-8",
                            children: "لا توجد أخبار محفوظة"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                            lineNumber: 390,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: news.map((article)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border border-gray-200 rounded-lg p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-semibold text-omran-teal",
                                                        children: article.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                                        lineNumber: 397,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-600 mt-1",
                                                        children: article.summary
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                                        lineNumber: 398,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-gray-500 mt-2",
                                                        children: [
                                                            article.category,
                                                            " • ",
                                                            new Date(article.createdAt).toLocaleDateString('ar-SA')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                                        lineNumber: 399,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                                lineNumber: 396,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2 ml-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        onClick: ()=>handleEdit(article),
                                                        variant: "outline",
                                                        size: "sm",
                                                        className: "text-blue-600 border-blue-600 hover:bg-blue-50",
                                                        children: "تحرير"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                                        lineNumber: 404,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        onClick: ()=>handleDelete(article.id),
                                                        variant: "outline",
                                                        size: "sm",
                                                        className: "text-red-600 border-red-600 hover:bg-red-50",
                                                        children: "حذف"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                                        lineNumber: 412,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                                lineNumber: 403,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                        lineNumber: 395,
                                        columnNumber: 19
                                    }, this)
                                }, article.id, false, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                    lineNumber: 394,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                            lineNumber: 392,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                    lineNumber: 387,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
            lineNumber: 286,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
        lineNumber: 285,
        columnNumber: 5
    }, this);
}
_s1(EnhancedNewsManager, "LCMeYmhVHYA0A5B/aYa7JxTBxsk=");
_c2 = EnhancedNewsManager;
// Enhanced Projects Manager Component  
function EnhancedProjectsManager() {
    _s2();
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingProject, setEditingProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        location: "",
        price: "",
        type: "سكني",
        description: ""
    });
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [successMessage, setSuccessMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Load projects on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EnhancedProjectsManager.useEffect": ()=>{
            loadProjects();
        }
    }["EnhancedProjectsManager.useEffect"], []);
    const loadProjects = async ()=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectsAPI"].getAll();
            setProjects(response.projects || []);
        } catch (error) {
            console.error("Failed to load projects:", error);
            setError("فشل في تحميل المشاريع");
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!formData.title || !formData.location || !formData.price) {
            setError("العنوان والموقع والسعر مطلوبة");
            return;
        }
        setIsLoading(true);
        setError("");
        try {
            if (editingProject) {
                // Update existing project
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectsAPI"].update(editingProject.id, formData);
                setProjects(projects.map((item)=>item.id === editingProject.id ? response : item));
                setSuccessMessage("تم تحديث المشروع بنجاح!");
                setEditingProject(null);
            } else {
                // Create new project
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectsAPI"].create(formData);
                setProjects([
                    response,
                    ...projects
                ]);
                setSuccessMessage("تم إضافة المشروع بنجاح!");
            }
            resetForm();
            setShowForm(false);
        } catch (error) {
            setError(error instanceof Error ? error.message : "فشل في حفظ المشروع");
        } finally{
            setIsLoading(false);
        }
    };
    const handleEdit = (project)=>{
        setEditingProject(project);
        setFormData({
            title: project.title,
            location: project.location,
            price: project.price,
            type: project.type,
            description: project.description || ""
        });
        setShowForm(true);
    };
    const handleDelete = async (projectId)=>{
        if (!window.confirm("هل أنت متأكد من حذف هذا المشروع؟")) {
            return;
        }
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectsAPI"].delete(projectId);
            setProjects(projects.filter((item)=>item.id !== projectId));
            setSuccessMessage("تم حذف المشروع بنجاح!");
        } catch (error) {
            setError("فشل في حذف المشروع");
        }
    };
    const resetForm = ()=>{
        setFormData({
            title: "",
            location: "",
            price: "",
            type: "سكني",
            description: ""
        });
        setEditingProject(null);
        setError("");
    };
    const handleCancelEdit = ()=>{
        resetForm();
        setShowForm(false);
    };
    // Clear success message after 3 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EnhancedProjectsManager.useEffect": ()=>{
            if (successMessage) {
                const timer = setTimeout({
                    "EnhancedProjectsManager.useEffect.timer": ()=>setSuccessMessage("")
                }["EnhancedProjectsManager.useEffect.timer"], 3000);
                return ({
                    "EnhancedProjectsManager.useEffect": ()=>clearTimeout(timer)
                })["EnhancedProjectsManager.useEffect"];
            }
        }
    }["EnhancedProjectsManager.useEffect"], [
        successMessage
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow-sm p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-omran-teal",
                            children: "إدارة المشاريع"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                            lineNumber: 546,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: ()=>setShowForm(!showForm),
                            className: "bg-omran-teal hover:bg-omran-teal/90 text-white",
                            children: showForm ? "إلغاء" : "إضافة مشروع جديد"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                            lineNumber: 547,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                    lineNumber: 545,
                    columnNumber: 9
                }, this),
                successMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-md mb-4",
                    children: successMessage
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                    lineNumber: 557,
                    columnNumber: 11
                }, this),
                showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-4 mb-6 p-4 border rounded-lg bg-gray-50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold text-omran-teal",
                            children: editingProject ? "تحرير المشروع" : "إضافة مشروع جديد"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                            lineNumber: 565,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1 text-right",
                                            children: "اسم المشروع"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                            lineNumber: 571,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: formData.title,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    title: e.target.value
                                                }),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded-md text-right",
                                            dir: "rtl",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                            lineNumber: 572,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                    lineNumber: 570,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1 text-right",
                                            children: "الموقع"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                            lineNumber: 583,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: formData.location,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    location: e.target.value
                                                }),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded-md text-right",
                                            dir: "rtl",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                            lineNumber: 584,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                    lineNumber: 582,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                            lineNumber: 569,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1 text-right",
                                            children: "السعر"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                            lineNumber: 597,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: formData.price,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    price: e.target.value
                                                }),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded-md text-right",
                                            dir: "rtl",
                                            placeholder: "من 850,000 ريال",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                            lineNumber: 598,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                    lineNumber: 596,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1 text-right",
                                            children: "نوع المشروع"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                            lineNumber: 610,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: formData.type,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    type: e.target.value
                                                }),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded-md text-right",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "سكني",
                                                    children: "سكني"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                                    lineNumber: 616,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "تجاري",
                                                    children: "تجاري"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                                    lineNumber: 617,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "مجمع سكني",
                                                    children: "مجمع سكني"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                                    lineNumber: 618,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "فندقي",
                                                    children: "فندقي"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                                    lineNumber: 619,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                            lineNumber: 611,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                    lineNumber: 609,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                            lineNumber: 595,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1 text-right",
                                    children: "الوصف (اختياري)"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                    lineNumber: 625,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: formData.description,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            description: e.target.value
                                        }),
                                    className: "w-full px-3 py-2 border border-gray-300 rounded-md text-right",
                                    rows: 3,
                                    dir: "rtl",
                                    placeholder: "وصف تفصيلي للمشروع..."
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                    lineNumber: 626,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                            lineNumber: 624,
                            columnNumber: 13
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                            lineNumber: 637,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "submit",
                                    disabled: isLoading,
                                    className: "bg-omran-teal hover:bg-omran-teal/90 text-white",
                                    children: isLoading ? "جاري الحفظ..." : editingProject ? "تحديث المشروع" : "إضافة المشروع"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                    lineNumber: 643,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    variant: "outline",
                                    onClick: handleCancelEdit,
                                    children: "إلغاء"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                    lineNumber: 650,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                            lineNumber: 642,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                    lineNumber: 564,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-omran-teal mb-4",
                            children: [
                                "المشاريع المحفوظة (",
                                projects.length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                            lineNumber: 663,
                            columnNumber: 11
                        }, this),
                        projects.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 text-center py-8",
                            children: "لا توجد مشاريع محفوظة"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                            lineNumber: 665,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                            children: projects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border border-gray-200 rounded-lg p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold text-omran-teal mb-2",
                                            children: project.title
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                            lineNumber: 670,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600 mb-1",
                                            children: [
                                                "📍 ",
                                                project.location
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                            lineNumber: 671,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-semibold text-omran-gold mb-2",
                                            children: project.price
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                            lineNumber: 672,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-500 mb-3",
                                            children: [
                                                project.type,
                                                " • ",
                                                new Date(project.createdAt).toLocaleDateString('ar-SA')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                            lineNumber: 673,
                                            columnNumber: 19
                                        }, this),
                                        project.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-600 mb-3 line-clamp-2",
                                            children: project.description
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                            lineNumber: 677,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    onClick: ()=>handleEdit(project),
                                                    variant: "outline",
                                                    size: "sm",
                                                    className: "flex-1 text-blue-600 border-blue-600 hover:bg-blue-50",
                                                    children: "تحرير"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                                    lineNumber: 680,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$omran$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    onClick: ()=>handleDelete(project.id),
                                                    variant: "outline",
                                                    size: "sm",
                                                    className: "flex-1 text-red-600 border-red-600 hover:bg-red-50",
                                                    children: "حذف"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                                    lineNumber: 688,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                            lineNumber: 679,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, project.id, true, {
                                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                                    lineNumber: 669,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                            lineNumber: 667,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
                    lineNumber: 662,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
            lineNumber: 544,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/omran/src/app/admin/page.tsx",
        lineNumber: 543,
        columnNumber: 5
    }, this);
}
_s2(EnhancedProjectsManager, "9PGxC7qUDfGbi+YODKgFOLql9Ds=");
_c3 = EnhancedProjectsManager;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "AdminPage");
__turbopack_context__.k.register(_c1, "DashboardOverview");
__turbopack_context__.k.register(_c2, "EnhancedNewsManager");
__turbopack_context__.k.register(_c3, "EnhancedProjectsManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive_Desktop_omran_src_3ec97eef._.js.map