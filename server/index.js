/*
import http from 'http';
const host = '127.0.0.1';
const port = 3000;

const server = http.createServer(( request, response ) => {
  response.statusCode = 200;
  response.setHeader( 'Content-Type', 'text/plain' );
  response.end('Mehmet Arda Çelik büyülü sikine hoşgeldin');
})

server.listen( port, host, () => {
  console.log( `server listening on http://${host}:${port}...` )
} )

*/

import express from 'express';
import {aktorler} from './data.js';

const server = express();

server.get('/', (req, res) => {
    res.send('burası all data')
});

server.get('/aktorler', (req, res) => {
  res.status(200 ).json(aktorler);
})

server.get('/aktorler/:id', ( req, res) => {
  const { id } = req.params;
  const aktor = aktorler.find( aktor => aktor.id === Number( id ) );
  aktor ? res.status(200).json( aktor ) : res.status( 404 ).send( 'aradığınız aktör bulunamadı' );
})

server.listen( 4000, () => {
   console.log(  `server listening on http://localhost:5000 ...` );
})

