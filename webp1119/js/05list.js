const itemList = [];

const addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addList);

function addList(){
    const item = document.querySelector("#item").value;
    //텍스트 필드 내용 가져옴

    // 아이템이 눌(비어있다)이 아니면 
    if (item != null){
        itemList.push(item); //itemList 배열의 끝에 item 변수 값 추가
        document.querySelector("#item").value=""; //id ="item"인 요소의 값을 넣음 
        document.querySelector("#item").focus();
        //텍스트필드에 focus() 메서드 적용 [검색창 비워줌]    
    }

    showList();

}


function showList(){

    let list = "<ul>";//목록을 시작하는 <ul>태그 저장
    
                            // 배열 요소마다 반복↓
    for (let i=0; i<itemList.length; i++){
        list+="<li>"+itemList[i]+"<span class='close' id ="+i+">X</span></li>";
        //요소와 삭제 버튼을 <li>~<//li>로 묶음
    }

        list += "</ul>";
        //목록을 끝내는 </ul>태그 저장
        document.querySelector('#itemList').innerHTML = list; //list 내용 표시

        const remove = document.querySelectorAll(".close");
        for (let i=0; i<remove.length; i++){
            remove[i].addEventListener("click",removeList);
    }
}


//선택한 함수를 목록에서 삭제하는 함수
function removeList(){
    const id = this.getAttribute("id"); //id의 속성 (배열 0,1,2)을 가져옴
    itemList.splice(id, 1); //id부터 1개 삭제
    showList();//삭제한 거 빼고 목록 새로 만듦
    //삭제한 걸 제외하고 다시 배열 돌려야 돼서 호출함

    /*
    fruits.splice(2,1);
                  2번 index에서 1개요소 제거
    const fruits = ['수박','바나나','망고','두리안'];
    const removed = fruite.splice(2,1);
    ===> ['수박','바나나','두리안']
    */


}

