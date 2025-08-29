gdjs.JeuCode = {};
gdjs.JeuCode.localVariables = [];
gdjs.JeuCode.GDRestartObjects1_1final = [];

gdjs.JeuCode.GDVertObjects1= [];
gdjs.JeuCode.GDVertObjects2= [];
gdjs.JeuCode.GDVertObjects3= [];
gdjs.JeuCode.GDVertObjects4= [];
gdjs.JeuCode.GDVertObjects5= [];
gdjs.JeuCode.GDMarronObjects1= [];
gdjs.JeuCode.GDMarronObjects2= [];
gdjs.JeuCode.GDMarronObjects3= [];
gdjs.JeuCode.GDMarronObjects4= [];
gdjs.JeuCode.GDMarronObjects5= [];
gdjs.JeuCode.GDNoirObjects1= [];
gdjs.JeuCode.GDNoirObjects2= [];
gdjs.JeuCode.GDNoirObjects3= [];
gdjs.JeuCode.GDNoirObjects4= [];
gdjs.JeuCode.GDNoirObjects5= [];
gdjs.JeuCode.GDCoupsObjects1= [];
gdjs.JeuCode.GDCoupsObjects2= [];
gdjs.JeuCode.GDCoupsObjects3= [];
gdjs.JeuCode.GDCoupsObjects4= [];
gdjs.JeuCode.GDCoupsObjects5= [];
gdjs.JeuCode.GDMurObjects1= [];
gdjs.JeuCode.GDMurObjects2= [];
gdjs.JeuCode.GDMurObjects3= [];
gdjs.JeuCode.GDMurObjects4= [];
gdjs.JeuCode.GDMurObjects5= [];
gdjs.JeuCode.GDOndeVertObjects1= [];
gdjs.JeuCode.GDOndeVertObjects2= [];
gdjs.JeuCode.GDOndeVertObjects3= [];
gdjs.JeuCode.GDOndeVertObjects4= [];
gdjs.JeuCode.GDOndeVertObjects5= [];
gdjs.JeuCode.GDOndeMarronObjects1= [];
gdjs.JeuCode.GDOndeMarronObjects2= [];
gdjs.JeuCode.GDOndeMarronObjects3= [];
gdjs.JeuCode.GDOndeMarronObjects4= [];
gdjs.JeuCode.GDOndeMarronObjects5= [];
gdjs.JeuCode.GDOndeBlancObjects1= [];
gdjs.JeuCode.GDOndeBlancObjects2= [];
gdjs.JeuCode.GDOndeBlancObjects3= [];
gdjs.JeuCode.GDOndeBlancObjects4= [];
gdjs.JeuCode.GDOndeBlancObjects5= [];
gdjs.JeuCode.GDRestartObjects1= [];
gdjs.JeuCode.GDRestartObjects2= [];
gdjs.JeuCode.GDRestartObjects3= [];
gdjs.JeuCode.GDRestartObjects4= [];
gdjs.JeuCode.GDRestartObjects5= [];
gdjs.JeuCode.GDJauneObjects1= [];
gdjs.JeuCode.GDJauneObjects2= [];
gdjs.JeuCode.GDJauneObjects3= [];
gdjs.JeuCode.GDJauneObjects4= [];
gdjs.JeuCode.GDJauneObjects5= [];
gdjs.JeuCode.GDOndeJauneObjects1= [];
gdjs.JeuCode.GDOndeJauneObjects2= [];
gdjs.JeuCode.GDOndeJauneObjects3= [];
gdjs.JeuCode.GDOndeJauneObjects4= [];
gdjs.JeuCode.GDOndeJauneObjects5= [];
gdjs.JeuCode.GDCercleObjects1= [];
gdjs.JeuCode.GDCercleObjects2= [];
gdjs.JeuCode.GDCercleObjects3= [];
gdjs.JeuCode.GDCercleObjects4= [];
gdjs.JeuCode.GDCercleObjects5= [];
gdjs.JeuCode.GDAideObjects1= [];
gdjs.JeuCode.GDAideObjects2= [];
gdjs.JeuCode.GDAideObjects3= [];
gdjs.JeuCode.GDAideObjects4= [];
gdjs.JeuCode.GDAideObjects5= [];
gdjs.JeuCode.GDChronoObjects1= [];
gdjs.JeuCode.GDChronoObjects2= [];
gdjs.JeuCode.GDChronoObjects3= [];
gdjs.JeuCode.GDChronoObjects4= [];
gdjs.JeuCode.GDChronoObjects5= [];
gdjs.JeuCode.GDScoreObjects1= [];
gdjs.JeuCode.GDScoreObjects2= [];
gdjs.JeuCode.GDScoreObjects3= [];
gdjs.JeuCode.GDScoreObjects4= [];
gdjs.JeuCode.GDScoreObjects5= [];
gdjs.JeuCode.GDFinObjects1= [];
gdjs.JeuCode.GDFinObjects2= [];
gdjs.JeuCode.GDFinObjects3= [];
gdjs.JeuCode.GDFinObjects4= [];
gdjs.JeuCode.GDFinObjects5= [];


gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects4Objects = Hashtable.newFrom({"Vert": gdjs.JeuCode.GDVertObjects4});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMarronObjects4Objects = Hashtable.newFrom({"Marron": gdjs.JeuCode.GDMarronObjects4});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDJauneObjects4Objects = Hashtable.newFrom({"Jaune": gdjs.JeuCode.GDJauneObjects4});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDNoirObjects4Objects = Hashtable.newFrom({"Noir": gdjs.JeuCode.GDNoirObjects4});
gdjs.JeuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.JeuCode.GDVertObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects4Objects, runtimeScene.getGame().getVariables().getFromIndex(3).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(4).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).getAsNumber(), "");
}{for(var i = 0, len = gdjs.JeuCode.GDVertObjects4.length ;i < len;++i) {
    gdjs.JeuCode.GDVertObjects4[i].returnVariable(gdjs.JeuCode.GDVertObjects4[i].getVariables().getFromIndex(0)).setNumber(runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).getAsNumber());
}
}{for(var i = 0, len = gdjs.JeuCode.GDVertObjects4.length ;i < len;++i) {
    gdjs.JeuCode.GDVertObjects4[i].addPolarForce(gdjs.JeuCode.GDVertObjects4[i].getVariables().getFromIndex(0).getAsNumber(), 100, 1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.JeuCode.GDMarronObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMarronObjects4Objects, runtimeScene.getGame().getVariables().getFromIndex(3).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(4).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).getAsNumber(), "");
}{for(var i = 0, len = gdjs.JeuCode.GDMarronObjects4.length ;i < len;++i) {
    gdjs.JeuCode.GDMarronObjects4[i].returnVariable(gdjs.JeuCode.GDMarronObjects4[i].getVariables().getFromIndex(0)).setNumber(runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).getAsNumber());
}
}{for(var i = 0, len = gdjs.JeuCode.GDMarronObjects4.length ;i < len;++i) {
    gdjs.JeuCode.GDMarronObjects4[i].addPolarForce(gdjs.JeuCode.GDMarronObjects4[i].getVariables().getFromIndex(0).getAsNumber(), 100, 1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.JeuCode.GDJauneObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDJauneObjects4Objects, runtimeScene.getGame().getVariables().getFromIndex(3).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(4).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).getAsNumber(), "");
}{for(var i = 0, len = gdjs.JeuCode.GDJauneObjects4.length ;i < len;++i) {
    gdjs.JeuCode.GDJauneObjects4[i].returnVariable(gdjs.JeuCode.GDJauneObjects4[i].getVariables().getFromIndex(0)).setNumber(runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).getAsNumber());
}
}{for(var i = 0, len = gdjs.JeuCode.GDJauneObjects4.length ;i < len;++i) {
    gdjs.JeuCode.GDJauneObjects4[i].addPolarForce(gdjs.JeuCode.GDJauneObjects4[i].getVariables().getFromIndex(0).getAsNumber(), 100, 1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.JeuCode.GDNoirObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDNoirObjects4Objects, runtimeScene.getGame().getVariables().getFromIndex(3).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(4).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).getAsNumber(), "");
}{for(var i = 0, len = gdjs.JeuCode.GDNoirObjects4.length ;i < len;++i) {
    gdjs.JeuCode.GDNoirObjects4[i].returnVariable(gdjs.JeuCode.GDNoirObjects4[i].getVariables().getFromIndex(0)).setNumber(runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).getAsNumber());
}
}{for(var i = 0, len = gdjs.JeuCode.GDNoirObjects4.length ;i < len;++i) {
    gdjs.JeuCode.GDNoirObjects4[i].addPolarForce(gdjs.JeuCode.GDNoirObjects4[i].getVariables().getFromIndex(0).getAsNumber(), 100, 1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}}

}


};gdjs.JeuCode.eventsList1 = function(runtimeScene) {

{


const repeatCount3 = runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber();
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.JeuCode.eventsList0(runtimeScene);} //Subevents end.
}
}

}


};gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects4Objects = Hashtable.newFrom({"Vert": gdjs.JeuCode.GDVertObjects4});
gdjs.JeuCode.eventsList2 = function(runtimeScene) {

};gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMarronObjects4Objects = Hashtable.newFrom({"Marron": gdjs.JeuCode.GDMarronObjects4});
gdjs.JeuCode.eventsList3 = function(runtimeScene) {

};gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDJauneObjects4Objects = Hashtable.newFrom({"Jaune": gdjs.JeuCode.GDJauneObjects4});
gdjs.JeuCode.eventsList4 = function(runtimeScene) {

};gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDNoirObjects3Objects = Hashtable.newFrom({"Noir": gdjs.JeuCode.GDNoirObjects3});
gdjs.JeuCode.eventsList5 = function(runtimeScene) {

};gdjs.JeuCode.eventsList6 = function(runtimeScene) {

{


const repeatCount4 = 11 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 4, null);
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {
gdjs.JeuCode.GDVertObjects4.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects4Objects, 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1856, null), 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1016, null), "");
}{for(var i = 0, len = gdjs.JeuCode.GDVertObjects4.length ;i < len;++i) {
    gdjs.JeuCode.GDVertObjects4[i].returnVariable(gdjs.JeuCode.GDVertObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 360, null));
}
}{for(var i = 0, len = gdjs.JeuCode.GDVertObjects4.length ;i < len;++i) {
    gdjs.JeuCode.GDVertObjects4[i].addPolarForce(gdjs.JeuCode.GDVertObjects4[i].getVariables().getFromIndex(0).getAsNumber(), 100, 1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(3).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDVertObjects4.length === 0 ) ? 0 :gdjs.JeuCode.GDVertObjects4[0].getPointX("")));
}{runtimeScene.getGame().getVariables().getFromIndex(4).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDVertObjects4.length === 0 ) ? 0 :gdjs.JeuCode.GDVertObjects4[0].getPointY("")));
}{runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(((gdjs.JeuCode.GDVertObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JeuCode.GDVertObjects4[0].getVariables()).getFromIndex(0).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}}
}

}


{


const repeatCount4 = 3 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 2, null);
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {
gdjs.JeuCode.GDMarronObjects4.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMarronObjects4Objects, 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1856, null), 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1016, null), "");
}{for(var i = 0, len = gdjs.JeuCode.GDMarronObjects4.length ;i < len;++i) {
    gdjs.JeuCode.GDMarronObjects4[i].returnVariable(gdjs.JeuCode.GDMarronObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 360, null));
}
}{for(var i = 0, len = gdjs.JeuCode.GDMarronObjects4.length ;i < len;++i) {
    gdjs.JeuCode.GDMarronObjects4[i].addPolarForce(gdjs.JeuCode.GDMarronObjects4[i].getVariables().getFromIndex(0).getAsNumber(), 100, 1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(3).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDMarronObjects4.length === 0 ) ? 0 :gdjs.JeuCode.GDMarronObjects4[0].getPointX("")));
}{runtimeScene.getGame().getVariables().getFromIndex(4).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDMarronObjects4.length === 0 ) ? 0 :gdjs.JeuCode.GDMarronObjects4[0].getPointY("")));
}{runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(((gdjs.JeuCode.GDMarronObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JeuCode.GDMarronObjects4[0].getVariables()).getFromIndex(0).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}}
}

}


