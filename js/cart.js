/**
 * Copyright (c) 2015 Jon Cooper
 *
 * This file is part of js-cart.
 *
 * Documentation, related files, and licensing can be found at
 *
 *     <https://github.com/joncoop/js-cart>.
 *
 * Disclaimer/Known isssues:
 *
 * This code is intended for instructional purposes only. No claims of fitness for
 * actual online shopping is expressed or implied. (What I'm saying here is that this
 * code does a pretty good job at replicating the front-end experience of an online
 * shopping site. However, you'd be nuts to use this unless in conjuction with some
 * robust server-side authentication scripts.
 */


//********************************** CART CONFIGURATION ***********************************//

// products you sell by (id, name, price)
var products = new Array();
//dresses//
products[0] = new Product("100451-small", "Floral Flowey Dress",  45.00);
products[1] = new Product("100451-medium", "Floral Flowey Dress",  45.00);
products[2] = new Product("100451-large", "Floral Flowey Dress",  45.00);
products[3] = new Product("100452-small", "Purple Aztec Dress",    40.00);
products[4] = new Product("100452-medium", "Purple Aztec Dress",    40.00);
products[5] = new Product("10045-large", "Purple Aztec Dress",    40.00);
products[6] = new Product("100453-small", "Black Lace Dress",  52.00);
products[7] = new Product("100453-medium", "Black Lace Dress",  52.00);
products[8] = new Product("100453-large", "Black Lace Dress",  52.00);
products[9] = new Product("100454-small", "Rainbow Tribal Print",  48.00);
products[10] = new Product("100454-medium", "Rainbow Tribal Print",  48.00);
products[11] = new Product("100454-large", "Rainbow Tribal Print",  48.00);
products[12]= new Product("100455-small", "Lazy-day T-shirt Dress",  40.00);
products[13]= new Product("100455-medium", "Lazy-day T-shirt Dress",  40.00);
products[14]= new Product("100455-large", "Lazy-day T-shirt Dress",  40.00);
products[15] = new Product("100456-small", "Cody Printed Dress",  45.00);
products[16] = new Product("100456-medium", "Cody Printed Dress",  45.00);
products[17] = new Product("100456-large", "Cody Printed Dress",  45.00);
products[18] = new Product("100457-small", "Mint Midi Dress",  55.00);
products[19] = new Product("100457-medium", "Mint Midi Dress",  55.00);
products[20] = new Product("100457-large", "Mint Midi Dress",  55.00);
products[21] = new Product("100458-small", "Autumn Maxi Dress",  60.00);
products[22] = new Product("100458-medium", "Autumn Maxi Dress",  60.00);
products[23] = new Product("100458-large", "Autumn Maxi Dress",  60.00);
products[24] = new Product("100459-small", "Tribal Maxi Dress",  58.00);
products[25] = new Product("10045-medium", "Tribal Maxi Dress",  58.00);
products[26] = new Product("100459-large", "Tribal Maxi Dress",  58.00);
products[27] = new Product("1004510-small", "Floral Shift Dress",  40.00);
products[28] = new Product("1004510-medium", "Floral Shift Dress",  40.00);
products[29] = new Product("1004510-large", "Floral Shift Dress",  40.00);

//shorts//
products[30] = new Product("100551-small", "Embroidered Shorts", 28.00);
products[31] = new Product("100551-medium", "Embroidered Shorts", 28.00);
products[32] = new Product("100551-large", "Embroidered Shorts", 28.00);
products[33] = new Product("100552-small", "Black and White Floral Shorts", 25.00);
products[34] = new Product("100552-medium", "Black and White Floral Shorts", 25.00);
products[35] = new Product("100552-large", "Black and White Floral Shorts", 25.00);
products[36] = new Product("100553-small", "Hawaiian Print Shorts", 25.00);
products[37] = new Product("100553-medium", "Hawaiian Print Shorts", 25.00);
products[38] = new Product("100553-large", "Hawaiian Print Shorts", 25.00);
products[39] = new Product("100554-small", "Black and White Highwasted Shorts", 26.00);
products[40] = new Product("100554-medium", "Black and White Highwasted Shorts", 26.00);
products[41] = new Product("100554-large", "Black and White Highwasted Shorts", 26.00);
products[42] = new Product("100555-small", "Aztec Print Shorts", 30.00);
products[43] = new Product("100555-medium", "Aztec Print Shorts", 30.00);
products[44] = new Product("100555-large", "Aztec Print Shorts", 30.00);
products[45] = new Product("100556-small", "Studded White Shorts", 28.00);
products[46] = new Product("100556-memdium", "Studded White Shorts", 28.00);
products[47] = new Product("100556-large", "Studded White Shorts", 28.00);

