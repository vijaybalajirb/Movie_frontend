import React, { useEffect, useState } from 'react'

const Body = () => {

    const [data,setdata]=useState([])
  
  useEffect(()=>{
    const data = async() => {
        let details=await fetch("https://moviebg.herokuapp.com/")
        let res = await details.json()
        setdata(res)
        console.log(res)
      }
      data()
  },[])

 
  return(
      
 <div className="container">
          <table className="table">
          <thead className="thead-dark">
    <tr>
      
      <th scope="col">Title</th>
      <th scope="col">Writer</th>
      <th scope="col">Year</th>
    </tr>
  </thead>
  <tbody>
     
            {
                data.map((datas,index)=>(
                    <tr key={index+1}>
                        <td>{datas.title}</td>
                        <td>{datas.writer}</td>
                        <td>{datas.year}</td>

                    </tr>
                ))
            }
          
      
  </tbody>
  </table>
  
 </div>
      
    )
}

export default Body;