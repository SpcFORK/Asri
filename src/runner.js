// Copyright (c) 2023 SpcFORK
var
  blackFG = document.body.appendChild(
    div()
      .id$('blackfg')
      .style$({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        'background-color': 'black',
        zIndex: 999,
      })
      .get$()
  ),
  searchParams = new URLSearchParams(window.location.search);

// ---

var pageLoadedIcon = window.pageLoadedIcon = div()
  .id$(`page-loaded-icon`)
  .style$({
    position: 'fixed',
    bottom: '30px',
    left: '30px',
    width: '50px',
    height: '50px',
    background: 'url(/img/loading.gif)',
    'background-size': 'contain',
    'background-repeat': 'no-repeat',
    'background-position': 'center',
  })

document.body.appendChild(pageLoadedIcon.get$())

document.addEventListener('DOMContentLoaded', async () => {

  var
    entry = document.querySelector('entry'),
    path = location.pathname + (
      (
        !(location.pathname.endsWith('/'))
        && !(/\/\w+\.\w+$/g.test(location.pathname))
      )
        ? '/'
        : ''
    ),
    entryPath = `/app/${path.replace(/(\/$)|[^]($)(?=\1)/, '/entry').replace(/^\//, '')}.js`

  if (!entry) return;

  // ---

  console.warn(`Loading ${entryPath}...`);

  fadeIn(pageLoadedIcon.get$())

  try {
    var r = await import_(entryPath, 'Main');
  }

  catch (e) {
    console.warn(`Failed to Fetch from ${entryPath}!`, r, e);
    return;
  }

  finally {
    console.warn(`Loaded ${entryPath}!!`, r);
  }

  // ---
  // @@ CHUB ROUTER
  {
    let
      ch_susha_loc = `/src/m/susha_chubml.js`,
      ch_susha = await import(ch_susha_loc)
        .catch(e => console.warn(`Failed to Fetch from ${ch_susha_loc}`, e))
  }

  // ---
  // @@ SUSHA to REACT
  {
    let
      susha_rjsx_loc = `/src/m/susha_reactObj.js`,
      susha_rjsx = await import(susha_rjsx_loc)
        .catch(e => console.warn(`Failed to Fetch from ${susha_rjsx_loc}`, e))
  }

  // ---
  // @@ SUBM
  {
    let thirdparty = [
      'adviceSlipAPI',
      'loremGen',
      'qrGen',
      'randomUser',
      'books',
      'chuckNorris',
    ]

    let arrManip = [
      'binSearch',
      'chunkArr',
      'flattenArr',
      'shuffleArr',
      'uniqueArr'
    ]

    let submodules = [
      'debounce',
      'deepclone',
      'default',
      'dropdown',
      'formatDate',
      'getLanguage',
      'isDarkmode',
      'isMobileDevice',
      'levenshteinDistance',
      'mergeObjs',
      'randomInRange',
      'retry',
      'scrollTo',
      'throttle',
      'type',
      'uuid'
    ];

    const
      specImp = (pre, next) => _ => import(`/src/${pre}/${_}${next}`),

      asriFolder = specImp('asri.subm', '.js'),
      threePFolder = specImp('asri.subm/3rdp', '.js'),
      arrayMod = specImp('asri.subm/arrayMod', '.js'),

      mapCycle = (_ = [], fn = () => { }) => _.map(submodule => fn(submodule))

    window.loadExtendLib = _ => Promise.all(
      mapCycle(submodules, asriFolder)
    )

    window.load3pLib = _ => Promise.all(
      mapCycle(thirdparty, threePFolder)
    )

    window.loadArrayModLib = _ => Promise.all(
      mapCycle(arrManip, arrayMod)
    )
  }
  // ---

  let MainClass =
    window?.Main
    || window?.Page
    || window?.Load
    || class _ { };

  if (!(MainClass.prototype instanceof Object)) {
    console.error(`[ERROR] Main class doesn't inherit from Object.`);
    return;
  }

  // ---
  var BaseClass = class extends MainClass { };

  // Add Static Constants
  Object.assign(BaseClass.prototype, {
    entry,
    path,
    entryPath,
  })

  Object.assign(BaseClass, BaseClass.prototype)

  if (BaseClass.PageTitle) document.title = BaseClass.PageTitle;

  // ---

  if (BaseClass.prototype instanceof HTMLElement) {
    let main = new BaseClass(entry);

    entry.appendChild(main);
  }

  let preloadedData;
  if (BaseClass?.preload instanceof Function) {
    preloadedData = await BaseClass.preload(entry);
  }

  let m = new BaseClass(entry, preloadedData);

  // We wait for buffer
  await sleep(500)
  console.warn(`Done ${entryPath}!!`, m, MainClass); // Logs OG CLASS

  // ---

  // Set the Transition
  const amm = 1.5;
  blackFG.style.transition = `opacity ${amm}s ease-in-out`;

  await fadeOut(blackFG, amm);
  await sleep(amm * 1000);
  blackFG.remove();

  await sleep(1e3);
  fadeOut(pageLoadedIcon.get$())
})

// ---

// Dependantless since 2021.