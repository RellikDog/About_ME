'use strict';

//welcome user to my page and ask their name=q1
var userName=prompt('Welcome to my favorite foods page! What should I call you?');
    alert('Nice to meet you '+userName+'. Since this is a page about my favorite foods why dont you try to guess a few things about me? Please guess with yes/no or y/n.');
        console.log('visitors name: '+userName);

//Do I love pizza?=q2
var pizzaLove=prompt('Do you think I love pizza?');
    if(pizzaLove.toUpperCase()==='YES'||pizzaLove.toUpperCase()==='Y'){
        alert('Of course!');
    } else {
            alert('...I love pizza...');
        }
                console.log('Do they think I like pizza?:'+pizzaLove);

//Do I like hawaian pizza?=q3
var hawPiz=prompt('Not so hard because who doesn\'t love pizza? But do you think I like the most controversial of all pies? I\'m speaking, of course, about the canadian bacon and pineapple.');
        if(hawPiz.toUpperCase()==='YES'||hawPiz.toUpperCase()==='Y'){
            alert('You got it!');
        }else if(hawPiz.toUpperCase()==='NO'||hawPiz.toUpperCase()==='N'){
                alert('I\'m and equal oppertunity lover of all pizza toppings!');
            }else{
                    alert('Are you even trying?');
                }
                        console.log('Do they think I like hawian pizza: '+hawPiz);

//Do I like sushi?=q4
var sushiLove=prompt('OK lets try another food. Do  you think I like sushi?');
    if(sushiLove.toUpperCase()==='YES'||sushiLove.toUpperCase()==='Y'){
            alert('You are correct '+userName+'!');  
        }else{
                alert('You have answered incorrectly '+userName);
        }
                    console.log('Do they think I like sushi?: '+sushiLove);

//Do I like cottage cheese?=q5
var cCLove=prompt('If someone offered me a free tub of cottage cheese would I take it?');
    if(cCLove.toUpperCase()==='YES'||cCLove.toUpperCase()==='Y'){
        alert('NO!');
    }else if(cCLove.toUpperCase()==='NO'||cCLove.toUpperCase()==='N'){
            alert('I hate cottage cheese');
        }else{
                alert('Do you usually strugle wuith instructions?');
            }
                    console.log('Do they think I like cottage cheese?: '+cCLove);

//is watermelon my favorite fruit?=q6
var wMelon=prompt('Do you think the watermelon is my favorite fruit?');
    while(wMelon.toUpperCase()!='YES'||wMelon.toUpperCase()!='Y'||wMelon.toUpperCase()!='NO'||wMelon.toUpperCase()!='N'){
        alert('This is the last question, please submit a valid answer.')
        var wMelon=prompt('Do you think the watermelon is my favorite fruit?');
    }
        if(wMelon.toUpperCase()!='YES'||wMelon.toUpperCase()!='Y'){
            alert(userName+'... YOU\'RE RIGHT!');
        }else {
                alert(userName+'*sigh* it\'s ok you don\'t know me.');
            }
                console.log('do they think that watermelon is my favorite fruit?'+wMelon);
