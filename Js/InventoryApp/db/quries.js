const db=require("../db/pool")


async function createItem(name, price, quantity, brand, category,) {
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

module.exports = {createItem}