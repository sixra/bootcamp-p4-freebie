export async function activateUser(hash) {
  console.log("activateUser");
  const response = await fetch(

    // `http://localhost:4000/api/activate/user/${hash}`
    `/api/activate/user/${hash}`,
    {
      method: "POST",

    }
  );
  console.log("activateUser2");
  if (response.status >= 400) {
    return { message: "Cannot Validate an User!" };
  } else {
    return { message: "Validation Done!" };
  }
}
