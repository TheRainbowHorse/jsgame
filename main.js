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

let counter = () => {
    let counter = 6;
    return () => {
        if (counter > 0) counter--;
        else return null;
        console.log(counter);
        return counter
    }
}
const count1 = counter();
const count2 = counter();

$btnKick.addEventListener('click', () => {
    const count = count1();
    if (count != null) {
        $btnKick.innerText = 'Thunder Jolt ' + count + '/6';
        console.log('Kick');
        if (enemy1.damageHP > 0 || enemy2.damageHP > 0) character.changeHP(random(20));
        if (character.damageHP > 0) {
            enemy1.changeHP(random(20));
            enemy2.changeHP(random(20));
        }
    }
    if (count == 0 || character.damageHP == 0) {
        $btnKick.disabled = true;
    }
});

$btnShock.addEventListener('click', () => {
    const count = count2();
    if (count != null) {
        $btnShock.innerText = 'Thunder Shock ' + count + '/6';
        console.log('Kick');
        if (enemy1.damageHP > 0 || enemy2.damageHP > 0) character.changeHP(random(20));
        if (character.damageHP > 0) {
            enemy1.changeHP(random(60));
            enemy2.changeHP(random(60));
        }
    }
    if (count == 0 || character.damageHP == 0) {
        $btnShock.disabled = true;
    }
});

const init = () => {
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
            if ((enemy1.damageHP == 0 && enemy2.damageHP == 0) || character.damageHP == 0){
                $btnKick.disabled = true;
                $btnShock.disabled = true;
            }
        }
    }

    this.renderHP();
}

const random = (num) => {
    return Math.ceil(Math.random() * num);
}

init();