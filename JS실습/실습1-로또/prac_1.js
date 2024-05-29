// let lotto=[];
// let ulList=document.getElementById('lotto');

// for(let i=0; i<6; i++){
//   let liList=document.createElement('li');
//   let num=Math.floor(Math.random()*45)+1;
//   liList.innerText=num;
//   ulList.appendChild(liList);
// };

let lotto=[];
let ulList=document.getElementById('lotto');

for(let i=0;i<6;i++){
  let liList=document.createElement('li');
  let num=Math.floor(Math.random()*45)+1;

  for(let j in lotto){
    while(num==lotto[j]){
      num=Math.floor(Math.random()*45)+1;
    };
  };

  lotto.push(num);
  liList.innerText=num;
  liList.classList.add('num'+[num]);
  ulList.appendChild(liList);
};