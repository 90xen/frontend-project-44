import readlineSync from 'readline-sync';
function hello(){
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    return 'Hello, ' + userName + '!';
}
console.log(hello());
export default hello;
//const userName = readlineSync.question('May I have your name? ');
//console.log('Hello, ' + userName + '!');