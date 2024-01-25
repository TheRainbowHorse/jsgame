export const generateLog = (first, second) => {
    const { name: firstPerson } = first;
    const { name: secondPerson } = second;
    const logs = [
        `${firstPerson} вспомнил что-то важное, но неожиданно ${secondPerson}, не помня себя от испуга, ударил в предплечье врага.`,
        `${firstPerson} поперхнулся, и за это ${secondPerson} с испугу приложил прямой удар коленом в лоб врага.`,
        `${firstPerson} забылся, но в это время наглый ${secondPerson}, приняв волевое решение, неслышно подойдя сзади, ударил.`,
        `${firstPerson} пришел в себя, но неожиданно ${secondPerson} случайно нанес мощнейший удар.`,
        `${firstPerson} поперхнулся, но в это время ${secondPerson} нехотя раздробил кулаком \<вырезанно цензурой\> противника.`,
        `${firstPerson} удивился, а ${secondPerson} пошатнувшись влепил подлый удар.`,
        `${firstPerson} высморкался, но неожиданно ${secondPerson} провел дробящий удар.`,
        `${firstPerson} пошатнулся, и внезапно наглый ${secondPerson} беспричинно ударил в ногу противника`,
        `${firstPerson} расстроился, как вдруг, неожиданно ${secondPerson} случайно влепил стопой в живот соперника.`,
        `${firstPerson} пытался что-то сказать, но вдруг, неожиданно ${secondPerson} со скуки, разбил бровь сопернику.`
    ];

    return logs[Math.ceil(Math.random() * logs.length) - 1];
}