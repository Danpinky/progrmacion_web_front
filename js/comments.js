const logoutOrRegisterBtn = document.querySelector(
  "#logout-or-register-button"
);

const getComments = async () => {
  const comments = await execApiCall("/posts", null, "GET");
  const commentsBox = document.querySelector("#comments-box");
  commentsBox.className = "w-full grid grid-cols-2 gap-8 mx-8";
  comments.data.forEach((comment) => {
    const newComment = document.createElement("div");
    newComment.className =
      "w-full py-4 px-8 mx-4 bg-white shadow-lg rounded-lg my-20";
    newComment.innerHTML = `
        <h2 class="text-gray-800 text-3xl font-semibold">${comment.text}</h2>
        <p class="mt-2 text-gray-600">${comment.total_likes} likes</p>
        </div>
        <div class="flex justify-start mt-4">
          <img class="w-7 h-7 mx-4 object-cover rounded-full border-2 border-indigo-500" src="asstes/usuario.png">
          <a href="#" class="text-xl font-medium text-indigo-500">${comment.user.full_name}</a>
        </div>`;
    commentsBox.append(newComment);
  });
};

const addComment = async () => {
  if (
    localStorage.getItem("token") === null ||
    localStorage.getItem("token") === ""
  ) {
    swal.fire("Opps!!", "You have to sign in first!", "warning");
    return;
  }
  const newCommentText = document.querySelector("#chat").value;
  const commentsResp = await execApiCall(
    "/posts",
    { text: newCommentText },
    "POST",
    { includeToken: true }
  );
  if (commentsResp != null) {
    swal.fire("Alright", "Message sent!", "success");
    return;
  }
};

document.querySelector("#login-button").addEventListener("click", () => {
  window.location.href = "/pages/index.html";
});

logoutOrRegisterBtn.addEventListener("click", () => {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/pages/sign_up.html";
  } else {
    localStorage.removeItem("token");
    window.location.href = "/pages/landing_page.html";
  }
});

document.querySelector("#comment-form").addEventListener("submit", (e) => {
  e.preventDefault();
});

document.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    logoutOrRegisterBtn.innerHTML = `Sign up`;
  } else {
    logoutOrRegisterBtn.innerHTML = `Log out`;
  }
  await getComments();
});
