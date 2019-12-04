const completedItems = document.getElementById("completedItems")
fetch("https://jsonplaceholder.typicode.com/todos")
      .then(result => result.json())
      .then(json => {
        //console.log(json);
        const completed = json.filter(item => item.completed == true);
        console.log(completed);
        completed.map(item => {
          let display = `<li>${item.title}</li>`
          completedItems.innerHTML += display
        })
        
      });