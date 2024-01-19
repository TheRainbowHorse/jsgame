const $btnKick = document.getElementById('btn-kick');
const $btnShock = document.getElementById('btn-shock');

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
    this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
}

function renderProgressbarHP() {
    this.elProgressbar.style.width = (this.damageHP / this.defaultHP * 100) + '%';
}

function changeHP(count) {
    if (this.damageHP != 0){
        if (this.damageHP < count) {
            this.damageHP = 0;
        } else {
            this.damageHP -= count;
        }
        if (this.damageHP == 0) {
            alert('Бедный ' + this.name + ' проиграл бой!');
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