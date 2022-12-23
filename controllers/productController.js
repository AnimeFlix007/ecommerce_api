const getAllProducts = async (req, res, next) => {
    res.status(200).json({ msg: "Get All Products" })
}

const getAllTestingProducts = async (req, res, next) => {
    res.status(200).json({ msg: "Get All Testing Products" })
}

module.exports = {getAllProducts, getAllTestingProducts}

