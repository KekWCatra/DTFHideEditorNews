// ==UserScript==
// @name        DTF Hide Editor News
// @match       https://dtf.ru/*
// @version     1.0
// @license     MIT
// @author      KekW - https://dtf.ru/u/182912-kekw
// @description Скрытие постов редакции.
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_addValueChangeListener
// @run-at      document-end
// ==/UserScript==

function hideEditor() {
    document.querySelectorAll('span.content-editorial-tick').forEach(function(h) {
        h.closest('div.feed__item').remove();
    });
}

addEventListener('DOMContentLoaded', function() {
    hideEditor();
});

addEventListener('DOMNodeInserted', function() {
    hideEditor();
});
