const {getAllItemsQuery, createItemQuery, getAItemByCategoryQuery} = require("../db/quries");
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

    if(!rows.length){

        throw new Error("Fail To read Items from the dataBase")
    }
    res.status(200).json(
        {
            success: true,
            message: "Items successfully retirved",
            data: {
                data: rows
            }
        }
    )

    } catch (error) {
       
        res.status(400).json({
            error: error.message
        })
    }

    
}

async function getAItemByCategory(req, res) {
try{


const {name} = req.params;
if(!name){
    throw new Error("Category can't be Empty")
}
const items = await getAItemByCategoryQuery(name);

if(!items.length){

    throw new Error("Fail To read Items from the dataBase")
}
res.status(200).json({
    data: items
})
}
catch(error){

    res.status(300).json({
        success: false,
        data:error.message
    })
}
}
module.exports={createItem, getAllItems, getAItemByCategory}
  