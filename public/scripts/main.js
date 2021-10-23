async function get_visitors() {
    try {
        let response = await fetch('https://f4g6yn5zlj.execute-api.us-east-1.amazonaws.com/Prod/counter', {
            method: 'GET',
            headers: {}
        });
        let data = await response.json()
        document.getElementById("visitors").innerHTML = "Visitors: " + data['count'] ;
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
    }
}


get_visitors();
