const { readData } = require("../utils/parse");

const getAllCountries = async (req, res) => {
    const countries = await readData("../data/world.json");
    // надо это куда-то елы палы туда сюда
    const country = countries.find((item) => {
        item.name === req.body.query;
    });
    console.log(country);
};

module.exports = getAllCountries;
