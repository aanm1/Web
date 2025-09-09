
async function get_info() {
  try {
    let response = await fetch("https://dog.ceo/api/breeds/image/random");
    let data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

get_info();



