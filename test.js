let deyer = confirm('Men yaxsiyamsa "OK" bas, pisemse, "Cancel" bas. "Cancel" bassan qisas alacam');

let num = 0;
let netice;

while (num < 5) {
    if (deyer) {
        num++;
    }
}

document.getElementById('zor').innerHTML =  'Cox sagolun bu sizin gozelliyinizdir :)';