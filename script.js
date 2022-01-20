// select the classes
const display1E1 = document.querySelector('.display-1');
const display2E1 = document.querySelector('.display-2');
const tempResultsE1 = document.querySelector('.temp-results');
const numbersE1 = document.querySelectorAll('.number');
const operationE1 = document.querySelectorAll('.operation');
const equalE1 = document.querySelector('.equal');
const clearAllE1 = document.querySelector('.all-clear');
const clearLastE1 = document.querySelector('.last-entity-clear');

//assign variables
let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;

//for each number that is click, target the text
numbersE1.forEach( number => {
    number.addEventListener('click', (e)=> {
if(e.target.innerText === '' && !haveDot){
  haveDot = true;
      }else if(e.target.innerText === '.' && haveDot){
       return;  
      }
      dis2Num += e.target.innerText;
      display2E1.innerText = dis2Num

    })
});

operationE1.forEach( operation => {
    operation.addEventListener('click', (e)=>{
      if (!dis2Num) result;
      haveDot= false;
      const operationName = e.target.innerText;
      if(dis1Num && dis2Num && lastOperation){
       mathOperation();
      }else{
        result = parseFloat(dis2Num);
      }
      clearVar(operationName);
      lastOperation = operationName
      console.log(result);
    })
});

function clearVar(name = '') {
    dis1Num += dis2Num+ ' ' + name + ' ';
    display1E1.innerText = dis1Num;
    display2E1.innerText = '';
    dis2Num = '';
    tempResultsE1.innerText = result; //connected the second display screen with the results inputted//
}

function mathOperation(){
  if(lastOperation === 'X'){
    result = parseFloat(result) * parseFloat(dis2Num)
  }else if (lastOperation === '+'){
    result = parseFloat(result) + parseFloat(dis2Num)
  }else if (lastOperation === '-'){
    result = parseFloat(result) - parseFloat(dis2Num)
  }else if (lastOperation === '/'){
    result = parseFloat(result) / parseFloat(dis2Num)
  }else if (lastOperation === '%'){
    result = parseFloat(result) % parseFloat(dis2Num)

  }
}

//function for the results
equalE1.addEventListener('click', (e)=> {
  if( !dis1Num || !dis2Num ) return;
  haveDot = false;
  mathOperation();
  clearVar();
  display2E1.innerText = result;
  tempResultsE1.innerText = '';
  dis2Num = result;
  dis1Num = '';
})
//function to clear all
clearAllE1.addEventListener('click', (e) =>{
  display1E1.innerText = '0';
  display2E1.innerText = '0';
  dis1Num = '';
  dis2Num = '';
  result = '';
  tempResultsE1.innerText = '0';
})


//clear the last entity 
clearLastE1.addEventListener('click', (e) =>{
  display2E1.innerText = '';
  dis2Num = '';
  
})

