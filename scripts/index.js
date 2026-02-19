/* --------------------
   TOP RATED 3 PRODUCTS
   -------------------- */

  /* --------------
   FETCH PRODUCTS
   -------------- */

const ratingproducts=()=>{
const URL="https://fakestoreapi.com/products";
fetch(URL)
.then((res)=>res.json())
.then((json)=>{
     let ratedProducts=json
    .filter(product => product.rating.rate >= 0 && product.rating.rate <= 5)
    .slice(0,3);
    displayproducts(ratedProducts);
});
};
/* ------------------------
   FETCH PRODUCTS DETAILS
   ------------------------ */
const loadproductdetails=(id)=>{
    const URL=`https://fakestoreapi.com/products/${id}`;
    fetch(URL)
    .then((res)=>res.json())
    .then((json)=>{
        const product=json;
        displayproductdetails(product);
    });
};
/* ------------------------
   DISPLAY PRODUCTS DETAILS
   ------------------------ */
 const displayproductdetails=(product)=>{

    const container=document.getElementById("product-details-container");
    container.innerHTML=`
       <div class="bg-gray-100 p-8 flex items-center justify-center">
          <img src="${product.image}" alt="${product.title}" class="h-60 object-contain">
        </div>
            
            
        <div class="p-6">
          
          
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full font-medium">
              ${product.category}
            </span>

            <div class="flex items-center text-sm text-gray-600">
              <svg class="w-4 h-4 text-yellow-400 mr-1" fill="currentColor"
                   viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.959
                         4.162.034c.969.008 1.371 1.24.588 1.81l-3.36
                         2.443 1.27 3.98c.285.894-.755 1.637-1.54
                         1.087L10 13.347l-3.357 2.893c-.785.55-1.825-.193-1.54-1.087l1.27-3.98-3.36-2.443c-.783-.57-.38-1.802.588-1.81l4.162-.034 1.286-3.959z"/>
              </svg>
              ${product.rating.rate} (${product.rating.count})
            </div>
          </div>

        
          <h3 class="text-lg font-semibold text-gray-900 mb-2">
            ${product.title}
          </h3>
          <p class="text-lg text-gray-700 mb-4">${product.description}</p>

          
          <p class="text-xl font-bold text-gray-900 mb-5">
            $${product.price}
          </p>

          
          <div class="flex gap-4">
            
            <button class="flex-1 flex items-center justify-center gap-2 
                           border border-gray-300 rounded-lg py-2.5
                           text-gray-700 hover:bg-gray-100 transition">
              
      <svg class="w-5 h-5" viewBox="0 0 118.67 122.88" style="enable-background:new 0 0 118.67 122.88" xml:space="preserve"><g><path d="M3.92,22.79C1.81,22.79,0,20.99,0,18.77c0-2.11,1.81-3.92,3.92-3.92h5.43c0.1,0,0.3,0,0.41,0c3.62,0.1,6.84,0.8,9.54,2.51 c3.01,1.91,5.22,4.82,6.43,9.15c0,0.1,0,0.2,0.1,0.3l1,4.03h11.59c0.73,2.95,2.34,5.7,4.78,7.83H29.04l0,0l8.94,33.67h63.4 l8.33-33.67H95.95c2.44-2.13,4.04-4.89,4.78-7.83h13.06h0.96c2.21,0,3.92,1.81,3.92,3.92c0,0.41-0.11,0.8-0.2,1.21l-10.25,41.29 c-0.41,1.81-2.01,3.01-3.81,3.01l0,0H40.09c1.41,5.22,2.81,8.04,4.72,9.35c2.31,1.51,6.33,1.6,13.07,1.51h0.1l0,0h45.42 c2.21,0,3.92,1.81,3.92,3.92c0,2.21-1.81,3.92-3.92,3.92H57.98l0,0c-8.34,0.1-13.46-0.1-17.59-2.81 c-4.22-2.81-6.43-7.64-8.64-16.38l0,0L18.29,28.83c0-0.1,0-0.1-0.1-0.2c-0.6-2.21-1.6-3.72-3.01-4.52c-1.41-0.91-3.31-1.3-5.52-1.3 c-0.1,0-0.2,0-0.3,0L3.92,22.79L3.92,22.79L3.92,22.79L3.92,22.79z M66.62,44.11L50.36,30.76c-1.99-1.6-2.31-4.53-0.71-6.52 c1.6-1.99,4.53-2.31,6.52-0.71l8.77,7.3l-0.01-26.2C64.92,2.07,67,0,69.55,0c2.56,0,4.63,2.07,4.63,4.63l0.01,26.21l8.78-7.3 c1.99-1.6,4.91-1.28,6.52,0.71c1.6,1.99,1.28,4.91-0.71,6.52L72.52,44.11l-0.05,0.04c-1.71,1.33-3.94,1.43-5.79,0L66.62,44.11 L66.62,44.11L66.62,44.11z M81.49,58.08c0-1.24,1.23-2.24,2.73-2.24c1.51,0,2.73,1,2.73,2.24v4.71c0,1.24-1.23,2.24-2.73,2.24 c-1.51,0-2.73-1-2.73-2.24V58.08L81.49,58.08L81.49,58.08z M65.12,58.08c0-1.24,1.23-2.24,2.73-2.24c1.51,0,2.73,1,2.73,2.24v4.71 c0,1.24-1.23,2.24-2.73,2.24c-1.51,0-2.73-1-2.73-2.24V58.08L65.12,58.08L65.12,58.08z M48.76,58.08c0-1.24,1.23-2.24,2.73-2.24 c1.51,0,2.73,1,2.73,2.24v4.71c0,1.24-1.23,2.24-2.73,2.24c-1.51,0-2.73-1-2.73-2.24V58.08L48.76,58.08L48.76,58.08z M91.64,103.58 c5.33,0,9.65,4.32,9.65,9.65s-4.32,9.65-9.65,9.65c-5.32,0-9.65-4.32-9.65-9.65S86.32,103.58,91.64,103.58L91.64,103.58 L91.64,103.58L91.64,103.58z M49.34,103.58c5.32,0,9.65,4.32,9.65,9.65s-4.32,9.65-9.65,9.65c-5.33,0-9.65-4.32-9.65-9.65 S44.01,103.58,49.34,103.58L49.34,103.58L49.34,103.58L49.34,103.58z"/></g></svg>
              Buy Now
            </button>

            <button class="flex-1 flex items-center justify-center gap-2 
                           bg-gradient-to-r from-indigo-600 to-purple-600
                           text-white rounded-lg py-2.5
                           hover:opacity-90 transition">
              
              <svg class="w-5 h-5" fill="none" stroke="currentColor"
                   stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4
                         M7 13L5.4 5M7 13l-1.5 7h13M10 21a1 1 0 100-2
                         1 1 0 000 2zm8 0a1 1 0 100-2
                         1 1 0 000 2z"/>
              </svg>
              Add
            </button>

          </div>
        </div>

        <div>
         <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
        </div>
    `;
    document.getElementById("my_modal_3").showModal();
 }
  
