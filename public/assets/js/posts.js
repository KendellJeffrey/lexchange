
$(function() {
  $(".change-native").on("click", function(event) {
    var id = $(this).data("id");
    var newNative = $(this).data("newNative");

    var newNativeState = {
      native: newSleep
    };

    
    $.ajax("/api/posts/" + id, {
      type: "PUT",
      data: newNativeState
    }).then(
      function() {
        console.log("changed native to", newNative);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    var newPost = {
      name: $("#ca").val().trim(),
      native: $("[name=native]:checked").val().trim()
    };


    $.ajax("/api/posts", {
      type: "POST",
      data: newPost
    }).then(
      function() {
        console.log("created new post");
        location.reload();
      }
    );
  });

  $(".delete-post").on("click", function(event) {
    var id = $(this).data("id");

    $.ajax("/api/posts/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted post", id);
        location.reload();
      }
    );
  });
});