//shirts//
products[48] = new Product("100651-small", "White Tunic Shirt", 28.00);
products[49] = new Product("100651-medium", "White Tunic Shirt", 28.00);
products[50] = new Product("100651-large", "White Tunic Shirt", 28.00);
products[51] = new Product("100652-small", "Printed Black and Pink Shirt", 32.00);
products[52] = new Product("100652-medium", "Printed Black and Pink Shirt", 32.00);
products[53] = new Product("100652-large", "Printed Black and Pink Shirt", 32.00);
products[54] = new Product("100653-small", "Red Printed Shirt", 26.00);
products[55] = new Product("100653-medium", "Red Printed Shirt", 26.00);
products[56] = new Product("100653-large", "Red Printed Shirt", 26.00);
products[57] = new Product("100654-small", "White and Red Tank", 26.00);
products[58] = new Product("100654-medium", "White and Red Tank", 26.00);
products[59] = new Product("100654-large", "White and Red Tank", 26.00);
products[60] = new Product("100655-large", "White and Red Long Sleeve", 30.00);
products[61] = new Product("100655-large", "White and Red Long Sleeve", 30.00);
products[62] = new Product("100655-large", "White and Red Long Sleeve", 30.00);

//shoes//
products[63] = new Product("100751-6", "Brown Suede Fringe", 28.00);
products[64] = new Product("100751-7", "Brown Suede Fringe", 28.00);
products[65] = new Product("100751-8", "Brown Suede Fringe", 28.00);
products[66] = new Product("100752-6", "Pink Beaded Sandals", 24.00);
products[67] = new Product("100752-7", "Pink Beaded Sandals", 24.00);
products[68] = new Product("100752-8", "Pink Beaded Sandals", 24.00);
products[69] = new Product("100753-6", "Camal Lace Up Ankel Boots", 26.00);
products[70] = new Product("100753-7", "Camal Lace Up Ankel Boots", 26.00);
products[71] = new Product("100753-8", "Camal Lace Up Ankel Boots", 26.00);
products[72] = new Product("100754-6", "Brown and Blue Beaded Sandals", 26.00)
products[73] = new Product("100754-7", "Brown and Blue Beaded Sandals", 26.00)
products[74] = new Product("100754-8", "Brown and Blue Beaded Sandals", 26.00)
products[75] = new Product("100755-6", "Pattern Beaded Sandals", 22.00)
products[76] = new Product("100755-7", "Pattern Beaded Sandals", 22.00)
products[77] = new Product("100755-8", "Pattern Beaded Sandals", 22.00)
products[78] = new Product("100756-6", "Ankel Boots", 28.00)
products[79] = new Product("100756-7", "Ankel Boots", 28.00)
products[80] = new Product("100756-8", "Ankel Boots", 28.00)

// tax rate for your state
var sales_tax_rate = 0.06;


// shipping
var free_shipping = false;
var shipping_rate = 6.99; // (will not be applied if free_shipping = true)


// site settings
var home_page_url = "index.html";
var dresses_url = "dresses.html";
var shorts_url = "shorts.html";
var shoes_url = "shoes.html";
var shirts_url="shirts.html"
var cart_url = "my_cart.html";
var checkout_url = "checkout.html";
var thanks_url = "thanks.html";
var cart_name = "my_cart"; // (must change if multiple carts run on same domain)


//************** END OF CONFIGURATION, DO NOT* MODIFY CODE BELOW THIS LINE!! **************//
//*                     ( * Unless you really know what you are doing. )                  *//


// public functions, for use on html pages

/**
 * Reads the cart string from local storage and sets product quantities. Then refreshes display.
 * Method should be called as body onload event for all pages that implement cart.
 *
 * Usage: <body onload="loadCart()">
 */
function loadCart()
{
    var cart_str = localStorage[cart_name];

    if (cart_str!=null && cart_str.length!=0)
    {
        var item_ids = cart_str.split("|");


        for (var i=0; i<item_ids.length; i++)
        {
            var index = search(item_ids[i]);

            if (index>-1)
            {
                var q = products[index].getQuantity() + 1;
                products[index].setQuantity(q);
            }
        }
    }

    refresh();
}

