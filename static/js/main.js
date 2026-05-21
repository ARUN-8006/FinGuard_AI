// ==========================================
// FinGuard AI - Fixed main.js
// ==========================================

// COUNTER ANIMATION

document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        if (isNaN(target)) {
            counter.innerText = "0";
            return;
        }

        let current = 0;
        const increment = target / 100;

        const updateCounter = () => {

            current += increment;

            if (current < target) {

                if (target < 10) {
                    counter.innerText = current.toFixed(2);
                } else {
                    counter.innerText = Math.floor(current);
                }

                requestAnimationFrame(updateCounter);

            } else {

                if (target < 10) {
                    counter.innerText = target.toFixed(2);
                } else {
                    counter.innerText = target.toLocaleString();
                }
            }
        };

        updateCounter();
    });
});


// FLOATING BUBBLES

function createParticle() {

    const particle = document.createElement("div");

    particle.classList.add("bubble");

    const size = Math.random() * 60 + 15;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
    particle.style.opacity = Math.random() * 0.4 + 0.1;
    particle.style.filter = `blur(${Math.random() * 2}px)`;

    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 22000);
}

setInterval(() => {
    createParticle();
}, 700);


// LIVE NOTIFICATIONS

const alertMessages = [
    "Realtime Fraud Monitoring Enabled",
    "AI Risk Engine Updated",
    "Secure Financial Gateway Active",
    "Suspicious Pattern Detected",
    "Analytics Synced Successfully",
    "Transaction Scanner Running",
    "Threat Intelligence Updated",
    "System Security Stable",
    "CSV Detection Engine Active"
];

function showLiveNotification() {

    const existing = document.querySelector(".live-toast");

    if (existing) {
        existing.remove();
    }

    const toast = document.createElement("div");

    toast.className = "live-toast";

    toast.innerHTML = `
        <div style="
        display:flex;
        align-items:center;
        gap:12px;
        ">
            <div style="
            width:12px;
            height:12px;
            border-radius:50%;
            background:#00ff9f;
            box-shadow:0 0 15px #00ff9f;
            animation:pulse 1.5s infinite;
            "></div>

            <span>
                ${alertMessages[Math.floor(Math.random() * alertMessages.length)]}
            </span>
        </div>
    `;

    toast.style.position = "fixed";
    toast.style.top = "25px";
    toast.style.right = "25px";
    toast.style.padding = "18px 22px";
    toast.style.background = "rgba(15,23,42,0.95)";
    toast.style.border = "1px solid rgba(255,255,255,0.08)";
    toast.style.backdropFilter = "blur(25px)";
    toast.style.borderRadius = "18px";
    toast.style.color = "white";
    toast.style.fontSize = "14px";
    toast.style.fontWeight = "500";
    toast.style.boxShadow = "0 0 35px rgba(0,240,255,0.18), 0 0 60px rgba(139,92,246,0.10)";
    toast.style.zIndex = "99999";
    toast.style.transition = "0.5s ease";

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateX(100px)";

        setTimeout(() => {
            toast.remove();
        }, 500);

    }, 4500);
}

setInterval(() => {
    showLiveNotification();
}, 15000);


// MOUSE GLOW

const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "280px";
glow.style.height = "280px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.background = `
radial-gradient(
circle,
rgba(0,240,255,0.18),
rgba(139,92,246,0.08),
transparent 70%
)
`;
glow.style.transform = "translate(-50%, -50%)";
glow.style.zIndex = "-1";
glow.style.filter = "blur(25px)";

document.body.appendChild(glow);

document.addEventListener("mousemove", e => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
});


// CARD HOVER EFFECT

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background = `
        radial-gradient(
            circle at ${x}px ${y}px,
            rgba(255,255,255,0.16),
            rgba(255,255,255,0.04)
        )
        `;
    });

    card.addEventListener("mouseleave", () => {
        card.style.background = "rgba(255,255,255,0.05)";
    });
});


// TABLE SEARCH
// NOTE: name changed to avoid duplicate error with dashboard.html

var fgSearchInput = document.getElementById("searchInput");

if (fgSearchInput) {

    fgSearchInput.addEventListener("keyup", () => {

        const value = fgSearchInput.value.toLowerCase();

        const rows = document.querySelectorAll("#transactionTable tr");

        rows.forEach((row, index) => {

            if (index === 0) return;

            const text = row.innerText.toLowerCase();

            row.style.display = text.includes(value) ? "" : "none";
        });
    });
}


// LIVE CLOCK

function updateClock() {

    const clock = document.getElementById("liveClock");

    if (!clock) return;

    const now = new Date();

    clock.innerText = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();


// KEYBOARD SHORTCUTS

document.addEventListener("keydown", e => {

    if (e.ctrlKey && e.key.toLowerCase() === "d") {
        e.preventDefault();
        window.location.href = "/dashboard";
    }

    if (e.ctrlKey && e.key.toLowerCase() === "h") {
        e.preventDefault();
        window.location.href = "/history";
    }

    if (e.ctrlKey && e.key.toLowerCase() === "u") {
        e.preventDefault();
        window.location.href = "/upload";
    }
});

console.log("FinGuard AI Fixed JS Loaded Successfully");