
if (typeof gdjs.evtsExt__ArrayTools__ObjectFillNumber !== "undefined") {
  gdjs.evtsExt__ArrayTools__ObjectFillNumber.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ArrayTools__ObjectFillNumber = {};
gdjs.evtsExt__ArrayTools__ObjectFillNumber.GDObjectObjects1= [];


gdjs.evtsExt__ArrayTools__ObjectFillNumber.userFunc0xaf66d8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
/** @type {gdjs.Variable} */
const array = eventsFunctionContext.getArgument("Array");

// Cast to array to ensure getAllChildrenArray returns the real array
array.castTo("array");

const internalArray = array.getAllChildrenArray();
const end = eventsFunctionContext.getArgument("End") || internalArray.length - 1;
const value = eventsFunctionContext.getArgument("Value");

for (let i = eventsFunctionContext.getArgument("Begin"); i <= end; i++)
    internalArray[i] = new gdjs.Variable({
        type: "number",
        value,
    });

};
gdjs.evtsExt__ArrayTools__ObjectFillNumber.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ArrayTools__ObjectFillNumber.userFunc0xaf66d8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__ArrayTools__ObjectFillNumber.func = function(runtimeScene, Object, Array, Value, Begin, End, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
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
if (argName === "Begin") return Begin;
if (argName === "End") return End;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ArrayTools__ObjectFillNumber.GDObjectObjects1.length = 0;

gdjs.evtsExt__ArrayTools__ObjectFillNumber.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ArrayTools__ObjectFillNumber.GDObjectObjects1.length = 0;


return;
}

gdjs.evtsExt__ArrayTools__ObjectFillNumber.registeredGdjsCallbacks = [];