const dateTastes = () => {
    let date = new Date(); //creates a date object.
    let year = date.getFullYear(); //gets year using local time.
    let month = date.getMonth() + 1; //gets month using local time, 1 is added because JS counts from 0.
    let day = date.getDate(); // gets day using local time.

    /*An object is created and values of day, month
    and year are attached to properties v1 and v2*/
    let dateObj = {
        v1: (`${day}/${month}/${year}`),
        v2: (`${month}/${day}/${year}`)
    };
    return dateObj;
}

dateTastes();