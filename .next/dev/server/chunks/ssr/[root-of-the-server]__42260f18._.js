module.exports = [
"[externals]/crypto [external] (crypto, cjs, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.resolve().then(() => {
        return parentImport("[externals]/crypto [external] (crypto, cjs)");
    });
});
}),
"[project]/Desktop/SIP-Buddy/node_modules/https-proxy-agent/dist/index.js [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/[root-of-the-server]__32416c18._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/Desktop/SIP-Buddy/node_modules/https-proxy-agent/dist/index.js [app-ssr] (ecmascript)");
    });
});
}),
"[project]/Desktop/SIP-Buddy/node_modules/node-fetch/src/index.js [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/98ee6_node-fetch_src_utils_multipart-parser_bb286722.js",
  "server/chunks/ssr/98ee6_989f66b6._.js",
  "server/chunks/ssr/[root-of-the-server]__561934d4._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/Desktop/SIP-Buddy/node_modules/node-fetch/src/index.js [app-ssr] (ecmascript)");
    });
});
}),
];