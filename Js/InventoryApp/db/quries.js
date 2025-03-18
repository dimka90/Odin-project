const db=require("../db/pool")


async function createItemQuery(name, price, quantity, brand, category) {
    try{
        const [categoryRow, brandRow] = await Promise.all([
            db.query("SELECT Id FROM category where category = $1", [category]),
            db.query("SELECT id from brand where brand_type = $1", [brand])
        ]);
      if (!categoryRow.rows.length)
        {
        
            throw new Error("Category not Found in the database")
        }
        if (!brandRow.rows.length) {

            throw new Error("Brand not Found in the database")
      }
        const {rows} =await db.query("INSERT INTO items (name, price,quantity,category_id, brand_id) Values($1, $2, $3, $4, $5) returning *",[
            name, parseInt(price),parseInt(quantity), parseInt(categoryRow.rows[0].id), parseInt(brandRow.rows[0].id)])

            if(!rows.length)                          
            {
                throw new Error("Error in inserting data ")   
            }
    
        return rows[0]        
        

    }catch(error){
        
        throw error
        };

    }

    async function getAllItemsQuery() {
        try {
            const {rows} = await db.query("SELECT * FROM items");

            if(!rows.length){
                throw new Error("Fail to Fetch Data from the database")
            }
       
            console.log(rows)
            return rows
        } catch (error) {
            throw error;
        }
    }
    async function  getAItemByCategoryQuery(name) {
        
        try{
        const {rows} = await db.query("SELECT id from category where  category = $1", [name])
        if(!rows.length){
            throw new Error(" Category does not Exist")
        }
        const {rows: itemsRow}= await db.query("SELECT name, price, quantity from items where category_id = $1", [rows[0].id]);

        if(!itemsRow.length){
            throw new Error("Could not retrive items")
        }
        return itemsRow

    }
    catch (error){
        throw error
    }
    }


module.exports = {createItemQuery, getAllItemsQuery, getAItemByCategoryQuery}