const children = [
    {'Vampires': 1, 'Zombies': 1, 'Witches': 1, 'Houses': 1},
    {'Vampires': 3, 'Zombies': 2, 'Witches': 1, 'Houses': 10},
    {'Vampires': 4, 'Zombies': 7, 'Witches': 3, 'Houses': 4},
    {'Vampires': 1, 'Zombies': 1, 'Witches': 7, 'Houses': 5},
    {'Vampires': 5, 'Zombies': 5, 'Witches': 1, 'Houses': 8},
    {'Vampires': 2, 'Zombies': 4, 'Witches': 1, 'Houses': 14},
    {'Vampires': 1, 'Zombies': 2, 'Witches': 4, 'Houses': 3},
    {'Vampires': 6, 'Zombies': 2, 'Witches': 3, 'Houses': 11},
    {'Vampires': 2, 'Zombies': 1, 'Witches': 4, 'Houses': 5},
    {'Vampires': 6, 'Zombies': 5, 'Witches': 5, 'Houses': 10}
];

function divide(input) {
    for (let i = 0; i < input.length; i++) {
        const vampireCandy = input[i].Vampires * 3;
        const zombieCandy = input[i].Zombies * 4;
        const witchCandy = input[i].Witches * 5;

        const allCandy = (vampireCandy + zombieCandy + witchCandy) * input[i].Houses;

        const allChildren = input[i].Vampires + input[i].Zombies + input[i].Witches;
        const divided = Math.floor(allCandy / allChildren);

        addRow(allChildren, divided);
    }
}

function addRow(amount, divide) {
    const outputElem = document.querySelector('.table tbody');
    const elem = document.createElement('tr');
    elem.innerHTML =
        `<td>${amount}</td>
         <td>${divide}</td>
       `;
    outputElem.append(elem);
}

divide(children);
// todo optimize this