window.onkeyup =

    function Check() {

        var   text          = document.getElementById("textarea").value
            , text          = text.toLowerCase()
            , srchWord      = document.getElementById("srchWord").value
            , srchWord      = srchWord.toLocaleLowerCase()
            , srchLetter    = document.getElementById("srchLetter").value
            , srchLetter    = srchLetter.toLocaleLowerCase()
            , word          = text.split(" ")
            , letter        = text.split("")
            , number        = text.split("")
            , numberCount   = 0
            , wordCounted   = word.length
            , letterCounted = letter.length;



        // write text in second textarea as well
        document.getElementById("afterSearching").value = text;



        for (var i = 0; i < number.length; i++) {
            if (isNaN(parseInt(number[i])) == false) { // to check if the element is number or not
                numberCount++;
                letterCounted--;
            }
        }


        for (var i = 0; i < word.length; i++) {
            if (typeof (word[i]) == "number") { // to check if the element is number or not
                wordCounted--;
            }
        }




        document.getElementById("number").value = numberCount; // displaying how many numbers
        document.getElementById("word").value   = wordCounted; // displaying how many words
        document.getElementById("letter").value = letterCounted; // displaying how many letters

        function schWord(srchWord) { // a function for counting a given word
            var i;
            var cntWord = 0;
            for (i = 0; i < word.length; i++) {
                if (word[i] == srchWord) {
                    cntWord++;
                    if (word[i] != "") {
                        word[i] = " [ " + word[i] + " ] ";
                    }
                    document.getElementById("afterSearching").value = word.join(" ");
                }
            }
            return cntWord;
        }

        function schLetter(srchLetter) { //a function for counting a given letter
            var i;
            var cntLetter = 0;
            for (i = 0; i < letter.length; i++) {
                if (letter[i] == srchLetter) {
                    cntLetter++;
                    if (letter[i] != "") {
                        letter[i] = "[" + letter[i] + "]";
                    }
                    document.getElementById("afterSearching").value = letter.join("");
                }
            }
            return cntLetter;
        }


        document.getElementById("srchWordFound").innerHTML = srchWord + " "; // set the counted value
        document.getElementById("wordFound").value         = schWord(srchWord);
    
        if (document.getElementById("wordFound").value == 0) { // set value to NULL 
            document.getElementById("wordFound").value = "NULL";
        }

        document.getElementById("srchLetterFound").innerHTML = srchLetter + " "; // set the counted value
        document.getElementById("letterFound").value         = schLetter(srchLetter);
    
        if (document.getElementById("letterFound").value == 0) {
            document.getElementById("letterFound").value = "NULL"; // set value to NULL
        }
    }