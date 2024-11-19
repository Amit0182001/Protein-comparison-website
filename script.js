// Predefined types for each brand
const proteinTypes = {
    MuscleBlaze: ["Whey", "Isolate", "Concentrate", "Hydrolyzed Whey", "Casein", "Mass Gainer", "Vegan Protein"],
    Nackpro: ["Whey", "Concentrate", "Vegan Protein"],
    "Astis Atom": ["Casein", "Mass Gainer"],
    "Optimum Nutrition": ["Whey", "Isolate", "Hydrolyzed Whey"],
    MyProtein: ["Whey", "Isolate", "Vegan Protein"],
    BSN: ["Whey", "Mass Gainer"],
    Dymatize: ["Isolate", "Concentrate", "Hydrolyzed Whey"],
    Healthkart: ["Whey", "Mass Gainer", "Casein"],
    Sinew: ["Whey", "Isolate", "Vegan Protein"],
    GNC: ["Whey", "Mass Gainer", "Vegan Protein"],
    Labrada: ["Whey", "Concentrate", "Casein"],
    MuscleTech: ["Whey", "Isolate", "Mass Gainer"]
};

// Dynamically populate the "Type" dropdown based on the selected brand
const brandDropdown = document.getElementById("brand");
const typeDropdown = document.getElementById("type");

brandDropdown.addEventListener("change", function () {
    // Clear previous options
    typeDropdown.innerHTML = '<option value="">--Select Type--</option>';

    // Get selected brand
    const selectedBrand = brandDropdown.value;

    // Populate types for the selected brand
    if (proteinTypes[selectedBrand]) {
        proteinTypes[selectedBrand].forEach(type => {
            const option = document.createElement("option");
            option.value = type;
            option.textContent = type;
            typeDropdown.appendChild(option);
        });
    }
});

// Handle form submission
const form = document.getElementById("protein-form");
const proteinData = document.getElementById("protein-data");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const brand = brandDropdown.value;
    const type = typeDropdown.value;
    const name = document.getElementById("name").value;
    const weight = document.getElementById("weight").value;
    const price = document.getElementById("price").value;
    const protein = document.getElementById("protein").value;

    // Add new row to the table
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${brand}</td>
        <td>${name}</td>
        <td>${weight}</td>
        <td>${price}</td>
        <td>${protein}</td>
        <td>${type}</td>
    `;
    proteinData.appendChild(newRow);

    // Reset the form
    form.reset();
});
