/* Don't use <script> tags in a linked js file! */
$(".submenu").hide();
$(".menuitem").click(function () {
    $(this).next(".submenu").slideToggle("slow");
});

let content = ("content1.txt"); //sets default
$("#choose-content").val(content); //changes menu to default
$("#content").load(content); //loads default

$("#choose-content").change(function () {
    content = $(this).val();
    $("#content").load(content);
});
