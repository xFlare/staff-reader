angular.module('starter.controllers',[])

.controller('HomeCtrl', ['$scope', 'configuration', 'x2js', '$http', '$ionicPlatform', '$cordovaFile', function($scope, configuration, x2js, $http, $ionicPlatform, $cordovaFile){
    
    var VexDocument = null;
    var VexFormatter = null;
    
    
//  musicxml['score-partwise'].part.measure[0]._number = 1+"";
//     musicxml['score-partwise'].part.measure[0].attributes.division = 1+"";
    // console.log(musicxml['score-partwise'].part.measure[0].note.pitch.)


//     $scope.test = function(){
//          $ionicPlatform.ready(function(){
    
//  configuration.updateKey();
  
//     console.log(configuration.getKey());
//     console.log(configuration.getTimeSignature());
//      try {
//           VexDocument = new Vex.Flow.Document(x2js.json2xml_str(configuration.getConfig()));
//         }
//         catch (e) {
//           $(".content")[0].innerHTML = "There was an error with the document.";
//           //console.log(e);
//         }
//         var content = $(".content")[0];
//         if (VexDocument) {
//           VexFormatter = VexDocument.getFormatter();
//           VexFormatter.draw(content);
//         }
  
// //   var xmlText = "<MyOperation myAttr='SuccessAttrValue'>MyText</MyOperation>";
// //     console.log(x2js.json2xml_str(obj));
// //     console.log(x2js.xml_str2json(xmlText));
//      });
//     }

//call this function when home page is loaded
     $scope.$on('$ionicView.enter',function(){
         configuration.updateKey();
         configuration.updateTimeSignature();
  
    console.log(configuration.getKey());
    console.log(configuration.getTimeSignature());
     try {
          VexDocument = new Vex.Flow.Document(x2js.json2xml_str(configuration.getConfig()));
        }
        catch (e) {
          $(".content")[0].innerHTML = "There was an error with the document.";
          //console.log(e);
        }
        var content = $(".content")[0];
        if (VexDocument) {
          VexFormatter = VexDocument.getFormatter();
          VexFormatter.draw(content);
        }
     })   
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
        var beat, beatType;
        switch(time){
            case "2/4": 
            beat = "2";
            beatType = "4";
            break;
            case "3/4": 
            beat = "3";
            beatType = "4";
            break;
            case "4/4": 
            beat = "4";
            beatType = "4";
            break;
        }
        
        configuration.setTimeSignature(beat, beatType);
    }
    
}]);