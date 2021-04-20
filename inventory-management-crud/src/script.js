// Book Class: Represents a Book
class Product{
    constructor(date, product, qty, price, stock,email,average){
        this.date = date;
        this.product = product;
        this.qty = qty;
        this.price = price;
        this.stock = stock;
        this.email = email;
        this.average = average;
      
    }
}

// UI Class: Handle UI Tasks
class UI{
    editMode = false;
    editTarget = null;
    static displayProducts(){

        const products = Store.getProducts();
        products.forEach((product)=>{
            UI.addProductTolist(product)
        })

    }

    static addProductTolist(product){
        const table = document.querySelector("#product-list");
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${product.date}</td>
            <td>${product.product}</td>
            <td>${product.qty}</td>
            <td>$${product.price}</td>
            <td>${product.stock}</td>
            <td>${product.email}</td>
            <td>$${product.average}</td>
            <td><i class="fas fa-trash-alt text-danger" onClick="UI.removeProduct(event, '${product.email}')"></i></td>
            <td><i class="far fa-edit text-primary" onClick="UI.editProduct(event, '${product.email}')"></i></td>
        `;

        table.appendChild(row);
    }

    static checkForEmail(email){
        const products = Store.getProducts();
        let flag = false;

        products.forEach((bk, index) => {
            if(bk.email === email){
                flag = true;
            }
        });

        return flag;
    }

    static updateProductTolist(product){
        if(UI.editTarget && UI.editMode){
           let row = UI.editTarget.parentElement.parentElement;
           row.innerHTML = `
            <td>${product.date}</td>
            <td>${product.product}</td>
            <td>${product.qty}</td>
            <td>$${product.price}</td>
            <td>${product.stock}</td>
            <td>${product.email}</td>
            <td>$${product.average}</td>
            <td><i class="fas fa-trash-alt text-danger" onClick="UI.removeProduct(event, '${product.email}')"></i></td>
            <td><i class="far fa-edit text-primary" onClick="UI.editProduct(event, '${product.email}')"></i></td>
        `;
        }
    }

    static editProduct(event, email){
        UI.editTarget = event.target;
        UI.editMode = true;
        let productList = Store.getProducts();
        productList.forEach((product,index) =>{
            if(product.email === email){
                document.querySelector("#date").value = product.date;
                document.querySelector("#product").value = product.product;
                document.querySelector("#qty").value= product.qty;
                document.querySelector("#stock").innerHTML = parseInt(product.stock) + parseInt(product.qty);
                

                document.querySelector("#price").value= product.price / product.qty;                    
                document.querySelector("#email").value= product.email;
                product.average = parseFloat((document.querySelector("#price").value)/document.querySelector("#price").innerHTML);
            }
        });
        
        document.getElementById("submitBtn").innerHTML = "Sell Product";
        document.getElementById("submitBtn").style.background = "	firebrick";
        document.getElementById("submitBtn").style.border = "	firebrick";
        document.querySelector("#email").disabled = true;
    }

    static removeProduct(event, email){
         event.target.parentElement.parentElement.remove();
         Store.removeProduct(email);
         UI.showAlertMessage("Product removed", "success");

     }

    static clearFields(){
        document.querySelector("#date").value = '';
        document.querySelector("#product").value = '';
        document.querySelector("#qty").value= '';
        document.querySelector("#price").value= '';
        document.querySelector("#stock").innerHTML= '';
        document.querySelector("#email").value= '';
        UI.editMode = false;
        UI.editTarget = null;
        document.querySelector("#email").disabled = false;
        document.getElementById("submitBtn").innerHTML = "Purchase Product";
        document.getElementById("submitBtn").style.background = "midnightblue";
        document.getElementById("submitBtn").style.border = "midnightblue";


    }

    static showAlertMessage(message, classname){
        const div = document.createElement('div');
        div.className = `alert alert-${classname}`;
        div.innerHTML = message;
        const container = document.querySelector('.container');
        container.insertBefore(div, document.querySelector("#product-form"));

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000)

    }
}


// Store Class: Handles Storage
class Store{

    static getProducts(){
        let products;
        if(localStorage.getItem('products') === null) {
            products = [];
        } else {
            products = JSON.parse(localStorage.getItem('products'));
        }

        return products;
    }

    static addProduct(product){
        const products = Store.getProducts();
       if(UI.editMode){
            Store.updateProduct(product);
       } else {
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
       }
        
        
    }

    static removeProduct(email){
        const products = Store.getProducts();
        products.forEach((product, index) => {
            if(product.email === email){
                products.splice(index, 1);
            }
        });

        localStorage.setItem('products', JSON.stringify(products));
    }

    static updateProduct(product){
        const products = Store.getProducts();
        products.forEach((bk, index) => {
            if(bk.email === product.email){
                  products[index] = product;
            }
        });
     
        localStorage.setItem('products', JSON.stringify(products));
    }
}

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayProducts());

// Event: Add a Book
document.querySelector("#product-form").addEventListener("submit", (e) =>{
  

  
    e.preventDefault();
    const date = document.querySelector("#date").value;
    const product = document.querySelector("#product").value;
    const qty = document.querySelector("#qty").value;
    const stock =  parseInt(document.querySelector("#stock").innerHTML) - parseInt(qty); 
    const price = document.querySelector("#price").value * qty;
    const email = document.querySelector("#email").value;
    const average = Math.round(price/stock).toFixed(2);

    if(date === '' || product === '' ||  qty === '' ||  price === ''||  stock === ''||  email === ''||  average === ''){
        UI.showAlertMessage("Please fill in all fields", "danger");
    } else{
        const products = new Product(date,product, qty, price,stock,email,average);
        
        

        if(UI.editMode) {
            UI.updateProductTolist(products);
            message = "Product sold";
            Store.addProduct(products);
            UI.showAlertMessage("Product sold", "danger");
            UI.clearFields();

        } else {
            
            const emailExist = UI.checkForEmail(email);
            if(emailExist){
                UI.showAlertMessage("One time purchase only", "danger");
            } else{
                UI.addProductTolist(products);
                Store.addProduct(products);
                UI.showAlertMessage("Product purchased", "success");
                UI.clearFields();
            }
            

        } 

        
    }

    
})

