const { exec } = require('child_process');
const http = require('http');

http.createServer((req, res) => {
    if (req.method === 'POST') {
        console.log('GitHub frissítés érkezett!');
        exec('./deploy.sh', (err, stdout, stderr) => {
            console.log(stdout);
            if (err) console.error(err);
        });
        res.writeHead(200);
        res.end('Szerver frissitve!');
    }
}).listen(9000);
console.log('Webhook figyeli a 9000-es portot...');
