angular.module('starter.services',[])

.service('configuration',function(){

    var key = 'C';
    var timesignature = '3/4';
    
    
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
        }
    }
})