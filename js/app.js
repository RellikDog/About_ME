'use strict';

//welcome user to my page and ask their name
var userName=prompt('Welcome to my favorite foods page! What should I call you?');
    alert('Nice to meet you '+userName+'. Since this is a page about my favorite foods why dont you try to guess a few things about me?');
        console.log('visitors name: '+userName);

//Do I love pizza?
var pizzaLove=prompt('Do you think I love pizza?');
    if(pizzaLove.toUpperCase()==='YES'||pizzaLove.toUpperCase()==='Y'){
        alert('Of course!');
    } else {
    alert('...I love pizza...');
        }
        console.log('Do they think I like pizza?:'+pizzaLove);

//Do I like hawaian pizza?
var hawPiz=prompt('Not so hard because who doesn\'t love pizza? But do you think I like the most controversial of all pies? I\'m speaking of course of the canadian bacon and pineapple.');
        if(hawPiz.toUpperCase()==='YES'||hawPiz.toUpperCase()==='Y'){
            alert('You got it!');
        }else if(hawPiz.toUpperCase()==='NO'||hawPiz.toUpperCase()==='N'){
            alert('I\'m and equal oppertunity lover of all pizza toppings!');
            }else{
                alert('Are you even trying?');
                }