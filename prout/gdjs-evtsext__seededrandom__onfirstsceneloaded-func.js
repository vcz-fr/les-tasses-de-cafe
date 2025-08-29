
if (typeof gdjs.evtsExt__SeededRandom__onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__SeededRandom__onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SeededRandom__onFirstSceneLoaded = {};


gdjs.evtsExt__SeededRandom__onFirstSceneLoaded.userFunc0x7f8fa0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
runtimeScene.rng = new Hashtable();
runtimeScene.rng.getNewRNG = function(a, b, c, d) { return function() { var t = b << 9, r = a * 5; r = (r << 7 | r >>> 25) * 9; c ^= a; d ^= b; b ^= c; a ^= d; c ^= t; d = d << 11 | d >>> 21; return (r >>> 0) / 4294967296; } }
runtimeScene.rng.getRNG = function(name) {
    if(!this.containsKey(name))
      this.put(name, new this.RNGClass());
    return this.get(name);
};
runtimeScene.rng.RNGClass = function() {};
runtimeScene.rng.RNGClass.prototype.random = function() {return Math.random()}; // In case the user forgot to give a seed fallback to Math.random
runtimeScene.rng.RNGClass.prototype.setSeed = function(str) { for(var i = 0, h = 1779033703 ^ str.length; i < str.length; i++) h = Math.imul(h ^ str.charCodeAt(i), 3432918353), h = h << 13 | h >>> 19; this.seed = function() { h = Math.imul(h ^ h >>> 16, 2246822507); h = Math.imul(h ^ h >>> 13, 3266489909); return (h ^= h >>> 16) >>> 0; }; this.random = runtimeScene.rng.getNewRNG(this.seed(), this.seed(), this.seed(), this.seed()); };

};
gdjs.evtsExt__SeededRandom__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__SeededRandom__onFirstSceneLoaded.userFunc0x7f8fa0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__SeededRandom__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__SeededRandom__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__SeededRandom__onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__SeededRandom__onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__SeededRandom__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__SeededRandom__onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__SeededRandom__onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);
