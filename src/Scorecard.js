import React from 'react';

import Score from './Score';

import styled from 'styled-components';

const Scores = styled.div``;
export default () => (
  <Scores>
    {/* check the score of the dice for the child prop */}
    {/* set the state by using the same check function to determaine the value of the parameter passed to set state */}
    <Score item="Ones">4</Score>
    <Score item="Twos">4</Score>
    <Score item="Threes">4</Score>
    <Score item="Fours">4</Score>
    <Score item="Fives">4</Score>
    <Score item="Sixes">4</Score>
    <Score item="Bonus">4</Score>
    <Score item="Full House">4</Score>
    <Score item="Three of a Kind">4</Score>
    <Score item="Four of a Kind">4</Score>
    <Score item="Small Straight">4</Score>
    <Score item="Large Straight">4</Score>
    <Score item="Yahtzee">4</Score>
    <Score item="Chance">4</Score>
    <Score item="Total">4</Score>
  </Scores>
);
