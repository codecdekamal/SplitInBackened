const Properties = require("../Schema/Properties.js")
const getSingleProperty = async (req,res)=>{
    try {
        const {property_id} = req.params
        const singleProperty =   await Properties.findById(property_id)
        res.status(200).json({singleProperty})  
      } 
        catch (error) {
        res.status(400).json({msg:error.message})
    }
}
const createProperty = async (req,res)=>{
   console.log(req.body);
   try {
    await Properties.create({...req.body})
    res.status(201).json({msg:"Success"})
   } catch (error) {
    res.status(400).json({msg:error})
}
}
const updatePropertyById =  async (req,res)=>{
    try {
        const {location,budget,size} = req.body;
        const {property_id} = req.params
        if(location || budget || size){
           await Properties.findByIdAndUpdate(property_id,{...req.body})
           res.status(200).json({msg:"success"})
        } 
    } catch (error) {
        res.status(400).json({msg:error.message})
    }

    
}
const deleteProperty = async (req,res)=>{
    try {
        const {property_id} = req.params
        await Properties.findByIdAndDelete(operty_id);
        res.status(200).json({msg:"success"})
    } catch (error) {
        res.status(500).json({msg:error.message})

    }
    
}
const gettingAllProperties = async (req,res)=>{
    try {
      const AllProperties =   await Properties.find({});
      res.status(200).json({AllProperties})
    } catch (error) {
        
    }
}
module.exports = {
    gettingAllProperties, getSingleProperty,createProperty,updatePropertyById,deleteProperty
}
