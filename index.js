// Use the provided index.html
// -----------------------------------------------------------------------------------

// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.
function getUSA() {
    let contents = document.getElementsByTagName("span");
    for (let i = 0; i < contents.length; i++) {
        if (contents[i].innerText === "USA") {
            console.log(contents[i].innerText);
        }
    }
}
getUSA();

// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.
function getPeopleInSales() {
    let value = document.getElementsByClassName("empName");
    for (let m = 0; m < value.length; m++) {
        if (value[m].nextElementSibling.innerText === 'Sales') {
            console.log(value[m].innerText);
        }
    }

}
getPeopleInSales();
// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>
function getAnchorChildren() {
    const anchorElem = document.getElementsByTagName("a");
    for (let e = 0; e < anchorElem.length; e++) {
        for (let h = 0; h < anchorElem[e].children.length; h++) {
            if (anchorElem[e].children[h].localName === 'span') {
                console.log(anchorElem[e].children[h].textContent);
            }
        }
    }
}
getAnchorChildren();
// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.
//console.log(anchorchildren[s].innerText);
function getHobbies() {
    const diffHobbies = document.getElementsByTagName("select");
    for (let i = 0; i < diffHobbies.length; i++) {
        if (diffHobbies[i].name == 'hobbies') {
            for (let j = 0; j < diffHobbies[i].children.length; j++) {
                if (diffHobbies[i].children[j].defaultSelected == true)
                    console.log(diffHobbies[i].children[j].textContent);
            }
        }
    }
}
getHobbies();
// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the    attribute. 
function getCustomAttribute() {
    let value = document.querySelectorAll('[data-customAttr]');
    for (let m = 0; m < value.length; m++) {
        console.log(value[m].localName);
        console.log(value[m].getAttribute("data-customAttr"));
    }
}
getCustomAttribute();
//
// 6. Sum Event
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>  
// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element
function sumEvent() {
    const val1 = document.getElementById("num1");
    const val2 = document.getElementById("num2");
    const total = document.getElementById("sum").parentElement;
    val1.value = 0;
    val2.value = 0;
    val1.addEventListener("input", function() {
        total.textContent = `Total: ${(+val1.value + +val2.value)}`
    });
    val2.addEventListener("input", function() {
        total.textContent = `Total: ${(+val1.value + +val2.value)}`
    });
}
sumEvent();
// 7. Skills Even
// 7. Skills Event
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.
const skillSelected = document.getElementsByName('skills');
console.log(skillSelected);
skillSelected[0].addEventListener("change", myskills)

function myskills() {
    alert(` Are you sure ${skillSelected[0].value}  is one of your skills? `);
}

// 8. Favorite Color Event
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor
function favoriteColor() {
    const colors = document.getElementsByName("favoriteColor");
    for (let i = 0; i < colors.length; i++) {
        colors[i].addEventListener("click", function() {
            alert(`So you like ${colors[i].value} more than ${colors[i].style.backgroundColor}`)
            for (let j = 0; colors.length; j++) {
                colors[j].style.backgroundColor = `${colors[i].value}`;
            }
        })
    }
}

// 9. Show/Hide Event
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.
function hover() {
    const employees = document.querySelectorAll(".empName");
    for (let i = 0; i < employees.length; i++) {
        employees[i].parentElement.addEventListener("mouseover", function() {
            employees[i].hidden = !employees[i].hidden;
        })
    }
}
hover();


// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.
function currentTime() {
    const time = new Date();
    const hours = (time.getHours() < 10 ? '0' : '') + time.getHours();
    const minutes = (time.getMinutes() < 10 ? '0' : '') + time.getMinutes();
    const seconds = (time.getSeconds() < 10 ? '0' : '') + time.getSeconds();
    if (hours > 12) {
        document.getElementById("currentTime").textContent = `${hours - 12}:${minutes}:${seconds} pm`;
    } else {
        document.getElementById("currentTime").textContent = `${hours - 12}:${minutes}:${seconds} pm`;
    }
}
currentTime();

// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.
function delay() {
    const del = document.getElementById("helloWorld");
    del.addEventListener("click", function() {
        console.log(`clicked`);
        setTimeout(function() {
            //delay.setAttribute("color", rgb_number(Math.random() * 255,Math.random() * 255,Math.random() * 255));
            del.style.color = `RGB(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
        }, 3000);
        console.log(del.style.color);
    });
}
delay();

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node)
function domWalkin(node) {
    console.log(node);
    for (let i = 0; i < node.children.length; i++) {
        domWalkin(node.children[i]);
    }
}
