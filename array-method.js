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
console.log("9.", newList9);

// 10. 명단에 있는 모든 학생들의 이름을 하나의 문자열로 연결하여 출력하는 코드를 작성하세요.
let newList10 = studentList.reduce((sum, element) => {
  return (sum += element);
});
console.log("10.", newList10);

// 11. 모든 학생들의 이름이 세 글자인지 확인하는 코드를 작성하세요.
let Qustion11 = studentList.every((element) => {
  return element.length === 3;
});
if (Qustion11) {
  console.log("11. 모든 학생의 이름이 세 글자입니다.");
} else {
  console.log("11. 모든 학생의 이름이 세 글자가 아닙니다.");
}

// 12. 명단에서 마지막 학생이 전학을 갔습니다. 이 학생을 명단에서 제거하고, 그 학생의 이름을 출력하는 코드를 작성하세요.
// 2번 문제와 동일 일단 보류

// 13. 명단 중에서 두 번째부터 네 번째 학생까지만 따로 명단을 만들려고 합니다. 이 부분 명단을 복사하여 새로운 배열을 만드는 코드를 작성하세요.
let newList13 = studentList.slice(1, 4);
// 두번째 매개변수는 출력되는 배열에 포함되지 않음 !
console.log("13.", newList13);

// 14. 명단에서 이름에 '승'을 포함하는 모든 학생들의 이름을 찾아 새로운 명단을 만드는 코드를 작성하세요.
let newList14 = [];
studentList.forEach((element) => {
  if (element.includes("승") === true) {
    newList14.push(element);
  }
  return;
});
console.log("14.", newList14);
// ------------------------------------------
function func14(word) {
  let newList16 = [];
  studentList.map((element) => {
    if (element.includes(word)) {
      newList16.push(element);
    }
  });
  console.log("14.1", newList16);
}
func14("승");
// ------------------------------------------
let array14 = studentList.filter((element)=>{
  return element.includes("승");
})
console.log("14-2.",array14);


// 15. 명단에 '홍'으로 시작하는 학생이 한 명이라도 있는지 확인하는 코드를 작성하세요.
function findName15(firstname) {
  let array15 = [];
  studentList.forEach((element) => {
    if (element.slice(0, 1) === firstname) {
      array15.push(1);
    } else array15.push(0);
  });
  if (array15.includes(1)) {
    console.log("15.", `${firstname}씨가 존재합니다`);
  } else {
    console.log("15.", `${firstname}씨가 존재하지 않습니다.`);
  }
}

findName15("홍");

function func15(firstname) {
  let Qustion15 = studentList.some((element) => {
    return element.slice(0, 1) === "홍";
  });
  if (Qustion15) {
    console.log("15-1.", `${firstname}씨가 존재합니다.`);
  }
}

func15("홍");
