"use strict";

/* 
  Term Project – Phase 2
  Author: Deborah Oluwabukola Odumusi
  Description:
  This file stores and displays structured daily observations 
  (phone use, exercise, and sleep data) as a nested Object + Array hierarchy.
*/

/* ----------------------------------------------------------
   Data Collection: Sleep Data
   Each object represents one day's observation.
   ---------------------------------------------------------- */

const sleepData = [
  {
    date: "2025-10-01",
    phoneUse: {
      source: "Samsung Health",
      startTime: "9:30 PM",
      endTime: "11:00 PM",
      durationMinutes: 90,
      totalDailyScreenTimeMinutes: 220,
      preBedScreenTimeMinutes: 60,
      activities: ["YouTube", "Instagram", "WhatsApp"], // list of phone activities
      restfulnessRating: 3 // 0–5 scale
    },
    exercise: {
      source: "Google Pixel App",
      type: "Treadmill",
      durationMinutes: 45,
      startTime: "6:30 PM",
      endTime: "7:15 PM",
      impactOnSleepRating: 4 // 0–5 scale
    },
    sleep: {
      device: "Samsung Health",
      startTime: "11:15 PM",
      endTime: "6:45 AM",
      durationMinutes: 450, // 7.5 hours
      comparedToEightHours: -30, // 30 min less than 8 hrs
      morningRestfulnessRating: 4 // 0–5 scale
    }
  },
  {
    date: "2025-10-02",
    phoneUse: {
      source: "Samsung Health",
      startTime: "10:15 PM",
      endTime: "11:45 PM",
      durationMinutes: 90,
      totalDailyScreenTimeMinutes: 300,
      preBedScreenTimeMinutes: 90,
      activities: ["TikTok", "WhatsApp"], // list of phone activities
      restfulnessRating: 2
    },
    exercise: {
      source: "Google Pixel App",
      type: "Jogging",
      durationMinutes: 60,
      startTime: "6:00 PM",
      endTime: "7:00 PM",
      impactOnSleepRating: 5
    },
    sleep: {
      device: "Samsung Health",
      startTime: "11:50 PM",
      endTime: "7:20 AM",
      durationMinutes: 450,
      comparedToEightHours: -30,
      morningRestfulnessRating: 3
    }
  }
]; // list of daily observations

/* ----------------------------------------------------------
   Display Data on Web Page
   ---------------------------------------------------------- */

// Find the <pre> element in HTML and print the data there
const outputElement = document.getElementById("output");

if (outputElement) {
  // Add a simple label above the data for readability
  outputElement.textContent = "--- Sleep Data ---\n\n" + JSON.stringify(sleepData, null, 2);
}

// Also log to Console (for developer view)
console.log("Sleep Data loaded successfully:");
console.log(sleepData);
