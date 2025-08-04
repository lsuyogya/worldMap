const mapCountries = {
  DZ: "Algeria",
  AO: "Angola",
  BJ: "Benin",
  BW: "Botswana",
  BF: "Burkina Faso",
  BI: "Burundi",
  CM: "Cameroon",
  CV: "Cape Verde",
  CF: "Central \n African \n Republic",
  TD: "Chad",
  KM: "Comoros",
  CG: "Congo",
  CI: "Cote \n d'Ivoire",
  CD: "Democratic \n Republic \n of Congo",
  DJ: "Djibouti",
  EG: "Egypt",
  GQ: "Equatorial Guinea",
  ER: "Eritrea",
  SZ: "Eswatini (Swaziland)",
  ET: "Ethiopia",
  GA: "Gabon",
  GM: "Gambia",
  GH: "Ghana",
  GN: "Guinea",
  GW: "Guinea-Bissau",
  KE: "Kenya",
  LS: "Lesotho",
  LR: "Liberia",
  LY: "Libya",
  MG: "Madagascar",
  MW: "Malawi",
  ML: "Mali",
  MR: "Mauritania",
  MU: "Mauritius",
  YT: "Mayotte",
  MA: "Morocco",
  MZ: "Mozambique",
  NA: "Namibia",
  NE: "Niger",
  NG: "Nigeria",
  RE: "Réunion",
  RW: "Rwanda",
  SH: "Saint Helena",
  ST: "São Tomé and Príncipe",
  SN: "Senegal",
  SC: "Seychelles",
  SL: "Sierra Leone",
  SO: "Somalia",
  ZA: "South Africa",
  SS: "South Sudan",
  SD: "Sudan",
  TZ: "United Republic \n of Tanzania",
  TG: "Togo",
  TN: "Tunisia",
  UG: "Uganda",
  ZM: "Zambia",
  ZW: "Zimbabwe",
  SA: "Kingdom \n of Saudi \n Arabia",
  QA: "Qatar",
  AE: "United \n Arab \n Emirates",
  IL: "Israel",
  PS: "Palestine",
  JO: "Jordan",
  LB: "Lebanon",
  SY: "Syria",
  IQ: "Iraq",
  OM: "Oman",
  YE: "Yemen",
  KW: "Kuwait",
};

