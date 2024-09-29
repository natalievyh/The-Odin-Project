
function createMenuItem(container, name, description) {
    const itemContainer = document.createElement("div");
    itemContainer.className = "menuItemContainer";
    container.append(itemContainer);

    const item = document.createElement("h1");
    item.className = "menuItem";
    item.textContent = `${name}`;
    const itemDesc = document.createElement("p");
    itemDesc.className = "menuItemDesc";
    itemDesc.textContent = `${description}`;

    itemContainer.appendChild(item);
    itemContainer.appendChild(itemDesc);
}

export default function menu() {
    const content = document.querySelector("#content");
    content.innerHTML='';

    const container = document.createElement("div");
    container.className = "contentContainer";
    content.appendChild(container);

    const heading = document.createElement("h1");
    heading.className = "heading";
    heading.textContent = "Menu";
    container.appendChild(heading);

    const items = document.createElement("div");
    items.className = "itemsContainer";
    container.appendChild(items);

    const applePie = 
        "A timeless favorite, our Classic Apple Pie features a golden, \
        flaky crust packed with tender, cinnamon-spiced apples. Perfectly \
        balanced between sweet and tart, this pie is a true homage to \
        homemade tradition. Served warm with a scoop of vanilla ice cream \
        for the ultimate treat.";

    const carmelAppleTart = 
        "Indulge in the rich, buttery goodness of our Caramel Apple Tart. \
        This delightful pastry is made with a crisp, delicate tart shell \
        filled with tender, caramel-glazed apple slices. Finished with a drizzle \
        of house-made caramel sauce and a dusting of powdered sugar, it's a \
        perfect harmony of sweet and tangy flavors with a decadent touch.";

    const appleFritter = 
        "Our Apple Fritter is a mouthwatering deep-fried pastry filled with \
        chunks of juicy apples, coated in a light cinnamon glaze. Crispy on the \
        outside and soft on the inside, this sweet treat offers the perfect \
        balance of texture and flavor. Ideal for breakfast on the go or an afternoon \
        snack, each bite promises a warm, spiced apple experience with a satisfying crunch.";

    createMenuItem(container, "Apple Pie", `${applePie}`);
    createMenuItem(container, "Caramel Apple Tart", `${carmelAppleTart}`);
    createMenuItem(container, "Apple Fritter", `${appleFritter}`);


}