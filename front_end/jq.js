function shorten(orgURL) { //function that shortens the given URL
  return "shrt " + orgURL;
};

function copy_from_input_box() { //funnction the
  var copyText = document.getElementsByTagName("input");
  copyText.select();
  document.execCommand("Copy");
  alert("Copied the text: " + copyText.value);
};

function returnAnchor(a) {
  return "<a href='" + a + "'>" + a + "</a>"
};

$(document).ready(function() {
  var numOfURLs = 0;
  $("#table").hide();
  $("#short").click(function() {
    var orgURL = $("input").val();
    numOfURLs += 1;
    n = numOfURLs.toString();
    $("#table").show();
    $(this).html("Copy");
    var srtURL = shorten(orgURL);
    $("input:text").val(srtURL);
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var button = document.createElement("button")
    $(button).attr({
      "id":n,
      "class":"copy"
    });
    $(button).html("Copy");
    $(td1).addClass("orgURL");
    $(td2).addClass("srtURL");
    $(td1).attr("id", n);
    $(td2).attr("id", n);
    $(td1).html(returnAnchor(orgURL));
    $(td2).html(returnAnchor(srtURL));
    $(button).appendTo(td2);
    $(td1).appendTo(tr);
    $(td2).appendTo(tr);
    $(tr).prependTo("tbody");
    this.id = "copy_from_input_box";
  });
  $("#clear").click(function(){// Clears the input box
    $("input:text").val("");
  });
});
