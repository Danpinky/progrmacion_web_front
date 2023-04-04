const baseUrl = "http://localhost:3001/api";
const execApiCall = async (endpoint, body, method, opts = {}) => {
  const { includeToken = false } = opts;
  const token = includeToken ? localStorage.getItem("token") : "";
  try {
    const rawResponse = await fetch(`${baseUrl}${endpoint}`, {
      body: body != null ? JSON.stringify(body) : null,
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await rawResponse.json();
    if (!rawResponse.ok) {
      swal.fire("Opps!!", response.error, "warning");
      return null;
    }
    return response;
  } catch (error) {
    console.log({ error });
  }
};
