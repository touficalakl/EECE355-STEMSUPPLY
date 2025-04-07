 function handleButtonClick(courseName, price, image, productId) {
    // Directly redirect to checkout page for payment
    buyNow(courseName, price, image, productId);
  }
  
  function buyNow(courseName, price, image, productId) {
    // Redirect to checkout page with product details and price as parameters
    window.location.href = `/courses-checkout.html?productId=${productId}&courseName=${encodeURIComponent(courseName)}&price=${price}`;
  }
  
  //payment for courses
  document.addEventListener("DOMContentLoaded", () => {
    const numberInput = document.getElementById("cardNumber");
    const nameInput = document.getElementById("cardHolder");
    const monthSelect = document.getElementById("month");
    const yearSelect = document.getElementById("year");
    const cvvInput = document.getElementById("cvv");
  
    const numberDisplay = document.getElementById("display-card-number");
    const nameDisplay = document.getElementById("display-card-name");
    const expiryDisplay = document.getElementById("display-card-expiry");
    const cvvDisplay = document.getElementById("cvv-preview");
    const card = document.getElementById("card");
  
    numberInput.addEventListener("input", () => {
      let value = numberInput.value.replace(/\D/g, "").substring(0, 16);
      let masked = value
        .replace(/(.{4})/g, "$1 ")
        .trim()
        .split(" ")
        .map((block, i) => (i === 0 || i === 3 ? block : "****"))
        .join(" ");
      numberDisplay.textContent = masked.padEnd(19, "*");
    });
  
    nameInput.addEventListener("input", () => {
      nameDisplay.textContent = nameInput.value.trim() || "FULL NAME";
    });
  
    function updateExpiry() {
      const month = monthSelect.value !== "Month" ? monthSelect.value : "";
      const year = yearSelect.value !== "Year" ? yearSelect.value.slice(2) : "";
      expiryDisplay.textContent = month && year ? `${month}/${year}` : "MM/YY";
    }
  
    monthSelect.addEventListener("change", updateExpiry);
    yearSelect.addEventListener("change", updateExpiry);
  
    cvvInput.addEventListener("focus", () => {
      card.classList.add("flipped");
    });
  
    cvvInput.addEventListener("blur", () => {
      card.classList.remove("flipped");
    });
  
    cvvInput.addEventListener("input", () => {
      cvvDisplay.textContent = cvvInput.value || "***";
    });
  });

document.addEventListener("DOMContentLoaded", () => {
    const numberInput = document.getElementById("cardNumber");
    const nameInput = document.getElementById("cardHolder");
    const monthSelect = document.getElementById("month");
    const yearSelect = document.getElementById("year");
    const cvvInput = document.getElementById("cvv");

    const numberDisplay = document.getElementById("display-card-number");
    const nameDisplay = document.getElementById("display-card-name");
    const expiryDisplay = document.getElementById("display-card-expiry");
    const cvvDisplay = document.getElementById("cvv-preview");
    const card = document.getElementById("card");

    // Course selection for checkout

    numberInput.addEventListener("input", () => {
        let value = numberInput.value.replace(/\D/g, "").substring(0, 16);
        let masked = value
            .replace(/(.{4})/g, "$1 ")
            .trim()
            .split(" ")
            .map((block, i) => (i === 0 || i === 3 ? block : "####"))
            .join(" ");
        numberDisplay.textContent = masked.padEnd(16, "*");
    });

    nameInput.addEventListener("input", () => {
        nameDisplay.textContent = nameInput.value.trim() || "FULL NAME";
    });

    function updateExpiry() {
        const month = monthSelect.value !== "Month" ? monthSelect.value : "";
        const year = yearSelect.value !== "Year" ? yearSelect.value.slice(2) : "";
        expiryDisplay.textContent = month && year ? `${month}/${year}` : "MM/YY";
    }

    monthSelect.addEventListener("change", updateExpiry);
    yearSelect.addEventListener("change", updateExpiry);

    cvvInput.addEventListener("focus", () => {
        card.classList.add("flipped");
    });

    cvvInput.addEventListener("blur", () => {
        card.classList.remove("flipped");
    });

    cvvInput.addEventListener("input", () => {
        cvvDisplay.textContent = cvvInput.value || "***";
    });
});

// Assuming you have a "Submit" button like this:
// <button id="submit-btn">Submit</button>

// Add event listener to the submit button (inside the form)
document.querySelector("button[type='submit']").addEventListener("click", function(event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

    // Create the success alert div
    const successAlert = document.createElement('div');
    successAlert.classList.add('success-alert');

    // Add the green check icon and message
    successAlert.innerHTML = `
        <i class="fas fa-check check-icon"></i> 
        Your purchase has been successful!
    `;
    
    // Style the success alert
    successAlert.style.position = 'fixed';
    successAlert.style.top = '20px';
    successAlert.style.right = '20px';
    successAlert.style.backgroundColor = '#4CAF50'; // Green background
    successAlert.style.color = 'white';
    successAlert.style.padding = '10px';
    successAlert.style.borderRadius = '5px';
    successAlert.style.fontSize = '16px';
    successAlert.style.display = 'flex';
    successAlert.style.alignItems = 'center';

    // Append the alert to the body
    document.body.appendChild(successAlert);

    // Hide the alert after 3 seconds
    setTimeout(function() {
        successAlert.style.display = 'none';
    }, 5000);
});
