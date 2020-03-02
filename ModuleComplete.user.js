// ==UserScript==
// @name         End of Module Return to Home
// @namespace    _| /\ |< { 
// @version      0.1
// @description  Send user to home page when reaching end of module page instead of going to the next module
// @author       Jake Standish jacob.standish@cms.k12.nc.us
// @match        https://*.instructure.com/*/pages/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('load', function () {
        setTimeout(function(){
        var url = window.location.href;
        var split = url.split('/');
        var page = split[split.length-1].split('?')[0];
        var moduleSearch = url.search('module_item_id');
        console.log('m search: '+moduleSearch);
        var home = url.split('/pages')[0];
        console.log(page);
        if(page.replace(/\-/g,'').toLowerCase().indexOf('modulecomplete')>-1){
            $('.module-sequence-footer-button--next').each(function(){
                $(this).html('<a class="Button" href="'+home+'"><i class="icon-home"></i> Return to Home Page</a>');
                $(this).attr('data-html-tooltip-title','go home');

            });
        };
        },3000);
    })
})();
