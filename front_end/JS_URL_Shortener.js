//   TODO: change the button and its function

$(document).ready(function() {
  var numOfURLs = 0;
  $("#table").hide();
  $("#ShortCopy").click(function() {
    //Function to copy the given URL and shortened URL in their respective column with the button to copy the short URL
    numOfURLs += 1;
    n = numOfURLs.toString();
    var orgURL = $("input:text").val();
    //   TODO: to shorten the url, make a server request
    srtURL = function(orgURL) {

      return;
    };
    $("input:text").val(srtURL);

    $("tbody").prepend(
      $("<tr></tr>").append(
        $("<td></td>",{
          'class':'orgURL',
          'id':'orgURL'+n,
          text:orgURL
        }),
        $("<td></td>",{
          'class':'srtURL',
          'id':'srtURL'+n,
          text:srtURL
        }).append(
          $("<button>",{
            'class':'copyButton',
            'id':n;
            text:'copy',
            'onclick':function CopyFunction(n){
              var copyText = document.getElementById("srtURL-" + n);
              copyText.select();
              document.execCommand("Copy");
            };
          })
        );
      );
    );
  });
});
