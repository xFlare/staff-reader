angular.module('starter.controllers',[])

.controller('HomeCtrl', ['$scope', 'x2js', '$http', '$ionicPlatform', '$cordovaFile', function($scope, x2js, $http, $ionicPlatform, $cordovaFile){
    
    var VexDocument = null;
    var VexFormatter = null;
    
    $scope.test = function(){
         $ionicPlatform.ready(function(){
    
  var helloworld = {
      "score-partwise":{
          "_version":"3.0",
          "part-list":{
              "score-part":{
                  "_id":"P1",
                  "part-name":"Music",
              }//end score-part
          },//end part-list
         "part":{
             "_id":"P1",
             "measure":{
                 "_number":"1",
                 "attributes":{
                     "division":"1",
                     "key":{
                         "fifths":"0",
                     },//end key
                     "time":{
                         "beats":"4",
                         "beat-type":"4"
                     },//end time
                     "clef":{
                         "sign":"G",
                         "line":"2",
                     },//end clef
                 },//end attributes
                 "note":{
                     "pitch":{
                         "step":"C",
                         "octave":"4",
                     },//end pitch
                     "duration":"4",
                     "type":"whole",
                 } //end note
             }//end measure
         }//end part
      }//end score-partwise
  }
  
    //    $cordovaFile.readAsText("file:///android_asset/www/assets/",'bach_bwv846p.xml')
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
    
     try {
          VexDocument = new Vex.Flow.Document(x2js.json2xml_str(helloworld));
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
    
  
  var xmlText = "<MyOperation myAttr='SuccessAttrValue'>MyText</MyOperation>";
    console.log(x2js.json2xml_str(obj));
    console.log(x2js.xml_str2json(xmlText));
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