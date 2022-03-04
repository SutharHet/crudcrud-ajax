$(document).ready(() => {
  $(".putData").hide()
  
  let url = "https://crudcrud.com/api/5c75832c97f44cc388e7569911780ba5/colors/"
  
  let getData = () => {
    $(".colors").html("<tr><td>ID</td><td>Color</td><td>Hex</td></tr>");
    obj = {
      type: "GET",
      url: url,
      dataType: "json",
      success: (data) => {
        for(let i=1; i<data.length; i++){
          $(".colors").append("<tr><td>"+data[i]._id+"<td><td>"+data[i].color+"<td><td>"+data[i].value+"<td><td><button id=\"edi"+data[i]._id+"\">Edit</button><td><td><button id=\"del"+data[i]._id+"\">Delete</button><td></tr>")
        }
      },
      error: () => {
        console.log("Error in GET")
      },
      async:false
    }
    $.ajax(obj)
  }

  getData()

  let color = [
    {
      color: "red",
      value: "#f00"
    },
    {
      color: "green",
      value: "#0f0"
    },
    {
      color: "blue",
      value: "#00f"
    },
    {
      color: "cyan",
      value: "#0ff"
    },
    {
      color: "magenta",
      value: "#f0f"
    },
    {
      color: "yellow",
      value: "#ff0"
    },
    {
      color: "black",
      value: "#000"
    }
  ]

  let postData = (dataObj) => {
    obj = {
      type: "POST",
      url: url,
      headers: {"content-type": "application/json; charset=utf-8"},
      data: JSON.stringify(dataObj),
      success: ()=>{
        getData()
      },
      error: () => {
        console.log("Error in POST")
      },
      async:false
    }
    $.ajax(obj)
  }

  // for(let i=0; i<color.length;i++){
  //   postData(color[i])
  // }

  $(".postBtn").on("click",() => {
    let postColor = $("#postColor").val()
    let postHex = $("#postHex").val()
    dataObj = {
      color: postColor,
      value: postHex
    }
    postData(dataObj)
  })

  let deleteData = (dataId) => {
    obj = {
      type: "DELETE",
      url: url+dataId,
      success: ()=>{
        getData()
      },
      error: () => {
        console.log("Error in DELETE")
      }
    }
    $.ajax(obj)
  }

  let putData = (dataId,dataObj) => {
    obj = {
      type: "PUT",
      url: url+dataId,
      headers: {"content-type": "application/json; charset=utf-8"},
      data: JSON.stringify(dataObj),
      success: ()=>{
        getData()
      },
      error: () => {
        console.log("Error in PUT")
      },
      async: false
    }
    $.ajax(obj)
    $(".putData").hide(1000)
  }

  let putOp = (dataId) => {
    $(".putData").show(1000)
    obj = {
      type: "GET",
      url: url+dataId,
      success: (data)=>{
        $("#putId").val(data._id)
        $("#putColor").val(data.color)
        $("#putHex").val(data.value)
      },
      error: () => {
        console.log("Error in Get")
      },
      async:false
    }
    $.ajax(obj)
  } 

  $(".putBtn").on("click", ()=>{
    let dataId = $("#putId").val()
    let putColor = $("#putColor").val()
    let putHex = $("#putHex").val()
    let dataObj = {
      color: putColor,
      value: putHex
    }

    putData(dataId,dataObj)
  })
  
  $('.colors').on('click', 'button', () => { 
    let id = event.target.id
    let op = id.substr(0,3)
    id = id.substr(3)

    if(op == "del"){
      deleteData(id)
    }else if(op == "edi"){
      putOp(id)
    }
  })
})
