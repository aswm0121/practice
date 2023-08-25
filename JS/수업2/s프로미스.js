// index.html에 있다
const increase = (number) => {
    const promise = new Promise((resolve, reject) => {
        // resolve 는 성공, reject는 실패
        setTimeout(() => {
            const result = number + 10
            if (result > 50) {
                // 50보다 크면 에러 발생
                const error = new Error("숫자가 너무 큽니다")
                return reject(error)
            }
            resolve(result)
            // number값에 +10처리 후 성공 처리

        },1000)
    })
    return promise;
}

increase(0)
.then(number => {
    // promise에서 resolve된 값은 .then을 통해 받아올 수 있음
    console.log(number);
    return increase(number);

})

.then(number => {
    console.log(number);
    return increase(number);
})
.then(number => {
    console.log(number);
    return increase(number);
})
.then(number => {
    console.log(number);
    return increase(number);
})
.then(number => {
    console.log(number);
    return increase(number);
})
.then(number => {
    console.log(number);
    return increase(number);
})
.then(number => {
    console.log(number);
    return increase(number);
})


.catch(error=> {
    // 도중에 에러가 발생한다면 catch를 통해 알 수 있음
})