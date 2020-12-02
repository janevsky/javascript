// .then and .catch
/*
let timeout_func = () => {
    return new Promise((resolve, reject) => {
        //callback funkcija
        setTimeout(() => {
            console.log('TIMEOUT');
            return resolve('Finished');
            //resolve reject('not finished');
        }, 2000);
    });
};

let wait_for_timeout = async() => {
    try {
        let response = await timeout_func();
        console.log('try');
        console.log(response);
        console.log('Bye');
    } catch (error) {
        console.log('catch');
        console.log(error);
    }

};

timeout_func()
    .then((response) => { // callback funkcija
        console.log('then');
        console.log(response);
        console.log('Bye');
    })
    .catch(error => {
        console.log('catch');
        console.log(error);
    });

*/
// AJAX 
// XMLHttpRequest

let httpRequest; //= new XMLHttpRequest(); // IE 6 and older httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
// let string = 'test'; // let string = new String();



/*
let makeRequest = () => {
    httpRequest = new XMLHttpRequest();
    if (!httpRequest) {
        return false;
    }
    httpRequest.onreadystatechange = showResult;
    httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/posts/1'); // GET, POST, PUT, PATCH, DELETE - HTTP request methods
    httpRequest.send();
};

let showResult = () => {
    try {
        if (httpRequest.readyState === XMLHttpRequest.DONE) { // status 4
            if (httpRequest.status === 200) {
                console.log(httpRequest.responseText);
            } else {
                console.log('There was a problem with the request.');
            }
        }
    } catch (error) {
        console.log(error.description);
    }
} */

let makeRequest = () => {
    httpRequest = new XMLHttpRequest();
    if (!httpRequest) {
        return false;
    }
    let newPost = {
        userId: 123,
        title: 'My new post',
        body: 'My new post content',
    };
    httpRequest.onreadystatechange = showResult;
    httpRequest.open('POST', 'https://jsonplaceholder.typicode.com/posts'); // GET, POST, PUT, PATCH, DELETE - HTTP request methods
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    httpRequest.send(JSON.stringify(newPost));
};

let showResult = () => {
    try {
        if (httpRequest.readyState === XMLHttpRequest.DONE) { // status 4
            if (httpRequest.status === 201) {
                console.log(httpRequest.responseText);
            } else {
                console.log('There was a problem with the request.');
            }
        }
    } catch (error) {
        console.log(error.description);
    }
};

// fetch 

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => { // promise
        //console.log(response);
        return response.json();
    })
    .then(data => { // data
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });

/* // PUT - mora da se napisat site elementi od objectot bez razlika dali ke se menuvaat site ili samo 1
fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({

            userId: 123,
            title: 'My new post',
            body: 'My new post content',
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => { // promise
        //console.log(response);
        return response.json();
    })
    .then(data => { // data
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
*/

// PATCH - moze da menuva samo 1 nesto vo celiot object

fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({


            title: 'My new post',

        }),
        headers: {
            'Content-Type': 'application/json' // TOKEN ZA PRIVATE ILI PUBLIC - token treba samo za private
        }
    })
    .then(response => { // promise
        //console.log(response);
        return response.json();
    })
    .then(data => { // data
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });

fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE'

    })
    .then(response => { // promise
        //console.log(response);
        return response.json();
    })
    .then(data => { // data
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });