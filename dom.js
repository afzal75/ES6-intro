document.getElementById('add-border').addEventListener('click', function(){
    const container = document.getElementById('friend-container');
    container.style.border = '3px solid yellow';
});

function addBackgroundColor(){
const friends = document.getElementsByClassName('friend');
for(const friend of friends){
    friend.style.backgroundColor = 'purple';

    }
}
document.getElementById('add-friend').addEventListener('click', function(){
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
    <h3 class="friend-name">Friend-1</h3>
    <p>Lorem ipsum dolor sit amet.</p>
     `
    container.appendChild(friendDiv);
})