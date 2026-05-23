import React from 'react'
import axios from 'axios'
function CategoryPage() {
  const server="htttp://locallhost:8081/api"
  const getList = () => {
    axios({
      url : server+"category",
      method : "get",
      data: {

      }
    })
  }
  return (
    <div>
      
      <h1 className="text-green-800 text-4xl flex justify-center bg-neutral-300 mt-5">Category Page</h1>
    </div>
  )
}

export default CategoryPage
