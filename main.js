const $btnKick = document.getElementById('btn-kick');
const $btnShock = document.getElementById('btn-shock');

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
}

const enemy1 = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy1'),
    elProgressbar: document.getElementById('progressbar-enemy1'),
}

const enemy2 = {
    name: 'Bulbasaur',
    defaultHP: 90,
    damageHP: 90,
    elHP: document.getElementById('health-enemy2'),
    elProgressbar: document.getElementById('progressbar-enemy2'),
}

$btnKick.addEventListener('click', function() {
    console.log('Kick');
    changeHP(random(20), character);
    changeHP(random(20), enemy1);
    changeHP(random(20), enemy2);
});

$btnShock.addEventListener('click', function() {
    console.log('Kick');
    changeHP(random(20), character);
    changeHP(random(60), enemy1);
    changeHP(random(60), enemy2);
});

function init() {
    console.log('Start Game!');
    renderHP(character);
    renderHP(enemy1);
    renderHP(enemy2);
}

function renderHP(person){
    renderHPLife(person);
    renderProgressbarHP(person);
}

function renderHPLife(person) {
    person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
}

function renderProgressbarHP(person) {
    person.elProgressbar.style.width = (person.damageHP / person.defaultHP * 100) + '%';
}

function changeHP(count, person) {
    if (person.damageHP != 0){
        if (person.damageHP < count) {
            person.damageHP = 0;
        } else {
            person.damageHP -= count;
        }
        if (person.damageHP == 0) {
            alert('Бедный ' + person.name + ' проиграл бой!');
            if (enemy1.damageHP == 0 && enemy2.damageHP == 0){
                $btnKick.disabled = true;
                $btnShock.disabled = true;
            }
        }
    }

    renderHP(person);
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

init();