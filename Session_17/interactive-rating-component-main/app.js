const form = document.getElementById("myForm");
const rating = document.getElementById("rating");
const submission = document.getElementById("submission");
const ratingOutput = document.getElementById("ratingOutput");

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    const output = form.rating.value;
    console.log(output);
    rating.style.display = "none";
    ratingOutput.innerHTML = `You selected ${output} out of 5`
    submission.style.display = "flex";
})