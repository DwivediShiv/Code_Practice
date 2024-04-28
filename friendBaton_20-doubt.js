function passBaton(friends, time) {
    const totalFriends = friends * 2 - 1; // Total number of friends including both directions
    const cycleTime = 2 * (friends - 1); // Time taken to complete one cycle (passing from one end to the other and back)
    
    // Adjust the time within one cycle
    time = time % cycleTime;
    
    // Determine the direction of passing
    const direction = time < friends ? 1 : -1;
    
    // Determine the friend who holds the baton
    let friendWithBaton;
    if (direction === 1) {
        friendWithBaton = time % friends === 0 ? friends : time % friends;
    } else {
        friendWithBaton = friends - time % friends;
    }
    
    // Determine the friend who will receive the baton next
    let friendToReceive = friendWithBaton + direction;
    
    // Adjust the friend index if it exceeds the total number of friends
    if (friendToReceive < 1) {
        friendToReceive += totalFriends;
    } else if (friendToReceive > totalFriends) {
        friendToReceive -= totalFriends;
    }

    return [friendWithBaton, friendToReceive];
}

// Example usage:
const friends = 4;
const time = 5;
console.log(passBaton(friends, time)); // Output: [3, 2]
