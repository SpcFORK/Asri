(async _ => {

  let gs_ = await import('./m/GrechaSusha.js')

  let ur_ = new URL(location.href)
  let path = ur_.pathname
  let currTEXT = 'Redirecting'

  // Cool Title Changer
  async function cycleTitle() {
    let ddt_ = t => document.title = t

    ddt_(currTEXT)
    await sleep(100)
    ddt_(`${currTEXT}.`)
    await sleep(100)
    ddt_(`${currTEXT}..`)
    await sleep(100)
    ddt_(`${currTEXT}...`)
  }

  async function redirect(url = '', pth = '') {
    try {
      currTEXT = 'Fetching'
      let poj = await fetch(`${url}/redirect.json`)
      currTEXT = 'Got Fetch'
      let poj_ = await poj.json()

      if ((pth.length > 0) && (pth instanceof String)) {
        let o_ = poj_.find(p => p.path === pth)

        if (o_) {
          poj_ = o_
        }

        else {
          console.warn(`[ERROR] Main Redirect.json not found.`)
          return !!0
        }
      }

      currTEXT = 'Got JSON'

      let goto = (
        (
          poj_['redirect']
          || poj_['redir']
          || poj_['redirectTo']
          || poj_['url']
          || poj_['urlTo']
          || poj_['redirectUrl']
          || poj_['urlRedirect']
          || poj_['nav']
        ) || encodeURI(
          `/app/error?e=`
          + JSON.stringify({
            'message': 'No redirect URL found!',
            'url': url,
          })
        )
      )

      if (goto) {
        document.title = poj_['title'] || 'Redirecting...'
        // await sleep(500)
        location.href = goto
        return !!1
      }

      else {
        console.warn(`[ERROR] No redirect URL found for ${path}`)
      }
    }

    catch {
      console.warn(`[ERROR] Redirect.json not found.`)
      // return !!0
    }

    currTEXT = document.title = 'Failed to redirect: ' + path;

    return !!0
  }

  // ---

  {
    requestAnimationFrame(async _ => {
      for (let i = 0; i < 5; i++) {
        await cycleTitle()
      }
    })

    {
      let res0 = await redirect(`/app`)
      if (!res0) return;

      let res1 = await redirect(`/app/${path}`)
      if (res1) return;

      let res2 = await redirect(`/app/redirects/${path}`)
      if (res2) return;
    }

    console.warn(`[ERROR] No redirect found for ${path}`)
  }

})()