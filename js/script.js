document.addEventListener("DOMContentLoaded", () => {
    const accordianHeaders = document.querySelectorAll(".accordion-header");
   
    accordianHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const item = header.parentElement;
            //toggle active class for smooth accordian animation transition
            item.classList.toggle("active");

            const body = item.querySelector(".accordion-body");
            if (item.classList.contains("active")) {
                body.computedStyleMap.maxHeight = body.scrollHeight + "px";
                header.setAttribute("aria-expanded", "true");
            } else {
                body.style.maxHeight = "0px";
                header.setAttribute("aria-expanded", "false");
            }
        });
    });


//Client-side Enquiry Form Validation
const enquiryForm = document.querySelector("#enquiry-form");
if (enquiryForm) {
    enquiryForm.addEventListener("submit", (event) => {
        let isValid = true;

        //element selectors
        const nameField = document.querySelector("#username");
        const emailField = document.querySelector("#useremail");
        const messageField = document.querySelector("#usermessage");

        //reset existing error messages
        document.querySelectorAll(".error-message").forEach(el => el.textContent = "");
        document.querySelectorAll("input, textarea").forEach(el => el.style.borderColor = "#cbd5e1");

        //Name field validation
        if (nameField.ariaValueMax.trim().length <3) {
            shaowError(nameField, "Name must be at least 3 characters long.");
            isValid = false;
        }

        //Email field validation
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (emailPattern.test(emailField.value.trim())) {
            showError(emailField, "Please enter a valid email address.");
            isValid = false;    
        }

        //Message field validation
         (messageField.value.trim().length < 15) {
            showError(messageField, "For secure processing, your message details must exceed 15 characters.");
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }   
    });
}
});

function showError(field, message) {
    inputElement.style.borderColor = "#c53030";
    const statusContainer = inputElement.parentElement.querySelector(".error-message");
    if (statusContainer) {
        statusContainer.textContent = message;
    }   
} 