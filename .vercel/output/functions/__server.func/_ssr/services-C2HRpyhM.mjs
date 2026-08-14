import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { d as Services, f as SiteNav, i as Contact, l as MobileBar, n as Booking, o as Footer, r as BrandMoment } from "./contact-DPM1gHMc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-C2HRpyhM.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background pt-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMoment, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Booking, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileBar, {})
		]
	});
}
//#endregion
export { ServicesPage as component };
