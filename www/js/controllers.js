angular.module('starter.controllers',[])

.controller('HomeCtrl', ['$scope', 'http', function($scope, $http){
    
   function getParameter(name) {
      name = name.replace(/\[]/, "\\\[").replace(/[\]]/, "\\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
      var results = regex.exec(window.location.search);
      if (results == null) return undefined;
      else return decodeURIComponent(results[1].replace(/\+/g, " "));
    } 
    
    var VexDocument = null;
    var VexFormatter = null;
    
    $(document).ready(function() {
    //   var req = new XMLHttpRequest();
    //   var uri = getParameter('doc');
    //   console.log(uri);
    //   if (! uri) uri = 'assets/bach_bwv846p.xml';
    //   req.open('GET', uri, true);
    //   req.onreadystatechange = function() {
    //   if (req.readyState != 4) return;
       
    //    try {
    //       VexDocument = new Vex.Flow.Document(req.responseText);
    //     }
    //     catch (e) {
    //       $(".content")[0].innerHTML = "There was an error with the document.";
    //       console.log(e);
    //     }
    //     var content = $(".content")[0];
    //     if (VexDocument) {
    //       VexFormatter = VexDocument.getFormatter();
    //       VexFormatter.draw(content);
    //     }
        
    //   };
    //   req.send(null);
    });
    
}])

.controller('SettingCtrl', ['$scope', function($scope){
    
}]);