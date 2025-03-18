const db = require("../db/quries")



async function createItem(req, res) {
    const {name,price,quantity, category, brand} = req.body;
    try{
        const row= await db.createItem(name, parseInt(price), parseInt(quantity), brand, category);
        res.status(201).json({
            succes: true,
            message: "Item Successfully Created",
            data:{
                name: row.name,
                price: row.price,
                quantity: row.quantity,
                category: row.category,
                brand: row.brand_type

            }
        })
    }
    catch(error)
    {
     
        res.status(400).json({
            succes: false,
            message: `${error.message}`,
        })
    }
 
}

module.exports=createItem
  