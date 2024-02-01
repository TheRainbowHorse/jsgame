import { generateLog } from "./logs.js";
import { pokemons } from "./pokemons.js";
import Pokemon from "./pokemon.js";
import random from "./utils.js";

// const $btn1 = document.getElementById('btn1');
// const $btn2 = document.getElementById('btn2');
const $logs = document.getElementById('logs');
const $control = document.querySelector('.control');

let player1;
// const pokemon1 = pokemons.find(item => item.name === 'Pikachu');
// let player1 = new Pokemon({
//     ...pokemon1,
//     selectors: 'player1'
// });
// player1.attacks.forEach(item => {
//     const $btn = document.createElement('button');
//     $btn.classList.add('button');
//     $btn.innerText = item.name;
//     const btnCount = countBtn(item.maxCount, $btn);
//     $btn.addEventListener('click', () => {
//         btnCount();
//         player1.changeHP(random(player2.attacks[0].maxDamage, player2.attacks[0].minDamage), function (count) {
//             displayLog(player1, player2, count);
//         });
//         player2.changeHP(random(item.maxDamage, item.minDamage), function (count) {
//             displayLog(player2, player1, count);
//         });
//         endRound();
//     });
//     $control.appendChild($btn);
// });

let player2
// const pokemon2 = pokemons.find(item => item.name === 'Charmander');
// let player2 = new Pokemon({
//     ...pokemon2,
//     selectors: 'player2'
// });

// const btnCountJolt = countBtn(6, $btn1);
// $btn1.addEventListener('click', function () {
//     btnCountJolt();
//     player1.changeHP(random(60, 20), function (count) {
//         displayLog(player1, player2, count);
//     });
//     player2.changeHP(random(60, 20), function (count) { 
//         displayLog(player2, player1, count);
//     });
//     endRound();
// });

// const btnElectroBall = countBtn(10, $btn2);
// $btn2.addEventListener('click', function () {
//     btnElectroBall();
//     player1.changeHP(random(60, 20), function (count) {
//         displayLog(player1, player2, count);
//     });
//     player2.changeHP(random(20), function (count) {
//         displayLog(player2, player1, count);
//     });
//     endRound();
// });

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

function displayLog(first, second, count){
    const log = generateLog(first, second, count);
    console.log(log + `HP - ${count}`);
    const $p = document.createElement('p');
    $p.innerText = log + " Нанесено " + count + " урона: " + first.hp.current + "/" + first.hp.total;
    $logs.insertBefore($p, $logs.children[0]);
}

class Game {
    start = () => {
        console.log('Start Game!');
        const pokemon1 = pokemons[random(6) - 1];
        player1 = new Pokemon({
            ...pokemon1,
            selectors: 'player1'
        });

        player1.attacks.forEach(item => {
            const $btn = document.createElement('button');
            $btn.classList.add('button');
            $btn.innerText = item.name;
            const btnCount = countBtn(item.maxCount, $btn);
            $btn.addEventListener('click', () => {
                btnCount();
                player1.changeHP(random(player2.attacks[0].maxDamage, player2.attacks[0].minDamage), function (count) {
                    displayLog(player1, player2, count);
                });
                player2.changeHP(random(item.maxDamage, item.minDamage), function (count) {
                    displayLog(player2, player1, count);
                });
                if (player1.hp.current == 0){
                    alert('Бедный ' + player1.name + ' проиграл бой!')
                    game.end();
                } else if (player2.hp.current == 0) {
                    alert('Бедный ' + player2.name + ' проиграл бой!')
                    game.win();
                }
            });
            $control.appendChild($btn);
        });

        const pokemon2 = pokemons[random(6) - 1];
        player2 = new Pokemon({
            ...pokemon2,
            selectors: 'player2'
        });
    }

    reset = () => {
        const buttons = document.querySelectorAll('.control .button');
        buttons.forEach($item => $item.remove());
        this.start();
    }

    end = () => {
        const buttons = document.querySelectorAll('.control .button');
        buttons.forEach($item => $item.remove());

        const $btn = document.createElement('button');
        $btn.classList.add('button');
        $btn.innerText = 'Restart';
        $btn.addEventListener('click', () => {
            this.reset();
        });
        $control.appendChild($btn);
    }

    win = () => {
        player1.hp.current = player1.hp.total;
        player1.renderHP();

        const pokemon2 = pokemons[random(6) - 1];
        player2 = new Pokemon({
            ...pokemon2,
            selectors: 'player2'
        });
    }

    renderAttacks = () => {
        
    }
}

const game = new Game();

const init = () => {
    game.start();
    // const pokemon1 = pokemons[random(6) - 1];
    // player1 = new Pokemon({
    //     ...pokemon1,
    //     selectors: 'player1'
    // });
    // player1.attacks.forEach(item => {
    //     const $btn = document.createElement('button');
    //     $btn.classList.add('button');
    //     $btn.innerText = item.name;
    //     const btnCount = countBtn(item.maxCount, $btn);
    //     $btn.addEventListener('click', () => {
    //         btnCount();
    //         player1.changeHP(random(player2.attacks[0].maxDamage, player2.attacks[0].minDamage), function (count) {
    //             displayLog(player1, player2, count);
    //         });
    //         player2.changeHP(random(item.maxDamage, item.minDamage), function (count) {
    //             displayLog(player2, player1, count);
    //         });
    //         endRound();
    //     });
    //     $control.appendChild($btn);
    // });
}

init();