const values = {
  AE: {
    pr: "Head Branch",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  QA: {
    pr: "Services",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  MA: {
    pr: "Regional Branch",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  ML: {
    pr: "Services",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  GN: {
    pr: "Services",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  CI: {
    pr: "Regional Branch",
    destination: [
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  GH: {
    pr: "Services",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  TG: {
    pr: "Services",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  BJ: {
    pr: "Services",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  NG: {
    pr: "Services",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  CM: {
    pr: "Services",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  ET: {
    pr: "Services",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  SO: {
    pr: "Services",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  KE: {
    pr: "Regional Branch",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  UG: {
    pr: "Services",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  CD: {
    pr: "Services",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  TZ: {
    pr: "Services",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  MZ: {
    pr: "Services",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  ZW: {
    pr: "Services",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  ZA: {
    pr: "Regional Branch",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  SA: {
    pr: "Regional Branch",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
};

const styles = {
  AE: {
    text: ["transform: translate(6px, -10px)", "max-width: 20ch"],
    locator: ["transform: translate(2px, 2px)"],
  }, // United Arab Emirates
  QA: {
    text: ["transform: translate(-16px, -10px)", "font-size:10"],
    locator: ["transform: translate(0, -2px)"],
  }, //Quatar
  SA: {
    text: ["transform: translate(-25px, -5px)", "font-size: 10"],
    locator: ["transform: translate(-5px, 30px)"],
  }, // Kingdom of Saudi Arabia
  ET: {
    text: ["transform: translate(-30px, -5px)", "font-size: 10"],
    locator: ["transform: translate(-5px, 6px)"],
  }, // Ethiopia
  KE: {
    text: ["transform: translate(-10px, -5px)"],
    locator: ["transform: translate(3px, 6px)"],
  }, // Kenya
  UG: {
    text: [
      "transform: translate(0, -56px)",
      "writing-mode: vertical-lr",
      "text-orientation: upright",
      "font-size: 8",
    ],
    locator: ["transform: translate(1px, 3px)"],
  }, // Uganda
  CD: {
    text: ["transform: translate(-18px, -20px)", "font-size: 10"],
    locator: ["transform: translate(15px, 16px)"],
  }, // Democratic Republic of Congo
  TZ: {
    text: ["transform: translate(-15px, 0)", "font-size: 10"],
    locator: ["transform: translate(14px, 23px)"],
  }, // Tanzania
  CI: {
    text: ["transform: translate(-10px, 15px)", "font-size:10"],
    locator: [],
  }, // Côte d'Ivoire
  GH: {
    text: [
      "transform: translate(0, -40px)",
      "writing-mode: vertical-lr",
      "text-orientation: upright",
      "font-size: 8",
    ],
    locator: ["transform: translate(0, 10px)"],
  }, // Ghana
  TG: {
    text: [
      "transform: translate(0, -20px)",
      "writing-mode: vertical-lr",
      "text-orientation: upright",
      "font-size: 6",
    ],
    locator: ["transform: translate(0, 10px)"],
  }, // Togo
  BJ: {
    text: [
      "transform: translate(0, -20px)",
      "writing-mode: vertical-lr",
      "text-orientation: upright",
      "font-size: 6",
    ],
    locator: ["transform: translate(0, 15px)"],
  }, // Benin
  NG: {
    text: ["transform: translate(-20px, 0px)", "font-size: 10"],
    locator: ["transform: translate(0px, 8px)"],
  }, // Nigeria
  CM: {
    text: ["transform: translate(-20px, 12px)", "font-size: 10"],
    locator: ["transform: translate(0, 20px)"],
  }, // Cameroon
  GN: {
    text: ["transform: translate(-20px, 6px)", "font-size: 10"],
    locator: ["transform: translate(0, -6px)"],
  }, // Guinea
  MA: {
    text: ["transform: translate(-5px, -30px)"],
    locator: ["transform: translate(20px, -20px)"],
  }, // Morocco
  ML: { text: [], locator: ["transform: translate(18px, 10px)"] }, // Mali
  SO: { text: [], locator: ["transform: translate(6px, 6px)"] }, // Somalia
  MZ: {
    text: ["transform: translate(-10px, -20px)", "font-size: 10"],
    locator: ["transform: translate(10px, -11px)"],
  }, // Mozambique
  ZW: {
    text: ["transform: translate(-30px, -6px)", "font-size: 10"],
    locator: ["transform: translate(0, 3px)"],
  }, // Zimbabwe
  ZA: {
    text: ["transform: translate(-40px, 12)"],
    locator: ["transform: translate(2px, 22px)"],
  }, // South Africa
};

const svgNS = "http://www.w3.org/2000/svg";

document.addEventListener("DOMContentLoaded", () => {
  const svgMap = document.getElementById("svgMap");
  const paths = svgMap.querySelectorAll("path");

  const tooltip = document.getElementById("countryTooltip");
  const tooltipCountryName = document.getElementById("tooltip-country-name");
  const tooltipDataList = document.getElementById("tooltip-data-list");

  let hideTooltipTimer;

  const mapContentGroup = svgMap.querySelector("#viewport");

  paths.forEach((path) => {
    const countryCode = path.dataset.id;
    let textElementForPath;

    const presence = values[countryCode]?.pr;
    const text = document.createElementNS(svgNS, "text");

    if (presence) {
      path.classList.add("hasData");
      let locator;

      if (presence === "Regional Branch") {
        path.classList.add("regional");
        locator = createRegionalLocator({ countryCode: countryCode });
      } else if (presence === "Head Branch") {
        path.classList.add("head");
        locator = createHeadLocator();
      } else {
        locator = createDefaultLocator();
      }

      // --- Add text label for countries with values ---

      // Calculate bounding box
      const bbox = path.getBBox();

      const pathCenter = {
        x: bbox.x + bbox.width / 2,
        y: bbox.y + bbox.height / 2,
      };

      const textAttributes = [
        { name: "x", value: pathCenter.x },
        { name: "y", value: pathCenter.y },
        { name: "text-anchor", value: "left" },
        { name: "dominant-baseline", value: "middle" },
        { name: "font-size", value: "12" },
        { name: "data-id", value: countryCode },
      ];

      textAttributes.forEach((attr) => {
        text.setAttribute(attr.name, attr.value);
      });
      styles[path.dataset.id]?.text?.forEach((style) => {
        const [prop, value] = style.split(":").map((s) => s.trim());
        text.style.setProperty(prop, value);
        if (prop === "font-size") {
          text.style.setProperty(
            "--incresaedFont", //for zoom effect on hover
            `${parseFloat(value) * 1.2}px`
          );
        }
      });

      // Apply common attributes and styles for locator (now always applied to a <g>)
      locator.setAttribute("data-id", countryCode);
      locator.classList.add("locator");

      const locatorWidth = 33;
      const locatorHeight = 35;

      // Initialize offset from styles
      let offsetX = 0;
      let offsetY = 0;

      // Apply custom locator styles to parse transform offsets
      styles[path.dataset.id]?.locator?.forEach((style) => {
        const [prop, value] = style.split(":").map((s) => s.trim());
        if (prop === "transform") {
          // Extract translate values from the string
          const match = value.match(/translate\(([^,]+),\s*([^)]+)\)/);
          if (match) {
            offsetX += parseFloat(match[1]);
            offsetY += parseFloat(match[2]);
          }
        } else {
          locator.style.setProperty(prop, value);
        }
      });

      // Calculate the final translation for the locator group
      // This centers the locator icon over the path's center, and then applies any additional offsets from the 'styles' object.
      const finalTranslateX = pathCenter.x - locatorWidth / 2 + offsetX;
      const finalTranslateY = pathCenter.y - locatorHeight / 2 + offsetY;

      locator.setAttribute(
        "transform",
        `translate(${finalTranslateX}, ${finalTranslateY})`
      );

      mapCountries[countryCode].split("\n").forEach((s, index) => {
        const tspan = document.createElementNS(svgNS, "tspan");
        tspan.textContent = s.trim();

        // Move subsequent lines below
        if (index > 0) {
          tspan.setAttribute("x", pathCenter.x);
          tspan.setAttribute("dy", "1.2em");
        }
        text.append(tspan);
      });

      mapContentGroup.appendChild(text);
      mapContentGroup.appendChild(locator);

      textElementForPath = text;
    }

    // --- Tooltip Event Listeners ---
    path.addEventListener("mouseenter", (e) => {
      clearTimeout(hideTooltipTimer);
      const countryCode = path.dataset.id;
      const countryName = mapCountries[countryCode];
      const countryData = values[countryCode];

      if (countryData) {
        tooltipCountryName.textContent = countryName;
        tooltipDataList.innerHTML = "";

        if (countryData.destination && Array.isArray(countryData.destination)) {
          countryData.destination.forEach((detail) => {
            const detailLi = document.createElement("li");
            const svgElement = document.createElementNS(svgNS, "svg");
            svgElement.setAttribute("width", "12");
            svgElement.setAttribute("height", "12");
            svgElement.innerHTML = `<use href="#myCustomSymbol"></use>`;
            const detailLiText = document.createElement("span");
            detailLiText.textContent = detail.name || "No Name";
            const detailLiLink = document.createElement("a");
            detailLiLink.setAttribute("href", detail?.link || "#");
            detailLiLink.setAttribute("target", "_blank");
            detailLiLink.appendChild(detailLiText);

            detailLiText.textContent = detail?.name || "No Name";
            detailLi.appendChild(svgElement);
            detailLi.appendChild(detailLiLink);
            tooltipDataList.appendChild(detailLi);
          });
        }

        // Position the tooltip (using mouse coordinates for initial placement)
        const mouseOffset = 0;
        let tooltipX = e.pageX + mouseOffset;
        let tooltipY = e.pageY + mouseOffset;

        // Adjust position if it goes off-screen to the right or bottom
        const svgMapRect = svgMap.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        const viewportWidth = svgMapRect.width;
        const viewportHeight = svgMapRect.height;

        // Adjust for right edge
        if (tooltipX + tooltipRect.width > viewportWidth) {
          tooltipX = e.pageX - tooltipRect.width - mouseOffset;
        }
        // Adjust for bottom edge
        if (tooltipY + tooltipRect.height > viewportHeight) {
          tooltipY = e.pageY - tooltipRect.height - mouseOffset;
        }

        tooltip.style.left = `${tooltipX}px`;
        tooltip.style.top = `${tooltipY}px`;
        tooltip.classList.add("visible");
        if (textElementForPath) {
          textElementForPath.classList.add("hover");
        }
      }
    });

    //Hide tooltip after a delay when mouse exits a path
    path.addEventListener("mouseleave", () => {
      if (textElementForPath) {
        textElementForPath.classList.remove("hover");
      }

      hideTooltipTimer = setTimeout(() => {
        if (!tooltip.matches(":hover")) {
          tooltip.classList.remove("visible");
        }
      }, 300);
    });
  });

  // Keep tooltip visible if mouse enters the tooltip itself
  tooltip.addEventListener("mouseenter", () => {
    clearTimeout(hideTooltipTimer);
  });

  // Hide tooltip if mouse leaves the tooltip
  tooltip.addEventListener("mouseleave", () => {
    tooltip.classList.remove("visible");
  });
});

// Helper function to create a default locator, white circle
function createDefaultLocator() {
  const wrapperG = document.createElementNS(svgNS, "g");
  const circle = document.createElementNS(svgNS, "circle");
  // Position the circle relative to the <g>'s origin (0,0)
  // Assuming the conceptual locator drawing space is 33x35, center the circle within it.
  circle.setAttribute("cx", "16.5");
  circle.setAttribute("cy", "17.5");
  circle.setAttribute("r", "2");
  circle.setAttribute("stroke", "black");
  circle.setAttribute("stroke-width", "0");
  circle.setAttribute("fill", "white");
  wrapperG.appendChild(circle);
  return wrapperG;
}

// Helper function to create a head locator, head branch
function createHeadLocator() {
  const wrapperG = document.createElementNS(svgNS, "g");
  const circle = document.createElementNS(svgNS, "circle");
  // Position the circle relative to the <g>'s origin (0,0)
  circle.setAttribute("cx", "16.5");
  circle.setAttribute("cy", "17.5");
  circle.setAttribute("r", "4");
  circle.setAttribute("stroke", "white");
  circle.setAttribute("stroke-width", "1");
  circle.setAttribute("fill", "#00675f");
  wrapperG.appendChild(circle);
  return wrapperG;
}

// Helper function to create a regional locator, regional branch
function createRegionalLocator({ countryCode }) {
  const svgNS = "http://www.w3.org/2000/svg";

  // This is the outer group that the main loop will apply its transform to (for positioning)
  const gLocatorWrapper = document.createElementNS(svgNS, "g");
  gLocatorWrapper.setAttribute("id", `${countryCode}_regionalLocatorWrapper`);

  // Create an INNER group to apply the fixed scaling
  const innerScaledContentGroup = document.createElementNS(svgNS, "g");
  const fixedScaleFactor = 0.4; // This makes it 80% smaller (20% of original size)

  // The original locator content (paths inside gEGroup) is drawn assuming a 33x35 bounding box.
  // To scale it around its own visual center (16.5, 17.5) within its local coordinate system:
  const contentOriginalCenterX = 16.5; // Half of original 33px width
  const contentOriginalCenterY = 17.5; // Half of original 35px height

  // Apply transform to the inner group:
  // 1. Translate its content's center to (0,0) of the innerScaledContentGroup.
  // 2. Scale it down.
  // 3. Translate it back by its (scaled) center. This places the scaled content
  //    such that its *scaled center* is at the (0,0) of innerScaledContentGroup.
  innerScaledContentGroup.setAttribute(
    "transform",
    `translate(${contentOriginalCenterX}, ${contentOriginalCenterY}) scale(${fixedScaleFactor}) translate(${-contentOriginalCenterX}, ${-contentOriginalCenterY})`
  );

  // --- Create the original locator SVG elements (Artboard1, Layer1, EGroup, paths) ---
  // These will now be appended to `innerScaledContentGroup` instead of directly to `gLocatorWrapper`.

  const gArtboard1 = document.createElementNS(svgNS, "g");
  gArtboard1.setAttribute("id", `${countryCode}_Artboard1`);
  gArtboard1.setAttribute("clip-path", "url(#cp1)");

  const gLayer1 = document.createElementNS(svgNS, "g");
  gLayer1.setAttribute("id", `${countryCode}_Layer1`);

  const gEGroup = document.createElementNS(svgNS, "g");
  gEGroup.setAttribute("id", `${countryCode}_EGroup`);

  const path1 = document.createElementNS(svgNS, "path");
  path1.setAttribute("id", `${countryCode}_regionalPath1`);
  path1.setAttribute("class", "s0");
  path1.setAttribute(
    "d",
    "m16.7 2.2l14.3 30.7h-4.8l-12.4-25.5-11.9 25.5h-0.1l12.2-26.2 2.1-4.5h0.6z"
  );
  gEGroup.appendChild(path1);

  const path2 = document.createElementNS(svgNS, "path");
  path2.setAttribute("id", `${countryCode}_regionalPath2`);
  path2.setAttribute("fill-rule", "evenodd");
  path2.setAttribute("class", "s1");
  path2.setAttribute(
    "d",
    "m31.6 33.3h-5.6l-12.2-25-11.6 25h-1l12.4-26.7 2.3-4.8h1.1zm-5.2-0.8h4l-14-29.9h-0.1l-2.2 4.7z"
  );
  gEGroup.appendChild(path2);

  gLayer1.appendChild(gEGroup);
  gArtboard1.appendChild(gLayer1);
  innerScaledContentGroup.appendChild(gArtboard1); // Append to the inner scaled group

  // Finally, append the inner scaled group to the outer wrapper group
  gLocatorWrapper.appendChild(innerScaledContentGroup);

  return gLocatorWrapper; // Return the outer group
}
