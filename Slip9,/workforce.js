const companies = [
    { id: 1, name: 'Company A', workforce: 20 },
    { id: 2, name: 'Company B', workforce: 50 },
    { id: 3, name: 'Company C', workforce: 15 },
    { id: 4, name: 'Company D', workforce: 100 },
    { id: 5, name: 'Company E', workforce: 25 }
];

// Function jo company ko ID aur workforce check karke dhoondta hai
function findCompanyByIdAndWorkforce(id) {
    // find() method se company ko dhoondhte hain jiska ID match kare aur workforce > 30 ho
    const company = companies.find(company => company.id === id && company.workforce > 30);

    // Agar company mil gayi toh return karo, nahi toh null return karo
    return company ? company : null;
}

// Example usage: ID 2 wali company ko dhoondhna hai jiska workforce > 30 ho
const result = findCompanyByIdAndWorkforce(2);

if (result) {
    console.log(`Company mila: ${result.name} with workforce of ${result.workforce}`);
} else {
    console.log('Aisi koi company nahi mili jiska workforce 30 se zyada ho.');
}