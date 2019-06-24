// import React from 'react';
import { 
    houseFlippingCalc, 
    seventyPercentCalc } 
from './calculations';

describe('Calculation tests', () => {
    let data = {};
    beforeEach(() => {
        data = {
            arv: 160000,
            repairCosts: 20000,
            closingAndHoldingCosts: 3600,
            desiredProfit: 30000,
          };
    });
    it('should calculate house flip', () => {
        const total = houseFlippingCalc(data);
        expect(total).toEqual(106400);
    });

    it('should calculate 70% rule', () => {
        const total = seventyPercentCalc(data);
        expect(total).toEqual(92000);
    });
})

