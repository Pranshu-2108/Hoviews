import React from 'react'
import { SidebarData } from './SidebarData';

const Sidebar = () => {
  return (
    <>
        
            <div className="bg-dark vh-100 px-2 py-4">
            
                <div className="py-2">
                    {SidebarData.map((item, index) => {
              return (
                
                    <div className="text-white py-2 mdft">
                        <a href={item.path}>
                            <span className="text-white p-2">{item.icon}</span>
                            <span className="text-white p-2">{item.title}</span>
                        </a>
                    </div>
                
              );
            })}
                </div>
        </div>
        
    </>
  )
}

export default Sidebar