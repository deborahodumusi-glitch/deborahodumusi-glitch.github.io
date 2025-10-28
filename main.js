"use strict";

/*
  Term Project — Phase 2
  Data structured as Objects and Arrays
*/

const sleepData = [
  {
    date: "2025-10-18",
    phoneUse: {
      source: "Samsung Health",
      startTime: "22:15",
      endTime: "00:15",
      durationMinutes: 120,
      totalDailyScreenTimeMinutes: 360,
      preBedScreenTimeMinutes: 120,
      activities: ["Chrome", "WhatsApp", "X"],
      restfulnessRating: 3
    },
    exercise: {
      source: "Smart wrist watch",
      type: "Treadmill",
      durationMinutes: 30,
      startTime: "15:40",
      endTime: "16:50",
      impactOnSleepRating: 3
    },
    sleep: {
      device: "Smart wristwatch",
      startTime: "21:00",
      endTime: "06:00",
      durationMinutes: 180,
      comparedToEightHours: -300,
      morningRestfulnessRating: 3
    }
  },
  {
    date: "2025-10-19",
    phoneUse: {
      source: "Samsung Health",
      startTime: "22:30",
      endTime: "00:30",
      durationMinutes: 120,
      totalDailyScreenTimeMinutes: 600,
      preBedScreenTimeMinutes: 240,
      activities: ["Instagram", "TikTok"],
      restfulnessRating: 1
    },
    exercise: {
      source: "Smart wrist watch",
      type: "Treadmill",
      durationMinutes: 30,
      startTime: "15:40",
      endTime: "16:50",
      impactOnSleepRating: 5
    },
    sleep: {
      device: "Smart wristwatch",
      startTime: "22:00",
      endTime: "06:00",
      durationMinutes: 300,
      comparedToEightHours: -180,
      morningRestfulnessRating: 4
    }
  },
  {
    date: "2025-10-20",
    phoneUse: {
      source: "Samsung Health",
      startTime: "22:00",
      endTime: "00:00",
      durationMinutes: 120,
      totalDailyScreenTimeMinutes: 420,
      preBedScreenTimeMinutes: 120,
      activities: ["Family Calls", "WhatsApp"],
      restfulnessRating: 2
    },
    exercise: {
      source: "Smart wrist watch",
      type: "Treadmill",
      durationMinutes: 30,
      startTime: "15:40",
      endTime: "16:50",
      impactOnSleepRating: 4
    },
    sleep: {
      device: "Smart wristwatch",
      startTime: "20:45",
      endTime: "07:00",
      durationMinutes: 360,
      comparedToEightHours: -120,
      morningRestfulnessRating: 5
    }
  }
]; // list of daily observations
