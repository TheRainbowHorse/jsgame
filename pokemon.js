class Selectors {
    constructor(name) {
        this.elHP = document.getElementById(`health-${name}`);
        this.elProgressbar = document.getElementById(`progressbar-${name}`);
    }
}

class Pokemon extends Selectors {
    constructor({ name, hp, type, selectors }) {
        super(selectors);

        this.name = name;
        this.hp = {
            current: hp,
            total: hp,
        };
        this.type = type;

        this.renderHP();
    }

    changeHP = (count, cb) => {
        this.hp.current -= count;

        if (this.hp.current <= 0) {
            this.hp.current = 0;
        }

        this.renderHP();
        cb && cb(count);
    }

    renderHP = () => {
        this.renderHPLife();
        this.renderProgressbarHP();
    }

    renderHPLife = () => {
        const { hp: { current, total }, elHP: element } = this;
        element.innerText = current + ' / ' + total;
    }

    renderProgressbarHP = () => {
        const { hp: { current, total }, elProgressbar: element } = this;
        element.style.width = (current / total * 100) + '%';
    }
}

export default Pokemon;