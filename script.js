const convertBtn = document.getElementById("convert-btn");

const conversions = [
    {
        label: "Length (Meters/Feet)",
        conversion: 3.28084,
        metricUnit: "meters",
        imperialUnit: "feet"
    },
    {
        label: "Volume (Liters/Gallons)",
        conversion: 0.264172,
        metricUnit: "liters",
        imperialUnit: "gallons"
    },
    {
        label: "Mass (Kilograms/Pounds)",
        conversion: 2.20462,
        metricUnit: "kilograms",
        imperialUnit: "pounds"
    }
]

// Create display output programatically with a template string
function renderOutput(inputValue) {
    let displayOutput = "";

    for(let i = 0; i < conversions.length; i++) {
        const conversion = conversions[i];
        const metricValue = (inputValue * conversion.conversion).toFixed(2);
        const imperialValue = (inputValue / conversion.conversion).toFixed(2);
        const metricOutput = `${inputValue} ${conversion.metricUnit} = ${metricValue} ${conversion.imperialUnit}`;
        const imperialOutput = `${inputValue} ${conversion.imperialUnit} = ${imperialValue} ${conversion.metricUnit}`;
        
        displayOutput += 
        `
        <div class="display-output">
            <h3>${conversion.label}</h3>
            <p>${metricOutput} | ${imperialOutput}</p>
        </div>
        `
    }
    document.getElementById("output-container").innerHTML = displayOutput;
}

convertBtn.addEventListener("click", function() {
    const inputValue = Number(document.getElementById("input-value").value);
    renderOutput(inputValue);
});

// Initial render on page load
renderOutput(Number(document.getElementById("input-value").value));