/* =========================================
   BIRTHDAY WEBSITE — COMPLETE JAVASCRIPT
========================================= */


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

const finalQuestionSection =
    document.getElementById("finalQuestionSection");

const yesButton =
    document.getElementById("yesButton");

const noButton =
    document.getElementById("noButton");

const noMessage =
    document.getElementById("noMessage");

const cinematicGallery =
    document.getElementById("cinematicGallery");

const loveLetterSection =
    document.getElementById("loveLetterSection");

const grandFinale =
    document.getElementById("grandFinale");

const birthdayMusic =
    document.getElementById("birthdayMusic");


/* =========================================
   CINEMATIC ALBUM ORDER FIX
========================================= */

/*
   This automatically places the album
   BEFORE the YES / NO question.

   Desired order:

   Memories
      ↓
   Album
      ↓
   YES / NO
      ↓
   Love Letter
      ↓
   Grand Finale
*/

if (
    cinematicGallery &&
    finalQuestionSection
) {

    finalQuestionSection.parentNode.insertBefore(
        cinematicGallery,
        finalQuestionSection
    );

}


/* =========================================
   INITIAL ALBUM STATE
========================================= */

if (cinematicGallery) {

    cinematicGallery.style.display = "none";

}


/* =========================================
   INITIAL YES / NO STATE
========================================= */

if (finalQuestionSection) {

    finalQuestionSection.style.display = "none";

}


/* =========================================
   CREATE STARS
========================================= */

if (starsContainer) {

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

}


/* =========================================
   OPEN BIRTHDAY SCENE
========================================= */

if (surpriseButton) {

    surpriseButton.addEventListener(
        "click",
        function () {

            if (welcomeSection) {

                welcomeSection.classList.add(
                    "fade-out"
                );

            }


            setTimeout(
                function () {

                    if (welcomeSection) {

                        welcomeSection.style.display =
                            "none";

                    }


                    if (birthdaySection) {

                        birthdaySection.classList.add(
                            "scene-active"
                        );

                    }


                    if (memorySection) {

                        memorySection.classList.add(
                            "scene-active"
                        );

                    }


                    window.scrollTo({
                        top: 0,
                        behavior: "instant"
                    });

                },
                1000
            );

        }
    );

}


/* =========================================
   PREVENT BUTTON FOCUS
========================================= */

if (surpriseButton) {

    surpriseButton.addEventListener(
        "mousedown",
        function () {

            surpriseButton.blur();

        }
    );

}


/* =========================================
   HEART INTERACTION
========================================= */

if (heartButton) {

    heartButton.addEventListener(
        "click",
        function () {

            heartButton.classList.remove(
                "heart-explode"
            );


            void heartButton.offsetWidth;


            heartButton.classList.add(
                "heart-explode"
            );


            if (tapMessage) {

                tapMessage.textContent =
                    "You found my heart ❤️";

            }


            createHeartBurst();

        }
    );

}


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
            Math.random() *
            Math.PI *
            2;


        const distance =
            Math.random() *
            160 +
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
                    Math.random() *
                    800 +
                    800,

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
   BIRTHDAY PARTICLES
========================================= */

const birthdayParticles =
    document.querySelectorAll(
        ".particles span"
    );


birthdayParticles.forEach(
    function (particle) {

        particle.style.left =
            Math.random() *
            100 +
            "%";

    }
);


/* =========================================
   SCROLL REVEAL SYSTEM
========================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


if (revealElements.length) {

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

}


/* =========================================
   MOUSE PARALLAX
========================================= */

if (birthdaySection) {

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

}


/* =========================================
   MEMORY FILM STRIP
========================================= */

window.addEventListener(
    "scroll",
    function () {

        if (
            !filmTrack ||
            !memorySection ||
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
            totalDistance <= 0
        ) {

            return;

        }


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
                progress *
                850;


            filmTrack.style.transform =
                `translateX(-${movement}px)`;

        }

    },

    {
        passive: true
    }
);


/* =========================================
   SHOW CINEMATIC ALBUM AFTER MEMORIES
========================================= */

const memoryEnding =
    document.querySelector(
        ".memory-ending"
    );


const galleryEnding =
    document.querySelector(
        ".gallery-ending"
    );


let albumShown = false;


function showCinematicAlbum() {

    if (
        !cinematicGallery ||
        albumShown
    ) {

        return;

    }


    albumShown = true;


    cinematicGallery.style.display =
        "block";


    cinematicGallery.classList.add(
        "scene-active"
    );


    window.setTimeout(
        function () {

            cinematicGallery.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        },
        100
    );

}


