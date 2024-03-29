import { PRODUCT_CATEGORIES } from "../../config/index";
import { CollectionConfig } from "payload/types";

export const Products:CollectionConfig = {
    slug: "products",
    admin: {
        useAsTitle: "name",
    },
    access: {

    },
    fields:[
        {
            name: "user",
            type: "relationship",
            relationTo : "users",
            required: true,
            hasMany: false,
            admin : {
                condition : () => false
            },
        },
        {
            name: "name",
            label: "Name",
            type: "text",
            required: true, 
        },
        {
            name: "descriptionn",
            label: "Product Details",
            type: "text"
        },
        {
            name: "price",
            label: "Price in USD",
            min: 0,
            max: 1000,
            type:"number",
            required:true
        },
        {
            name: "category",
            label: "Category",
            type: "select",
            options: PRODUCT_CATEGORIES.map(({label,value}) => ({label,value})),
            required:true
        },
        {
            name:"product_files",
            label: "Products File(s)",
            type:"relationship",
            required:true,
            relationTo:"product_files",
            // TODO: make it accept Multifiles
            hasMany:false
        },
        {
            name: "approvedForSale",
            label: "Product Status",
            access:{
                create: ({req}) => req.user.role === "admin",
                read : ({req}) => req.user.role === "admin",
                update : ({req}) => req.user.role === "admin"
            },
            type: "select",
            defaultValue:"pending",
            options:[
                {
                    label: "Pending verification",
                    value: "pending"
                },
                {
                    label : "Approved",
                    value : "approved"
                },
                {
                    label: "Denied",
                    value: "denied"
                }
            ]
        },
        {
            name: "priceId",
            access: {
                create: () => false,
                read: () => false,
                update: () => false
            },
            type: "text",
            admin: {
                hidden : true
            }
        },
        {
            name: "stripId",
            access: {
                create: () => false,
                read: () => false,
                update: () => false
            },
            type: "text",
            admin: {
                hidden : true
            }
        },
        {
            name: "images",
            type: "array",
            label: "Product Images",
            minRows: 1,
            maxRows: 10,
            required:true,
            labels: {
                singular : "Image",
                plural: "Images"
            },
            fields:[
                {
                    name: "image",
                    type: "upload",
                    relationTo: "media",
                    required:true
                }
            ]
        }
    ]
}