/* ----------------------------
   DISPLAY TOP RATED 3 PRODUCTS
   ---------------------------- */

const displayproducts=(products)=>{
  
    const container=document.getElementById("top-rated-productContainer");
    container.innerHTML="";
    products.forEach((product) => {
        const productCard=document.createElement("div");
        productCard.className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition";
        productCard.innerHTML=`
        <div class="bg-gray-100 p-8 flex items-center justify-center">
          <img src="${product.image}" alt="${product.title}" class="h-60 object-contain">
        </div>
            
            
        <div class="p-6">
          
          
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full font-medium">
              ${product.category}
            </span>

            <div class="flex items-center text-sm text-gray-600">
              <svg class="w-4 h-4 text-yellow-400 mr-1" fill="currentColor"
                   viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.959
                         4.162.034c.969.008 1.371 1.24.588 1.81l-3.36
                         2.443 1.27 3.98c.285.894-.755 1.637-1.54
                         1.087L10 13.347l-3.357 2.893c-.785.55-1.825-.193-1.54-1.087l1.27-3.98-3.36-2.443c-.783-.57-.38-1.802.588-1.81l4.162-.034 1.286-3.959z"/>
              </svg>
              ${product.rating.rate} (${product.rating.count})
            </div>
          </div>

        
          <h3 class="text-lg font-semibold text-gray-900 mb-2">
            ${product.title}
          </h3>

          
          <p class="text-xl font-bold text-gray-900 mb-5">
            $${product.price}
          </p>

          
          <div class="flex gap-4">
            
            <button onclick="loadproductdetails(${product.id})" class="flex-1 flex items-center justify-center gap-2 
                           border border-gray-300 rounded-lg py-2.5
                           text-gray-700 hover:bg-gray-100 transition">
              
              <svg class="w-5 h-5" fill="none" stroke="currentColor"
                   stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5
                         c4.478 0 8.268 2.943 9.542 7
                         -1.274 4.057-5.064 7-9.542 7
                         -4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
              Details
            </button>

            <button class="flex-1 flex items-center justify-center gap-2 
                           bg-gradient-to-r from-indigo-600 to-purple-600
                           text-white rounded-lg py-2.5
                           hover:opacity-90 transition">
              
              <svg class="w-5 h-5" fill="none" stroke="currentColor"
                   stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4
                         M7 13L5.4 5M7 13l-1.5 7h13M10 21a1 1 0 100-2
                         1 1 0 000 2zm8 0a1 1 0 100-2
                         1 1 0 000 2z"/>
              </svg>
              Add
            </button>

          </div>
        </div>


        `;
        container.appendChild(productCard);
    });
}
/* -------------
   FUNCTION CALL
   ------------- */
ratingproducts();




/* ---------------------------
   CATEGORIES DISPLAY PRODUCTS
   --------------------------- */

    
