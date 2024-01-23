# Asrı

![Asri](Asri.png)

## Using Asrı
It's very simple,

Every page with `runner.js` loads a script which loads the page locations entry file in `app/`.

Make a class that assigns to the global scope variable named either `Page`, `Main` or `Load`.

Now, you should be able to run!!

```js
window.Main = class Main {

  static PageTitle = 'Main';

  /*
    This class automatically inherits:
      - The entry element,
      - The page pathname,
      - The file location.

    this.entry, this.path, this.entryPath,
  */

  static preload() {

  }

  constructor(entry) {
    entry
  }

}
```
