/* --------------------
   TOP RATED 3 PRODUCTS
   -------------------- */
{
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
            
            <button class="flex-1 flex items-center justify-center gap-2 
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

}


/* ---------------------------
   CATEGORIES DISPLAY PRODUCTS
   --------------------------- */
{
    
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
            console.log(categories);
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
  console.log(products);
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
            
            <button class="flex-1 flex items-center justify-center gap-2 
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
}