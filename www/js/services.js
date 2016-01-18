angular.module('starter.services',[])

.service('configuration',function(){
    var configuration = this;
    configuration.key = 'C';
    configuration.timeSignature = "3/4";
    configuration.getKey = function(){
        return configuration.key;
    }
    configuration.setKey = function(key){
        configuration.key = key;
    }
    configuration.getTimeSignature = function(){
        return configuration.timeSignature;
    }
    configuration.setTimeSignature = function(timeSignature){
        configuration.key = timeSignature;
    }
})