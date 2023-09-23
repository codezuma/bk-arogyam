export const sendContactForm = async (data:any) =>
  fetch("/api/email", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then((res) => {
    return res.json();
  });
