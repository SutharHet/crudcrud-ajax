$(document).ready(() => {
  let getData = () => {
    obj = {
      type: "GET",
      url: "https://crudcrud.com/api/b5ecd5851b554823b87dfcdaef91c6a2/colors",
      dataType: "json",
      success: (data) => {
        for(let i=1; i<data.length; i++){
          $(".colors").append("<tr><td>"+data[i].color+"<td><td>"+data[i].value+"<td></tr>")
        }
      },
      error: () => {
        console.log("Error in GET")
      }
    }
    $.ajax(obj)
  }

  // getData()

  let color = [	
    {
      id: 1,
      color: "red",
      value: "#f00"
    },
    {
      id: 2,
      color: "green",
      value: "#0f0"
    },
    {
      id: 3,
      color: "blue",
      value: "#00f"
    },
    {
      id: 4,
      color: "cyan",
      value: "#0ff"
    },
    {
      id: 5,
      color: "magenta",
      value: "#f0f"
    },
    {
      id: 6,
      color: "yellow",
      value: "#ff0"
    },
    {
      id: 7,
      color: "black",
      value: "#000"
    }
  ]

  let postData = (dataObj) => {
    obj = {
      type: "POST",
      url: "https://crudcrud.com/api/b5ecd5851b554823b87dfcdaef91c6a2/colors",
      // headers: {
      //   Accept: "application/json",
      //   "content-type": "application/json; charset=utf-8"
      // },
      dataType: "json",
      data: dataObj,
      success: (data) => {
        console.log(data)
        for(let i=1; i<data.length; i++){
          $(".colors").append("<tr><td>"+data[i].color+"<td><td>"+data[i].value+"<td></tr>")
        }
      },
      error: () => {
        console.log("Error in POST")
      },
      async:false
    }
    $.ajax(obj)
  }
  for(let i=0;i<color.length;i++){
    postData(color[i])
  }

})