class Player {
    constructor(name, preferred) {
        this.name = name;
        this.preferred = preferred;
        this.placed = false;
    }
}
const playerContainer = () => {
    const element = document.createElement('div');
    element.setAttribute('class', 'playerContainer');
    document.querySelector('#root').appendChild(element);

    for(let i=1;i<=10;i++) {
        const player = document.createElement('div');
        player.innerHTML = `<form>Player:<input type="text" class="nameInput" id="player${i}"/><select class="inputPref">
                <option value="random">Random</option>
                <option value="forceTop">Force Top</option>
                <option value="forceJungle">Force Jungle</option>
                <option value="forceMid">Force Mid</option>
                <option value="forceBot">Force Bot</option>
                <option value="forceSup">Force Sup</option>
                <option value="avoidTop">Avoid Top</option>
                <option value="avoidJungle">Avoid Jungle</option>
                <option value="avoidMid">Avoid Mid</option>
                <option value="avoidBot">Avoid Bot</option>
                <option value="avoidSup">Avoid Sup</option>
            </select>
            </form>
        `;
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
    for(let i=1;i<=18;i++) {
        const item = document.createElement('div');
        item.setAttribute('class', 'resItem');
        if(i==1) {
            item.innerHTML = 'Team A';
            item.setAttribute('class', 'teamName');
        }
        if(i==3) {
            item.innerHTML = 'Team B';
            item.setAttribute('class', 'teamName');
        }
        if(i==5) {
            item.innerHTML = '- Top -';
            item.setAttribute('class', 'Position');
        }
        if(i==8) {
            item.innerHTML = '- Jungle -';
            item.setAttribute('class', 'Position');
        }
        if(i==11) {
            item.innerHTML = '- Mid -';
            item.setAttribute('class', 'Position');
        }
        if(i==14) {
            item.innerHTML = '- Bottom -';
            item.setAttribute('class', 'Position');
        }
        if(i==17) {
            item.innerHTML = '- Support -';
            item.setAttribute('class', 'Position');
        }
        element.appendChild(item);
    }
}

const placePlayers = (playerArray) => {
    let j = 0;
    for(let i=4;i<=18;i+=2) {
        const place = document.querySelector(`.resContainer div:nth-child(${i})`);
        place.innerHTML = playerArray[j].name;
        j++
        if(i%3==0) i--;
    }
}

const randomize = (playerArray) => {
    const randomizedArray = [0,0,0,0,0,0,0,0,0,0];
    const checklist = [false,false,false,false,false,false,false,false,false,false];
    for(let i=0;i<10;i++) {
        if(playerArray[i].preferred.includes('force')) {
            const rand = Math.floor(Math.random()*10);
            if(playerArray[i].preferred.includes('Top')) {
                if(checklist[0]&&checklist[1]){
                    alert("You can't force 3 players to play the same role!!!");
                    return 'fail';
                }
                else if(!checklist[0]&&!checklist[1]){
                    if(rand%2==0) {
                        randomizedArray[0] = playerArray[i];
                        checklist[0] = true;
                        playerArray[i].placed = true;
                    }
                    else {
                        randomizedArray[1] = playerArray[i];
                        checklist[1] = true;
                        playerArray[i].placed = true;
                    }
                }
                else {
                    if(checklist[0]){
                        randomizedArray[1] = playerArray[i];
                        checklist[1] = true;
                        playerArray[i].placed = true;
                    }
                    else {
                        randomizedArray[0] = playerArray[i];
                        checklist[0] = true;
                        playerArray[i].placed = true;
                    }
                }
            }
            if(playerArray[i].preferred.includes('Jungle')) {
                if(checklist[2]&&checklist[3]){
                    alert("You can't force 3 players to play the same role!!!");
                    return 'fail';
                }
                else if(!checklist[2]&&!checklist[3]){
                    if(rand%2==0) {
                        randomizedArray[2] = playerArray[i];
                        checklist[2] = true;
                        playerArray[i].placed = true;
                    }
                    else {
                        randomizedArray[3] = playerArray[i];
                        checklist[3] = true;
                        playerArray[i].placed = true;
                    }
                }
                else {
                    if(checklist[2]){
                        randomizedArray[3] = playerArray[i];
                        checklist[3] = true;
                        playerArray[i].placed = true;
                    }
                    else {
                        randomizedArray[2] = playerArray[i];
                        checklist[2] = true;
                        playerArray[i].placed = true;
                    }
                }
            }
            if(playerArray[i].preferred.includes('Mid')) {
                if(checklist[4]&&checklist[5]){
                    alert("You can't force 3 players to play the same role!!!");
                    return 'fail';
                }
                else if(!checklist[4]&&!checklist[5]){
                    if(rand%2==0) {
                        randomizedArray[4] = playerArray[i];
                        checklist[4] = true;
                        playerArray[i].placed = true;
                    }
                    else {
                        randomizedArray[5] = playerArray[i];
                        checklist[5] = true;
                        playerArray[i].placed = true;
                    }
                }
                else {
                    if(checklist[4]){
                        randomizedArray[5] = playerArray[i];
                        checklist[5] = true;
                        playerArray[i].placed = true;
                    }
                    else {
                        randomizedArray[4] = playerArray[i];
                        checklist[4] = true;
                        playerArray[i].placed = true;
                    }
                }
            }
            if(playerArray[i].preferred.includes('Bot')) {
                if(checklist[6]&&checklist[7]){
                    alert("You can't force 3 players to play the same role!!!");
                    return 'fail';
                }
                else if(!checklist[6]&&!checklist[7]){
                    if(rand%2==0) {
                        randomizedArray[6] = playerArray[i];
                        checklist[6] = true;
                        playerArray[i].placed = true;
                    }
                    else {
                        randomizedArray[7] = playerArray[i];
                        checklist[7] = true;
                        playerArray[i].placed = true;
                    }
                }
                else {
                    if(checklist[6]){
                        randomizedArray[7] = playerArray[i];
                        checklist[7] = true;
                        playerArray[i].placed = true;
                    }
                    else {
                        randomizedArray[6] = playerArray[i];
                        checklist[6] = true;
                        playerArray[i].placed = true;
                    }
                }    
            }
            if(playerArray[i].preferred.includes('Sup')) {
                if(checklist[8]&&checklist[9]){
                    alert("You can't force 3 players to play the same role!!!");
                    return 'fail';
                }
                else if(!checklist[8]&&!checklist[9]){
                    if(rand%2==0) {
                        randomizedArray[8] = playerArray[i];
                        checklist[8] = true;
                        playerArray[i].placed = true;
                    }
                    else {
                        randomizedArray[9] = playerArray[i];
                        checklist[9] = true;
                        playerArray[i].placed = true;
                    }
                }
                else {
                    if(checklist[8]){
                        randomizedArray[9] = playerArray[i];
                        checklist[9] = true;
                        playerArray[i].placed = true;
                    }
                    else {
                        randomizedArray[8] = playerArray[i];
                        checklist[8] = true;
                        playerArray[i].placed = true;
                    }
                }
            }
        }
    }
    
    for(let i=0;i<10;i++) {
        const avail = [];
        for(let i=0;i<10;i++) {
            if(!checklist[i]) avail.push(i);
        }
        if(!playerArray[i].placed) {
            let rand = Math.floor(Math.random()*avail.length);
            if(playerArray[i].preferred.includes('avoid')) {
                if(playerArray[i].preferred.includes('Top')) {
                    while(avail[rand]==0||avail[rand]==1){
                        rand = Math.floor(Math.random()*avail.length);
                    }
                    randomizedArray[avail[rand]] = playerArray[i];
                    playerArray[i].placed = true;
                    checklist[avail[rand]] = true;
                }
                if(playerArray[i].preferred.includes('Jungle')) {
                    while(avail[rand]==2||avail[rand]==3){
                        rand = Math.floor(Math.random()*avail.length);
                    }
                    randomizedArray[avail[rand]] = playerArray[i];
                    playerArray[i].placed = true;
                    checklist[avail[rand]] = true;
                }
                if(playerArray[i].preferred.includes('Mid')) {
                    while(avail[rand]==4||avail[rand]==5){
                        rand = Math.floor(Math.random()*avail.length);
                    }
                    randomizedArray[avail[rand]] = playerArray[i];
                    playerArray[i].placed = true;
                    checklist[avail[rand]] = true;
                }
                if(playerArray[i].preferred.includes('Bot')) {
                    while(avail[rand]==6||avail[rand]==7){
                        rand = Math.floor(Math.random()*avail.length);
                    }
                    randomizedArray[avail[rand]] = playerArray[i];
                    playerArray[i].placed = true;
                    checklist[avail[rand]] = true;
                }
                if(playerArray[i].preferred.includes('Sup')) {
                    while(avail[rand]==8||avail[rand]==9){
                        rand = Math.floor(Math.random()*avail.length);
                    }
                    randomizedArray[avail[rand]] = playerArray[i];
                    playerArray[i].placed = true;
                    checklist[avail[rand]] = true;
                }
            }
            else {
                randomizedArray[avail[rand]] = playerArray[i];
                playerArray[i].placed = true;
                checklist[avail[rand]] = true;
            }
        }
    }
    return randomizedArray;
}

const gatherPlayers = () => {  
    const playerArray = [];
    for(let i=0;i<10;i++) {
        const name = document.querySelectorAll('.nameInput')[i].value;
        const preferred = document.querySelectorAll('.inputPref')[i].value;
        const player = new Player(name, preferred);
        playerArray.push(player);
    }
    const randomizedArray = randomize(playerArray);
    if(randomizedArray=='fail') location.reload();
    placePlayers(randomizedArray);
}

const addBaner = () => {
    const element =  document.createElement('header');
    element.setAttribute('class', 'header');
    const text = document.createElement('div');
    text.innerHTML = 'Good luck on the Fields of Justice!';
    document.querySelector('#root').appendChild(element);
    element.appendChild(text);
}


window.onload = () => {
    addBaner();
    playerContainer();
    resContainer();
    document.querySelector('.rollButton').addEventListener('click', gatherPlayers);
}