// Define main job shifts
const mainJobShifts = {
    early: { start: "07:00", end: "15:00" },
    afternoon: { start: "15:00", end: "22:00" },
    night: { start: "22:00", end: "07:00" }
};

// Define side job shifts by location
const sideJobLocations = {
    "Massy Oistins": [{ start: "06:30", end: "20:00" }, { start: "06:30", end: "14:00" }],
    "Massy Six Roads": [{ start: "07:30", end: "19:30" }, { start: "07:30", end: "14:00" }],
    "Worthings": [{ start: "06:30", end: "20:00" }, { start: "06:30", end: "14:00" }],
    "Sky Mall": [{ start: "06:30", end: "20:00" }, { start: "06:30", end: "14:00" }],
    "Warrens": [{ start: "06:30", end: "20:00" }, { start: "06:30", end: "14:00" }],
    "Price Lo Sargent's Village": [{ start: "07:30", end: "19:30" }, { start: "07:30", end: "14:00" }],
    "Price Lo Montrose": [{ start: "07:30", end: "19:30" }, { start: "07:30", end: "14:00" }]
};

// Utility function to convert "HH:MM" to a Date object for comparison
function parseTime(timeString) {
    const [hours, minutes] = timeString.split(":").map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
}

// Function to check for compatible side-job shifts
function findCompatibleShifts(mainShift, sideJobLocations, bufferMinutes = 30) {
    const mainStart = parseTime(mainShift.start);
    const mainEnd = parseTime(mainShift.end);
    
    // Adjust mainEnd for night shift that crosses midnight
    if (mainShift.start === "22:00") {
        mainEnd.setDate(mainEnd.getDate() + 1);  // Set end time to the next day
    }
    
    // Buffer time in milliseconds
    const bufferTime = bufferMinutes * 60 * 1000;
    
    let compatibleShifts = [];
    
    // Iterate through each location and its shifts
    for (const [location, shifts] of Object.entries(sideJobLocations)) {
        shifts.forEach(shift => {
            const sideStart = parseTime(shift.start);
            const sideEnd = parseTime(shift.end);
            
            // Check if side job fits before or after main job with buffer
            if ((sideEnd <= mainStart - bufferTime) || (sideStart >= mainEnd + bufferTime)) {
                compatibleShifts.push({
                    location,
                    sideShift: shift
                });
            }
        });
    }
    
    return compatibleShifts;
}

// Example usage:
const mainShift = mainJobShifts.early;  // Choose your shift here
const availableShifts = findCompatibleShifts(mainShift, sideJobLocations);

console.log("Compatible side-job shifts:", availableShifts);