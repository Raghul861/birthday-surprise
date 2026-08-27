/* =========================================
   BIRTHDAY SURPRISE WEBSITE
   COMPLETE SCRIPT
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

const cinematicGallery =
    document.getElementById("cinematicGallery");

const finalQuestionSection =
    document.getElementById("finalQuestionSection");

const yesButton =
    document.getElementById("yesButton");

const noButton =
    document.getElementById("noButton");

const noMessage =
    document.getElementById("noMessage");

const memoryEnding =
    document.querySelector(".memory-ending");

const galleryEnding =
    document.querySelector(".gallery-ending");

const loveLetterSection =
    document.getElementById("loveLetterSection");

const grandFinale =
    document.getElementById("grandFinale");

const birthdayMusic =
    document.getElementById("birthdayMusic");


/* =========================================
   INITIAL STATES
========================================= */

if (cinematicGallery) {

    cinematicGallery.style.display =
        "none";

}


if (finalQuestionSection) {

    finalQuestionSection.style.display =
        "none";

}


/* =========================================
   CREATE STARS
========================================= */

if (starsContainer) {

    for (
        let i = 0;
        i < 120;
        i++
    ) {

        const star =
            document.createElement("div");

        star.classList.add(
            "star"
        );

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.animationDelay =
            Math.random() * 3 + "s";

        star.style.opacity =
            Math.random() * 0.8;

        starsContainer.appendChild(
            star
        );

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

            startBirthdayMusic();


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
   BUTTON FOCUS
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
   HEART BUTTON
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
   HEART BURST
========================================= */

function createHeartBurst() {

    const symbols = [

        "♥",
        "♡",
        "✦",
        "✧"

    ];


    for (
        let i = 0;
        i < 18;
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
            "100";


        particle.style.pointerEvents =
            "none";


        particle.style.fontSize =
            Math.random() *
            14 +
            10 +
            "px";


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

                    opacity:
                        1

                },

                {

                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )
                        scale(1.2)`,

                    opacity:
                        0

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
   SCROLL REVEAL
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
                threshold:
                    0.15
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

if (filmTrack) {

    window.addEventListener(
        "scroll",
        function () {

            if (
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
            passive:
                true
        }

    );

}


/* =========================================
   CINEMATIC GALLERY
   SHOW AFTER MEMORIES
========================================= */

let galleryShown =
    false;


function showCinematicGallery() {

    if (
        !cinematicGallery ||
        galleryShown
    ) {

        return;

    }


    galleryShown =
        true;


    cinematicGallery.style.display =
        "block";


    cinematicGallery.classList.add(
        "scene-active"
    );

}


/* =========================================
   MEMORY → GALLERY
========================================= */

if (
    memoryEnding &&
    cinematicGallery
) {

    const galleryRevealObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            showCinematicGallery();


                            galleryRevealObserver.disconnect();

                        }

                    }
                );

            },

            {
                threshold:
                    0.15
            }

        );


    galleryRevealObserver.observe(
        memoryEnding
    );

}


/* =========================================
   GALLERY ITEM REVEAL
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
   GALLERY IMAGE PARALLAX
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
        passive:
            true
    }
);


/* =========================================
   FINAL QUESTION
========================================= */

let questionShown =
    false;


function showFinalQuestion() {

    if (
        !finalQuestionSection ||
        questionShown
    ) {

        return;

    }


    questionShown =
        true;


    finalQuestionSection.style.display =
        "flex";


    finalQuestionSection.classList.add(
        "scene-active"
    );


    void finalQuestionSection.offsetWidth;

}


/* =========================================
   GALLERY → QUESTION
========================================= */

if (
    galleryEnding &&
    finalQuestionSection
) {

    const finalQuestionObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            showFinalQuestion();


                            finalQuestionObserver.disconnect();

                        }

                    }
                );

            },

            {
                threshold:
                    0.2
            }

        );


    finalQuestionObserver.observe(
        galleryEnding
    );
/* =========================================
   NO BUTTON — ESCAPE
========================================= */

let noAttempts =
    0;


const noMessages = [

    "Nice try, Buddu 😏",

    "Nope... you're not escaping that easily 😂",

    "Almost! But I'm faster 😌❤️",

    "Buddu... seriously? 😂",

    "You know you're supposed to click YES, right? 😏",

    "The NO button has other plans 😂❤️",

    "Try again... if you can catch it 😌"

];


/* =========================================
   MOVE NO BUTTON
========================================= */

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


    /*
       Keep the NO button away
       from the YES button.
    */

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


    /*
       Change the message.
    */

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
            passive:
                false
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
                !finalQuestionSection
            ) {

                return;

            }


            /*
               YES selected.
            */

            finalQuestionSection.classList.add(
                "yes-selected"
            );


            yesButton.textContent =
                "I KNEW IT ❤️";


            yesButton.style.transform =
                "scale(1.12)";


            /*
               Disable NO button.
            */

            if (noButton) {

                noButton.style.opacity =
                    "0";


                noButton.style.pointerEvents =
                    "none";

            }


            /*
               Heart explosion.
            */

            createFinalHeartBurst();


            /*
               Wait for the heart
               animation before opening
               the letter.
            */

            setTimeout(
                function () {

                    /*
                       Hide question.
                    */

                    finalQuestionSection.classList.remove(
                        "scene-active"
                    );


                    finalQuestionSection.style.display =
                        "none";


                    /*
                       Make sure album is
                       completely hidden.
                    */

                    if (cinematicGallery) {

                        cinematicGallery.classList.remove(
                            "scene-active"
                        );


                        cinematicGallery.style.display =
                            "none";

                    }


                    /*
                       Show love letter.
                    */

                    if (loveLetterSection) {

                        loveLetterSection.style.display =
                            "block";


                        loveLetterSection.classList.add(
                            "scene-active"
                        );


                        loveLetterSection.classList.add(
                            "visible"
                        );


                        /*
                           Scroll directly
                           to the letter.
                        */

                        requestAnimationFrame(
                            function () {

                                loveLetterSection.scrollIntoView({

                                    behavior:
                                        "smooth",

                                    block:
                                        "start"

                                });


                                /*
                                   Start letter
                                   animation.
                                */

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

                    opacity:
                        0

                },

                {

                    transform:
                        "translate(-50%, -50%) scale(1.2)",

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
                        scale(.7)`,

                    opacity:
                        0

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

    if (!loveLetterSection) {

        return;

    }


    const paragraphs =
        loveLetterSection.querySelectorAll(
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


            paragraph.style.transition =
                "opacity 1s ease, transform 1s ease";


            setTimeout(
                function () {

                    paragraph.style.opacity =
                        "1";


                    paragraph.style.transform =
                        "translateY(0)";

                },
                900 +
                index *
                650
            );

        }
    );

}


/* =========================================
   LOVE LETTER CONTINUE
========================================= */

const letterContinue =
    document.querySelector(
        ".letter-continue"
    );


/* =========================================
   CREATE FINALE OVERLAY
========================================= */

let finaleOverlay =
    document.querySelector(
        ".finale-transition-overlay"
    );


if (!finaleOverlay) {

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


/* =========================================
   LOVE LETTER → GRAND FINALE
========================================= */

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
                threshold:
                    0.6
            }

        );


    finaleObserver.observe(
        letterContinue
    );

}


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


    if (finaleOverlay) {

        finaleOverlay.classList.add(
            "active"
        );

    }


    loveLetterSection.classList.add(
        "letter-ending"
    );


    setTimeout(
        function () {

            /*
               Hide letter.
            */

            loveLetterSection.style.display =
                "none";


            /*
               Show finale.
            */

            grandFinale.style.display =
                "flex";


            grandFinale.classList.add(
                "scene-active"
            );


            void grandFinale.offsetWidth;


            grandFinale.classList.add(
                "finale-revealed"
            );


            /*
               Start finale animation.
            */

            setTimeout(
                function () {

                    startGrandFinaleReveal();

                },
                800
            );


            /*
               Scroll to finale.
            */

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
   GRAND FINALE HEART BURST
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


    /*
       Reset.
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
       Reveal lines one by one.
    */

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
                index *
                1000
            );

        }
    );


    /*
       Reveal birthday message.
    */

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


    /*
       Reveal final heart.
    */

    if (finalHeart) {

        setTimeout(
            function () {

                finalHeart.classList.add(
                    "final-heart-reveal"
                );


                createFinaleHeartBurst();

            },
            1000 +
            lines.length *
            1000 +
            2200
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


    /*
       Don't restart the music if
       it is already playing.
    */

    if (
        !birthdayMusic.paused
    ) {

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
   MUSIC VOLUME
========================================= */

if (birthdayMusic) {

    birthdayMusic.volume =
        0.45;

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
   WINDOW RESIZE
========================================= */

window.addEventListener(
    "resize",
    function () {

        /*
           Keep NO button inside
           the screen if it has moved.
        */

        if (
            noButton &&
            noButton.style.position === "fixed"
        ) {

            const rect =
                noButton.getBoundingClientRect();


            const maxLeft =
                window.innerWidth -
                noButton.offsetWidth;


            const maxTop =
                window.innerHeight -
                noButton.offsetHeight;


            if (
                rect.left >
                maxLeft
            ) {

                noButton.style.left =
                    Math.max(
                        10,
                        maxLeft
                    ) +
                    "px";

            }


            if (
                rect.top >
                maxTop
            ) {

                noButton.style.top =
                    Math.max(
                        10,
                        maxTop
                    ) +
                    "px";

            }

        }

    }
);


/* =========================================
   GALLERY IMAGE SAFETY
========================================= */

/*
   This does NOT change any JPG filename.

   It simply makes sure the images stay
   inside their gallery containers.
*/

if (galleryItems.length) {

    galleryItems.forEach(
        function (item) {

            const image =
                item.querySelector(
                    "img"
                );


            if (!image) {

                return;

            }


            image.addEventListener(
                "load",
                function () {

                    image.style.maxWidth =
                        "100%";


                    image.style.display =
                        "block";

                }
            );

        }
    );

}


/* =========================================
   GALLERY 3 FULL IMAGE FIX
========================================= */

/*
   gallery3.jpg should show the complete
   image rather than being unnecessarily
   cropped.

   We identify it by its EXISTING filename.
*/

const gallery3Image =
    Array.from(
        document.querySelectorAll(
            'img[src*="gallery3.jpg"]'
        )
    );


gallery3Image.forEach(
    function (image) {

        image.style.objectFit =
            "contain";


        image.style.objectPosition =
            "center";


        image.style.width =
            "100%";


        image.style.height =
            "100%";

    }
);


/* =========================================
   PAGE LOAD
========================================= */

window.addEventListener(
    "load",
    function () {

        /*
           Keep album hidden initially.
        */

        if (cinematicGallery) {

            cinematicGallery.style.display =
                "none";

            cinematicGallery.classList.remove(
                "scene-active"
            );

        }


        /*
           Keep question hidden initially.
        */

        if (finalQuestionSection) {

            finalQuestionSection.style.display =
                "none";

            finalQuestionSection.classList.remove(
                "scene-active"
            );

        }


        /*
           Keep love letter hidden
           until YES is selected.
        */

        if (loveLetterSection) {

            /*
               Only hide it if it isn't
               already being controlled by
               the existing CSS.
            */

            const computedStyle =
                window.getComputedStyle(
                    loveLetterSection
                );


            if (
                computedStyle.display !==
                "none"
            ) {

                /*
                   Do not force-hide a letter
                   that CSS intentionally shows.
                */

            }

        }


        /*
           Grand finale stays hidden until
           its transition.
        */

        if (grandFinale) {

            /*
               Only apply this if it is
               not already active.
            */

            if (
                !grandFinale.classList.contains(
                    "scene-active"
                )
            ) {

                grandFinale.style.display =
                    "none";

            }

        }

    }
);


/* =========================================
   DOCUMENT READY SAFETY
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        /*
           Make sure gallery images
           have their natural proportions
           available to the browser.
        */

        const allGalleryImages =
            document.querySelectorAll(
                "#cinematicGallery img"
            );


        allGalleryImages.forEach(
            function (image) {

                image.addEventListener(
                    "error",
                    function () {

                        console.warn(
                            "Gallery image could not be loaded:",
                            image.getAttribute(
                                "src"
                            )
                        );

                    }
                );

            }
        );

    }
);


/* =========================================
   DEBUG INFORMATION
========================================= */

console.log(
    "❤️ Birthday website JavaScript loaded."
);

console.log(
    "🎞️ Cinematic Gallery:",
    cinematicGallery
);

console.log(
    "💗 Final Question:",
    finalQuestionSection
);

console.log(
    "💌 Love Letter:",
    loveLetterSection
);

console.log(
    "✨ Grand Finale:",
    grandFinale
);


/* =========================================
   END OF SCRIPT
========================================= */

}
