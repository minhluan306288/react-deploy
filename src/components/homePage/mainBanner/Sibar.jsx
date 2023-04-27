import React, { useState } from 'react'
import { menuSibar } from "@DataRaw/menu"
import MenuPupop from './MenuPopup'
import '../less/sibar.less'


function Sibar() {
   const [menusPupop, setMenuPopup] = useState([])
   const changeItemMenu = (menu_item) => {
      setMenuPopup(menu_item)
      console.log('hover', menu_item);
   }
  return (
    <div>
      <MenuPupop menu={menusPupop}/>
      <div className='menu-bar bg-gray-200'>
         <u>
            {
              menuSibar.map(i => 
                <li className='flex flex-nowrap items-center gap-2' key={i.id} onMouseEnter={() => changeItemMenu(i.menu_item)}>
                  <i dangerouslySetInnerHTML={{__html: i?.icon}} className={'w-5 h-5'} />
                  {i.name}
                  </li>
                )
            }
         </u>
      </div>
    </div>
  )
}

export default Sibar