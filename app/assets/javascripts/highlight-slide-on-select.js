$(document).ready(function() {
  $(".slide .govuk-radios__input").each(function(i, e) {
    if ($(e).is(':checked')) {
      $(this).parents(".slide").addClass("highlighted");
    }
  });

  $(".slide .govuk-radios__input").change(function() {
    $(this).parents(".grid").children(".slide").removeClass("highlighted");

    if ($(this).is(':checked')) {
      $(this).parents(".slide").addClass("highlighted");
    }
  });
});
