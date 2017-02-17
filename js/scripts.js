$(function () { //main function
  $("form#quiz").submit(function(event)  {
    var userName = $("input#name").val();
    var question1 = $("#quiz input[name='question1']:checked").val();
    var question2 = $("#quiz input[name='question2']:checked").val();
    var question3 = $("#quiz input[name='question3']:checked").val();
    var question4 = $("#quiz input[name='question4']:checked").val();
    var question5 = $("#quiz input[name='question5']:checked").val();
    var question6 = $("#quiz input[name='question6']:checked").val();
    var question7 = $("#quiz input[name='question7']:checked").val();
    var question8 = $("#quiz input[name='question8']:checked").val();
    var answers = [question1, question2, question3, question4, question5, question6, question7, question8];

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
    var test = mode(answers);
    var test = parseInt(test);
    if (test === 1) {
      alert(userName +", you should think about C#/.NET! However, the other courses are perfectly valid. Any one of them would be a great choice.")
    } else if (test === 2) {
      alert(userName + ", you should think about Ruby/Rails! However, the other courses are perfectly valid. Any one of them would be a great choice.")
    } else if (test === 3) {
      alert(userName + ", you should think about Java/Android! However, the other courses are perfectly valid. Any one of them would be a great choice.")
    } else if (test === 4) {
      alert(userName + ", you should think about Ruby/Rails! However, the other courses are perfectly valid. Any one of them would be a great choice.")
    } else {
      alert("Please fill out the form")
    }};
   });
});