/* --------------
   FETCH PRODUCTS
   -------------- */
let data = [];
const loadproducts=()=>{
const URL="https://fakestoreapi.com/products";
fetch(URL)
.then((res)=>res.json())
.then((json)=>{
    data=json
    displayallproducts(data);
});
};

/* ----------------
   FETCH CATEGORIES
   ---------------- */

 const allcategories=()=>{
        const URL="https://fakestoreapi.com/products/categories";
        fetch(URL)
        .then((res)=>res.json())
        .then((json)=>{
            const categories=json;
            const container=document.getElementById("categoryContainer");
            container.innerHTML="";
            displayallcategories("all", true);

            categories.forEach(category=>{
                displayallcategories(category)
            });
        });
    };

/* ---------------------------------
   DISPALY ALL CATEGORIES AS BUTTONS
   --------------------------------- */
function displayallcategories(category, active = false) {
  const container = document.getElementById("categoryContainer");

  const button = document.createElement("button");

  button.textContent =
    category === "all"
      ? "All"
      : category;

  button.className = `
    px-6 py-2 rounded-full border transition
    ${active
      ? "bg-indigo-600 text-white border-indigo-600 shadow-lg"
      : "bg-white text-gray-700 border-gray-300 hover:bg-indigo-100"}
  `;

  button.onclick = () => {
    setactivebutton(button);
    filterproducts(category);
  };

  container.appendChild(button);
}
/* -----------------
   SET ACTIVE BUTTON
   ----------------- */
const setactivebutton=(activeBtn) => {
  const buttons = document.querySelectorAll("#categoryContainer button");

  buttons.forEach(btn => {
    btn.className =
      "px-6 py-2 rounded-full border transition bg-white text-gray-700 border-gray-300 hover:bg-indigo-100";
  });

  activeBtn.className =
    "px-6 py-2 rounded-full border transition bg-indigo-600 text-white border-indigo-600 shadow-lg";
}

/* ---------------
   FILTER PRODUCTS
   --------------- */
const filterproducts=(category)=> {
  if (category === "all") {
    displayallproducts(data);
  } else {
    const filtered = data.filter(
      product => product.category === category
    );
    displayallproducts(filtered);
  }
}

/* ----------------
   DISPLAY PRODUCTS
   ---------------- */
const displayallproducts=(products)=>{
    const container=document.getElementById("all-productContainer");
    container.innerHTML="";
    products.forEach((product) => {
        const productCard=document.createElement("div");
        productCard.className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition";
        productCard.innerHTML=`
        <div class="bg-gray-100 p-8 flex items-center justify-center">
          <img src="${product.image}" alt="${product.title}" class="h-60 object-contain">
        </div>
            
            
        <div class="p-6">
          
          
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full font-medium">
              ${product.category}
            </span>

            <div class="flex items-center text-sm text-gray-600">
              <svg class="w-4 h-4 text-yellow-400 mr-1" fill="currentColor"
                   viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.959
                         4.162.034c.969.008 1.371 1.24.588 1.81l-3.36
                         2.443 1.27 3.98c.285.894-.755 1.637-1.54
                         1.087L10 13.347l-3.357 2.893c-.785.55-1.825-.193-1.54-1.087l1.27-3.98-3.36-2.443c-.783-.57-.38-1.802.588-1.81l4.162-.034 1.286-3.959z"/>
              </svg>
              ${product.rating.rate} (${product.rating.count})
            </div>
          </div>

        
          <h3 class="text-lg font-semibold text-gray-900 mb-2">
            ${product.title}
          </h3>

          
          <p class="text-xl font-bold text-gray-900 mb-5">
            $${product.price}
          </p>

          
          <div class="flex gap-4">
            
            <button onclick="loadproductdetails(${product.id})" class="flex-1 flex items-center justify-center gap-2 
                           border border-gray-300 rounded-lg py-2.5
                           text-gray-700 hover:bg-gray-100 transition">
              
              <svg class="w-5 h-5" fill="none" stroke="currentColor"
                   stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5
                         c4.478 0 8.268 2.943 9.542 7
                         -1.274 4.057-5.064 7-9.542 7
                         -4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
              Details
            </button>

            <button class="flex-1 flex items-center justify-center gap-2 
                           bg-gradient-to-r from-indigo-600 to-purple-600
                           text-white rounded-lg py-2.5
                           hover:opacity-90 transition">
              
              <svg class="w-5 h-5" fill="none" stroke="currentColor"
                   stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4
                         M7 13L5.4 5M7 13l-1.5 7h13M10 21a1 1 0 100-2
                         1 1 0 000 2zm8 0a1 1 0 100-2
                         1 1 0 000 2z"/>
              </svg>
              Add
            </button>

          </div>
        </div>


        `;
        container.appendChild(productCard);
    });
}
/* -------------
   FUNCTION CALL
   ------------- */
loadproducts();
allcategories();
