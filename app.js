let UserScore = 0;
let ComputerScore = 0;
const r = document.getElementById('r');
const p = document.getElementById('p');
const s = document.getElementById('s');
const printLeft = document.querySelector('#left');
const printRight = document.querySelector('#right');
const TextOutput = document.querySelector('#printOutput');
const ComputerPrint = document.getElementById('Computer-Print');
const replayagain = document.getElementById('replay');

replay.addEventListener('click', () => {
    location.reload();
})

const Computer = () => {
    const variables = ['Rock', 'Paper', 'Scissor'];
    const number = Math.floor(Math.random() * 3);
    ComputerPrint.innerHTML = `Computer Choice: ${variables[number]}`;
    return variables[number];
}

const win = () => {
    UserScore++;
    printLeft.innerHTML = UserScore;
    TextOutput.innerHTML = 'You Won!! Congrats';
}

const loose = () => {
    ComputerScore++;
    printRight.innerHTML = ComputerScore;
    TextOutput.innerHTML = 'You Loose Better Luck next time';
}

const Tie = () => {
    TextOutput.innerHTML = 'Its a tie'
}

const Compare = (userinput) => {
    const Computerinput = Computer();
    const addBoth = userinput + Computerinput;
    switch (addBoth) {
        case 'rRock':
        case 'sScissor':
        case 'pPaper':
            Tie();
            break;

        case 'rScissor':
        case 'rScissor':
        case 'pRock':
        case 'sPaper':
            win();
            break;

        case 'pScissor':
        case 'rPaper':
        case 'sRock':
            loose();
            break;

    }
}
r.addEventListener('click', (e) => {
    Compare('r');
});

p.addEventListener('click', () => {
    Compare('p');
});

s.addEventListener('click', () => {
    Compare('s');
});