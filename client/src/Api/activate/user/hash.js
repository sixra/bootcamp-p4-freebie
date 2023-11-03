export async function activateUser(hash) {
  const response = await fetch(`/api/activate/user/${hash}`, {
    method: "POST",
  });

  if (response.status >= 400) {
    return { message: "Cannot Validate an User!" };
  } else {
    return { message: "Validation Done!" };
  }
}
