
qtn_number=0;
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
      b: "wrong answer",
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

$("#start-btn").click(function(){
    $("#index-banner").hide(500);
    $("#quiz").show(500);
    var welcomeAudio=document.getElementById("welcome-audio");
    welcomeAudio.play(); 
    update_qtn(0);
    $( "#options input" ).prop("checked", false);
    
})

$("#hint").click(function(){
    $("#answer_description").slideToggle(500);
})

$("#nextquestion").click(function next_qtn(){
    $("#submit").show();
    $(this).hide();
    $("#answer_description").hide();
    
    update_qtn(qtn_number);
    selection=null;
    $( "#options input" ).prop("checked", false);
})

function update_qtn(i){
    $("#qtn-num").text(qtn_number+1);
    $("#prog-bar").attr("value", qtn_number+1);
    $("#question").text(myQuestions[i].question);
    $("#option1").text(myQuestions[i].answers.a);
    $("#option2").text(myQuestions[i].answers.b);
    $("#option3").text(myQuestions[i].answers.c);
    $("#option4").text(myQuestions[i].answers.d);
    qtn_number++; 
}
$('#options input').on('change', function() {
   selection=$('input[name=answers]:checked').val(); 
});

$("#submit").click(function(){
    $(this).hide();
    $("#nextquestion").show();
    $("#hint").show();
    score();
    $("#correct_answer").text("correct option "+ myQuestions[qtn_number-1].correctAnswer);
    
    if(qtn_number==5){
        $("#nextquestion").hide();
        $("#main").hide();
        
        if (correct_ans>2){
            $("#result").text("Congratulations! You won!");           
        }
        else{
            $("#result").text("Sorry! You lost!"); 
        }
        chart();
    }
});

function score(){
    
    if(selection==myQuestions[qtn_number-1].correctAnswer){
        correct_ans++;
    }
    else if(selection==null) {
        skipped_ans++;
    }
    else{
        wrong_ans++;
    }
    
    $("#score").text("correct: "+correct_ans+ " skipped: "+skipped_ans+ " wrong: "+wrong_ans );
}

function chart(){
    $("#chart").CanvasJSChart({
    	title: { 
			text: "Your Performance",
			fontSize: 24
		}, 
		axisY: { 
			title: "Results %" 
		}, 
		legend :{ 
			verticalAlign: "center", 
			horizontalAlign: "right" 
		}, 
		data: [ 
		{ 
			type: "pie", 
			showInLegend: true, 
			toolTipContent: "{label} <br/> {y} ", 
			indexLabel: "{y} ", 
			dataPoints: [ 
				{ label: "Correct Answers",  y: correct_ans, legendText: "Correct Answers"}, 
				{ label: "Wrong Answers",    y: wrong_ans, legendText: "Wrong Answers"  }, 
				{ label: "Skipped Answers",   y: skipped_ans,  legendText: "Skipped Answers" },
			] 
		} 
		] 
	}); 
}
