let scrollToBottom = require("scroll-to-bottomjs");

describe('Integration test with visual testing - plissee configurator rechteckige Fenster', function () {

    beforeEach(function () {

        cy.visit('/plissee/plissee-konfigurator')
        cy.ignoreMenuContainer()
    })


    it('Plissee - rechteckige Plissees', function () {

        // ******************* rechteckige Fenster *******************
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));


        // select weitere Modelle
        cy.get('div[options-property="plisseetyp"] > div').click()

        // preselected type is VS2
        cy.argosScreenshot('rechteckige Plissees - VS2', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // --------------------------------------------------------------------------------------------------

        // select VS1
        cy.contains(new RegExp("^VS1\\s*$")).click()
        cy.argosScreenshot('rechteckige Plissees - VS1', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // --------------------------------------------------------------------------------------------------

        // select VS3
        cy.contains(new RegExp("^VS3\\s*$")).click()
        cy.argosScreenshot('rechteckige Plissees - VS3', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // --------------------------------------------------------------------------------------------------

        // select VS3 SD
        cy.contains(new RegExp("^VS3 SD\\s*$")).click()
        cy.argosScreenshot('rechteckige Plissees - VS3 SD', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // --------------------------------------------------------------------------------------------------

        // select Bedienstab
        cy.get('div[options-property="bedienstab"] > ul > :nth-child(2)').click()
        cy.argosScreenshot('rechteckige Plissees - Bedienstab', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // --------------------------------------------------------------------------------------------------

        // select F1
        cy.contains(new RegExp("^F1\\s*$")).click()
        cy.argosScreenshot('rechteckige Plissees - F1', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // --------------------------------------------------------------------------------------------------

        // select F3
        cy.contains(new RegExp("^F3\\s*$")).click()
        cy.argosScreenshot('rechteckige Plissees - F3', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // --------------------------------------------------------------------------------------------------

        // select F5
        cy.contains(new RegExp("^F5\\s*$")).click()
        cy.argosScreenshot('rechteckige Plissees - F5', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // --------------------------------------------------------------------------------------------------

        // select FK
        cy.contains(new RegExp("^FK\\s*$")).click()
        cy.argosScreenshot('rechteckige Plissees - FK', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // select Pendelsicherung
        cy.get('div[options-property="pendelsicherung"] > ul > :nth-child(2)').click()
        cy.argosScreenshot('rechteckige Plissees - Pendelsicherung', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
    })
})