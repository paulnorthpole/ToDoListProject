// Check off specific Todos by clicking
$('ul').on("click", "li", function() {
  $(this).toggleClass("completed");
});

// Click on X to delete Todos
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() { // this = <span>
    $(this).remove();  // this = <li>
  });
  event.stopPropagation(); // keeps this from running on all parents
});

$("input[type='text']").keypress(function(event) {
  if (event.which === 13) { // 13 is keycode ENTER
      var todoText = $(this).val();
      $(this).val("");
      //create a new li and add to ul
      $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
});

$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle()
});
