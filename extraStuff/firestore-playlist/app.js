const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#add-cafe-form');

// create element and render cafe
function renderCafe(doc){
  //change this part with backticks
  let li = document.createElement('li');
  let name = document.createElement('span');
  let city = document.createElement('span');
  let cross = document.createElement('div');
  
  li.setAttribute('data-id', doc.id);
  name.textContent = doc.data().name;
  city.textContent = doc.data().city;
  cross.textContent = 'x'
  
  li.appendChild(name);
  li.appendChild(city);
  li.appendChild(cross);
  
  cafeList.appendChild(li);
  
  // deleting data
  cross.addEventListener('click', (e) => {
    e.stopPropagation();
    // reference to the spesific element with unique id
    let id = e.target.parentElement.getAttribute('data-id');
    db.collection('cafes').doc(id).delete();
  })
}

// getting data 
//db.collection('cafes').get().then((snapshot) => {
  // db.collection('cafes').where('city', '==', 'london').get().then((snapshot) => {
  // db.collection('cafes').where('city', '>', 'n').get().then((snapshot) => {//all cities after n [n included]
//db.collection('cafes').orderBy('name').get().then((snapshot) => {  
//   db.collection('cafes').where('city', '==', 'manchester').orderBy('name').get().then((snapshot) => {
  //console.log(snapshot)
  //console.log(snapshot.docs);
//  snapshot.docs.forEach(doc => {
    //console.log(doc)
    //console.log(doc.data())
//  renderCafe(doc);
//  })
// })

// saving data
form.addEventListener('submit', (e) => {
  e.preventDefault();
  db.collection('cafes').add({
    name: form.name.value, //check for html name="name"
    city: form.city.value //check for htmk name="city"
  });
  // clean up  after yourself
  form.name.value = '';
  form.city.value = '';
});

// real-time listener
db.collection('cafes').orderBy('city').onSnapshot(snapshot => {
  let changes = snapshot.docChanges();
  changes.forEach(change => {
    console.log(change.doc.data());
      if (change.type == 'added'){
        renderCafe(change.doc)
      } else if (change.type == 'removed'){
        let li = cafeList.querySelector('[data-id=' + change.doc.id + ']');
        cafeList.removeChild(li);
      }
  })
})