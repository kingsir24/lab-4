const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'attendance.json');

function readAttendance() {
    if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        if (fileContent) {
            return JSON.parse(fileContent);
        }
    }
    return [];
}

function saveAttendance(data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

module.exports = { readAttendance, saveAttendance };