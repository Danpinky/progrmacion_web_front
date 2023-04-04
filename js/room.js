document.addEventListener("DOMContentLoaded", () => {
  const absoluteChairs = [
    "bottom-0 left-0",
    "bottom-1/3 -left-5",
    "top-0 left-0",
    "-top-5 left-1/2",
    "bottom-0 right-0",
    "bottom-1/3 -right-5",
    "top-0 right-0",
    "-bottom-5 right-1/2",
  ];
  const sudentsGrid = document.querySelector("#students-grid");
  for (let i = 0; i < 20; i++) {
    sudentsGrid.innerHTML += `
    <div class="z-30 w-50 h-50 bg-transparent rounded-full flex justify-center items-center"> <!--Table relative container-->
        <div class="relative p-6 rounded-full">
          ${Array.from({ length: 8 }, (_, charIndex) => "")
            .map((e, charIndex) => {
              const position = absoluteChairs[charIndex];
              console.log({ position });
              return `<div class="z-50 absolute ${position} w-6 h-6 bg-transparent">
                <img src="/pages/asstes/chair-available.png" alt="">
              </div>`;
            })
            .join("\n")}
        <div class="z-40 w-24 h-24 bg-slate-400 rounded-full "></div> <!--Table-->
      </div>
    </div>
    
    `;
  }
});
