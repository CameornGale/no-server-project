angular.module("app").directive("hoverShow",['$document', function(){
  return {
    restrict: "A",
    link: function(scope, element, attr) {
      element.on('mouseenter', function(event) {
        // element.css("background", "white");
          // element.css("background-size", "cover");
          element.css("visibility","hidden");
          // element.find('h4').css("visibility","hidden");
          element.children().css("visibility","visible");

        // element.css({ background: url('https://yt3.ggpht.com/-s5h7dj7bajc/AAAAAAAAAAI/AAAAAAAAAAA/wblTWE1p614/s900-c-k-no-rj-c0xffffff/photo.jpg') })
      })
      element.on('mouseleave', function(event) {
        element.css("visibility","visible");
          // element.find('h4').css("visibility","visible");
        // element.css({ backgroundColor: 'white' })
        // element.css("background-image", "url(/img/play.jpg)");
        element.children().css("visibility","hidden")


      })

    }
  }
}])
// js/img/play.jpg
