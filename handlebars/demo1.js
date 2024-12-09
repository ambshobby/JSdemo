document.getElementById('say').addEventListener('click', say_hi);

function say_hi() {
    var fname = document.getElementById('first_name').value;
    var lname = document.getElementById('last_name').value;

 
    var source   = document.getElementById('text-template').innerHTML;
    var template = Handlebars.compile(source);
    var context = {first_name: fname, LAST_NAME: lname};
    var html    = template(context);
 
    document.getElementById('result').innerHTML = html;
}

