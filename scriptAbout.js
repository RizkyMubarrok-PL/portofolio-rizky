import { gsap } from "./node_modules/gsap/index.js";
import { TextPlugin } from "./node_modules/gsap/TextPlugin.js";

gsap.registerPlugin(TextPlugin);

let introAbout = gsap.timeline();

introAbout
    .to("#welcome-text", {
        text: { value: "rizkymubarrok.dev/about", speed: 1 },
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
        text: { value: 'ABOUT ME', speed: 1 },
        duration: 1,
        ease: "power2.inOut"
    })
    .to('#content-header', {
        text: { value: "I'm passionate about programming and always eager to learn more and collaborate on real-world solutions.", speed: 1.5 },
        duration: 2.5,
        ease: "power2.inOut"
    })
    .to('#content-exp', {
        text: { value: "A Backend Developer with 6 months of internship experience, currently studying Software Engineering. I focus on building scalable applications and enjoy learning new technologies.", speed: 2.5 },
        duration: 2.5,
        ease: "power2.inOut"
    }, "<")
    .to('#content-tech-use', {
        text: { value: "Technologies I use: <b>Laravel</b> for Backend, <b>Bootstrap</b> for Frontend, <b>MySQL</b> for database, <b>Figma</b> for design, and <b>Google Keep</b> for organizing ideas.", speed: 2.5 },
        delay: 0.3,
        duration: 2.5,
        ease: "power2.inOut"
    }, "<");
