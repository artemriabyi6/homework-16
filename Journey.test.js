const Journey = require('./js/script')

test(
    'Testing the journey',
    () => {
        expect(new Journey('Chernivtsi', 'Car', 3, 150, true)).toEqual({
            place: 'Chernivtsi',
            transport: 'Car',
            hours: 3,
            cost: 150,
            boolean: true
        })
    }
   
)