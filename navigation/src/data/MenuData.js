import { FaRegUser,FaHome,FaShoppingCart,FaUsersCog } from "react-icons/fa";

const MenuData =[
    {
        title:'หน้าแรก',
        path:'/',
        icon:<FaHome/>
    },
    {
        title:'สมาชิก',
        path:'/member',
        icon:<FaRegUser/>
    },
    {
        title:'สินค้า',
        path:'/product',
        icon:<FaShoppingCart/>
    },
    {
        title:'แอดมิน',
        path:'/admin',
        icon:<FaUsersCog/>
    }
]

export default MenuData