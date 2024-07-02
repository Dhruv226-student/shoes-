const Shoe = require("../models/shoes.model");
exports.getAllShoes = async (req, res) => {
  try {
    const shoes = await Shoe.find();
    res.json(shoes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
//post new shoe
exports.createShoe = async(req,res)=>{
    const { name, brand, size, price, inStock, imageShoes } = req.body;

    try {
      const newShoes = new Shoe({
        name,
        brand,
        size,
        price,
        inStock,
        imageShoes,
      });
         await newShoes.save()
        res.status(201).json(newShoes)
        console.log('shoes added');
    } catch (error) {
        res.status(400).json({message:error.message})
    }

}