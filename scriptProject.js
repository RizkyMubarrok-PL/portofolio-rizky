import { gsap } from "./node_modules/gsap/index.js";
import { TextPlugin } from "./node_modules/gsap/TextPlugin.js";

gsap.registerPlugin(TextPlugin);

let introAbout = gsap.timeline();

introAbout
    .to("#welcome-text", {
        text: { value: "rizkymubarrok.dev/project", speed: 1 },
        duration: 2,
        ease: "power2.inOut"
    })
    .to("#welcome-text", {
        y: "2000%",
        opacity: 0,
        duration: 0.8,
        ease: "expo.in"
    })
    .to('.header', {
        duration: 0.6,
        y: 0,
        ease: "power2.out"
    })
    .to('.svg-container', {
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out'
    })
    .to('#page-name', {
        text: { value: 'PROJECT', speed: 0.5 },
        duration: 1,
        ease: "power2.inOut"
    })
    .to('#content-header', {
        text: { value: 'STILL ON PROGRESS', speed: 1 },
        duration: 1,
        ease: "power2.inOut"
    })
    .to('#content-github', {
        text: { value: 'Check my GitHub', speed: 1 },
        duration: 1,
        ease: "power2.inOut"
    })