/*
   Watch the end of Memories.
*/

if (
    memoryEnding &&
    cinematicGallery
) {

    const albumObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            showCinematicAlbum();

                            albumObserver.disconnect();

                        }

                    }
                );

            },

            {
                threshold: 0.15
            }

        );


    albumObserver.observe(
        memoryEnding
    );

}


/* =========================================
   SHOW YES / NO AFTER ALBUM
========================================= */

let questionShown = false;


function showFinalQuestion() {

    if (
        !finalQuestionSection ||
        questionShown
    ) {

        return;

    }


    questionShown = true;


    finalQuestionSection.style.display =
        "block";


    finalQuestionSection.classList.add(
        "scene-active"
    );


    finalQuestionSection.classList.add(
        "visible"
    );

}


/*
   Watch the end of the album.
*/

if (
    galleryEnding &&
    finalQuestionSection
) {

    const questionObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            showFinalQuestion();

                            questionObserver.disconnect();

                        }

                    }
                );

            },

            {
                threshold: 0.2
            }

        );


    questionObserver.observe(
        galleryEnding
    );

}


/* =========================================
   FALLBACK:
   IF GALLERY ENDING IS NOT AVAILABLE
========================================= */

if (
    !galleryEnding &&
    cinematicGallery &&
    finalQuestionSection
) {

    const galleryObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            showFinalQuestion();

                            galleryObserver.disconnect();

                        }

                    }
                );

            },

            {
                threshold: 0.8
            }

        );


    galleryObserver.observe(
        cinematicGallery
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

    if (
        !noButton ||
        !finalQuestionSection
    ) {

        return;

    }


    noAttempts++;


    const button =
        noButton;


    const buttonWidth =
        button.offsetWidth;


    const buttonHeight =
        button.offsetHeight;


    const padding =
        20;


    const maxX =
        Math.max(
            padding,
            window.innerWidth -
            buttonWidth -
            padding
        );


    const maxY =
        Math.max(
            padding,
            window.innerHeight -
            buttonHeight -
            padding
        );


    let randomX =
        Math.random() *
        (
            maxX -
            padding
        ) +
        padding;


    let randomY =
        Math.random() *
        (
            maxY -
            padding
        ) +
        padding;


    if (yesButton) {

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

    }


    button.style.position =
        "fixed";


    button.style.left =
        randomX +
        "px";


    button.style.top =
        randomY +
        "px";


    button.style.zIndex =
        "9999";


    const rotation =
        Math.random() *
        16 -
        8;


    button.style.transform =
        `rotate(${rotation}deg) scale(1.05)`;


    if (noMessage) {

        noMessage.textContent =
            noMessages[
                Math.min(
                    noAttempts - 1,
                    noMessages.length - 1
                )
            ];


        noMessage.style.opacity =
            "1";


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

}


/* =========================================
   NO BUTTON — DESKTOP
========================================= */

if (noButton) {

    noButton.addEventListener(
        "mouseenter",
        function () {

            moveNoButton();

        }
    );

}


/* =========================================
   NO BUTTON — MOBILE
========================================= */

if (noButton) {

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

}


/* =========================================
   NO BUTTON — CLICK BACKUP
========================================= */

if (noButton) {

    noButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            moveNoButton();

        }
    );

}


/* =========================================
   YES BUTTON → LOVE LETTER
========================================= */

