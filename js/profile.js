  jQuery(document).ajaxComplete(function () {
      
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