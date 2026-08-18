/* =========================================
   ELEMENTS
========================================= */

const welcomeSection =
    document.getElementById("welcomeSection");

const birthdaySection =
    document.getElementById("birthdaySection");

const memorySection =
    document.getElementById("memorySection");

const surpriseButton =
    document.getElementById("surpriseButton");

const heartButton =
    document.getElementById("heartButton");

const tapMessage =
    document.getElementById("tapMessage");

const starsContainer =
    document.querySelector(".stars");

const ambientLight =
    document.querySelector(".ambient-light");

const filmTrack =
    document.querySelector(".film-track");



/* =========================================
   CREATE STARS
========================================= */

for (let i = 0; i < 120; i++) {

    const star =
        document.createElement("div");

    star.classList.add("star");

    star.style.left =
        Math.random() * 100 + "%";

    star.style.top =
        Math.random() * 100 + "%";

    star.style.animationDelay =
        Math.random() * 3 + "s";

    star.style.opacity =
        Math.random() * 0.8;

    starsContainer.appendChild(star);
}



/* =========================================
   OPEN BIRTHDAY SCENE
========================================= */

surpriseButton.addEventListener(
    "click",
    function () {

        welcomeSection.classList.add(
            "fade-out"
        );


        setTimeout(function () {

            welcomeSection.style.display =
                "none";


            birthdaySection.classList.add(
                "scene-active"
            );


            /*
                Activate memory section.

                It becomes available after
                the birthday scene.
            */

            memorySection.classList.add(
                "scene-active"
            );


            window.scrollTo({
                top: 0,
                behavior: "instant"
            });


        }, 1000);

    }
);



/* =========================================
   HEART INTERACTION
========================================= */

heartButton.addEventListener(
    "click",
    function () {

        heartButton.classList.remove(
            "heart-explode"
        );


        /*
            Force browser to restart animation.
        */

        void heartButton.offsetWidth;


        heartButton.classList.add(
            "heart-explode"
        );


        tapMessage.textContent =
            "You found my heart ❤️";


        createHeartBurst();


    }
);



/* =========================================
   HEART PARTICLE BURST
========================================= */

