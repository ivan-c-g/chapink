import connectDB from "../../../services/mongoose.services";
import Boe from '../../../models/boe.model'

const allBoes = async (req, res) => {
    if (req.method === 'GET') {
        try {
            const boes = await Boe.find()
            return res.status(200).json(boes)
        } catch (error) {
            return res.status(500).json(error)
        }
    } else {
        res.status(422).send('req_method_not_supported')
    }
}

export default connectDB(allBoes)