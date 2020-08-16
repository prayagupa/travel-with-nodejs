const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
 
app.get('/', function(req, res) {
res.sendFile(path.join(__dirname + '/index.html'))
})
 
app.get('/video', function(req, res) {
	console.log("video request");
	const vodeo_path = 'assets/ad.mp4'
	const stat = fs.statSync(video_path)
	const fileSize = stat.size
	const range = req.headers.range

	console.log(stat);
	if (range) {
		const parts = range.replace(/bytes=/, "").split("-")
		const start = parseInt(parts[0], 10)
		const end = parts[1] ? parseInt(parts[1], 10) : fileSize-1
 
		const chunksize = (end-start)+1
		const file = fs.createReadStream(path, {start, end})
		const head = {
			'Content-Range': `bytes ${start}-${end}/${fileSize}`,
			'Accept-Ranges': 'bytes',
			'Content-Length': chunksize,
			'Content-Type': 'video/mp4',
		}
 
		res.writeHead(206, head)
		file.pipe(res)
	} else {
		const head = {
			'Content-Length': fileSize,
			'Content-Type': 'video/mp4',
		}
		res.writeHead(200, head)
		fs.createReadStream(video_path).pipe(res)
	}
})
 
app.listen(3000, function () {
    console.log('streaming app is running on port 3000')
})
