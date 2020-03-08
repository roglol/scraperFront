const next = require('next')
const express = require('express')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const fs = require('fs');
const Api = express.Router()
const bodyParser = require('body-parser');
const handle = app.getRequestHandler()
const ytdl = require('ytdl-core');
const Downloader = require('./download');
var dl = new Downloader();

const translations = {
  'geo':{
    'soap':'საპონი'
  },
   'rus':{
     'soap':'saponirusulad'
   },
   'eng':{
     'soap':'saponiinglisurad'
   }
}

app.prepare()
 .then(() => {
     const server = express() 
     server.use('/api',Api)
     Api.use(bodyParser.json()) 
     Api.use(bodyParser.urlencoded({extended:true}))
     Api.post('/lang',(req,res)=>{
       const lang = req.body.lang
       const trans = translations[lang]
       res.send({trans,lang})
     })
     Api.post('/download', (req,res) => {
       var id = req.body.id;
      // var URL = req.body.url;
  //     res.header('Content-Disposition', 'attachment; filename="video.mp4"');
  //     ytdl(URL, {
  //       format: 'mp4'
  //       })
  // .pipe(fs.createWriteStream('audio.mp3'));
  dl.getMP3({videoId: id, name: "Cold Funk - Funkorama.mp3"}, function(err,res){
    i++;
    if(err)
        throw err;
    else{
        console.log("Song "+ i + " was downloaded: " + res.file);
    }
});
  })
     server.get("/blog", (req,res) =>{app.render(req, res, `/blog/blog`);})
     server.get('*', (req,res) =>{
         return handle(req,res)
     })

  server.listen(3000, err => {
    if (err) {
      throw err
    }

    console.log(`> Ready on http://localhost:${3000}`)
  })
})