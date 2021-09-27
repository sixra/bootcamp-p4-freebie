export async function activateUser(hash) {
  const response = await fetch(
    `http://localhost:4000/api/activate/user/${hash}`
  );

  if (response.status >= 400) {
    return { message: "Cannot Validate an User!" };
  } else {
    return { message: "Validation Done!" };
  }
}