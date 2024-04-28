// 19 - doubt

function minTeams(teamsize_1, teamsize_2, numberOfParticipants) {
    let minTeams = Infinity;

    // Try all combinations of teams for track 1 and track 2
    for (let teams_of_1 = 0; teams_of_1 <= Math.ceil(numberOfParticipants / teamsize_1); teams_of_1++) {
        for (let teams_of_2 = 0; teams_of_2 <= Math.ceil(numberOfParticipants / teamsize_2); teams_of_2++) {
            const totalParticipants = teams_of_1 * teamsize_1 + teams_of_2 * teamsize_2;
            if (totalParticipants === numberOfParticipants) {
                minTeams = Math.min(minTeams, teams_of_1 + teams_of_2);
            }
        }
    }

    return minTeams === Infinity ? -1 : minTeams;
}

// Example usage:
const teamsize_1 = 3;
const teamsize_2 = 4;
const numberOfParticipants = 7;
console.log(minTeams(teamsize_1, teamsize_2, numberOfParticipants)); // Output: 2
