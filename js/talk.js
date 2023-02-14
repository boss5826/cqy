new TypeIt("#ldqcqy", {
    loop: true,
    cursorSpeed: 1000,
    speed: 100
})
    .type("LDQ && CQY")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("一起走过的第二个情人节...")
    .pause(3000)
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();