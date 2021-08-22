//variavel
var segundos = 0
var minutos = "0" + 0
var horas = "0" + 0
var cronometro

var pararCronometro = false

//funcao para aumentar os segundos

function disparaCronometro() {

    cronometro = setInterval(function() {

        //atribuindo valor à variável segundos
        segundos++

        switch (segundos) {
            case 60:
                segundos = 0
                minutos++
                if (minutos <= 9) {
                    minutos = "0" + minutos
                }
                break;
        }
        if (segundos <= 9) {
            segundos = "0" + segundos
        }

        switch (minutos) {
            case 60:
                minutos = "0" + 0
                horas++
                if (horas <= 9) {
                    horas = "0" + horas
                } else if (horas > 9 && horas < 24) {
                    horas = horas
                } else if (horas = 24) {
                    horas = "0" + 0
                }
                break;
        }

        document.getElementById("segundos").innerHTML = segundos
        document.getElementById("minutos").innerHTML = minutos

        document.getElementById("horas").innerHTML = horas

        //alterando valor dos minutos 
        console.log(minutos)

    }, 1000)

    //desabilitando o button "iniciar" para ele não iniciar novamente o setInterval()
    document.getElementById("btn-iniciar").disabled = true
}

//funcao para encerrar o pararCronometro
function encerrarCronometro() {

    //zerando
    segundos = "00"
    minutos = "00"
    document.getElementById("segundos").innerHTML = segundos
    document.getElementById("minutos").innerHTML = minutos

    //habilitando o button "iniciar" 
    document.getElementById("btn-iniciar").disabled = false

    //parando o setInterval
    return clearInterval(cronometro)

}

//funcao para pausar o pararCronometro
function pausarCronometro() {

    //habilitando o button "iniciar" 
    document.getElementById("btn-iniciar").disabled = false

    return clearInterval(cronometro)
}

//funcao para reiniciar o cronometro 
function reiniciarCronometro() {
    segundos = "00"
    minutos = "00"

    document.getElementById("segundos").innerHTML = segundos
    document.getElementById("minutos").innerHTML = minutos

    //desabilitando o button "iniciar" para ele não iniciar novamente o setInterval()
    document.getElementById("btn-iniciar").disabled = true
}