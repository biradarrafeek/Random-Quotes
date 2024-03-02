const btn = document.getElementById( 'btn' );
const output = document.querySelector( '.output');


let quote = [
    "The struggle you're in today is developing the strength you need for tomorrow.", 
    "Success isn’t about being  successful, it’s about not failing.", 
    "Don’t watch the clock; do what it does. Keep going. Keep going until you can no longer go.",  
    "If you want to be happy, tap into the energy of others. If you want to be powerful, tap into their love.",
    "There's always hope for a better tomorrow, even if things don't work out today. Just keep working hard and stay committed to your goals. With persistence and determination, you can achieve anything you set your mind to.",
    "I am also following these things because I am also unemployed and can relate to the struggles of job hunting",
    "I hope we become successful soon. Thank you."
];

btn.addEventListener('click', () => {
    console.log("clicked");
    let random = Math.floor(Math.random( ) * quote.length);
    output.textContent = quote[random];
});
