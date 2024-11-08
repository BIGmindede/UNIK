var list_of_items =
document.getElementById("liked_list").getElementsByTagName("ul")[0];

var liked = {};
if (localStorage["liked"] != undefined) {
    liked = JSON.parse(localStorage["liked"]);

}

var liked_keys = [];
var k = 0;
for (let key in liked) {
    liked_keys[k] = key;
    k++;
}
if (localStorage["liked_keys"] != undefined) {
    liked_keys = JSON.parse(localStorage["liked_keys"]);
}

draw_liked();
function draw_liked() {
    if (Object.keys(liked).length > 0) {
        document.getElementById("empty").style.display = "none";
        var items = JSON.parse(localStorage["liked"]);
        for (let i = 0; i < liked_keys.length; i++) {
            let key = liked_keys[i];
            let pic = document.createElement("img");
            pic.src = items[key][1];
            let name = document.createElement("h3");
            name.innerText = items[key][0];
            let desc = document.createElement("cite");
            desc.innerText = items[key][2];
            let price = document.createElement("span");
            price.className = "price";
            price.innerText = "Цена: " + items[key][3] + " руб.";
            let item = document.createElement("li");
            item.setAttribute("data-art", key);
            item.setAttribute("price", items[key][3]);
            let add_to_cart = document.createElement("button");
            add_to_cart.className = "liked_to_cart";
            add_to_cart.innerText = "В корзину";
            let del_from_liked = document.createElement("button");
            del_from_liked.className = "del_from_liked";
            del_from_liked.innerText = "Удалить";
            item.append(pic);
            item.append(name);
            item.append(desc);
            item.append(price);
            item.append(add_to_cart);
            item.append(del_from_liked);
            list_of_items.append(document.createElement("hr"));
            list_of_items.append(item);
        }
    }
    else {
        document.getElementById("empty").style.display = "block";
    }
}

var lis = list_of_items.getElementsByTagName("li");

var carted = {};
if (localStorage["carted"] != undefined) {
    carted = JSON.parse(localStorage["carted"]);
}

for (let i = 0; i < lis.length; i++) {
    lis[i].getElementsByClassName("liked_to_cart")[0].onclick = function() {
        var articul = lis[i].getAttribute("data-art");
        var img = lis[i].getElementsByTagName("img")[0].src;
        var name = lis[i].getElementsByTagName("h3")[0].innerText;
        var desc = lis[i].getElementsByTagName("cite")[0].innerText;
        var price = lis[i].getAttribute("price");
        if (articul in carted) carted[articul][0]++;
        else carted[articul] = [1,name,img,desc,price]; 
        localStorage["carted"] = JSON.stringify(carted);
        
    }
}
actions();
function actions() {
    let i = 0;
    for (let i = 0; i < lis.length; i++) {
        lis[i].getElementsByClassName("del_from_liked")[0].onclick = function() {
            var articul = lis[i].getAttribute("data-art");
            delete liked[articul];
            localStorage["liked"] = JSON.stringify(liked);
            list_of_items.getElementsByTagName("hr")[i].remove();
            lis[i].remove();
            if (Object.keys(liked).length == 0) draw_liked();
            actions();
        }
    }
}

let to_min = document.getElementById("to_min");
to_min.onclick = function() {
    var items = JSON.parse(localStorage["liked"])
    var keys = [];
    let g = 0;
    
    for (var key in items) {
        keys[g]  = key;
        g++;
    }
    for (let i = 1; i < keys.length; i++) {
        let tmp = keys[i];
        let curr = items[keys[i]][3];
        let j;
        for (j = i - 1; j >= 0 && items[keys[j]][3] < curr; j--) {
            keys[j+1] = keys[j];
        }
        keys[j+1] = tmp;
    }
    localStorage["liked_keys"] = JSON.stringify(keys);
    console.log(localStorage["liked_keys"])
    location.reload();
}


let to_max = document.getElementById("to_max");
to_max.onclick = function() {
    var items = JSON.parse(localStorage["liked"])
    var keys = [];
    let g = 0;
    
    for (var key in items) {
        keys[g]  = key;
        g++;
    }
    for (let i = 1; i < keys.length; i++) {
        let tmp = keys[i];
        let curr = items[keys[i]][3];
        let j;
        for (j = i - 1; j >= 0 && items[keys[j]][3] > curr; j--) {
            keys[j+1] = keys[j];
        }
        keys[j+1] = tmp;
    }
    localStorage["liked_keys"] = JSON.stringify(keys);
    location.reload();
}

var min_cost = document.getElementById("min");
var max_cost = document.getElementById("max");
var set_filter = document.getElementById("set_filter");

set_filter.onclick = function() {
    let cost = 0;
    for (let i = 0; i < liked_keys.length; i++) {
        cost = JSON.parse(localStorage["liked"])[liked_keys[i]][3];
        if (cost < min_cost.value || cost > max_cost.value) {
            list_of_items.getElementsByTagName("hr")[i].style.display = "none";
            lis[i].style.display = "none";
        }
    }
}

var clear_filter = document.getElementById("clear_filter");

clear_filter.onclick = function() {
    for (let i = 0; i < liked_keys.length; i++) {
        list_of_items.getElementsByTagName("hr")[i].style.display = "block";
        lis[i].style.display = "block";
        min_cost.value = "";
        max_cost.value = "";
    }
}