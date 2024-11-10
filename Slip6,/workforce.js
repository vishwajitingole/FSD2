// Companies ka ek array hai, jisme har company ke details hain
const companies = [
    { id: 1, name: 'ABC Pvt Ltd', workforce: 20 },
    { id: 2, name: 'XYZ Enterprises', workforce: 35 },
    { id: 3, name: 'Tech Innovators', workforce: 50 },
    { id: 4, name: 'Creative Solutions', workforce: 15 }
];

// Find method use karke, company ko find karte hain jiska workforce 30 se zyada ho
const companyWithLargeWorkforce = companies.find(company => company.workforce > 30);

// Agar company mili toh uska naam print karo, warna "No company found" print karo
if (companyWithLargeWorkforce) {
    console.log(`Company with large workforce: ${companyWithLargeWorkforce.name}`);
} else {
    console.log('No company found with workforce greater than 30');
}