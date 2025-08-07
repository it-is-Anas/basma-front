export async function fetchProfile(userId: string) {
  // Simulate API call
  return new Promise((resolve) =>
    setTimeout(() => resolve({ id: userId, name: "John Doe", age: 30 }), 1000)
  );
  // Example using fetch API (replace with your real API endpoint)
  // return fetch(`https://api.example.com/profile/${userId}`)
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     return response.json();
  //   });

}