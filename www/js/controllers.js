angular.module('starter.controllers',[])

.controller('HomeCtrl', ['$scope', '$http', '$ionicPlatform', '$cordovaFile', function($scope, $http, $ionicPlatform, $cordovaFile){
    
   function getParameter(name) {
      name = name.replace(/\[]/, "\\\[").replace(/[\]]/, "\\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
      var results = regex.exec(window.location.search);
      if (results == null) return undefined;
      else return decodeURIComponent(results[1].replace(/\+/g, " "));
    } 
    
    var VexDocument = null;
    var VexFormatter = null;
    
    $scope.test = function(){
         $ionicPlatform.ready(function(){
         $cordovaFile.readAsText("file:///android_asset/www/assets/",'bach_bwv846p.xml')
         .then(function(success){
            //  console.log(success);
             try {
          VexDocument = new Vex.Flow.Document(success);
        }
        catch (e) {
          $(".content")[0].innerHTML = "There was an error with the document.";
          console.log(e);
        }
        var content = $(".content")[0];
        if (VexDocument) {
          VexFormatter = VexDocument.getFormatter();
          VexFormatter.draw(content);
        }
         },function(error){
             console.log(error);
         })

    });
    }
    
   
    
    
}])

.controller('SettingCtrl', ['$scope', function($scope){
    
}])

.controller('KeyCtrl', ['$scope', function($scope){
    
}])

.controller('TimeSignatureCtrl', ['$scope', function($scope){
    
}]);