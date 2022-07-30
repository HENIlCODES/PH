$(document).ready(function () {
    var i = 1;
    var levl = 200;
    var attempt = 15;
    var ComputerNumber = Math.floor(Math.random() * levl);
    // level

    $(".level_easy").click(function () {
        gamelevel(200, 15);
        reset();
        $(".ruls").toggle(1000);
        document.getElementById("CH_level").innerHTML = "Easy Level";
    })
    $(".level_normal").click(function () {
        gamelevel(100, 10);
        reset();
        $(".ruls").toggle(1000);
        document.getElementById("CH_level").innerHTML = "Normal Level";
    })
    $(".level_hard").click(function () {
        gamelevel(100, 5);
        reset();
        $(".ruls").toggle(1000);
        document.getElementById("CH_level").innerHTML = "Hard Level";
    })

    function gamelevel(LvL, ATP) {
        levl = LvL;
        attempt = ATP;
        Dcount = ATP;
        ComputerNumber = Math.floor(Math.random() * levl);
        document.querySelector(".total_atamp").innerHTML = attempt;
        document.getElementById("total_atamp").innerHTML = attempt;
        document.getElementById("BetweenNumb").innerHTML = LvL;
    }
    function reset() {
        i = 1;
        document.getElementById("Result").innerHTML = "";
        document.getElementById("attempts").innerHTML = 0;
        $("#level_info").show();
    }

    document.getElementById("ChecK").addEventListener("click", function () {
        window.location = "#focB";
        document.getElementById("NumB").focus();
        var UserGase = document.getElementById("NumB").value;

        document.getElementById("NumB").value = "";

        if (UserGase != "") {
            $("#level_info").hide();
            document.getElementById("attempts").innerHTML = i;

            if (i <= attempt) {
                if (UserGase < ComputerNumber) {

                    $("#Result").append("<div class='message'><span>HINT :</span> Guess Higher Number > " + UserGase + "</div>");
                } else if (UserGase > ComputerNumber) {
                    $("#Result").append("<div class='message'><span>HINT :</span> Guess Lower Number < " + UserGase + "</div>");
                } else {
                    $("#Result").append("<div class='message win'><span> Excellent : </span>" + UserGase + " Number Match </div>");
                    $("#inpu").hide();
                    $("#reset").show();
                    // i = attempt;
                }
                if (i == attempt) {
                    $("#Result").append("<div class='finish'> <div class='Gameer'>Game over </div> <div class='AnsWer'>Answer : " + ComputerNumber + "</div> </div>");
                    $("#inpu").hide();
                    $("#reset").show();
                }
                i++;
            }
        }
    });
    $(".but").click(function () {
        reset();
        $("#reset").hide();
        $("#inpu").show();
        ComputerNumber = Math.floor(Math.random() * levl);
    })
    $(".seting_wil").click(function () {
        $(".ruls").toggle(1000);
    });
});

