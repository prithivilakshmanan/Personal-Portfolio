(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function(event) {
            if (!button.classList.contains("active-btn")) {
                document.querySelector(".active-btn").classList.remove("active-btn");
                this.classList.add("active-btn");
                document.querySelector(".active").classList.remove("active");
                document.getElementById(button.dataset.id).classList.add("active");
            } else {
                // Handle download action for the download button
                // You may add your download logic here
                console.log("Download button clicked");
            }

            event.preventDefault(); // Prevent default behavior for anchor tags
        })
    });

    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });
})();