/**
 * Adds item to cart. Include button on product pages.
 *
 * Usage: <input type="button" onclick="addToCart("[item id]")" value="Add to cart" />
 *
 * @param {String} id of product to add
 */
function addToCart(id)
{
    var index = search(id);

    if (index>-1)
    {
        var name = products[index].getName();
        var quantity = products[index].getQuantity();
        var addIt = false;

        if (quantity==0)
        {
            alert("The following item was added to your cart: " + name)
            addIt = true;
        }
        else
        {
            addIt = confirm("The item \"" + name + "\" is already in your cart. Would you like to add another?");
        }
    }
    else
    {
        alert("Error: Invalid product ID");
    }

    if (addIt)
    {
        products[index].setQuantity(quantity + 1);
        writeCart();
    }

    refresh();
}

/**
 * Deletes the cart string from local storage, effectively setting all item quanties to zero.
 * Call after order is successfully placed.
 *
 * Usage: <body onload="emptyCart()">
 */
function emptyCart()
{
    localStorage.removeItem(cart_name);
    refresh();
}


/**
 * Product object. Product has ID, name, and price set by constructor. Quantity is set
 * by setter method. Getter methods return id, name, price, quantity, and extended price.
 *
 * @param {String} id unique product ID
 * @param {String} name product name
 * @param {Number} price price of product
 */
function Product(id,name,price)
{
    // fields set from constructor
    this.id = String(id);
    this.name = String(name);
    this.price = Number(price);
    var quantity = 0;

    // setters
    this.setQuantity = function(n) { quantity = n };

    // getters
    this.getId = function() { return id; };
    this.getName = function() { return name; };
    this.getPrice = function() { return price; };
    this.getQuantity = function() { return quantity; };
    this.getExtendedPrice = function() { return quantity * price; };

    // for testing only
    this.toString = function()
    {
        return id + "|" + name + "|" + price + "|" + quantity + "|" + this.getExtendedPrice();
    }
}


// helper functions. don't reference these on html pages. for interal use only.

/**
 * Changes the onclick attribute for the Add-to-cart button to selected option.
 *
 * @param {String} option ID of selected product
 * @param {String} button_id ID of corresponding add-to-cart button
 */
function setChoice(option, button_id) {
  if (option.value.length == 0) {
    document.getElementById(button_id).disabled = true;
  }
  else {
    document.getElementById(button_id).disabled = false;
    document.getElementById(button_id).onclick = function() { addToCart(option.value); };
  }
}

/**
 * Searches the products array for a product ID and returns the index of that product.
 * Product IDs are not case-sensitive.
 *
 * @param {String} id ID of product to find
 * @returns {Number} index of product, -1 if product ID is not found
 */
function search(id)
{
    var search_id = id.toLowerCase();

    for (var i=0; i<products.length; i++)
    {
        var this_id = products[i].getId().toLowerCase();

        if (this_id==search_id)
        {
            return i;
        }
    }

    return -1;
}

/**
 * Returns a pipe-delimited list of IDs for all products contained in cart.
 * The ID is contained in string multiple times if quantity is greater than 1.
 *
 * @returns {String} HTML code for shopping cart
 */
function cartToString()
{
    var cart_str ="";

    for (var i=0; i<products.length; i++)
    {
        q = products[i].getQuantity();

        for (var j=0; j<q; j++)
        {
            cart_str += products[i].getId() + "|";
        }
    }

    cart_str = cart_str.substring(0,cart_str.length-1);

    return cart_str;
}

/**
 * Writes the cart string (a list of product ids) to local storage.
 */
function writeCart()
{
    var cart_str = cartToString();
    localStorage[cart_name] = cart_str;
    refresh();
}

/**
 * Gets new quantities from cart form, writes new cart string.
 */
function updateCart()
{
    var my_cart = document.getElementById('cart_form');
    var inputs = my_cart.getElementsByTagName('input');

    for (i=0; i<inputs.length; i++)
    {
        var id = inputs[i].name;
        var quantity = Number(inputs[i].value);

        var index = search(id);

        if (index>-1 && !isNaN(quantity) && quantity>=0)
        {
            products[index].setQuantity(quantity);
        }
    }

    writeCart();
    refresh();
}

/**
 * Refreshes display of cart data.
 */
