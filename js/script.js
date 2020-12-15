// search-box script!!!!!!!!!!!!!!




var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);




// search-box button script!!!!!!!!!!!!!!


$(document).ready(function () {
    $("#search_button").click(function () {
        var ability = $(".ability_filter>.select-selected").text().split(" ").pop().toLowerCase();
        var origin = $(".origin_filter>.select-selected").text().split(" ").pop().toLowerCase();
        var city = $(".city_filter>.select-selected").text().split(" ").pop().toLowerCase();


        $(".cover_card").removeClass("off");
        $(".cover_label").removeClass("off").addClass("off");
        if (ability != "\xa0" && ability != "tutte") {
            $(".cover_label").removeClass("off");
            $(".cover_card").not("'." + ability + "'").not("off").addClass("off");
        };

        if (origin != "\xa0" && origin != "tutte") {
            $(".cover_label").removeClass("off");
            $(".cover_card").not("'." + origin + "'").not("off").addClass("off");
        };
        if (city != "\xa0" && city != "tutte") {
            $(".cover_label").removeClass("off");
            $(".cover_card").not("'." + city + "'").not("off").addClass("off");
        };



        if ($("#covers_tab").hasClass("off")) {
            $(".tab").removeClass("off").addClass("off");
            $("#covers_tab").removeClass("off");
            document.title = 'Handy Hands';
        }
    });
});



// tabs buttons script!!!!!!!!!!!!!!

$(document).ready(function () {

    $("#ability_button").click(function () {
        $(".tab").removeClass("off").addClass("off");
        $("#covers_tab").removeClass("off");
        $(".cover_card").removeClass("off");
        $(".cover_label").removeClass("off").addClass("off");
        $(".menu_button").removeClass("active");
        $("#ability_button").addClass("active");
        document.title = 'Handy Hands';
    });

    $("#project_button").click(function () {
        $(".tab").removeClass("off").addClass("off");
        $("#project_tab").removeClass("off");
        $(".menu_button").removeClass("active");
        $("#project_button").addClass("active");
        document.title = 'Handy Hands / Progetto';
    });

    $("#story_button").click(function () {
        $(".tab").removeClass("off").addClass("off");
        $("#story_tab").removeClass("off");
        $(".menu_button").removeClass("active");
        $("#story_button").addClass("active");
        document.title = 'Handy Hands / Storia';
    });

    /* $("#subscribe_button").click(function () {
         $(".tab").removeClass("off").addClass("off");
         $("#subscribe_tab").removeClass("off");
         $(".menu_button").removeClass("active");
         $("#subscribe_button").addClass("active");
         document.title = 'Handy Hands / Iscriviti';
     }); */


    $("#contacts_button").click(function () {
        $(".menu_button").removeClass("active");
        $(".tab").removeClass("off").addClass("off");
        $("#contacts_tab").removeClass("off");
        document.title = 'Handy Hands / Contatti';
    });

    $("#disclaimer_button").click(function () {
        $(".menu_button").removeClass("active");
        $(".tab").removeClass("off").addClass("off");
        $("#disclaimer_tab").removeClass("off");
        document.title = 'Handy Hands / Disclaimer';
    });

    $("#supporters_button").click(function () {
        $(".menu_button").removeClass("active");
        $(".tab").removeClass("off").addClass("off");
        $("#supporters_tab").removeClass("off");
        document.title = 'Handy Hands / Sostenitori';
    });

    $("#credits_button").click(function () {
        $(".menu_button").removeClass("active");
        $(".tab").removeClass("off").addClass("off");
        $("#credits_tab").removeClass("off");
        document.title = 'Handy Hands / Credits';
    });


});


// profile script!!!!!!!!! ---> slider + video 

$(document).ready(function () {


    $(".slider_button").click(function () {
        $(".slide").toggleClass("hide");
    });

    $("#video_trigger").click(function () {
        $("#video_canvas").toggleClass("off").toggleClass("on");
    });
    $("#video_canvas").click(function () {
        $("#video_canvas").toggleClass("off").toggleClass("on");
    });

});
