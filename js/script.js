$(document).ready(function () {
  $(".message").hide();
});

$('.message .close')
  .on('click', function() {
    $(this).parent().hide();
  });

function checkInput () {
  var assetOne = document.getElementsByName("asset-one");
  var assetTwo = document.getElementsByName("asset-two");

  if (assetOne[0].value == assetTwo[0].value) {
    $("#success").show();
    $("#failure").hide();
  } else {
    $("#failure").show();
    $("#success").hide();
  }
};

function clearInput () {
  $("input").val("");
  $(".message").hide();
};
