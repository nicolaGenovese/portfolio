
  $(document).ready(function() {
    $("#filters :checkbox").click(function() {
      $("h5").css("text-decoration", "none");
      $("#filters :checkbox:checked").each(function() {
          $("." + $(this).val()).css("text-decoration", "line-through 6px");
      });
    });

});












