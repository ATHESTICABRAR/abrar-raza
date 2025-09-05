const students = [
  { sno: 1, roll: "24091A05AA", name: "BOLLAM YASHWANTH" },
  { sno: 2, roll: "24091A05AB", name: "C HARTHIK" },
  { sno: 3, roll: "24091A05AC", name: "CH PRAVEEN RAJU" },
  { sno: 4, roll: "24091A05AD", name: "CHALLA RISHITHA" },
  { sno: 5, roll: "24091A05AE", name: "CHINNOLLA PRAVALIKA" },
  { sno: 6, roll: "24091A05AF", name: "DAGE MALLIKA" },
  { sno: 7, roll: "24091A05AG", name: "DARAVATH SRAVANI" },
  { sno: 8, roll: "24091A05AH", name: "DASARI KIRAN" },
  { sno: 9, roll: "24091A05AJ", name: "DEERAVATH JAGADISH NAYAK" },
  { sno: 10, roll: "24091A05AK", name: "DHEERAVATH TINKU" },
  { sno: 11, roll: "24091A05AL", name: "G KEERTHI" },
  { sno: 12, roll: "24091A05AM", name: "GORRIBANDA ANITHA" },
  { sno: 13, roll: "24091A05AP", name: "GUDEM AKSHAYA" },
  { sno: 14, roll: "24091A05AR", name: "JAMMULA ABISHAI" },
  { sno: 15, roll: "24091A05AT", name: "JEELA ALEKHYA" },
  { sno: 16, roll: "24091A05AU", name: "K SAI CHANDRA" },
  { sno: 17, roll: "24091A05AV", name: "KALYANKAR SAITEJA" },
  { sno: 18, roll: "24091A05AW", name: "KANIKATLA NISHAD" },
  { sno: 19, roll: "24091A05AX", name: "KARIPE PRANEETH" },
  { sno: 20, roll: "24091A05AY", name: "KATIGHAR VAAGDEVI" },
  { sno: 21, roll: "24091A05AZ", name: "KOLA APARNA" },
  { sno: 22, roll: "24091A05BA", name: "KONDA LAKSHMI" },
  { sno: 23, roll: "24091A05BB", name: "KOTA NANDINI" },
  { sno: 24, roll: "24091A05BC", name: "KOTA SHASHANTH" },
  { sno: 25, roll: "24091A05BD", name: "KOTAGIRI RAKESH" },
  { sno: 26, roll: "24091A05BE", name: "KUKKARIKALLA KALYANI" },
  { sno: 27, roll: "24091A05BF", name: "LALAGARI HARIKA" },
  { sno: 28, roll: "24091A05BG", name: "MADUNAGULA JYOSHNA" },
  { sno: 29, roll: "24091A05BH", name: "MAMIDI KARTHIK" },
  { sno: 30, roll: "24091A05BJ", name: "MANDRU SUSAN" },
  { sno: 31, roll: "24091A05BK", name: "MARYADA KEERTHI" },
  { sno: 32, roll: "24091A05BL", name: "MEDI DEEPTHI SREE" },
  { sno: 33, roll: "24091A05BM", name: "MEKALA JAYANTH" },
  { sno: 34, roll: "24091A05BN", name: "MIRIYALA V S D S MUKUNDA SHARMA" },
  { sno: 35, roll: "24091A05BP", name: "MOHAMMAD ABRAR" },
  { sno: 36, roll: "24091A05BQ", name: "MOHAMMAD SAIF PARVEZ" },
  { sno: 37, roll: "24091A05BT", name: "NOMULA BHASKAR" },
  { sno: 38, roll: "24091A05BU", name: "NUTHANAPATI NAVADEEP" },
  { sno: 39, roll: "24091A05BV", name: "P VINAY TAGORE GOUD" },
  { sno: 40, roll: "24091A05BW", name: "PALADUGU SIGNAVI" },
  { sno: 41, roll: "24091A05BX", name: "PEDDINTI PRASHANTH KUMAR" },
  { sno: 42, roll: "24091A05BY", name: "RAMPALLI MANOJ KUMAR" },
  { sno: 43, roll: "24091A05BZ", name: "RAYALA KARTHIKEYA" },
  { sno: 44, roll: "24091A05CA", name: "SHAIK BEHAD SEYANAA" },
  { sno: 45, roll: "24091A05CB", name: "SHAIK NISHAT" },
  { sno: 46, roll: "24091A05CC", name: "SINGARAPU PREM" },
  { sno: 47, roll: "24091A05CD", name: "SUNKARA MOHAN ANJI REDDY" },
  { sno: 48, roll: "24091A05CE", name: "TALARI RAJ KUMAR" },
  { sno: 49, roll: "24091A05CF", name: "TEJAVATH ARUN" },
  { sno: 50, roll: "24091A05CG", name: "THUMKUNTA SAI PAVAN GOUD" },
  { sno: 51, roll: "24091A05CH", name: "V CHARITHA" },
  { sno: 52, roll: "24091A05CJ", name: "VANKUDOTH SATHISH" },
  { sno: 53, roll: "24091A05CK", name: "YABNOD SHIVPRASAD" },
  { sno: 54, roll: "24091A05CL", name: "YEDLA GNANAVYSHNAVI" },
  { sno: 55, roll: "24091A05Z4", name: "ANUMALA SIDVITHA" },
  { sno: 56, roll: "24091A05Z5", name: "ASKKANI SINDUJA" },
  { sno: 57, roll: "24091A05Z6", name: "AVADHANAM PARTHIV KUMAR" },
  { sno: 58, roll: "24091A05Z7", name: "AVULA KARTHIKEYA" },
  { sno: 59, roll: "24091A05Z8", name: "BAINDLA UPENDAR" },
  { sno: 60, roll: "24091A05Z9", name: "BANOTH SANDEEP" }
];

const tableBody = document.querySelector("#attendanceTable tbody");
const dateInput = document.getElementById("dateInput");
dateInput.valueAsDate = new Date();

// Render table
students.forEach(stu => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${stu.sno}</td>
    <td>${stu.roll}</td>
    <td>${stu.name}</td>
    <td><input type="checkbox" class="morning"></td>
    <td><input type="checkbox" class="afternoon"></td>
  `;
  tableBody.appendChild(row);
});

function markAll() {
  document.querySelectorAll("input[type=checkbox]").forEach(cb => cb.checked = true);
}

function clearAll() {
  document.querySelectorAll("input[type=checkbox]").forEach(cb => cb.checked = false);
}

function getTodaySummary() {
  let present = 0, total = students.length * 2;
  document.querySelectorAll("tbody tr").forEach(row => {
    const [m, a] = row.querySelectorAll("input");
    if (m.checked) present++;
    if (a.checked) present++;
  });
  return { present, total, percent: ((present/total)*100).toFixed(2) };
}

function saveSession() {
  const key = dateInput.value;
  const data = [];
  document.querySelectorAll("tbody tr").forEach((row, i) => {
    const [m, a] = row.querySelectorAll("input");
    data.push({ roll: students[i].roll, morning: m.checked, afternoon: a.checked });
  });
  localStorage.setItem(key, JSON.stringify(data));
  alert("Session saved!");
  updateSummary();
}

function updateSummary() {
  const today = getTodaySummary();
  document.getElementById("todaySummary").innerText =
    `Today: ${today.present}/${today.total} (${today.percent}%)`;
}

function shareToday() {
  const today = getTodaySummary();
  const text = `Attendance ${dateInput.value}:\nPresent: ${today.present}/${today.total}\nPercentage: ${today.percent}%`;
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`);
}

function shareOverall() {
  const keys = Object.keys(localStorage);
  let total = 0, present = 0;
  keys.forEach(k => {
    const data = JSON.parse(localStorage.getItem(k));
    data.forEach(d => {
      if (d.morning) present++;
      if (d.afternoon) present++;
      total += 2;
    });
  });
  const percent = total ? ((present/total)*100).toFixed(2) : 0;
  const text = `Overall Attendance:\nPresent: ${present}/${total}\nPercentage: ${percent}%`;
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`);
}

function exportCSV() {
  let csv = "S.No,Roll No,Name,Morning,Afternoon\n";
  document.querySelectorAll("tbody tr").forEach((row, i) => {
    const [m, a] = row.querySelectorAll("input");
    csv += `${students[i].sno},${students[i].roll},${students[i].name},${m.checked},${a.checked}\n`;
  });
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "attendance.csv";
  a.click();
}

updateSummary();