{


const repeatCount4 = 3 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 2, null);
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {
gdjs.JeuCode.GDJauneObjects4.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDJauneObjects4Objects, 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1856, null), 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1016, null), "");
}{for(var i = 0, len = gdjs.JeuCode.GDJauneObjects4.length ;i < len;++i) {
    gdjs.JeuCode.GDJauneObjects4[i].returnVariable(gdjs.JeuCode.GDJauneObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 360, null));
}
}{for(var i = 0, len = gdjs.JeuCode.GDJauneObjects4.length ;i < len;++i) {
    gdjs.JeuCode.GDJauneObjects4[i].addPolarForce(gdjs.JeuCode.GDJauneObjects4[i].getVariables().getFromIndex(0).getAsNumber(), 100, 1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(2);
}{runtimeScene.getGame().getVariables().getFromIndex(3).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDJauneObjects4.length === 0 ) ? 0 :gdjs.JeuCode.GDJauneObjects4[0].getPointX("")));
}{runtimeScene.getGame().getVariables().getFromIndex(4).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDJauneObjects4.length === 0 ) ? 0 :gdjs.JeuCode.GDJauneObjects4[0].getPointY("")));
}{runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(((gdjs.JeuCode.GDJauneObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JeuCode.GDJauneObjects4[0].getVariables()).getFromIndex(0).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}}
}

}


{


const repeatCount3 = 3 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 2, null);
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {
gdjs.copyArray(runtimeScene.getObjects("Jaune"), gdjs.JeuCode.GDJauneObjects3);
gdjs.copyArray(runtimeScene.getObjects("Marron"), gdjs.JeuCode.GDMarronObjects3);
gdjs.copyArray(runtimeScene.getObjects("Vert"), gdjs.JeuCode.GDVertObjects3);
gdjs.JeuCode.GDNoirObjects3.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDNoirObjects3Objects, 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1856, null), 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1016, null), "");
}{for(var i = 0, len = gdjs.JeuCode.GDNoirObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDNoirObjects3[i].returnVariable(gdjs.JeuCode.GDNoirObjects3[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 360, null));
}
}{for(var i = 0, len = gdjs.JeuCode.GDNoirObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDNoirObjects3[i].addPolarForce(gdjs.JeuCode.GDNoirObjects3[i].getVariables().getFromIndex(0).getAsNumber(), 100, 1);
}
}{for(var i = 0, len = gdjs.JeuCode.GDVertObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDVertObjects3[i].getBehavior("Opacity").setOpacity(128);
}
for(var i = 0, len = gdjs.JeuCode.GDMarronObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDMarronObjects3[i].getBehavior("Opacity").setOpacity(128);
}
for(var i = 0, len = gdjs.JeuCode.GDJauneObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDJauneObjects3[i].getBehavior("Opacity").setOpacity(128);
}
for(var i = 0, len = gdjs.JeuCode.GDNoirObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDNoirObjects3[i].getBehavior("Opacity").setOpacity(128);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(3).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDNoirObjects3.length === 0 ) ? 0 :gdjs.JeuCode.GDNoirObjects3[0].getPointX("")));
}{runtimeScene.getGame().getVariables().getFromIndex(4).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDNoirObjects3.length === 0 ) ? 0 :gdjs.JeuCode.GDNoirObjects3[0].getPointY("")));
}{runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(((gdjs.JeuCode.GDNoirObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JeuCode.GDNoirObjects3[0].getVariables()).getFromIndex(0).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() - 1);
}}
}

}


};gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects4Objects = Hashtable.newFrom({"Vert": gdjs.JeuCode.GDVertObjects4});
gdjs.JeuCode.eventsList7 = function(runtimeScene) {

};gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDNoirObjects3Objects = Hashtable.newFrom({"Noir": gdjs.JeuCode.GDNoirObjects3});
gdjs.JeuCode.eventsList8 = function(runtimeScene) {

};gdjs.JeuCode.eventsList9 = function(runtimeScene) {

{


const repeatCount4 = 15 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 5, null);
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {
gdjs.JeuCode.GDVertObjects4.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects4Objects, 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1856, null), 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1016, null), "");
}{for(var i = 0, len = gdjs.JeuCode.GDVertObjects4.length ;i < len;++i) {
    gdjs.JeuCode.GDVertObjects4[i].returnVariable(gdjs.JeuCode.GDVertObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 360, null));
}
}{for(var i = 0, len = gdjs.JeuCode.GDVertObjects4.length ;i < len;++i) {
    gdjs.JeuCode.GDVertObjects4[i].addPolarForce(gdjs.JeuCode.GDVertObjects4[i].getVariables().getFromIndex(0).getAsNumber(), 100, 1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(3).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDVertObjects4.length === 0 ) ? 0 :gdjs.JeuCode.GDVertObjects4[0].getPointX("")));
}{runtimeScene.getGame().getVariables().getFromIndex(4).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDVertObjects4.length === 0 ) ? 0 :gdjs.JeuCode.GDVertObjects4[0].getPointY("")));
}{runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(((gdjs.JeuCode.GDVertObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JeuCode.GDVertObjects4[0].getVariables()).getFromIndex(0).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}}
}

}


{


const repeatCount3 = 5 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 5, null);
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {
gdjs.copyArray(runtimeScene.getObjects("Jaune"), gdjs.JeuCode.GDJauneObjects3);
gdjs.copyArray(runtimeScene.getObjects("Marron"), gdjs.JeuCode.GDMarronObjects3);
gdjs.copyArray(runtimeScene.getObjects("Vert"), gdjs.JeuCode.GDVertObjects3);
gdjs.JeuCode.GDNoirObjects3.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDNoirObjects3Objects, 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1856, null), 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1016, null), "");
}{for(var i = 0, len = gdjs.JeuCode.GDNoirObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDNoirObjects3[i].returnVariable(gdjs.JeuCode.GDNoirObjects3[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 360, null));
}
}{for(var i = 0, len = gdjs.JeuCode.GDNoirObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDNoirObjects3[i].addPolarForce(gdjs.JeuCode.GDNoirObjects3[i].getVariables().getFromIndex(0).getAsNumber(), 100, 1);
}
}{for(var i = 0, len = gdjs.JeuCode.GDVertObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDVertObjects3[i].getBehavior("Opacity").setOpacity(128);
}
for(var i = 0, len = gdjs.JeuCode.GDMarronObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDMarronObjects3[i].getBehavior("Opacity").setOpacity(128);
}
for(var i = 0, len = gdjs.JeuCode.GDJauneObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDJauneObjects3[i].getBehavior("Opacity").setOpacity(128);
}
for(var i = 0, len = gdjs.JeuCode.GDNoirObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDNoirObjects3[i].getBehavior("Opacity").setOpacity(128);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(3).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDNoirObjects3.length === 0 ) ? 0 :gdjs.JeuCode.GDNoirObjects3[0].getPointX("")));
}{runtimeScene.getGame().getVariables().getFromIndex(4).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDNoirObjects3.length === 0 ) ? 0 :gdjs.JeuCode.GDNoirObjects3[0].getPointY("")));
}{runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(((gdjs.JeuCode.GDNoirObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JeuCode.GDNoirObjects3[0].getVariables()).getFromIndex(0).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() - 1);
}}
}

}


};gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects4Objects = Hashtable.newFrom({"Vert": gdjs.JeuCode.GDVertObjects4});
gdjs.JeuCode.eventsList10 = function(runtimeScene) {

};gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMarronObjects4Objects = Hashtable.newFrom({"Marron": gdjs.JeuCode.GDMarronObjects4});
gdjs.JeuCode.eventsList11 = function(runtimeScene) {

};gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDJauneObjects3Objects = Hashtable.newFrom({"Jaune": gdjs.JeuCode.GDJauneObjects3});
gdjs.JeuCode.eventsList12 = function(runtimeScene) {

};gdjs.JeuCode.eventsList13 = function(runtimeScene) {

{


const repeatCount4 = 14 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 4, null);
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {
gdjs.JeuCode.GDVertObjects4.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects4Objects, 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1856, null), 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1016, null), "");
}{for(var i = 0, len = gdjs.JeuCode.GDVertObjects4.length ;i < len;++i) {
    gdjs.JeuCode.GDVertObjects4[i].returnVariable(gdjs.JeuCode.GDVertObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 360, null));
}
}{for(var i = 0, len = gdjs.JeuCode.GDVertObjects4.length ;i < len;++i) {
    gdjs.JeuCode.GDVertObjects4[i].addPolarForce(gdjs.JeuCode.GDVertObjects4[i].getVariables().getFromIndex(0).getAsNumber(), 100, 1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(3).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDVertObjects4.length === 0 ) ? 0 :gdjs.JeuCode.GDVertObjects4[0].getPointX("")));
}{runtimeScene.getGame().getVariables().getFromIndex(4).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDVertObjects4.length === 0 ) ? 0 :gdjs.JeuCode.GDVertObjects4[0].getPointY("")));
}{runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(((gdjs.JeuCode.GDVertObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JeuCode.GDVertObjects4[0].getVariables()).getFromIndex(0).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}}
}

}


{


const repeatCount4 = 3 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 3, null);
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {
gdjs.JeuCode.GDMarronObjects4.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMarronObjects4Objects, 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1856, null), 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1016, null), "");
}{for(var i = 0, len = gdjs.JeuCode.GDMarronObjects4.length ;i < len;++i) {
    gdjs.JeuCode.GDMarronObjects4[i].returnVariable(gdjs.JeuCode.GDMarronObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 360, null));
}
}{for(var i = 0, len = gdjs.JeuCode.GDMarronObjects4.length ;i < len;++i) {
    gdjs.JeuCode.GDMarronObjects4[i].addPolarForce(gdjs.JeuCode.GDMarronObjects4[i].getVariables().getFromIndex(0).getAsNumber(), 100, 1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(3).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDMarronObjects4.length === 0 ) ? 0 :gdjs.JeuCode.GDMarronObjects4[0].getPointX("")));
}{runtimeScene.getGame().getVariables().getFromIndex(4).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDMarronObjects4.length === 0 ) ? 0 :gdjs.JeuCode.GDMarronObjects4[0].getPointY("")));
}{runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(((gdjs.JeuCode.GDMarronObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JeuCode.GDMarronObjects4[0].getVariables()).getFromIndex(0).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}}
}

}


{


const repeatCount3 = 3 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 3, null);
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {
gdjs.JeuCode.GDJauneObjects3.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDJauneObjects3Objects, 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1856, null), 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1016, null), "");
}{for(var i = 0, len = gdjs.JeuCode.GDJauneObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDJauneObjects3[i].returnVariable(gdjs.JeuCode.GDJauneObjects3[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 360, null));
}
}{for(var i = 0, len = gdjs.JeuCode.GDJauneObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDJauneObjects3[i].addPolarForce(gdjs.JeuCode.GDJauneObjects3[i].getVariables().getFromIndex(0).getAsNumber(), 100, 1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(2);
}{runtimeScene.getGame().getVariables().getFromIndex(3).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDJauneObjects3.length === 0 ) ? 0 :gdjs.JeuCode.GDJauneObjects3[0].getPointX("")));
}{runtimeScene.getGame().getVariables().getFromIndex(4).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDJauneObjects3.length === 0 ) ? 0 :gdjs.JeuCode.GDJauneObjects3[0].getPointY("")));
}{runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(((gdjs.JeuCode.GDJauneObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JeuCode.GDJauneObjects3[0].getVariables()).getFromIndex(0).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}}
}

}


};gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects4Objects = Hashtable.newFrom({"Vert": gdjs.JeuCode.GDVertObjects4});
gdjs.JeuCode.eventsList14 = function(runtimeScene) {

};gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDJauneObjects4Objects = Hashtable.newFrom({"Jaune": gdjs.JeuCode.GDJauneObjects4});
gdjs.JeuCode.eventsList15 = function(runtimeScene) {

};gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDNoirObjects3Objects = Hashtable.newFrom({"Noir": gdjs.JeuCode.GDNoirObjects3});
gdjs.JeuCode.eventsList16 = function(runtimeScene) {

};gdjs.JeuCode.eventsList17 = function(runtimeScene) {

{


const repeatCount4 = 14 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 4, null);
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {
gdjs.JeuCode.GDVertObjects4.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects4Objects, 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1856, null), 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1016, null), "");
}{for(var i = 0, len = gdjs.JeuCode.GDVertObjects4.length ;i < len;++i) {
    gdjs.JeuCode.GDVertObjects4[i].returnVariable(gdjs.JeuCode.GDVertObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 360, null));
}
}{for(var i = 0, len = gdjs.JeuCode.GDVertObjects4.length ;i < len;++i) {
    gdjs.JeuCode.GDVertObjects4[i].addPolarForce(gdjs.JeuCode.GDVertObjects4[i].getVariables().getFromIndex(0).getAsNumber(), 100, 1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(3).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDVertObjects4.length === 0 ) ? 0 :gdjs.JeuCode.GDVertObjects4[0].getPointX("")));
}{runtimeScene.getGame().getVariables().getFromIndex(4).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDVertObjects4.length === 0 ) ? 0 :gdjs.JeuCode.GDVertObjects4[0].getPointY("")));
}{runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(((gdjs.JeuCode.GDVertObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JeuCode.GDVertObjects4[0].getVariables()).getFromIndex(0).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}}
}

}


