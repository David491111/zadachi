
// let x=["avengers(1).png", "avengers(2).jpg", "avengers(3).jpg", "avengers(4).jpg", "avengers(5).jpg", "avengers(6).jpg",];
// let imgs=document.querySelectorAll('img');
// let button=document.querySelector('button');
// function main(){
//     let x=0;
//     let y=0;
//     for(let i=0; i<40; i++){
//         let in1=Math.floor(Math.random()*6);
//         let in2=Math.floor(Math.random()*6);
//         let b=0;
//         b=x[in1];
//         x[in1]=x[in2];
//         x[in2]=b
//     }
//     console.log(imgs);
//     for(let i=0; i<2; i++){
//         imgs[i].src=x[i];
//     }
//     for(let i=0; ;){
//         if(x!=y){
//             imgs[0].src=`avengers(${x}).jpg`;
//             imgs[1].src=`avengers(${y}).jpg`;
//             console.log(x+', '+y);
//             break;
//         }
//         console.log(x+', '+y+'hi');
//         x=Math.floor(Math.random()*3)+1;
//         y=Math.floor(Math.random()*3)+1;
//     }
// }
// button.addEventListener('click', main);z
// let x=[];
// for(let i=0; i<5; i++){
//     x[i]=Math.floor(Math.random()*10)+1;
// }
// let j=0;
// for(let i=5; i<10; i++){
//     x[i]=-1*x[j];
//     j++
// }
// x.push(Math.floor(Math.random()*10+1));
//     for(let i=0; i<11; i++){
//         let in1=Math.floor(Math.random()*11);
//         let in2=Math.floor(Math.random()*11);
//         let b=0;
//         b=x[in1];
//         x[in1]=x[in2];
//         x[in2]=b
//     }
// console.log(x);
// let ans=0;
// for(let i=0; i<x.length; i++){
//     ans+=x[i];
// }
// console.log(ans);
// for(let i=0; i<5; i++){
//     x[i]=Math.floor(Math.random()*10)+1;
// }
// let x=[];
// let ans=1;
// for(let i=0; i<10; i++){
//     x[i]=Math.floor(Math.random()*30);
// }
// let max=x[0];
// for(let i=0; i<10; i++){
//     if(x[i]%2==0 && x[i]!=0){
//         ans*=x[i];
//     }
// }
// console.log(x);
// console.log(ans);
let inp=document.querySelector('input');
let b0=document.querySelector('.b0');
let b1=document.querySelector('.b1');
let b2=document.querySelector('.b2');
let b3=document.querySelector('.b3');
let bpl=document.querySelector('.b_pl');
let bp=document.querySelector('.b_p');
let beq=document.querySelector('.b_eq');
let bpm=document.querySelector('.b_pm');
let bd=document.querySelector('.b_d');
let bc=document.querySelector('.b_c');
let bsqr=document.querySelector('.b_sqr');
let bf=document.querySelector('.b_f');
b0.addEventListener('click', b0w);
b1.addEventListener('click', b1w);
b2.addEventListener('click', b2w);
b3.addEventListener('click', b3w);
bpl.addEventListener('click', bplw);
bpl.addEventListener('click', bplw);
beq.addEventListener('click', beqw);
bp.addEventListener('click', bpw);
bpm.addEventListener('click', bpmw);
bd.addEventListener('click', bdw);
bc.addEventListener('click', bcw);
bsqr.addEventListener('click', bsqrw);
bf.addEventListener('click', bfw);
let n1='';
let n2='';
let op='';
let dir=0;
let s=0;
function b0w(){
    inp.value+='0';
    if(dir==0){   
        n1+='0';
    }
    else{
        n2+='0';
    }
}
function b1w(){
    inp.value+='1';
    if(dir==0){   
        n1+='1';
    }
    else{
        n2+='1';
    }
}
function b2w(){
    inp.value+='2';
    if(dir==0){   
        n1+='2';
    }
    else{
        n2+='2';
    }
}

function b3w(){
    inp.value+='3';
    if(dir==0){   
        n1+='3';
    }
    else{
        n2+='3';
    }
}
function bdw(){
    inp.value+='.';
    if(dir==0){   
        n1+='.';
    }
    else{
        n2+='.';
    }
}
function bplw(){
    op+='+';
    inp.value='';
    dir=1;
}
function bpw(){
    op+='**';
    inp.value='';
    dir=1;
}
function bsqrw(){
    console.log('hi');
    if(dir==0){   
        n1**=0.5;
        inp.value=n1;
        console.log(n1);
    }
    else{
        n2**=0.5;
        inp.value=n2;
        console.log(n2);
    }
}
function fact(n){
    if(n===1){
        return 1;
    }
    else{
        return fact(n-1)*n;
    }
}
function bfw(){
    console.log('hi');
    if(dir==0){  
        n1=fact(parseInt(n1));
        inp.value=n1;
    }
    else{
        n2=fact(parseInt(n2));
        inp.value=n2;
    }
}
function bpmw(){
    console.log(n1);
    if(dir==0){
        let tmp=parseFloat(n1)*-1;
        n1=tmp.toString();
        inp.value=n1;
    }
    else{
        let tmp=parseFloat(n2)*-1;
        n2=tmp.toString();
        inp.value=n2;
    }
}
function beqw(){
    if(s==0 && op=='+'){
        inp.value=parseFloat(n1)+parseFloat(n2);
        s=1;
    }
    else if(s==0 && op=='**'){
        inp.value=parseFloat(n1)**parseFloat(n2);
        s=1;
    }
    else if(s==1){
        if(op=='+'){
            let i=parseFloat(inp.value)+parseFloat(n2);
            inp.value=i;
            s=1;
        }
        else if(op=='**'){
            inp.value**=parseFloat(n2);
            s=1;
        }    
    }
}
function bcw(){
    location.reload();
}
