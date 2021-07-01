/* global chrome */

const panels = chrome.devtools.panels;

panels.create('ADPLogger', '', 'panel.html');
