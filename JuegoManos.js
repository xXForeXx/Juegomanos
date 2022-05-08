var piedra = "piedra"
var papel = "papel"; 
var tijera = "tijera";

var user = piedra; 
var cpu = tijera;
var ganador = undefined;


function printGanador(ganador, mano){
    var ganador = ganador; 
    var mano = mano;
    console.log("el ganador es: ", ganador, "con: ", mano);
}

function operation(user, cpu){
    if (user != cpu){
        if (user == piedra && cpu == tijera ){
            printGanador("Usuario", piedra);
        }
        else if (user == tijera && cpu == piedra ){
            
            printGanador("Cpu", piedra);
        }
        else if (user == tijera && cpu == papel){
            printGanador("Usuario", tijera);
        }
        else if (user == papel && cpu == tijera){            
            printGanador("Cpu", tijera);
        }
        else if (user == papel && cpu == piedra){            
            printGanador("Usuario", papel);
        }
        else if (user == piedra && cpu == papel){
            printGanador("Cpu", papel);
        }
    }
    else if(user == cpu){
        console.log("Han empatado por favor vuelvan a intentarlo");
    };
}; 

operation(user, cpu);
