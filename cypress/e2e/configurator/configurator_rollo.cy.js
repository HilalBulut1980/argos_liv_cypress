let scrollToBottom = require("scroll-to-bottomjs");

describe('Integration test with visual testing - rollo configurator', function () {

    beforeEach(function () {

        cy.visit('/rollo/rollo-konfigurator')
        cy.ignoreMenuContainer()
    })

    it('rechteckige Rollos - ohne Kassette', function () {

        // cy.wait('@js_minify') // js-files will be called only once

        // ******************* ohne Kassette - verschraubt am Fensterflügel *******************
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));


        cy.argosScreenshot('Rollo - ohne Kassette', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Rollo-Farbe & Eigenschaften wählen *******************
        cy.get('.configurator-button-subsection').click()
        // cy.wait(2000)
        cy.argosScreenshot('Rollo - oK - Stoff ändern', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* ohne Kassette - an der Wand *******************
        cy.get('div[options-property="befestigung"] > ul > :nth-child(3)').click()
        // cy.wait(2000)
        cy.argosScreenshot('Rollo - oK - an der Wand', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* ohne Kassette - an der Decke *******************
        cy.get('div[options-property="befestigung"] > ul > :nth-child(4)').click()
        // cy.wait(2000)
        cy.argosScreenshot('Rollo - oK - an der Decke', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* ohne Kassette - Klemmträger *******************
        cy.get('div[options-property="befestigung"] > ul > :nth-child(2)').click()
        // cy.wait(2000)
        cy.argosScreenshot('Rollo - oK - Klemmträger', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Halterung Metall *******************
        // --> RM32 Metall --> weitere Volanttypen somit sichtbar 
        cy.get('div[options-property="halterungMaterial"] > :nth-child(3) > :nth-child(2)').click()
        // cy.wait(2000)
        cy.argosScreenshot('Rollo - oK - Metallhalterung', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* ohne Kassette - Aluleiste rund *******************
        cy.get('div[options-property="volant"] > ul > :nth-child(2)').click()
        // cy.wait(2000)
        cy.argosScreenshot('Rollo - oK - Aluleiste rund', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* ohne Kassette - Aluleiste flach *******************
        cy.get('div[options-property="volant"] > ul > :nth-child(3)').click()
        // cy.wait(2000)
        cy.argosScreenshot('Rollo - oK - Aluleiste flach', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* ohne Kassette - kein Volant *******************
        // kein Volant wählen, damit Pendelsicherung (30,00 eur) sichtbar wird für nächsten Schritt
        cy.get('div[options-property="volant"] > ul > :nth-child(1)').click()
        // cy.wait(2000)
        cy.argosScreenshot('Rollo - oK - kein Volant', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* ohne Kassette - mit Pendelsicherung 30,00 *******************
        cy.get('div[options-property="pendelsicherung"] > ul > :nth-child(2)').click()
        // cy.wait(2000)
        cy.argosScreenshot('Rollo - oK - mit Pendelsicherung (30,00)', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Halterung Kunststoff mit Pendelsicherung 8,00 ******************* 
        //--> Halterung Kunststoff wählen, damit Pendelsicherung (8,00 eur) sichtbar wird
        cy.get('div[options-property="halterungMaterial"] > :nth-child(3) > :nth-child(1)').click()
        // cy.wait(2000)
        cy.argosScreenshot('Rollo - oK - mit Pendelsicherung (8,00)', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* ohne Kassette - mit Motorbedienung *******************
        cy.get('div[options-property="bedienung"] > ul > :nth-child(2)').click()
        // cy.wait(2000)
        cy.argosScreenshot('Rollo - oK - mit Motorbedienung', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
    })

    it('rechteckige Rollos - mit Kassette', function () {


        // ******************* mit Kassette - verschraubt am Fensterflügel*******************
        cy.get('div[options-property="kassette"] > ul > :nth-child(2)').click()
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));


        cy.argosScreenshot('Rollo - mit Kassette', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Rollo-Farbe & Eigenschaften wählen *******************
        cy.get('.configurator-button-subsection').click()
        cy.argosScreenshot('Rollo -  mK - Stoff ändern', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Rollo Höhe und Breite eingeben *******************
        //input height and weight
        cy.get('#hoehe_in_mm input').type('1000')
        cy.get('#breite_in_mm input').type('1000')

        // ******************* ohne Kassette - mit Motorbedienung *******************
        cy.get('div[options-property="bedienung"] > ul > :nth-child(2)').click()
        cy.argosScreenshot('Rollo - mK - mit Motorbedienung', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
    })

    it('Mini-Rollos - LUX', function () {


        // ******************* Mini-Rollo wählen *******************
        cy.get('.tab_description').contains('Mini-Rollos').click({ force: true })
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));


        cy.argosScreenshot('Mini-Rollo - LUX', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Mini-Rollo-Farbe & Eigenschaften wählen *******************
        cy.get('.configurator-button-subsection').click()
        cy.argosScreenshot('Mini-Rollo - LUX: Stoff ändern', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* MINI-LUX wählen *******************
        cy.get('div[options-property="rollotyp"] > ul > :nth-child(2)').click()
        cy.argosScreenshot('Mini-Rollo - MINI-LUX', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* MINI-LUX: Führungsschiene wählen *******************
        cy.get('div[options-property="fuehrungsschiene"] > ul > :nth-child(2)').click()
        cy.argosScreenshot('Mini-Rollo - MINI-LUX: Führunsgschiene', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* MINI-LUX: mit Klebeband am Fensterflügel *******************
        cy.get('div[options-property="befestigung"] > ul > :nth-child(2)').click()
        cy.argosScreenshot('Mini-Rollo - MINI-LUX: Klebeband', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* MINI-LUX: Bedienseite rechts *******************
        cy.get('div[options-property="bedienseite"] > ul > :nth-child(2)').click()
        cy.argosScreenshot('Mini-Rollo - MINI-LUX: Bedienseite rechts', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* MINI-LUX: Metallkette *******************
        cy.get('div[options-property="bedienungFabric"] > ul > :nth-child(2)').click()
        cy.argosScreenshot('Mini-Rollo - MINI-LUX: Metallkette', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* MINI-LUX: kostenpflichtige Farbauswahl *******************
        cy.get('div[options-property="farbeKassette"] > ul > :nth-child(7)').click({ force: true })
        cy.argosScreenshot('Mini-Rollo - MINI-LUX: Kassettenfarbe mahagoni', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
    })

    it('Dachfensterrollos', function () {


        // ******************* Dachfenster-Rollos wählen *******************
        cy.get('.tab_description').contains('Dachfensterrollos').click({ force: true })
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));


        cy.argosScreenshot('Dachfensterrollos', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });


        // ******************* Rollo-Farbe & Eigenschaften wählen *******************
        cy.get('.configurator-button-subsection').click()
        cy.argosScreenshot('DF-Rollo - Stoff ändern', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Dachfenster-Rollos Velux + anderes Produkt *******************
        cy.get('span').contains('Velux').click()
        cy.get('.dfselect_wrapper > :nth-child(1) select').should('be.enabled').select('anderes Produkt').wait(1000)
        cy.argosScreenshot('DF-Rollo - Velux - anderes Produkt', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Dachfenster-Rollos Velux + anderer Typ *******************
        cy.get('.dfselect_wrapper > :nth-child(1) select').should('be.enabled').select('GDL')
        cy.get('.dfselect_wrapper > :nth-child(2) select').should('be.enabled').select('anderer Typ').wait(1000)
        cy.argosScreenshot('DF-Rollo - Velux - anderer Typ', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Dachfenster-Rollos Roto *******************
        cy.get('#hersteller > ul > :nth-child(2)').click()
        cy.argosScreenshot('DF-Rollo - Roto', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Dachfenster-Rollos Fakro *******************
        cy.get('#hersteller > ul > :nth-child(3)').click()
        //if Fakro is selected slection 'Produkt' sholud be enabled before snaphot is taken
        cy.get('.dfselect_wrapper > :nth-child(1) select').should('be.enabled')
        cy.argosScreenshot('DF-Rollo - Fakro', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Dachfenster-Rollos Anderer Hersteller *******************
        cy.get('#hersteller > ul > :nth-child(4)').click()
        cy.argosScreenshot('DF-Rollo - Anderer Hersteller', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // ******************* Dachfenster-Rollos - Bedienstab *******************
        cy.get('div[options-property="bedienstab"] > ul > :nth-child(2)').click()
        cy.argosScreenshot('DF-Rollo - Bedienstab', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
    })
})
