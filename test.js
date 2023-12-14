let deyer = confirm('Elməddin PİS adamdırsa "OK" düyməsinə basın, YAXŞI adamdırsa, "Cancel" düyməsinə basın.');

let num = 0;
let netice;
let reqem = 9000000000;

while (num < 5) {
    if (deyer) {
        num++;
    } else {
        reqem *= 99999999999999;
        console.log('erlams');
    }
}

document.getElementById('nfc').innerHTML =  'Çox sağolun bu sizin gözəlliyinizdir :)';