function createHeartBurst() {

    const symbols = [
        "♥",
        "♡",
        "✦",
        "✧"
    ];


    for (let i = 0; i < 18; i++) {

        const particle =
            document.createElement("span");


        particle.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        particle.style.position =
            "fixed";


        particle.style.left =
            "50%";


        particle.style.top =
            "50%";


        particle.style.zIndex =
            "100";


        particle.style.pointerEvents =
            "none";


        particle.style.fontSize =
            Math.random() * 14 + 10 + "px";


        particle.style.color =
            "#ff4f88";


        const angle =
            Math.random() * Math.PI * 2;


        const distance =
            Math.random() * 160 + 80;


        const x =
            Math.cos(angle) * distance;


        const y =
            Math.sin(angle) * distance;


        particle.animate(

            [
                {
                    transform:
                        "translate(-50%, -50%) scale(0)",

                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )
                        scale(1.2)`,

                    opacity: 0
                }
            ],

            {
                duration:
                    Math.random() * 800 + 800,

                easing:
                    "cubic-bezier(0.16, 1, 0.3, 1)",

                fill:
                    "forwards"
            }

        );


        document.body.appendChild(
            particle
        );


        setTimeout(
            function () {

                particle.remove();

            },
            1800
        );

    }

}



/* =========================================
   CREATE BIRTHDAY PARTICLES
========================================= */

const birthdayParticles =
    document.querySelectorAll(
        ".particles span"
    );


birthdayParticles.forEach(
    function (particle) {

        particle.style.left =
            Math.random() * 100 + "%";

    }
);



/* =========================================
   SCROLL REVEAL SYSTEM
========================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(
    function (element) {

        observer.observe(
            element
        );

    }
);



/* =========================================
   MOUSE PARALLAX
========================================= */

birthdaySection.addEventListener(
    "mousemove",
    function (event) {

        if (!ambientLight) {
            return;
        }


        const x =
            (
                event.clientX /
                window.innerWidth -
                0.5
            ) * 35;


        const y =
            (
                event.clientY /
                window.innerHeight -
                0.5
            ) * 35;


        ambientLight.style.transform =
            `translate(${x}px, ${y}px)`;

    }
);



/* =========================================
   FILM STRIP SCROLL MOVEMENT
========================================= */

window.addEventListener(
    "scroll",
    function () {

        if (
            !filmTrack ||
            !memorySection.classList.contains(
                "scene-active"
            )
        ) {

            return;

        }


        const film =
            document.querySelector(
                ".memory-four"
            );


        if (!film) {
            return;
        }


        const rect =
            film.getBoundingClientRect();


        const viewport =
            window.innerHeight;


        const totalDistance =
            film.offsetHeight -
            viewport;


        if (
            rect.top <= 0 &&
            rect.bottom >= viewport
        ) {

            const progress =
                Math.min(
                    1,
                    Math.max(
                        0,
                        -rect.top /
                        totalDistance
                    )
                );


            const movement =
                progress * 850;


            filmTrack.style.transform =
                `translateX(-${movement}px)`;

        }

    },

    {
        passive: true
    }
);



/* =========================================
   PREVENT ACCIDENTAL BUTTON FOCUS
========================================= */

surpriseButton.addEventListener(
    "mousedown",
    function () {

        surpriseButton.blur();

    }
);



/* =========================================
   SCENE 4 — YES / NO QUESTION
========================================= */

const finalQuestionSection =
    document.getElementById(
        "finalQuestionSection"
    );

const yesButton =
    document.getElementById(
        "yesButton"
    );

const noButton =
    document.getElementById(
        "noButton"
    );

const noMessage =
    document.getElementById(
        "noMessage"
    );



/* =========================================
   SHOW FINAL QUESTION
========================================= */

const memoryEnding =
    document.querySelector(
        ".memory-ending"
    );


const finalQuestionObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        finalQuestionSection.classList.add(
                            "scene-active"
                        );

                    }

                }
            );

        },

        {
            threshold: 0.2
        }

    );


/*
    Watch the end of the memory section.
*/

if (memoryEnding) {

    finalQuestionObserver.observe(
        memoryEnding
    );

}



/* =========================================
   NO BUTTON — ESCAPE
========================================= */

let noAttempts = 0;


const noMessages = [

    "Nice try, Buddu 😏",

    "Nope... you're not escaping that easily 😂",

    "Almost! But I'm faster 😌❤️",

    "Buddu... seriously? 😂",

    "You know you're supposed to click YES, right? 😏",

    "The NO button has other plans 😂❤️",

    "Try again... if you can catch it 😌"

];



function moveNoButton() {

    noAttempts++;


    const section =
        finalQuestionSection;


    const button =
        noButton;


    /*
        Make the button position itself
        relative to the screen/section.
    */

    const sectionRect =
        section.getBoundingClientRect();


    const buttonWidth =
        button.offsetWidth;


    const buttonHeight =
        button.offsetHeight;


    /*
        Keep it away from the edges.
    */

    const padding = 20;


    const maxX =
        window.innerWidth -
        buttonWidth -
        padding * 2;


    const maxY =
        window.innerHeight -
        buttonHeight -
        padding * 2;


    /*
        Random position.
    */

    let randomX =
        Math.random() *
        maxX +
        padding;


    let randomY =
        Math.random() *
        maxY +
        padding;


    /*
        Don't put it too close
        to the YES button.
    */

    const yesRect =
        yesButton.getBoundingClientRect();


    const distanceX =
        Math.abs(
            randomX -
            yesRect.left
        );


    const distanceY =
        Math.abs(
            randomY -
            yesRect.top
        );


    if (
        distanceX < 180 &&
        distanceY < 120
    ) {

        randomX += 220;

        if (
            randomX >
            maxX
        ) {

            randomX -= 440;

        }

    }


    /*
        Switch to fixed positioning.
    */

    button.style.position =
        "fixed";


    button.style.left =
        randomX + "px";


    button.style.top =
        randomY + "px";


    button.style.zIndex =
        "9999";


    /*
        Rotate slightly.
    */

    const rotation =
        Math.random() * 16 - 8;


    button.style.transform =
        `rotate(${rotation}deg) scale(1.05)`;


    /*
        Change message.
    */

    noMessage.textContent =
        noMessages[
            Math.min(
                noAttempts - 1,
                noMessages.length - 1
            )
        ];


    noMessage.style.opacity =
        "1";


    /*
        After a moment, fade message.
    */

    clearTimeout(
        window.noMessageTimer
    );


    window.noMessageTimer =
        setTimeout(
            function () {

                noMessage.style.opacity =
                    "0";

            },
            1800
        );

}



/* =========================================
   DESKTOP — MOUSE APPROACH
========================================= */

noButton.addEventListener(
    "mouseenter",
    function () {

        moveNoButton();

    }
);



/* =========================================
   MOBILE — TOUCH
========================================= */

noButton.addEventListener(
    "touchstart",
    function (event) {

        event.preventDefault();

        moveNoButton();

    },
    {
        passive: false
    }
);



/* =========================================
   NO CLICK BACKUP
========================================= */

noButton.addEventListener(
    "click",
    function (event) {

        event.preventDefault();

        moveNoButton();

    }
);



/* =========================================
   YES BUTTON → LOVE LETTER
========================================= */

/* =========================================
   YES BUTTON → LOVE LETTER
========================================= */

if (yesButton) {

    yesButton.addEventListener(
        "click",
        function () {

            /* =================================
               YES BUTTON ANIMATION
            ================================= */

            finalQuestionSection.classList.add(
                "yes-selected"
            );


            yesButton.textContent =
                "I KNEW IT ❤️";


            yesButton.style.transform =
                "scale(1.12)";


            noButton.style.opacity =
                "0";


            noButton.style.pointerEvents =
                "none";


            /* =================================
               HEART EXPLOSION
            ================================= */

            createFinalHeartBurst();


            /* =================================
               WAIT FOR HEART ANIMATION
            ================================= */

            setTimeout(
                function () {

                    /* =============================
                       GET LOVE LETTER
                    ============================= */

                    const loveLetterSection =
                        document.getElementById(
                            "loveLetterSection"
                        );


                    /* =============================
                       GET CINEMATIC ALBUM
                    ============================= */

                    const cinematicGallery =
                        document.getElementById(
                            "cinematicGallery"
                        );


                    /* =============================
                       HIDE YES / NO
                    ============================= */

                    finalQuestionSection.classList.remove(
                        "scene-active"
                    );


                    finalQuestionSection.style.display =
                        "none";


                    /* =============================
                       HIDE CINEMATIC ALBUM
                       
                       This prevents the album from
                       appearing during the transition.
                    ============================= */

                    if (cinematicGallery) {

                        cinematicGallery.classList.remove(
                            "scene-active"
                        );

                    }


                    /* =============================
                       SHOW LOVE LETTER
                    ============================= */

                    if (loveLetterSection) {

                        loveLetterSection.style.display =
                            "block";


                        loveLetterSection.classList.add(
                            "scene-active"
                        );


                        loveLetterSection.classList.add(
                            "visible"
                        );


                        /* =========================
                           DIRECT SCROLL
                        ========================= */

                        requestAnimationFrame(
                            function () {

                                loveLetterSection.scrollIntoView({

                                    behavior:
                                        "smooth",

                                    block:
                                        "start"

                                });


                                /* =====================
                                   START LETTER ANIMATION
                                ===================== */

                                setTimeout(
                                    function () {

                                        revealLoveLetter();

                                    },
                                    500
                                );

                            }
                        );

                    }

                },
                2200
            );

        }
    );

}



/* =========================================
   FINAL HEART EXPLOSION
========================================= */

function createFinalHeartBurst() {

    const symbols = [
        "❤️",
        "♡",
        "💕",
        "💗",
        "✨",
        "♥"
    ];


    for (
        let i = 0;
        i < 45;
        i++
    ) {

        const particle =
            document.createElement(
                "span"
            );


        particle.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        particle.style.position =
            "fixed";


        particle.style.left =
            "50%";


        particle.style.top =
            "50%";


        particle.style.zIndex =
            "10000";


        particle.style.pointerEvents =
            "none";


        particle.style.fontSize =
            Math.random() * 20 +
            10 +
            "px";


        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            Math.random() *
            350 +
            100;


        const x =
            Math.cos(angle) *
            distance;


        const y =
            Math.sin(angle) *
            distance;


        particle.animate(

            [

                {
                    transform:
                        "translate(-50%, -50%) scale(0)",

                    opacity: 0

                },

                {
                    transform:
                        "translate(-50%, -50%) scale(1.2)",

                    opacity: 1,

                    offset: .15

                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )
                        scale(.7)`,

                    opacity: 0

                }

            ],

            {

                duration:
                    Math.random() *
                    1000 +
                    1500,

                easing:
                    "cubic-bezier(.16,1,.3,1)",

                fill:
                    "forwards"

            }

        );


        document.body.appendChild(
            particle
        );


        setTimeout(
            function () {

                particle.remove();

            },
            2800
        );

    }

}



