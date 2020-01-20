$(document).ready(function() {
  $(".read-more-content").hide();
  $(".read-more-link").click(function(e) {
    e.preventDefault();
    let readMoreLink = this;
    let readMoreContainer = $(readMoreLink).parent(".read-more-container");
    let readMoreContent = $(readMoreContainer).find(".read-more-content");
    if (readMoreContent.is(":visible")) {
      readMoreContent.hide();
    } else {
      readMoreContent.show();
    }
  });
});
