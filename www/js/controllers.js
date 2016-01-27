angular.module('starter.controllers',[])

.controller('HomeCtrl', ['$scope', 'configuration', 'x2js', '$http', '$ionicPlatform', '$cordovaFile', function($scope, configuration, x2js, $http, $ionicPlatform, $cordovaFile){
    
    var VexDocument = null;
    var VexFormatter = null;
    
    //define scales
    //C major
    var C = {
        "I":"C",
        "ii":"D",
        "iii":"E",
        "IV":"F",
        "V":"G",
        "vi":"A",
        "vii":"B"
    }
    
    //G major
    var G = {
        "I":"G",
        "ii":"A",
        "iii":"B",
        "IV":"C",
        "V":"D",
        "vi":"E",
        "vii":"F"
    }
    
    //D major
    var D = {
        "I":"D",
        "ii":"E",
        "iii":"F",
        "IV":"G",
        "V":"A",
        "vi":"B",
        "vii":"C"
    }
    
    //E major
    var E = {
        "I":"E",
        "ii":"F",
        "iii":"G",
        "IV":"A",
        "V":"B",
        "vi":"C",
        "vii":"D"
    }
    
    //B major
    var B = {
        "I":"B",
        "ii":"C",
        "iii":"D",
        "IV":"E",
        "V":"F",
        "vi":"G",
        "vii":"A"
    }
    
    //harmonic progression of the scales
    var cprog =[C.I,C.IV,C.I,C.V,C.I,C.IV,C.V,C.I];
    var gprog =[G.I,G.IV,G.I,G.V,G.I,G.IV,G.V,G.I];
    var dprog =[D.I,D.IV,D.I,D.V,D.I,D.IV,D.V,D.I];
    var eprog =[E.I,E.IV,E.I,E.V,E.I,E.IV,E.V,E.I];
    var bprog =[B.I,B.IV,B.I,B.V,B.I,B.IV,B.V,B.I];
    
    //default musicxml json to build upon
    var musicxml = {
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
             "measure":[{
                 "_number":"1",
                 "attributes":{
                     "division":"1",
                     "key":{
                         "fifths":"0",
                     },//end key
                     "time":{
                         "_symbol":"commom",
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
                         "step":"",
                         "octave":"4",
                     },//end pitch
                     "duration":"4",
                     "type":"whole",
                 } //end note
             },{
                 "_number":"2",
                 "attributes":{
                     "division":"1",
                     "key":{
                         "fifths":"0",
                     },//end key
                     "time":{
                         "_symbol":"commom",
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
                         "step":"",
                         "octave":"4",
                     },//end pitch
                     "duration":"4",
                     "type":"whole",
                 } //end note
             },{
                 "_number":"3",
                 "attributes":{
                     "division":"1",
                     "key":{
                         "fifths":"0",
                     },//end key
                     "time":{
                         "_symbol":"commom",
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
                         "step":"",
                         "octave":"4",
                     },//end pitch
                     "duration":"4",
                     "type":"whole",
                 } //end note
             },{
                 "_number":"4",
                 "attributes":{
                     "division":"1",
                     "key":{
                         "fifths":"0",
                     },//end key
                     "time":{
                         "_symbol":"commom",
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
                         "step":"",
                         "octave":"4",
                     },//end pitch
                     "duration":"4",
                     "type":"whole",
                 } //end note
             },{
                 "_number":"5",
                 "attributes":{
                     "division":"1",
                     "key":{
                         "fifths":"0",
                     },//end key
                     "time":{
                         "_symbol":"commom",
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
                         "step":"",
                         "octave":"4",
                     },//end pitch
                     "duration":"4",
                     "type":"whole",
                 } //end note
             },{
                 "_number":"6",
                 "attributes":{
                     "division":"1",
                     "key":{
                         "fifths":"0",
                     },//end key
                     "time":{
                         "_symbol":"commom",
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
                         "step":"",
                         "octave":"4",
                     },//end pitch
                     "duration":"4",
                     "type":"whole",
                 } //end note
             },{
                 "_number":"7",
                 "attributes":{
                     "division":"1",
                     "key":{
                         "fifths":"0",
                     },//end key
                     "time":{
                         "_symbol":"commom",
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
                         "step":"",
                         "octave":"4",
                     },//end pitch
                     "duration":"4",
                     "type":"whole",
                 } //end note
             },{
                 "_number":"8",
                 "attributes":{
                     "division":"1",
                     "key":{
                         "fifths":"0",
                     },//end key
                     "time":{
                         "_symbol":"commom",
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
                         "step":"",
                         "octave":"4",
                     },//end pitch
                     "duration":"4",
                     "type":"whole",
                 } //end note
             }]//end measure
         }//end part
      }//end score-partwise
  }
//  musicxml['score-partwise'].part.measure[0]._number = 1+"";
//     musicxml['score-partwise'].part.measure[0].attributes.division = 1+"";
    // console.log(musicxml['score-partwise'].part.measure[0].note.pitch.)
function update(){
    //helloworld['score-partwise'].part.measure
    var currentKey;
   switch(configuration.getKey()){
       case "C":
       currentKey = cprog;
       break;
       case "G":
       currentKey = gprog;
       break;
       case "D":
       currentKey = gprog;
       break;
       case "E":
       currentKey = gprog;
       break;
       case "B":
       currentKey = gprog;
       break;
       
   }
    for(i = 0; i < 8; i++){
        musicxml['score-partwise'].part.measure[i].note.pitch.step =currentKey[i]; 
        
    }
    
    
    
}
$scope.$on('updated',function() {
    console.log('ready');
    update();
    try {
          VexDocument = new Vex.Flow.Document(x2js.json2xml_str(musicxml));
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
});
    
    $scope.test = function(){
         $ionicPlatform.ready(function(){
    
 
  

//use the access elements with "-" the call the rest as normal and update the fields
// helloworld['score-partwise'].part.measure = { "_number":"1",
//                  "attributes":{
//                      "division":"1",
//                      "key":{
//                          "fifths":"0",
//                      },//end key
//                      "time":{
//                          "beats":"4",
//                          "beat-type":"4"
//                      },//end time
//                      "clef":{
//                          "sign":"G",
//                          "line":"2",
//                      },//end clef
//                  },//end attributes
//                  "note":{
//                      "pitch":{
//                          "step":C.V,
//                          "octave":"4",
//                      },//end pitch
//                      "duration":"4",
//                      "type":"whole",
//                     } //end note 
//                  }
  //this is used to change elements of the measure object  
  update();
//   helloworld['score-partwise'].part.measure[0]._number="2";
//   console.log(helloworld['score-partwise'].part.measure);
  
    //  to load files from the device
    //    $cordovaFile.readAsText("file:///android_asset/www/assets/",'hello.txt')
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
          VexDocument = new Vex.Flow.Document(x2js.json2xml_str(musicxml));
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
    
  
//   var xmlText = "<MyOperation myAttr='SuccessAttrValue'>MyText</MyOperation>";
//     console.log(x2js.json2xml_str(obj));
//     console.log(x2js.xml_str2json(xmlText));
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
       $scope.$emit('updated',{})
    }
    
    
}])

.controller('TimeSignatureCtrl', ['$scope', 'configuration', function($scope, configuration){
     console.log(configuration.getTimeSignature());
    $scope.time = configuration.getTimeSignature();
    $scope.change = function(time){
        configuration.setTimeSignature(time);
    }
    
}]);