angular.module('starter.services',[])

.service('configuration',function(){
    
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

    var key = 'C';
    var timesignature = '3/4';
    var currentKey = cprog;
    
    return {
        getKey:function(){
            return key;
        },
        setKey:function(val){
            key = val;
        },
        getTimeSignature:function(){
            return timesignature;
        },
        setTimeSignature:function(val){
            timesignature = val;
        },
        updateKey:function(){
             switch(key){
                case "C":
                currentKey = cprog;
                break;
                case "G":
                currentKey = gprog;
                break;
                case "D":
                currentKey = dprog;
                break;
                case "E":
                currentKey = eprog;
                break;
                case "B":
                currentKey = bprog;
                break;
       
            }
            
            for(var i = 0; i < 8; i++){
                //this is used to change elements of the measure object  
//   helloworld['score-partwise'].part.measure[0]._number="2";
//   console.log(helloworld['score-partwise'].part.measure);
                musicxml['score-partwise'].part.measure[i].note.pitch.step =currentKey[i]; 
                
            }
        },
        getConfig:function(){
            return musicxml;
        }
    }
})