import React from 'react'

const App = () => {


  let relativeList = ["Arjun","Ashish","Yashi"]

  return (

    <div id="main">
               {/* Do not remove the main div */}
               <ol id='relativeList'>
                {relativeList.map((value,index)=>{
                   return( <li key={`relativeListItem1${index+1}`}> {value}</li>)
                })}
               </ol>
    </div>
  )
}

export default App
