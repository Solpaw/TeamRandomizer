
const playerContainer = () => {
    const element = document.createElement('div');
    element.setAttribute('class', 'playerContainer');
    document.querySelector('#root').appendChild(element);

    for(let i=1;i<=10;i++) {
        const player = document.createElement('div');
        player.innerHTML = `<form>Player ${i}:<input type="text" id="player${i}"/></form>`;
        element.appendChild(player);
    }
    const rollButton = document.createElement('div');
    rollButton.setAttribute('class', 'rollButton');
    rollButton.innerHTML = '<input type="button" value="Roll" id="rollButton"/>';
    element.appendChild(rollButton);
}

const resContainer = () => {
    const element =  document.createElement('div');
    element.setAttribute('class', 'resContainer');
    document.querySelector('#root').appendChild(element);
    for(let i=0;i<22;i++) {
        const item = document.createElement('div');
        item.setAttribute('class', 'resItem');
        if(i==0) item.innerHTML = 'Team A';
        if(i==1) item.innerHTML = 'Team B';
        if(i==2||i==4) item.innerHTML = 'Top:';
        if(i==6||i==8) item.innerHTML = 'Jungle:';
        if(i==10||i==12) item.innerHTML = 'Mid:';
        if(i==14||i==16) item.innerHTML = 'Bottom:';
        if(i==18||i==20) item.innerHTML = 'Support:';
        element.appendChild(item);
    }

}

const placePlayers = (playerArray) => {
    let j = 0;
    for(let i=4;i<=22;i+=2) {
        let box = document.querySelector(`.resItem:nth-child(${i})`);
        box.innerHTML = `${playerArray[j]}`;
        j++;
    }
}

const randomize = (playerArray) => {
    const result = [];
    for(let i=10;i>0;i--) {
        let random = Math.floor(Math.random()*i);
        console.log(random);
        result.push(playerArray[random]);
        playerArray.splice(random, 1);
    }
    return result;
}

const gatherPlayers = () => {  
    const playerArray = [];
    for(let i=1;i<=10;i++) {
        const playerName = document.querySelector(`#player${i}`).value;
        playerArray.push(playerName);
    }
    document.querySelector('#rollButton').value = "Reroll";
    const resultPlayers = randomize(playerArray);
    placePlayers(resultPlayers);
}


window.onload = () => {
    playerContainer();
    resContainer();
    document.querySelector('.rollButton').addEventListener('click', gatherPlayers);
}