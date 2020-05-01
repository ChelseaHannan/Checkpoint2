var checkpoint2 {}

module.exports = {
    beforeEach: browser => {
        checkpoint2 = browser.page.checkpoint2Objects()
        checkpoint2.navigate()
    },

    // Tests here
    'test': browser => {
        checkpoint2
            .click()
            
    },

    'test': browser => {
        checkpoint2
            .click()
            
    },


}