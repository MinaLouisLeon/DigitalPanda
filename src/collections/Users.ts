import { CollectionConfig } from "payload/types";

export const Users:CollectionConfig = {
    slug:"users",
    auth:{
        verify:{
            generateEmailHTML:({token}) => {
                return `<p>hello please verify your email by clicking <a href="${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}">here</a></p>`
            }
        }
    },
    access:{
        read:() => true,
        create:() => true,
    },
    fields:[
        {
            name:"role",
            required:true,
            // admin:{
            //     condition:() => false
            // },
            type : "select",
            options : [
                {label:"Admin",value:"admin"},
                {label:"User",value:"user"}
            ]
        }
    ]
}