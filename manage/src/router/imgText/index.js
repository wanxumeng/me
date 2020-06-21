

export default[
   {
        path:'/imgmanage',
        name:'imgmanage',
        component:()=>import("../../views/imgText/imgmanage")
    },
    {
        path:'/textmessage',
        name:'textmessage',
        component:()=>import("../../views/imgText/textmessage")
    },
    {
        path:'/work',
        name:'work',
        component:()=>import("../../views/imgText/work")
    },
    {
        path:'/item',
        name:'item',
        component:()=>import("../../views/imgText/item")
    }
]