// Math.random() : 0 ~ 1미만사이의 랜덤한 소수
// Math.floor() : 내림처리해서 정수로 변경

/*
    1. 번호를 담을 배열 타입의 변수 lotto를 생성하세요.
    2. for문을 사용하여 랜덤한 정수 6개를 만드세요.
    3. document에 작성하세요.

    난이도 UP!
    - 만약! 같은 숫자가 나오면 새로운 랜덤한 정수를 넣으세요.

    난이도 UP!
    - Ul 안에 li 요소에 넣어서 클래스를 적용시켜 보세요.


// 1번 : 랜덤숫자 6개
/* var lotto = []; // 로또 번호를 저장하는 배열 변수 생성
var ulList = document.getElementById('lotto'); // HTML문서에서 ul요소 가져오기


for(var i=0;i<6;i++){
    var liList = document.createElement('li') // li생성
    var num = Math.floor(Math.random()*45)+1 // 1~45 정수 생성
    liList.innerText = num;
    ulList.appendChild(liList);
}; */

// 2번 :  랜덤숫자 6개 + 난이도 up!
var lotto = []; // 로또 번호를 저장하는 배열 변수 생성
var ulList = document.getElementById('lotto'); // HTML문서에서 ul요소 가져오기


for(var i=0;i<6;i++){
    var liList = document.createElement('li') // li생성
    var num = Math.floor(Math.random()*45)+1 // 1~45 정수 생성

    for(var j in lotto){
        while(num == lotto[j]){
            num = Math.floor(Math.random()*45)+1
        };
    };

    lotto.push(num); //2: lotto배열에다 랜덤num 배열 넣기
    liList.innerText = num;
    liList.classList.add('num'+[num]); // 2: classList
    ulList.appendChild(liList);
};