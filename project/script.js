function getlonwords(sintance)
{
  let longwords = [];
  const words = sintance.split(' ');
  let maxlength = 0 ;
  for( let word of words)
  {
    if(word.length > maxlength)
    {
      maxlength = word.length;
    }
  }
  for (word of words){
    if(maxlength == word.length){
      longwords.push(word);
      
    }
  }
  return longwords
}

let sintance = document.getElementById('text');
let text = document.getElementById('display');
function display()
{
  text.innerHTML = getlonwords(sintance.value);


}
