// Example using HTTP POST operation

var page = require('webpage').create(),
    server = 'https://jsonplaceholder.typicode.com/posts',
    data = '{"userName": "expanding", "answer": 42}';

var headers = {
    "Content-Type": "application/json",
    "X-PLATFORM": "pc",
    "X-APP-VERSION": "1.0"
}

page.open(server, 'post', data, headers, function (status) {
    if (status !== 'success') {
        console.log('Unable to post!');
    } else {
        console.log(JSON.stringify(page.plainText))
        console.log(page.content);
    }
    phantom.exit();
});
