
qtn_number=1;
correct_ans=0;
wrong_ans=0;
skipped_ans=0;

function init_quiz(){
    console.log("initquiz")
    document.getElementById("index-banner").style.display = 'none';
    document.getElementById("quiz").style.display = 'block';
}

function show_hint(){
    console.log("show_qtn")
    document.getElementById("answer_description").style.display = 'block';
}

function next_qtn(){
    qtn_number++;
    document.getElementById("qtn_num").innerHTML=qtn_number;
    document.getElementById("qtn_prog").value=qtn_number;
    
}
