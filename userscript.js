// ==UserScript==
// @name         Reddit on Google Search Mobile
// @version      1.1
// @description  Adds a button to search Reddit via Google Search
// @author       Pablocp19
// @namespace    https://github.com/pablocp19/Reddit-on-Google-Search-Mobile (based on Alexyoe's https://github.com/Alexyoe/Reddit-on-Google-Search)
// @license      MIT
// @include      http*://www.google.*/search*
// @include      http*://google.*/search*
// @run-at       document-end
// ==/UserScript==

const queryRegex = /q=[^&]+/g;
const siteRegex = /\+site(?:%3A|\:).+\.[^&+]+/g;
const redditUrl = "+site%3Areddit.com";
const isImageSearch = /[?&]tbm=isch/.test(location.search);

const existingLinks = Array.from(document.querySelectorAll('a.LatpMc.nPDzT'));
var existingLink = existingLinks.find(link => link.textContent.includes('Vídeos'));
var parentDiv = existingLink.parentNode;

var newLinkDiv = document.createElement('div');
newLinkDiv.setAttribute('class', 'T3FoJb');
newLinkDiv.setAttribute('role', 'listitem');
newLinkDiv.setAttribute('data-hveid', 'CAwQAA');
newLinkDiv.setAttribute('data-ved', '2ahUKEwj8ufnyoqqAAxV_UaQEHZG_AfkQtoAJKAB6BAgMEAA');

var newLink = document.createElement('a');
newLink.setAttribute('class', 'LatpMc nPDzT');
newLink.href = window.location.href.replace(queryRegex, (match) =>
  match.search(siteRegex) >= 0
    ? match.replace(siteRegex, redditUrl)
    : match + redditUrl
);
newLink.setAttribute('role', 'link');
newLink.setAttribute('jsname', 'mMVipe');
newLink.setAttribute('data-hveid', 'CAkQAQ');
newLink.setAttribute('data-ved', '2ahUKEwjKhNX9pKqAAxWFVqQEHYw-De8Q0pQJegQICRAB');

var newDiv = document.createElement('div');
newDiv.setAttribute('jsname', 'bVqjv');
newDiv.setAttribute('class', 'GKS7s');

var newSpan = document.createElement('span');
newSpan.setAttribute('class', 'FMKtTb UqcIvb');
newSpan.setAttribute('jsname', 'pIvPIe');
newSpan.textContent = 'Reddit';

newDiv.appendChild(newSpan);
newLink.appendChild(newDiv);
newLinkDiv.appendChild(newLink);

parentDiv.insertBefore(newLinkDiv, existingLink.nextSibling);
