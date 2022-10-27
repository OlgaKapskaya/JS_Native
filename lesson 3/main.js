//измение состояния => проверяет наличие подписчика (функции callback) =>
// =>  формируется объект с инф. о событии {event: ......} => fn(event)


const sm = document.getElementById('small');
const md = document.getElementById('medium');
const big = document.getElementById('big');
const link = document.getElementById('a');

const handler1 = (event) => {
    event.stopPropagation();
    console.log(event)
    if (event.target.tagName === 'BUTTON') {
        console.log(`Hello ${event.target.id}`)
    }
}

const handler2 = (event) => {
    event.stopPropagation();
    alert('Hello user')
}

const handler3 = (event) => {
    event.stopPropagation();
    alert('Bye')
}
const handler4 = (event) => {
    event.preventDefault();
    alert('Ok');
}

//const handler2 = (event) => alert(event);
//sm.onclick = handler1;
//sm.onclick = null;
sm.addEventListener('click', handler1);
md.addEventListener('click', handler2);
big.addEventListener('click', handler3);
link.addEventListener('click', handler4);

/*
sm.addEventListener('click', handler2);
sm.removeEventListener('click', handler2);*/
