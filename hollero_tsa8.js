function Reset(){
    document.getElementById("simulation").style.flexDirection = "row";
    document.getElementById("simulation").style.justifyContent= "flex-start";
    document.getElementById("simulation").style.alignItems = "flex-start"; 

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
