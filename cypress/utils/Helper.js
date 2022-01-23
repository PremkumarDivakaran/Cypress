/// <reference types="cypress" />

function findWebElement(locator){
    let type = locator.split(":")[0]
    let locatorName = locator.split(":")[1]

    switch(type){
        case "css":
            return cy.get(locatorName)
            break
        case "text":
            return cy.contains(locatorName)
            break
        default:
            throw new Error("wrong locator name")        
    }
}


function clickElement(locator){
    findWebElement(locator).click()
}

function editElement(locator, val){
    findWebElement(locator).type(val)
}

function validateText(locator, val){
    findWebElement(locator).should('have.text',val)
}

module.exports={
    findWebElement,
    clickElement,
    editElement,
    validateText
}
