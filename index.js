const http=require('http')
const fs=require('fs')

const server=http.createServer((req,res)=>{
    const html=fs.readFileSync('./index.html')
    res.end(html)
})
server.listen(8000,()=>{
    console.log('当前服务已经监听到到localhost：8000');
})