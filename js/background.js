const images = [
    "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=1920",
    "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=1920",
    "https://images.unsplash.com/37/IHLjdHdzSvi0rgUMMlSK_TE3_0286.jpg?w=1920",
    "https://images.unsplash.com/photo-1682687219573-3fd75f982217?w=1920",
    "https://images.unsplash.com/photo-1682687219570-4c596363fd96?w=1920",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920",
    "https://images.unsplash.com/photo-1511576661531-b34d7da5d0bb?w=1920",
    "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=1920",
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `${chosenImage}`;
bgImage.id = "background";
bgImage.classList.add("background");
document.body.appendChild(bgImage);
bgImage.style.opacity = "0";
bgImage.style.position = "absolute";
bgImage.style.zIndex = "-1";
bgImage.style.top = "0";
bgImage.style.left = "0";
bgImage.style.overflow = "hidden";
bgImage.style.objectFit = "cover";
bgImage.style.width = "100%";
bgImage.style.height = "100%";
bgImage.style.filter = "blur(10px)";
bgImage.style.transform = "scale(1.1)";
document.body.style.overflow = "hidden";

const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if (isDarkMode) {
    const darken = document.createElement("div");
    darken.id = "darken";
    darken.classList.add("darken");
    document.body.appendChild(darken);
    bgImage.style.opacity = "0";
    darken.style.position = "absolute";
    darken.style.zIndex = "-1";
    darken.style.top = "0";
    darken.style.left = "0";
    darken.style.overflow = "hidden";
    darken.style.objectFit = "cover";
    darken.style.width = "100%";
    darken.style.height = "100%";
    darken.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
}

bgImage.onload = () => {
    for (let i = 0; i <= 1; i += 0.01) {
        setTimeout(() => {
            bgImage.style.opacity = i;
        }, i * 500);
    }   
}