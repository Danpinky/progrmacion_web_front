const onChangeTab = (index) => {
  // Change color of tab
  const tabsElement = document.querySelectorAll(`[id^="tab"]`);
  const tabs = Array.from(tabsElement);
  const classInactive =
    "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-500 hover:border-gray-300 dark:hover:text-gray-300";
  const classActive =
    "inline-block p-4  border-b-2 text-black rounded-t-lg dark:text-blue-500 dark:border-blue-500";
  // Change the active tab item
  tabs
    .filter((tab) => !tab.id.includes(`${index}`))
    .forEach((tab) => {
      tab.children[0].className = classInactive;
    });
  tabs
    .filter((tab) => tab.id.includes(`${index}`))
    .forEach((tab) => {
      tab.children[0].className = classActive;
    });
  // Change image resources in the carousel
  const carouselItems = document.querySelectorAll(".carousel-item");
  const carouselContainers = Array.from(carouselItems);
  const imagePrefix = getCarouselImages()[`tab${index}`];
  carouselContainers.forEach((container, i) => {
    container.children[0].setAttribute("src", `${imagePrefix}${i + 1}.jpg`);
  });
};

const getCarouselImages = () => {
  return {
    tab1: "asstes/grad-",
    tab2: "asstes/salon",
  };
};
