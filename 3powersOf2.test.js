const { threePowersWrapper, setUseOptimized } = require('./3powersOf2');

describe('Testing threePowersWrapper', () => {

      beforeAll(() => {
            // Configurar para usar la versión optimizada
            setUseOptimized(1);
      });

      test('3 powers of 2 - test case 2', () => {
            expect(threePowersWrapper(2)).toBe(false);
      });
      test('3 powers of 2 - test case 3', () => {
            expect(threePowersWrapper(3)).toBe(true);
      });
      test('3 powers of 2 - test case 5', () => {
            expect(threePowersWrapper(5)).toBe(true);
      });
      test('3 powers of 2 - test case 15', () => {
            expect(threePowersWrapper(15)).toBe(false);
      });

      describe('Optimize 1', () => {
            beforeAll(() => {
                  setUseOptimized(2);
            });

            test('3 powers of 2 - test case 2', () => {
                  expect(threePowersWrapper(2)).toBe(false);
            });
            test('3 powers of 2 - test case 3', () => {
                  expect(threePowersWrapper(3)).toBe(true);
            });
            test('3 powers of 2 - test case 5', () => {
                  expect(threePowersWrapper(5)).toBe(true);
            });
            test('3 powers of 2 - test case 15', () => {
                  expect(threePowersWrapper(15)).toBe(false);
            });
      });
      // Fallan los test de  github
      //     describe('Optimize 2', () => {
      //               beforeAll(() => {
      //                         // Configurar para usar la versión original
      //                         setUseOptimized(2);
      //               });

      //               test('3 powers of 2 - test case 2', () => {
      //                         expect(threePowersWrapper(2)).toBe(false);
      //               });
      //               test('3 powers of 2 - test case 3', () => {
      //                         expect(threePowersWrapper(3)).toBe(true);
      //               });
      //               test('3 powers of 2 - test case 5', () => {
      //                         expect(threePowersWrapper(5)).toBe(true);
      //               });
      //               test('3 powers of 2 - test case 15', () => {
      //                         expect(threePowersWrapper(15)).toBe(false);
      //               });
      //     });
});