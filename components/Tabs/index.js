// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabs= document.querySelector(".topics")  // grabbing

axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(response=>{
    console.log(response);
    response.data.topics.forEach(items=>{
        console.log(items)
        function tabCreator(item){
            //Element Creation
            const tab= document.createElement('div')
            // Class List Assignment
            tab.classList.add('tab')
            //Text Content
            tab.textContent=item

            return tab;
        }
        tabs.append(tabCreator(items));
        console.log(tabCreator());
    })
  

})
.catch( error => {
    console.log("no data ", error)
  })