{


const repeatCount4 = 3 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 3, null);
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {
gdjs.JeuCode.GDJauneObjects4.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDJauneObjects4Objects, 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1856, null), 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1016, null), "");
}{for(var i = 0, len = gdjs.JeuCode.GDJauneObjects4.length ;i < len;++i) {
    gdjs.JeuCode.GDJauneObjects4[i].returnVariable(gdjs.JeuCode.GDJauneObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 360, null));
}
}{for(var i = 0, len = gdjs.JeuCode.GDJauneObjects4.length ;i < len;++i) {
    gdjs.JeuCode.GDJauneObjects4[i].addPolarForce(gdjs.JeuCode.GDJauneObjects4[i].getVariables().getFromIndex(0).getAsNumber(), 100, 1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(2);
}{runtimeScene.getGame().getVariables().getFromIndex(3).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDJauneObjects4.length === 0 ) ? 0 :gdjs.JeuCode.GDJauneObjects4[0].getPointX("")));
}{runtimeScene.getGame().getVariables().getFromIndex(4).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDJauneObjects4.length === 0 ) ? 0 :gdjs.JeuCode.GDJauneObjects4[0].getPointY("")));
}{runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(((gdjs.JeuCode.GDJauneObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JeuCode.GDJauneObjects4[0].getVariables()).getFromIndex(0).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}}
}

}


{


const repeatCount3 = 3 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 3, null);
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {
gdjs.copyArray(runtimeScene.getObjects("Jaune"), gdjs.JeuCode.GDJauneObjects3);
gdjs.copyArray(runtimeScene.getObjects("Marron"), gdjs.JeuCode.GDMarronObjects3);
gdjs.copyArray(runtimeScene.getObjects("Vert"), gdjs.JeuCode.GDVertObjects3);
gdjs.JeuCode.GDNoirObjects3.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDNoirObjects3Objects, 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1856, null), 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1016, null), "");
}{for(var i = 0, len = gdjs.JeuCode.GDNoirObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDNoirObjects3[i].returnVariable(gdjs.JeuCode.GDNoirObjects3[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 360, null));
}
}{for(var i = 0, len = gdjs.JeuCode.GDNoirObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDNoirObjects3[i].addPolarForce(gdjs.JeuCode.GDNoirObjects3[i].getVariables().getFromIndex(0).getAsNumber(), 100, 1);
}
}{for(var i = 0, len = gdjs.JeuCode.GDVertObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDVertObjects3[i].getBehavior("Opacity").setOpacity(128);
}
for(var i = 0, len = gdjs.JeuCode.GDMarronObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDMarronObjects3[i].getBehavior("Opacity").setOpacity(128);
}
for(var i = 0, len = gdjs.JeuCode.GDJauneObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDJauneObjects3[i].getBehavior("Opacity").setOpacity(128);
}
for(var i = 0, len = gdjs.JeuCode.GDNoirObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDNoirObjects3[i].getBehavior("Opacity").setOpacity(128);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(3).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDNoirObjects3.length === 0 ) ? 0 :gdjs.JeuCode.GDNoirObjects3[0].getPointX("")));
}{runtimeScene.getGame().getVariables().getFromIndex(4).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDNoirObjects3.length === 0 ) ? 0 :gdjs.JeuCode.GDNoirObjects3[0].getPointY("")));
}{runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(((gdjs.JeuCode.GDNoirObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JeuCode.GDNoirObjects3[0].getVariables()).getFromIndex(0).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() - 1);
}}
}

}


};gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects4Objects = Hashtable.newFrom({"Vert": gdjs.JeuCode.GDVertObjects4});
gdjs.JeuCode.eventsList18 = function(runtimeScene) {

};gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDJauneObjects3Objects = Hashtable.newFrom({"Jaune": gdjs.JeuCode.GDJauneObjects3});
gdjs.JeuCode.eventsList19 = function(runtimeScene) {

};gdjs.JeuCode.eventsList20 = function(runtimeScene) {

{


const repeatCount4 = 15 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 5, null);
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {
gdjs.JeuCode.GDVertObjects4.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects4Objects, 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1856, null), 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1016, null), "");
}{for(var i = 0, len = gdjs.JeuCode.GDVertObjects4.length ;i < len;++i) {
    gdjs.JeuCode.GDVertObjects4[i].returnVariable(gdjs.JeuCode.GDVertObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 360, null));
}
}{for(var i = 0, len = gdjs.JeuCode.GDVertObjects4.length ;i < len;++i) {
    gdjs.JeuCode.GDVertObjects4[i].addPolarForce(gdjs.JeuCode.GDVertObjects4[i].getVariables().getFromIndex(0).getAsNumber(), 100, 1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(3).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDVertObjects4.length === 0 ) ? 0 :gdjs.JeuCode.GDVertObjects4[0].getPointX("")));
}{runtimeScene.getGame().getVariables().getFromIndex(4).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDVertObjects4.length === 0 ) ? 0 :gdjs.JeuCode.GDVertObjects4[0].getPointY("")));
}{runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(((gdjs.JeuCode.GDVertObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JeuCode.GDVertObjects4[0].getVariables()).getFromIndex(0).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}}
}

}


{


const repeatCount3 = 5 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 5, null);
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {
gdjs.copyArray(runtimeScene.getObjects("Marron"), gdjs.JeuCode.GDMarronObjects3);
gdjs.copyArray(runtimeScene.getObjects("Noir"), gdjs.JeuCode.GDNoirObjects3);
gdjs.copyArray(runtimeScene.getObjects("Vert"), gdjs.JeuCode.GDVertObjects3);
gdjs.JeuCode.GDJauneObjects3.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDJauneObjects3Objects, 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1856, null), 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1016, null), "");
}{for(var i = 0, len = gdjs.JeuCode.GDJauneObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDJauneObjects3[i].returnVariable(gdjs.JeuCode.GDJauneObjects3[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 360, null));
}
}{for(var i = 0, len = gdjs.JeuCode.GDJauneObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDJauneObjects3[i].addPolarForce(gdjs.JeuCode.GDJauneObjects3[i].getVariables().getFromIndex(0).getAsNumber(), 100, 1);
}
}{for(var i = 0, len = gdjs.JeuCode.GDVertObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDVertObjects3[i].getBehavior("Opacity").setOpacity(128);
}
for(var i = 0, len = gdjs.JeuCode.GDMarronObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDMarronObjects3[i].getBehavior("Opacity").setOpacity(128);
}
for(var i = 0, len = gdjs.JeuCode.GDJauneObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDJauneObjects3[i].getBehavior("Opacity").setOpacity(128);
}
for(var i = 0, len = gdjs.JeuCode.GDNoirObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDNoirObjects3[i].getBehavior("Opacity").setOpacity(128);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(2);
}{runtimeScene.getGame().getVariables().getFromIndex(3).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDJauneObjects3.length === 0 ) ? 0 :gdjs.JeuCode.GDJauneObjects3[0].getPointX("")));
}{runtimeScene.getGame().getVariables().getFromIndex(4).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDJauneObjects3.length === 0 ) ? 0 :gdjs.JeuCode.GDJauneObjects3[0].getPointY("")));
}{runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(((gdjs.JeuCode.GDJauneObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JeuCode.GDJauneObjects3[0].getVariables()).getFromIndex(0).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() - 1);
}}
}

}


};gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects4Objects = Hashtable.newFrom({"Vert": gdjs.JeuCode.GDVertObjects4});
gdjs.JeuCode.eventsList21 = function(runtimeScene) {

};gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMarronObjects4Objects = Hashtable.newFrom({"Marron": gdjs.JeuCode.GDMarronObjects4});
gdjs.JeuCode.eventsList22 = function(runtimeScene) {

};gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDNoirObjects3Objects = Hashtable.newFrom({"Noir": gdjs.JeuCode.GDNoirObjects3});
gdjs.JeuCode.eventsList23 = function(runtimeScene) {

};gdjs.JeuCode.eventsList24 = function(runtimeScene) {

{


const repeatCount4 = 14 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 4, null);
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {
gdjs.JeuCode.GDVertObjects4.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects4Objects, 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1856, null), 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1016, null), "");
}{for(var i = 0, len = gdjs.JeuCode.GDVertObjects4.length ;i < len;++i) {
    gdjs.JeuCode.GDVertObjects4[i].returnVariable(gdjs.JeuCode.GDVertObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 360, null));
}
}{for(var i = 0, len = gdjs.JeuCode.GDVertObjects4.length ;i < len;++i) {
    gdjs.JeuCode.GDVertObjects4[i].addPolarForce(gdjs.JeuCode.GDVertObjects4[i].getVariables().getFromIndex(0).getAsNumber(), 100, 1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(3).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDVertObjects4.length === 0 ) ? 0 :gdjs.JeuCode.GDVertObjects4[0].getPointX("")));
}{runtimeScene.getGame().getVariables().getFromIndex(4).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDVertObjects4.length === 0 ) ? 0 :gdjs.JeuCode.GDVertObjects4[0].getPointY("")));
}{runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(((gdjs.JeuCode.GDVertObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JeuCode.GDVertObjects4[0].getVariables()).getFromIndex(0).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}}
}

}


{


const repeatCount4 = 3 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 3, null);
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {
gdjs.JeuCode.GDMarronObjects4.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMarronObjects4Objects, 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1856, null), 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1016, null), "");
}{for(var i = 0, len = gdjs.JeuCode.GDMarronObjects4.length ;i < len;++i) {
    gdjs.JeuCode.GDMarronObjects4[i].returnVariable(gdjs.JeuCode.GDMarronObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 360, null));
}
}{for(var i = 0, len = gdjs.JeuCode.GDMarronObjects4.length ;i < len;++i) {
    gdjs.JeuCode.GDMarronObjects4[i].addPolarForce(gdjs.JeuCode.GDMarronObjects4[i].getVariables().getFromIndex(0).getAsNumber(), 100, 1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(3).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDMarronObjects4.length === 0 ) ? 0 :gdjs.JeuCode.GDMarronObjects4[0].getPointX("")));
}{runtimeScene.getGame().getVariables().getFromIndex(4).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDMarronObjects4.length === 0 ) ? 0 :gdjs.JeuCode.GDMarronObjects4[0].getPointY("")));
}{runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(((gdjs.JeuCode.GDMarronObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JeuCode.GDMarronObjects4[0].getVariables()).getFromIndex(0).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}}
}

}


{


const repeatCount3 = 3 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 3, null);
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {
gdjs.copyArray(runtimeScene.getObjects("Jaune"), gdjs.JeuCode.GDJauneObjects3);
gdjs.copyArray(runtimeScene.getObjects("Marron"), gdjs.JeuCode.GDMarronObjects3);
gdjs.copyArray(runtimeScene.getObjects("Vert"), gdjs.JeuCode.GDVertObjects3);
gdjs.JeuCode.GDNoirObjects3.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDNoirObjects3Objects, 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1856, null), 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1016, null), "");
}{for(var i = 0, len = gdjs.JeuCode.GDNoirObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDNoirObjects3[i].returnVariable(gdjs.JeuCode.GDNoirObjects3[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 360, null));
}
}{for(var i = 0, len = gdjs.JeuCode.GDNoirObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDNoirObjects3[i].addPolarForce(gdjs.JeuCode.GDNoirObjects3[i].getVariables().getFromIndex(0).getAsNumber(), 100, 1);
}
}{for(var i = 0, len = gdjs.JeuCode.GDVertObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDVertObjects3[i].getBehavior("Opacity").setOpacity(128);
}
for(var i = 0, len = gdjs.JeuCode.GDMarronObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDMarronObjects3[i].getBehavior("Opacity").setOpacity(128);
}
for(var i = 0, len = gdjs.JeuCode.GDJauneObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDJauneObjects3[i].getBehavior("Opacity").setOpacity(128);
}
for(var i = 0, len = gdjs.JeuCode.GDNoirObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDNoirObjects3[i].getBehavior("Opacity").setOpacity(128);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(3).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDNoirObjects3.length === 0 ) ? 0 :gdjs.JeuCode.GDNoirObjects3[0].getPointX("")));
}{runtimeScene.getGame().getVariables().getFromIndex(4).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDNoirObjects3.length === 0 ) ? 0 :gdjs.JeuCode.GDNoirObjects3[0].getPointY("")));
}{runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(((gdjs.JeuCode.GDNoirObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JeuCode.GDNoirObjects3[0].getVariables()).getFromIndex(0).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() - 1);
}}
}

}


};gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects4Objects = Hashtable.newFrom({"Vert": gdjs.JeuCode.GDVertObjects4});
gdjs.JeuCode.eventsList25 = function(runtimeScene) {

};gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMarronObjects3Objects = Hashtable.newFrom({"Marron": gdjs.JeuCode.GDMarronObjects3});
gdjs.JeuCode.eventsList26 = function(runtimeScene) {

};gdjs.JeuCode.eventsList27 = function(runtimeScene) {

{


const repeatCount4 = 15 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 5, null);
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {
gdjs.JeuCode.GDVertObjects4.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects4Objects, 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1856, null), 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1016, null), "");
}{for(var i = 0, len = gdjs.JeuCode.GDVertObjects4.length ;i < len;++i) {
    gdjs.JeuCode.GDVertObjects4[i].returnVariable(gdjs.JeuCode.GDVertObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 360, null));
}
}{for(var i = 0, len = gdjs.JeuCode.GDVertObjects4.length ;i < len;++i) {
    gdjs.JeuCode.GDVertObjects4[i].addPolarForce(gdjs.JeuCode.GDVertObjects4[i].getVariables().getFromIndex(0).getAsNumber(), 100, 1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(3).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDVertObjects4.length === 0 ) ? 0 :gdjs.JeuCode.GDVertObjects4[0].getPointX("")));
}{runtimeScene.getGame().getVariables().getFromIndex(4).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDVertObjects4.length === 0 ) ? 0 :gdjs.JeuCode.GDVertObjects4[0].getPointY("")));
}{runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(((gdjs.JeuCode.GDVertObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JeuCode.GDVertObjects4[0].getVariables()).getFromIndex(0).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}}
}

}


