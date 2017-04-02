// для выпадающего списка
$(document).ready(function () {
    $("#dropdown").click(function () {
        $("#list").slideToggle("slow");
    });
});