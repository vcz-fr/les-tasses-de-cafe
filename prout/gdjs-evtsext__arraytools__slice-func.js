
if (typeof gdjs.evtsExt__ArrayTools__Slice !== "undefined") {
  gdjs.evtsExt__ArrayTools__Slice.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ArrayTools__Slice = {};


gdjs.evtsExt__ArrayTools__Slice.userFunc0xa93458 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
/** @type {gdjs.Variable} */
const array = eventsFunctionContext.getArgument("Array");
/** @type {gdjs.Variable} */
const target = eventsFunctionContext.getArgument("Target");

// Ensure the target is a clean new array
target.castTo("array");
target.clearChildren();

// Slice the original array
const slice = array
    .getAllChildrenArray()
    .slice(
        eventsFunctionContext.getArgument("Begin"),
        // The `|| undefined` replaces 0 with undefined, as having the argument as 0 
        // would make the array empty and is therefore useless.
        // With undefined though, it doesn't stop until the end of the array,
        // which is purposeful.
        eventsFunctionContext.getArgument("End") || undefined
    );

// Copy each variable of the slice into the new array
for (const variable of slice)
    target.pushVariableCopy(variable);

};
gdjs.evtsExt__ArrayTools__Slice.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ArrayTools__Slice.userFunc0xa93458(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__ArrayTools__Slice.func = function(runtimeScene, Array, Target, Begin, End, parentEventsFunctionContext) {
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
if (argName === "Target") return Target;
if (argName === "Begin") return Begin;
if (argName === "End") return End;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ArrayTools__Slice.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__ArrayTools__Slice.registeredGdjsCallbacks = [];