function refresh()
{
    var cart_area = document.getElementById("cart")
    var item_count_area = document.getElementById("item_count")
    var cart_link = document.getElementById("cart_link");
    var checkout_link = document.getElementById("checkout_link");
    var num_items = getNumItems();

    // draw cart if on cart page
    if (cart_area != null) cart_area.innerHTML = cartToTable();
    if (cart_area != null) cart_area.innerHTML = cartToTable();

    // update item count
    if (item_count_area != null) item_count_area.innerHTML = num_items;

    // update links
    if (cart_link != null) cart_link.href = cart_url;

    if (checkout_link != null)
    {
        if (num_items==0) checkout_link.href = cart_url;
        else              checkout_link.href = checkout_url;
    }
}

/**
 * Returns the sum of quantities for each item in the shopping cart.
 *
 * @returns total number of items in cart
 */
function getNumItems()
{
    var count = 0;

    for (i=0; i<products.length; i++)
    {
        count += products[i].getQuantity();
    }

    return count;
}

/**
 * Returns cart data as HTML table. If desired, edit style in cart.css.
 *
 * @returns {String} HTML code for shopping cart
 */
function cartToTable()
{
    var html_cart_str = "";
    var sub_total = 0;
    var tax = 0;
    var total = 0;
    var num_items = getNumItems();

    if (num_items>0)
    {
        html_cart_str = "<p>Please review your order. Press 'Update' to change quantities. " +
                        "To remove an item from your card, change the quantity to zero. " +
                        "Press 'Checkout' when you are ready to place your order.";

        html_cart_str += "<div class='cart'>"
        html_cart_str += "<form id='cart_form' action='" + checkout_url + "'>";
        html_cart_str += "<table>";
        html_cart_str += "<tr class='column-headings'>";
        html_cart_str += "<th>Item</th>";
        html_cart_str += "<th>Quantity</th>";
        html_cart_str += "<th>Unit Price</th>";
        html_cart_str += "<th>Ext. Price</th>";
        html_cart_str += "</tr>";

        for (i=0; i<products.length; i++)
        {
            var id = products[i].getId();
            var name = products[i].getName();
            var quantity = products[i].getQuantity();
            var price = products[i].getPrice();
            var extended_price = products[i].getExtendedPrice();

            sub_total += extended_price;
            tax = sub_total * sales_tax_rate;
            total = sub_total + tax;

            if (quantity>0)
            {
                html_cart_str += "<tr class='item'>";
                html_cart_str += "<td class='item_name'>" + name + "<br><span class='item_id'>ID: " + id + "</span></td>";
                html_cart_str += "<td class='item_quantity'><input name='" + id + "' type='text' size='3' value='" + quantity + "' /></td>";
                html_cart_str += "<td class='item_price'>$" + price.toFixed(2) + "</td>";
                html_cart_str += "<td class='item_total'>$" + extended_price.toFixed(2) + "</td>";
                html_cart_str += "</tr>";
            }
        }

        html_cart_str += "<tr class='subtotal'>";
        html_cart_str += "<th class='subtotal'colspan='3'>Subtotal:</th>";
        html_cart_str += "<td class='subtotal'>$" + sub_total.toFixed(2) + "</th>";
        html_cart_str += "</tr>";

        html_cart_str += "<tr class='tax'>";
        html_cart_str += "<th class='tax'colspan='3'>Tax:</th>";
        html_cart_str += "<td class='tax'>$" + tax.toFixed(2) + "</th>";
        html_cart_str += "</tr>";

        if (!free_shipping)
        {
            html_cart_str += "<tr class='shipping'>";
            html_cart_str += "<th class='shipping' colspan='3'>Shipping:</th>";
            html_cart_str += "<td class='shipping'>$" + shipping_rate.toFixed(2) + "</td>";
            html_cart_str += "</tr>";

            total += shipping_rate;
        }

        html_cart_str += "<tr class='total'>";
        html_cart_str += "<th class='total'colspan='3'>Total:</th>";
        html_cart_str += "<td class='total'>$" + total.toFixed(2) + "</th>";
        html_cart_str += "</tr>";
        html_cart_str += "</table>"

        html_cart_str += "<div class='buttons'>";
        html_cart_str += "<input type='button' value='Update' onclick='updateCart()' />";
        html_cart_str += "<input type='submit' value='Checkout' />";
        html_cart_str += "</form>"
        html_cart_str += "</div>";
    }
    else
    {
        html_cart_str = "<p class='no_items'>Your cart is empty. <a href='" + home_page_url + "'>Go shopping!</a></p>";
    }

    return html_cart_str;
}

// for testing only. writes a plain-text list of all products
function listProducts()
{
    for (i=0; i<products.length; i++)
    {
        document.write(products[i].toString() + "<br />");
    }
}
