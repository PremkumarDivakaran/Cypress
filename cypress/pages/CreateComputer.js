const helper = require("../utils/Helper.js")

const locators = {
    computerName : "css:#name",
    companyName : "css:#company",
    createBtn : "css:[value='Create this computer']"
}

function editComputerName(val){
    helper.editElement(locators.computerName,val)
}

function editCompanyName(val){
    helper.editElement(locators.companyName,val)
}

function clickCreateComputer(){
    helper.clickElement(locators.createBtn)
}

module.exports = {
    editComputerName,
    editCompanyName,
    clickCreateComputer
}