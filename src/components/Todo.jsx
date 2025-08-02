import React, { useState } from 'react'

function Todo() {

  const [activity, setActivity] = useState('')

  const [listData, setListData] = useState([])
  const addActivity = () => {
    // setListData([...listData, activity])  //create data copy and add activity on listData
    // console.log(listData)   //in this state works asyncronously
    setListData((listData) => {
      const updatedList = [...listData, activity]
      console.log(updatedList)
      setActivity('')
      return updatedList
    })
  }
  const removeActivity = (i) => {
    const updatedListData = listData.filter((elem, id) => {
      return i!=id;
    })
    setListData(updatedListData);
  }
  const removeAll = () => {
    setListData([])
  }
  return (
    <>
    <div>
    <h1>TodoList</h1>
    <div style={{display: "flex"}}>
    <input type="text" value={activity} placeholder='Add Activity' onChange={(e) => setActivity(e.target.value)} />
    <button style={{borderColor: "#000"}} onClick={addActivity}>Add</button>
    </div>
    <p>Here is your list :{")"}</p>
    {listData!=[] && listData.map((data, i) => {
      return(
        <>
        <p key={i} style={{display: "flex"}}>
          <h3 style={{width: "50%"}}>{data}</h3>
          <button style={{borderColor: "#000"}} onClick={() => removeActivity(i)}>Remove</button>   {/* //function call and pass parameter as key */}
        </p>
        </>
      )

    })}
{listData.length >= 1 && <button onClick={removeAll}>RemoveAll</button>}
    </div>
    </>
  )
}

export default Todo
