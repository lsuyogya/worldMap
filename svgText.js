const mapCountries = {
  DZ: 'Algeria',
  AO: 'Angola',
  BJ: 'Benin',
  BW: 'Botswana',
  BF: 'Burkina Faso',
  BI: 'Burundi',
  CM: 'Cameroon',
  CV: 'Cape Verde',
  CF: 'Central \n African \n Republic',
  TD: 'Chad',
  KM: 'Comoros',
  CG: 'Congo',
  CI: "Cote \n d'Ivoire",
  CD: 'Democratic \n Republic \n of Congo',
  DJ: 'Djibouti',
  EG: 'Egypt',
  GQ: 'Equatorial Guinea',
  ER: 'Eritrea',
  SZ: 'Eswatini (Swaziland)',
  ET: 'Ethiopia',
  GA: 'Gabon',
  GM: 'Gambia',
  GH: 'Ghana',
  GN: 'Guinea',
  GW: 'Guinea-Bissau',
  KE: 'Kenya',
  LS: 'Lesotho',
  LR: 'Liberia',
  LY: 'Libya',
  MG: 'Madagascar',
  MW: 'Malawi',
  ML: 'Mali',
  MR: 'Mauritania',
  MU: 'Mauritius',
  YT: 'Mayotte',
  MA: 'Morocco',
  MZ: 'Mozambique',
  NA: 'Namibia',
  NE: 'Niger',
  NG: 'Nigeria',
  RE: 'Réunion',
  RW: 'Rwanda',
  SH: 'Saint Helena',
  ST: 'São Tomé and Príncipe',
  SN: 'Senegal',
  SC: 'Seychelles',
  SL: 'Sierra Leone',
  SO: 'Somalia',
  ZA: 'South Africa',
  SS: 'South Sudan',
  SD: 'Sudan',
  TZ: 'United Republic \n of Tanzania',
  TG: 'Togo',
  TN: 'Tunisia',
  UG: 'Uganda',
  ZM: 'Zambia',
  ZW: 'Zimbabwe',
  SA: 'Kingdom \n of Saudi \n Arabia',
  QA: 'Qatar',
  AE: 'United \n Arab \n Emirates',
  IL: 'Israel',
  PS: 'Palestine',
  JO: 'Jordan',
  LB: 'Lebanon',
  SY: 'Syria',
  IQ: 'Iraq',
  OM: 'Oman',
  YE: 'Yemen',
  KW: 'Kuwait',
};
const values = {
  AE: { pr: 'Head Branch', list: ['item 1', 'item 2', 'item 3'] }, // United Arab Emirates
  QA: { pr: 'Services', list: ['item 1', 'item 2', 'item 3'] }, //Quatar
  MA: { pr: 'Regional Branch', list: ['item 1', 'item 2', 'item 3'] }, // Morocco
  ML: { pr: 'Services', list: ['item 1', 'item 2', 'item 3'] }, // Mali
  GN: { pr: 'Services', list: ['item 1', 'item 2', 'item 3'] }, // Guinea
  CI: { pr: 'Regional Branch', list: ['item 1', 'item 2', 'item 3'] }, // Côte d'Ivoire
  GH: { pr: 'Services', list: ['item 1', 'item 2', 'item 3'] }, // Ghana
  TG: { pr: 'Services', list: ['item 1', 'item 2', 'item 3'] }, // Togo
  BJ: { pr: 'Services', list: ['item 1', 'item 2', 'item 3'] }, // Benin
  NG: { pr: 'Services', list: ['item 1', 'item 2', 'item 3'] }, // Nigeria
  CM: { pr: 'Services', list: ['item 1', 'item 2', 'item 3'] }, // Cameroon
  ET: { pr: 'Services', list: ['item 1', 'item 2', 'item 3'] }, // Ethiopia
  SO: { pr: 'Services', list: ['item 1', 'item 2', 'item 3'] }, // Somalia
  KE: { pr: 'Regional Branch', list: ['item 1', 'item 2', 'item 3'] }, // Kenya
  UG: { pr: 'Services', list: ['item 1', 'item 2', 'item 3'] }, // Uganda
  CD: { pr: 'Services', list: ['item 1', 'item 2', 'item 3'] }, // Democratic Republic of Congo
  TZ: { pr: 'Services', list: ['item 1', 'item 2', 'item 3'] }, // Tanzania
  MZ: { pr: 'Services', list: ['item 1', 'item 2', 'item 3'] }, // Mozambique
  ZW: { pr: 'Services', list: ['item 1', 'item 2', 'item 3'] }, // Zimbabwe
  ZA: { pr: 'Regional Branch', list: ['item 1', 'item 2', 'item 3'] }, // South Africa
  SA: { pr: 'Regional Branch', list: ['item 1', 'item 2', 'item 3'] }, // Kingdom of Saudi Arabia
};
const styles = {
  AE: {
    text: ['transform: translate(6px, -10px)', 'max-width: 20ch'],
    locator: ['transform: translate(2px, 2px)'],
  }, // United Arab Emirates
  QA: {
    text: ['transform: translate(-16px, -10px)', 'font-size:10'],
    locator: ['transform: translate(0, -2px)'],
  }, //Quatar
  SA: {
    text: ['transform: translate(-25px, -5px)', 'font-size: 10'],
    locator: ['transform: translate(-5px, 30px)'],
  }, // Kingdom of Saudi Arabia
  ET: {
    text: ['transform: translate(-30px, -5px)', 'font-size: 10'],
    locator: ['transform: translate(-5px, 6px)'],
  }, // Ethiopia
  KE: {
    text: ['transform: translate(-10px, -5px)'],
    locator: ['transform: translate(3px, 6px)'],
  }, // Kenya
  UG: {
    text: [
      'transform: translate(0, -56px)',
      'writing-mode: vertical-lr',
      'text-orientation: upright',
      'font-size: 8',
    ],
    locator: ['transform: translate(1px, 3px)'],
  }, // Uganda
  CD: {
    text: ['transform: translate(-18px, -20px)', 'font-size: 10'],
    locator: ['transform: translate(15px, 16px)'],
  }, // Democratic Republic of Congo
  TZ: {
    text: ['transform: translate(-15px, 0)', 'font-size: 10'],
    locator: ['transform: translate(14px, 23px)'],
  }, // Tanzania
  CI: {
    text: ['transform: translate(-10px, 15px)', 'font-size:10'],
    locator: [],
  }, // Côte d'Ivoire
  GH: {
    text: [
      'transform: translate(0, -40px)',
      'writing-mode: vertical-lr',
      'text-orientation: upright',
      'font-size: 8',
    ],
    locator: ['transform: translate(0, 10px)'],
  }, // Ghana
  TG: {
    text: [
      'transform: translate(0, -20px)',
      'writing-mode: vertical-lr',
      'text-orientation: upright',
      'font-size: 6',
    ],
    locator: ['transform: translate(0, 10px)'],
  }, // Togo
  BJ: {
    text: [
      'transform: translate(0, -20px)',
      'writing-mode: vertical-lr',
      'text-orientation: upright',
      'font-size: 6',
    ],
    locator: ['transform: translate(0, 15px)'],
  }, // Benin
  NG: {
    text: ['transform: translate(-20px, 0px)', 'font-size: 10'],
    locator: ['transform: translate(0px, 8px)'],
  }, // Nigeria
  CM: {
    text: ['transform: translate(-20px, 12px)', 'font-size: 10'],
    locator: ['transform: translate(0, 20px)'],
  }, // Cameroon
  GN: {
    text: ['transform: translate(-20px, 6px)', 'font-size: 10'],
    locator: ['transform: translate(0, -6px)'],
  }, // Guinea
  MA: {
    text: ['transform: translate(-5px, -30px)'],
    locator: ['transform: translate(20px, -20px)'],
  }, // Morocco
  ML: { text: [], locator: ['transform: translate(18px, 10px)'] }, // Mali
  SO: { text: [], locator: ['transform: translate(6px, 6px)'] }, // Somalia
  MZ: {
    text: ['transform: translate(-10px, -20px)', 'font-size: 10'],
    locator: ['transform: translate(10px, -11px)'],
  }, // Mozambique
  ZW: {
    text: ['transform: translate(-30px, -6px)', 'font-size: 10'],
    locator: ['transform: translate(0, 3px)'],
  }, // Zimbabwe
  ZA: {
    text: ['transform: translate(-40px, 12)'],
    locator: ['transform: translate(2px, 22px)'],
  }, // South Africa
};
const svgNS = 'http://www.w3.org/2000/svg';

