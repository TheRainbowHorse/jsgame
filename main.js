import { generateLog } from "./logs.js";
import { pokemons } from "./pokemons.js";
import Pokemon from "./pokemon.js";
import random from "./utils.js";

const $btn1 = document.getElementById('btn1');
const $btn2 = document.getElementById('btn2');
const $logs = document.getElementById('logs');

const player1 = new Pokemon({
    name: 'Pikachu',
    hp: '100',
    type: 'electric',
    selectors: 'player1'
});

const player2 = new Pokemon({
    name: 'Charmander',
    hp: '100',
    type: 'fire',
    selectors: 'player2'
});

const btnCountJolt = countBtn(6, $btn1);
$btn1.addEventListener('click', function () {
    btnCountJolt();
    player1.changeHP(random(60, 20), function (count) {
        const log = generateLog(player1, player2, count);
        console.log(log + `HP - ${count}`);
        const $p = document.createElement('p');
        $p.innerText = log + " Нанесено " + count + " урона: " + count + "/" + player1.hp.total;
        $logs.insertBefore($p, $logs.children[0]);
    });
    player2.changeHP(random(60, 20), function (count) { 
        const log = generateLog(player2, player1, count);
        console.log(log + `HP - ${count}`);
        const $p = document.createElement('p');
        $p.innerText = log + " Нанесено " + count + " урона: " + count + "/" + player2.hp.total;
        $logs.insertBefore($p, $logs.children[0]);
    });
    if (player1.hp.current == 0) alert('Бедный ' + player1.name + ' проиграл бой!');
    if (player2.hp.current == 0) alert('Бедный ' + player2.name + ' проиграл бой!');
    if (player1.hp.current == 0 || player2.hp.current == 0){
        $btn1.disabled = true;
        $btn2.disabled = true;
    }
});

const btnElectroBall = countBtn(10, $btn2);
$btn2.addEventListener('click', function () {
    btnElectroBall();
    player1.changeHP(random(60, 20), function (count) {
        const log = generateLog(player1, player2, count);
        console.log(log + `HP - ${count}`);
        const $p = document.createElement('p');
        $p.innerText = log + " Нанесено " + count + " урона: " + count + "/" + player1.hp.total;
        $logs.insertBefore($p, $logs.children[0]);
    });
    player2.changeHP(random(20), function (count) {
        const log = generateLog(player2, player1, count);
        console.log(log + `HP - ${count}`);
        const $p = document.createElement('p');
        $p.innerText = log + " Нанесено " + count + " урона: " + count + "/" + player2.hp.total;
        $logs.insertBefore($p, $logs.children[0]);
    });
    if (player1.hp.current == 0) alert('Бедный ' + player1.name + ' проиграл бой!');
    if (player2.hp.current == 0) alert('Бедный ' + player2.name + ' проиграл бой!');
    if (player1.hp.current == 0 || player2.hp.current == 0){
        $btn1.disabled = true;
        $btn2.disabled = true;
    }
});

function countBtn(count = 6, el){
    const innerText = el.innerText;
    el.innerText = `${innerText} (${count})`;
    return function () {
        count--;
        if (count === 0) {
            el.disabled = true;
        }

        el.innerText = `${innerText} (${count})`;
    }
}

const init = () => {
    console.log('Start Game!');
}

init();