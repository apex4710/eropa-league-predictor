// prettier-ignore

document.addEventListener("DOMContentLoaded", function() {
    const teams = {};
    const fixturesDiv = document.getElementById("fixtures");
    const pointsTable = document.getElementById("pointsTable").getElementsByTagName("tbody")[0];

    const teamNames = [
        'AFC Ajax (NED)',
        'RSC Anderlecht (BEL)',
        'Athletic Club (ESP)',
        'AZ Alkmaar (NED)',
        'Besiktas JK (TUR)',
        'FK Bodø/Glimt (NOR)',
        'SC Braga (POR)',
        'FC Dynamo Kyiv (UKR)',
        'IF Elfsborg (SWE)',
        'Fotbal Club FCSB (ROU)',
        'Fenerbahçe SK (TUR)',
        'Ferencvárosi TC (HUN)',
        'Eintracht Frankfurt (GER)',
        'Galatasaray AS (TUR)',
        'TSG 1899 Hoffenheim (GER)',
        'S.S. Lazio (ITA)',
        'PFC Ludogorets 1945 (BUL)',
        'Olympique Lyonnais (FRA)',
        'Maccabi Tel-Aviv FC (ISR)',
        'Malmö FF (SWE)',
        'Manchester United (ENG)',
        'FC Midtjylland (DEN)',
        'OGC Nice (FRA)',
        'Olympiacos FC (GRE)',
        'PAOK FC (GRE)',
        'FC Porto (POR)',
        'Qarabg FK (AZE)',
        'Rangers FC (SCO)',
        'Real Sociedad de Fútbol (ESP)',
        'FC RFS (LVA)',
        'AS Roma (ITA)',
        'SK Slavia Praha (CZE)',
        'Tottenham Hotspur (ENG)',
        'FC Twente (NED)',
        'R. Union Saint-Gilloise (BEL)',
        'FC Viktori Plzen (CZE)'
      ];
      

    teamNames.forEach(team => {
        teams[team] = {
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            goalsFor: 0,
            goalsAgainst: 0,
            awayGoals: 0,
            awayWins: 0,
            points: 0
        };
    });

    const fixtures = [
        // Matchday 1 - Wednesday 25 September 2024
        { matchday: 1, date: "2024-09-25", team1: "AZ Alkmaar (NED)", team2: "IF Elfsborg (SWE)", score1: 3, score2: 2 },
        { matchday: 1, date: "2024-09-25", team1: "FK Bodø/Glimt (NOR)", team2: "FC Porto (POR)", score1: 3, score2: 2 },
        { matchday: 1, date: "2024-09-25", team1: "Manchester United (ENG)", team2: "FC Twente (NED)", score1: 1, score2: 1 },
        { matchday: 1, date: "2024-09-25", team1: "Galatasaray AS (TUR)", team2: "PAOK FC (GRE)", score1: 3, score2: 1 },
        { matchday: 1, date: "2024-09-25", team1: "FC Dynamo Kyiv (UKR)", team2: "S.S. Lazio (ITA)", score1: 0, score2: 3 },
        { matchday: 1, date: "2024-09-25", team1: "PFC Ludogorets 1945 (BUL)", team2: "SK Slavia Praha (CZE)", score1: 0, score2: 2 },
        { matchday: 1, date: "2024-09-25", team1: "FC Midtjylland (DEN)", team2: "TSG 1899 Hoffenheim (GER)", score1: 1, score2: 1 },
        { matchday: 1, date: "2024-09-25", team1: "OGC Nice (FRA)", team2: "Real Sociedad de Fútbol (ESP)", score1: 1, score2: 1 },
        { matchday: 1, date: "2024-09-25", team1: "RSC Anderlecht (BEL)", team2: "Ferencvárosi TC (HUN)", score1: 2, score2: 1 },

        // Matchday 1 - Thursday 26 September 2024
        { matchday: 1, date: "2024-09-26", team1: "Fenerbahçe SK (TUR)", team2: "R. Union Saint-Gilloise (BEL)", score1: 2, score2: 1 },
        { matchday: 1, date: "2024-09-26", team1: "Malmö FF (SWE)", team2: "Rangers FC (SCO)", score1: 0, score2: 2 },
        { matchday: 1, date: "2024-09-26", team1: "AS Roma (ITA)", team2: "Athletic Club (ESP)", score1: 1, score2: 1 },
        { matchday: 1, date: "2024-09-26", team1: "AFC Ajax (NED)", team2: "Besiktas JK (TUR)", score1: 4, score2: 0 },
        { matchday: 1, date: "2024-09-26", team1: "Eintracht Frankfurt (GER)", team2: "FC Viktori Plzen (CZE)", score1: 3, score2: 3 },
        { matchday: 1, date: "2024-09-26", team1: "SC Braga (POR)", team2: "Maccabi Tel-Aviv FC (ISR)", score1: 2, score2: 1 },
        { matchday: 1, date: "2024-09-26", team1: "Olympique Lyonnais (FRA)", team2: "Olympiacos FC (GRE)", score1: 2, score2: 0 },
        { matchday: 1, date: "2024-09-26", team1: "Fotbal Club FCSB (ROU)", team2: "FC RFS (LVA)", score1: 4, score2: 1 },
        { matchday: 1, date: "2024-09-26", team1: "Tottenham Hotspur (ENG)", team2: "Qarabg FK (AZE)", score1: 3, score2: 0 },
        
        // Matchday 2
        { matchday: 2, date: "2024-10-03", team1: "S.S. Lazio (ITA)", team2: "OGC Nice (FRA)", score1: 4, score2: 1 },
        { matchday: 2, date: "2024-10-03", team1: "SK Slavia Praha (CZE)", team2: "AFC Ajax (NED)", score1: 1, score2: 1 },
        { matchday: 2, date: "2024-10-03", team1: "Real Sociedad de Fútbol (ESP)", team2: "RSC Anderlecht (BEL)", score1: 1, score2: 2 },
        { matchday: 2, date: "2024-10-03", team1: "Olympiacos FC (GRE)", team2: "SC Braga (POR)", score1: 3, score2: 0 },
        { matchday: 2, date: "2024-10-03", team1: "Maccabi Tel-Aviv FC (ISR)", team2: "FC Midtjylland (DEN)", score1: 0, score2: 2 },
        { matchday: 2, date: "2024-10-03", team1: "Ferencvárosi TC (HUN)", team2: "Tottenham Hotspur (ENG)", score1: 1, score2: 2 },
        { matchday: 2, date: "2024-10-03", team1: "Qarabg FK (AZE)", team2: "Malmö FF (SWE)", score1: 1, score2: 2 },
        { matchday: 2, date: "2024-10-03", team1: "TSG 1899 Hoffenheim (GER)", team2: "FC Dynamo Kyiv (UKR)", score1: 2, score2: 0 },
        { matchday: 2, date: "2024-10-03", team1: "FC RFS (LVA)", team2: "Galatasaray AS (TUR)", score1: 2, score2: 2 },
        { matchday: 2, date: "2024-10-03", team1: "FC Porto (POR)", team2: "Manchester United (ENG)", score1: 3, score2: 3 },
        { matchday: 2, date: "2024-10-03", team1: "Rangers FC (SCO)", team2: "Olympique Lyonnais (FRA)", score1: 1, score2: 4 },
        { matchday: 2, date: "2024-10-03", team1: "PAOK FC (GRE)", team2: "Fotbal Club FCSB (ROU)", score1: 0, score2: 1 },
        { matchday: 2, date: "2024-10-03", team1: "FC Viktori Plzen (CZE)", team2: "PFC Ludogorets 1945 (BUL)", score1: 0, score2: 0 },
        { matchday: 2, date: "2024-10-03", team1: "R. Union Saint-Gilloise (BEL)", team2: "FK Bodø/Glimt (NOR)", score1: 0, score2: 0 },
        { matchday: 2, date: "2024-10-03", team1: "Athletic Club (ESP)", team2: "AZ Alkmaar (NED)", score1: 2, score2: 0 },
        { matchday: 2, date: "2024-10-03", team1: "FC Twente (NED)", team2: "Fenerbahçe SK (TUR)", score1: 1, score2: 1 },
        { matchday: 2, date: "2024-10-03", team1: "Besiktas JK (TUR)", team2: "Eintracht Frankfurt (GER)", score1: 1, score2: 3 },
        { matchday: 2, date: "2024-10-03", team1: "IF Elfsborg (SWE)", team2: "AS Roma (ITA)", score1: 1, score2: 0 },
    
        // Matchday 3
        { matchday: 3, date: "2024-10-23", team1: "SC Braga (POR)", team2: "FK Bodø/Glimt (NOR)", score1: 1, score2: 2 },
        { matchday: 3, date: "2024-10-23", team1: "Galatasaray AS (TUR)", team2: "IF Elfsborg (SWE)", score1: 4, score2: 3 },
        { matchday: 3, date: "2024-10-24", team1: "AS Roma (ITA)", team2: "FC Dynamo Kyiv (UKR)", score1: 1, score2: 0 },
        { matchday: 3, date: "2024-10-24", team1: "Eintracht Frankfurt (GER)", team2: "FC RFS (LVA)", score1: 1, score2: 0 },
        { matchday: 3, date: "2024-10-24", team1: "PAOK FC (GRE)", team2: "FC Viktori Plzen (CZE)", score1: 2, score2: 2 },
        { matchday: 3, date: "2024-10-24", team1: "Maccabi Tel-Aviv FC (ISR)", team2: "Real Sociedad de Fútbol (ESP)", score1: 1, score2: 2 },
        { matchday: 3, date: "2024-10-24", team1: "Ferencvárosi TC (HUN)", team2: "OGC Nice (FRA)", score1: 1, score2: 0 },
        { matchday: 3, date: "2024-10-24", team1: "Qarabg FK (AZE)", team2: "AFC Ajax (NED)", score1: 0, score2: 3 },
        { matchday: 3, date: "2024-10-24", team1: "FC Midtjylland (DEN)", team2: "R. Union Saint-Gilloise (BEL)", score1: 1, score2: 0 },
        { matchday: 3, date: "2024-10-24", team1: "FC Porto (POR)", team2: "TSG 1899 Hoffenheim (GER)", score1: 2, score2: 0 },
        { matchday: 3, date: "2024-10-24", team1: "Rangers FC (SCO)", team2: "Fotbal Club FCSB (ROU)", score1: 4, score2: 0 },
        { matchday: 3, date: "2024-10-24", team1: "Tottenham Hotspur (ENG)", team2: "AZ Alkmaar (NED)", score1: 1, score2: 0 },
        { matchday: 3, date: "2024-10-24", team1: "Olympique Lyonnais (FRA)", team2: "Besiktas JK (TUR)", score1: 0, score2: 1 },
        { matchday: 3, date: "2024-10-24", team1: "Fenerbahçe SK (TUR)", team2: "Manchester United (ENG)", score1: 1, score2: 1 },
        { matchday: 3, date: "2024-10-24", team1: "Malmö FF (SWE)", team2: "Olympiacos FC (GRE)", score1: 0, score2: 1 },
        { matchday: 3, date: "2024-10-24", team1: "Athletic Club (ESP)", team2: "SK Slavia Praha (CZE)", score1: 1, score2: 0 },
        { matchday: 3, date: "2024-10-24", team1: "RSC Anderlecht (BEL)", team2: "PFC Ludogorets 1945 (BUL)", score1: 2, score2: 0 },
        { matchday: 3, date: "2024-10-24", team1: "FC Twente (NED)", team2: "S.S. Lazio (ITA)", score1: 0, score2: 2 },
      
        // Matchday 4
        { matchday: 4, date: "2024-11-06", team1: "Besiktas JK (TUR)", team2: "Malmö FF (SWE)", score1: 2, score2: 1 },
        { matchday: 4, date: "2024-11-07", team1: "Eintracht Frankfurt (GER)", team2: "SK Slavia Praha (CZE)", score1: 1, score2: 0 },
        { matchday: 4, date: "2024-11-07", team1: "Olympiacos FC (GRE)", team2: "Rangers FC (SCO)", score1: 1, score2: 1 },
        { matchday: 4, date: "2024-11-07", team1: "Galatasaray AS (TUR)", team2: "Tottenham Hotspur (ENG)", score1: 3, score2: 2 },
        { matchday: 4, date: "2024-11-07", team1: "FK Bodø/Glimt (NOR)", team2: "Qarabg FK (AZE)", score1: 1, score2: 2 },
        { matchday: 4, date: "2024-11-07", team1: "R. Union Saint-Gilloise (BEL)", team2: "AS Roma (ITA)", score1: 1, score2: 1 },
        { matchday: 4, date: "2024-11-07", team1: "PFC Ludogorets 1945 (BUL)", team2: "Athletic Club (ESP)", score1: 1, score2: 2 },
        { matchday: 4, date: "2024-11-07", team1: "OGC Nice (FRA)", team2: "FC Twente (NED)", score1: 2, score2: 2 },
        { matchday: 4, date: "2024-11-07", team1: "Fotbal Club FCSB (ROU)", team2: "FC Midtjylland (DEN)", score1: 2, score2: 0 },
        { matchday: 4, date: "2024-11-07", team1: "IF Elfsborg (SWE)", team2: "SC Braga (POR)", score1: 1, score2: 1 },
        { matchday: 4, date: "2024-11-07", team1: "Manchester United (ENG)", team2: "PAOK FC (GRE)", score1: 2, score2: 0 },
        { matchday: 4, date: "2024-11-07", team1: "AFC Ajax (NED)", team2: "Maccabi Tel-Aviv FC (ISR)", score1: 5, score2: 0 },
        { matchday: 4, date: "2024-11-07", team1: "S.S. Lazio (ITA)", team2: "FC Porto (POR)", score1: 2, score2: 1 },
        { matchday: 4, date: "2024-11-07", team1: "AZ Alkmaar (NED)", team2: "Fenerbahçe SK (TUR)", score1: 3, score2: 1 },
        { matchday: 4, date: "2024-11-07", team1: "FC Viktori Plzen (CZE)", team2: "Real Sociedad de Fútbol (ESP)", score1: 2, score2: 1 },
        { matchday: 4, date: "2024-11-07", team1: "FC Dynamo Kyiv (UKR)", team2: "Ferencvárosi TC (HUN)", score1: 0, score2: 4 },
        { matchday: 4, date: "2024-11-07", team1: "TSG 1899 Hoffenheim (GER)", team2: "Olympique Lyonnais (FRA)", score1: 2, score2: 2 },
        { matchday: 4, date: "2024-11-07", team1: "FC RFS (LVA)", team2: "RSC Anderlecht (BEL)", score1: 1, score2: 1 },
        
        // Matchday 5
        { matchday: 5, date: "2024-11-28", team1: "S.S. Lazio (ITA)", team2: "PFC Ludogorets 1945 (BUL)", score1: 0, score2: 0 },
        { matchday: 5, date: "2024-11-28", team1: "AZ Alkmaar (NED)", team2: "Galatasaray AS (TUR)", score1: 1, score2: 1 },
        { matchday: 5, date: "2024-11-28", team1: "Qarabg FK (AZE)", team2: "Olympique Lyonnais (FRA)", score1: 1, score2: 4 },
        { matchday: 5, date: "2024-11-28", team1: "FC Dynamo Kyiv (UKR)", team2: "FC Viktori Plzen (CZE)", score1: 1, score2: 2 },
        { matchday: 5, date: "2024-11-28", team1: "Athletic Club (ESP)", team2: "IF Elfsborg (SWE)", score1: 3, score2: 0 },
        { matchday: 5, date: "2024-11-28", team1: "RSC Anderlecht (BEL)", team2: "FC Porto (POR)", score1: 2, score2: 2 },
        { matchday: 5, date: "2024-11-28", team1: "Besiktas JK (TUR)", team2: "Maccabi Tel-Aviv FC (ISR)", score1: 1, score2: 3 },
        { matchday: 5, date: "2024-11-28", team1: "FC RFS (LVA)", team2: "PAOK FC (GRE)", score1: 0, score2: 2 },
        { matchday: 5, date: "2024-11-28", team1: "Manchester United (ENG)", team2: "FK Bodø/Glimt (NOR)", score1: 3, score2: 2 },
        { matchday: 5, date: "2024-11-28", team1: "Tottenham Hotspur (ENG)", team2: "AS Roma (ITA)", score1: 2, score2: 2 },
        { matchday: 5, date: "2024-11-28", team1: "SK Slavia Praha (CZE)", team2: "Fenerbahçe SK (TUR)", score1: 1, score2: 2 },
        { matchday: 5, date: "2024-11-28", team1: "Real Sociedad de Fútbol (ESP)", team2: "AFC Ajax (NED)", score1: 2, score2: 0 },
        { matchday: 5, date: "2024-11-28", team1: "SC Braga (POR)", team2: "TSG 1899 Hoffenheim (GER)", score1: 3, score2: 0 },
        { matchday: 5, date: "2024-11-28", team1: "Ferencvárosi TC (HUN)", team2: "Malmö FF (SWE)", score1: 4, score2: 1 },
        { matchday: 5, date: "2024-11-28", team1: "FC Midtjylland (DEN)", team2: "Eintracht Frankfurt (GER)", score1: 1, score2: 2 },
        { matchday: 5, date: "2024-11-28", team1: "OGC Nice (FRA)", team2: "Rangers FC (SCO)", score1: 1, score2: 4 },
        { matchday: 5, date: "2024-11-28", team1: "FC Twente (NED)", team2: "R. Union Saint-Gilloise (BEL)", score1: 0, score2: 1 },
        { matchday: 5, date: "2024-11-28", team1: "Fotbal Club FCSB (ROU)", team2: "Olympiacos FC (GRE)", score1: 0, score2: 0 },
    
        // Matchday 6 Wednesday 11 December 2024
        { matchday: 6, date: "2024-12-11", team1: "Fenerbahçe SK", team2: "Athletic Club", score1: null, score2: null },
        
        // Thursday 12 December 2024
        { matchday: 6, date: "2024-12-12", team1: "AS Roma", team2: "SC Braga", score1: null, score2: null },
        { matchday: 6, date: "2024-12-12", team1: "Olympiacos FC", team2: "FC Twente", score1: null, score2: null },
        { matchday: 6, date: "2024-12-12", team1: "PAOK FC", team2: "Ferencvárosi TC", score1: null, score2: null },
        { matchday: 6, date: "2024-12-12", team1: "FC Viktori Plzen (CZE)", team2: "Manchester United", score1: null, score2: null },
        { matchday: 6, date: "2024-12-12", team1: "R. Union Saint-Gilloise", team2: "OGC Nice", score1: null, score2: null },
        { matchday: 6, date: "2024-12-12", team1: "PFC Ludogorets 1945", team2: "AZ Alkmaar", score1: null, score2: null },
        { matchday: 6, date: "2024-12-12", team1: "Malmö FF", team2: "Galatasaray AS (TUR)", score1: null, score2: null },
        { matchday: 6, date: "2024-12-12", team1: "TSG 1899 Hoffenheim", team2: "Fotbal Club FCSB", score1: null, score2: null },
        { matchday: 6, date: "2024-12-12", team1: "FC Porto", team2: "FC Midtjylland", score1: null, score2: null },
        { matchday: 6, date: "2024-12-12", team1: "AFC Ajax", team2: "S.S. Lazio", score1: null, score2: null },
        { matchday: 6, date: "2024-12-12", team1: "Rangers FC", team2: "Tottenham Hotspur", score1: null, score2: null },
        { matchday: 6, date: "2024-12-12", team1: "SK Slavia Praha", team2: "RSC Anderlecht", score1: null, score2: null },
        { matchday: 6, date: "2024-12-12", team1: "Real Sociedad de Fútbol", team2: "FC Dynamo Kyiv", score1: null, score2: null },
        { matchday: 6, date: "2024-12-12", team1: "Olympique Lyonnais", team2: "Eintracht Frankfurt", score1: null, score2: null },
        { matchday: 6, date: "2024-12-12", team1: "Maccabi Tel-Aviv FC", team2: "FC RFS", score1: null, score2: null },
        { matchday: 6, date: "2024-12-12", team1: "FK Bodø/Glimt", team2: "Besiktas JK (TUR)", score1: null, score2: null },
        { matchday: 6, date: "2024-12-12", team1: "IF Elfsborg", team2: "Qarabg FK (AZE)", score1: null, score2: null },

        // Tuesday 21 January 2025
        { matchday: 7, date: "2025-01-21", team1: "Galatasaray AS (TUR)", team2: "FC Dynamo Kyiv", score1: null, score2: null },
        
        // Wednesday 22 January 2025
        { matchday: 7, date: "2025-01-22", team1: "Besiktas JK (TUR)", team2: "Athletic Club", score1: null, score2: null },
        
        // Thursday 23 January 2025
        { matchday: 7, date: "2025-01-23", team1: "FC Porto", team2: "Olympiacos FC", score1: null, score2: null },
        { matchday: 7, date: "2025-01-23", team1: "AZ Alkmaar", team2: "AS Roma", score1: null, score2: null },
        { matchday: 7, date: "2025-01-23", team1: "Fenerbahçe SK", team2: "Olympique Lyonnais", score1: null, score2: null },
        { matchday: 7, date: "2025-01-23", team1: "Qarabg FK (AZE)", team2: "Fotbal Club FCSB", score1: null, score2: null },
        { matchday: 7, date: "2025-01-23", team1: "FC Viktori Plzen (CZE)", team2: "RSC Anderlecht", score1: null, score2: null },
        { matchday: 7, date: "2025-01-23", team1: "FK Bodø/Glimt", team2: "Maccabi Tel-Aviv FC", score1: null, score2: null },
        { matchday: 7, date: "2025-01-23", team1: "Malmö FF", team2: "FC Twente", score1: null, score2: null },
        { matchday: 7, date: "2025-01-23", team1: "TSG 1899 Hoffenheim", team2: "Tottenham Hotspur", score1: null, score2: null },
        { matchday: 7, date: "2025-01-23", team1: "Manchester United", team2: "Rangers FC", score1: null, score2: null },
        { matchday: 7, date: "2025-01-23", team1: "Eintracht Frankfurt", team2: "Ferencvárosi TC", score1: null, score2: null },
        { matchday: 7, date: "2025-01-23", team1: "S.S. Lazio", team2: "Real Sociedad de Fútbol", score1: null, score2: null },
        { matchday: 7, date: "2025-01-23", team1: "PAOK FC", team2: "SK Slavia Praha", score1: null, score2: null },
        { matchday: 7, date: "2025-01-23", team1: "R. Union Saint-Gilloise", team2: "SC Braga", score1: null, score2: null },
        { matchday: 7, date: "2025-01-23", team1: "PFC Ludogorets 1945", team2: "FC Midtjylland", score1: null, score2: null },
        { matchday: 7, date: "2025-01-23", team1: "FC RFS", team2: "AFC Ajax", score1: null, score2: null },
        { matchday: 7, date: "2025-01-23", team1: "IF Elfsborg", team2: "OGC Nice", score1: null, score2: null },
    
        // Thursday 30 January 2025
        { matchday: 8, date: "2025-01-30", team1: "AS Roma", team2: "Eintracht Frankfurt", score1: null, score2: null },
        { matchday: 8, date: "2025-01-30", team1: "AFC Ajax", team2: "Galatasaray AS (TUR)", score1: null, score2: null },
        { matchday: 8, date: "2025-01-30", team1: "Rangers FC", team2: "R. Union Saint-Gilloise", score1: null, score2: null },
        { matchday: 8, date: "2025-01-30", team1: "Tottenham Hotspur", team2: "IF Elfsborg", score1: null, score2: null },
        { matchday: 8, date: "2025-01-30", team1: "SK Slavia Praha", team2: "Malmö FF", score1: null, score2: null },
        { matchday: 8, date: "2025-01-30", team1: "Real Sociedad de Fútbol", team2: "PAOK FC", score1: null, score2: null },
        { matchday: 8, date: "2025-01-30", team1: "SC Braga", team2: "S.S. Lazio", score1: null, score2: null },
        { matchday: 8, date: "2025-01-30", team1: "Olympiacos FC", team2: "Qarabg FK (AZE)", score1: null, score2: null },
        { matchday: 8, date: "2025-01-30", team1: "Olympique Lyonnais", team2: "PFC Ludogorets 1945", score1: null, score2: null },
        { matchday: 8, date: "2025-01-30", team1: "Maccabi Tel-Aviv FC", team2: "FC Porto", score1: null, score2: null },
        { matchday: 8, date: "2025-01-30", team1: "Ferencvárosi TC", team2: "AZ Alkmaar", score1: null, score2: null },
        { matchday: 8, date: "2025-01-30", team1: "FC Dynamo Kyiv", team2: "FC RFS", score1: null, score2: null },
        { matchday: 8, date: "2025-01-30", team1: "FC Midtjylland", team2: "Fenerbahçe SK", score1: null, score2: null },
        { matchday: 8, date: "2025-01-30", team1: "Athletic Club", team2: "FC Viktori Plzen (CZE)", score1: null, score2: null },
        { matchday: 8, date: "2025-01-30", team1: "OGC Nice", team2: "FK Bodø/Glimt", score1: null, score2: null },
        { matchday: 8, date: "2025-01-30", team1: "RSC Anderlecht", team2: "TSG 1899 Hoffenheim", score1: null, score2: null },
        { matchday: 8, date: "2025-01-30", team1: "FC Twente", team2: "Besiktas JK (TUR)", score1: null, score2: null },
        { matchday: 8, date: "2025-01-30", team1: "Fotbal Club FCSB", team2: "Manchester United", score1: null, score2: null }
    ];   
      
      
      


      

    const matchdays = {};

    fixtures.forEach(fixture => {
        if (!matchdays[fixture.matchday]) {
            matchdays[fixture.matchday] = [];
        }
        matchdays[fixture.matchday].push(fixture);
    });

    Object.keys(matchdays).forEach(matchday => {
        const dayDiv = document.createElement("div");
        dayDiv.className = "matchday";
        const button = document.createElement("button");
        button.innerText = `Matchday ${matchday}`;
        button.className = 'matchday-button';

        const fixtureContainer = document.createElement("div");
        fixtureContainer.style.display = 'none';

        button.addEventListener("click", function() {
            fixtureContainer.style.display = fixtureContainer.style.display === 'none' ? 'block' : 'none';
        });

        dayDiv.appendChild(button);

        matchdays[matchday].forEach(fixture => {
            createFixture(fixture.team1, fixture.team2, fixture.date, fixture.score1, fixture.score2, fixtureContainer);
        });

        dayDiv.appendChild(fixtureContainer);
        fixturesDiv.appendChild(dayDiv);
    });

    function createFixture(team1, team2, date, score1, score2, parentDiv) {
        const fixture = document.createElement("div");
        fixture.className = "fixture fade-in";  // Added fade-in class
    
        fixture.innerHTML = `
            <div class="fixture-date">${date}</div>
            <div class="team-name">${team1}</div>
            <div class="score-inputs">
                <input type="number" min="0" class="team1-score" data-team="${team1}" value="${score1 !== null ? score1 : ''}">
                -
                <input type="number" min="0" class="team2-score" data-team="${team2}" value="${score2 !== null ? score2 : ''}">
            </div>
            <div class="team-name">${team2}</div>
        `;
    
        parentDiv.appendChild(fixture);
    }

    function removeFixture(element) {
        element.classList.add("fade-out");
        setTimeout(() => {
            element.remove();
        }, 500); // Match the duration of the fadeOut animation
    }
    
    

    function resetTeams() {
        teamNames.forEach(team => {
            teams[team] = {
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                goalsFor: 0,
                goalsAgainst: 0,
                awayGoals: 0,
                awayWins: 0,
                points: 0
            };
        });
    }

    function recountStats() {
        resetTeams();
        fixtures.forEach(fixture => {
            if (fixture.score1 !== null && fixture.score2 !== null) {
                updateTeamStats(fixture.team1, fixture.team2, fixture.score1, fixture.score2, fixture.date);
                updateTeamStats(fixture.team2, fixture.team1, fixture.score2, fixture.score1, fixture.date);
            }
        });
    }

    function updateTeamStats(team, opponent, goalsFor, goalsAgainst, date) {
        teams[team].played += 1;
        teams[team].goalsFor += goalsFor;
        teams[team].goalsAgainst += goalsAgainst;

        const isAwayGame = (teams[team].played + teams[opponent].played) % 2 === 0;

        if (goalsFor > goalsAgainst) {
            teams[team].won += 1;
            teams[team].points += 3;
            if (isAwayGame) {
                teams[team].awayWins += 1;
            }
        } else if (goalsFor === goalsAgainst) {
            teams[team].drawn += 1;
            teams[team].points += 1;
        } else {
            teams[team].lost += 1;
        }

        if (isAwayGame) {
            teams[team].awayGoals += goalsFor;
        }
    }

    function updatePointsTable() {
        pointsTable.innerHTML = "";
        const sortedTeams = Object.entries(teams).sort((a, b) => 
            b[1].points - a[1].points || // Points
            (b[1].goalsFor - b[1].goalsAgainst) - (a[1].goalsFor - a[1].goalsAgainst) || // Goal difference
            b[1].goalsFor - a[1].goalsFor || // Goals scored
            b[1].awayGoals - a[1].awayGoals || // Away goals scored
            b[1].won - a[1].won || // Wins
            b[1].awayWins - a[1].awayWins // Away wins
        );
    
        sortedTeams.forEach((team, index) => {
            const row = pointsTable.insertRow();
            row.className = index < 8 ? 'top8 table-row-update' : index < 24 ? 'mid8 table-row-update' : 'bottom4 table-row-update'; // Apply classes based on rank
    
            row.insertCell(0).innerText = index + 1;
            row.insertCell(1).innerText = team[0];
            row.insertCell(2).innerText = team[1].played;
            row.insertCell(3).innerText = team[1].won;
            row.insertCell(4).innerText = team[1].drawn;
            row.insertCell(5).innerText = team[1].lost;
            row.insertCell(6).innerText = team[1].goalsFor;
            row.insertCell(7).innerText = team[1].goalsAgainst;
            row.insertCell(8).innerText = team[1].goalsFor - team[1].goalsAgainst;
            row.insertCell(9).innerText = team[1].points;
        });
    
        // Remove the animation class after the animation ends
        setTimeout(() => {
            document.querySelectorAll('.table-row-update').forEach(row => {
                row.classList.remove('table-row-update');
            });
        }, 1000); // Animation duration time
    }
    
    

    document.addEventListener("change", function(event) {
        if (event.target.classList.contains("team1-score") || event.target.classList.contains("team2-score")) {
            const fixtureDiv = event.target.closest(".fixture");
            const team1 = fixtureDiv.querySelector(".team1-score").dataset.team;
            const team2 = fixtureDiv.querySelector(".team2-score").dataset.team;
            const score1 = parseInt(fixtureDiv.querySelector(".team1-score").value) || 0;
            const score2 = parseInt(fixtureDiv.querySelector(".team2-score").value) || 0;

            // Update fixture scores
            fixtures.forEach(fixture => {
                if (fixture.team1 === team1 && fixture.team2 === team2) {
                    fixture.score1 = score1;
                    fixture.score2 = score2;
                }
            });

            // Recount stats and update points table
            recountStats();
            updatePointsTable();
        }
    });



    
    function saveData() {
        console.log("Saving data...");
        const userInputs = fixtures.map(fixture => ({
            team1: fixture.team1,
            team2: fixture.team2,
            score1: fixture.score1,
            score2: fixture.score2,
            userModified: fixture.userModified || false
        }));
        localStorage.setItem('userInputs', JSON.stringify(userInputs));
    }

    function loadData() {
        const savedInputs = localStorage.getItem('userInputs');
        if (savedInputs) {
            const parsedInputs = JSON.parse(savedInputs);
            parsedInputs.forEach((savedFixture, index) => {
                const fixture = fixtures.find(f => f.team1 === savedFixture.team1 && f.team2 === savedFixture.team2);
                if (fixture) {
                    fixture.score1 = savedFixture.score1;
                    fixture.score2 = savedFixture.score2;
                }
            });

            // Apply saved inputs to input fields
            document.querySelectorAll('.fixture').forEach(fixtureDiv => {
                const team1 = fixtureDiv.querySelector(".team1-score").dataset.team;
                const team2 = fixtureDiv.querySelector(".team2-score").dataset.team;
                const fixture = fixtures.find(f => f.team1 === team1 && f.team2 === team2);
                if (fixture) {
                    const score1Input = fixtureDiv.querySelector(".team1-score");
                    const score2Input = fixtureDiv.querySelector(".team2-score");
                    score1Input.value = fixture.score1 !== null ? fixture.score1 : '';
                    score2Input.value = fixture.score2 !== null ? fixture.score2 : '';
                }
            });
        }
    }

    function resetData() {
        console.log("Resetting data...");
        localStorage.removeItem('userInputs');
        fixtures.forEach(fixture => {
            if (fixture.userModified) {
                fixture.score1 = null;
                fixture.score2 = null;
                fixture.userModified = false;
            }
        });
        document.querySelectorAll('.team1-score, .team2-score').forEach(input => {
            if (!input.readOnly) {
                input.value = '';
            }
        });
        recountStats();
        updatePointsTable();
    }

    document.getElementById('resetButton').addEventListener('click', resetData);

    document.addEventListener("change", function(event) {
        if (event.target.classList.contains("team1-score") || event.target.classList.contains("team2-score")) {
            const fixtureDiv = event.target.closest(".fixture");
            const team1 = fixtureDiv.querySelector(".team1-score").dataset.team;
            const team2 = fixtureDiv.querySelector(".team2-score").dataset.team;
            const score1 = parseInt(fixtureDiv.querySelector(".team1-score").value);
            const score2 = parseInt(fixtureDiv.querySelector(".team2-score").value);

            if (!isNaN(score1) && !isNaN(score2)) {
                // Update fixture scores
                fixtures.forEach(fixture => {
                    if (fixture.team1 === team1 && fixture.team2 === team2) {
                        fixture.score1 = score1;
                        fixture.score2 = score2;
                        fixture.userModified = true; // Mark as user modified
                    }
                });

                // Recount stats and update points table
                recountStats();
                updatePointsTable();
                saveData(); // Save data after every change
            }
        }
    });
    
    function convertToCSV(data) {
        const csvRows = [];
        const headers = ["Position", "Team", "Played", "Won", "Drawn", "Lost", "Goals For", "Goals Against", "Goal Difference", "Points"];
        csvRows.push(headers.join(","));
    
        data.forEach((row, index) => {
            const values = [
                index + 1,
                row[0],
                row[1].played,
                row[1].won,
                row[1].drawn,
                row[1].lost,
                row[1].goalsFor,
                row[1].goalsAgainst,
                row[1].goalsFor - row[1].goalsAgainst,
                row[1].points
            ];
            csvRows.push(values.join(","));
        });
    
        return csvRows.join("\n");
    }
    
    function downloadCSV(data) {
        const csvData = convertToCSV(data);
        const blob = new Blob([csvData], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('href', url);
        a.setAttribute('download', 'europa_league_predictions.csv');
        a.click();
    }
    
    document.getElementById('exportCSVButton').addEventListener('click', () => {
        const sortedTeams = Object.entries(teams).sort((a, b) => 
            b[1].points - a[1].points ||
            (b[1].goalsFor - b[1].goalsAgainst) - (a[1].goalsFor - a[1].goalsAgainst) ||
            b[1].goalsFor - a[1].goalsFor ||
            b[1].awayGoals - a[1].awayGoals ||
            b[1].won - a[1].won ||
            b[1].awayWins - a[1].awayWins
        );
    
        downloadCSV(sortedTeams);
    });
    
    loadData(); // Load data on page load
    recountStats();
    updatePointsTable();

    const { jsPDF } = window.jspdf;

    function exportToPDF() {
        const doc = new jsPDF();
    
        // Title
        let y = 10;
        doc.setFontSize(18);
        doc.text("UEFA Europa League Predictor", 105, y, null, null, "center");
        y += 10;
    
        // Fixtures Header
        doc.setFontSize(14);
        doc.text("Fixtures", 105, y, null, null, "center");
        y += 10;
    
        // Fixtures Section with Table Layout
        Object.keys(matchdays).forEach((matchday) => {
            doc.setFontSize(14);
            doc.text(`Matchday ${matchday}`, 10, y);
            y += 10;
    
            // Table Header for Fixtures
            const columnWidths = {
                date: 30,
                teams: 120,
                score: 40,
            };
            const startX = 10;
    
            doc.setFontSize(12);
            doc.text("Date", startX, y);
            doc.text("Teams", startX + columnWidths.date + 5, y);
            doc.text("Score", startX + columnWidths.date + columnWidths.teams + columnWidths.score - 5, y, null, null, "right");
            y += 10;
    
            matchdays[matchday].forEach((fixture, index) => {
                const { team1, team2, score1, score2, date } = fixture;
    
                // Alternating row background colors
                const bgColor = index % 2 === 0 ? [245, 245, 245] : [255, 255, 255];
                doc.setFillColor(...bgColor);
                doc.rect(10, y - 7, 190, 8, "F");
    
                // Fixture Details
                doc.setFontSize(12);
    
                // Date
                doc.text(date, startX, y);
    
                // Teams
                const teamText = `${team1} vs ${team2}`;
                const maxTeamTextLength = 40; // Adjust if needed for longer names
                const truncatedTeamText = teamText.length > maxTeamTextLength
                    ? `${teamText.substring(0, maxTeamTextLength)}...`
                    : teamText;
                doc.text(truncatedTeamText, startX + columnWidths.date + 5, y);
    
                // Score
                const scoreText = `${score1 !== null ? score1 : '-'} - ${score2 !== null ? score2 : '-'}`;
                doc.text(scoreText, startX + columnWidths.date + columnWidths.teams + columnWidths.score - 5, y, null, null, "right");
    
                y += 10;
    
                // Pagination for fixtures
                if (y > 270) {
                    doc.addPage();
                    y = 10;
                    doc.setFontSize(14);
                    doc.text("Fixtures (cont.)", 105, y, null, null, "center");
                    y += 10;
                }
            });
    
            y += 10;
        });
    
        // Points Table Header
        doc.setFontSize(14);
        doc.text("Points Table", 105, y, null, null, "center");
        y += 10;
    
        // Points Table Body
        const tableBody = Array.from(document.querySelectorAll("#pointsTable tbody tr")).map((row, rowIndex) => {
            const rowData = Array.from(row.cells).map(cell => cell.innerText);
            const rank = rowData[0];
            const indicatorColor = rowIndex < 8 ? [0, 255, 0] : rowIndex < 24 ? [255, 215, 0] : [255, 0, 0];
    
            // Add a colored indicator next to the rank
            return [
                {
                    content: "",
                    styles: {
                        cellWidth: 5,
                        halign: "center",
                        valign: "middle",
                        fillColor: indicatorColor,
                    },
                },
                rank, // Replace "Position" with "No."
                ...rowData.slice(1),
            ];
        });
    
        // Render Points Table
        doc.autoTable({
            startY: y,
            head: [
                ["", "No.", "Team", "Played", "Won", "Drawn", "Lost", "Goals For", "Goals Against", "Goal Difference", "Points"],
            ],
            body: tableBody,
            bodyStyles: {
                halign: "center",
            },
            styles: {
                lineWidth: 0.1,
                lineColor: [200, 200, 200],
            },
            headStyles: {
                fillColor: [45, 45, 45],
                textColor: [255, 255, 255],
            },
            columnStyles: {
                0: { cellWidth: 5 }, // Indicator column
                1: { cellWidth: 10 }, // No. column (was Position)
            },
        });
    
        // Save the PDF
        doc.save("EuropaLeaguePredictions.pdf");
    }
    
    document.getElementById("exportPDFButton").addEventListener("click", exportToPDF);
    
    
    


});
