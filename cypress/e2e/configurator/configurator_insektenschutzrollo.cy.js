let scrollToBottom = require("scroll-to-bottomjs");

describe('Integration test with visual testing - Insektenschutzrollo configurator', function () {


    it('Insektenschutzrollo', function () {

        // ******************* Insektenschutzrollo - Hauswand *******************
        cy.visit("/insektenschutz/insektenschutz-rollo")
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));


        cy.argosScreenshot('Insektenschutzrollo: Montage Hauswand', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Insektenschutzrollo - Mauer *******************
        cy.get('#configurator-options > :nth-child(3) > ul > :nth-child(3)').click({ force: true })
        cy.argosScreenshot('Insektenschutzrollo: Mauer', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Insektenschutzrollo - Fensterrahmen *******************
        cy.get('#configurator-options > :nth-child(3) > ul > :nth-child(2)').click({ force: true })
        cy.argosScreenshot('Insektenschutzrollo: Fensterrahmen', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Insektenschutzrollo - Klebemontage *******************
        cy.get('#configurator-options > :nth-child(3) > ul > :nth-child(3)').click({ force: true })
        cy.argosScreenshot('Insektenschutzrollo: Klebemontage', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });


        // ******************* Insektenschutzrollo - Farbe Anthrazit *******************
        cy.get('#options-list-color').children().contains('Anthrazit').click()
        cy.argosScreenshot('Insektenschutzrollo: Farbe Anthrazit', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Insektenschutzrollo - Farbe Braun *******************
        cy.get('#options-list-color').children().contains('Braun').click()
        cy.argosScreenshot('Insektenschutzrollo: Farbe Braun', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Insektenschutzrollo - Farbe Eiche *******************
        cy.get('#options-list-color').children().contains('Eiche').click()
        cy.argosScreenshot('Insektenschutzrollo: Farbe Eiche', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Insektenschutzrollo - Farbe Nuss *******************
        cy.get('#options-list-color').children().contains('Nuss').click()
        cy.argosScreenshot('Insektenschutzrollo: Farbe Nuss', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Insektenschutzrollo - Farbe Winchester *******************
        cy.get('#options-list-color').children().contains('Winchester').click()
        cy.argosScreenshot('Insektenschutzrollo: Farbe Winchester', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
    })
})
