const calc = ()=>{
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const lblResult = document.getElementById('result');
    const operator = document.querySelectorAll('input[name ="mathsOperation"]');
    const x = Number(num1.value);
    const y = Number(num2.value);
    
    try {
        if (operator[0].checked){
            lblResult.textContent = (x + y).toFixed(3);
           }else if (operator[1].checked){
            lblResult.textContent = (x - y).toFixed(3);
           }else if (operator[2].checked){
            lblResult.textContent = (x * y).toFixed(3);
           }else if (operator[3].checked){
            lblResult.textContent = (x / y).toFixed(3);
           };  
    } catch (error) {
        'Please, input a valid number.'
    };
};

