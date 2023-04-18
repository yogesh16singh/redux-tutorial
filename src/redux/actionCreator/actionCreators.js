const { A, B, C, D } = require("../constants/constants")

let changeToRitik = () => {
    return {
        type: A,
        name: "RITIK"
    }
}
let changeToROHAN = () => {
    return {
        type: B,
        name: "ROHAN"
    }
}
let changeToSAHU = () => {
    return {
        type: C,
        name: "SAHU"
    }
}
let changeToJANU = () => {
    return {
        type: D,
        name: "JANU"
    }
}
module.exports = { changeToRitik, changeToROHAN, changeToJANU, changeToSAHU };