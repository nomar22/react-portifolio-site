public List<String> findAnagram(String w){
    File file = new File("wl.txt");
    List<String> anagram = new ArrayList();
    for (String line : readNextLine(file)){
        if (line.length == w.length){
            if(compareWords(w,line)){
                return.add(line);
            }

        }
    }

    return anagram;
}


private boolean compareWords(String a , String b){
    boolean iguais = true;
    String remaining = b;

    for(int i =0; i < a.length ; i++){
        if(!b.contains(remaining.get(i))){
            return false;
        } else{
            remaining = removeChar(a, i);

        }
    }

    return iguais;

}


private String removeChar(String b, int i){

    return b.substring(0,i-1).concat(b.substring(i, b.length-1));
}