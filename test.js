let deyer = confirm('Men yaxsiyamsa "OK" bas, pisemse, "Cancel" bas. "Cancel" bassan qisas alacam');

let num = 0;
let netice;
let reqem = 9000000000;

while (num < 5) {
    if (deyer) {
        num++;
    } else {
        reqem *= 99999999999999;
        console.log('Leman');
    }
}

document.getElementById('zor').innerHTML =  'Cox sagolun bu sizin gozelliyinizdir :)';