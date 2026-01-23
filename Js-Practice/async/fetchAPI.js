async function get() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        console.log(data);
    }
    catch (result) {
        console.log(result.message);
    }
}
get()
