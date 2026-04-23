// Load JSON file asynchronously
async function loadUsers() {
    try {

        const response = await fetch("user.json");

        return await response.json();

    } catch (error) {

        console.error("Error loading JSON file : ", error);
        // Empty array so rest of code executes instead of bug 
        return [];
    }
}

// Clear table rows except header
function clearTable() {

    $("#user-table tr:not(:first)").remove();

}

// Insert users into the table
function populateTable(users) {

    users.forEach(user => {

        const row = `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.last_name}</td>
                <td>${user.email}</td>
            </tr>
        `;

        $("#user-table").append(row);

    });
}

// Button click to clear then populate refresh table
$("#update-btn").on("click", async function () {

    clearTable();

    const users = await loadUsers();

    populateTable(users);
    
});
