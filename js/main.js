$(document).ready(
    function () {

        adjustImage();

        var d = new Date();
        var n = d.getFullYear();
        $("#year").text(n);
    }


);

$(window).resize(
    function () {
        adjustImage();
    }
);

function adjustImage() {
    //$(".logo").removeClass("img-horizontal");
    //$(".logo").removeClass("img-vertical");



    if ($(window).width() > $(window).height() - 160 ) {
        $(".logo").addClass("img-horizontal");
    }
    else {
        $(".logo").removeClass("img-horizontal");
    }
}
