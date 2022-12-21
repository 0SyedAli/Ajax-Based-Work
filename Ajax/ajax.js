console.log('hi')

function btnHandler() {
    console.log('Hi everyone')
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create',true);
    xhr.getResponseHeader('Content-type', 'application/json')

    xhr.onprogress = function() {
        console.log('Processing')
    }
    xhr.onload = function() {
        // console.log(this.responseText)
        
        if (this.status === 200) {
        console.log(this.responseText)
        }
        else {
            console.error('error found')
        }
    }
    params = '{"name":"test","salary":"123","age":"23"}'
    xhr.send(params);
}

function popHandler() {
    const xhr = new XMLHttpRequest();
    console.log('you click pop btn..');
    
    xhr.open('GET', 'https://dummyjson.com/products' ,true)
    xhr.onload = function() {
        if (this.status === 200) {
        let obj = JSON.parse(this.responseText)
        console.log(obj);
        let list = document.getElementById('list');
        str = '';
        for (key in obj) {
            str += `<li>${obj[key]}</li>`;
        }
        list.innerHTML = str;
        }
        else {
            console.error('error found')
        }
    }
    xhr.send();
}
