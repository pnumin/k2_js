//DOM 요소 생성 함수
/*
function domAdd() {
    console.log('domAdd') ;
}
*/
const domAdd = () => {
    console.log('domAdd') ;
    const btn1 = document.createElement("button") ;
    btn1.innerHTML = "버튼1" ;
    btn1.id = "bt1" ;
    btn1.className = "btc" ;

    document.getElementById("content").append(btn1);

    const btn2 = document.createElement("button") ;
    btn2.innerHTML = "버튼2" ;
    btn2.id = "bt2" ;
    btn2.className = "btc" ;

    document.getElementById("content").append(btn2);

    const btn3 = document.createElement("button") ;
    btn3.innerHTML = "버튼3" ;
    btn3.id = "bt3" ;
    btn3.className = "btc" ;

    document.getElementById("content").append(btn3);
} 

// DOM 요소 접근
const domRead = () => {
    const btc = document.querySelectorAll(".btc") ;
    console.log(btc);

    //for 순회
    console.log("** for **") ;
    for(let i=0 ; i < btc.length ; i++) {
       console.log(btc[i]); 
    }

    //for ... in 순회
    console.log("** for in**") ;
    for (let k in btc) {
        console.log(btc[k]);
    }

    //foreach 순회
    console.log("** foreach**") ;
    btc.forEach((item, k) => console.log(item, k))

    //for ... of 
    console.log("** for of**") ;
    for (let [k,v] of btc.entries()) {
        console.log(k, v.innerHTML);
        if ( k == 1 ) break;
    }
}

//자바스크립 랜더링 제어
document.addEventListener("DOMContentLoaded", () => {
    //DOM 요소 생성
    domAdd();

    //DOM 요소 접근
    domRead();
}) ;
