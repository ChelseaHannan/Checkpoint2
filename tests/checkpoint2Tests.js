var checkpoint2
var num = '12'
var filterObj = 'name'
var filterName = 'Jimmy Joe'
var filterString = 'Maddy'
var pal = 'madam'
var num1 = 1
var num2 = 2
var num3 = num1 + num2

module.exports = {
    beforeEach: browser => {
        checkpoint2 = browser.page.checkpoint2Objects()
        checkpoint2.navigate()
    },

    after: browser => {
        checkpoint2.end()
    },

    // Tests here
    'Evens and Odds': browser => {
        checkpoint2
            .setValue('@eOInput', num)
        checkpoint2
            .click('@eOBtn')
            .verify.containsText('@evenRes', num2)
            .verify.containsText('@oddRes', num1)     
    },

    'Filter Object': browser => {
        checkpoint2
            .setValue('@fOInput', filterObj)
        checkpoint2
            .click('@fOBtn')
            .verify.containsText('@fORes', filterName);        
    },

    'Filter String': browser => {
        checkpoint2
            .setValue('@fSInput', filterString)
        checkpoint2
            .click('@fSBtn')
            .verify.containsText('@fSRes', filterString)   
    },

    'Palindrome': browser => {
        checkpoint2
            .setValue('@palInput', pal)
        checkpoint2
            .click('@palBtn')
            .verify.containsText('@palRes', 'true')
    },

    'Sum': browser => {
        checkpoint2
            .setValue('@sumInput1', num1)
            .setValue('@sumInput2', num2)
        checkpoint2
            .click('@sumBtn')
            .verify.containsText('@sumRes', num3)
    },


}