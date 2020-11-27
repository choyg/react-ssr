import { createReactRenderer } from 'react-render-engine';
const express = require('express');

const bootstrap = async () => {
  const app = express();
  await createReactRenderer(app, {
    include: ['**.js'],
    pages: 'dist/pages',
  });
  app.get('/', (req, res) => {
    res.render('hello.js');
  });

  app.listen(3000, () => {
    console.log('Listening on port 3000');
  });
};

bootstrap()
  .then(() => {})
  .catch((err) => console.error(err));
