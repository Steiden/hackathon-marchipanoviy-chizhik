const weatherController = (req, res) => {
    try {
        const results = [{ title: "погода" }];
        res.json({ results });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Что-то пошло не так" });
    }
};

module.exports = weatherController;
