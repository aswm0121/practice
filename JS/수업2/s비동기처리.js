// function displayA() {
//     console.log("A");
// }
// function displayB(callback) {
//     setTimeout(()=>{
//         console.log("B");
//         callback();
//     }, 2000)
// }
// function displayC(){
//     console.log("C")
// }

// displayA()
// displayB(displayC)

//파라미터 값이 주어지면
// 1초 뒤에 10을 더해서 반환

const increase = (number, callback) => {
    setTimeout(()=>{
        const result = number+10;
        if (callback) {
            callback(result)
        }
    },1000)
}

//1초 후 10을 반환

// increase(0, result => {
//     console.log(result);
// })

//1초에 걸쳐서 10, 20 .....순차적으로 반환

console.log('start');
increase(0, result => {
    console.log(result);
    increase(result, result => {
        console.log(result);
        increase(result, result => {
            console.log(result);
            increase(result, result => {
                console.log(result);
                increase(result,result => {
                    console.log(result)
                    increase(result,()=>{
                        console.log('end')
                    })
                })
            })
        })
    })
})