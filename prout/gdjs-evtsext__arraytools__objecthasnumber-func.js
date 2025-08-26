
if (typeof gdjs.evtsExt__ArrayTools__ObjectHasNumber !== "undefined") {
  gdjs.evtsExt__ArrayTools__ObjectHasNumber.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ArrayTools__ObjectHasNumber = {};
gdjs.evtsExt__ArrayTools__ObjectHasNumber.GDObjectObjects1= [];
gdjs.evtsExt__ArrayTools__ObjectHasNumber.GDObjectObjects2= [];


gdjs.evtsExt__ArrayTools__ObjectHasNumber.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.Variable.copy(eventsFunctionContext.getArgument("Array"), runtimeScene.getScene().getVariables().get("__ArrayTools").getChild("Temp"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (0 != -(1));
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}}

}


};

gdjs.evtsExt__ArrayTools__ObjectHasNumber.func = function(runtimeScene, Object, Array, Value, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ArrayTools__ObjectHasNumber.GDObjectObjects1.length = 0;
gdjs.evtsExt__ArrayTools__ObjectHasNumber.GDObjectObjects2.length = 0;

gdjs.evtsExt__ArrayTools__ObjectHasNumber.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ArrayTools__ObjectHasNumber.GDObjectObjects1.length = 0;
gdjs.evtsExt__ArrayTools__ObjectHasNumber.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ArrayTools__ObjectHasNumber.registeredGdjsCallbacks = [];