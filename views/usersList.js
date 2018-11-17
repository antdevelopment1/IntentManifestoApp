function membersToItem(memberObject) {
    console.log(memberObject);
    return `
        <li class="member-list-item">
          <a href="/welcome">
            ${memberObject.name}
          </a>
        </li>
    `;
}
// First function called
function allMembers(arrayOfMembers) {
    // Takes all members and maps through each member. Before logging each member we pass it to our membersToItem function
    // That function takes each member and turns them into a list item with a class that is also an href anbd returns that value
    // back to our current function
    const memberItems = arrayOfMembers.map(membersToItem).join('');
    // We log each member and return each li to our current ul tag which then returns to our page function
    return `
        <ul>${memberItems}</ul>
    `;
}

module.exports = allMembers;