document.addEventListener('DOMContentLoaded', () => {
  const svgMap = document.getElementById('svgMap');
  const paths = svgMap.querySelectorAll('path');
  // Get tooltip elements
  const tooltip = document.getElementById('countryTooltip');
  const tooltipCountryName = document.getElementById('tooltip-country-name');
  const tooltipDataList = document.getElementById('tooltip-data-list');

  paths.forEach((path) => {
    const countryCode = path.dataset.id;

    // Add classes based on presence type
    const presence = values[countryCode]?.pr;
    const text = document.createElementNS(svgNS, 'text');
    if (presence) {
      path.classList.add('hasData');
      let locator = createDefaultLocator();
      if (presence === 'Regional Branch') {
        path.classList.add('regional');
        locator = createRegionalLocator();
      }
      if (presence === 'Head Branch') {
        path.classList.add('head');
        locator = createHeadLocator();
      }

      // --- Add text label for countries with values ---

      // Calculate bounding box
      const bbox = path.getBBox();

      // Create a <text> element

      const pathCenter = {
        x: bbox.x + bbox.width / 2,
        y: bbox.y + bbox.height / 2,
      };
      text.setAttribute('x', pathCenter.x);
      text.setAttribute('y', pathCenter.y);
      locator.setAttribute('cx', pathCenter.x);
      locator.setAttribute('cy', pathCenter.y);
      text.setAttribute('text-anchor', 'left');
      text.setAttribute('dominant-baseline', 'middle');
      text.setAttribute('font-size', '12');
      text.setAttribute('data-id', countryCode);
      locator.setAttribute('data-id', countryCode);
      locator.classList.add('locator');

      styles[path.dataset.id]?.text?.forEach((style) => {
        const [prop, value] = style.split(':').map((s) => s.trim());
        text.style.setProperty(prop, value);
        if (prop === 'font-size') {
          text.style.setProperty('--incresaedFont', `${value * 1.2}px`);
        }
      });
      styles[path.dataset.id]?.locator?.forEach((style) => {
        const [prop, value] = style.split(':').map((s) => s.trim());
        locator.style.setProperty(prop, value);
      });

      // --- Corrected part: Use <tspan> and adjust 'dy' ---
      mapCountries[countryCode].split('\n').forEach((s, index) => {
        const tspan = document.createElementNS(svgNS, 'tspan');
        tspan.textContent = s.trim();

        // For subsequent lines, add a 'dy' attribute to move them down
        if (index > 0) {
          tspan.setAttribute('x', pathCenter.x); // Keep centered horizontally
          tspan.setAttribute('dy', '1.2em'); // Move down by 1.2 ems (adjust as needed)
        }
        text.append(tspan);
      });

      // Append text to the same parent SVG
      svgMap.querySelector('g').appendChild(text);
      svgMap.querySelector('g').appendChild(locator);
    }

    // --- Tooltip Event Listeners ---
    path.addEventListener('mousemove', (e) => {
      const countryCode = path.dataset.id; // Or path.dataset.id
      const countryName = mapCountries[countryCode];
      const countryData = values[countryCode]; // Get the data for the specific country

      if (countryData) {
        // Only show tooltip if data exists for this country
        tooltipCountryName.textContent = countryName;
        tooltipDataList.innerHTML = '';

        // Add additional list if available
        if (countryData.list && Array.isArray(countryData.list)) {
          countryData.list.forEach((detail) => {
            const detailLi = document.createElement('li');
            detailLi.textContent = detail;
            tooltipDataList.appendChild(detailLi);
          });
        }

        // Position the tooltip
        // Use e.pageX, e.pageY for mouse position relative to document
        // Add some offset to prevent tooltip from covering the cursor
        let tooltipX = e.pageX + 15;
        let tooltipY = e.pageY + 15;

        // Adjust position if it goes off-screen to the right or bottom
        const tooltipRect = tooltip.getBoundingClientRect();
        const svgMapRect = svgMap.getBoundingClientRect();
        if (tooltipX + tooltipRect.width > svgMapRect.width) {
          tooltipX = e.pageX - tooltipRect.width - 15;
        }
        if (tooltipY + tooltipRect.height > svgMapRect.height) {
          tooltipY = e.pageY - tooltipRect.height - 15;
        }

        tooltip.style.left = `${tooltipX}px`;
        tooltip.style.top = `${tooltipY}px`;
        tooltip.classList.add('visible');
        text.classList.add('hover');
      } else {
        // If no data, ensure tooltip is hidden
        tooltip.classList.remove('visible');
        text.classList.remove('hover');
      }
    });

    path.addEventListener('mouseout', () => {
      tooltip.classList.remove('visible');
      text.classList.remove('hover');
    });
  });
});

