module.exports={

wordCount: function(str)
{
  var result = {};
  var count = 1;
  var words = str.trim().split(/[\s,]+/);
  for(var i=0; i<=words.length-1; i++)
  {
    if(result.hasOwnProperty(words[i])){
      result[words[i]] += 1
    }
    else{
      result[words[i]] = 1
    }
     
  }
 return result;  
}
}