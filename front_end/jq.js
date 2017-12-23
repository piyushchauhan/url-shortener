function shorten (orgURL) {//function that shortens the given URL
  return "shrt " + orgURL;
};
function copy_from_input_box(){//funnction the

};
function returnAnchor(a) {
  return "<a href='" + a + "'>" + a + "</a>"
};

$(document).ready(function() {
  var numOfURLs = 0;
  $("#table").hide();
  $("button.in").click(function() {
    var orgURL = $("input").val();
    numOfURLs += 1;
    n = numOfURLs.toString();
    $("#table").show();
    $(this).html("Copy");
    var srtURL = shorten(orgURL);
    // alert(srtURL);
    $("input").val(srtURL);
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    // var button = document.createElement("button")
    // $(button).attr("id",n);
    $(td1).addClass("orgURL");
    $(td2).addClass("srtURL");
    $(td1).attr("id",n);
    $(td2).attr("id",n);
    // $(td2).addchlid(button);
    $(td1).appendTo(tr);
    $(td2).appendTo(tr);
    $(tr).prependTo("tbody");
    this.id = "copy_from_input_box";
  });
  // $("#copy").click();
});
