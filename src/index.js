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
        player.innerHTML = `<form><input type="text" class="nameInput" id="player${i}"/><select class="inputPref">
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

const placeNeeded = (playerArray, index, playerInd, checklist) => {
    const wanted = [];
    for(let i=0;i<10;i++) {
        if(i!=playerInd) {
            if(!playerArray[i].placed) {
                if(playerArray[i].preferred.includes('avoidTop')){
                    if(index!=0&&index!=1){
                        wanted.push(playerArray[i]);
                    }
                }
                else if(playerArray[i].preferred.includes('avoidJungle')){
                    if(index!=2&&index!=3){
                        wanted.push(playerArray[i]);
                    }
                }
                else if(playerArray[i].preferred.includes('avoidMid')){
                    if(index!=4&&index!=5){
                        wanted.push(playerArray[i]);
                    }
                }
                else if(playerArray[i].preferred.includes('avoidBot')){
                    if(index!=6&&index!=7){
                        wanted.push(playerArray[i]);
                    }
                }
                else if(playerArray[i].preferred.includes('avoidSup')){
                    if(index!=8&&index!=9){
                        wanted.push(playerArray[i]);
                    }
                }
                else {
                    wanted.push(playerArray[i]);
                }
            }
        }
    }
    for(let i=0;i<wanted.length;i++) {
        let count = 0;
        for(let j=0;j<checklist.length;j++) {
            if(!(wanted[i].preferred.includes('avoidTop')&&(j==0||j==1))&&!checklist[j]) {
                count++;
            }
            else if(!(wanted[i].preferred.includes('avoidJungle')&&(j==2||j==3))&&!checklist[j]) {
                count++;
            }
            else if(!(wanted[i].preferred.includes('avoidMid')&&(j==4||j==5))&&!checklist[j]) {
                count++;
            }
            else if(!(wanted[i].preferred.includes('avoidBot')&&(j==6||j==7))&&(!checklist[j])) {
                count++;
            }
            else if(!(wanted[i].preferred.includes('avoidSup')&&(j==8||j==9))&&!checklist[j]) {
                count++;
            }
        }
        console.log(count);
        if(count==1) return true;
    }
    return false;
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
        let c = 0;
        if(!playerArray[i].placed) {
            let rand = Math.floor(Math.random()*avail.length);
            if(playerArray[i].preferred.includes('avoid')) {
                if(playerArray[i].preferred.includes('Top')) {
                    while(avail[rand]==0||avail[rand]==1||placeNeeded(playerArray, avail[rand], i, checklist)) {
                        rand = Math.floor(Math.random()*avail.length);
                        if(++c==10000){
                            alert('Failed to find teams');
                            return 'fail';
                        }
                    }
                    randomizedArray[avail[rand]] = playerArray[i];
                    playerArray[i].placed = true;
                    checklist[avail[rand]] = true;
                }
                if(playerArray[i].preferred.includes('Jungle')) {
                    while(avail[rand]==2||avail[rand]==3||placeNeeded(playerArray, avail[rand], i, checklist)){
                        rand = Math.floor(Math.random()*avail.length);
                        if(++c==10000){
                            alert('Failed to find teams');
                            return 'fail';
                        }
                    }
                    randomizedArray[avail[rand]] = playerArray[i];
                    playerArray[i].placed = true;
                    checklist[avail[rand]] = true;
                }
                if(playerArray[i].preferred.includes('Mid')) {
                    while(avail[rand]==4||avail[rand]==5||placeNeeded(playerArray, avail[rand], i, checklist)){
                        rand = Math.floor(Math.random()*avail.length);
                        if(++c==10000){
                            alert('Failed to find teams');
                            return 'fail';
                        }
                    }
                    randomizedArray[avail[rand]] = playerArray[i];
                    playerArray[i].placed = true;
                    checklist[avail[rand]] = true;
                }
                if(playerArray[i].preferred.includes('Bot')||placeNeeded(playerArray, avail[rand], i, checklist)) {
                    while(avail[rand]==6||avail[rand]==7){
                        rand = Math.floor(Math.random()*avail.length);
                        if(++c==10000){
                            alert('Failed to find teams');
                            return 'fail';
                        }
                    }
                    randomizedArray[avail[rand]] = playerArray[i];
                    playerArray[i].placed = true;
                    checklist[avail[rand]] = true;
                }
                if(playerArray[i].preferred.includes('Sup')) {
                    while(avail[rand]==8||avail[rand]==9||placeNeeded(playerArray, avail[rand], i, checklist)){
                        rand = Math.floor(Math.random()*avail.length);
                        if(++c==10000){
                            alert('Failed to find teams');
                            return 'fail';
                        }
                    }
                    randomizedArray[avail[rand]] = playerArray[i];
                    playerArray[i].placed = true;
                    checklist[avail[rand]] = true;
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
            randomizedArray[avail[rand]] = playerArray[i];
            playerArray[i].placed = true;
            checklist[avail[rand]] = true;
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
    if(randomizedArray=='fail') return;

    placePlayers(randomizedArray);
    let ele = document.querySelectorAll('.resItem')[10];
    ele.scrollIntoView();
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