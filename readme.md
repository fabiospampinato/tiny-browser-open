# Tiny Browser Open

A tiny utility for opening a file or a URL inside a browser of your choosing.

## Install

```sh
npm install tiny-browser-open
```

## Usage

```ts
import open from 'tiny-browser-open';

// Open using Chrome

open ( 'https://example.com', { app: 'chrome' } ); // => Promise<boolean>

// Open using Firefox

open ( 'https://example.com', { app: 'firefox' } ); // => Promise<boolean>

// Open using Edge

open ( 'https://example.com', { app: 'edge' } ); // => Promise<boolean>

// Open using Safari

open ( 'https://example.com', { app: 'safari' } ); // => Promise<boolean>
```

## License

MIT © Fabio Spampinato
