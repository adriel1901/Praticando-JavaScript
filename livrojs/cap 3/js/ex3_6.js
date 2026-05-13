function saque() {
    var resto = 0
    var saque = document.getElementById("saque").value
    var n = Number(saque)

    if (n % 10 !== 0) {
        document.getElementById("resposta").innerHTML = "Valor Indisponível para o saque"
        return
    }

    var cem = n % 100
    resto = n - (cem*100)

    
}
var btn = document.getElementById("btnSaque")
btn.addEventListener("click", saque)