/* =========================================
   LOVE LETTER REVEAL
========================================= */

function revealLoveLetter() {


    const loveLetterSection =
        document.getElementById(
            "loveLetterSection"
        );


    if (!loveLetterSection) {
        return;
    }


    const paragraphs =
        loveLetterSection.querySelectorAll(
            ".letter-paragraph"
        );


    paragraphs.forEach(
        function (paragraph, index) {

            /*
                Reset first so the animation
                always starts correctly.
            */

            paragraph.style.opacity =
                "0";

            paragraph.style.transform =
                "translateY(30px)";


            setTimeout(
                function () {

                    paragraph.style.opacity =
                        "1";

                    paragraph.style.transform =
                        "translateY(0)";

                },
                900 +
                index * 650
            );

        }
    );

}



/* =========================================
   SCENE 6 — GRAND FINALE
========================================= */

const grandFinale =
    document.getElementById(
        "grandFinale"
    );



/* =========================================
   SHOW GRAND FINALE
========================================= */

function showGrandFinale() {

    if (!grandFinale) {
        return;
    }


    /*
        Hide Love Letter.
    */

    const loveLetterSection =
        document.getElementById(
            "loveLetterSection"
        );


    if (loveLetterSection) {

        loveLetterSection.style.display =
            "none";

        loveLetterSection.classList.remove(
            "scene-active"
        );

    }


    /*
        Show Grand Finale.
    */

    grandFinale.style.display =
        "flex";


    grandFinale.classList.add(
        "scene-active"
    );


    /*
        Start from the beginning
        of the finale.
    */

    setTimeout(
        function () {

            grandFinale.scrollIntoView({

                behavior:
                    "smooth",

                block:
                    "start"

            });

        },
        100
    );


    createFinaleHeartBurst();

}



