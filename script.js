/* =========================================================
   BIRTHDAY SURPRISE WEBSITE
   COMPLETE SCRIPT
   FINAL STABLE VERSION
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

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

const loveLetter =
    document.getElementById("loveLetterSection");

const grandFinale =
    document.getElementById("grandFinale");

const birthdayMusic =
    document.getElementById("birthdayMusic");

const letterContinue =
    document.querySelector(".letter-continue");


/* =========================================================
   INITIAL STATE
========================================================= */

if (cinematicGallery) {

    cinematicGallery.style.display = "none";

    cinematicGallery.classList.remove(
        "scene-active"
    );
}


if (finalQuestionSection) {

    finalQuestionSection.style.display = "none";

    finalQuestionSection.classList.remove(
        "scene-active"
    );
}


/*
   The love letter must remain under the
   control of the HTML/CSS until YES is clicked.
*/


/* =========================================================
   CREATE STARS
========================================================= */

if (starsContainer) {

    for (
        let i = 0;
        i < 120;
        i++
    ) {

        const star =
            document.createElement("div");

        star.className = "star";

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


/* =========================================================
   OPEN BIRTHDAY
========================================================= */

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


/* =========================================================
   BUTTON FOCUS
========================================================= */

if (surpriseButton) {

    surpriseButton.addEventListener(
        "mousedown",
        function () {

            surpriseButton.blur();

        }
    );
}


/* =========================================================
   HEART BUTTON
========================================================= */

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


/* =========================================================
   HEART BURST
========================================================= */

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
            "10000";

        particle.style.pointerEvents =
            "none";

        particle.style.fontSize =
            Math.random() * 14 +
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
            1800
        );
    }
}


/* =========================================================
   BIRTHDAY PARTICLES
========================================================= */

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


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


if (revealElements.length) {

    const revealObserver =
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

            revealObserver.observe(
                element
            );

        }
    );
}


/* =========================================================
   MOUSE PARALLAX
========================================================= */

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


/* =========================================================
   MEMORY FILM STRIP
========================================================= */

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
                    progress * 850;


                filmTrack.style.transform =
                    `translateX(-${movement}px)`;

            }

        },
        {
            passive: true
        }
    );
}


/* =========================================================
   CINEMATIC GALLERY
========================================================= */

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


/* =========================================================
   MEMORY → GALLERY
========================================================= */

if (
    memoryEnding &&
    cinematicGallery
) {

    const galleryObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            showCinematicGallery();

                            galleryObserver.disconnect();

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    galleryObserver.observe(
        memoryEnding
    );
}


/* =========================================================
   GALLERY ITEMS
========================================================= */

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
                threshold: 0.15
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


/* =========================================================
   GALLERY IMAGE HANDLING
========================================================= */

galleryItems.forEach(
    function (item) {

        const image =
            item.querySelector("img");


        if (!image) {
            return;
        }


        image.addEventListener(
            "load",
            function () {

                image.style.display =
                    "block";

                image.style.maxWidth =
                    "100%";

            }
        );


        image.addEventListener(
            "error",
            function () {

                console.warn(
                    "Gallery image failed:",
                    image.src
                );

            }
        );

    }
);


/* =========================================================
   GALLERY 3 — COMPLETE IMAGE
========================================================= */

const gallery3Images =
    document.querySelectorAll(
        'img[src*="gallery3.jpg"]'
    );


gallery3Images.forEach(
    function (image) {

        image.style.objectFit =
            "contain";

        image.style.objectPosition =
            "center";

    }
);


/* =========================================================
   GALLERY PARALLAX
========================================================= */

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


                if (
                    rect.bottom < 0 ||
                    rect.top >
                    window.innerHeight
                ) {

                    return;
                }


                const center =
                    window.innerHeight / 2;


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


/* =========================================================
   GALLERY → FINAL QUESTION
========================================================= */

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


/* =========================================================
   NO BUTTON
========================================================= */

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


function moveNoButton() {

    if (!noButton) {
        return;
    }


    noAttempts++;


    const padding =
        20;


    const buttonWidth =
        noButton.offsetWidth;


    const buttonHeight =
        noButton.offsetHeight;


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


    let x =
        Math.random() *
        (maxX - padding) +
        padding;


    let y =
        Math.random() *
        (maxY - padding) +
        padding;


    if (yesButton) {

        const yesRect =
            yesButton.getBoundingClientRect();


        if (
            Math.abs(
                x - yesRect.left
            ) < 180 &&
            Math.abs(
                y - yesRect.top
            ) < 120
        ) {

            x += 220;


            if (
                x > maxX
            ) {

                x -= 440;
            }

        }
    }


    noButton.style.position =
        "fixed";


    noButton.style.left =
        x + "px";


    noButton.style.top =
        y + "px";


    noButton.style.zIndex =
        "9999";


    noButton.style.transform =
        `rotate(${Math.random() * 16 - 8}deg)
         scale(1.05)`;


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


/* =========================================================
   NO BUTTON EVENTS
========================================================= */

if (noButton) {

    noButton.addEventListener(
        "mouseenter",
        moveNoButton
    );


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


    noButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            moveNoButton();

        }
    );
}


