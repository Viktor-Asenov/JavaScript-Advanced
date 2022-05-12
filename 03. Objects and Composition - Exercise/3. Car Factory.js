function carFactory(requirements) {
    let car = {};
    car.model = requirements.model;

    let enginePower = requirements.power;
    let volume = 0;

    if (enginePower > 0 && enginePower <= 90) {
        enginePower = 90;
        volume = 1800;
    } else if (enginePower > 90 && enginePower <= 120) {
        enginePower = 120;
        volume = 2400;
    } else if (enginePower > 120 && enginePower <= 200) {
        enginePower = 200;
        volume = 3500;
    }

    car.engine = {
        power: enginePower,
        volume: volume
    };

    car.carriage = {
        type: requirements.carriage,
        color: requirements.color
    }

    if (requirements.wheelsize % 2 === 0) {
        requirements.wheelsize -= 1;
    }

    car.wheels = [];

    for (let i = 1; i <= 4; i++) {
        car.wheels.push(requirements.wheelsize);        
    }

    return car;
}