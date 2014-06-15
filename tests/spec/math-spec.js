define(['iso-svg/math'], function (math) { 

    "use strict";

    describe('math', function () {

        describe('scale', function () {

            it('should scale a vector by a given scalar value', function () {
                var v = math.scale([10], 2);
                expect(v[0]).toBe(20);
                v = math.scale([-5, 2], 0.5);
                expect(v[0]).toBe(-2.5);
                expect(v[1]).toBe(1);
                v = math.scale([1, 2, 3], 4);
                expect(v[0]).toBe(4);
                expect(v[1]).toBe(8);
                expect(v[2]).toBe(12);
            });
        }),

        describe('magSquared', function () {

            it('should return the square of a 3D vector\'s magnitude', function () {
                expect(math.magSquared([2, 3, 4])).toBe(29);
            });
        }),

        describe('magnitude', function () {

            it('should return the magnitude of a 3D vector', function () {
                expect(math.magnitude([1, 1, 1])).toBeCloseTo(1.732, 3);
                expect(math.magnitude([-2, 2, -2])).toBeCloseTo(3.464, 3);
            });
        });

        describe('crossProduct', function () {

            it('should return the cross product of two 3D vectors', function () {
                var a = [1, 1, 0];
                var b = [1, 0, 1];
                var v = math.crossProduct(a, b);
                expect(v[0]).toBe(1);
                expect(v[1]).toBe(-1);
                expect(v[2]).toBe(-1);

                a = [3, -2, 5];
                b = [2, 5, 10];
                v = math.crossProduct(a, b);
                expect(v[0]).toBe(-45);
                expect(v[1]).toBe(-20);
                expect(v[2]).toBe(19);
            });
        });

        describe('dotProduct', function () {

            it('should return the dot product (scalar) of two n-dimensional vectors', function () {
                var a = [1, 0, 0];
                var b = [0, 0, 1];
                expect(math.dotProduct(a, b)).toBe(0);

                a = [1, 0, 0];
                b = [1, 0, 0];
                expect(math.dotProduct(a, b)).toBe(1);

                a = [0, 0, -1];
                b = [0, 0, 1];
                expect(math.dotProduct(a, b)).toBe(-1);
            });
        });

        describe('subtract', function () {

            it('should return the difference between two 3D vectors', function () {
                var a = [10, 9, 8];
                var b = [20, 21, 22];
                var v = math.subtract(a, b);
                expect(v[0]).toBe(10);
                expect(v[1]).toBe(12);
                expect(v[2]).toBe(14);
            });
        });

        describe('mean', function () {

            it('should return the mean vector', function () {

                var a = math.mean([
                    [0,  10, 12],
                    [2, -10, 15],
                    [4, -20, 14],
                    [8,  20, 13]
                ]);

                expect(a[0]).toBe(3.5);
                expect(a[1]).toBe(0);
                expect(a[2]).toBe(13.5);
            });
        });

        describe('normalise', function () {

            it('should normalise a 3D vector', function () {
                var a = [1, 1, 1];
                a = math.normalise(a);
                expect(a[0]).toBeCloseTo(0.577, 3);
                expect(a[1]).toBeCloseTo(0.577, 3);
                expect(a[2]).toBeCloseTo(0.577, 3);
            });

            it('should return null if magnitude is zero', function () {
                var a = [0, 0, 0];
                expect(math.normalise(a)).toBeNull();
            });
        });

        describe('normal', function () {

            it('should return the normal vector for two input vectors', function () {
                var a = [10, 0, 0];
                var b = [0, 10, 0];
                var n = math.normal(a, b);
                expect(n[0]).toBe(0);
                expect(n[1]).toBe(0);
                expect(n[2]).toBe(1);
            });
        });

        describe('normalFromVertices', function () {

            it('should calculate the normal from three 3D vertices', function () {

                var v1 = [5, 5, 5];
                var v2 = [6, 5, 5];
                var v3 = [5, 10, 5];
                var n = math.normalFromVertices(v1, v2, v3);
                expect(n[0]).toBe(0);
                expect(n[1]).toBe(0);
                expect(n[2]).toBe(1);
            });
        });
    });
});