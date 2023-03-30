import React from 'react'
import {FiEdit2,FiDelete} from "react-icons/fi"

function List({itemsList,handleDeletion,handleEdit}) {
 console.log(itemsList);
 
  return (
    <>
    {itemsList.length<1?
      <div className='text-2xl text-center'>Woohoo... No work due soon...</div>:
    <div className='mt-12'>
      {itemsList.map(function(item,index){
        return(
          <article key={index} className='flex items-center justify-around my-4'>
          <input type="checkbox" className='w-5 h-5 ' />
              <p className='text-xl w-56'>{item}</p>
              
                  <FiEdit2 className=' text-blue-500 mx-5 text-xl cursor-pointer hover:animate-bounce ' onClick={()=>handleEdit(index)} />
                  <FiDelete className=' text-red-500 mx-3  cursor-pointer text-xl hover:animate-bounce' onClick={()=>handleDeletion(index)}/>
  
              
          </article>
        )
      })}
       
       
    </div>
    }
    </>

  )
}

export default List