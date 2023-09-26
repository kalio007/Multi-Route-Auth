
const helloworld = async (req, res) => {
    try {
        return res.status(200).json("hello world")
    } catch (error) {
        return req.status(500).json({ message: error.message })
    }
}
module.exports = { helloworld }