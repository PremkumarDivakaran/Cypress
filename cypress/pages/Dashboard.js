const helper = require("../utils/Helper.js")

const locators = {
    addComputerBtn : "text:Add a new computer",
    searchComputer : "css:#searchbox",
    searchBtn : "css:#searchsubmit",
    searchResult : "css:[class='computers zebra-striped']>tbody>tr>td>a"
}

function clickAddComputer(){
    helper.clickElement(locators.addComputerBtn)
}

function editSearchComputer(val){
    helper.editElement(locators.searchComputer, val)
}

function clickSearchButton(){
    helper.clickElement(locators.searchBtn)
}

function getSearchResultElement(val){
    helper.validateText(locators.searchResult, val)
}

module.exports={
    clickAddComputer,
    editSearchComputer,
    clickSearchButton,
    getSearchResultElement
}