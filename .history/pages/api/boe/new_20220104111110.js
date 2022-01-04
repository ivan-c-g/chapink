import connectDB from "../../../services/mongoose.services";
import Boe from '../../../models/boe.model'


const newBoe = async (req, res) => {

    const { street, number, strais, plant, door } = req.body

    console.log(req.body);

    if (req.method === 'POST') {

        try {
            const newBoe = await Boe.create(req.body)
            // const boe = await Boe.findOne({ street })
            // console.log(boe)
            // if (!boe) {
            //     const newBoe = await Boe.create(req.body)
            //     console.log(newBoe)
            //     return res.status(200).json(newBoe)
            // } else {
            //     return res.status(500).json("Boe exist")
            // }
        } catch (error) {
            return res.status(500).json(error)
        }

    } else {
        res.status(422).send('req_method_not_supported')
    }
}

export default connectDB(newBoe)