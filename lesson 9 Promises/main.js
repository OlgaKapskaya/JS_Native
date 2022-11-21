//1

// let promise = new Promise(function(resolve, reject) {
//     resolve(1);
//
//     setTimeout(() => resolve(2), 1000);
// });
//
// promise.then( rez => console.log(rez));

//2

// new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         throw new Error("Whoops!");
//     }, 1000);
// }).catch(err => console.log(err));

//3

function loadJson(url) {

    return fetch(url)
    //     .then(response => {
    //         if (response.status == 200) {
    //             return response.json();
    //         } else {
    //             throw new Error(response.status);
    //         }
    //     })
}

loadJson('no-such-user.json') // (3)
    .catch(alert); // Error: 404


