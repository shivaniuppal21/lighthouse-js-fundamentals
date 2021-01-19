
function camel (input){
    var result = "";

    for (i = 0; i < input.length; i++){
        if (input[i] === " "){
            result += input[i+1].toUpperCase();
            i++;
        } else {
            result += input[i];
        }
        }   
        return result;   
    }

    function pascal (input){
        var result = "";

        for (i = 0; i < input.length; i++){
            if (i === 0){
                result += input[i].toUpperCase();
            } else if (input[i] === " "){
                result += input[i+1].toUpperCase();
                i++
            } else {
                result += input[i];
            }
        } return result;;
     }  

     function snake(input){
        var result = "";

        for(i = 0; i < input.length; i++){
          if(input[i] === " "){
            result += "_";
          } else {
            result += input[i];
          }
        }
        return result;
      }   
      function kebab(input){
        var result = "";

        for(i = 0; i < input.length; i++){
          if(input[i] === " "){
            result += "-";
          } else {
            result += input[i];
          }
        }
        return result;
      }
      function title(input){
        var result = "";

        for(i = 0; i < input.length; i++){
          if(i === 0){
            result += input[i].toUpperCase();
          }
          else if(input[i] === " "){
            result += " " + input[i+1].toUpperCase();
            i++;
          } else {
            result += input[i];
          }
        }
        return result;
      }
      
      function vowel(input){
        var result = "";

        for(i = 0; i < input.length; i++){
          if(input[i] === "a" || input[i] === "e" || input[i] === "i"||input[i] === "o"||input[i] === "u"){
            result += input[i].toUpperCase();
          } else {
            result += input[i];
          }
        }
        return result;
      }
      function consonant(input){
        var result = "";

        // var result = "";
        for(i = 0; i < input.length; i++){
          if(input[i] === "a" || input[i] === "i"||input[i] === "o"||input[i] === "u"||input[i] === "e"){
            result += input[i];
          } else {
            result += input[i].toUpperCase();
          }
        }
        return result;
      }
      function upper(input){
        var result = "";

        for (var i = 0; i < input.length; i++) {
          result += input[i].toUpperCase();
        }
        return result;
      }
      
      function lower(input){
        var result = "";

        for(i = 0; i < input.length; i++){
          result += input[i].toLowerCase();
        }
        return result;
      }

const makeCase = function(input, style) {
    

    const font = ["camel", "pascal", "snake", "kebab", "title", "vowel", "consonant", "upper", "lower"]
    var fontfun = [camel, pascal, snake, kebab, title, vowel, consonant, upper, lower]
      if(typeof(style) === 'string' && font.includes(style)){
        font_funindex = font.indexOf(style)
        return fontfun[font_funindex](input);
      }
      else if(typeof(style) === 'object'){
          let output = input;
          for( var j = 0; j < style.length; j++){
              if(font.includes(style[j]) ){
                font_funindex = font.indexOf(style[j])
                output =  fontfun[font_funindex](output);
              }
          }return output;
      }
}
    
    console.log(makeCase("this is a string", "camel"));
    console.log(makeCase("this is a string", "pascal"));
    console.log(makeCase("this is a string", "snake"));
    console.log(makeCase("this is a string", "kebab"));
    console.log(makeCase("this is a string", "title"));
    console.log(makeCase("this is a string", "vowel"));
    console.log(makeCase("this is a string", "consonant"));
    console.log(makeCase("this is a string", ["upper", "snake"]));

