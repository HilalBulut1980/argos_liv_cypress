let scrollToBottom = require("scroll-to-bottomjs");

describe('Integration test with visual testing - plissee configurator dachfenster', function () {

    beforeEach(function () {

        cy.visit('/plissee/plissee-konfigurator')
        cy.ignoreMenuContainer()
    })


    it('Plissee - Dachfensterplissees', function () {

        // ******************* Dachfensterplissees *******************
        // change to tab Dachfenster
        cy.get('.tabs > :nth-child(2)').click()
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));


        // preselected type is DF20 genormt 
        cy.argosScreenshot('Dachfenster - DF20 genormt', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // change to ungenormt
        cy.contains('Maße des Dachfenster manuell eingeben').click()
        cy.argosScreenshot('Dachfenster - DF20 ungenormt', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
        //reset to genormt
        cy.contains('Dachfenster auswählen').click()

        // --------------------------------------------------------------------------------------------------

        // select DF20 Comfort
        cy.contains(new RegExp("^DF20 Comfort\\s*$")).click()
        cy.argosScreenshot('Dachfenster - DF20 Comfort genormt', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // change to ungenormt
        cy.contains('Maße des Dachfenster manuell eingeben').click()
        cy.argosScreenshot('Dachfenster - DF20 Comfort ungenormt', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // --------------------------------------------------------------------------------------------------

        // select different falz types

        // 'Gerader Falz' is preselected 
        cy.contains('Gerader Falz').click()
        cy.argosScreenshot('Dachfenster - Gerader Falz', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        //select 'Schräger Falz'
        cy.contains('Schräger Falz').click()
        cy.argosScreenshot('Dachfenster - Schräger Falz', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        //select 'Schräger Falz mit Schattenfuge'
        cy.contains('Schräger Falz mit Schattenfuge').click()
        cy.argosScreenshot('Dachfenster - Schräger Falz mit Schattenfuge', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        //select 'Schräger Falz mit Aufsatz vor Glas'
        cy.contains('Schräger Falz mit Aufsatz vor Glas').click()
        cy.argosScreenshot('Dachfenster - Schräger Falz mit Aufsatz vor Glas', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // --------------------------------------------------------------------------------------------------

        // select Bedienstab
        cy.get('div[options-property="bedienstab"] > ul > :nth-child(2)').click()
        cy.argosScreenshot('Dachfenster - Bedienstab', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
    })
})