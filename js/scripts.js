$(function () {
  $("button#dark").click(function() {
    $("body").removeClass().addClass("dark-background");
    $("#sidebar").removeClass().addClass("sidebar dark-background2");
    $("div#container1").removeClass().addClass("dark-background2 container");
    $("#after").addClass("after-text")
  });
  $("button#light").click(function() {
    $("body").removeClass().addClass("light-background");
    $("#sidebar").removeClass().addClass("sidebar light-background3");
    $("div#container1").removeClass().addClass("light-background2 container");
  }); //main function
  $("form#quiz").submit(function(event)  {
    var userName = $("input#name").val();
    var answers = ["question1", "question2", "question3", "question4", "question5", "question6", "question7", "question8"];
    var answers2 = [];
    answers.forEach(function(question){
      var questions = $("#quiz input[name='"+question+"']:checked").val();
      answers2.push(questions);
    });

    function mode (array) { //unfortunately this part was really difficult, I had to try and find help on stackexchange to learn how to do this, but the implementation works well enough.
    if (array.length == 0) //fortunately now I would be able to put as many test questions as I want and just have to se them up as variables. Much easier than writing if statements.
        return null;
    var modeMap = {},
        maxEl = array[0],
        maxCount = 1;
    for(var i = 0; i < array.length; i++){
        var el = array[i];

        if (modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;

        if (modeMap[el] > maxCount) {
            maxEl = el;
            maxCount = modeMap[el];
        }
        else if (modeMap[el] == maxCount) {
            maxEl += '&' + el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
  };
    if (userName === ""){
      alert("Please enter your name")
    } else {
    var message = (" However, the other courses are perfectly valid. Any one of them would be a great choice. If you would like to learn more, the resources on the sidebar are a great source. Refresh the page to take the quiz again!")
    var test = mode(answers2);
    var test = parseInt(test);
    if (test === 1) {
      document.getElementById("after").innerHTML = (userName +", you should think about C#/.NET!" + message);
      $("#after").show();
      window.scrollto(0,2000);
    } else if (test === 2) {
      document.getElementById("after").innerHTML = (userName +", you should think about Ruby/Rails!" + message);
      $("#after").show();
    } else if (test === 3) {
      document.getElementById("after").innerHTML = (userName +", you should think about Java/Android!" + message);
      $("#after").show();
    } else if (test === 4) {
      document.getElementById("after").innerHTML = (userName +", you should think about CSS/Design~!" + message);
      $("#after").show();
    } else {
      alert("Please fill out the form")
    }};
   });
});
