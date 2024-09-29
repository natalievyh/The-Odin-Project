export default function contact() {
    const content = document.querySelector("#content");
    content.innerHTML='';

    const container = document.createElement("div");
    container.className = "contentContainer";
    content.appendChild(container);

    const heading = document.createElement("h1");
    heading.className = "heading";
    heading.textContent = "Contact";
    container.appendChild(heading);

    const email = document.createElement("p");
    const phone = document.createElement("p");
    email.textContent = "Email: applebarrel@gmail.com";
    phone.textContent = "Phone: (394)528-4932";
    container.appendChild(email);
    container.appendChild(phone);
}