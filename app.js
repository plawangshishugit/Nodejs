const fs = require('fs');
const http = require('http');
const path = require('path');
const os = require('os');
const url = require('url');
const crypto = require('crypto');
const greet = require('./greeting');  
const math = require('./math');
const lodash = require('lodash');

// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) {
//     output.textContent = 'Error reading file: ' + err;
//     return;
//   }
//   console.log('File content:', data);
// });

// const content = "hello i am trying to write a file";
// fs.writeFile('output.txt', content, (err) => {
//   if (err) {
//     console.error('Error writing file:', err);
//     return;
//   }
//   console.log('File written successfully');
// });


// const server = http.createServer((req, res) => {
//   // res.statusCode = 200;
//   // res.setHeader('Content-Typeee', 'text/plain');
//   res.end(' response ends with this message\n');
// });
// server.listen(3000, () => {
//   console.log('Server running at http://localhost:3000/');
// });

// const directory = '/user/local';
// const filePath = path.join(directory, 'example.txt');
// console.log('File path:', filePath);

// console.log('OS platform:', os.platform());
// console.log('OS architecture:', os.arch());
// console.log('OS release:', os.release());
// console.log('OS uptime:', os.uptime());
// console.log('OS total memory:', os.totalmem());
// console.log('OS free memory:', os.freemem());
// console.log('OS hostname:', os.hostname());
// console.log('OS network interfaces:', os.networkInterfaces()); 
// console.log('OS tmpdir:', os.tmpdir());
// console.log('OS EOL:', os.EOL);
// console.log('OS cpus:', os.cpus());
// console.log('OS user info:', os.userInfo());
// console.log('OS constants:', os.constants);
// console.log('OS loadavg:', os.loadavg());
// console.log('OS release:', os.release());
// console.log('OS homedir:', os.homedir());

// const myURL = new URL('https://example.com/path?name=value#about');
// console.log('URL protocol:', myURL.protocol);  
// console.log('URL host:', myURL.host);
// console.log('URL pathname:', myURL.pathname);  
// console.log('URL search params:', myURL.searchParams);
// console.log('Hash:', myURL.hash);  // ye hash html css class wala hash hai

// const hash = crypto.createHash('sha256');
// hash.update('Hello, world!');
// console.log('Hash:', hash.digest('hex'));

// const name = 'Plawang Shishu';
// console.log(greet(name));  

// console.log('Addition:', math.add(5, 3));
// console.log('Subtraction:', math.subtract(5, 3));
// console.log('Multiplication:', math.multiply(5, 3));
// console.log('Division:', math.divide(5, 3));

// const numbers = [1, 2, 3, 4, 5];
// console.log('Original array:', numbers);

// const reversed = lodash.reverse(numbers);
// console.log('Reversed array:', reversed);

const readablestream = fs.createReadStream('example.txt', { encoding: 'utf8' });
readablestream.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});
readablestream.on('end', () => {
  console.log('Stream ended');
});
readablestream.on('error', (err) => {
  console.error('Stream error:', err);
});