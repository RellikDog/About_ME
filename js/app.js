'use strict';

//welcome user to my page and ask their name=q1
var isValid = false;
while (!isValid) {
    var userName = prompt('Welcome to my favorite foods page! What should I call you?');
    if (userName == null || userName === '' || !userName) {
        alert(' you didn\'t give a valid username! try again!')
    } else {
        alert(userName + ' has entered the building!');
        isValid = true;
    }
}
alert('Nice to meet you ' + userName + '. Since this is a page about my favorite foods why dont you try to guess a few things about me? Please guess with yes/no or y/n.');
console.log('visitors name: ' + userName);

//Do I love pizza?=q2
do {
    var pizzaLove = prompt('Do you think I love pizza?');
} while (!pizzaLove);
var pizzaLoveUp = pizzaLove.toUpperCase();

if (pizzaLoveUp === 'Y' || pizzaLoveUp === 'Yes') {
    alert('Of course!');
} else if (pizzaLoveUp === 'N' || pizzaLoveUp === 'NO') {
    alert('...I love pizza... -.-');
} else {
    alert('Your answer should have been either Yes/y or No/n but I\'ll let it slide since it\'s an easy question.');
}
console.log('Do they think I like pizza?:' + pizzaLove);

//Do I like hawaian pizza?=q3
var isValid = false;
while(!isValid){
    var hawPiz = prompt('Not so hard because who doesn\'t love pizza? But do you think I like the most controversial of all pies? I\'m speaking, obviously, of canadian bacon and pineapple.');
  while (hawPiz == null || hawPiz === '' || !hawPiz) {
       var hawPiz = prompt('This question is too important to skip, please answer with Yes/y or No/n');
  }
  var hawPizUp = hawPiz.toUpperCase();  
  if (hawPizUp === 'Y'||hawPizUp === 'YES'){
    alert('You got it!');
    var isValid = true;
  }else if(hawPizUp === 'N'||hawPizUp === 'NO'){
    alert('I\'m and equal oppertunity lover of all pizza toppings!');
    var isValid = true;
  } else{
    alert('try again');
  }
  }
console.log('Do they think I like hawian pizza: ' + hawPiz);

//Do I like sushi?=q4
var sushiLove = prompt('OK lets try another food. Do  you think I like sushi?');
if (sushiLove.toUpperCase() === 'YES' || sushiLove.toUpperCase() === 'Y') {
    alert('You are correct ' + userName + '!');
} else {
    alert('You have answered incorrectly ' + userName);
}
console.log('Do they think I like sushi?: ' + sushiLove);

//Do I like cottage cheese?=q5
var cCLove = prompt('If someone offered me a free tub of cottage cheese would I take it?');
if (cCLove.toUpperCase() === 'YES' || cCLove.toUpperCase() === 'Y') {
    alert('NO!');
} else if (cCLove.toUpperCase() === 'NO' || cCLove.toUpperCase() === 'N') {
    alert('I hate cottage cheese');
} else {
    alert('Do you usually strugle wuith instructions?');
}
console.log('Do they think I like cottage cheese?: ' + cCLove);

//is watermelon my favorite fruit?=q6
var wMelon = prompt('Do you think the watermelon is my favorite fruit?');
while (!wMelon || (wMelon.toUpperCase() !== 'YES' && wMelon.toUpperCase() !== 'Y' && wMelon.toUpperCase() !== 'NO' && wMelon.toUpperCase() !== 'N')) {
    alert('This is the last question, ' + userName + ' please submit a valid answer.');
    var wMelon = prompt('Do you think the watermelon is my favorite fruit?');
}
if (wMelon.toUpperCase() === 'YES' || wMelon.toUpperCase() === 'Y') {
    alert(userName + '... YOU\'RE RIGHT!');
} else if (wMelon.toUpperCase() === 'NO' || wMelon.toUpperCase() === 'N') {
    alert(userName + '*sigh* it\'s ok you don\'t know me.');
} else {
    alert('I don\'t klnow how you did it but congrats');
}
console.log('do they think that watermelon is my favorite fruit?' + wMelon);


//guess the highest mountain I've climbed=q7
//thanks to https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/ for turning stings into numbers
var answ = 14000;
for (var i = 4; i > 0; i--) {
    var iTxt = i.toString();
    var quest = prompt('About how high in feet is the highest mountain I have ever climbed? You have ' + iTxt + ' guesses left');
    var questNum = parseInt(quest,10);
    if (questNum === answ) {
        alert('Wow You got it right!');
        break;
    } else if (quest > answ) {
        alert('Thats too high try a lower number');
    } else if (quest < answ) {
        alert('The mountain was taller then that. Try a higher number.');
    } else {
        alert('Please enter a number.')
    }
}

if (questNum !== answ) {
    alert('Don\'t worry about it that was a hard question. The correct answer was 14,000');
}