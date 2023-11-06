import express from 'express';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import App from './App';
import theme from './theme';
import createEmotionCache from './createEmotionCache';

// Inject the initial component HTML and CSS into a template to be rendered on the client-side.
function renderFullPage(html, css) {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>My page</title>
        ${css}
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
  `;
}

//Creating a new Emotion cache instance and using this to extract the critical styles for the html as well.
//We will see how this is passed along in the renderFullPage function.

function handleRender(req, res) {
    const cache = createEmotionCache();
    const { extractCriticalToChunks, constructStyleTagsFromChunks } =
      createEmotionServer(cache);
  
    // Render the component to a string.
    const html = ReactDOMServer.renderToString(
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline
              to build upon. */}
          <CssBaseline />
          <App />
        </ThemeProvider>
      </CacheProvider>,
      );

      // Grab the CSS from emotion
      const emotionChunks = extractCriticalToChunks(html);
      const emotionCss = constructStyleTagsFromChunks(emotionChunks);
    
      // Send the rendered page back to the client.
      res.send(renderFullPage(html, emotionCss));
}

const app = express();

app.use('/build', express.static('build'));

// This is fired every time the server-side receives a request.
app.use(handleRender);

const port = 3000;
app.listen(port);
