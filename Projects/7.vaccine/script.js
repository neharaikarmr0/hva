fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states")
    .then(res => res.json())
    .then(data => console.log(data))