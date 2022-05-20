function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let restaurantsInfo = eval(document.getElementsByTagName('textarea')[0].value);
      let restaurants = [];

      for (let i = 0; i < restaurantsInfo.length; i++) {
         let restaurant = {};

         let currentRestaurant = restaurantsInfo[i];
         let currentRestaurantInfo = currentRestaurant.split(' - ');

         let restaurantName = currentRestaurantInfo[0];
         restaurant.name = restaurantName;
         restaurant.workers = [];

         let workers = currentRestaurantInfo[1].split(', ');
         for (let employee of workers) {
            let workerTokens = employee.split(' ');
            let workerName = workerTokens[0];
            let workerSalary = Number(workerTokens[1]);

            let worker = {};
            worker.name = workerName;
            worker.salary = workerSalary;

            restaurant.workers.push(worker);
         }

         restaurant.bestSalary = Number.MIN_VALUE;
         let sumSalaries = 0;

         for (let worker of restaurant.workers) {
            if (worker.salary > restaurant.bestSalary) {
               restaurant.bestSalary = worker.salary;
            }

            sumSalaries += worker.salary;
         }

         restaurant.averageSalary = sumSalaries / restaurant.workers.length;

         restaurants.push(restaurant);
      }

      let allAverageSalaries = [];

      for (let j = 0; j < restaurants.length; j++) {
         const salary = restaurants[j].averageSalary;
         allAverageSalaries.push(salary);
      }

      let maxAverageSalary = Math.max(...allAverageSalaries);

      let bestRestaurant = restaurants.find(r => r.averageSalary === maxAverageSalary);
      bestRestaurant.workers.sort((a, b) => (b.salary - a.salary));

      let bestRestaurantOutput = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;
      let bestWorkersOutput = '';

      for (let j = 0; j < bestRestaurant.workers.length; j++) {
         const worker = bestRestaurant.workers[j];
         let currentResult = '';
         if (j === bestRestaurant.workers.length - 1) {
            currentResult = `Name: ${worker.name} With Salary: ${worker.salary}`;
         } else {
            currentResult = `Name: ${worker.name} With Salary: ${worker.salary} `;
         }

         bestWorkersOutput += currentResult;
      }

      let bestRestaurantElement = document.querySelectorAll('p')[0];
      let bestworkersElement = document.querySelectorAll('p')[1];
      bestRestaurantElement.textContent = bestRestaurantOutput;
      bestworkersElement.textContent = bestWorkersOutput;
   }
}