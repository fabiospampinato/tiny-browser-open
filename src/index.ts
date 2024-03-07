
/* IMPORT */

import process from 'node:process';
import open from 'tiny-open';
import type {Browser, Options} from './types';

/* HELPERS */

const CHROME_APPS = {
  darwin: 'google chrome',
  linux: 'google-chrome',
  win32: 'chrome'
};

const FIREFOX_APPS = {
  darwin: 'firefox',
  linux: 'firefox',
  win32: 'C:\\Program Files\\Mozilla Firefox\\firefox.exe'
};

const EDGE_APPS = {
  darwin: 'microsoft edge',
  linux: 'microsoft-edge',
  win32: 'msedge'
};

const SAFARI_APPS = {
  darwin: 'safari'
};

const APPS = {
  chrome: CHROME_APPS,
  firefox: FIREFOX_APPS,
  edge: EDGE_APPS,
  safari: SAFARI_APPS
};

/* MAIN */

//TODO: Add some introspection/error handling
//TODO: Add support for other possible variants of these browsers, opening up the first one available

const browserOpen = ( url: string, options?: Options ): void => {

  const app = APPS[options?.app || '']?.[process.platform];

  open ( url, { app } );

};

/* EXPORT */

export default browserOpen;
export type {Browser, Options};
