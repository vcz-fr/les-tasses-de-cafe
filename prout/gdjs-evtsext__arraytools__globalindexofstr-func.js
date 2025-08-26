
if (typeof gdjs.evtsExt__ArrayTools__GlobalIndexOfStr !== "undefined") {
  gdjs.evtsExt__ArrayTools__GlobalIndexOfStr.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ArrayTools__GlobalIndexOfStr = {};


gdjs.evtsExt__ArrayTools__GlobalIndexOfStr.userFunc0xb1b928 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
/** @type {gdjs.Variable} */
const array = eventsFunctionContext.getArgument("Array");
const value = eventsFunctionContext.getArgument("Value");

eventsFunctionContext.returnValue =
    array.getAllChildrenArray().findIndex(child => child.getAsString() === value);

};
gdjs.evtsExt__ArrayTools__GlobalIndexOfStr.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ArrayTools__GlobalIndexOfStr.userFunc0xb1b928(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__ArrayTools__GlobalIndexOfStr.func = function(runtimeScene, Array, Value, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ArrayTools"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ArrayTools"),
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
if (argName === "Array") return Array;
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ArrayTools__GlobalIndexOfStr.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__ArrayTools__GlobalIndexOfStr.registeredGdjsCallbacks = [];