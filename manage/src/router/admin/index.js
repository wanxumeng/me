import AdminLog from "../../views/admin/adminLog"

export default[
    {
        path:"/",
        name:"adminLog",
        component:AdminLog
    },{
        path:'/adminList',
        name:'adminList',
        component:()=>import("../../views/admin/adminList")
    }
]