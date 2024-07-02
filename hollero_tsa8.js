
function Reset(){
    document.getElementById("simulation").style.flexDirection = "row";
    document.getElementById("simulation").style.justifyContent= "flex-start";
    document.getElementById("simulation").style.alignItems = "flex-start"; 
    var inputField = document.getElementById('numberOfGap');
    inputField.value = '';
    simulation.style.columnGap = "0";
    simulation.style.rowGap = "0";
    document.getElementById("boxone").style.flexGrow = "0";
    document.getElementById("boxtwo").style.flexGrow = "0";
    document.getElementById("boxthree").style.flexGrow = "0";
    var inputField1 = document.getElementById('number1');
    var inputField2 = document.getElementById('number2');
    var inputField3 = document.getElementById('number3');
    inputField1.value = '';
    inputField2.value = '';
    inputField3.value = '';
  }
function Gap() {
 var x = document.getElementById("numberOfGap").value;
 simulation.style.columnGap = x+"px";
 simulation.style.rowGap = x+"px";
}
function FlexRow() {
    document.getElementById("simulation").style.flexDirection = "row";
  }
function FlexColumn() {
    document.getElementById("simulation").style.flexDirection = "column";
  }

function Start() { 
    document.getElementById("simulation").style.justifyContent= "flex-start"; 
    } 
function Center() { 
    document.getElementById("simulation").style.justifyContent= "center"; 
    } 
function End() { 
    document.getElementById("simulation").style.justifyContent= "flex-end"; 
    } 
function SpaceBetween() { 
    document.getElementById("simulation").style.justifyContent= "space-between"; 
        }
function SpaceAround() { 
    document.getElementById("simulation").style.justifyContent= "space-around"; 
    } 
function SpaceEvenly() { 
    document.getElementById("simulation").style.justifyContent= "space-evenly"; 
        }
function AlignStart() { 
    document.getElementById("simulation").style.alignItems = "flex-start"; 
        }
function AlignCenter() { 
    document.getElementById("simulation").style.alignItems = "center"; 
        }
function AlignEnd() { 
    document.getElementById("simulation").style.alignItems = "flex-end"; 
        }
function ResetFlexGrow(){
    var inputField1 = document.getElementById('number1');
    var inputField2 = document.getElementById('number2');
    var inputField3 = document.getElementById('number3');
    inputField1.value = '';
    inputField2.value = '';
    inputField3.value = '';
    document.getElementById("boxone").style.flexGrow = "0";
    document.getElementById("boxtwo").style.flexGrow = "0";
    document.getElementById("boxthree").style.flexGrow = "0";

}
function FlexGrowAll(){
    document.getElementById("boxone").style.flexGrow = "1";
    document.getElementById("boxtwo").style.flexGrow = "1";
    document.getElementById("boxthree").style.flexGrow = "1";
}
function Box1() {
 var x = document.getElementById('number1');
 var y = document.getElementById('boxone');
 var flexGrowValue = parseFloat(x.value)

 y.style.flexGrow = flexGrowValue;
}
function Box2() {
 var x = document.getElementById('number2');
 var y = document.getElementById('boxtwo');
 var flexGrowValue = parseFloat(x.value)

 y.style.flexGrow = flexGrowValue;
}
function Box3() {
 var x = document.getElementById('number3');
 var y = document.getElementById('boxthree');
 var flexGrowValue = parseFloat(x.value)

 y.style.flexGrow = flexGrowValue;
}
