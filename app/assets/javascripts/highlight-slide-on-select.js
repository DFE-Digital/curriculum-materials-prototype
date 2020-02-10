$(document).ready(function() {
  $(".highlight-on-select-slide .govuk-radios__input").each(function(i, e) {
    if ($(e).is(':checked')) {
      $(this).parents(".highlight-on-select-slide").addClass("highlighted");
    }
  });

  $(".highlight-on-select-slide .govuk-radios__input").change(function() {
    $(this).parents(".responsive-grid").children(".highlight-on-select-slide").removeClass("highlighted");

    if ($(this).is(':checked')) {
      $(this).parents(".highlight-on-select-slide").addClass("highlighted");
    }
  });
});
