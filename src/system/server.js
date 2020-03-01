require('babel-register')({
    ignore: [ /(node_modules)/ ],
    presets: ['es2015', 'env', 'react-app'],
    plugins: [
        'syntax-dynamic-import',
        'dynamic-import-node',
        'react-loadable/babel',
    ]
});

import path from 'path';
import fs from 'fs';
import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.static('../../../build'));

app.get('/*', (req, res) => {
  	const indexFile = 'build/index.html';
 	fs.readFile(indexFile, 'utf8', (err, data) => {
    	if (err) return res.status(500).send('Oops, better luck next time!');
    	return res.send(
			data.replace('<div id="root"></div>', `<div id="root">React APP SSR</div>`) 
				.replace('<title>', `<title>React APP SSR</title>`) 
		);
  	});
});

app.listen(PORT, () => {
  	console.log(` 😎 Server is listening on port ${PORT}`);
});	