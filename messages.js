var messages = [
    'Not found',
    'This page doesn\'t exist',
    'You\'re lost',
    'Nope',
    ':(',
    'D:',
    'Search deeper maybe',
    'This page was wiped from the face of the earth',
    'Ǹ̵̢̛̳̲̌͌̽̌̌̈̈͒̓̊͝͠͝ö̴͍͉̝̟̹͚͔͖̦̯́̓̏̆̄͘͜͝͝t̵͈̦̦̯͖͔̩̠̣̦̳̅̌͐͘͜ ̸̧̨̨̩͙̜̲̱̼̩̠̩̺̝̹͚̮͖̈́͊̃̓͂̊̓̎̇̔̄̀̕͘f̸̲̃̓̒̊̏̒̈́̒͘͠͝õ̷̢̨̨̢̧̺̖̬̘̹͇͐͋̇̈́̏̈́̇ų̴̣̺̜̳̤͖͚͔͎͈̦͖͚͖̭̓͂͒̀̂̌̍͛͂͒̑̆͑͒͐̓̀̑ͅn̷̡̮̗̥̼̲̗̟̉̂͌́͌̉̒̒̈́̆̉̍͊̎͛͌͠͠d̴͚̂̅͊̅̒̚̚',
    'The page you\'re trying to find no longer exists',
    'Why are you here?',
    'Where are we?',
    'Lost, lost, lost',
    '(:',
    'The big oof',
    'Tarball is dead.',
    'Qute of the day. "if it ain\'t broke, don\'t try to fix it"',
    'The things you learn in maturity aren\'t simple things such as acquiring information and skills. You learn engage in self-destructive behavior.',
    'Reconsider your brain',
    'Hardcore Gay Yiff',
]
function newMessage() {
        var randomNumber = Math.floor(Math.random() * (messages.length));
        document.getElementById('messsageDisplay').innerHTML = messages[randomNumber];
}
