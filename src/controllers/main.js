const mainCategory          =       require('../../models').mainCategory
const subCategory           =       require('../../models').subCategory
const Products              =       require('../../models').products


exports.mainCategory        =       async(req,res)=>{
    const category_name     =   req.body.name.trim()
    const category          =   await mainCategory.findOne({
        where:{
            category_name:category_name
        }
    })
    console.log(category)
    if(category == null){
        try {
        await mainCategory.create({category_name:category_name})
        return res.json({
            status:true,
            message:'new category added'
        })
        } catch (error) {
            console.log(error)
            return res.json({
                status:false,
                message:'something went wrong'
            })        
        }
    } else {
        return res.json({
            status:false,
            message:'A category with the same name already exists'
        })
    }


}

exports.subCategory         =   async(req,res)=>{
    const mainCategory      =   req.body.main_category.trim()
    const subCategoryname       =   req.body.sub_category.trim().toLowerCase()
    const category          =   await subCategory.findOne({
        where:{
            sub_category_name:subCategoryname
        }
    })

    if (category == null) {
    try {
        await subCategory.create({
            category_name:mainCategory,
            sub_category_name:subCategoryname
        })
        return res.json({
            status:true,
            message:'subcategory added'
        })
    } catch (error) {
        console.log(error)
        return res.json({
            status:true,
            message:'something went wrong'
        })
    }        
    } else {
        return res.json({
            status:false,
            message:'A subcategory with the same name already exists'
        })
    }
}

exports.addProduct          =   async(req,res)=>{
    console.log(req.body)
    const mainCategory      =   req.body.maincategory.trim()
    const subCategory       =   req.body.subcategory.trim()
    const productName       =   req.body.product_name.trim()
    
    try {
        await Products.create({category_name:mainCategory,sub_category_name:subCategory,product_name:productName})
        return res.json({
            status:true,
            message:'Product added'
        })
    } catch (error) {
        console.log(error)
        return res.json({
            status:false,
            message:'something went wrong'
        })
    }
}

exports.editMainCategory    =   async(req,res)=>{
    let newname             =   req.body.newname.trim().toLowerCase()
    let oldname             =   req.body.oldname.trim()
    const category          =   await mainCategory.findOne({
        where:{
            category_name:newname
        }
    })

    if(category == null){
        try {
            await mainCategory.update({category_name:newname},{
                where:{
                    category_name:oldname
                }
            })

            await subCategory.update({sub_category_name:newname},{
                where:{
                    sub_category_name:oldname
                }
            })
            await Products.update({category_name:newname},{
                where:{
                    category_name:oldname
                }
            })
            return res.json({
                status:true,
                message:'Category name updated'
            })
        } catch (error) {
            console.log(error)
            return res.json({
                status:false,
                message:'Something went wrong'
            })
        }
    } else {
        return res.json({
            status:false,
            message:"name already exists"
        })
    }

}

exports.editSubCategory     =   async(req,res)=>{
    let newname             =   req.body.newname.trim().toLowerCase()
    let oldname             =   req.body.oldname.trim()
    const category          =   await subCategory.findOne({
        where:{
            sub_category_name:newname
        }
    })

    if(category == null){
    try {
            await subCategory.update({sub_category_name:newname},{
                where:{
                    sub_category_name:oldname
                }
            })

            await Products.update({sub_category_name:newname},{
                where:{
                    sub_category_name:oldname
                }
            })
            return res.json({
                status:true,
                message:'Category name updated'
            })
        } catch (error) {
            console.log(error)
            return res.json({
                status:false,
                message:'Something went wrong'
            })
        }
    } else {
        return res.json({
            status:false,
            message:'Name already exists'
        })
    }
    
}

exports.home                =   async(req,res)=>{
    let mainCategories      = await mainCategory.findAll()
    let subcategories       = await subCategory.findAll() 
    let products            = await Products.findAll() 
    return res.render('home',{mainCategories,subcategories,products})
}