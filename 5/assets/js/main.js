const input = 1245;

function romanify(num) {
    let roman = '';

    num = (""+num).split("");

    for(let i = 0; i < num.length; i++) {
        check(num[i]);
    }
    console.log(roman);
}

function check(input) {
    const romanArr = [
        {
            key: 1,
            value: 'I'
        },
        {
            key: 5,
            value: 'V'
        },
        {
            key: 10,
            value: 'X'
        },
        {
            key: 50,
            value: 'L'
        },
        {
            key: 100,
            value: 'C'
        },
        {
            key: 500,
            value: 'D'
        },
        {
            key: 500,
            value: 'M'
        }
    ];

    // for(let i = 0; i < romanArr.length; i++) {
    //     check(num[i]);
    // }
    //
    // let output = romanArr.find(e => e === input);
    //
    // console.log(input);

}

romanify(input);

