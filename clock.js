/*
시계를 출력하되 자동으로 시간이 계속 업데이트 되도록 구현
만약 10보다 작다면 예쁘게 출력 되지 않으니 두자리씩 맞춰서 구현
*/

const clock=document.querySelector(".jsClock")

function setClock()
{
    const date=new Date();
    const hour=date.getHours();
    const minute=date.getMinutes();
    const second=date.getSeconds();
    clock.innerHTML=`${hour<10?`0${hour}`:hour}:${minute<10?`0${minute}`:minute}:${second<10?`0${second}`:second}`;
}

function init(){
    setClock();
    setInterval(setClock, 1000);
}

init();