//process for changing color

function changeColor(){
    const redColor = document.querySelector("#red");
    const greenColor = document.querySelector("#green");
    const blueColor = document.querySelector("#blue");
    const output = document.querySelector("#output");
    //declaring the variables
    const r = redColor.value;
    const g = greenColor.value;
    const b = blueColor.value;
    // adding variables for changing the background color through slider
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
    output.innerText =  'rgb('+ r +','+ g +','+ b +')';
}


