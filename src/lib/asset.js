// Resolve a /public asset against the configured base ("/surbeck/" in prod, "/" in dev),
// so absolute paths don't break when the site is served from a subpath.
export const asset = (p) => `${import.meta.env.BASE_URL}${String(p).replace(/^\/+/, "")}`;
