angular.module('starter.controllers',[])

.controller('HomeCtrl', ['$scope', 'x2js', '$http', '$ionicPlatform', '$cordovaFile', function($scope, x2js, $http, $ionicPlatform, $cordovaFile){
    
//    function getParameter(name) {
//       name = name.replace(/\[]/, "\\\[").replace(/[\]]/, "\\\]");
//       var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
//       var results = regex.exec(window.location.search);
//       if (results == null) return undefined;
//       else return decodeURIComponent(results[1].replace(/\+/g, " "));
//     } 
    
    var VexDocument = null;
    var VexFormatter = null;
    
    $scope.test = function(){
         $ionicPlatform.ready(function(){
    //      $cordovaFile.readAsText("file:///android_asset/www/assets/",'bach_bwv846p.xml')
    //      .then(function(success){
    //         //  console.log(success);
    //          try {
    //       VexDocument = new Vex.Flow.Document(success);
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
    //      },function(error){
    //          console.log(error);
    //      })
    
    var xmlText = "<MyOperation myAttr='SuccessAttrValue'>MyText</MyOperation>";
    console.log(x2js.xml_str2json( xmlText ));
    
    var jsonobj = {"name": "Dolphin Dance","events": [
        [2,   "note", 76, 0.8, 0.5],
        [2.5, "note", 77, 0.6, 0.5],
        [3,   "note", 79, 1, 0.5],
        [3.5, "note", 74, 1, 3.5],
        [10,  "note", 76, 1, 0.5],
        [0, "chord", "C", "∆", 4],
        [4, "chord", "G", "-", 4]
    ],
    "interpretation": {
        "time_signature": "4/4",
        "key": "C",
        "transpose": 0
    }
    };
    console.log(x2js.json2xml_str(jsonobj));

     });
    
    }
    
   
    
    
}])

.controller('SettingCtrl', ['$scope', function($scope){
    
}])

.controller('KeyCtrl', ['$scope', 'configuration', function($scope, configuration){
    console.log(configuration.getKey());
    $scope.choice = configuration.getKey();
    $scope.change = function(key){
       configuration.setKey(key);
    }
    
    
}])

.controller('TimeSignatureCtrl', ['$scope', 'configuration', function($scope, configuration){
     console.log(configuration.getTimeSignature());
    $scope.time = configuration.getTimeSignature();
    $scope.change = function(time){
        configuration.setTimeSignature(time);
    }
    
}]);