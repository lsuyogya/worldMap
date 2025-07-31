const mapCountries = {
  DZ: 'Algeria',
  AO: 'Angola',
  BJ: 'Benin',
  BW: 'Botswana',
  BF: 'Burkina Faso',
  BI: 'Burundi',
  CM: 'Cameroon',
  CV: 'Cape Verde',
  CF: 'Central African Republic',
  TD: 'Chad',
  KM: 'Comoros',
  CG: 'Congo',
  CI: "Cote d'Ivoire",
  CD: 'Democratic Republic of Congo',
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
  TZ: 'United Republic of Tanzania',
  TG: 'Togo',
  TN: 'Tunisia',
  UG: 'Uganda',
  ZM: 'Zambia',
  ZW: 'Zimbabwe',
  SA: 'Kingdom of Saudi Arabia',
  QA: 'Qatar',
  AE: 'United Arab Emirates',
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
  AE: { pr: 'Head Branch' }, // United Arab Emirates
  QA: { pr: 'Services' }, //Quatar
  MA: { pr: 'Regional Branch' }, // Morocco
  ML: { pr: 'Services' }, // Mali
  GN: { pr: 'Services' }, // Guinea
  CI: { pr: 'Regional Branch' }, // Côte d'Ivoire
  GH: { pr: 'Services' }, // Ghana
  TG: { pr: 'Services' }, // Togo
  BJ: { pr: 'Services' }, // Benin
  NG: { pr: 'Services' }, // Nigeria
  CM: { pr: 'Services' }, // Cameroon
  ET: { pr: 'Services' }, // Ethiopia
  SO: { pr: 'Services' }, // Somalia
  KE: { pr: 'Regional Branch' }, // Kenya
  UG: { pr: 'Services' }, // Uganda
  CD: { pr: 'Services' }, // Democratic Republic of Congo
  TZ: { pr: 'Services' }, // Tanzania
  MZ: { pr: 'Services' }, // Mozambique
  ZW: { pr: 'Services' }, // Zimbabwe
  ZA: { pr: 'Regional Branch' }, // South Africa
  SA: { pr: 'Regional Branch' }, // Kingdom of Saudi Arabia
};

document.addEventListener('DOMContentLoaded', () => {
  const map = new svgMap({
    targetElementID: 'svgMap',
    minZoom: '1.6',
    maxZoom: '10',
    showZoomReset: false,
    countries: {
      EH: false,
    },
    colorNoData: '#7bccc3',
    data: {
      data: {
        pr: {
          name: 'Presence',
          format: '{0}',
        },
      },
      values: values,
    },
    noDataText: 'Not yet',
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const svgMap = document.getElementById('svgMap');
  const paths = svgMap.querySelectorAll('path');

  paths.forEach((path) => {
    if (mapCountries[path.dataset.id] === undefined) {
      path.remove();
      return;
    }
    if (values[path.dataset.id] !== undefined) {
      path.classList.add('hasData');
    }
    if (values[path.dataset.id]?.pr === 'Regional Branch') {
      path.classList.add('regional');
      return;
    }
    if (values[path.dataset.id]?.pr === 'Head Branch') {
      path.classList.add('head');
      return;
    }
  });
});
