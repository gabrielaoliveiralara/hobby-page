function charging(){
    var msg = window.document.getElementById('msg')
    var data = new Date()
    var hours = data.getHours()
    msg.innerHTML = `The time is ${data}`
}
