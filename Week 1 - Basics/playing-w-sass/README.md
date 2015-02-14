# Explore Sass
### Automate Sass compiling

> If you want to explore Sass vs css (which I recommend you do), here's a
> gulp setup to automate sass compiling on file save.

## Getting Started
#### Install stuff if you don't already have them.

### Homebrew (mac)
- http://brew.sh/

### Node.js
- Mac: `brew install node`
- Windows: http://nodejs.org/download/

### Bower
- Mac: `sudo npm install -g bower`
- Windows: https://www.npmjs.com/package/bower

### Gulp
- `npm install --global gulp`

## Usage
#### Yay sass time

1. Run `npm install`, you might have to run `sudo npm install` if you're on mac
2. In your terminal `cd` into your project folder
3. Run `gulp` in terminal
4. Should be ready now. Go to your browser and go to `http://localhost:8000`

```
You'll get an error beep notification from your terminal and a beep whenever your compilation fails. I also included a pretty print of the error and where you can find it for your convenience. It'll show in your terminal.

If the compile is successful you'll get a notificaiton saying it succeeded. If you don't want this notification, go into `./gulpfile.js` and remove lines 51-53 (add a semicolon to the end of line 50 `.pipe(gulp.dest('./public/css'));`):

.pipe(notify({
    message: 'Successfully compiled sass.'
}));
```

- For simplicity, add all your styles/scss into `./assets/sass/base.scss`.
- If you do create new scss files, make sure you add them to `./assets/sass/application.scss`. You should be able to figure out how to import from the imports already in `application.scss`
- Put your HTML stuff in `./public/index.html`
- If you create more HTML pages/files, make sure you import the css file. `<link rel="stylesheet" type="text/css" href="css/style.min.css">` Example in `./public/index.html`

```
One caveat of this set up is that you only have 1 css file. Your styles sit in `./public/css/`. So if you have more than 1 page, make sure you set page wrappper or container classes. I can explain this better if you don't get it.

This is a little weird right now but when we start doing SPA and javascript stuff it'll make more sense.
```

