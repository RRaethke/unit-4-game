  var randomNum, redCrystal, blueCrystal, purpleCrystal, greenCrystal;
  var total = 0;
  var wins = 0;
  var losses = 0;

  $(document).ready(function() {

    gamestart();
    $(".btn").on('click', function() {
      clickpic($(this).data('crystal'));
      $("#totalscore").html("Your total so far: " + total);
      check();

    });

    console.log(redCrystal);
    console.log(blueCrystal);
    console.log(purpleCrystal);
    console.log(greenCrystal);
    console.log(total);

  });

  function randomizeNumber() {
    return Math.floor(Math.random() * (120 - 19 + 1) + 19);

  };

  function randomCrystalNumber() {
    return Math.floor(Math.random() * (12 - 1 + 1) + 1);

  };

  function clickpic(currentCrystal) {
    total += currentCrystal;
    console.log(total);
  };

  function gamestart() {
    total = 0;
    $("#totalscore").html("Your total so far: " + total);
    5
    randomNum = randomizeNumber();
    $("#randomnumber").html(randomNum);
    redCrystal = randomCrystalNumber();
    blueCrystal = randomCrystalNumber();
    purpleCrystal = randomCrystalNumber();
    greenCrystal = randomCrystalNumber();
    $("#redCrystal").attr("data-crystal", redCrystal);
    $("#blueCrystal").attr("data-crystal", blueCrystal);
    $("#purpleCrystal").attr("data-crystal", purpleCrystal);
    $("#greenCrystal").attr("data-crystal", greenCrystal);
  }

  function check() {
    if (total === randomNum) {
      wins++;
      $("#winslosses").html("Wins: " + wins + "<br>Losses: " + losses);
      var pg = confirm("You Win! Play again?");
      if (pg == true) {
        gamestart();
      } else {
        alert("Goodbye!");
        $(".container").empty();
      }


    } else if (total > randomNum) {
      losses++;
      $("#winslosses").html("Wins: " + wins + "<br>Losses: " + losses);

      var pg = confirm("Game Over You Lose! Play again?");
      if (pg == true) {
        gamestart();
      } else {
        alert("Goodbye!");
        $(".container").empty();
      }


    }
  };
