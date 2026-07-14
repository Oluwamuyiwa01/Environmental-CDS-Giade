const scriptURL = "//script.google.com/macros/s/AKfycbxG0i72FN7KZCOcxYJlZ4AmYg0Q2wh_qmLgFUmeg0JAe7kpyeIVWoaWKJbhzEbJwyEUeA/exec";

const form = document.getElementById("applicationForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    

    // Get the selected radio button value
    const status = formData.get("status");

    const submitBtn = document.querySelector(".form-submit");

    submitBtn.disabled = true;
    submitBtn.textContent = "⏳ Submitting your application...";
    submitBtn.style = 'background:#67A12E'


    try {
        const response = await fetch(scriptURL, {
            method: "POST",
            body: formData
        });
       
        const result = await response.json();

        if (result.status === "success") {

            if (status === "Yes") {
                window.location.href = "join-us-successful.html";
                form.reset()

            } else {
                window.location.href = "join-us-notice.html";
                form.reset()
            }

        } else {
            alert("Submission failed.");
        }

    } catch (error) {
        console.error(error);
        alert("An error occurred while submitting the form.");
    }
    submitBtn.disabled = false;
    submitBtn.textContent = "Submit Application";
    submitBtn.style = ' background: var(--green-main)'
});



    