if (yesButton) {

    yesButton.addEventListener(
        "click",
        function () {

            if (
                finalQuestionSection
            ) {

                finalQuestionSection.classList.add(
                    "yes-selected"
                );

            }


            yesButton.textContent =
                "I KNEW IT ❤️";


            yesButton.style.transform =
                "scale(1.12)";


            if (noButton) {

                noButton.style.opacity =
                    "0";

                noButton.style.pointerEvents =
                    "none";

            }


            createFinalHeartBurst();


            setTimeout(
                function () {

                    const letter =
                        document.getElementById(
                            "loveLetterSection"
                        );


                    if (
                        finalQuestionSection
                    ) {

                        finalQuestionSection.classList.remove(
                            "scene-active"
                        );


                        finalQuestionSection.style.display =
                            "none";

                    }


                    if (
                        cinematicGallery
                    ) {

                        cinematicGallery.style.display =
                            "none";

                    }


                    if (letter) {

                        letter.style.display =
                            "block";


                        letter.classList.add(
                            "scene-active"
                        );


                        letter.classList.add(
                            "visible"
                        );


                        requestAnimationFrame(
                            function () {

                                letter.scrollIntoView({

                                    behavior:
                                        "smooth",

                                    block:
                                        "start"

                                });


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
            Math.random() *
            20 +
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

                    offset: 0.15

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

    const letter =
        document.getElementById(
            "loveLetterSection"
        );


    if (!letter) {
        return;
    }


    const paragraphs =
        letter.querySelectorAll(
            ".letter-paragraph"
        );


    paragraphs.forEach(
        function (
            paragraph,
            index
        ) {

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
   GRAND FINALE
========================================= */

const letterContinue =
    document.querySelector(
        ".letter-continue"
    );


if (
    letterContinue &&
    grandFinale
) {

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
                threshold: 0.6
            }

        );


    finaleObserver.observe(
        letterContinue
    );

}


/* =========================================
   FINALE TRANSITION OVERLAY
========================================= */

let finaleOverlay = null;


function createFinaleOverlay() {

    if (finaleOverlay) {
        return;
    }


    finaleOverlay =
        document.createElement(
            "div"
        );


    finaleOverlay.className =
        "finale-transition-overlay";


    document.body.appendChild(
        finaleOverlay
    );

}


/* Create it immediately */

createFinaleOverlay();


/* =========================================
   CINEMATIC FINALE TRANSITION
========================================= */

function cinematicFinaleTransition() {

    if (
        !loveLetterSection ||
        !grandFinale
    ) {

        return;

    }


    createFinaleOverlay();


    finaleOverlay.classList.add(
        "active"
    );


    loveLetterSection.classList.add(
        "letter-ending"
    );


    setTimeout(
        function () {

            loveLetterSection.style.display =
                "none";


            grandFinale.style.display =
                "flex";


            grandFinale.classList.add(
                "scene-active"
            );


            void grandFinale.offsetWidth;


            grandFinale.classList.add(
                "finale-revealed"
            );


            setTimeout(
                function () {

                    startGrandFinaleReveal();

                },
                800
            );


            grandFinale.scrollIntoView({

                behavior:
                    "instant",

                block:
                    "start"

            });

        },
        1500
    );


    setTimeout(
        function () {

            if (finaleOverlay) {

                finaleOverlay.classList.remove(
                    "active"
                );

            }

        },
        3500
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
            Math.random() *
            18 +
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
                        0.15

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

function startBirthdayMusic() {

    if (!birthdayMusic) {
        return;
    }


    if (!birthdayMusic.paused) {
        return;
    }


    birthdayMusic.volume =
        0.45;


    birthdayMusic.play()
        .then(
            function () {

                console.log(
                    "❤️ Birthday music started"
                );

            }
        )
        .catch(
            function (error) {

                console.log(
                    "Music could not start:",
                    error
                );

            }
        );

}


/* =========================================
   START MUSIC WHEN SURPRISE OPENS
========================================= */

if (surpriseButton) {

    surpriseButton.addEventListener(
        "click",
        function () {

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

    const galleryItemObserver =
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

            galleryItemObserver.observe(
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
                    distance *
                    -0.035;


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

    if (!grandFinale) {
        return;
    }


    const lines =
        grandFinale.querySelectorAll(
            ".finale-line"
        );


    const birthdayMessage =
        grandFinale.querySelector(
            ".final-birthday-message"
        );


    const finalHeart =
        grandFinale.querySelector(
            ".final-heart-small"
        );


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


    lines.forEach(
        function (
            line,
            index
        ) {

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


    if (birthdayMessage) {

        setTimeout(
            function () {

                birthdayMessage.classList.add(
                    "finale-reveal"
                );

            },
            1000 +
            lines.length *
            1000 +
            700
        );

    }


    if (finalHeart) {

        setTimeout(
            function () {

                finalHeart.classList.add(
                    "final-heart-reveal"
                );

            },
            1000 +
            lines.length *
            1000 +
            2200
        );

    }


    createFinaleHeartBurst();

}


/* =========================================
   SAFETY RESET ON PAGE LOAD
========================================= */

window.addEventListener(
    "load",
    function () {

        /*
           Keep the album hidden until
           the Memories section is reached.
        */

        if (cinematicGallery) {

            cinematicGallery.style.display =
                "none";

        }


        /*
           Keep YES / NO hidden until
           the album is completed.
        */

        if (finalQuestionSection) {

            finalQuestionSection.style.display =
                "none";

        }

    }
);
