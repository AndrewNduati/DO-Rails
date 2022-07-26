import { Controller } from 'stimulus'

export default class extends Controller {
    // doing this allows us to target the elements using shorthand code. e.g this.bodyTarget ;)
    static targets = ["body", "add", "show"]

    addBody() {
        // content is the value of the form submission
        let content = this.bodyTarget.value;
        console.log('adding')
        // We're adding the post content to the add target posts.add (?)
        this.addTarget.insertAdjacentHTML('beforebegin', "<li> " + content + "</li>");

    }
    showAll() {
        // shorthand code for the show div 
        this.showTarget.style.visibility = "visible";
    }
    upvote() {
        // some clever css here
        let post = event.target.closest(".post");
        console.log('Upvotin')
        post.insertAdjacentHTML('beforeend', '<i class="fa fa-check-circle"></i>');
    }
    remove() {
        let post = event.target.closest(".post");
        post.style.visibility = "hidden";
    }
}
