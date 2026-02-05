import "./main.css";
import WebGL from "./webgl";
import { injectSpeedInsights } from '@vercel/speed-insights';
import { inject } from '@vercel/analytics';

injectSpeedInsights();
inject();

WebGL();

const root = document.documentElement;

function onScroll() {
  if (window.scrollY > 10) root.dataset.scroll = "true";
  else root.dataset.scroll = "false";
}
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });
