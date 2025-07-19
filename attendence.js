const readline = require('readline');
const attendanceModule = require('./attendeneModule');

let data = attendanceModule.readAttendance();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter student name: ', (name) => {
    rl.question('Present? (Yes/No): ', (present) => {
        rl.question('Enter student class & Division: ', (studentClass) => {
            rl.question('Enter Roll No: ', (RollNo) => {
              rl.question('Enter Subject Name: ', (subject) => {  
        const isPresent = present.trim().toLowerCase() === 'yes';
        const attendance = {
            name: name,
            date: new Date().toISOString(),
            class: studentClass,
            RollNo: RollNo,
            Subject:subject,
            status: isPresent ? 'present' : 'absent'
        };

        data.push(attendance);

        attendanceModule.saveAttendance(data);
        console.log('Attendance saved:', attendance);

        // Display all attendance records
        console.log('\nAll attendance records:');
        console.log(JSON.stringify(data, null, 2));

        rl.close();
    });
   });
  });
 });
});
