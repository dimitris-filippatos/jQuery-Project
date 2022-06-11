$(document).ready(function () {
  load();
  function load() {
    $("#content").prepend(
      '<button id="home">Home</button><button id="menu">Menu</button><button id="contact">Contact</button><div id="container"></div>'
    );
    $("#container").append(
      '<h1>Welcome to Naos</h1><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBWrrAc36gLdRBdRlYe2CJrxwN1uRDjf_0oQ&usqp=CAU"><p>Fine Dining Restaurant</p>'
    );
    $("#container").css({
      display: "flex",
      flexDirection: "column",
      width: "100vw",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
    });
    $("img").css("width", "600px");
  }
  $("#home").click(function () {
    $("#container").empty();
    $("#container").append(
      '<h1>Welcome to Naos</h1><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBWrrAc36gLdRBdRlYe2CJrxwN1uRDjf_0oQ&usqp=CAU">Fine Dining Experience<p></p>'
    );
    $("#container").css({
      display: "flex",
      flexDirection: "column",
      width: "100vw",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
    });
    $("img").css("width", "600px");
  });
  $("#menu").click(function () {
    $("#container").empty();
    $("#container").append(
      "<h1>OUR MENU</h1><ul><li>Drink Menu</li><li>Cocktails</li><li>Wine List</li><li>Sunset Senses</li></ul>"
    );
  });
  $("#contact").click(function () {
    $("#container").empty();
    $("#container").append(
      "<a>naosoia@mail.com</a><span>+302286022471</span><span>nikolaou nomikou, oia</span>"
    );
  });
});
