let scrollToBottom = require("scroll-to-bottomjs");

describe('Integration test with visual testing - plissee configurator special shapes', function () {

    beforeEach(function () {

        cy.visit('/plissee/plissee-konfigurator')
        cy.ignoreMenuContainer()
    })

    it('Plissee - Sonderformen', function () {

        // ******************* Sonderformen *******************
        // change to tab Sonderformen
        cy.get('.tabs > :nth-child(3)').click({ force: true })
        cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 150, timing: 50 }));

        // --------------------------------------------------------------------------------------------------

        // preselected type is FDS3 
        cy.argosScreenshot('Sonderformen - FDS3 links gerichtet', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });


        // change direction to rechts
        cy.contains(new RegExp("^rechts\\s*$")).click({ force: true })

        cy.argosScreenshot('Sonderformen - FDS3 rechts gerichtet', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        //reset direction to left
        cy.contains(new RegExp("^links\\s*$")).click({ force: true })

        // --------------------------------------------------------------------------------------------------

        // select FDS4
        cy.contains(new RegExp("^FDS4\\s*$")).click({ force: true })

        cy.argosScreenshot('Sonderformen - FDS4 links gerichtet', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // change direction to rechts
        cy.contains(new RegExp("^rechts\\s*$")).click({ force: true })

        cy.argosScreenshot('Sonderformen - FDS4 rechts gerichtet', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        //reset direction to left
        cy.contains(new RegExp("^links\\s*$")).click({ force: true })

        // --------------------------------------------------------------------------------------------------

        // select VS9
        cy.contains(new RegExp("^VS9\\s*$")).click({ force: true })

        cy.argosScreenshot('Sonderformen - VS9', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // --------------------------------------------------------------------------------------------------

        // select VS10 
        cy.contains(new RegExp("^VS10\\s*$")).click({ force: true })

        cy.argosScreenshot('Sonderformen - VS10 links gerichtet', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // change direction to rechts
        cy.contains(new RegExp("^rechts\\s*$")).click({ force: true })

        cy.argosScreenshot('Sonderformen - VS10 rechts gerichtet', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        //reset direction to left
        cy.contains(new RegExp("^links\\s*$")).click({ force: true })

        // --------------------------------------------------------------------------------------------------

        // select SD2
        cy.contains(new RegExp("^SD2\\s*$")).click({ force: true })

        cy.argosScreenshot('Sonderformen - SD2 links gerichtet', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // change direction to rechts
        cy.contains(new RegExp("^rechts\\s*$")).click({ force: true })

        cy.argosScreenshot('Sonderformen - SD2 rechts gerichtet', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        //reset direction to left
        cy.contains(new RegExp("^links\\s*$")).click({ force: true })

        // --------------------------------------------------------------------------------------------------

        // select SD3
        cy.contains(new RegExp("^SD3\\s*$")).click({ force: true })

        cy.argosScreenshot('Sonderformen - SD3', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // --------------------------------------------------------------------------------------------------

        // select VS4 S1
        cy.contains(new RegExp("^VS4 S1\\s*$")).click({ force: true })

        cy.argosScreenshot('Sonderformen - VS4 S1 links gerichtet', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // change direction to rechts
        cy.contains(new RegExp("^rechts\\s*$")).click({ force: true })

        cy.argosScreenshot('Sonderformen - VS4 S1 rechts gerichtet', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        //reset direction to left
        cy.contains(new RegExp("^links\\s*$")).click({ force: true })

        // --------------------------------------------------------------------------------------------------

        // select VS4 S2
        cy.contains(new RegExp("^VS4 S2\\s*$")).click({ force: true })

        cy.argosScreenshot('Sonderformen - VS4 S2 links gerichtet', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // change direction to rechts
        cy.contains(new RegExp("^rechts\\s*$")).click({ force: true })

        cy.argosScreenshot('Sonderformen - VS4 S2 rechts gerichtet', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        //reset direction to left
        cy.contains(new RegExp("^links\\s*$")).click({ force: true })

        // --------------------------------------------------------------------------------------------------

        // select FS1
        cy.contains(new RegExp("^FS1\\s*$")).click({ force: true })

        cy.argosScreenshot('Sonderformen - FS1 links gerichtet', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // change direction to rechts
        cy.contains(new RegExp("^rechts\\s*$")).click({ force: true })

        cy.argosScreenshot('Sonderformen - FS1 rechts gerichtet', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        //reset direction to left
        cy.contains(new RegExp("^links\\s*$")).click({ force: true })

        // --------------------------------------------------------------------------------------------------

        // select FS2
        cy.contains(new RegExp("^FS2\\s*$")).click({ force: true })

        cy.argosScreenshot('Sonderformen - FS2 links gerichtet', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // change direction to rechts
        cy.contains(new RegExp("^rechts\\s*$")).click({ force: true })

        cy.argosScreenshot('Sonderformen - FS2 rechts gerichtet', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        //reset direction to left
        cy.contains(new RegExp("^links\\s*$")).click({ force: true })

        // --------------------------------------------------------------------------------------------------

        // select VS7
        cy.contains(new RegExp("^VS7\\s*$")).click({ force: true })

        cy.argosScreenshot('Sonderformen - VS7', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // --------------------------------------------------------------------------------------------------

        // select VS8
        cy.contains(new RegExp("^VS8\\s*$")).click({ force: true })

        cy.argosScreenshot('Sonderformen - VS8 links gerichtet', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // change direction to rechts
        cy.contains(new RegExp("^rechts\\s*$")).click({ force: true })

        cy.argosScreenshot('Sonderformen - VS8 rechts gerichtet', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        //reset direction to left
        cy.contains(new RegExp("^links\\s*$")).click({ force: true })

        // --------------------------------------------------------------------------------------------------

        // select VS5
        cy.contains(new RegExp("^VS5\\s*$")).click({ force: true })

        cy.argosScreenshot('Sonderformen - VS5 links gerichtet', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // change direction to rechts
        cy.contains(new RegExp("^rechts\\s*$")).click({ force: true })

        cy.argosScreenshot('Sonderformen - VS5 rechts gerichtet', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        //reset direction to left
        cy.contains(new RegExp("^links\\s*$")).click({ force: true })

        // --------------------------------------------------------------------------------------------------

        // select VS5 SD
        cy.contains(new RegExp("^VS5 SD\\s*$")).click({ force: true })

        cy.argosScreenshot('Sonderformen - VS5 SD links gerichtet', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // change direction to rechts
        cy.contains(new RegExp("^rechts\\s*$")).click({ force: true })

        // cy.percySnapshot('Sonderformen - VS5 SD rechts gerichtet')
        cy.argosScreenshot('Sonderformen - VS5 SD rechts gerichtet', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        //reset direction to left
        cy.contains(new RegExp("^links\\s*$")).click({ force: true })

        // --------------------------------------------------------------------------------------------------

        // select VS6
        cy.contains(new RegExp("^VS6\\s*$")).click({ force: true })

        cy.argosScreenshot('Sonderformen - VS6', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // --------------------------------------------------------------------------------------------------

        // select VS6 SD
        cy.contains(new RegExp("^VS6 SD\\s*$")).click({ force: true })

        cy.argosScreenshot('Sonderformen - VS6 SD', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });

        // --------------------------------------------------------------------------------------------------

        // select Bedienstab
        cy.get('div[options-property="bedienstab"] > ul > :nth-child(2)').click()
        cy.argosScreenshot('Sonderformen - Bedienstab', {
            viewports: [
                "iphone-6", // Use device preset for iphone-6
                { width: 1280, height: 1024 }, // Specify dimensions directly
            ]
        });
    })
})