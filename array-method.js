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

// 3. 명단 중 세 번째 학생이 전학을 갔고, 새 학생이 그 자리에 왔습니다. 기존 학생을 제거하고 새 학생을 추가하는 코드를 작성하세요.
studentList.splice(2, 1, "새학생");
console.log("3.", studentList);

// 4. 명단의 순서를 역순으로 바꾸고자 합니다. 이를 위한 코드를 작성하세요.
console.log("4.", studentList.reverse());

// 5. 임의의 학생(본인이름) 명단에서 몇 번째에 있는지 찾아서 그 위치를 출력하는 코드를 작성하세요.
