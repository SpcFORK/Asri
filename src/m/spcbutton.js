/** ADVANCED SPC Replit BUTTON
 * Copyright (c) 2023 SpcCOW "Spcfork". All Rights Reserved.
 * Licensed under the MIT License.
 *
 * This script adds a badge to your repl when seen in full-browser view
 * You can caption it in any way you like.
 */

(window.makeReplitBadge = function replitBadge(
  theme = '', position = '',
  caption = '', url = '',
  extraCSS = '', addSel = '', /* .<..> | #<..> */

  nobadge = '', // When true, the badge will not be added, but the function will.
) {
  // Suppress badge in ReplView
  if (window.location.hostname.split('.')[1] === 'id') {
    return;
  }

  if (nobadge) {
    return replitBadge;
  }

  // define positions
  // helps reduce polluting css classes
  const offset = '1.5rem';
  const validPositions = {
    'top-left': { top: offset, left: offset },
    'top-right': { top: offset, right: offset },
    'bottom-left': { bottom: offset, left: offset },
    'bottom-right': { bottom: offset, right: offset },
  };

  // ensure positions are valid
  if (!validPositions.hasOwnProperty(position)) {
    console.warn(
      `${position} is not a valid position, defaulting to bottom-left`,
    );
    position = 'bottom-left';
  }

  // create modifiable params
  const params = new URLSearchParams();
  params.append('theme', theme);
  if (typeof caption === 'string' && caption.length > 0) {
    params.append('caption', caption);
  }

  // create link & styles
  const badgeAnchor = document.createElement('a');
  badgeAnchor.setAttribute('data-nohyd', true);

  Object.assign(badgeAnchor, {
    target: '_blank',
    href: url,
  });

  // create badge image & styles
  const badgeImage = document.createElement('img');
  badgeImage.src = `https://replit.com/badge?${params.toString()}`;
  badgeImage.id = 'replitBadge';
  Object.assign(badgeImage.style, validPositions[position]);

  if (addSel.trim().startsWith('.')) {
    badgeImage.classList.add(addSel.trim().substring(1));
  } else if (addSel.trim().startsWith('#')) {
    badgeImage.id = addSel.trim().substring(1);
  }

  // inject styles
  document.head.insertAdjacentHTML(
    'beforeend',
    `
    <style>
      #replitBadge {
        position: fixed;
        cursor: pointer;
        z-index: 100;
        transition: transform 100ms ease-in-out;
      }

      #replitBadge:hover {
        transform: scale(1.05);
      }
    </style>

    <style>
      ${extraCSS}
    </style>
  `,
  );

  // append badge to page
  badgeAnchor.appendChild(badgeImage);
  document.body.appendChild(badgeAnchor);

  return replitBadge;
})(
  document.currentScript.getAttribute('theme') || 'dark',
  document.currentScript.getAttribute('position') || 'bottom-left',
  document.currentScript.getAttribute('caption') || 'Built with Replit.',
  document.currentScript.getAttribute('url') || '/__repl?utm_medium=webview_badge',
  document.currentScript.getAttribute('extra-css') || '',
  document.currentScript.getAttribute('selector') || '',
  document.currentScript.getAttribute('nobadge') || '',
);