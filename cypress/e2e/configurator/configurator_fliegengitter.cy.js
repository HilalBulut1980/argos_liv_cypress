let scrollToBottom = require("scroll-to-bottomjs");

describe('Integration test with visual testing - Fliegengitter configurator', function () {


    it('Fliegengitter', function () {

        // ******************* Fliegengitter - Farbe Weiß *******************
        cy.visit("/insektenschutz/fliegengitter")
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));


        cy.argosScreenshot('Fliegengitter: Farbe Weiß', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Fliegengitter - Farbe Anthrazit *******************
        cy.get('#options-list-color').children().contains('Anthrazit').click()
        cy.argosScreenshot('Fliegengitter: Farbe Anthrazit', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Fliegengitter - Farbe Braun *******************
        cy.get('#options-list-color').children().contains('Braun').click()
        cy.argosScreenshot('Fliegengitter: Farbe Braun', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Fliegengitter - Farbe Mooreiche *******************
        cy.get('#options-list-color').children().contains('Mooreiche').click()
        cy.argosScreenshot('Fliegengitter: Farbe Mooreiche', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Fliegengitter - Farbe Walnuss *******************
        cy.get('#options-list-color').children().contains('Walnuss').click()
        cy.argosScreenshot('Fliegengitter: Farbe Walnuss', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Fliegengitter - Farbe Goldeiche *******************
        cy.get('#options-list-color').children().contains('Goldeiche').click()
        cy.argosScreenshot('Fliegengitter: Farbe Goldeiche', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Fliegengitter - Farbe Winchester *******************
        cy.get('#options-list-color').children().contains('Winchester').click()
        cy.argosScreenshot('Fliegengitter: Farbe Winchester', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
    })
})
