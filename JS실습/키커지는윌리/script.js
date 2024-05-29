/*
	1. key 변수를 생성하고 num값 185를 넣으세요. ✓
	2. if else문을 사용하여 update함수안에
	- 키가 160이하면 #face에 클래스 cry를 추가
	- 나머지는 #face에 클래스 cry를 제거

		Hint.
		classList.add("cry")
		classList.remove("cry")

	3. #arr-top를 클릭하면 key가 i만큼 증가하는 함수를 만드세요.- for문 사용하기
	4. #arr-bottom를 클릭하면 key가 i만큼 감소하는 함수를 만드세요.- for문 사용하기
	5. 키가 1씩 커지는게 너무 지루하다면 5씩 증감하도록 바꿔보세요.
	6. for문 안에 update()를 넣어주세요.
*/
// 1번
var key = 185;
update();


document.getElementById('arr-top').addEventListener('click',function(){
	for(var i=0; i<2 ; i++){
		key = key + i;
		update();
	}
});

document.getElementById('arr-bottom').addEventListener('click',function(){
	for(var i=0; i<2 ; i++){
		key = key - i;
		update();
	}
});

function update(){

	document.getElementById('height').innerText = key + 'cm';
	document.getElementById('leg').style.height = key + 'px';

	if(key <= 160){
		document.getElementById('face').classList.add("cry");
	};
	
	if(key > 160){
		document.getElementById('face').classList.remove("cry")
	};
};

