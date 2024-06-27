let scrollToBottom = require("scroll-to-bottomjs");

describe('Integration test with visual testing - jalousie configurator', function () {

    beforeEach(function () {

        cy.visit('/jalousie/jalousie-konfigurator')
        cy.ignoreMenuContainer()
    })

    it('Jalousie - 16mm', function () {

        // ******************* Jalousie 16mm *******************
        cy.get('.blinds-type > ul > :nth-child(1)').click()
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));


        cy.argosScreenshot('Jalousie 16mm', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });


        // ******************* Jalousie 16mm - Kugelkette - Kunststoff *******************
        cy.get('.bedienung > ul > :nth-child(2)').click()
        cy.argosScreenshot('Jalousie 16mm - Kugelkette - Kunststoff', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Jalousie 16mm - Kugelkette - Metall *******************
        cy.get('.bedienung > ul > :nth-child(3)').click()
        cy.argosScreenshot('Jalousie 16mm - Kugelkette - Metall', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Jalousie 16mm - In der Fensternische *******************
        cy.get('div[options-property="befestigung"] > ul').children().contains('In der Fensternische').click()
        cy.argosScreenshot('Jalousie 16mm - In der Fensternische', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Jalousie 16mm - In der Fensternische *******************
        cy.get('div[options-property="befestigung"] > ul').children().contains('An der Mauer oder Decke').click()
        cy.argosScreenshot('Jalousie 16mm - An der Mauer oder Decke', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
    })

    it('Jalousie - 25mm', function () {

        // ******************* Jalousie 25mm *******************
        cy.get('.blinds-type > ul > :nth-child(2)').click()
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));


        cy.argosScreenshot('Jalousie 25mm', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Jalousie 25mm - Kugelkette - Kunststoff *******************
        cy.get('.bedienung > ul > :nth-child(2)').click()
        cy.argosScreenshot('Jalousie 25mm - Kugelkette - Kunststoff', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Jalousie 25mm - Kugelkette - Metall *******************
        cy.get('.bedienung > ul > :nth-child(3)').click()
        cy.argosScreenshot('Jalousie 25mm - Kugelkette - Metall', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Jalousie 25mm - In der Fensternische *******************
        cy.get('div[options-property="befestigung"] > ul').children().contains('In der Fensternische').click()
        cy.argosScreenshot('Jalousie 25mm - In der Fensternische', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Jalousie 25mm - An der Mauer oder Decke *******************
        cy.get('div[options-property="befestigung"] > ul').children().contains('An der Mauer oder Decke').click()
        cy.argosScreenshot('Jalousie 25mm - An der Mauer oder Decke', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
    })

    it('Jalousie - 50mm', function () {

        // ******************* Jalousie 50mm *******************
        cy.get('.blinds-type > ul > :nth-child(3)').click()
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));


        cy.argosScreenshot('Jalousie 50mm', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Jalousie 50mm - Kugelkette - Metall *******************
        cy.get('.bedienung > ul > :nth-child(2)').click()
        cy.argosScreenshot('Jalousie 50mm - Kugelkette - Metall', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
    })
})
