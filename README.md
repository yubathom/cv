[![Build Status](https://travis-ci.org/yubathom/cv.svg?branch=master)](https://travis-ci.org/yubathom/cv)

My resume :)

I made it creating a vanilla js component system at the `src/` folder. I would like to like to exercise reactivity with dep and watchers functions in vanilla (just for fun and learning) but this site is way too simple to apply theese concepts.

The build process compiles the content from `resume/*.yml`files thanks to [js-yaml](https://github.com/nodeca/js-yaml) and [parcel](https://parceljs.org/).

There are two versions of the content:

* Default portuguese version -> https://yubathom.github.io/cv
* and english -> https://yubathom.github.io/cv/?lang=en

## Setup for development
```
# install dependencies
npm i

# start http://localhost:3000
npm run dev

# build to dist folder
npm run build
```
