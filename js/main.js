var productNameInput = document.getElementById("pn"),
    productPriceInput = document.getElementById("pp"),
    productCategoryInput = document.getElementById("pc"),
    productDescriptionInput = document.getElementById("pd"),
    addOrUpdateButtonInpute = document.getElementById("addOrUpdateButton"),
    store;

if (JSON.parse(localStorage.getItem("store")) == null) {
  store = []; 
} else {
  store = JSON.parse(localStorage.getItem("store"));
  display();
}

function addProduct() {
  var oneProduct = {
    productName: productNameInput.value,
    productPric: productPriceInput.value,
    productCategory: productCategoryInput.value,
    productDescroption: productDescriptionInput.value,
  };

  store.push(oneProduct);
  localStorage.setItem("store", JSON.stringify(store));
  display();
  clear();
}

function clear() {
  productNameInput.value = "";
  productPriceInput.value = "";
  productCategoryInput.value = "";
  productDescriptionInput.value = "";
}

function display() {
  var hasala = "";

  for (var i = 0; i < store.length; i++) {
    hasala +=
      ` <tr>
        <td>` +
      i +
      `</td>
        <td>` +
      store[i].productName +
      `</td>
        <td>` +
      store[i].productPric +
      `</td>
        <td>` +
      store[i].productCategory +
      `</td>
        <td>` +
      store[i].productDescroption +
      `</td>
       <td> <button onclick=" updateProductButton (` +
      i +
      `)" class=" btn btn-warning  "> Update</button> </td>
        <td> <button   onclick="deleteProduct(` +
      i +
      `)" class=" btn btn-dark  ">Delete</button> </dt>


    </tr>`;
  }

  document.getElementById("tbody").innerHTML = hasala;
}

function searchProduct(searchLetter) {
  var hasala = ``;

  for (var i = 0; i < store.length; i++) {
    if (
      store[i].productName.toLowerCase().includes(searchLetter.toLowerCase()) ||
      store[i].productCategory
        .toLowerCase()
        .includes(searchLetter.toLowerCase())
    ) {
      hasala +=
        ` <tr>
      <td>` +
        i +
        `</td>
      <td>` +
        store[i].productName +
        `</td>
      <td>` +
        store[i].productPric +
        `</td>
      <td>` +
        store[i].productCategory +
        `</td>
      <td>` +
        store[i].productDescroption +
        `</td>
     <td> <button onclick=" updateProductButton (` +
        i +
        `)" class=" btn btn-warning  "> Update</button> </td>
      <td> <button  onclick= "deleteProduct(` +
        i +
        `)" class=" btn btn-dark  " >Delete</button> </dt>
  </tr>`;
    }
  }

  if (hasala == ``) {
    hasala = `<h2 class=" fa-2x text-muted my-5 text-center "> Not founded <i class="far fa-times-circle  "></i>
    </h2>`;
  }

  document.getElementById("tbody").innerHTML = hasala;
}

function updateProductButton(indexOfProductUbdateButton) {
  addOrUpdateButtonInpute.innerHTML =
    `<button onclick="updateProduct(` +
    indexOfProductUbdateButton +
    `)" class=" btn  btn-dark  text-light  font-weight-bold mt-3"> Update product</button>`;

  productNameInput.value = store[indexOfProductUbdateButton].productName;
  productPriceInput.value = store[indexOfProductUbdateButton].productPric;
  productCategoryInput.value =
    store[indexOfProductUbdateButton].productCategory;
  productDescriptionInput.value =
    store[indexOfProductUbdateButton].productDescroption;
}

function updateProduct(indexOfProductUbdate) {
  store[indexOfProductUbdate].productName = productNameInput.value;
  store[indexOfProductUbdate].productPric = productPriceInput.value;
  store[indexOfProductUbdate].productCategory = productCategoryInput.value;
  store[indexOfProductUbdate].productDescroption =
    productDescriptionInput.value;
  localStorage.setItem("store", JSON.stringify(store));

  addOrUpdateButtonInpute.innerHTML = ` <button onclick="addProduct()" class=" btn  btn-dark  text-light  font-weight-bold mt-3"
     > Add product</button>`;

  display();
  clear();
}

function deleteProduct(deleteProduct) {
  store.splice(deleteProduct, 1);
  localStorage.setItem("store", JSON.stringify(store));
  display();
}
