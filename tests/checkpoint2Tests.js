var checkpoint2
var num = '12'
var filterObj = 'name'
var filterName = 'Jimmy Joe'
var filterObj1 = 'hairColor'
var filterHair = 'brown'
var filterString = 'Maddy'
var filterStrings = 'James Jessica'
var filterStrings1 = 'James, Jessica'
var pal = 'madam'
var notPal = 'moon'
var num1 = 1
var num2 = 2
var num3 = num1 + num2
var dec1 = 1.5
var dec2 = 2.3
var dec3 = 3.8

module.exports = {
    beforeEach: browser => {
        checkpoint2 = browser.page.checkpoint2Objects()
        checkpoint2.navigate()
    },

    after: browser => {
        checkpoint2.end()
    },

    Tests here
    'Evens and Odds': browser => {
        checkpoint2
            .setValue('@eOInput', num)
        checkpoint2
            .click('@eOBtn')
            .verify.containsText('@evenRes', num2)
            .verify.containsText('@oddRes', num1)     
    },

    'Evens and Odds null entry': browser => {
        checkpoint2
            .setValue('@eOInput', filterString)
        checkpoint2
            .click('@eOBtn')
            .verify.containsText('@evenRes', 'null')
            .verify.containsText('@oddRes', 'null')     
    },

    'Filter Object search by name': browser => {
        checkpoint2
            .setValue('@fOInput', filterObj)
        checkpoint2
            .click('@fOBtn')
            .verify.containsText('@fORes', filterName);        
    },

    'Filter Object search by hair color': browser => {
        checkpoint2
            .setValue('@fOInput', filterObj1)
        checkpoint2
            .click('@fOBtn')
            .verify.containsText('@fORes', filterHair);        
    },

    'Filter String': browser => {
        checkpoint2
            .setValue('@fSInput', filterString)
        checkpoint2
            .click('@fSBtn')
            .verify.containsText('@fSRes', filterString)   
    },

    'Filter String use invalid name': browser => {
        checkpoint2
            .setValue('@fSInput', 'filterName')
        checkpoint2
            .click('@fSBtn')
            .verify.containsText('@fSRes', '')   
    },

    'Filter String input multiple strings space separated': browser => {
        checkpoint2
            .setValue('@fSInput', filterStrings)
        checkpoint2
            .click('@fSBtn')
            .verify.containsText('@fSRes', filterStrings)   
    },

    'Filter String input multiple strings comma separated': browser => {
        checkpoint2
            .setValue('@fSInput', filterStrings1)
        checkpoint2
            .click('@fSBtn')
            .verify.containsText('@fSRes', filterStrings1)   
    },

    'Palindrome': browser => {
        checkpoint2
            .setValue('@palInput', pal)
        checkpoint2
            .click('@palBtn')
            .verify.containsText('@palRes', 'true')
    },

    'Not a palindrome': browser => {
        checkpoint2
            .setValue('@palInput', notPal)
        checkpoint2
            .click('@palBtn')
            .verify.containsText('@palRes', 'false')
    },

    'Sum': browser => {
        checkpoint2
            .setValue('@sumInput1', num1)
            .setValue('@sumInput2', num2)
        checkpoint2
            .click('@sumBtn')
            .verify.containsText('@sumRes', num3)
    },

    'Sum leave one blank': browser => {
        checkpoint2
            .setValue('@sumInput1', num1)
            .setValue('@sumInput2', '')
        checkpoint2
            .click('@sumBtn')
            .verify.containsText('@sumRes', num1)
    },

    'Sum with decimals': browser => {
        checkpoint2
            .setValue('@sumInput1', dec1)
            .setValue('@sumInput2', dec2)
        checkpoint2
            .click('@sumBtn')
            .verify.containsText('@sumRes', dec3)
    }


}