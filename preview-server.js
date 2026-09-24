const http = require('http');
const fs = require('fs');
const path = require('path');
const root = process.cwd();
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json'};
http.createServer((req,res)=>{
  const requestPath = decodeURIComponent(req.url.split('?')[0]);
  const relative = requestPath === '/' ? '/index.html' : requestPath;
  const file = path.join(root, relative);
  if (!file.startsWith(root) || !fs.existsSync(file)) { res.writeHead(404); res.end('Not found'); return; }
  res.writeHead(200, {'Content-Type': types[path.extname(file)] || 'application/octet-stream'});
  fs.createReadStream(file).pipe(res);
}).listen(4173,'127.0.0.1',()=>console.log('VetorTécnica preview: http://127.0.0.1:4173'));
