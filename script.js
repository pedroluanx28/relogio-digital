let horas = document.getElementById('horas')
let minutos = document.getElementById('minutos')
let segundos = document.getElementById('segundos')

setInterval(function time(){
    let data = new Date()

    let H = data.getHours()
    let M = data.getMinutes()
    let S = data.getSeconds()

    horas.innerHTML = zero(H)
    minutos.innerHTML = zero(M)
    segundos.innerHTML = zero(S)

})

function zero(n){
    if (n < 10){
        return '0'+n
    }else{
        return n
    }
}