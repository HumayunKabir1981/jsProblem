function wordFrequency(sentence){
const sentLower=sentence.toLowerCase();
const words=sentLower.split(" ")
let wordCount={};
for(let word of words){
    if(wordCount.hasOwnProperty(word)){
        wordCount[word]++;
    }else{
        wordCount[word]=1;
    }
}
return wordCount;
}

const sentence="I love JS and I love coding and JS is fun";
const output=wordFrequency(sentence);
console.log(output);

const sentence2="Hello hello HELLO";
const output2=wordFrequency(sentence2);
console.log(output2);