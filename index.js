let userDetails = {
    firstname : "Adetayo",
    lastname :  "Bravo",
    sex : "male"
}

let result = JSON.stringify(userDetails);
console.log(result) // send to the user server side

let data = '{"firstname": "Adetayo", "lastname": "Bravo", "sex": "Male"}';

let answer = JSON.parse(data);
console.log(answer)