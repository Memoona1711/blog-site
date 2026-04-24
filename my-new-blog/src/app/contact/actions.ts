"use server"

export async function handleContactForm(formData: FormData) {
  // Data nikalna
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  // Yahan aap console check kar sakte hain (Server terminal mein nazar aayega)
  console.log("New Submission:", { name, email, subject, message });

  // 2 second ka wait taake button loading state check ho sake (sirf testing ke liye)
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return { success: true };
}