var addCartIemsButtons= document.getElementsByClassName('w3-button')
console.log(addCartIemsButtons)
for(var i= 0; i<addCartIemsButtons.length; i++){
    var button=addCartIemsButtons[i]
    button.addEventListener('click',function(event){
        var buttonClicked=event.target
        buttonClicked.parentElement.parentElement.add()
    })
}