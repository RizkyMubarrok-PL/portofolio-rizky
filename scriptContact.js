import { gsap } from "./node_modules/gsap/index.js";
import { TextPlugin } from "./node_modules/gsap/TextPlugin.js";

gsap.registerPlugin(TextPlugin);

let introAbout = gsap.timeline();

introAbout
    .to("#welcome-text", {
        text: { value: "rizkymubarrok.dev/contact", speed: 1 },
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
        text: { value: 'CONTACT', speed: 1 },
        duration: 1,
        ease: "power2.inOut"
    })
    .to('#content-header', {
        text: { value: 'CONTACT ME ON', speed: 1 },
        duration: 1,
        ease: "power2.inOut"
    })
    .to('#content-email', {
        text: { value: 'rizkymubarrok.pro@gmail.com', speed: 1 },
        duration: 1,
        ease: "power2.inOut"
    })
    .to('#content-wa', {
        text: { value: 'or maybe WhatsApp me <b>+62 895 3649 28040</b>', speed: 1 },
        duration: 1,
        ease: "power2.inOut"
    })