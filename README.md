# UEFA Europa League Predictor

**<a href="https://apex4710.github.io/europa-league-predictor/" target="_blank">Access the site here</a>**

Welcome to the UEFA Europa League Predictor! This web application allows you to enter match scores and view the updated points table based on the Group Stage Tiebreakers.

## Features

- **View Fixtures**: See all the match fixtures for each matchday.
- **Enter Scores**: Input the scores to update the points table.
- **Updated Points Table**: Automatically updates based on the entered results.
- **Export Results**: Export your predictions and results as a PDF or CSV file.

## How to Use

1. **View Fixtures**:

   - Fixtures for each matchday are listed under the "Fixtures" section.
   - Click on each matchday to expand and see the fixtures. Each fixture shows the match date, teams, and score input fields.

2. **Enter Scores**:

   - Use the input fields to enter the scores for each fixture.
   - The scores will automatically update the points table based on the entered results.

3. **View Points Table**:

   - The points table is displayed under the "Points Table" section.
   - The table shows the position, team name, matches played, wins, draws, losses, goals for, goals against, goal difference, and points.
   - Teams are color-coded in the points table:
     - **Green**: Group winners (top of each group) automatically qualify for the Round of 16.
     - **Yellow**: Group runners-up will enter the knockout round playoffs against the third-placed teams from the UEFA Champions League group stage.
     - **Red**: Teams ranked third and fourth in their groups are eliminated from the UEFA Europa League.

4. **Export Data**:
   - Click the "Export as PDF" or "Export as CSV" button to save your predictions and results.

## Tiebreakers

The points table is sorted using the following Group Stage Tiebreakers:

1. Points earned in head-to-head matches among tied teams.
2. Goal difference in head-to-head matches among tied teams.
3. Goals scored in head-to-head matches among tied teams.
4. If teams remain tied after applying the head-to-head criteria, apply:
   - Overall goal difference in all group matches.
   - Overall goals scored in all group matches.
5. Disciplinary points (yellow and red cards).
6. UEFA club coefficient ranking.

## Disclaimer

The results are updated through the current league stage matchday 5.

## Credits

This project was made with the help of Copilot.

## License

This project is licensed under the MIT License.
