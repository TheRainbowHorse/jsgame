import { generateLog } from "./logs.js";

const $btnKick = document.getElementById('btn-kick');
const $btnShock = document.getElementById('btn-shock');
const $logs = document.getElementById('logs');

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    changeHP: changeHP,
    renderHP: renderHP,
    renderHPLife: renderHPLife,
    renderProgressbarHP: renderProgressbarHP,

}

const enemy1 = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy1'),
    elProgressbar: document.getElementById('progressbar-enemy1'),
    changeHP: changeHP,
    renderHP: renderHP,
    renderHPLife: renderHPLife,
    renderProgressbarHP: renderProgressbarHP,
}

const enemy2 = {
    name: 'Bulbasaur',
    defaultHP: 90,
    damageHP: 90,
    elHP: document.getElementById('health-enemy2'),
    elProgressbar: document.getElementById('progressbar-enemy2'),
    changeHP: changeHP,
    renderHP: renderHP,
    renderHPLife: renderHPLife,
    renderProgressbarHP: renderProgressbarHP,
}

$btnKick.addEventListener('click', function() {
    console.log('Kick');
    character.changeHP(random(20));
    enemy1.changeHP(random(20));
    enemy2.changeHP(random(20));
});

$btnShock.addEventListener('click', function() {
    console.log('Kick');
    character.changeHP(random(20));
    enemy1.changeHP(random(60));
    enemy2.changeHP(random(60));
});

function init() {
    console.log('Start Game!');
    character.renderHP();
    enemy1.renderHP();
    enemy2.renderHP();
}

function renderHP(){
    this.renderHPLife();
    this.renderProgressbarHP();
}

function renderHPLife() {
    const { damageHP: curHP, defaultHP: maxHP, elHP: element } = this;
    element.innerText = curHP + ' / ' + maxHP;
}

function renderProgressbarHP() {
    const { damageHP: curHP, defaultHP: maxHP, elProgressbar: element } = this;
    element.style.width = (curHP / maxHP * 100) + '%';
}

function changeHP(count) {
    const { name } = this;
    if (this.damageHP != 0){
        if (this.damageHP < count) {
            this.damageHP = 0;
        } else {
            this.damageHP -= count;
        }
        const log = this === character ? generateLog(this, enemy1.damageHP > 0 ? enemy1 : enemy2) : generateLog(this, character);
        const $p = document.createElement('p');
        $p.innerText = log + " Нанесено " + count + " урона: " + this.damageHP + "/" + this.defaultHP;
        $logs.insertBefore($p, $logs.children[0]);
        if (this.damageHP == 0) {
            alert('Бедный ' + name + ' проиграл бой!');
            if (enemy1.damageHP == 0 && enemy2.damageHP == 0){
                $btnKick.disabled = true;
                $btnShock.disabled = true;
            }
        }
    }

    this.renderHP();
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

init();