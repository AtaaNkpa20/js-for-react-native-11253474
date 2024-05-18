// Functions to create user profiles
function createUserProfiles(originalNames, modifiedNames) {
    return originalNames.map((name, index) => {
        return {
            originalName: name,
            modifiedName: modifiedNames[index],
            id: index + 1
        };
    });
}

// Example usage
const originalNames = ["Frank", "James", "Vera", "David", "Nadia"];
const modifiedNames = ["FRANK", "JAMES", "VERA", "DAVID", "NADIA"];

const userProfiles = createUserProfiles(originalNames, modifiedNames);

console.log(userProfiles);