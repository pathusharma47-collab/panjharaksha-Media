import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as Phone, c as MapPin, i as Play, l as ArrowUpRight, n as Users, o as MessageCircle, r as Star, s as Menu, t as X, u as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DPM1gHMc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var panjharaksha_wordmark_png_asset_default = {
	version: 1,
	asset_id: "55bfb73b-bc5a-4cad-8a6a-ce246f3f96a8",
	project_id: "029e75c9-7dcd-4f92-a698-b28acb9641d6",
	url: "/__l5e/assets-v1/55bfb73b-bc5a-4cad-8a6a-ce246f3f96a8/panjharaksha-wordmark.png",
	r2_key: "a/v1/029e75c9-7dcd-4f92-a698-b28acb9641d6/55bfb73b-bc5a-4cad-8a6a-ce246f3f96a8/panjharaksha-wordmark.png",
	original_filename: "panjharaksha-wordmark.png",
	size: 330366,
	content_type: "image/png",
	created_at: "2026-08-14T07:52:19Z"
};
var EMBLEM_URL = "/logo.png";
panjharaksha_wordmark_png_asset_default.url;
var NAV_LINKS = [
	{
		label: "Home",
		href: "/"
	},
	{
		label: "About",
		href: "/#about"
	},
	{
		label: "Services",
		href: "/services"
	},
	{
		label: "Studio",
		href: "/studio"
	},
	{
		label: "Our Work",
		href: "/portfolio"
	},
	{
		label: "Reviews",
		href: "/reviews"
	},
	{
		label: "Contact",
		href: "/#contact"
	}
];
var PHONE = "097906 90436";
var PHONE_TEL = "+919790690436";
var ADDRESS = "Shop No: 75, Subramaniam Rd, Near Pizza Hut, R.S. Puram, Coimbatore, Tamil Nadu 641002";
var MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Panjharaksha+Media+Subramaniam+Rd+R.S.+Puram+Coimbatore";
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.35em] text-gold",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-gold/60" }), children]
	});
}
function Waveform({ bars = 48, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `flex items-end gap-[3px] ${className}`,
		"aria-hidden": "true",
		children: Array.from({ length: bars }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "w-[3px] flex-1 origin-bottom rounded-full bg-gold/40 animate-wave",
			style: {
				height: `${18 + Math.abs(Math.sin(i * .7)) * 82}%`,
				animationDelay: `${i % 12 * .12}s`,
				animationDuration: `${1.4 + i % 5 * .18}s`
			}
		}, i))
	});
}
function SiteNav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-border bg-ink/85 backdrop-blur-xl" : "border-b border-transparent bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#home",
					className: "flex min-w-0 items-center gap-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: EMBLEM_URL,
						alt: "Panjharaksha Media emblem",
						className: "h-24 w-24 shrink-0 object-contain mix-blend-screen sm:h-32 sm:w-32"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-8 lg:flex",
					children: [NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "link-underline text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground",
						children: l.label
					}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#book",
						className: "border border-gold/50 px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:bg-gold hover:text-primary-foreground hover:shadow-[0_0_28px_-6px_var(--gold)]",
						children: "Book a Session"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpen((v) => !v),
					className: "justify-self-end text-gold lg:hidden",
					"aria-label": "Toggle menu",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-6 w-6" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-ink/95 px-6 py-6 backdrop-blur-xl lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-5",
				children: [NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "text-sm uppercase tracking-[0.25em] text-muted-foreground",
					children: l.label
				}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `tel:+919790690436`,
					className: "flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-gold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " Call the studio"]
				})]
			})
		})]
	});
}
var hero_studio_new_default = "/assets/hero-studio-new-yvr_SpTx.jpg";
var studio_workstation_default = "/assets/studio-workstation-DCy9YoT4.jpg";
var studio_mic_default = "/assets/studio-mic-OP8ayr3n.jpg";
var studio_monitors_default = "/assets/studio-monitors-WRgG-1wD.jpg";
var studio_panels_default = "/assets/studio-panels-CLXcNgnV.jpg";
var studio_lounge_default = "/assets/studio-lounge-B-J4CYLc.jpg";
var studio_console_default = "/assets/studio-console-D9PSoaYA.jpg";
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative min-h-[100svh] overflow-hidden bg-black",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-y-0 right-0 w-full lg:w-3/4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_studio_new_default,
						alt: "Panjharaksha Media post-production studio interior",
						width: 1920,
						height: 1088,
						className: "h-full w-full object-cover object-left"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-center px-5 pb-32 pt-32 lg:px-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl animate-rise",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xs font-semibold tracking-[0.2em] text-gold uppercase",
								children: "PANJHARAKSHA MEDIA"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-3 h-px w-12 bg-gold/60" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-[5rem]",
							children: [
								"WHERE SOUND",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"BECOMES ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gold",
									children: "EXPERIENCE."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-sm leading-relaxed text-gray-300 sm:text-base",
							children: "Professional post-production, recording and audio services crafted for artists, creators and storytellers."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#book",
								className: "flex items-center gap-3 rounded-md bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-black transition-all duration-300 hover:bg-gold/90",
								children: ["Book a Session ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#studio",
								className: "rounded-md border border-gold/30 px-8 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:border-gold hover:text-gold",
								children: "Explore Our Studio"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 flex flex-wrap items-center gap-8 text-sm text-gray-400",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-gold text-gold" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-white",
										children: "4.6"
									}),
									" Google Rating"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4 text-gold" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-white",
										children: "122"
									}),
									" Reviews"
								]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waveform, {
				bars: 64,
				className: "absolute bottom-0 left-0 h-16 w-full px-5 opacity-40 lg:px-10"
			})
		]
	});
}
function Intro() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "border-t border-border bg-background py-24 lg:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1400px] items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "group relative overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: studio_workstation_default,
					alt: "Music production workstation at Panjharaksha Media",
					loading: "lazy",
					width: 1200,
					height: 1504,
					className: "h-[420px] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105 lg:h-[620px]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "The Studio" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-7 font-display text-3xl font-semibold leading-tight text-foreground sm:text-5xl",
					children: [
						"Built for sound.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Designed for creators."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-lg leading-relaxed text-muted-foreground",
					children: "“Panjharaksha Media Productions is a professional post-production studio in R.S. Puram, Coimbatore, created to provide artists and creators with a focused environment to record, refine and bring their work to life.”"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-10 h-px w-40 gold-line" })
			] })]
		})
	});
}
var SERVICES = [
	{
		n: "01",
		name: "Recording",
		d: "Professional recording environment for vocal and musical performances.",
		img: studio_mic_default
	},
	{
		n: "02",
		name: "Music Production",
		d: "Shape musical ideas into polished productions.",
		img: studio_workstation_default
	},
	{
		n: "03",
		name: "Audio Editing",
		d: "Clean, refine and prepare recorded audio.",
		img: studio_console_default
	},
	{
		n: "04",
		name: "Mixing & Mastering",
		d: "Give your final track clarity, balance and professional finishing.",
		img: studio_monitors_default
	},
	{
		n: "05",
		name: "Post-Production",
		d: "Professional audio post-production support for creative projects.",
		img: studio_panels_default
	},
	{
		n: "06",
		name: "Media Production",
		d: "Production support for artists, creators and media projects.",
		img: studio_lounge_default
	}
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "border-t border-border bg-ink py-24 lg:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-5 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Services" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl",
					children: "WHAT WE DO"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 border-t border-border",
					children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#book",
						className: "group relative grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-5 overflow-hidden border-b border-border py-7 transition-colors duration-500 hover:bg-card/40 lg:grid-cols-[80px_minmax(0,1fr)_minmax(0,1fr)_auto] lg:gap-10 lg:py-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: s.img,
								alt: "",
								"aria-hidden": "true",
								loading: "lazy",
								className: "pointer-events-none absolute right-0 top-0 h-full w-1/3 object-cover opacity-0 transition-opacity duration-700 [mask-image:linear-gradient(to_left,black,transparent)] group-hover:opacity-25"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative font-display text-xs tracking-[0.3em] text-gold/70",
								children: s.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative min-w-0 font-display text-xl font-medium tracking-tight text-foreground transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl",
								children: s.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative col-span-3 text-sm leading-relaxed text-muted-foreground lg:col-span-1",
								children: s.d
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "relative h-5 w-5 shrink-0 text-gold/60 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold" })
						]
					}, s.n))
				})
			]
		})
	});
}
var GALLERY = [
	{
		src: studio_console_default,
		label: "Main Workstation",
		cls: "lg:col-span-2 h-[280px] lg:h-[420px]"
	},
	{
		src: studio_monitors_default,
		label: "Monitoring",
		cls: "h-[280px] lg:h-[420px]"
	},
	{
		src: studio_panels_default,
		label: "Acoustic Treatment",
		cls: "h-[300px] lg:h-[520px]"
	},
	{
		src: studio_mic_default,
		label: "Recording Environment",
		cls: "h-[300px] lg:h-[520px]"
	},
	{
		src: studio_lounge_default,
		label: "Seating & Ambience",
		cls: "h-[300px] lg:h-[520px]"
	}
];
function StudioShowcase() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "studio",
		className: "border-t border-border bg-background py-24 lg:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-5 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Gallery" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl",
					children: "INSIDE PANJHARAKSHA"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: GALLERY.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: `group relative overflow-hidden ${g.cls}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: g.src,
								alt: g.label,
								loading: "lazy",
								className: "h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.06]"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/40 transition-colors duration-500 group-hover:bg-ink/65" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "absolute inset-x-0 bottom-0 flex items-center justify-between p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs uppercase tracking-[0.25em] text-foreground/90",
									children: g.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "translate-y-2 text-[0.65rem] uppercase tracking-[0.3em] text-gold opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100",
									children: "View"
								})]
							})
						]
					}, g.label))
				})
			]
		})
	});
}
function BrandMoment() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden border-t border-border bg-ink py-28 lg:py-40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/25 blur-[130px] animate-glow" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto flex max-w-[1400px] flex-col items-center px-5 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: EMBLEM_URL,
					alt: "Panjharaksha Media emblem",
					loading: "lazy",
					className: "w-44 object-contain mix-blend-screen sm:w-56"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-8 font-display text-2xl font-semibold tracking-[0.28em] text-foreground sm:text-4xl",
					children: "PANJHARAKSHA MEDIA"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-[0.7rem] uppercase tracking-[0.4em] text-gold",
					children: "Professional Post-Production Studio"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 font-tamil text-sm text-muted-foreground",
					children: "பஞ்சரக்ஷ மீடியா புரொடக்ஷன்ஸ்"
				})
			]
		})]
	});
}
var EXPERIENCE = [
	{
		n: "01",
		t: "PROFESSIONAL ENVIRONMENT",
		d: "A dedicated space designed for focused creative work."
	},
	{
		n: "02",
		t: "CREATOR FRIENDLY",
		d: "A comfortable and supportive environment for artists and creators."
	},
	{
		n: "03",
		t: "ATTENTION TO DETAIL",
		d: "Every stage of the production process deserves precision."
	},
	{
		n: "04",
		t: "R.S. PURAM, COIMBATORE",
		d: "Conveniently located near Pizza Hut in R.S. Puram."
	}
];
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-border bg-background py-24 lg:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-5 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Why Panjharaksha" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl",
					children: "THE PANJHARAKSHA EXPERIENCE"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-px bg-border sm:grid-cols-2",
					children: EXPERIENCE.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group bg-background p-8 transition-colors duration-500 hover:bg-card/50 lg:p-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xs tracking-[0.3em] text-gold/70",
								children: e.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 font-display text-lg tracking-[0.15em] text-foreground",
								children: e.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4 h-px w-10 bg-gold/50 transition-all duration-500 group-hover:w-24" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-sm leading-relaxed text-muted-foreground",
								children: e.d
							})
						]
					}, e.n))
				})
			]
		})
	});
}
function AudioVisual() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden border-t border-border bg-ink py-24 lg:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-5 text-center lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Sound Design" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-6xl",
					children: "YOUR SOUND. YOUR STORY."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waveform, {
					bars: 72,
					className: "mx-auto mt-14 h-28 max-w-4xl opacity-70"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-10 h-px max-w-4xl gold-line" })
			]
		})
	});
}
var CATEGORIES = [
	"All",
	"Music",
	"Recording",
	"Audio",
	"Post Production",
	"Media"
];
var PROJECTS = [
	{
		title: "Project Slot 01",
		category: "Music",
		image: studio_console_default
	},
	{
		title: "Project Slot 02",
		category: "Recording",
		image: studio_mic_default
	},
	{
		title: "Project Slot 03",
		category: "Post Production",
		image: studio_panels_default
	},
	{
		title: "Project Slot 04",
		category: "Media",
		image: studio_lounge_default
	}
];
function Work() {
	const [active, setActive] = (0, import_react.useState)("All");
	const items = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		className: "border-t border-border bg-background py-24 lg:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-5 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Portfolio" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl",
					children: "SELECTED WORK"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex gap-6 overflow-x-auto pb-2",
					children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActive(c),
						className: `shrink-0 text-xs uppercase tracking-[0.25em] transition-colors ${active === c ? "text-gold" : "text-muted-foreground hover:text-foreground"}`,
						children: c
					}, c))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 lg:grid-cols-2",
					children: items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group relative h-[260px] overflow-hidden lg:h-[380px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: p.title,
								loading: "lazy",
								className: "h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-0 bottom-0 flex items-end justify-between p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg tracking-[0.12em] text-foreground",
									children: p.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-[0.65rem] uppercase tracking-[0.3em] text-gold",
									children: p.category
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/50 text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-primary-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4" })
								})]
							})
						]
					}, p.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-xs uppercase tracking-[0.25em] text-muted-foreground",
					children: "Project archive in progress"
				})
			]
		})
	});
}
var REVIEW_THEMES = [
	"Friendly service",
	"Professional approach",
	"Recording experience",
	"Quality of output",
	"Editing",
	"Studio ambience",
	"Technical knowledge"
];
function Reviews() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "reviews",
		className: "border-t border-border bg-ink py-24 lg:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1400px] gap-16 px-5 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-24 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-7xl font-semibold gold-text lg:text-8xl",
						children: "4.6"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "mb-3 h-7 w-7 fill-gold text-gold" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-[0.7rem] uppercase tracking-[0.35em] text-muted-foreground",
					children: "Google Rating"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-[0.7rem] uppercase tracking-[0.35em] text-gold",
					children: "122 Reviews"
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "What visitors mention" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 space-y-6",
					children: REVIEW_THEMES.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline gap-6 border-b border-border pb-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-xs tracking-[0.3em] text-gold/60",
							children: String(i + 1).padStart(2, "0")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl tracking-tight text-foreground sm:text-2xl",
							children: t
						})]
					}, t))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-sm text-muted-foreground",
					children: "Recurring themes from our Google reviews."
				})
			] })]
		})
	});
}
var PROJECT_TYPES = [
	"Recording",
	"Music Production",
	"Audio Editing",
	"Mixing & Mastering",
	"Post Production",
	"Media Production",
	"Other"
];
var WHATSAPP = "https://wa.me/919790690436";
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "border-t border-border bg-background py-24 lg:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-5 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Location" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-6xl",
					children: "COME CREATE WITH US."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-md text-lg leading-relaxed text-muted-foreground",
							children: ADDRESS
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${PHONE_TEL}`,
							className: "mt-8 inline-block font-display text-2xl tracking-[0.1em] text-gold",
							children: PHONE
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `tel:${PHONE_TEL}`,
									className: "flex items-center gap-2 bg-gold px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-shadow hover:shadow-[0_0_36px_-8px_var(--gold)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " Call the Studio"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: WHATSAPP,
									target: "_blank",
									rel: "noreferrer",
									className: "flex items-center gap-2 border border-border px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-gold/60 hover:text-gold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " WhatsApp"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: MAPS_URL,
									target: "_blank",
									rel: "noreferrer",
									className: "flex items-center gap-2 border border-border px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-gold/60 hover:text-gold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }), " Get Directions"]
								})
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative h-[320px] overflow-hidden border border-border lg:h-[420px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "Panjharaksha Media location map",
							src: "https://www.google.com/maps?q=Subramaniam%20Rd%2C%20R.S.%20Puram%2C%20Coimbatore%2C%20641002&output=embed",
							className: "h-full w-full grayscale-[0.7] invert-[0.92] hue-rotate-180 contrast-[0.9]",
							loading: "lazy"
						})
					})]
				})
			]
		})
	});
}
function Booking() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "book",
		className: "border-t border-border bg-ink py-24 lg:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-5 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Enquiry" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl",
					children: "BOOK YOUR SESSION"
				}),
				sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-14 border border-gold/40 p-10 text-center font-display text-xl text-gold",
					children: "Thank you. We’ll get back to you shortly."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-12 grid gap-6 sm:grid-cols-2",
					onSubmit: (e) => {
						e.preventDefault();
						setSent(true);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Name",
							name: "name",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Phone",
							name: "phone",
							type: "tel",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							name: "email",
							type: "email"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground",
								children: "Project Type"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								name: "projectType",
								className: "border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors focus:border-gold",
								defaultValue: "Recording",
								children: PROJECT_TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: t,
									className: "bg-ink",
									children: t
								}, t))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Preferred Date",
							name: "date",
							type: "date"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground",
								children: "Message"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "message",
								rows: 4,
								className: "mt-2 w-full resize-none border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors focus:border-gold"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "sm:col-span-2 mt-4 bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground transition-shadow hover:shadow-[0_0_40px_-8px_var(--gold)]",
							children: "Send Enquiry"
						})
					]
				})
			]
		})
	});
}
function Field({ label, name, type = "text", required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			name,
			type,
			required,
			className: "border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors focus:border-gold"
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-ink px-5 pb-28 pt-20 lg:px-10 lg:pb-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: EMBLEM_URL,
							alt: "Panjharaksha Media emblem",
							loading: "lazy",
							className: "w-24 object-contain mix-blend-screen"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 font-display text-lg tracking-[0.25em] text-foreground",
							children: "PANJHARAKSHA MEDIA"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[0.65rem] uppercase tracking-[0.35em] text-gold",
							children: "Professional Post-Production Studio"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm text-muted-foreground",
							children: "R.S. Puram, Coimbatore"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${PHONE_TEL}`,
							className: "text-sm text-muted-foreground hover:text-gold",
							children: PHONE
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "grid grid-cols-2 gap-x-12 gap-y-3 self-end",
						children: NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "link-underline text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground",
							children: l.label
						}, l.href))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-14 h-px w-full gold-line" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground",
					children: "© 2026 Panjharaksha Media Productions. All Rights Reserved."
				})
			]
		})
	});
}
function MobileBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-border bg-ink/95 backdrop-blur-xl lg:hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `tel:${PHONE_TEL}`,
				className: "py-4 text-center text-[0.65rem] uppercase tracking-[0.25em] text-foreground",
				children: "Call"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: WHATSAPP,
				target: "_blank",
				rel: "noreferrer",
				className: "border-x border-border py-4 text-center text-[0.65rem] uppercase tracking-[0.25em] text-foreground",
				children: "WhatsApp"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#book",
				className: "bg-gold py-4 text-center text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-primary-foreground",
				children: "Book"
			})
		]
	});
}
//#endregion
export { Experience as a, Intro as c, Services as d, SiteNav as f, Contact as i, MobileBar as l, Work as m, Booking as n, Footer as o, StudioShowcase as p, BrandMoment as r, Hero as s, AudioVisual as t, Reviews as u };
