
if (typeof gdjs.evtsExt__ArrayTools__GlobalMax !== "undefined") {
  gdjs.evtsExt__ArrayTools__GlobalMax.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ArrayTools__GlobalMax = {};


gdjs.evtsExt__ArrayTools__GlobalMax.userFunc0xa7bf60 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
/** @type {gdjs.Variable[]} */
const internalArray = eventsFunctionContext.getArgument("Array").getAllChildrenArray();
const len = internalArray.length;

if (len === 0) {
    eventsFunctionContext.returnValue = 0;
    return;
}

let max = internalArray[0].getAsNumber();

if (len === 1) {
    eventsFunctionContext.returnValue = max;
    return;
}

for (let i = 1; i < len; i++) {
    const num = internalArray[i].getAsNumber();
    if (num > max) max = num;
}

eventsFunctionContext.returnValue = max;

};
gdjs.evtsExt__ArrayTools__GlobalMax.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ArrayTools__GlobalMax.userFunc0xa7bf60(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__ArrayTools__GlobalMax.func = function(runtimeScene, Array, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ArrayTools__GlobalMax.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__ArrayTools__GlobalMax.registeredGdjsCallbacks = [];