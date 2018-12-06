$(".list").hide();
$(".top").click(function () {
    $(this).next(".list").slideToggle("slow");
});

let content = ("article0.txt"); //sets default
