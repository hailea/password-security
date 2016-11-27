var hagScript = $.noConflict();
hagScript(document).ready(function () {
    /*title behaviours*/
    hagScript("body").mouseenter(function () {
        hagScript(".pptTitle").animate({ left: '250px' }, 'slow');
        hagScript(".pptTitle").animate({ fontSize: 'bigger' }, 'slow');
    });
    /*main content behaviours*/
    hagScript("#termsIS").click(function () {
        hagScript("#dfnIS").fadeToggle("slow");
    });
    hagScript("#termsISPwd").click(function () {
        hagScript("#dfnISPwd").fadeToggle("slow");
    });
    hagScript("article").mouseenter(function () {
        hagScript(".ftrNote").fadeTo("slow", 0.9);
    });
    hagScript("article").mouseleave(function () {
        hagScript(".ftrNote").fadeTo("slow", 0);
    });
    /*footer behaviours*/
    hagScript(".panelPrerequiste").click(function () {
        hagScript(".slidePrerequisite").slideToggle("slow");
    });
    hagScript(".PanelAttendee").click(function () {
        hagScript(".slideAttendee").slideToggle("slow");
    });
    hagScript("#originalPwd").blur(function () {
        hagScript("#testCallBack").css({ "fontSize": "200%", "background-color": "purple" }).fadeTo("slow", 0.9, function () {
            document.getElementById("testCallBack").innerHTML = "Password Hint: " + hagScript("#originalPwd").val();
        })
    });
    /*2nd Page - Practice*/
    /*test purpose - callback function*/
    hagScript(".substitute").click(function () {
        hagScript("#testCallBack").fadeTo("slow", 0.9, function () {
            document.getElementById("testCallBack").innerHTML = hagScript("#originalPwd").val();
        })
    });
    /*load document from external site*/
    hagScript("#loadSpecialChar").click(function () {
        hagScript("#placeSpecialChar").load("../styles/SpecialChar.txt #loadSpecialCharacters", function (responseTxt, statusTxt, xhr) {
            if (statusTxt == "success")
                alert("External content loaded successfully!");
            if (statusTxt == "error")
                alert("Error: " + xhr.status + ": " + xhr.statusText);
        });
    });
});