{


const repeatCount3 = 5 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 5, null);
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {
gdjs.copyArray(runtimeScene.getObjects("Jaune"), gdjs.JeuCode.GDJauneObjects3);
gdjs.copyArray(runtimeScene.getObjects("Noir"), gdjs.JeuCode.GDNoirObjects3);
gdjs.copyArray(runtimeScene.getObjects("Vert"), gdjs.JeuCode.GDVertObjects3);
gdjs.JeuCode.GDMarronObjects3.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMarronObjects3Objects, 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1856, null), 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1016, null), "");
}{for(var i = 0, len = gdjs.JeuCode.GDMarronObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDMarronObjects3[i].returnVariable(gdjs.JeuCode.GDMarronObjects3[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 360, null));
}
}{for(var i = 0, len = gdjs.JeuCode.GDMarronObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDMarronObjects3[i].addPolarForce(gdjs.JeuCode.GDMarronObjects3[i].getVariables().getFromIndex(0).getAsNumber(), 100, 1);
}
}{for(var i = 0, len = gdjs.JeuCode.GDVertObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDVertObjects3[i].getBehavior("Opacity").setOpacity(128);
}
for(var i = 0, len = gdjs.JeuCode.GDMarronObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDMarronObjects3[i].getBehavior("Opacity").setOpacity(128);
}
for(var i = 0, len = gdjs.JeuCode.GDJauneObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDJauneObjects3[i].getBehavior("Opacity").setOpacity(128);
}
for(var i = 0, len = gdjs.JeuCode.GDNoirObjects3.length ;i < len;++i) {
    gdjs.JeuCode.GDNoirObjects3[i].getBehavior("Opacity").setOpacity(128);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(3).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDMarronObjects3.length === 0 ) ? 0 :gdjs.JeuCode.GDMarronObjects3[0].getPointX("")));
}{runtimeScene.getGame().getVariables().getFromIndex(4).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDMarronObjects3.length === 0 ) ? 0 :gdjs.JeuCode.GDMarronObjects3[0].getPointY("")));
}{runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(((gdjs.JeuCode.GDMarronObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JeuCode.GDMarronObjects3[0].getVariables()).getFromIndex(0).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() - 1);
}}
}

}


};gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects2Objects = Hashtable.newFrom({"Vert": gdjs.JeuCode.GDVertObjects2});
gdjs.JeuCode.eventsList28 = function(runtimeScene) {

};gdjs.JeuCode.eventsList29 = function(runtimeScene) {

{


const repeatCount2 = 20 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 10, null);
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Jaune"), gdjs.JeuCode.GDJauneObjects2);
gdjs.copyArray(runtimeScene.getObjects("Marron"), gdjs.JeuCode.GDMarronObjects2);
gdjs.copyArray(runtimeScene.getObjects("Noir"), gdjs.JeuCode.GDNoirObjects2);
gdjs.JeuCode.GDVertObjects2.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects2Objects, 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1856, null), 32 + gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 1016, null), "");
}{for(var i = 0, len = gdjs.JeuCode.GDVertObjects2.length ;i < len;++i) {
    gdjs.JeuCode.GDVertObjects2[i].returnVariable(gdjs.JeuCode.GDVertObjects2[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 360, null));
}
}{for(var i = 0, len = gdjs.JeuCode.GDVertObjects2.length ;i < len;++i) {
    gdjs.JeuCode.GDVertObjects2[i].addPolarForce(gdjs.JeuCode.GDVertObjects2[i].getVariables().getFromIndex(0).getAsNumber(), 100, 1);
}
}{for(var i = 0, len = gdjs.JeuCode.GDVertObjects2.length ;i < len;++i) {
    gdjs.JeuCode.GDVertObjects2[i].getBehavior("Opacity").setOpacity(128);
}
for(var i = 0, len = gdjs.JeuCode.GDMarronObjects2.length ;i < len;++i) {
    gdjs.JeuCode.GDMarronObjects2[i].getBehavior("Opacity").setOpacity(128);
}
for(var i = 0, len = gdjs.JeuCode.GDJauneObjects2.length ;i < len;++i) {
    gdjs.JeuCode.GDJauneObjects2[i].getBehavior("Opacity").setOpacity(128);
}
for(var i = 0, len = gdjs.JeuCode.GDNoirObjects2.length ;i < len;++i) {
    gdjs.JeuCode.GDNoirObjects2[i].getBehavior("Opacity").setOpacity(128);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(3).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDVertObjects2.length === 0 ) ? 0 :gdjs.JeuCode.GDVertObjects2[0].getPointX("")));
}{runtimeScene.getGame().getVariables().getFromIndex(4).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber((( gdjs.JeuCode.GDVertObjects2.length === 0 ) ? 0 :gdjs.JeuCode.GDVertObjects2[0].getPointY("")));
}{runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).setNumber(((gdjs.JeuCode.GDVertObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JeuCode.GDVertObjects2[0].getVariables()).getFromIndex(0).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() - 1);
}}
}

}


};gdjs.JeuCode.eventsList30 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 8);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10251532);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.JeuCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 7);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10270556);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.JeuCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 6);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10280540);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.JeuCode.eventsList13(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10294588);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.JeuCode.eventsList17(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10308868);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.JeuCode.eventsList20(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10273644);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.JeuCode.eventsList24(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10262460);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.JeuCode.eventsList27(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() <= 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10269588);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.JeuCode.eventsList29(runtimeScene);} //End of subevents
}

}


};gdjs.JeuCode.eventsList31 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10103348);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.JeuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10249332);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}{gdjs.evtsExt__SeededRandom__createGenerator.func(runtimeScene, "ProutSeed", gdjs.evtTools.common.toString(1900 + gdjs.evtTools.runtimeScene.getTime(runtimeScene, "year")) + gdjs.evtTools.common.toString(1 + gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mon")) + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mday") + 3), null);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtsExt__SeededRandom__Random.func(runtimeScene, "ProutSeed", 8, null));
}
{ //Subevents
gdjs.JeuCode.eventsList30(runtimeScene);} //End of subevents
}

}


};gdjs.JeuCode.mapOfEmptyGDOndeVertObjectsEmptyGDOndeMarronObjectsEmptyGDOndeBlancObjectsEmptyGDOndeJauneObjects = Hashtable.newFrom({"OndeVert": [], "OndeMarron": [], "OndeBlanc": [], "OndeJaune": []});
gdjs.JeuCode.mapOfEmptyGDVertObjectsEmptyGDMarronObjectsEmptyGDJauneObjectsEmptyGDNoirObjects = Hashtable.newFrom({"Vert": [], "Marron": [], "Jaune": [], "Noir": []});
gdjs.JeuCode.mapOfEmptyGDOndeVertObjectsEmptyGDOndeMarronObjectsEmptyGDOndeBlancObjectsEmptyGDOndeJauneObjects = Hashtable.newFrom({"OndeVert": [], "OndeMarron": [], "OndeBlanc": [], "OndeJaune": []});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDRestartObjects2Objects = Hashtable.newFrom({"Restart": gdjs.JeuCode.GDRestartObjects2});
gdjs.JeuCode.mapOfEmptyGDAideObjects = Hashtable.newFrom({"Aide": []});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects1ObjectsGDgdjs_9546JeuCode_9546GDMarronObjects1ObjectsGDgdjs_9546JeuCode_9546GDJauneObjects1ObjectsGDgdjs_9546JeuCode_9546GDNoirObjects1Objects = Hashtable.newFrom({"Vert": gdjs.JeuCode.GDVertObjects1, "Marron": gdjs.JeuCode.GDMarronObjects1, "Jaune": gdjs.JeuCode.GDJauneObjects1, "Noir": gdjs.JeuCode.GDNoirObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMurObjects1Objects = Hashtable.newFrom({"Mur": gdjs.JeuCode.GDMurObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMurObjects1Objects = Hashtable.newFrom({"Mur": gdjs.JeuCode.GDMurObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMurObjects1Objects = Hashtable.newFrom({"Mur": gdjs.JeuCode.GDMurObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMurObjects1Objects = Hashtable.newFrom({"Mur": gdjs.JeuCode.GDMurObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMurObjects1Objects = Hashtable.newFrom({"Mur": gdjs.JeuCode.GDMurObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects1Objects = Hashtable.newFrom({"Vert": gdjs.JeuCode.GDVertObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects1Objects = Hashtable.newFrom({"Vert": gdjs.JeuCode.GDVertObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects1Objects = Hashtable.newFrom({"Vert": gdjs.JeuCode.GDVertObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects1Objects = Hashtable.newFrom({"Vert": gdjs.JeuCode.GDVertObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDJauneObjects1Objects = Hashtable.newFrom({"Jaune": gdjs.JeuCode.GDJauneObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDJauneObjects1Objects = Hashtable.newFrom({"Jaune": gdjs.JeuCode.GDJauneObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects1Objects = Hashtable.newFrom({"Vert": gdjs.JeuCode.GDVertObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMarronObjects1Objects = Hashtable.newFrom({"Marron": gdjs.JeuCode.GDMarronObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMarronObjects1Objects = Hashtable.newFrom({"Marron": gdjs.JeuCode.GDMarronObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects1Objects = Hashtable.newFrom({"Vert": gdjs.JeuCode.GDVertObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDNoirObjects1Objects = Hashtable.newFrom({"Noir": gdjs.JeuCode.GDNoirObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDNoirObjects1Objects = Hashtable.newFrom({"Noir": gdjs.JeuCode.GDNoirObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDJauneObjects1Objects = Hashtable.newFrom({"Jaune": gdjs.JeuCode.GDJauneObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects1Objects = Hashtable.newFrom({"Vert": gdjs.JeuCode.GDVertObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects1Objects = Hashtable.newFrom({"Vert": gdjs.JeuCode.GDVertObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDJauneObjects1Objects = Hashtable.newFrom({"Jaune": gdjs.JeuCode.GDJauneObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDJauneObjects1Objects = Hashtable.newFrom({"Jaune": gdjs.JeuCode.GDJauneObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDJauneObjects1Objects = Hashtable.newFrom({"Jaune": gdjs.JeuCode.GDJauneObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDJauneObjects1Objects = Hashtable.newFrom({"Jaune": gdjs.JeuCode.GDJauneObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMarronObjects1Objects = Hashtable.newFrom({"Marron": gdjs.JeuCode.GDMarronObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMarronObjects1Objects = Hashtable.newFrom({"Marron": gdjs.JeuCode.GDMarronObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDJauneObjects1Objects = Hashtable.newFrom({"Jaune": gdjs.JeuCode.GDJauneObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDNoirObjects1Objects = Hashtable.newFrom({"Noir": gdjs.JeuCode.GDNoirObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDNoirObjects1Objects = Hashtable.newFrom({"Noir": gdjs.JeuCode.GDNoirObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMarronObjects1Objects = Hashtable.newFrom({"Marron": gdjs.JeuCode.GDMarronObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects1Objects = Hashtable.newFrom({"Vert": gdjs.JeuCode.GDVertObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects1Objects = Hashtable.newFrom({"Vert": gdjs.JeuCode.GDVertObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMarronObjects1Objects = Hashtable.newFrom({"Marron": gdjs.JeuCode.GDMarronObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDJauneObjects1Objects = Hashtable.newFrom({"Jaune": gdjs.JeuCode.GDJauneObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDJauneObjects1Objects = Hashtable.newFrom({"Jaune": gdjs.JeuCode.GDJauneObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMarronObjects1Objects = Hashtable.newFrom({"Marron": gdjs.JeuCode.GDMarronObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMarronObjects1Objects = Hashtable.newFrom({"Marron": gdjs.JeuCode.GDMarronObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMarronObjects1Objects = Hashtable.newFrom({"Marron": gdjs.JeuCode.GDMarronObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMarronObjects1Objects = Hashtable.newFrom({"Marron": gdjs.JeuCode.GDMarronObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDNoirObjects1Objects = Hashtable.newFrom({"Noir": gdjs.JeuCode.GDNoirObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDNoirObjects1Objects = Hashtable.newFrom({"Noir": gdjs.JeuCode.GDNoirObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDNoirObjects1Objects = Hashtable.newFrom({"Noir": gdjs.JeuCode.GDNoirObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects1Objects = Hashtable.newFrom({"Vert": gdjs.JeuCode.GDVertObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects1Objects = Hashtable.newFrom({"Vert": gdjs.JeuCode.GDVertObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDNoirObjects1Objects = Hashtable.newFrom({"Noir": gdjs.JeuCode.GDNoirObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDJauneObjects1Objects = Hashtable.newFrom({"Jaune": gdjs.JeuCode.GDJauneObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDJauneObjects1Objects = Hashtable.newFrom({"Jaune": gdjs.JeuCode.GDJauneObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDNoirObjects1Objects = Hashtable.newFrom({"Noir": gdjs.JeuCode.GDNoirObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMarronObjects1Objects = Hashtable.newFrom({"Marron": gdjs.JeuCode.GDMarronObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMarronObjects1Objects = Hashtable.newFrom({"Marron": gdjs.JeuCode.GDMarronObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDNoirObjects1Objects = Hashtable.newFrom({"Noir": gdjs.JeuCode.GDNoirObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDNoirObjects1Objects = Hashtable.newFrom({"Noir": gdjs.JeuCode.GDNoirObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDNoirObjects1Objects = Hashtable.newFrom({"Noir": gdjs.JeuCode.GDNoirObjects1});
gdjs.JeuCode.mapOfEmptyGDOndeVertObjectsEmptyGDOndeMarronObjectsEmptyGDOndeBlancObjectsEmptyGDOndeJauneObjects = Hashtable.newFrom({"OndeVert": [], "OndeMarron": [], "OndeBlanc": [], "OndeJaune": []});
gdjs.JeuCode.mapOfEmptyGDVertObjectsEmptyGDMarronObjectsEmptyGDJauneObjectsEmptyGDNoirObjects = Hashtable.newFrom({"Vert": [], "Marron": [], "Jaune": [], "Noir": []});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDOndeBlancObjects1Objects = Hashtable.newFrom({"OndeBlanc": gdjs.JeuCode.GDOndeBlancObjects1});
gdjs.JeuCode.eventsList32 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.JeuCode.GDCoupsObjects1, gdjs.JeuCode.GDCoupsObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JeuCode.GDCoupsObjects2.length;i<l;++i) {
    if ( gdjs.JeuCode.GDCoupsObjects2[i].getVariableNumber(gdjs.JeuCode.GDCoupsObjects2[i].getVariables().getFromIndex(1)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.JeuCode.GDCoupsObjects2[k] = gdjs.JeuCode.GDCoupsObjects2[i];
        ++k;
    }
}
gdjs.JeuCode.GDCoupsObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JeuCode.GDCoupsObjects2 */
{for(var i = 0, len = gdjs.JeuCode.GDCoupsObjects2.length ;i < len;++i) {
    gdjs.JeuCode.GDCoupsObjects2[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.JeuCode.GDCoupsObjects2[i].getVariables().getFromIndex(1).getAsNumber()) + " clic");
}
}}

}


{

/* Reuse gdjs.JeuCode.GDCoupsObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JeuCode.GDCoupsObjects1.length;i<l;++i) {
    if ( gdjs.JeuCode.GDCoupsObjects1[i].getVariableNumber(gdjs.JeuCode.GDCoupsObjects1[i].getVariables().getFromIndex(1)) >= 2 ) {
        isConditionTrue_0 = true;
        gdjs.JeuCode.GDCoupsObjects1[k] = gdjs.JeuCode.GDCoupsObjects1[i];
        ++k;
    }
}
gdjs.JeuCode.GDCoupsObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JeuCode.GDCoupsObjects1 */
{for(var i = 0, len = gdjs.JeuCode.GDCoupsObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDCoupsObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.JeuCode.GDCoupsObjects1[i].getVariables().getFromIndex(1).getAsNumber()) + " clics");
}
}}

}


};gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects1Objects = Hashtable.newFrom({"Vert": gdjs.JeuCode.GDVertObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDOndeVertObjects1ObjectsGDgdjs_9546JeuCode_9546GDOndeMarronObjects1ObjectsGDgdjs_9546JeuCode_9546GDOndeBlancObjects1ObjectsGDgdjs_9546JeuCode_9546GDOndeJauneObjects1Objects = Hashtable.newFrom({"OndeVert": gdjs.JeuCode.GDOndeVertObjects1, "OndeMarron": gdjs.JeuCode.GDOndeMarronObjects1, "OndeBlanc": gdjs.JeuCode.GDOndeBlancObjects1, "OndeJaune": gdjs.JeuCode.GDOndeJauneObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDOndeVertObjects1Objects = Hashtable.newFrom({"OndeVert": gdjs.JeuCode.GDOndeVertObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMarronObjects1Objects = Hashtable.newFrom({"Marron": gdjs.JeuCode.GDMarronObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDOndeVertObjects1ObjectsGDgdjs_9546JeuCode_9546GDOndeMarronObjects1ObjectsGDgdjs_9546JeuCode_9546GDOndeBlancObjects1ObjectsGDgdjs_9546JeuCode_9546GDOndeJauneObjects1Objects = Hashtable.newFrom({"OndeVert": gdjs.JeuCode.GDOndeVertObjects1, "OndeMarron": gdjs.JeuCode.GDOndeMarronObjects1, "OndeBlanc": gdjs.JeuCode.GDOndeBlancObjects1, "OndeJaune": gdjs.JeuCode.GDOndeJauneObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDOndeMarronObjects1Objects = Hashtable.newFrom({"OndeMarron": gdjs.JeuCode.GDOndeMarronObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDJauneObjects1Objects = Hashtable.newFrom({"Jaune": gdjs.JeuCode.GDJauneObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDOndeVertObjects1ObjectsGDgdjs_9546JeuCode_9546GDOndeMarronObjects1ObjectsGDgdjs_9546JeuCode_9546GDOndeBlancObjects1ObjectsGDgdjs_9546JeuCode_9546GDOndeJauneObjects1Objects = Hashtable.newFrom({"OndeVert": gdjs.JeuCode.GDOndeVertObjects1, "OndeMarron": gdjs.JeuCode.GDOndeMarronObjects1, "OndeBlanc": gdjs.JeuCode.GDOndeBlancObjects1, "OndeJaune": gdjs.JeuCode.GDOndeJauneObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDOndeJauneObjects1Objects = Hashtable.newFrom({"OndeJaune": gdjs.JeuCode.GDOndeJauneObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDNoirObjects1Objects = Hashtable.newFrom({"Noir": gdjs.JeuCode.GDNoirObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDOndeVertObjects1ObjectsGDgdjs_9546JeuCode_9546GDOndeMarronObjects1ObjectsGDgdjs_9546JeuCode_9546GDOndeBlancObjects1ObjectsGDgdjs_9546JeuCode_9546GDOndeJauneObjects1Objects = Hashtable.newFrom({"OndeVert": gdjs.JeuCode.GDOndeVertObjects1, "OndeMarron": gdjs.JeuCode.GDOndeMarronObjects1, "OndeBlanc": gdjs.JeuCode.GDOndeBlancObjects1, "OndeJaune": gdjs.JeuCode.GDOndeJauneObjects1});
gdjs.JeuCode.mapOfEmptyGDVertObjectsEmptyGDMarronObjectsEmptyGDJauneObjectsEmptyGDNoirObjects = Hashtable.newFrom({"Vert": [], "Marron": [], "Jaune": [], "Noir": []});
gdjs.JeuCode.eventsList33 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (1 + gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mon") < 10);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.JeuCode.GDCoupsObjects1, gdjs.JeuCode.GDCoupsObjects2);

gdjs.copyArray(gdjs.JeuCode.GDScoreObjects1, gdjs.JeuCode.GDScoreObjects2);

{gdjs.evtsExt__Clipboard__WriteText.func(runtimeScene, "Prout du " + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mday")) + "/0" + gdjs.evtTools.common.toString(1 + gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mon")) + "/" + gdjs.evtTools.common.toString(1900 + gdjs.evtTools.runtimeScene.getTime(runtimeScene, "year")) + gdjs.evtTools.string.newLine() + runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + gdjs.evtTools.string.newLine() + "🖱️ " + gdjs.evtTools.common.toString(((gdjs.JeuCode.GDCoupsObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JeuCode.GDCoupsObjects2[0].getVariables()).getFromIndex(1).getAsNumber()) + " clics" + gdjs.evtTools.string.newLine() + "⌛ " + gdjs.evtTools.common.toString(Math.ceil(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Chrono") - 1)) + " secondes" + gdjs.evtTools.string.newLine() + "https://tasses.cafe/prout/", null);
}{for(var i = 0, len = gdjs.JeuCode.GDScoreObjects2.length ;i < len;++i) {
    gdjs.JeuCode.GDScoreObjects2[i].getBehavior("Text").setText("Prout du " + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mday")) + "/0" + gdjs.evtTools.common.toString(1 + gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mon")) + "/" + gdjs.evtTools.common.toString(1900 + gdjs.evtTools.runtimeScene.getTime(runtimeScene, "year")) + gdjs.evtTools.string.newLine() + runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + gdjs.evtTools.string.newLine() + "🖱️ " + gdjs.evtTools.common.toString(((gdjs.JeuCode.GDCoupsObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JeuCode.GDCoupsObjects2[0].getVariables()).getFromIndex(1).getAsNumber()) + " clics" + gdjs.evtTools.string.newLine() + "⌛ " + gdjs.evtTools.common.toString(Math.ceil(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Chrono") - 1)) + " secondes" + gdjs.evtTools.string.newLine() + "https://tasses.cafe/prout/");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (1 + gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mon") >= 10);
}
if (isConditionTrue_0) {
/* Reuse gdjs.JeuCode.GDCoupsObjects1 */
/* Reuse gdjs.JeuCode.GDScoreObjects1 */
{gdjs.evtsExt__Clipboard__WriteText.func(runtimeScene, "Prout du " + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mday")) + "/0" + gdjs.evtTools.common.toString(1 + gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mon")) + "/" + gdjs.evtTools.common.toString(1900 + gdjs.evtTools.runtimeScene.getTime(runtimeScene, "year")) + gdjs.evtTools.string.newLine() + runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + gdjs.evtTools.string.newLine() + "🖱️ " + gdjs.evtTools.common.toString(((gdjs.JeuCode.GDCoupsObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JeuCode.GDCoupsObjects1[0].getVariables()).getFromIndex(1).getAsNumber()) + " clics" + gdjs.evtTools.string.newLine() + "⌛ " + gdjs.evtTools.common.toString(Math.ceil(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Chrono") - 1)) + " secondes" + gdjs.evtTools.string.newLine() + "https://tasses.cafe/prout/", null);
}{for(var i = 0, len = gdjs.JeuCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDScoreObjects1[i].getBehavior("Text").setText("Prout du " + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mday")) + "/" + gdjs.evtTools.common.toString(1 + gdjs.evtTools.runtimeScene.getTime(runtimeScene, "mon")) + "/" + gdjs.evtTools.common.toString(1900 + gdjs.evtTools.runtimeScene.getTime(runtimeScene, "year")) + gdjs.evtTools.string.newLine() + runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + gdjs.evtTools.string.newLine() + "🖱️ " + gdjs.evtTools.common.toString(((gdjs.JeuCode.GDCoupsObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.JeuCode.GDCoupsObjects1[0].getVariables()).getFromIndex(1).getAsNumber()) + " clics" + gdjs.evtTools.string.newLine() + "⌛ " + gdjs.evtTools.common.toString(Math.ceil(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Chrono") - 1)) + " secondes" + gdjs.evtTools.string.newLine() + "https://tasses.cafe/prout/");
}
}}

}


};gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDRestartObjects1Objects = Hashtable.newFrom({"Restart": gdjs.JeuCode.GDRestartObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDRestartObjects1Objects = Hashtable.newFrom({"Restart": gdjs.JeuCode.GDRestartObjects1});
gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDRestartObjects1Objects = Hashtable.newFrom({"Restart": gdjs.JeuCode.GDRestartObjects1});
gdjs.JeuCode.eventsList34 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Chrono"), gdjs.JeuCode.GDChronoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Coups"), gdjs.JeuCode.GDCoupsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fin"), gdjs.JeuCode.GDFinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.JeuCode.GDRestartObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.JeuCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.JeuCode.GDCoupsObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDCoupsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.JeuCode.GDChronoObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDChronoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.JeuCode.GDRestartObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDRestartObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.JeuCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDScoreObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.JeuCode.GDFinObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDFinObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setString("");
}
{ //Subevents
gdjs.JeuCode.eventsList31(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.JeuCode.mapOfEmptyGDOndeVertObjectsEmptyGDOndeMarronObjectsEmptyGDOndeBlancObjectsEmptyGDOndeJauneObjects) <= 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cercle"), gdjs.JeuCode.GDCercleObjects1);
{for(var i = 0, len = gdjs.JeuCode.GDCercleObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDCercleObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.JeuCode.GDCercleObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDCercleObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.JeuCode.GDCercleObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDCercleObjects1[i].rotate(10, runtimeScene);
}
}}

}


{

gdjs.JeuCode.GDRestartObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.JeuCode.GDRestartObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.JeuCode.mapOfEmptyGDVertObjectsEmptyGDMarronObjectsEmptyGDJauneObjectsEmptyGDNoirObjects) <= 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.JeuCode.mapOfEmptyGDOndeVertObjectsEmptyGDOndeMarronObjectsEmptyGDOndeBlancObjectsEmptyGDOndeJauneObjects) > 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimeScale(runtimeScene) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.JeuCode.GDRestartObjects2);
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDRestartObjects2Objects, runtimeScene, false, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.JeuCode.GDRestartObjects2.length; j < jLen ; ++j) {
        if ( gdjs.JeuCode.GDRestartObjects1_1final.indexOf(gdjs.JeuCode.GDRestartObjects2[j]) === -1 )
            gdjs.JeuCode.GDRestartObjects1_1final.push(gdjs.JeuCode.GDRestartObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.JeuCode.GDRestartObjects1_1final, gdjs.JeuCode.GDRestartObjects1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cercle"), gdjs.JeuCode.GDCercleObjects1);
{for(var i = 0, len = gdjs.JeuCode.GDCercleObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDCercleObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.JeuCode.mapOfEmptyGDAideObjects) > 0;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Aide"), gdjs.JeuCode.GDAideObjects1);
gdjs.copyArray(runtimeScene.getObjects("Chrono"), gdjs.JeuCode.GDChronoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Coups"), gdjs.JeuCode.GDCoupsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Jaune"), gdjs.JeuCode.GDJauneObjects1);
gdjs.copyArray(runtimeScene.getObjects("Marron"), gdjs.JeuCode.GDMarronObjects1);
gdjs.copyArray(runtimeScene.getObjects("Noir"), gdjs.JeuCode.GDNoirObjects1);
gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.JeuCode.GDRestartObjects1);
gdjs.copyArray(runtimeScene.getObjects("Vert"), gdjs.JeuCode.GDVertObjects1);
{for(var i = 0, len = gdjs.JeuCode.GDAideObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDAideObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}{for(var i = 0, len = gdjs.JeuCode.GDCoupsObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDCoupsObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.JeuCode.GDChronoObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDChronoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.JeuCode.GDRestartObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDRestartObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.JeuCode.GDVertObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDVertObjects1[i].getBehavior("Opacity").setOpacity(255);
}
for(var i = 0, len = gdjs.JeuCode.GDMarronObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDMarronObjects1[i].getBehavior("Opacity").setOpacity(255);
}
for(var i = 0, len = gdjs.JeuCode.GDJauneObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDJauneObjects1[i].getBehavior("Opacity").setOpacity(255);
}
for(var i = 0, len = gdjs.JeuCode.GDNoirObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDNoirObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Chrono");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Chrono") >= 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Chrono"), gdjs.JeuCode.GDChronoObjects1);
{for(var i = 0, len = gdjs.JeuCode.GDChronoObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDChronoObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.ceil(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Chrono") - 1)) + " secondes");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Chrono") < 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Chrono"), gdjs.JeuCode.GDChronoObjects1);
{for(var i = 0, len = gdjs.JeuCode.GDChronoObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDChronoObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.ceil(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Chrono") - 1)) + " seconde");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Jaune"), gdjs.JeuCode.GDJauneObjects1);
gdjs.copyArray(runtimeScene.getObjects("Marron"), gdjs.JeuCode.GDMarronObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mur"), gdjs.JeuCode.GDMurObjects1);
gdjs.copyArray(runtimeScene.getObjects("Noir"), gdjs.JeuCode.GDNoirObjects1);
gdjs.copyArray(runtimeScene.getObjects("Vert"), gdjs.JeuCode.GDVertObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects1ObjectsGDgdjs_9546JeuCode_9546GDMarronObjects1ObjectsGDgdjs_9546JeuCode_9546GDJauneObjects1ObjectsGDgdjs_9546JeuCode_9546GDNoirObjects1Objects, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMurObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.JeuCode.GDJauneObjects1 */
/* Reuse gdjs.JeuCode.GDMarronObjects1 */
/* Reuse gdjs.JeuCode.GDMurObjects1 */
/* Reuse gdjs.JeuCode.GDNoirObjects1 */
/* Reuse gdjs.JeuCode.GDVertObjects1 */
{for(var i = 0, len = gdjs.JeuCode.GDVertObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDVertObjects1[i].getBehavior("Bounce").BounceOff(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMurObjects1Objects, null);
}
for(var i = 0, len = gdjs.JeuCode.GDMarronObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDMarronObjects1[i].getBehavior("Bounce").BounceOff(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMurObjects1Objects, null);
}
for(var i = 0, len = gdjs.JeuCode.GDJauneObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDJauneObjects1[i].getBehavior("Bounce").BounceOff(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMurObjects1Objects, null);
}
for(var i = 0, len = gdjs.JeuCode.GDNoirObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDNoirObjects1[i].getBehavior("Bounce").BounceOff(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMurObjects1Objects, null);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Vert"), gdjs.JeuCode.GDVertObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects1Objects, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.JeuCode.GDVertObjects1 */
{for(var i = 0, len = gdjs.JeuCode.GDVertObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDVertObjects1[i].getBehavior("Bounce").BounceOff(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects1Objects, null);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Jaune"), gdjs.JeuCode.GDJauneObjects1);
gdjs.copyArray(runtimeScene.getObjects("Vert"), gdjs.JeuCode.GDVertObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects1Objects, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDJauneObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.JeuCode.GDJauneObjects1 */
/* Reuse gdjs.JeuCode.GDVertObjects1 */
{for(var i = 0, len = gdjs.JeuCode.GDVertObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDVertObjects1[i].getBehavior("Bounce").BounceOff(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDJauneObjects1Objects, null);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Marron"), gdjs.JeuCode.GDMarronObjects1);
gdjs.copyArray(runtimeScene.getObjects("Vert"), gdjs.JeuCode.GDVertObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects1Objects, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMarronObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.JeuCode.GDMarronObjects1 */
/* Reuse gdjs.JeuCode.GDVertObjects1 */
{for(var i = 0, len = gdjs.JeuCode.GDVertObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDVertObjects1[i].getBehavior("Bounce").BounceOff(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMarronObjects1Objects, null);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Noir"), gdjs.JeuCode.GDNoirObjects1);
gdjs.copyArray(runtimeScene.getObjects("Vert"), gdjs.JeuCode.GDVertObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects1Objects, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDNoirObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.JeuCode.GDNoirObjects1 */
/* Reuse gdjs.JeuCode.GDVertObjects1 */
{for(var i = 0, len = gdjs.JeuCode.GDVertObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDVertObjects1[i].getBehavior("Bounce").BounceOff(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDNoirObjects1Objects, null);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Jaune"), gdjs.JeuCode.GDJauneObjects1);
gdjs.copyArray(runtimeScene.getObjects("Vert"), gdjs.JeuCode.GDVertObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDJauneObjects1Objects, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.JeuCode.GDJauneObjects1 */
/* Reuse gdjs.JeuCode.GDVertObjects1 */
{for(var i = 0, len = gdjs.JeuCode.GDJauneObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDJauneObjects1[i].getBehavior("Bounce").BounceOff(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects1Objects, null);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Jaune"), gdjs.JeuCode.GDJauneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDJauneObjects1Objects, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDJauneObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.JeuCode.GDJauneObjects1 */
{for(var i = 0, len = gdjs.JeuCode.GDJauneObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDJauneObjects1[i].getBehavior("Bounce").BounceOff(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDJauneObjects1Objects, null);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Jaune"), gdjs.JeuCode.GDJauneObjects1);
gdjs.copyArray(runtimeScene.getObjects("Marron"), gdjs.JeuCode.GDMarronObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDJauneObjects1Objects, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMarronObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.JeuCode.GDJauneObjects1 */
/* Reuse gdjs.JeuCode.GDMarronObjects1 */
{for(var i = 0, len = gdjs.JeuCode.GDJauneObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDJauneObjects1[i].getBehavior("Bounce").BounceOff(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMarronObjects1Objects, null);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Jaune"), gdjs.JeuCode.GDJauneObjects1);
gdjs.copyArray(runtimeScene.getObjects("Noir"), gdjs.JeuCode.GDNoirObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDJauneObjects1Objects, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDNoirObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.JeuCode.GDJauneObjects1 */
/* Reuse gdjs.JeuCode.GDNoirObjects1 */
{for(var i = 0, len = gdjs.JeuCode.GDJauneObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDJauneObjects1[i].getBehavior("Bounce").BounceOff(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDNoirObjects1Objects, null);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Marron"), gdjs.JeuCode.GDMarronObjects1);
gdjs.copyArray(runtimeScene.getObjects("Vert"), gdjs.JeuCode.GDVertObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMarronObjects1Objects, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.JeuCode.GDMarronObjects1 */
/* Reuse gdjs.JeuCode.GDVertObjects1 */
{for(var i = 0, len = gdjs.JeuCode.GDMarronObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDMarronObjects1[i].getBehavior("Bounce").BounceOff(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects1Objects, null);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Jaune"), gdjs.JeuCode.GDJauneObjects1);
gdjs.copyArray(runtimeScene.getObjects("Marron"), gdjs.JeuCode.GDMarronObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMarronObjects1Objects, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDJauneObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.JeuCode.GDJauneObjects1 */
/* Reuse gdjs.JeuCode.GDMarronObjects1 */
{for(var i = 0, len = gdjs.JeuCode.GDMarronObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDMarronObjects1[i].getBehavior("Bounce").BounceOff(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDJauneObjects1Objects, null);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Marron"), gdjs.JeuCode.GDMarronObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMarronObjects1Objects, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMarronObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.JeuCode.GDMarronObjects1 */
{for(var i = 0, len = gdjs.JeuCode.GDMarronObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDMarronObjects1[i].getBehavior("Bounce").BounceOff(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMarronObjects1Objects, null);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Marron"), gdjs.JeuCode.GDMarronObjects1);
gdjs.copyArray(runtimeScene.getObjects("Noir"), gdjs.JeuCode.GDNoirObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMarronObjects1Objects, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDNoirObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.JeuCode.GDMarronObjects1 */
/* Reuse gdjs.JeuCode.GDNoirObjects1 */
{for(var i = 0, len = gdjs.JeuCode.GDMarronObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDMarronObjects1[i].getBehavior("Bounce").BounceOff(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDNoirObjects1Objects, null);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Noir"), gdjs.JeuCode.GDNoirObjects1);
gdjs.copyArray(runtimeScene.getObjects("Vert"), gdjs.JeuCode.GDVertObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDNoirObjects1Objects, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.JeuCode.GDNoirObjects1 */
/* Reuse gdjs.JeuCode.GDVertObjects1 */
{for(var i = 0, len = gdjs.JeuCode.GDNoirObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDNoirObjects1[i].getBehavior("Bounce").BounceOff(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects1Objects, null);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Jaune"), gdjs.JeuCode.GDJauneObjects1);
gdjs.copyArray(runtimeScene.getObjects("Noir"), gdjs.JeuCode.GDNoirObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDNoirObjects1Objects, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDJauneObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.JeuCode.GDJauneObjects1 */
/* Reuse gdjs.JeuCode.GDNoirObjects1 */
{for(var i = 0, len = gdjs.JeuCode.GDNoirObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDNoirObjects1[i].getBehavior("Bounce").BounceOff(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDJauneObjects1Objects, null);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Marron"), gdjs.JeuCode.GDMarronObjects1);
gdjs.copyArray(runtimeScene.getObjects("Noir"), gdjs.JeuCode.GDNoirObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDNoirObjects1Objects, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMarronObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.JeuCode.GDMarronObjects1 */
/* Reuse gdjs.JeuCode.GDNoirObjects1 */
{for(var i = 0, len = gdjs.JeuCode.GDNoirObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDNoirObjects1[i].getBehavior("Bounce").BounceOff(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMarronObjects1Objects, null);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Noir"), gdjs.JeuCode.GDNoirObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDNoirObjects1Objects, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDNoirObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.JeuCode.GDNoirObjects1 */
{for(var i = 0, len = gdjs.JeuCode.GDNoirObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDNoirObjects1[i].getBehavior("Bounce").BounceOff(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDNoirObjects1Objects, null);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.JeuCode.mapOfEmptyGDOndeVertObjectsEmptyGDOndeMarronObjectsEmptyGDOndeBlancObjectsEmptyGDOndeJauneObjects) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.JeuCode.mapOfEmptyGDVertObjectsEmptyGDMarronObjectsEmptyGDJauneObjectsEmptyGDNoirObjects) > 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimeScale(runtimeScene) != 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10336932);
}
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Coups"), gdjs.JeuCode.GDCoupsObjects1);
gdjs.JeuCode.GDOndeBlancObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDOndeBlancObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "Ondes");
}{for(var i = 0, len = gdjs.JeuCode.GDOndeBlancObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDOndeBlancObjects1[i].getBehavior("Scale").setScale(0.01);
}
}{for(var i = 0, len = gdjs.JeuCode.GDOndeBlancObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDOndeBlancObjects1[i].getBehavior("Tween").addObjectScaleTween3("BlancEchelle", 1, "easeOutQuad", 2, true, true);
}
}{for(var i = 0, len = gdjs.JeuCode.GDOndeBlancObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDOndeBlancObjects1[i].getBehavior("Tween").addObjectOpacityTween2("BlancOpacite", 0, "linear", 2, true);
}
}{for(var i = 0, len = gdjs.JeuCode.GDCoupsObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDCoupsObjects1[i].returnVariable(gdjs.JeuCode.GDCoupsObjects1[i].getVariables().getFromIndex(1)).add(1);
}
}
{ //Subevents
gdjs.JeuCode.eventsList32(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("OndeBlanc"), gdjs.JeuCode.GDOndeBlancObjects1);
gdjs.copyArray(runtimeScene.getObjects("OndeJaune"), gdjs.JeuCode.GDOndeJauneObjects1);
gdjs.copyArray(runtimeScene.getObjects("OndeMarron"), gdjs.JeuCode.GDOndeMarronObjects1);
gdjs.copyArray(runtimeScene.getObjects("OndeVert"), gdjs.JeuCode.GDOndeVertObjects1);
gdjs.copyArray(runtimeScene.getObjects("Vert"), gdjs.JeuCode.GDVertObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDVertObjects1Objects, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDOndeVertObjects1ObjectsGDgdjs_9546JeuCode_9546GDOndeMarronObjects1ObjectsGDgdjs_9546JeuCode_9546GDOndeBlancObjects1ObjectsGDgdjs_9546JeuCode_9546GDOndeJauneObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10341508);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JeuCode.GDVertObjects1 */
/* Reuse gdjs.JeuCode.GDOndeVertObjects1 */
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDOndeVertObjects1Objects, (( gdjs.JeuCode.GDVertObjects1.length === 0 ) ? 0 :gdjs.JeuCode.GDVertObjects1[0].getPointX("")), (( gdjs.JeuCode.GDVertObjects1.length === 0 ) ? 0 :gdjs.JeuCode.GDVertObjects1[0].getPointY("")), "Ondes");
}{for(var i = 0, len = gdjs.JeuCode.GDVertObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDVertObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).concatenateString("🟢");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OndeVert"), gdjs.JeuCode.GDOndeVertObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JeuCode.GDOndeVertObjects1.length;i<l;++i) {
    if ( gdjs.JeuCode.GDOndeVertObjects1[i].getVariableNumber(gdjs.JeuCode.GDOndeVertObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.JeuCode.GDOndeVertObjects1[k] = gdjs.JeuCode.GDOndeVertObjects1[i];
        ++k;
    }
}
gdjs.JeuCode.GDOndeVertObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10342828);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JeuCode.GDOndeVertObjects1 */
{for(var i = 0, len = gdjs.JeuCode.GDOndeVertObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDOndeVertObjects1[i].returnVariable(gdjs.JeuCode.GDOndeVertObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.JeuCode.GDOndeVertObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDOndeVertObjects1[i].getBehavior("Scale").setScale(0.01);
}
}{for(var i = 0, len = gdjs.JeuCode.GDOndeVertObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDOndeVertObjects1[i].getBehavior("Tween").addObjectScaleTween3("VertEchelle", 1, "easeOutQuad", 2, true, true);
}
}{for(var i = 0, len = gdjs.JeuCode.GDOndeVertObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDOndeVertObjects1[i].getBehavior("Tween").addObjectOpacityTween2("VertOpacite", 0, "linear", 2, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Marron"), gdjs.JeuCode.GDMarronObjects1);
gdjs.copyArray(runtimeScene.getObjects("OndeBlanc"), gdjs.JeuCode.GDOndeBlancObjects1);
gdjs.copyArray(runtimeScene.getObjects("OndeJaune"), gdjs.JeuCode.GDOndeJauneObjects1);
gdjs.copyArray(runtimeScene.getObjects("OndeMarron"), gdjs.JeuCode.GDOndeMarronObjects1);
gdjs.copyArray(runtimeScene.getObjects("OndeVert"), gdjs.JeuCode.GDOndeVertObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDMarronObjects1Objects, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDOndeVertObjects1ObjectsGDgdjs_9546JeuCode_9546GDOndeMarronObjects1ObjectsGDgdjs_9546JeuCode_9546GDOndeBlancObjects1ObjectsGDgdjs_9546JeuCode_9546GDOndeJauneObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10345148);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JeuCode.GDMarronObjects1 */
/* Reuse gdjs.JeuCode.GDOndeMarronObjects1 */
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDOndeMarronObjects1Objects, (( gdjs.JeuCode.GDMarronObjects1.length === 0 ) ? 0 :gdjs.JeuCode.GDMarronObjects1[0].getPointX("")), (( gdjs.JeuCode.GDMarronObjects1.length === 0 ) ? 0 :gdjs.JeuCode.GDMarronObjects1[0].getPointY("")), "Ondes");
}{for(var i = 0, len = gdjs.JeuCode.GDMarronObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDMarronObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).concatenateString("🔴");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OndeMarron"), gdjs.JeuCode.GDOndeMarronObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JeuCode.GDOndeMarronObjects1.length;i<l;++i) {
    if ( gdjs.JeuCode.GDOndeMarronObjects1[i].getVariableNumber(gdjs.JeuCode.GDOndeMarronObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.JeuCode.GDOndeMarronObjects1[k] = gdjs.JeuCode.GDOndeMarronObjects1[i];
        ++k;
    }
}
gdjs.JeuCode.GDOndeMarronObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10346292);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JeuCode.GDOndeMarronObjects1 */
{for(var i = 0, len = gdjs.JeuCode.GDOndeMarronObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDOndeMarronObjects1[i].returnVariable(gdjs.JeuCode.GDOndeMarronObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.JeuCode.GDOndeMarronObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDOndeMarronObjects1[i].getBehavior("Scale").setScale(0.01);
}
}{for(var i = 0, len = gdjs.JeuCode.GDOndeMarronObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDOndeMarronObjects1[i].getBehavior("Tween").addObjectScaleTween3("MarronEchelle", 1, "easeOutQuad", 4, true, true);
}
}{for(var i = 0, len = gdjs.JeuCode.GDOndeMarronObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDOndeMarronObjects1[i].getBehavior("Tween").addObjectOpacityTween2("MarronOpacite", 0, "linear", 4, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Jaune"), gdjs.JeuCode.GDJauneObjects1);
gdjs.copyArray(runtimeScene.getObjects("OndeBlanc"), gdjs.JeuCode.GDOndeBlancObjects1);
gdjs.copyArray(runtimeScene.getObjects("OndeJaune"), gdjs.JeuCode.GDOndeJauneObjects1);
gdjs.copyArray(runtimeScene.getObjects("OndeMarron"), gdjs.JeuCode.GDOndeMarronObjects1);
gdjs.copyArray(runtimeScene.getObjects("OndeVert"), gdjs.JeuCode.GDOndeVertObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDJauneObjects1Objects, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDOndeVertObjects1ObjectsGDgdjs_9546JeuCode_9546GDOndeMarronObjects1ObjectsGDgdjs_9546JeuCode_9546GDOndeBlancObjects1ObjectsGDgdjs_9546JeuCode_9546GDOndeJauneObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10348612);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JeuCode.GDJauneObjects1 */
/* Reuse gdjs.JeuCode.GDOndeJauneObjects1 */
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDOndeJauneObjects1Objects, (( gdjs.JeuCode.GDJauneObjects1.length === 0 ) ? 0 :gdjs.JeuCode.GDJauneObjects1[0].getPointX("")), (( gdjs.JeuCode.GDJauneObjects1.length === 0 ) ? 0 :gdjs.JeuCode.GDJauneObjects1[0].getPointY("")), "Ondes");
}{for(var i = 0, len = gdjs.JeuCode.GDJauneObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDJauneObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).concatenateString("🟡");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OndeJaune"), gdjs.JeuCode.GDOndeJauneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JeuCode.GDOndeJauneObjects1.length;i<l;++i) {
    if ( gdjs.JeuCode.GDOndeJauneObjects1[i].getVariableNumber(gdjs.JeuCode.GDOndeJauneObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.JeuCode.GDOndeJauneObjects1[k] = gdjs.JeuCode.GDOndeJauneObjects1[i];
        ++k;
    }
}
gdjs.JeuCode.GDOndeJauneObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10349756);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JeuCode.GDOndeJauneObjects1 */
{for(var i = 0, len = gdjs.JeuCode.GDOndeJauneObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDOndeJauneObjects1[i].returnVariable(gdjs.JeuCode.GDOndeJauneObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.JeuCode.GDOndeJauneObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDOndeJauneObjects1[i].getBehavior("Scale").setScale(0.01);
}
}{for(var i = 0, len = gdjs.JeuCode.GDOndeJauneObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDOndeJauneObjects1[i].getBehavior("Tween").addObjectScaleTween3("JauneEchelle", 1.2, "easeOutQuad", 3, true, true);
}
}{for(var i = 0, len = gdjs.JeuCode.GDOndeJauneObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDOndeJauneObjects1[i].getBehavior("Tween").addObjectOpacityTween2("JauneOpacite", 0, "linear", 3, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Noir"), gdjs.JeuCode.GDNoirObjects1);
gdjs.copyArray(runtimeScene.getObjects("OndeBlanc"), gdjs.JeuCode.GDOndeBlancObjects1);
gdjs.copyArray(runtimeScene.getObjects("OndeJaune"), gdjs.JeuCode.GDOndeJauneObjects1);
gdjs.copyArray(runtimeScene.getObjects("OndeMarron"), gdjs.JeuCode.GDOndeMarronObjects1);
gdjs.copyArray(runtimeScene.getObjects("OndeVert"), gdjs.JeuCode.GDOndeVertObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDNoirObjects1Objects, gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDOndeVertObjects1ObjectsGDgdjs_9546JeuCode_9546GDOndeMarronObjects1ObjectsGDgdjs_9546JeuCode_9546GDOndeBlancObjects1ObjectsGDgdjs_9546JeuCode_9546GDOndeJauneObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10352076);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JeuCode.GDNoirObjects1 */
{for(var i = 0, len = gdjs.JeuCode.GDNoirObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDNoirObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).concatenateString("⚫");
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.JeuCode.mapOfEmptyGDVertObjectsEmptyGDMarronObjectsEmptyGDJauneObjectsEmptyGDNoirObjects) <= 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10353764);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Chrono"), gdjs.JeuCode.GDChronoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Coups"), gdjs.JeuCode.GDCoupsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fin"), gdjs.JeuCode.GDFinObjects1);
gdjs.copyArray(runtimeScene.getObjects("OndeBlanc"), gdjs.JeuCode.GDOndeBlancObjects1);
gdjs.copyArray(runtimeScene.getObjects("OndeJaune"), gdjs.JeuCode.GDOndeJauneObjects1);
gdjs.copyArray(runtimeScene.getObjects("OndeMarron"), gdjs.JeuCode.GDOndeMarronObjects1);
gdjs.copyArray(runtimeScene.getObjects("OndeVert"), gdjs.JeuCode.GDOndeVertObjects1);
gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.JeuCode.GDRestartObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.JeuCode.GDScoreObjects1);
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Chrono");
}{for(var i = 0, len = gdjs.JeuCode.GDCoupsObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDCoupsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.JeuCode.GDChronoObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDChronoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.JeuCode.GDRestartObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDRestartObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.JeuCode.GDFinObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDFinObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.JeuCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDScoreObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.JeuCode.GDOndeVertObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDOndeVertObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.JeuCode.GDOndeMarronObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDOndeMarronObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.JeuCode.GDOndeBlancObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDOndeBlancObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.JeuCode.GDOndeJauneObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDOndeJauneObjects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.JeuCode.eventsList33(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.JeuCode.GDRestartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDRestartObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.JeuCode.GDRestartObjects1 */
{for(var i = 0, len = gdjs.JeuCode.GDRestartObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDRestartObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.JeuCode.GDRestartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDRestartObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.JeuCode.GDRestartObjects1 */
{for(var i = 0, len = gdjs.JeuCode.GDRestartObjects1.length ;i < len;++i) {
    gdjs.JeuCode.GDRestartObjects1[i].getBehavior("Opacity").setOpacity(128);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.JeuCode.GDRestartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.JeuCode.mapOfGDgdjs_9546JeuCode_9546GDRestartObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JeuCode.GDRestartObjects1.length;i<l;++i) {
    if ( gdjs.JeuCode.GDRestartObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.JeuCode.GDRestartObjects1[k] = gdjs.JeuCode.GDRestartObjects1[i];
        ++k;
    }
}
gdjs.JeuCode.GDRestartObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10360212);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "Chrono");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Jeu", false);
}}

}


};

gdjs.JeuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.JeuCode.GDVertObjects1.length = 0;
gdjs.JeuCode.GDVertObjects2.length = 0;
gdjs.JeuCode.GDVertObjects3.length = 0;
gdjs.JeuCode.GDVertObjects4.length = 0;
gdjs.JeuCode.GDVertObjects5.length = 0;
gdjs.JeuCode.GDMarronObjects1.length = 0;
gdjs.JeuCode.GDMarronObjects2.length = 0;
gdjs.JeuCode.GDMarronObjects3.length = 0;
gdjs.JeuCode.GDMarronObjects4.length = 0;
gdjs.JeuCode.GDMarronObjects5.length = 0;
gdjs.JeuCode.GDNoirObjects1.length = 0;
gdjs.JeuCode.GDNoirObjects2.length = 0;
gdjs.JeuCode.GDNoirObjects3.length = 0;
gdjs.JeuCode.GDNoirObjects4.length = 0;
gdjs.JeuCode.GDNoirObjects5.length = 0;
gdjs.JeuCode.GDCoupsObjects1.length = 0;
gdjs.JeuCode.GDCoupsObjects2.length = 0;
gdjs.JeuCode.GDCoupsObjects3.length = 0;
gdjs.JeuCode.GDCoupsObjects4.length = 0;
gdjs.JeuCode.GDCoupsObjects5.length = 0;
gdjs.JeuCode.GDMurObjects1.length = 0;
gdjs.JeuCode.GDMurObjects2.length = 0;
gdjs.JeuCode.GDMurObjects3.length = 0;
gdjs.JeuCode.GDMurObjects4.length = 0;
gdjs.JeuCode.GDMurObjects5.length = 0;
gdjs.JeuCode.GDOndeVertObjects1.length = 0;
gdjs.JeuCode.GDOndeVertObjects2.length = 0;
gdjs.JeuCode.GDOndeVertObjects3.length = 0;
gdjs.JeuCode.GDOndeVertObjects4.length = 0;
gdjs.JeuCode.GDOndeVertObjects5.length = 0;
gdjs.JeuCode.GDOndeMarronObjects1.length = 0;
gdjs.JeuCode.GDOndeMarronObjects2.length = 0;
gdjs.JeuCode.GDOndeMarronObjects3.length = 0;
gdjs.JeuCode.GDOndeMarronObjects4.length = 0;
gdjs.JeuCode.GDOndeMarronObjects5.length = 0;
gdjs.JeuCode.GDOndeBlancObjects1.length = 0;
gdjs.JeuCode.GDOndeBlancObjects2.length = 0;
gdjs.JeuCode.GDOndeBlancObjects3.length = 0;
gdjs.JeuCode.GDOndeBlancObjects4.length = 0;
gdjs.JeuCode.GDOndeBlancObjects5.length = 0;
gdjs.JeuCode.GDRestartObjects1.length = 0;
gdjs.JeuCode.GDRestartObjects2.length = 0;
gdjs.JeuCode.GDRestartObjects3.length = 0;
gdjs.JeuCode.GDRestartObjects4.length = 0;
gdjs.JeuCode.GDRestartObjects5.length = 0;
gdjs.JeuCode.GDJauneObjects1.length = 0;
gdjs.JeuCode.GDJauneObjects2.length = 0;
gdjs.JeuCode.GDJauneObjects3.length = 0;
gdjs.JeuCode.GDJauneObjects4.length = 0;
gdjs.JeuCode.GDJauneObjects5.length = 0;
gdjs.JeuCode.GDOndeJauneObjects1.length = 0;
gdjs.JeuCode.GDOndeJauneObjects2.length = 0;
gdjs.JeuCode.GDOndeJauneObjects3.length = 0;
gdjs.JeuCode.GDOndeJauneObjects4.length = 0;
gdjs.JeuCode.GDOndeJauneObjects5.length = 0;
gdjs.JeuCode.GDCercleObjects1.length = 0;
gdjs.JeuCode.GDCercleObjects2.length = 0;
gdjs.JeuCode.GDCercleObjects3.length = 0;
gdjs.JeuCode.GDCercleObjects4.length = 0;
gdjs.JeuCode.GDCercleObjects5.length = 0;
gdjs.JeuCode.GDAideObjects1.length = 0;
gdjs.JeuCode.GDAideObjects2.length = 0;
gdjs.JeuCode.GDAideObjects3.length = 0;
gdjs.JeuCode.GDAideObjects4.length = 0;
gdjs.JeuCode.GDAideObjects5.length = 0;
gdjs.JeuCode.GDChronoObjects1.length = 0;
gdjs.JeuCode.GDChronoObjects2.length = 0;
gdjs.JeuCode.GDChronoObjects3.length = 0;
gdjs.JeuCode.GDChronoObjects4.length = 0;
gdjs.JeuCode.GDChronoObjects5.length = 0;
gdjs.JeuCode.GDScoreObjects1.length = 0;
gdjs.JeuCode.GDScoreObjects2.length = 0;
gdjs.JeuCode.GDScoreObjects3.length = 0;
gdjs.JeuCode.GDScoreObjects4.length = 0;
gdjs.JeuCode.GDScoreObjects5.length = 0;
gdjs.JeuCode.GDFinObjects1.length = 0;
gdjs.JeuCode.GDFinObjects2.length = 0;
gdjs.JeuCode.GDFinObjects3.length = 0;
gdjs.JeuCode.GDFinObjects4.length = 0;
gdjs.JeuCode.GDFinObjects5.length = 0;

gdjs.JeuCode.eventsList34(runtimeScene);
gdjs.JeuCode.GDVertObjects1.length = 0;
gdjs.JeuCode.GDVertObjects2.length = 0;
gdjs.JeuCode.GDVertObjects3.length = 0;
gdjs.JeuCode.GDVertObjects4.length = 0;
gdjs.JeuCode.GDVertObjects5.length = 0;
gdjs.JeuCode.GDMarronObjects1.length = 0;
gdjs.JeuCode.GDMarronObjects2.length = 0;
gdjs.JeuCode.GDMarronObjects3.length = 0;
gdjs.JeuCode.GDMarronObjects4.length = 0;
gdjs.JeuCode.GDMarronObjects5.length = 0;
gdjs.JeuCode.GDNoirObjects1.length = 0;
gdjs.JeuCode.GDNoirObjects2.length = 0;
gdjs.JeuCode.GDNoirObjects3.length = 0;
gdjs.JeuCode.GDNoirObjects4.length = 0;
gdjs.JeuCode.GDNoirObjects5.length = 0;
gdjs.JeuCode.GDCoupsObjects1.length = 0;
gdjs.JeuCode.GDCoupsObjects2.length = 0;
gdjs.JeuCode.GDCoupsObjects3.length = 0;
gdjs.JeuCode.GDCoupsObjects4.length = 0;
gdjs.JeuCode.GDCoupsObjects5.length = 0;
gdjs.JeuCode.GDMurObjects1.length = 0;
gdjs.JeuCode.GDMurObjects2.length = 0;
gdjs.JeuCode.GDMurObjects3.length = 0;
gdjs.JeuCode.GDMurObjects4.length = 0;
gdjs.JeuCode.GDMurObjects5.length = 0;
gdjs.JeuCode.GDOndeVertObjects1.length = 0;
gdjs.JeuCode.GDOndeVertObjects2.length = 0;
gdjs.JeuCode.GDOndeVertObjects3.length = 0;
gdjs.JeuCode.GDOndeVertObjects4.length = 0;
gdjs.JeuCode.GDOndeVertObjects5.length = 0;
gdjs.JeuCode.GDOndeMarronObjects1.length = 0;
gdjs.JeuCode.GDOndeMarronObjects2.length = 0;
gdjs.JeuCode.GDOndeMarronObjects3.length = 0;
gdjs.JeuCode.GDOndeMarronObjects4.length = 0;
gdjs.JeuCode.GDOndeMarronObjects5.length = 0;
gdjs.JeuCode.GDOndeBlancObjects1.length = 0;
gdjs.JeuCode.GDOndeBlancObjects2.length = 0;
gdjs.JeuCode.GDOndeBlancObjects3.length = 0;
gdjs.JeuCode.GDOndeBlancObjects4.length = 0;
gdjs.JeuCode.GDOndeBlancObjects5.length = 0;
gdjs.JeuCode.GDRestartObjects1.length = 0;
gdjs.JeuCode.GDRestartObjects2.length = 0;
gdjs.JeuCode.GDRestartObjects3.length = 0;
gdjs.JeuCode.GDRestartObjects4.length = 0;
gdjs.JeuCode.GDRestartObjects5.length = 0;
gdjs.JeuCode.GDJauneObjects1.length = 0;
gdjs.JeuCode.GDJauneObjects2.length = 0;
gdjs.JeuCode.GDJauneObjects3.length = 0;
gdjs.JeuCode.GDJauneObjects4.length = 0;
gdjs.JeuCode.GDJauneObjects5.length = 0;
gdjs.JeuCode.GDOndeJauneObjects1.length = 0;
gdjs.JeuCode.GDOndeJauneObjects2.length = 0;
gdjs.JeuCode.GDOndeJauneObjects3.length = 0;
gdjs.JeuCode.GDOndeJauneObjects4.length = 0;
gdjs.JeuCode.GDOndeJauneObjects5.length = 0;
gdjs.JeuCode.GDCercleObjects1.length = 0;
gdjs.JeuCode.GDCercleObjects2.length = 0;
gdjs.JeuCode.GDCercleObjects3.length = 0;
gdjs.JeuCode.GDCercleObjects4.length = 0;
gdjs.JeuCode.GDCercleObjects5.length = 0;
gdjs.JeuCode.GDAideObjects1.length = 0;
gdjs.JeuCode.GDAideObjects2.length = 0;
gdjs.JeuCode.GDAideObjects3.length = 0;
gdjs.JeuCode.GDAideObjects4.length = 0;
gdjs.JeuCode.GDAideObjects5.length = 0;
gdjs.JeuCode.GDChronoObjects1.length = 0;
gdjs.JeuCode.GDChronoObjects2.length = 0;
gdjs.JeuCode.GDChronoObjects3.length = 0;
gdjs.JeuCode.GDChronoObjects4.length = 0;
gdjs.JeuCode.GDChronoObjects5.length = 0;
gdjs.JeuCode.GDScoreObjects1.length = 0;
gdjs.JeuCode.GDScoreObjects2.length = 0;
gdjs.JeuCode.GDScoreObjects3.length = 0;
gdjs.JeuCode.GDScoreObjects4.length = 0;
gdjs.JeuCode.GDScoreObjects5.length = 0;
gdjs.JeuCode.GDFinObjects1.length = 0;
gdjs.JeuCode.GDFinObjects2.length = 0;
gdjs.JeuCode.GDFinObjects3.length = 0;
gdjs.JeuCode.GDFinObjects4.length = 0;
gdjs.JeuCode.GDFinObjects5.length = 0;


return;

}

gdjs['JeuCode'] = gdjs.JeuCode;