/* =========================================================
   YES BUTTON
========================================================= */

if (yesButton) {

    yesButton.addEventListener(
        "click",
        function () {

            if (
                !finalQuestionSection
            ) {

                return;
            }


            finalQuestionSection.classList.add(
                "yes-selected"
            );


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

                    finalQuestionSection.style.display =
                        "none";


                    finalQuestionSection.classList.remove(
                        "scene-active"
                    );


                    /*
                       Hide gallery so it cannot
                       appear behind the letter.
                    */

                    if (cinematicGallery) {

                        cinematicGallery.style.display =
                            "none";

                        cinematicGallery.classList.remove(
                            "scene-active"
                        );
                    }


                    /*
                       Open love letter.
                    */

                    if (loveLetter) {

                        loveLetter.style.display =
                            "block";

                        loveLetter.classList.add(
                            "scene-active"
                        );


                        loveLetter.scrollIntoView({

                            behavior:
                                "smooth",

                            block:
                                "start"

                        });


                        setTimeout(
                            function () {

                                revealLoveLetter();

                            },
                            700
                        );
                    }

                },
                2200
            );
        }
    );
}


/* =========================================================
   FINAL HEART BURST
========================================================= */

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


/* =========================================================
   LOVE LETTER
========================================================= */

function revealLoveLetter() {

    if (!loveLetter) {
        return;
    }


    const paragraphs =
        loveLetter.querySelectorAll(
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
                index * 650
            );
        }
    );
}


/* =========================================================
   LOVE LETTER → GRAND FINALE
   IMPORTANT:
   NO AUTOMATIC INTERSECTION OBSERVER HERE.
   
   The final page opens ONLY when the
   letter continue button is clicked.
========================================================= */

if (
    letterContinue &&
    grandFinale
) {

    letterContinue.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            cinematicFinaleTransition();

        }
    );
}


/* =========================================================
   FINALE OVERLAY
========================================================= */

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


/* =========================================================
   CINEMATIC FINALE
========================================================= */

function cinematicFinaleTransition() {

    if (
        !loveLetter ||
        !grandFinale
    ) {

        return;
    }


    /*
       Prevent multiple clicks.
    */

    if (
        grandFinale.classList.contains(
            "finale-revealed"
        )
    ) {

        return;
    }


    if (finaleOverlay) {

        finaleOverlay.classList.add(
            "active"
        );
    }


    loveLetter.classList.add(
        "letter-ending"
    );


    setTimeout(
        function () {

            /*
               Hide love letter.
            */

            loveLetter.style.display =
                "none";


            /*
               Show grand finale.
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
               Scroll to final page.
            */

            grandFinale.scrollIntoView({

                behavior:
                    "instant",

                block:
                    "start"

            });


            /*
               Start final animation.
            */

            setTimeout(
                function () {

                    startGrandFinaleReveal();

                },
                800
            );

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


/* =========================================================
   GRAND FINALE REVEAL
========================================================= */

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


                createFinaleHeartBurst();

            },
            1000 +
            lines.length *
            1000 +
            2200
        );
    }
}


/* =========================================================
   FINALE HEART BURST
========================================================= */

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

                    opacity: 0
                },

                {
                    transform:
                        "translate(-50%, -50%) scale(1)",

                    opacity: 1,

                    offset: 0.15
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )
                        scale(.5)`,

                    opacity: 0
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


/* =========================================================
   MUSIC
========================================================= */

function startBirthdayMusic() {

    if (!birthdayMusic) {
        return;
    }


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


if (birthdayMusic) {

    birthdayMusic.volume =
        0.45;
}


/* =========================================================
   CURSOR POSITION
========================================================= */

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


/* =========================================================
   WINDOW RESIZE
========================================================= */

window.addEventListener(
    "resize",
    function () {

        if (
            !noButton ||
            noButton.style.position !==
            "fixed"
        ) {

            return;
        }


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
);


/* =========================================================
   PAGE LOAD SAFETY
========================================================= */

window.addEventListener(
    "load",
    function () {

        /*
           Gallery hidden at start.
        */

        if (cinematicGallery) {

            cinematicGallery.style.display =
                "none";

        }


        /*
           Question hidden at start.
        */

        if (finalQuestionSection) {

            finalQuestionSection.style.display =
                "none";

        }

    }
);


/* =========================================================
   DEBUG
========================================================= */

console.log(
    "❤️ Birthday Surprise JS loaded successfully."
);

console.log(
    "🎞️ Gallery:",
    cinematicGallery
);

console.log(
    "💗 Question:",
    finalQuestionSection
);

console.log(
    "💌 Love Letter:",
    loveLetter
);

console.log(
    "✨ Grand Finale:",
    grandFinale
);


/* =========================================================
   END
========================================================= */
