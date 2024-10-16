import IconCloud from "./icon-cloud";

const slugs = [
    // Existing slugs
    "typescript",
    "javascript",
    "java",
    "react",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "docker",
    "git",
    "github",
    "gitlab",
    "visualstudiocode",
    "figma",
    "sublimetext",       // Sublime Text
    "anaconda",          // Anaconda
    "eclipseide",        // Eclipse
    "googlecloud",       // Google Cloud Platform (GCP)
    "notion",            // Notion
    "adobephotoshop",    // Photoshop
    "gmail",             // Gmail
    "stackoverflow",     // Stack Overflow
    "pytorch",           // PyTorch
    "tensorflow",        // TensorFlow
    "replit",            // Replit
    "raspberrypi",       // Raspberry Pi
    "roblox",            // Roblox Studio
    "npm",               // NPM
    "twitter",           // Twitter
    "instagram",         // Instagram
    "youtube",            // YouTube
    "canva",
    "discord",
    "telegram",
    "whatsapp",
    "alienware",
];


export function IconCloudDemo() {
    return (
        <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg p-0 m-0">
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}
