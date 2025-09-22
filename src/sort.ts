export function simpleSort<T>(arr: T[], order : "asc" | "desc" = "asc"): T[] {
    const sortedArr = [...arr] 

    for(let i = 0; i < sortedArr.length;i++){ // js는 변수 선언시 let 사용
        for(let j = 0; j < sortedArr.length-1-i;j++){
            if(compareValues(sortedArr[j], sortedArr[j+1], order)){
                const temp = sortedArr[j];
                sortedArr[j] = sortedArr[j+1];
                sortedArr[j+1] = temp;
            }
        }
    }

    return sortedArr;
}

function compareValues<T>(a : T, b : T, order: "asc" | "desc"): boolean {
    // if(order = "asc") 이렇게 해도 동작은 함;; -> js는 문자열이 "" 이 아닌 경우 모두 참.
    if(order == "asc") return a > b;
    else return a < b;
}

// undefine => "값"
// [1, undefine] => 이거 어떻게 할거야?
// 참조형에서 못 쓰게 하는 방법 -> 복사본 만들어서 사용 or readonly

// order를 "제한할 수 있지 않을까?"

/*
export function simpleSort<T>(arr: T[], order : "asc" | "desc" = "asc"): number[] { //export : 외부에 노출시킬거야 //function : 함수 선언(꼭 지정해야 함.)
    const sortedArr = [...arr] // 원본 배열을 변경하지 않도록 복사본 생성 (자바처럼 참조형이기 때문에) // ... : 스프레드 연산자 (배열이나 객체를 개별 요소로 분해)
    //order가 들어왔으니 요청에 맞게 정렬

    if(order === "asc"){
        // order를 boolean으로 바꿔서 처리하는 방법 공부!!
        // llm 사용시 아주 구체적으로 매개변수, 반환값 달라고 지정하기
        for(let i = 0; i < sortedArr.length;i++){ // js는 변수 선언시 let 사용
            for(let j = 0; j < sortedArr.length-1-i;j++){
                if(sortedArr[j] > sortedArr[j+1]){
                    const temp = sortedArr[j];
                    sortedArr[j] = sortedArr[j+1];
                    sortedArr[j+1] = temp;
                }
            }
        }
    } else if(order === "desc"){
        for(let i = 0; i < sortedArr.length;i++){ // js는 변수 선언시 let 사용
            for(let j = 0; j < sortedArr.length-1-i;j++){
                if(sortedArr[j] < sortedArr[j+1]){
                    const temp = sortedArr[j];
                    sortedArr[j] = sortedArr[j+1];
                    sortedArr[j+1] = temp;
                }
            }
        }
    }
    return sortedArr;
}
*/