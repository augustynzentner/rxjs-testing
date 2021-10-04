import { from, of, timer } from 'rxjs';
import { delayWhen, map, mapTo, take, tap, toArray } from 'rxjs/operators';
import { TestScheduler } from 'rxjs/testing';
import { distinctDebounce } from './rxjs-operator';

describe('Rxjs', () => {

    describe('subscribe and assert', () => {

        it('should success sync', () => {
            const testStream$ = of('HELLO');

            testStream$.subscribe(val => {
                // expect(val).toBe('HELLO');
                expect(val).toBe('GODO BYE');
            });
        });


        // it('should wrongly pass', () => {
        //     const testStream$ = timer(1000).pipe(mapTo('HELLO'));

        //     testStream$.subscribe(val => {
        //         expect(val).toBe('INCORRECT');
        //     });
        // });


        // it('should fail async', (done) => {
        //     const testStream$ = timer(1000).pipe(mapTo('HELLO'));

        //     testStream$.subscribe(val => {
        //         // expect(val).toBe('GOOD BYE');
        //         expect(val).toBe('HELLO');
        //         done();
        //     });
        // });


        // it('should emit multiple values', () => {
        //     const testArray = ['A', 'B', 'C'];
        //     const testedStream$ = from(testArray);

        //     // testedStream$
        //     //     .subscribe(val => {
        //     //         expect(val).toBe('A');
        //     //         expect(val).toBe(testArray);
        //     //     });

        //     testedStream$
        //         .pipe(toArray())
        //         .subscribe(val => {
        //             expect(val).toEqual(testArray);
        //         });
        // });


        // it('should emit multiple values over time', (done) => {
        //     const testArray = [
        //         { value: 'A', delay: 0 },
        //         { value: 'B', delay: 1000 },
        //         { value: 'C', delay: 2000 },
        //         // { value: 'D', delay: 6000 }
        //     ];
        //     const testedStream$ = from(testArray).pipe(
        //         delayWhen(obj => timer(obj.delay)),
        //         map(obj => obj.value)
        //     );

        //     testedStream$
        //         .pipe(toArray())
        //         .subscribe(val => {
        //             expect(val).toEqual(testArray.map(obj => obj.value));
        //             done();
        //         });
        // });
    });

    describe('marble testing', () => {

        let testScheduler: TestScheduler;

        const values = {
            a: 'A',
            b: 'B',
            c: 'C',
            d: 'D',
        };

        const testArray = [
            { value: values.a, delay: 0 },
            { value: values.b, delay: 1000 },
            { value: values.c, delay: 2000 },
            { value: values.d, delay: 6000 }
        ];

        beforeEach(() => {
            testScheduler = new TestScheduler((actual, expected) => {
                expect(actual).toEqual(expected);
            });
        });

        // it('should emit multiple values', () => {

        //     testScheduler.run(({ expectObservable, cold }) => {
        //         const source$ = cold('-a-bc--|', values);
        //         const expected$ = '   -a-bc--|';

        //         expectObservable(source$).toBe(expected$, values);
        //     });
        // });


        // it('should emit multiple values over time', () => {

        //     const testedStream$ = from(testArray).pipe(
        //         delayWhen(obj => timer(obj.delay)),
        //         map(obj => obj.value),
        //     );

        //     testScheduler.run(({ expectObservable }) => {
        //         // const expected$ = 'a 1s b 1s c 4s (d|)';
        //         const expected$ = 'a 999ms b 999ms c 3999ms (d|)';

        //         expectObservable(testedStream$).toBe(expected$, values);
        //     });

        // });

        describe('distinctDebounce operator', () => {

            // it('should emit value', () => {
            //     testScheduler.run(({ cold, expectObservable }) => {
            //         const source$ = cold('a', values);
            //         const expected$ = '   - 499ms a';

            //         const result$ = source$.pipe(distinctDebounce(500));

            //         expectObservable(result$).toBe(expected$, values);
            //     });
            // });

            // it('should debounce too quick emissions', () => {
            //     testScheduler.run(({ cold, expectObservable }) => {
            //         const source$ = cold('a 300ms b 300ms c 300ms d', values);
            //         const expected$ = '   - 300ms - 300ms - 300ms - 499ms d';

            //         const result$ = source$.pipe(distinctDebounce(500));

            //         expectObservable(result$).toBe(expected$, values);
            //     });
            // });

            // it('should emit distinct values only', () => {
            //     testScheduler.run(({ cold, expectObservable }) => {
            //         const source$ = cold('a 500ms   b 500ms   b 500ms   b 500ms   c', values);
            //         const expected$ = '   - 499ms a - 499ms b - 499ms - - 499ms - - 499ms c';

            //         const result$ = source$.pipe(distinctDebounce(500));

            //         expectObservable(result$).toBe(expected$, values);
            //     });
            // });

            // it('should emit only subset of hot observable', () => {
            //     testScheduler.run(({ hot, expectObservable, expectSubscriptions }) => {
            //         const source = hot('  ---a----b----c-----d-----e---f---g--h-');
            //         const expectedSub1 = '-----------^---------!----------------';
            //         const expected1 = '   -------------c-----d------------------';
            //         const expectedSub2 = '----------------------^--------------!';
            //         const expected2 = '   -------------------------e---f---g--h-';

            //         const result = source.pipe(map(val => val));

            //         expectObservable(result, expectedSub1).toBe(expected1);
            //         expectObservable(result, expectedSub2).toBe(expected2);
            //         expectSubscriptions(source.subscriptions).toBe([expectedSub1, expectedSub2]);

            //         // const expected3 = '  -------------(c|)';
            //         // const result2 = source.pipe(take(1));
            //         // expectObservable(result2, expectedSub1).toBe(expected3);
            //     });
            // });



        });



    });

});
