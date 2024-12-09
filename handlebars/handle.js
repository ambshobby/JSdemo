const btn = document.getElementById('bt1');
btn.addEventListener('click', handlesample);

function handlesample()
{
let name1=document.getElementById('name1').value;
let mobile1=document.getElementById('mobile1').value;
const source = document.getElementById('greet').innerHTML;

const template = Handlebars.compile(source)

const context = {};
  context.namefull=name1;
  context.mobile=mobile1;
  


    const compiledHtml = template(context)

    const information = document.getElementById('finalmessage')
    information.innerHTML = compiledHtml;
}
