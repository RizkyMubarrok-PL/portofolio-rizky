import { gsap } from "./node_modules/gsap/index.js";
import { TextPlugin } from "./node_modules/gsap/TextPlugin.js";

gsap.registerPlugin(TextPlugin)

let introHome = gsap.timeline()


introHome.to("#welcome-text",
    {
        text: { value: "rizkymubarrok.dev/home", speed: 1 },
        duration: 1.8,
        ease: "power1.inOut"
    }
)
    .to("#welcome-text",
        {
            y: "2000%",
            opacity: 0,
            duration: 0.6,
            ease: "power3.in"
        }
    )
    .to('.header',
        {
            duration: 0.6,
            y: 0,
            ease: "power3.out"
        }
    )
    .to('.svg-container',
        {
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out'
        }
    )
    .to('#main-header',
        {
            text: { value: "Hi, my name is", speed: 1 },
            duration: 1,
            ease: "power1.inOut"
        }
    ).to('#main-name',
        {
            text: { value: "RIZKY <br> MUBARROK", speed: 1 },
            duration: 1.8,
            ease: "power1.inOut"
        }
    ).to('#main-text',
        {
            text: { value: "I'm <strong>a Backend Developer</strong> with a passion for creating efficient, scalable, and secure web applications.", speed: 4 },
            duration: 2,
            ease: "power1.inOut"
        }
    )