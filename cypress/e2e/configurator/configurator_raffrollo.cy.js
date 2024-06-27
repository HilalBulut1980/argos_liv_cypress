let scrollToBottom = require("scroll-to-bottomjs");

describe('Integration test with visual testing - raffrollo configurator', function () {

    beforeEach(function () {

        cy.visit('/raffrollo/raffrollo-konfigurator')
        cy.ignoreMenuContainer()
    })

    it('rechteckige Raffrollos', function () {

        // ******************* Startseite Raffrollo Konfigurator *******************
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));


        cy.argosScreenshot('Raffrollo Konfigurator', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Raffrollo-Farbe & Eigenschaften wählen *******************
        cy.get('.configurator-button-subsection').click()
        cy.argosScreenshot('Raffrollo - Stoff ändern', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Raffrollo Höhe und Breite eingeben **************
        //input height and weight
        cy.get('#hoehe_in_mm input').type('250')
        cy.get('#breite_in_mm input').type('120')


        // ******************* Raffrollo - an der Wand *******************
        cy.get('div[options-property="befestigung"] > ul > :nth-child(1)').click()
        cy.argosScreenshot('Raffrollo - an der Wand', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Raffrollo - an der Decke *******************
        cy.get('div[options-property="befestigung"] > ul > :nth-child(2)').click()
        cy.argosScreenshot('Raffrollo - an der Decke', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Raffrollo - Fensterflügel *******************
        cy.get('div[options-property="befestigung"] > ul > :nth-child(3)').click()
        cy.argosScreenshot('Raffrollo - Fensterflügel', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Raffrollo - Klemmträger *******************
        cy.get('div[options-property="befestigung"] > ul > :nth-child(4)').click()
        cy.argosScreenshot('Raffrollo - Klemmträger', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Raffrollo - Kette transparent ******************* 
        cy.get('div[options-property="farbeKette"] > ul > :nth-child(2)').click()
        cy.argosScreenshot('Raffrollo - Kunststoffkette transparent', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Raffrollo - Kette grau ******************* 
        cy.get('div[options-property="farbeKette"] > ul > :nth-child(3)').click()
        cy.argosScreenshot('Raffrollo - Kunststoffkette grau', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Raffrollo - Metallkette ******************* 
        cy.get('div[options-property="ketteMaterial"] > ul > :nth-child(2)').click()
        cy.argosScreenshot('Raffrollo - Metallkette', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Raffrollo - Metallkette Bedienseite rechts******************* 
        cy.get('div[options-property="bedienseite"] > ul > :nth-child(2)').click()
        cy.argosScreenshot('Raffrollo - Bedienseite rechts', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
    })
})
