const $btn = document.getElementById('btn-kick');
const character ={
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character')
}

const enemy ={
    name:'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy')
}

$btn.addEventListener('click',function(){
    console.log('kick');
    console.log(random(20));
    changeHP(random(20), character);
    changeHP(random(20), enemy);
});

function init(){
    console.log('Start game');
    renderHP(character);
    renderHP(enemy);
}

function renderHP(person){
    renderHPLife(person);
    renderProgressbarHP(person);
}
function renderHPLife(person){
    person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
}

function renderProgressbarHP(person){
    person.elProgressbar.style.width = person.damageHP + '%';
}

function changeHP(count,person){
    if(person.damageHP < count){
        person.damageHP = 0;
        alert('Бедный '+ person.name +' проиграл бой!!!');
        $btn.disabled = true;
    }else{
        person.damageHP -= count;
    }
    renderHP(person);
}

function random(num){
    return Math.ceil(Math.random()*num);
}
init();