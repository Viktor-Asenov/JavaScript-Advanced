class SmartHike {
  constructor(username) {
    this.username = username;
    this.goals = {};
    this.listOfHikes = [];
    this.resources = 100;
  }

  addGoal(peak, altitude) {
    if (Object.keys(this.goals).some((p) => p == peak)) {
      return `${peak} has already been added to your goals`;
    }

    this.goals[peak] = altitude;

    return `You have successfully added a new goal - ${peak}`;
  }

  hike(peak, time, difficultyLevel) {
    let peakToHike = Object.keys(this.goals).find((p) => p == peak);
    if (peakToHike == undefined) {
      throw new Error(`${peak} is not in your current goals`);
    }

    if (this.resources == 0) {
      throw new Error("You don't have enough resources to start the hike");
    }

    let usedResources = time * 10;
    if (this.resources - usedResources < 0) {
      return "You don't have enough resources to complete the hike";
    }

    this.resources -= usedResources;

    let newHike = {
      peak,
      time,
      difficultyLevel,
    };

    this.listOfHikes.push(newHike);

    return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
  }

  rest(time) {
    let restingTime = time * 10;
    this.resources += restingTime;

    if (this.resources >= 100) {
      this.resources = 100;

      return `Your resources are fully recharged. Time for hiking!`;
    }

    return `You have rested for ${time} hours and gained ${restingTime}% resources`;
  }

  showRecord(criteria) {
    let records = [];
    if (this.listOfHikes.length == 0) {
      records.push(`${this.username} has not done any hiking yet`);
      return records.join("\n");
    }

    let hikesByCriteria = [];

    if (criteria == "hard") {
      hikesByCriteria = this.listOfHikes.filter(
        (h) => h.difficultyLevel == criteria
      );
    } else if (criteria == "easy") {
      hikesByCriteria = this.listOfHikes.filter(
        (h) => h.difficultyLevel == criteria
      );
    } else if (criteria == "all") {
      records.push("All hiking records:");
      for (let hike of this.listOfHikes) {
        records.push(
          `${this.username} hiked ${hike.peak} for ${hike.time} hours`
        );
      }

      return records.join("\n");
    }

    if (hikesByCriteria.length == 0) {
      return `${this.username} has not done any ${criteria} hiking yet`;
    } else {
      let bestHike = hikesByCriteria.sort((a, b) => a.time - b.time)[0];
      records.push(
        `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`
      );
    }

    return records.join("\n");
  }
}

const user = new SmartHike("Vili");
user.addGoal("Musala", 2925);
user.hike("Musala", 8, "hard");
console.log(user.showRecord("easy"));
user.addGoal("Vihren", 2914);
user.hike("Vihren", 4, "hard");
console.log(user.showRecord("hard"));
user.addGoal("Rui", 1706);
user.hike("Rui", 3, "easy");
console.log(user.showRecord("all"));
