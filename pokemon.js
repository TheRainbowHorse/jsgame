    class Selectors {
        constructor(name) {
            this.elName = document.getElementById(`name-${name}`);
            this.elImg = document.getElementById(`img-${name}`);
            this.elHP = document.getElementById(`health-${name}`);
            this.elProgressbar = document.getElementById(`progressbar-${name}`);
        }
    }

    class Pokemon extends Selectors {
        constructor({ name, hp, type, selectors, attacks = [], img }) {
            super(selectors);
            
            this.name = name;
            this.hp = {
                current: hp,
                total: hp,
            };
            this.type = type;
            this.attacks = attacks;

            this.renderHP();
            this.elName.innerText = name;
            this.elImg.setAttribute('src', img);
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
            const percent = current / total * 100;
            element.style.width = percent + '%';
            
            element.classList.remove('low');
            element.classList.remove('critical');
            if (percent < 60){
                element.classList.add('low');
                if(percent < 20){
                    element.classList.remove('low');
                    element.classList.add('critical');
                }
            }
        }
    }

    export default Pokemon;