/* =========================================
   DETECT END OF LOVE LETTER
========================================= */

const letterContinue =
    document.querySelector(
        ".letter-continue"
    );


if (letterContinue) {

    const finaleObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            cinematicFinaleTransition();

                            finaleObserver.disconnect();

                        }

                    }
                );

            },

            {
                threshold:
                    0.6
            }

        );


    finaleObserver.observe(
        letterContinue
    );

}



/* =========================================
   FINALE HEART BURST
========================================= */

function createFinaleHeartBurst() {

    const symbols = [

        "❤️",
        "💕",
        "💗",
        "♡",
        "♥",
        "✨"

    ];


    for (
        let i = 0;
        i < 35;
        i++
    ) {


        const particle =
            document.createElement(
                "span"
            );


        particle.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        particle.style.position =
            "fixed";


        particle.style.left =
            "50%";


        particle.style.top =
            "45%";


        particle.style.zIndex =
            "10000";


        particle.style.pointerEvents =
            "none";


        particle.style.fontSize =
            Math.random() * 18 +
            10 +
            "px";


        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            Math.random() *
            300 +
            80;


        const x =
            Math.cos(angle) *
            distance;


        const y =
            Math.sin(angle) *
            distance;


        particle.animate(

            [

                {

                    transform:
                        "translate(-50%, -50%) scale(0)",

                    opacity:
                        0

                },

                {

                    transform:
                        "translate(-50%, -50%) scale(1)",

                    opacity:
                        1,

                    offset:
                        .15

                },

                {

                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )
                        scale(.5)`,

                    opacity:
                        0

                }

            ],

            {

                duration:
                    Math.random() *
                    1200 +
                    1600,

                easing:
                    "cubic-bezier(.16,1,.3,1)",

                fill:
                    "forwards"

            }

        );


        document.body.appendChild(
            particle
        );


        setTimeout(
            function () {

                particle.remove();

            },
            3000
        );

    }

}



/* =========================================
   BIRTHDAY MUSIC
========================================= */

const birthdayMusic =
    document.getElementById("birthdayMusic");


/* =========================================
   START MUSIC
========================================= */

function startBirthdayMusic() {

    if (!birthdayMusic) {
        return;
    }


    /*
        If the song is already playing,
        don't restart it.
    */

    if (!birthdayMusic.paused) {
        return;
    }


    birthdayMusic.volume = 0.45;


    birthdayMusic.play()
        .then(function () {

            console.log(
                "❤️ Birthday music started"
            );

        })
        .catch(function (error) {

            console.log(
                "Music could not start:",
                error
            );

        });

}



/* =========================================
   START MUSIC WHEN SHE OPENS SURPRISE
========================================= */

if (surpriseButton) {

    surpriseButton.addEventListener(
        "click",
        function () {
                    /* START BIRTHDAY MUSIC */

        if (birthdayMusic) {

            birthdayMusic.volume = 0.45;

            birthdayMusic.play()
                .then(function () {

                    console.log(
                        "❤️ Music started"
                    );

                })
                .catch(function (error) {

                    console.log(
                        "Music error:",
                        error
                    );

                });

        }

            startBirthdayMusic();

        }
    );

}



/* =========================================
   CINEMATIC GALLERY ANIMATIONS
========================================= */

const galleryItems =
    document.querySelectorAll(
        ".gallery-item"
    );


if (galleryItems.length) {

    const galleryObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "gallery-visible"
                            );

                        }

                    }
                );

            },

            {
                threshold:
                    0.18
            }

        );


    galleryItems.forEach(
        function (item) {

            galleryObserver.observe(
                item
            );

        }
    );

}



/* =========================================
   GALLERY PARALLAX
========================================= */

window.addEventListener(
    "scroll",
    function () {

        const items =
            document.querySelectorAll(
                ".gallery-item"
            );


        items.forEach(
            function (item) {

                const image =
                    item.querySelector(
                        ".gallery-image"
                    );


                if (!image) {
                    return;
                }


                const rect =
                    item.getBoundingClientRect();


                const viewport =
                    window.innerHeight;


                if (
                    rect.bottom < 0 ||
                    rect.top > viewport
                ) {

                    return;

                }


                const center =
                    viewport / 2;


                const distance =
                    rect.top +
                    rect.height / 2 -
                    center;


                const movement =
                    distance * -0.035;


                image.style.transform =
                    `scale(1.08)
                     translateY(${movement}px)`;

            }
        );

    },

    {
        passive: true
    }
);
/* =========================================
   LOVE LETTER → GRAND FINALE TRANSITION
========================================= */

const loveLetter =
    document.getElementById(
        "loveLetterSection"
    );

const finale =
    document.getElementById(
        "grandFinale"
    );


/* =========================================
   CREATE TRANSITION OVERLAY
========================================= */

const finaleOverlay =
    document.createElement(
        "div"
    );

finaleOverlay.className =
    "finale-transition-overlay";

document.body.appendChild(
    finaleOverlay
);



/* =========================================
   CINEMATIC FINALE TRANSITION
========================================= */

function cinematicFinaleTransition() {

    if (!loveLetter || !finale) {
        return;
    }


    /*
        Start dark transition.
    */

    finaleOverlay.classList.add(
        "active"
    );


    /*
        Fade Love Letter.
    */

    loveLetter.classList.add(
        "letter-ending"
    );


    /*
        Give the darkness time
        to cover the screen.
    */

    setTimeout(
        function () {

            /*
                Hide Love Letter.
            */

            loveLetter.style.display =
                "none";


            /*
                Show Grand Finale.
            */

            finale.style.display =
                "flex";


            finale.classList.add(
                "scene-active"
            );


            /*
                Force browser repaint.
            */

            void finale.offsetWidth;


            /*
                Reveal Grand Finale.
            */

            finale.classList.add(
                "finale-revealed"
            );
            setTimeout(
    function () {

        startGrandFinaleReveal();

    },
    800
);


            /*
                Scroll to beginning.
            */

            finale.scrollIntoView({

    behavior: "instant",

    block: "start"

});

        },
        1500
    );


    /*
        Remove overlay after
        transition finishes.
    */

    setTimeout(
        function () {

            finaleOverlay.classList.remove(
                "active"
            );

        },
        3500
    );

}
/* =========================================
   PREMIUM CURSOR GLOW
========================================= */

document.addEventListener(
    "mousemove",
    function (event) {

        document.documentElement.style.setProperty(
            "--cursor-x",
            event.clientX + "px"
        );

        document.documentElement.style.setProperty(
            "--cursor-y",
            event.clientY + "px"
        );

    }
);
/* =========================================
   GRAND FINALE SEQUENTIAL REVEAL
========================================= */

function startGrandFinaleReveal() {

    const finale =
        document.getElementById(
            "grandFinale"
        );


    if (!finale) {
        return;
    }


    /*
        Find the existing elements.
    */

    const lines =
        finale.querySelectorAll(
            ".finale-line"
        );


    const birthdayMessage =
        finale.querySelector(
            ".final-birthday-message"
        );


    const finalHeart =
        finale.querySelector(
            ".final-heart-small"
        );


    /*
        Reset everything.
    */

    lines.forEach(
        function (line) {

            line.classList.remove(
                "finale-reveal"
            );

        }
    );


    if (birthdayMessage) {

        birthdayMessage.classList.remove(
            "finale-reveal"
        );

    }


    if (finalHeart) {

        finalHeart.classList.remove(
            "final-heart-reveal"
        );

    }


    /*
        Reveal each line.
    */

    lines.forEach(
        function (line, index) {

            setTimeout(
                function () {

                    line.classList.add(
                        "finale-reveal"
                    );

                },

                1000 +
                index * 1000

            );

        }
    );


    /*
        Birthday message.
    */

    if (birthdayMessage) {

        setTimeout(
            function () {

                birthdayMessage.classList.add(
                    "finale-reveal"
                );

            },

            1000 +
            lines.length * 1000 +
            700

        );

    }


    /*
        Final heart.
    */

    if (finalHeart) {

        setTimeout(
            function () {

                finalHeart.classList.add(
                    "final-heart-reveal"
                );

            },

            1000 +
            lines.length * 1000 +
            2200

        );

    }

}