window.Main = class Main {

  /*
    This class automatically inherits:
      - The entry element,
      - The page pathname,
      - The file location.

    this.entry, this.path, this.entryPath,
  */

  static magicI = 'ı'
  static name = `Asr${Main.magicI}`
  static version = '0.0.3 - The Normal update'

  static PageTitle = Main.name

  static async preload() {
    pageLoadedIcon.style$({
      'border-radius': '25%',
    })
  }

  static vv = visualViewport

  static centerStyle = {
    position: 'absolute',
    top: `${this.vv.height / 2}px`,
    left: `${this.vv.width / 2}px`,
    transform: 'translate(-50%, -50%)',
  }

  // ---

  static arrStr = (...arr) => arr.join('<br />')

  title = h1(`Asr${Main.magicI}`)
    .style$({
      fontSize: '3rem',
      color: 'white',
      textAlign: 'center',
      // margin: '0',

      // Orange to white Text shadow
      textShadow: '0 0 10px #db750080, 0 0 20px #db750075, 0 0 30px #db750070',
      color: '#db7500'
    })

  small = small(`v${Main.version}`);

  artTitle = h2('Stack Altogether');
  art1Text = p()
    .html$(Main.arrStr(
      'Welcome to Asri,',

      'A starter for simple SpcFORKit websites.',
      'It is a simple, yet powerful,',
      '',
      'And our beta version is stable & ready to use in prod.',
    ));

  art1 = article(
    this.artTitle,
    this.art1Text
  );

  srcButton = button('Source Code')
    .att$('onclick', ' window.open("https://github.com/SpcFORK/Asri") ')
    .att$('type', 'button')
    .html$('Source Code')

  fileButton = button('File')
    .att$('onclick', ` window.open("src/m/GrechaSusha.js", window.location) `)
    .att$('type', 'button')
    .html$('File')
    .style$({
      'background-color': '#aaa3',
    })

  buttonBar = div(
    
    this.srcButton,
    this.fileButton
    
  ).style$({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',
  })

  struct1 = div(
    section(
      this.title,
      hr(),

      this.small,
      hr(),

      this.art1,
      hr(),

      this.buttonBar,
    ).style$({
      ...Main.centerStyle,
      fontSize: '1em',
      transform: 'translate(-50%, -65%)',
    }),
  )

  struct2 = div(
    section(

      h1('What is Asri?')

    ).style$({
      ...Main.centerStyle,
      fontSize: '1em',
      transform: 'translate(-50%, -65%)',
      top: '150%'
    })
  )

  // ---

  footer = tag(
    'footer',
    small(`Made with ❤️ by SpcFORK - ${Main.name} v${Main.version} - Copyright © ${new Date().getFullYear()}`),
  ).style$({
    ...Main.centerStyle,
    fontSize: '1em',
    transform: 'translate(-50%, -65%)',
    top: '200%',
    padding: '1rem',
  })

  // ---

  constructor(entry) {
    entry.append(
      this.struct1.get$(),
      this.struct2.get$(),
      this.footer.get$()
    )
  }

}