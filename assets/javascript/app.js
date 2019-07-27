var questions = [
    {
    question: "Pac-Man ghost enemies are dubbed 'Blinky', 'Pinky', and 'Inky'. What is the name of the fourth member of the crew?",
    choiceA: "Winky", 
    choiceB: "Dinky", 
    choiceC: "Clyde", 
    choiceD: "Bonnie",
    answer: "C",
    result: "It's Clyde!",
    img: "../images/clyde.jpg"
    },
    {
    question: "What video game did Mario first appear in?",
    choiceA: "Donkey Kong", 
    choiceB: "Super Mario Bros.", 
    choiceC: "The Legend of Zelda", 
    choiceD: "Mario Bros.",
    answer: "A",
    result: "It's Donkey Kong!",
    img: "../images/donkeykong.png"
    },
    {
    question: "What does 'Pokémon stand for?",
    choiceA: "Portable Collectible Monsters",
    choiceB: "Pocket Monsters", 
    choiceC: "Pokey Monsoon", 
    choiceD: "Poker Monkeys",
    answer: "B",
    result: "It's Pocket Monsters!",
    img: "../images/pokemon.jpg"
    },
    {
    question: "Which of these characters never speak?",
    choiceA: "Nathan Drake", 
    choiceB: "Mario", 
    choiceC: "Master Chief", 
    choiceD: "Link",
    answer: "D",
    result: "It's Link!",
    img: "../images/link.png"
    },
    {
    question: "What character do you play as in 'The Legend of Zelda'?",
    choiceA: "Link", 
    choiceB: "Zelda", 
    choiceC: "Mario", 
    choiceD: "Ganon",
    answer: "A",
    result: "It's Link!",
    img: "../images/link.png"
    },
    {
    question: "What Nintendo system was released after the N64 and before the Wii?",
    choiceA: "Gamecube", 
    choiceB: "Nintendo 128", 
    choiceC: "Virtual Boy", 
    choiceD: "Super Nintendo",
    answer: "A",
    result: "It's the GameCube!",
    img: "../images/GameCube-Set.jpg"
    },
    {
    question: "What is the name of the male default player skin in Minecraft?",
    choiceA: "Steve", 
    choiceB: "Bob", 
    choiceC: "Jordan", 
    choiceD: "Alex", 
    answer: "A",
    result: "It's Steve!",
    img:"../images/steve.jpg"
    },

];

var correct = 0; 
var incorrect = 0;

var count = 10;
var TIMER;

var currentQ = 0;

$("#start").click(function(){
    $("#start").hide();
    Question();
    Time();
    TIMER = setInterval(Time, 1000);
});

$(".choice").on("click", function() {
    console.log($(this).attr("data-value"))
    if ($(this).attr("data-value") == questions[currentQ].answer) {
        correct++;
        alert("You're correct! " + questions[currentQ].result)
    }
    else {
        incorrect++; 
        alert("You're incorrect! " + questions[currentQ].result)
    }

    count = 10;
    
    if(currentQ < questions.length-1){
        $("#results").empty();
        currentQ++;
        Question();
    }
    else {
        $("#results").empty();
        clearInterval(TIMER);
        Score();
    }
});

$("#reset").on("click", function() {
    currentQ = 0;
    $("#results").empty();
    $("#reset").css("display", "none");
    Question();
    Time();
    TIMER = setInterval(Time, 1000);
});

function Question() {
    var q = questions[currentQ];

    $("#question").html(questions[currentQ].question);
    $("#A").html(q.choiceA);
    $("#B").html(q.choiceB);
    $("#C").html(q.choiceC);
    $("#D").html(q.choiceD);
}

function Time() {
    console.log(count)
    if(count > 0) {
        $("#counter").html(count);
        count--
    }
    else {
        count = 10;
        if(currentQ < questions.length-1) {
            currentQ++;
            Question();
        }
        else {
            clearInterval(TIMER);
            Score();
        }
    }
}

function Score() {
    $("#question").empty();
    $(".choice").empty();
    $("#counter").empty();

    $("#results").html("You got " + correct +" questions right! You also got " + incorrect + " questions wrong.")
    $("#reset").css("display", "block")
}

