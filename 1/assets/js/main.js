const text = "><Hello#521paddawan2==)\n" +
    "Today---you0[]learn.,.-important.stuff\n" +
    "\n" +
    "*&Episode238I(&\n" +
    "#$--THE33PHANTOM]}]MENACE[[\n" +
    "\n" +
    "&^%$Turmoil32<<has!-engulfed#2the:\n" +
    "    ))-Galactic-3-0Republic.2€The8&&taxation\n" +
    "@)of#)#trade^@#*routes\"\"{}to}}[outlying239{star\n" +
    "        13-systems%%$is@%^in!235%dispute.23\n" +
    "\n" +
    "<,<Hoping><>#to81*resolve*--_the(-)matter*!*#\n" +
    "    with??a??.blockade;\\;of*&^*deadly??\n" +
    "battleships,@#%99the158*greedy%@*)Trade]}0-\n" +
    "Federation@#%3has@#@%3\"stopped>?>all<#4\n" +
    "shipping9(8to(*&the&&$small$!@planet$#*\n" +
    "#@#T&of!?Naboo.$\n" +
    "\n" +
    "    While38*the-Congress==+of#&&@the!#@\n" +
    "    Republic$@:;endlessly?%#debates|}[\n" +
    "    this235#%$^alarming_()8chain&)(@$of*&events,3\n" +
    "{[{--the0Supreme--=+Chancellor+09*has]\n" +
    "    secretly@#]dispatched!!two%%$Jedi%:;\n" +
    "    Knights,%the::guardians*&of+-\n" +
    "    peace()and][3justice)&^}in@{the^}$\n" +
    "galaxy,8to##settle%@the@#%conflict....\n" +
    "De pagina zal zichzelf herladen wanneer deze animatie klaar is";

const audioElem = document.getElementById('audio-elem');
const btn = document.querySelector('.btn-success');

btn.addEventListener('click', animation);

cleanUp(text);

function animation() {
    const overlay = document.querySelector('.overlay');
    const container = document.querySelector('.outer-container');

    // Would be better to start the animations based on callbacks, but CSS delay it is for now.
    overlay.classList.add('started');
    container.classList.add('started');

    // force reload when animation ends
    container.addEventListener('animationend', () => {
        location.reload();
    });

    audioElem.volume = 0.5;
    setTimeout(() => {audioElem.play();}, 5000)
}

function cleanUp(input) {
    input = input.split('\n');

    input.map(e => {
        e = e.replace(/[^a-zA-Z]+/g, ' ').trim();
        append(e);
    });
}

function append(input) {
    const outputElem = document.querySelector('.text');
    const elem = document.createElement('p');
    elem.innerHTML = input;
    outputElem.append(elem);
}