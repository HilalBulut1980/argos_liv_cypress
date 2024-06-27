let scrollToBottom = require("scroll-to-bottomjs");

describe('Integration test with visual testing - doppelrollo configurator', function () {

    beforeEach(function () {

        cy.visit('/doppelrollo/doppelrollo-konfigurator')
        cy.ignoreMenuContainer()
    })

    it('Doppelrollo Mini zum Klemmen', function () {

        // ******************* Doppelrollo Mini zum Klemmen *******************
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));


        cy.argosScreenshot('Doppelrollo mini zum Klemmen', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Doppelrollo-Farbe & Eigenschaften wählen *******************
        cy.get('.configurator-button-subsection').click()
        cy.argosScreenshot('Doppelrollo - mini - Stoff ändern', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Doppelrollo Verblendung weiß *******************
        cy.get('div[options-property="verblendungsfarbe"] > ul').children().contains('weiß').click()
        cy.argosScreenshot('Doppelrollo - mini - Verblendung weiß', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Doppelrollo Verblendung creme *******************
        cy.get('div[options-property="verblendungsfarbe"] > ul').children().contains('creme').click()
        cy.argosScreenshot('Doppelrollo - mini - Verblendung creme', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Doppelrollo Verblendung braun *******************
        cy.get('div[options-property="verblendungsfarbe"] > ul').children().contains('braun').click()
        cy.argosScreenshot('Doppelrollo - mini - Verblendung braun', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Doppelrollo Verblendung grau *******************
        cy.get('div[options-property="verblendungsfarbe"] > ul').children().contains('grau').click({ force: true })
        cy.argosScreenshot('Doppelrollo - mini - Verblendung grau', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Doppelrollo Verblendung anthrazit *******************
        cy.get('div[options-property="verblendungsfarbe"] > ul').children().contains('anthrazit').click({ force: true })
        cy.argosScreenshot('Doppelrollo - mini - Verblendung anthrazit', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Doppelrollo Verblendung schwarz *******************
        cy.get('div[options-property="verblendungsfarbe"] > ul').children().contains('schwarz').click({ force: true })
        cy.argosScreenshot('Doppelrollo - mini - Verblendung schwarz', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Doppelrollo Metallkette *******************
        cy.get('div[options-property="bedienungMaterial"] > ul > :nth-child(2)').click()
        cy.argosScreenshot('Doppelrollo - mini - Metallkette', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Doppelrollo Bedienseite rechts *******************
        cy.get('div[options-property="bedienseite"] > ul > :nth-child(2)').click()
        cy.argosScreenshot('Doppelrollo - mini - Bedienseite rechts', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
    })

    it('Doppelrollo Mini mit Kassette zum Kleben', function () {

        // ******************* Doppelrollo Mini mit Kassette zum Kleben *******************
        cy.get('#type-selector-top > ul > :nth-child(2)').click()
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));

        cy.argosScreenshot('Doppelrollo mini mit Kassette zum Kleben', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
    })

    it('Doppelrollo ohne Kassette', function () {

        // ******************* Doppelrollo ohne Kassette *******************
        cy.get('#type-selector-top > ul > :nth-child(3)').click()
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));

        // cy.percySnapshot('Doppelrollo ohne Kassette')
        cy.argosScreenshot('Doppelrollo ohne Kassette', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Doppelrollo Verblendung weiß *******************
        cy.get('div[options-property="verblendungsfarbe"] > ul').children().contains('weiß').click()
        cy.argosScreenshot('Doppelrollo - oK - Verblendung weiß', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Doppelrollo Verblendung creme *******************
        cy.get('div[options-property="verblendungsfarbe"] > ul').children().contains('creme').click()
        cy.argosScreenshot('Doppelrollo - oK - Verblendung creme', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Doppelrollo Verblendung braun *******************
        cy.get('div[options-property="verblendungsfarbe"] > ul').children().contains('braun').click()
        cy.argosScreenshot('Doppelrollo - oK - Verblendung braun', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Doppelrollo Verblendung grau *******************
        cy.get('div[options-property="verblendungsfarbe"] > ul').children().contains('grau').click({ force: true })
        cy.argosScreenshot('Doppelrollo - oK - Verblendung grau', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Doppelrollo Verblendung anthrazit *******************
        cy.get('div[options-property="verblendungsfarbe"] > ul').children().contains('anthrazit').click({ force: true })
        cy.argosScreenshot('Doppelrollo - oK - Verblendung anthrazit', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Doppelrollo Verblendung schwarz *******************
        cy.get('div[options-property="verblendungsfarbe"] > ul').children().contains('schwarz').click({ force: true })
        cy.argosScreenshot('Doppelrollo - oK - Verblendung schwarz', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Doppelrollo oK Metallkette *******************
        cy.get('div[options-property="bedienungMaterial"] > ul > :nth-child(2)').click()
        cy.argosScreenshot('Doppelrollo - oK - Metallkette', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Doppelrollo Kugelkette rechts *******************
        cy.get('div[options-property="bedienseite"] > ul > :nth-child(2)').click()
        cy.argosScreenshot('Doppelrollo - oK - Kugelkette rechts', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
    })

    it('Doppelrollo mit Kassette', function () {

        // ******************* Doppelrollo ohne Kassette *******************
        cy.get('#type-selector-top > ul > :nth-child(4)').click({ force: true })
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));

        cy.argosScreenshot('Doppelrollo mit Kassette', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Doppelrollo Kassette weiß *******************
        cy.get('div[options-property="kassettenfarbe"] > ul').children().contains('weiß').click()
        cy.argosScreenshot('Doppelrollo - mK - Kassette weiß', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Doppelrollo Kassette creme *******************
        cy.get('div[options-property="kassettenfarbe"] > ul').children().contains('creme').click()
        cy.argosScreenshot('Doppelrollo - mK - Kassette creme', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Doppelrollo Kassette silber *******************
        cy.get('div[options-property="kassettenfarbe"] > ul').children().contains('silber').click()
        cy.argosScreenshot('Doppelrollo - mK - Kassette silber', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Doppelrollo Kassette grau *******************
        cy.get('div[options-property="kassettenfarbe"] > ul').children().contains('grau').click({ force: true })
        cy.argosScreenshot('Doppelrollo - mK - Kassette grau', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Doppelrollo Kassette anthrazit *******************
        cy.get('div[options-property="kassettenfarbe"] > ul').children().contains('anthrazit').click({ force: true })
        cy.argosScreenshot('Doppelrollo - mK - Kassette anthrazit', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Doppelrollo Kassette schwarz *******************
        cy.get('div[options-property="kassettenfarbe"] > ul').children().contains('schwarz').click({ force: true })
        cy.argosScreenshot('Doppelrollo - mK - Kassette schwarz', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Doppelrollo mK Metallkette *******************
        cy.get('div[options-property="bedienungMaterial"] > ul > :nth-child(2)').click()
        cy.argosScreenshot('Doppelrollo - mK - Metallkette', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Doppelrollo Kugelkette rechts*******************
        cy.get('div[options-property="bedienseite"] > ul > :nth-child(2)').click()
        cy.argosScreenshot('Doppelrollo - mK - Kugelkette rechts', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
    })
})