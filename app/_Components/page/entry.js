window.Main = class Main {

  static PageTitle = 'Main';

  static async preload() {
    return [
      await import('./Page.ac.js')
    ]
  }

  constructor(entry, mods) {

    const { Page } = mods[0]

    let page = new Page(1, entry);
    
  }

}