// make variables
let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
    let area = width * length;
    
    // ressult showing
    document.getElementById('result').innerText = 'The Area Of Rectangle Is: ${area}';
}

