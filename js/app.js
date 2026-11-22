form = document.getElementById('search_form')
form.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log("form submitted")
    const input_val = form.search_inp.value.trim()
    console.log("input value:", input_val)
    if (!input_val) return;
    window.location.href = `results.html?search=${encodeURIComponent(input_val)}`

})
