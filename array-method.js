const studentList = [
  "김우진",
  "김현",
  "방승희",
  "변호녕",
  "소사무엘",
  "송영준",
  "신동현",
  "오승민",
  "유승민",
  "윤준현",
  "이민구",
  "이유안",
  "이은정",
  "정영식",
  "최성민",
  "최은철",
  "홍문기",
];

const pokemonList = ["피카츄", "라이츄", "파이리", "꼬부기"];

// 1. 전체 명단을 문자열로 출력하여, 모든 학생의 이름이 쉼표로 구분되도록 하려고 합니다. 이를 구현하는 코드를 작성하세요.
let studentString = studentList.join(",");
console.log("1.", studentString);

// 2. 명단에서 마지막 학생이 전학을 갔습니다. 이 학생을 명단에서 제거하고, 그 학생의 이름을 출력하는 코드를 작성하세요.
let outStudentName = studentList.pop();
console.log("2.", outStudentName);
studentList.push("홍문기");

// 3. 명단 중 세 번째 학생이 전학을 갔고, 새 학생이 그 자리에 왔습니다. 기존 학생을 제거하고 새 학생을 추가하는 코드를 작성하세요.
studentList.splice(2, 1, "새학생");
console.log("3.", studentList);
studentList.splice(2, 1, "방승희");

// 4. 명단의 순서를 역순으로 바꾸고자 합니다. 이를 위한 코드를 작성하세요.
console.log("4.", studentList.reverse());
studentList.reverse();

// 5. 임의의 학생(본인이름) 명단에서 몇 번째에 있는지 찾아서 그 위치를 출력하는 코드를 작성하세요.
function findName5(name) {
  console.log("5.", studentList.indexOf(name));
}
findName5("최은철");

// 6.명단에 같은 이름(성씨제외)을 가진 학생이 두 명 있습니다. 이 중 마지막에 있는 학생의 위치를 찾아 출력하는 코드를 작성하세요.
function findName6(name) {
  let array6 = [];
  for (let i = 0; i < studentList.length; i++) {
    if (studentList[i].slice(1, studentList[0].length) === name) {
      array6.push(i);
    }
  }
  console.log("6.", array6[array6.length - 1]);
}
findName6("승민");

// 7. 명단에서 성씨가 ‘김’씨인 학생의 이름을 찾아 출력하는 코드를 작성하세요.
function findName7(firstname) {
  let array7 = [];
  for (let i = 0; i < studentList.length; i++) {
    if (studentList[i].slice(0, 1) === firstname) {
      array7.push(studentList[i]);
    }
  }
  console.log("7.", array7);
}
findName7("김");

// 8. 기초데이터(studentList, pokemonList) 두 개의 명단을 합쳐 전체 학생 명단을 만들려고 합니다. 두 명단을 결합하는 코드를 작성하세요.
let newList8 = studentList.concat(pokemonList);
console.log("8.", newList8);

// 9. 모든 학생의 이름 앞에 '학생_'을 붙여 새로운 형식으로 명단을 만드는 코드를 작성하세요.
let newList9 = studentList.map((element) => {
  return "학생_" + element;
});
console.log(newList9);
