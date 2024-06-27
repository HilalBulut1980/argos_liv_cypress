let scrollToBottom = require("scroll-to-bottomjs");

describe('Integration test with visual testing - jalousie configurator', function () {

    beforeEach(function () {

        cy.visit('/jalousie/holz-jalousie-konfigurator')
        cy.ignoreMenuContainer()
    })

    it('Holzjalousie - 25mm', function () {

        // ******************* Holzjalousie 25mm *******************
        cy.get('.blinds-type > ul > :nth-child(1)').click()
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));


        cy.argosScreenshot('Holzjalousie 25mm', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Holzjalousie 25mm - Kugelkette - Kunststoff *******************
        cy.get('div[options-property="bedienung"] > ul > :nth-child(2)').click()
        cy.argosScreenshot('Holzjalousie 25mm - Kugelkette - Kunststoff', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Holzjalousie 25mm - Kugelkette - Metall *******************
        cy.get('div[options-property="bedienung"] > ul > :nth-child(3)').click()
        cy.argosScreenshot('Holzjalousie 25mm - Kugelkette - Metall', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Holzjalousie 25mm - In der Fensternische *******************
        cy.get('div[options-property="befestigung"] > ul').children().contains('In der Fensternische').click()
        cy.argosScreenshot('Holzjalousie 25mm - In der Fensternische', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Holzjalousie 25mm - In der Fensternische *******************
        cy.get('div[options-property="befestigung"] > ul').children().contains('An der Mauer oder Decke').click()
        cy.argosScreenshot('Holzjalousie 25mm - An der Mauer oder Decke', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
    })

    it('Holzjalousie - 50mm', function () {

        // ******************* Holzjalousie - 50mm *******************
        cy.get('.blinds-type > ul > :nth-child(2)').click()
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));

        cy.argosScreenshot('Holzjalousie - 50mm', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Holzjalousie - 50mm - Kugelkette - Metall *******************
        cy.get('div[options-property="bedienung"] > ul > :nth-child(2)').click()
        cy.argosScreenshot('Holzjalousie - 50mm - Kugelkette - Metall', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Holzjalousie 50mm - Leiterband *******************
        cy.get('div[options-property="lamellenverbindung"] > ul > :nth-child(2)').click()
        cy.argosScreenshot('Holzjalousie 50mm - Leiterband', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
    })

    it('Holzjalousie 70mm', function () {

        // ******************* Holzjalousie 70mm *******************
        cy.get('.blinds-type > ul > :nth-child(3)').click()
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));

        cy.argosScreenshot('Holzjalousie - 70mm', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Holzjalousie 70mm - Leiterband *******************
        cy.get('div[options-property="lamellenverbindung"] > ul > :nth-child(2)').click()
        cy.argosScreenshot('Holzjalousie 70mm - Leiterband', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
    })
})
