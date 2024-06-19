import React from 'react'

export default function Ws(myData) {

  
   let {location,name,mobile}=myData
   

   let obj={ 
      a:10,
      b:20,
      c:20
    }
    // console.log(obj.b)
   
    // called object Destructuring 
    
  return (
    <div>
       
       <h2> name:-{name} </h2>
       <h2> mobile:-{mobile} </h2>
       <h2> location:-{location} </h2>
   

    <Cart newProps={myData} />

    </div>
  )
}


function Cart(RenameNewProps){
    
    let {location,name,mobile}=RenameNewProps.newProps
    console.log(location)
    return(
        <>
             <h2> name:-{RenameNewProps.newProps.name} </h2>
        </>
    )
}


