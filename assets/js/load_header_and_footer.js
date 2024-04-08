$(function () {
    $.ajax({
        type: "GET",
        url: "/views/header/header.html",
        dataType: "html",
        success: function (answer) {
            $(".page-container").prepend(answer);
        },
        error: function () {
            alert("Failed header AJAX call.");
        }
    });
    return false;
});
$(function () {
    $.ajax({
        type: "GET",
        url: "/views/footer/footer.html",
        dataType: "html",
        success: function (answer) {
            $(".page-container").append(answer);
        },
        error: function () {
            alert("Failed footer AJAX call.");
        }
    });
    return false;
});