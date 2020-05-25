var messages = [
    'Not Found',
    'Oof',
    'You seem to be lost...'
]

$(function() {
    newMessage()
});

function newMessage() {
    var randomNumber = Math.floor(Math.random() * 20)
    document.getElementById('message').innerHTML = messages[randomNumber];
}