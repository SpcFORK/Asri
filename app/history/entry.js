window.Main = class Main {

  static PageTitle = 'Main';

  static async preload() {

  }

  static vv = visualViewport

  static centerStyle = {
    position: 'absolute',
    top: `${this.vv.height / 2}px`,
    left: `${this.vv.width / 2}px`,
    transform: 'translate(-50%, -50%)',
  }

  makeA(url, text) {
    return a().html$(text).att$('href', url)
  }

  makeAforLU(url, text) {
    return this.makeA(`/history/${url}`, text)
  }

  links = div(
    h1('History'),
    this.makeAforLU('lastupdates', 'Last Updates'),
  )
    .style$({
      display: 'flex',
      'flex-direction': 'column',
      'align-items': 'center',
      'justify-content': 'center',
      'gap': '1rem',
      'flex-wrap': 'wrap',
    })

  container = div(
    this.links
  )

    .style$({
      ...Main.centerStyle,

      transform: 'translate(-50%, -65%)',
    })
    .get$()

  constructor(entry) {
    entry.append(this.container)
  }

}