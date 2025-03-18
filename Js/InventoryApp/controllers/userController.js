const {getAllItemsQuery, createItemQuery} = require("../db/quries");
// const { get } = require("../routes/userRoutes");



async function createItem(req, res) {
    const {name,price,quantity, category, brand} = req.body;
    try{
        const row= await createItemQuery(name, parseInt(price), parseInt(quantity), brand, category);
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

async function  getAllItems(req, res) {
    try {
        

    const rows = await getAllItemsQuery();
    console.log("Value from all", rows)
    res.status(200).json(
        {
            message: rows
        }
    )

    } catch (error) {
       
        res.status(400).json({
            error: error.message
        })
    }

    
}
module.exports={createItem, getAllItems}
  