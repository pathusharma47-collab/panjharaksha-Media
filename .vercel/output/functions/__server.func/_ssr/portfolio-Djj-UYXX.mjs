import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { f as SiteNav, i as Contact, l as MobileBar, m as Work, n as Booking, o as Footer, t as AudioVisual } from "./contact-DPM1gHMc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portfolio-Djj-UYXX.js
var import_jsx_runtime = require_jsx_runtime();
function PortfolioPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background pt-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Work, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AudioVisual, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Booking, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileBar, {})
		]
	});
}
//#endregion
export { PortfolioPage as component };