function createDefaultLocator() {
  const defaultLocator = document.createElementNS(svgNS, 'circle');
  defaultLocator.setAttribute('cx', '50');
  defaultLocator.setAttribute('cy', '50');
  defaultLocator.setAttribute('r', '2');
  defaultLocator.setAttribute('stroke', 'black');
  defaultLocator.setAttribute('stroke-width', '0');
  defaultLocator.setAttribute('fill', 'white');
  return defaultLocator;
}
function createHeadLocator() {
  const defaultLocator = document.createElementNS(svgNS, 'circle');
  defaultLocator.setAttribute('cx', '50');
  defaultLocator.setAttribute('cy', '50');
  defaultLocator.setAttribute('r', '4');
  defaultLocator.setAttribute('stroke', 'white');
  defaultLocator.setAttribute('stroke-width', '1');
  defaultLocator.setAttribute('fill', '#00675f');
  return defaultLocator;
}
function createRegionalLocator() {
  const defaultLocator = document.createElementNS(svgNS, 'circle');
  defaultLocator.setAttribute('cx', '50');
  defaultLocator.setAttribute('cy', '50');
  defaultLocator.setAttribute('r', '2');
  defaultLocator.setAttribute('stroke', 'black');
  defaultLocator.setAttribute('stroke-width', '0');
  defaultLocator.setAttribute('fill', 'red');
  return defaultLocator;
}
