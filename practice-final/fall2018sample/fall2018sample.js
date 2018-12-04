/* Don't use <script> tags in a linked js file! */
$(".submenu").hide();
$("#menu1").click(function () {
    $("#sub1").slideToggle("slow");
});
$("#menu2").click(function () {
    $("#sub2").slideToggle("slow");
});

let content = ("content1.txt"); //sets default
$("#choose-content").val(content); //changes menu to default
$("#content").load(content); //loads default

$("#choose-content").change(function () {
    content = $(this).val();
    $("#content").load(content);
});
