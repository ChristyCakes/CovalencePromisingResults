// select answers heading from html
const responseContainer = document.querySelector('.answers');

// reference slowMath promise in async-math.js, add 6 and 2
slowMath.add(6, 2)
    .then(function (response) {

        // create an answer response
        let answer = `6 plus 2 is ${response}`;

        // append answer to web page
        responseContainer.insertAdjacentHTML('afterbegin', answer);

        // return response so we can use it on the next chain; multiply
        return slowMath.multiply(response, 2);

    }).then(function (response) {
        answer = `...times 2 is ${response}`;
        responseContainer.insertAdjacentHTML('beforeend', answer);
        return slowMath.divide(response, 4);
    }).then(function (response) {
        answer = `...divided by 4 is ${response}`;
        responseContainer.insertAdjacentHTML('beforeend', answer);
        return slowMath.subtract(response, 3);
    }).then(function (response) {
        answer = `...minus 3 is ${response}`;
        responseContainer.insertAdjacentHTML('beforeend', answer);
        return slowMath.add(response, 98);
    }).then(function (response) {
        answer = `...plus 98 is ${response}`;
        responseContainer.insertAdjacentHTML('beforeend', answer);
        return slowMath.remainder(response, 2);
    }).then(function (response) {
        answer = `...divided by 2 leaves a remainder of ${response}`;
        responseContainer.insertAdjacentHTML('beforeend', answer);
        return slowMath.multiply(response, 50);
    }).then(function (response) {
        answer = `...times 50 is ${response}`;
        responseContainer.insertAdjacentHTML('beforeend', answer);
        return slowMath.remainder(response, 40);
    }).then(function (response) {
        answer = `...divided by 40 leaves a remainder of ${response}`;
        responseContainer.insertAdjacentHTML('beforeend', answer);
        return slowMath.add(response, 32);
    }).then(function (response) {
        answer = `...Add 32 and the final result is ${response}`;
        responseContainer.insertAdjacentHTML('beforeend', answer);
    }).catch(function (error) {
        console.log(error);
    })