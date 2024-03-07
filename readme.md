# Tiny Browser Open

A tiny utility for opening a file or a URL inside a browser of your choosing.

## Install

```sh
npm install --save tiny-browser-open
```

## Usage

```ts
import open from 'tiny-browser-open';

// Open using Chrome

open ( 'https://example.com', { app: 'chrome' } );

// Open using Firefox

open ( 'https://example.com', { app: 'firefox' } );

// Open using Edge

open ( 'https://example.com', { app: 'edge' } );

// Open using Safari

open ( 'https://example.com', { app: 'safari' } );
```

## License

MIT © Fabio Spampinato
