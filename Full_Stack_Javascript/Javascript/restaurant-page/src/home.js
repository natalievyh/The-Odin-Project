
export default function home() {
    const content = document.querySelector("#content");
    content.innerHTML='';

    const container = document.createElement("div");
    container.className = "contentContainer";
    content.appendChild(container);

    const heading = document.createElement("h1");
    heading.className = "heading";
    heading.textContent = "Welcome to the Apple Barrel!";
    container.appendChild(heading);

    const description = document.createElement("p");
    description.textContent = 
        "We are a cozy, family-owned bakery here to bring you \
        the warmth and comfort of homemade baking to your table. \
        We specialize in fresh, handcrafted pastries and breads, \
        made with the finest ingredients. Our signature apple-based \
        delights, like our famous apple pie and caramel apple tarts, \
        are crafted using locally sourced apples. Whether you're \
        stopping by for a morning coffee and muffin or ordering a custom \
        cake for a special occasion, The Apple Barrel offers a welcoming \
        atmosphere and a taste of home in every bite.";
    container.appendChild(description);
}
