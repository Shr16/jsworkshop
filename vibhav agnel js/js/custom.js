
qtn_number=1;
correct_ans=0;
wrong_ans=0;
skipped_ans=0;
selection = null;
const myQuestions = [
  {
    question: "What is the question1?",
    answers: {
      a: "wrong answer",
      b: "correct answer",
      c: "wrong answer",
      d: "wrong answer",
    },
    correctAnswer: "b"
  },
    {
    question: "What is the question2?",
    answers: {
      a: "wrong answer",
      b: "wrong answer",
      c: "correct answer",
      d: "wrong answer",
    },
    correctAnswer: "c"
  },
    {
    question: "What is the question3?",
    answers: {
      a: "correct answer",
      b: "worng answer",
      c: "wrong answer",
      d: "wrong answer",
    },
    correctAnswer: "a"
  },
    {
    question: "What is the question4?",
    answers: {
      a: "wrong answer",
      b: "wrong answer",
      c: "wrong answer",
      d: "correct answer",
    },
    correctAnswer: "d"
  },
    {
    question: "What is the question5?",
    answers: {
      a: "wrong answer",
      b: "correct answer",
      c: "wrong answer",
      d: "wrong answer",
    },
    correctAnswer: "b"
  },
];


function init_quiz(){
    console.log("initquiz")
    document.getElementById("index-banner").style.display = 'none';
    document.getElementById("quiz").style.display = 'block';
    update_qtn(0);
}

function show_hint(){
    console.log("show_qtn")
    document.getElementById("answer_description").style.display = 'block';
}

function next_qtn(){
    console.log("nextqqtn");
    
    if (qtn_number<5){
        update_qtn(qtn_number);
        qtn_number++;    
        document.getElementById("qtn_num").innerHTML=qtn_number;
        document.getElementById("qtn_prog").value=qtn_number;
    }
    
    if(qtn_number==5){
        document.getElementById("nextquestion").style.display = 'none';
    }
    
}

function update_qtn(i){
    document.getElementById("question").innerHTML= myQuestions[i].question;
    document.getElementById("option1").innerHTML= myQuestions[i].answers.a;
    document.getElementById("option2").innerHTML= myQuestions[i].answers.b;
    document.getElementById("option3").innerHTML= myQuestions[i].answers.c;
    document.getElementById("option4").innerHTML= myQuestions[i].answers.d;
}

function submit_btn(){
    for(i=1;i=5;i++){
        if (document.getElementById("Choice"+i).checked){
            console.log("insideif");
            selection=document.getElementById("Choice"+i).value;
            console.log(selection);
        }
    }        
}
