
// ========================================
// INDEXEDDB FUNCTIONS
// ========================================
function initDB() {
return new Promise((resolve, reject) => {
const request = indexedDB.open('DocGenProDB', 1);

request.onerror = () => reject(request.error);
request.onsuccess = () => {
db = request.result;
resolve(db);
};

request.onupgradeneeded = (event) => {
const database = event.target.result;

if (!database.objectStoreNames.contains('invoices')) {
database.createObjectStore('invoices', { keyPath: 'id' });
}
if (!database.objectStoreNames.contains('quotations')) {
database.createObjectStore('quotations', { keyPath: 'id' });
}
if (!database.objectStoreNames.contains('receipts')) {
database.createObjectStore('receipts', { keyPath: 'id' });
}
if (!database.objectStoreNames.contains('payslips')) {
database.createObjectStore('payslips', { keyPath: 'id' });
}
if (!database.objectStoreNames.contains('customers')) {
database.createObjectStore('customers', { keyPath: 'id' });
}
if (!database.objectStoreNames.contains('bankAccounts')) {
database.createObjectStore('bankAccounts', { keyPath: 'id' });
}
if (!database.objectStoreNames.contains('settings')) {


