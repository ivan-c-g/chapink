import connectDB from "../../../services/mongoose.services";
import Category from '../../../models/category.model'


const handler = async (req, res) => {
    const { name, subCategory } = req.body
    console.log(req.body);

    if (req.method === 'POST') {
        try {
            const category = await Category.findOne({ name })
            console.log(category)
            if (!category) {
                const newCategory = await Category.create(req.body)
                console.log(newCategory)
                return res.status(200).json(newCategory)
            } else {
                return res.status(500).json("Category exist")
            }
        } catch (error) {
            return res.status(500).json(error)
        }
    } else {
        res.status(422).send('req_method_not_supported')
    }
}

export default connectDB(handler)