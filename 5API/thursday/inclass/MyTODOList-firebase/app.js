
// Get a reference to the database service
let database = firebase.database();
let root = database.ref()

// create a post node under child
let postsRef = root.child('posts')

let postTitleTextBox = document.getElementById("postTitleTextBox")
let postBodyTextBox = document.getElementById("postBodyTextBox")
let postListUL = document.getElementById("postListUL")

function displayPosts(posts) {

    let postItems = posts.map((post) => {
        return `<li>${post.title}</li>`
    })

    postListUL.innerHTML = postItems.join('')
}

//postsRef.child(key).remove() 

function setupObservers() {

    postsRef.on('child_added',(snapshot) => {
        //console.log(snapshot.key)
        //console.log(snapshot.val())

        let post = {key: snapshot.key, ...snapshot.val()}
        console.log(post)

        // without spread operator 
       // let post = {key: snapshot.key, title: snapshot.val().title, body: snapshot.val().body}

    })

    /*
    postsRef.on('value',(snapshot) => {

        let posts = [] 

        let snapshotValue = snapshot.val() 

        for(let key in snapshotValue) {
            console.log(key)
            let post = snapshotValue[key]
            posts.push(post)
        }

        console.log(posts)
        displayPosts(posts) 

    }) */

}


let savePostButton = document.getElementById("savePostButton")
savePostButton.addEventListener('click',() => {

    let title = postTitleTextBox.value 
    let body = postBodyTextBox.value 

    // save the post and creates a unique ID for the NODE 
    postsRef.push({
        title: title, 
        body: body
    })

})

setupObservers() 







/*
let usersRef = root.child("users")

// push creates a unique id for the node name 
usersRef.push({
    name: "Alex", 
    age: 44
})

/*
usersRef.child("Alex").set({
    name: "Alex", 
    age: 23
})

usersRef.child("Alex").set({
    name: "Alex", 
    age: 25
}) */

/*
   Root
      - users 
            - Alex 
                 - name = alex 
                 - age = 23 
*/

/*
root.child("Task 1").set({
    title: "Wash car", 
    priority: "high"
})

root.child("Task 2").set({
    title: "Feed dog", 
    priority: "medium"
}) */


