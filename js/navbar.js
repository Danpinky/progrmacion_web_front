// Variable declaration
const navbarElementSelected =
  "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium";
const navbarElementUnSelected =
  "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium";

const pathName = window.location.pathname.split("/").pop();

document.addEventListener("DOMContentLoaded", () => {
  
  if (
    localStorage.getItem("token") === null ||
    localStorage.getItem("token") === ""
  ) {
    if (!["landing_page.html", "index.html"].includes(pathName)) {
      window.location.href = "/pages/index.html";
    }
    return;
  }
  const pagePropsForNabvar = [
    {
      title: "Home",
      baseHref: "landing_page.html",
    },
    {
      title: "Gallery",
      baseHref: "gallery.html",
    },
    {
      title: "VIP",
      baseHref: "vip.html",
    },
    {
      title: "Room",
      baseHref: "room.html",
    },
  ];
  const navbarElementsContainer = document.querySelector("#navbar-elements");
  navbarElementsContainer.innerHTML = "";
  pagePropsForNabvar.forEach((page) => {
    const element = document.createElement("a");
    element.className =
      pathName == page.baseHref
        ? navbarElementSelected
        : navbarElementUnSelected;
    element.innerHTML = `${page.title}`;
    element.setAttribute("href", page.baseHref);
    navbarElementsContainer.append(element);
  });
});
