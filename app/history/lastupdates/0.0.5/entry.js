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
  static version = '0.0.5 - The Lib Update'

  static PageTitle = Main.name

  static async preload() {
    pageLoadedIcon.style$({
      'border-radius': '25%',
    })

    return {
      a: await loadExtendLib()
    }
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

      '',

      'A starter for simple SpcFORKit websites.',
      'It is a simple, yet powerful,',

      '',

      div(
        hr(),
        h2(`v${Main.version}`),
        hr()
      ).outerHTML,

      'This update, we have added:',

      ul(
        li('A new, simple, and easy to use MJS support bridge.'),
        li('A complex Extended Susha-Subm Library'),
        // li(
        //   'Page Redirect Clientware JSONS.',
        //   br(),
        //   br(),

        //   code().html$(Main.arrStr(
        //     "  Now Asri pages/scripts can just import this,",
        //     "  and it will call this routine; then it will just redirect,",
        //     "  best for pages with a slight error in the pathname and needs quick fix"
        //   ))
        // )
      ).outerHTML,

      i('Be on the lookout for more ', b('frequent'), ' updates in the future.').outerHTML,

      '',
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
    .att$('onclick', ` window.open("/src/m/GrechaSusha.js", window.location) `)
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

      h1('What is Asri?'),
      hr(),

      h3('A simple solution.'),

      pre('Asri allows for users to make pages quickly and dynamically, \nwhile keeping the codebase small and simple.'),

      hr(),

      h3('How?'),
      pre('The libraries featured in Asri allow for the user to create \npages quickly and dynamically, while keeping the codebase small and simple.'),

      hr(),
      p(b('To do this; we leverage')),

      ul(
        li('ChubML'),
        li('Grecha Susha'),
        li('Asri Runner')
      ),

      hr(),

      h3('More'),

      pre('To learn more about Asri outside of this page, check out our'),

      ul(
        li(
          a(b('GITHUB'))
            .att$('target', '_blank')
            .att$('href', 'https://github.com/SpcFORK/Asri')
        ),

        li(
          a(b('DISCORD'))
            .att$('target', '_blank')
            .att$('href', 'https://discord.gg/' + atob('QmZ4S1Z2c2E4VQ=='))
        ),
      ),

      pre('Or, read the source code!')

    ).style$({
      ...Main.centerStyle,
      fontSize: '1em',
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
      router({
        '/': () => div(
          this.struct1.get$().cloneNode(true),
          this.struct2.get$().cloneNode(true),
          this.footer.get$().cloneNode(true)
        ),

        '/docs': () => div(
          h1('Docs'),
          hr(),
          pre('Coming soon, check back on this later!\n\n- SpcFORK'),
          this.footer
            .style$({
              top: '97%',
            })
            .get$()
            .cloneNode(true)
        ),
      })
    )
  }

}