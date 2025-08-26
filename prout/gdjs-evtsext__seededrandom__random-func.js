
if (typeof gdjs.evtsExt__SeededRandom__Random !== "undefined") {
  gdjs.evtsExt__SeededRandom__Random.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SeededRandom__Random = {};


gdjs.evtsExt__SeededRandom__Random.userFunc0x72e0b0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
let max = eventsFunctionContext.getArgument("max");
if (max <= 0) {
    eventsFunctionContext.returnValue = 0;
    return;
}
eventsFunctionContext.returnValue = Math.floor(runtimeScene.rng.getRNG(eventsFunctionContext.getArgument("rngname")).random() * (max + 1));

};
gdjs.evtsExt__SeededRandom__Random.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__SeededRandom__Random.userFunc0x72e0b0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__SeededRandom__Random.func = function(runtimeScene, rngname, max, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SeededRandom"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SeededRandom"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "rngname") return rngname;
if (argName === "max") return max;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__SeededRandom__Random.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__SeededRandom__Random.registeredGdjsCallbacks = [];